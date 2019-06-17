import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Income.css';
import Header2 from './Header2.js';
import { Link } from 'react-router-dom';
import today from '../Today.js'


class Income extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: '',
            date: this.today(),
            sum: '',
            comments: ''
        }

        this.onchangeCategories = this.onchangeCategories.bind(this)
        this.dateOnchange = this.dateOnchange.bind(this)
        this.sumOnchange = this.sumOnchange.bind(this)
        this.commentChange = this.commentChange.bind(this)
    }
    onchangeCategories(event) {
        let categoriesValue = event.target.value
        console.log(categoriesValue)
        this.setState({ categories: categoriesValue })
    };

    dateOnchange(event) {
        let date = event.target.value
        console.log(date)
        this.setState({ date: date})
    };

    sumOnchange(event) {
        let sum = event.target.value
        console.log(sum)
        this.setState({ sum: sum })
    };

    commentChange(event) {
        let comment = event.target.value
        this.setState({ comments: comment })
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
        //console.log(res)
        return (
            <div>
            <Header2 />
            <div className='Income-container'>
                <h1>Income</h1>
                {this.props.data ?
                    this.props.data.map(categories =>
                        categories.income && categories.name && <div key={categories.id}> <input type='radio' name='income' value={categories.name}
                            onClick={this.onchangeCategories} /><label htmlFor={categories.name}>{categories.name}</label></div>) : null}
                <input type="date" defaultValue={res} onChange={this.dateOnchange} />
               <div> <input type='text' placeholder = 'sum' onChange={this.sumOnchange} /></div>
                <div> <input type='text' placeholder='comments' onChange={this.commentChange} /></div>
                <button onClick={() => this.props.onSend(this.state.categories, this.state.date, this.state.sum, this.state.comments)}>OK</button>
                {/* <Link to='/newCategory'>New category</Link> */}
                </div>
            </div>)
    }
}
export default connect(state => ({ data: state.getCategories.categories }))(Income);