import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ReactDataGrid from 'react-data-grid';
import { connect } from 'react-redux';
import { Toolbar, Data, Filters, Editors } from "react-data-grid-addons";
import { sendDataPending, sendDataResolved, sendDataRejected } from '../Redux/ActionCreators.js';
import { authHeader } from '../Main/HeaderJwt.js';
import changeCosts from '../Redux/ChangeCosts.js';



const selectors = Data.Selectors;
const {
    NumericFilter,
    AutoCompleteFilter,
    MultiSelectFilter,
    SingleSelectFilter
} = Filters;


let { DropDownEditor } = Editors;

class DataGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [{ key: 'id', name: 'Id', filterable: true, filterRenderer:  NumericFilter },
            { key: 'date', name: 'Date', filterable: true, filterRenderer: SingleSelectFilter},
            { key: 'issueType', name: 'Category', filterable: true, filterRenderer: SingleSelectFilter, editable: true},
            { key: 'sum', name: 'Sum', filterable: true, filterRenderer: SingleSelectFilter, editable: true}],
            rows: [],
            filters: {},

        }

        this.getRow = this.getRow.bind(this)
        this.getValidFilterValues = this.getValidFilterValues.bind(this)
        this.getRows = this.getRows.bind(this)
        this.handleFilterChange = this.handleFilterChange.bind(this)
        this.rowsUpdated = this.rowsUpdated.bind(this)
        this.getEditor = this.getEditor.bind(this)
        this.emptyRowsView = this.emptyRowsView.bind(this)
    }

    handleFilterChange = filter => filters => {
        const newFilters = { ...filters };
        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }
        return { filters: newFilters };
    };

    getRow() {
        let id = 0
        let arr = this.props.costs ? this.props.costs.slice(this.props.costs.length - 50, this.props.costs.length) : null
        const rows = arr ? arr.map((data, index) => ({ id: index+1, id2: data.id, date: data.date, issueType: data.Category.name, sum: data.costsSum })) : null
        return { rows: rows }
    }

    getValidFilterValues(rows, columnId) {
        return rows
            .map(r => r[columnId])
            .filter((item, i, a) => {
                return i === a.indexOf(item);
            });
    }

    getRows(rows, filters) {
        return selectors.getRows({ rows, filters });
    }


    rowsUpdated = ({ fromRow, toRow, updated }) => {
        const rows = this.state.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
            rows[i] = { ...rows[i], ...updated };
            console.log(rows[i])
            return this.props.onGridRowsUpdated(rows[i].issueType, rows[i].sum, rows[i].id2)
        }
    }

    getEditor() {
        let arr = this.props.categories ? this.props.categories.filter(data => data && data.costs == true) : null
       // console.log(arr)
        let arr2 = arr.map(data => ({ id: data.name, value: data.name }))
        let IssueTypeEditor = <DropDownEditor options={arr2} />;
        return IssueTypeEditor
    }

    emptyRowsView = () => {
        const message = "Loading...";
        return (
            <div
                style={{ textAlign: "center", backgroundColor: "#ddd"}}>
                <img src="../cat.jpg" alt={message} />
                <h3>{message}</h3>
            </div>
        );
    };

    componentWillReceiveProps() {
        this.setState(this.getRow())
        const columns = [...this.state.columns]
        columns[2].editor = this.getEditor()
        this.setState({ columns: columns })
    }

    render() {
        const filteredRows = this.getRows(this.state.rows, this.state.filters);
        return (
            <div>
                {this.state.columns[2].editor && (this.state.columns[2].editor.props.options.length > 0) ?
                    <ReactDataGrid
                        columns={this.state.columns}
                        rowGetter={i => filteredRows[i]}
                        toolbar={<Toolbar enableFilter={true} />}
                        onAddFilter={filter => this.setState(this.handleFilterChange(filter))}
                        onClearFilters={() => this.setState({ filters: {} })}
                        getValidFilterValues={columnKey => this.getValidFilterValues(this.state.rows, columnKey)}
                        rowsCount={filteredRows.length}
                        minHeight={500}
                        onGridRowsUpdated={this.rowsUpdated}
                        enableCellSelect={true}
                        emptyRowsView={this.emptyRowsView}
                    />

                    : null}
            </div>
        )
    }
}
export default connect(state => ({ costs: state.getCosts.costs, categories: state.getCategories.categories }), { onGridRowsUpdated: changeCosts })(DataGrid);