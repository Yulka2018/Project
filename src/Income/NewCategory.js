import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
        }

        this.onchangeCategory = this.onchangeCategory.bind(this)
    }
    onchangeCategory(event) {
        let categoryValue = event.target.value
        console.log(categoryValue)
        this.setState({ category: categoryValue })
    };
    render(){
        return (
            <div>
                <input type='text' onChange={this.onchangeCategory} />
                <button onClick={() => this.props.AddCategory(this.state.category)}>OK</button>
            </div>)
    }
}
export default NewCategory;