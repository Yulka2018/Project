import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Income.css';
import Header2 from './Header2.js';
import { Redirect } from 'react-router-dom';
import today from '../Today.js'


class Income extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: '',
            date: today(),
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
        this.setState({ date: date })
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


    render() {
        let res = today()
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(this.state)
        return (
            <div>
                <Header2 />
                <div className='Main-Income'>
                    <div className='Income'>
                        <form className='Сontainer'>
                            <h1  >Income</h1>
                            <div className='checbox'>
                                    {this.props.data ?
                                        this.props.data.map(categories =>
                                            categories.income && categories.name && <div key={categories.id}> <input type='radio' name='income' value={categories.name}
                                                onClick={this.onchangeCategories} required /><label htmlFor={categories.name}>{categories.name}</label></div>) : null}
                            </div>
                            <input type="date" defaultValue={res} onChange={this.dateOnchange} />
                            <input type='text' placeholder='sum' onChange={this.sumOnchange}  value = {this.state.sum} required />
                            <input type='text' placeholder='comments' onChange={this.commentChange} value = {this.state.comments}/>
                            <button onClick={(event) => this.state.categories && this.state.sum &&
                                this.props.onSend(this.state.categories, this.state.date, this.state.sum, this.state.comments, event)}>OK</button>
                               {this.props.sendData.message ?  <h3>{this.props.sendData.message.message}</h3> : null}
                        </form>
                        
                    </div> 
                </div>
            </div>
           )

    }
}
export default connect(state => ({ data: state.getCategories.categories, sendData: state.sendData }))(Income);