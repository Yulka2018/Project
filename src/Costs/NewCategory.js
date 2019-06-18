import React, { Component } from 'react';
import Header2 from '../Income/Header2.js';
import { connect } from 'react-redux';
import './NewCategory.css'

class NewCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            type: ''

        }

        this.onchangeCategory = this.onchangeCategory.bind(this)
        this.onchangeType = this.onchangeType.bind(this)
    }
    onchangeCategory(event) {
        let categoryValue = event.target.value
        console.log(categoryValue)
        this.setState({ category: categoryValue })
    };

    onchangeType(event) {
        let type = event.target.value
        console.log(type)
        this.setState({ type: type })
    };

    render() {
        return (
            <div>
                <Header2 />
                <div className='Main-Category'>
                    <div className='Category'>
                        <div className='Сontainer'>
                            <h1 >New Category</h1>
                            <div>
                                <input type='radio' name='category type' value={'income'}
                                    onChange={this.onchangeType} /><label htmlFor={'income'}>Income</label>
                                <input type='radio' name='category type' value={'costs'}
                                    onChange={this.onchangeType} /><label htmlFor={'costs'}>Cost</label></div>

                            <input type='text' onChange={this.onchangeCategory} placeholder='Category' />
                            <button onClick={() => this.state.category && this.state.type &&  
                                this.props.addCategory(this.state.category, this.state.type)}>OK</button>
                                {this.props.sendData.message ?  <h3>{this.props.sendData.message.msgCategory}</h3> : null}
                        </div>
                    </div>
                </div>
            </div>)
    }
}
export default connect (state => ({sendData: state.sendData}))(NewCategory);