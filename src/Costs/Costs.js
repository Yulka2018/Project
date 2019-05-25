import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Costs.css';
import Header2 from '../Income/Header2.js';
import { Link } from 'react-router-dom';

class Costs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: '',
            date: '',
            sum: ''
        }
        this.onchangeCategories = this.onchangeCategories.bind(this)
        this.dateOnchange = this.dateOnchange.bind(this)
        this.sumOnchange = this.sumOnchange.bind(this)

    };
    onchangeCategories(event) {
        let categoriesValue = event.target.value
        console.log(categoriesValue)
        this.setState({ categories: categoriesValue })
    };

    dateOnchange(event) {
        let date = event.target.value
        console.log(date)
        this.setState({ date: date })
    };

    sumOnchange(event) {
        let sum = event.target.value
        console.log(sum)
        this.setState({ sum: sum })
    };
    render() {
        return (
            <div className='Costs-container'>
                <Header2 />
                <h1>Costs categories</h1>
                {this.props.data ?
                    this.props.data.map(categories =>
                        categories.costs && <div> <input type='radio' name='costs' value={categories.name}
                            onClick={this.onchangeCategories} /><label htmlFor={categories.name}>{categories.name}</label></div>) : null}
                    <input type="date" onChange={this.dateOnchange} />
                    <div> <input type='text' onChange={this.sumOnchange} />
                    <button onClick={() => this.props.onSend2(this.state.categories, this.state.date, this.state.sum)}>OK</button></div>
                    <Link to='/newCategory'>New category</Link>
            </div>
        )
    }
}

export default connect(state => ({ data: state.getCategories.categories }))(Costs);