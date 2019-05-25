import React, {Component} from 'react'
import {connect} from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props)
        this.getRandomColor= this.getRandomColor.bind(this)
    }
   getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }

          
    render(){
        
        let costsArr = this.props.costs ? this.props.costs.map(costs => parseInt(costs.costsSum))
: null
        const data = {
            labels: this.props.costs.map(costs => costs.Category && costs.Category.name),
            datasets: [{
                label: '# of Votes',
                data: costsArr,
                backgroundColor:[
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)', 
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
        return(
            <Doughnut data={data} />
        )
        }
    }
export default connect (state => ({costs: state.getCosts.costs}))(Chart);
