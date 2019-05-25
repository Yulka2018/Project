import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Income.css';
import Header2 from './Header2.js';
import {Link} from 'react-router-dom';



class Income extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: '',
            date: '',
            sum: '',
        }

        this.onchangeCategories = this.onchangeCategories.bind(this)
        this.dateOnchange = this.dateOnchange.bind(this)
        this.sumOnchange = this.sumOnchange.bind(this)
    }
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
            <div className='Income-container'>
                <Header2 />
                <h1>Income categories</h1>
                {this.props.data ?
                    this.props.data.map(categories =>
                        categories.income && <div key={categories.id}> <input type='radio' name='income' value={categories.name}
                            onClick={this.onchangeCategories} /><label htmlFor={categories.name}>{categories.name}</label></div>) : null}
                <input type="date" onChange={this.dateOnchange} />
                <div><input type='text' onChange={this.sumOnchange} />
                    <button onClick={() => this.props.onSend(this.state.categories, this.state.date, this.state.sum)}>OK</button></div>
                    <Link to = '/newCategory'>New category</Link>
            </div>)
    }
}
export default connect(state => ({ data: state.getCategories.categories }))(Income);