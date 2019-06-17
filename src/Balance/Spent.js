import React, {Component} from 'react';
import { connect } from 'react-redux';


class Spent extends Component{
    render(){
        //let today = new Date().toLocaleDateString()
        let costsArr = this.props.costs? this.props.costs.map(costs => parseInt(costs.costsSum)): null
        let allCosts = costsArr ? costsArr.reduce(function(prevVal, currentVal){
                    return  prevVal+currentVal
                },0) : 0
        console.log('Costs:' + allCosts)
        return(
            <div style = {{textAlign: 'right'}}>{'Spent:' + allCosts}</div>
        )
    }
}
 export default connect (state => ({costs: state.getCosts.costs}))(Spent);