import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Costs.css';
import { Link } from 'react-router-dom';
import today from '../Today.js'

class Costs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: 'Food',
            date: today(),
            sum: '',
            comment: ''
        }
        this.onchangeCategories = this.onchangeCategories.bind(this)
        this.dateOnchange = this.dateOnchange.bind(this)
        this.sumOnchange = this.sumOnchange.bind(this)
        this.commentOnchange = this.commentOnchange.bind(this)

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

    commentOnchange(event) {
        let comment = event.target.value
        this.setState({ comment: comment })
    };

    // today() {
    //     let d = new Date();
    //     let currDate = d.getDate();
    //     let currMonth = d.getMonth() + 1;
    //     let currYear = d.getFullYear();
    //     return currYear + "-" + ((currMonth < 10) ? '0' + currMonth : currMonth) + "-" + ((currDate < 10) ? '0' + currDate : currDate).toLocaleString();
    // } 

    render() {
        let res = today()
        return (
            <div className='Costs-container'>
                {this.props.data ?
                    <select onChange={this.onchangeCategories}>{this.props.data.map(categories =>
                        categories.costs && <option key = {categories.id} value={categories.name}
                            >{categories.name}</option>)}</select> : null}
                    <input type='text' placeholder='comments' onChange={this.commentOnchange} />
                    <input type="date" onChange={this.dateOnchange} defaultValue={res}  />
                    <input type='text' onChange={this.sumOnchange} />
                    <button onClick={() => this.props.onSend2(this.state.categories, this.state.date, this.state.sum, this.state.comment)}>OK</button>
            </div>
        )
    }
}

export default connect(state => ({ data: state.getCategories.categories }))(Costs);