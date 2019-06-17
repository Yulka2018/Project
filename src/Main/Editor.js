import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Toolbar, Data, Filters, Editors } from "react-data-grid-addons";


const { DropDownEditor } = Editors;
class Editor extends Component {
    constructor(props) {
      super(props)
    }
  
  
    getInputNode() {
      return ReactDOM.findDOMNode(this).getElementsByTagName("input")[0];
    }
  
    render() {
      return (
        <DropDownEditor />
      );
    }
  }
  export default connect(state => ({ options: state.getCategories.categories.map(data => ({ id: data.id, value: data.name }))}))(Editor);