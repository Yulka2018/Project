import React, {Component} from 'react';
import { connect } from 'react-redux';


class Balance extends Component{
    render(){
        let incomeArr = this.props.income ? this.props.income.map(income => parseInt(income.incomeSum)): null
        let costsArr = this.props.costs ? this.props.costs.map(costs => parseInt(costs.costsSum)): null
        //console.log(costsArr)
        let allIncome = incomeArr ? incomeArr.reduce(function(prevVal, currentVal){
                    return  prevVal+currentVal
                },0) : null
            
        let allCosts = costsArr ? costsArr.reduce(function(prevVal, currentVal){
                    return  prevVal+currentVal
                },0) : null
        let balance = allIncome-allCosts
        // console.log('Income:' + allIncome)
        // console.log('Costs:' + allCosts)
        return(
            <div style = {{textAlign: 'right'}}>{'Balance:' + balance }</div>
        )
    }
}
 export default connect (state => ({income: state.getIncome.income, costs: state.getCosts.costs}))(Balance);
    
 