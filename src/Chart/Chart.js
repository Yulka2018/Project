import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Doughnut, Bar } from 'react-chartjs-2';
import Header2 from '../Income/Header2.js';
import today from '../Today.js';
import './Chart.css'

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: [],
            datasets: [{
                label: 'Costs',
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1,
            }],
            period: {
                firstDate: today(),
                lastDate: today(),
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            },
            chartType: 'Doughnut',
        }

        this.getLabels = this.getLabels.bind(this)
        this.getCost = this.getCost.bind(this)
        this.getRandomColor = this.getRandomColor.bind(this)
        this.onchangeDoughnut = this.onchangeDoughnut.bind(this)
        this.onchangeBar = this.onchangeBar.bind(this)
        this.firstDate = this.firstDate.bind(this)
        this.lastDate = this.lastDate.bind(this)
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        } return color;
    }

    getLabels() {
        let firstDate = new Date(this.state.period.firstDate)
        let lastDate = new Date(this.state.period.lastDate)
        let arr = this.props.costs.filter(costs => new Date(costs.date) >= firstDate && new Date(costs.date) <= lastDate)
        console.log(arr)
        let arr2 = arr.map(costs => costs.Category && costs.Category.name)
        console.log(arr)
        let unique = [...new Set(arr2)];
        console.log(unique)
        return unique
    }

    getCost() {
        let color = []
        let costsArr = []
        let firstDate = new Date(this.state.period.firstDate)
        let lastDate = new Date(this.state.period.lastDate)
        for (let lable of this.state.labels) {
            let arr = this.props.costs ? this.props.costs.filter(costs => costs.Category && costs.Category.name == lable
                && new Date(costs.date) >= firstDate && new Date(costs.date) <= lastDate
            ) : null
            let arr2 = arr.map(data => parseInt(data.costsSum)).reduce(((result, num) => result + num), 0)
            costsArr.push(arr2)
            color.push(this.getRandomColor())
            console.log(arr, arr2)
        }

        return [{ label: 'Costs', data: costsArr, backgroundColor: color, borderColor: color }]
    }


    firstDate(event) {
        let date = event.target.value
        console.log(date)
        this.setState((prevState) => ({ period: { ...prevState.period, firstDate: date } }))
    };

    lastDate(event) {
        let date = event.target.value
        //console.log(date)
        this.setState((prevState) => ({ period: { ...prevState.period, lastDate: date } }))
    };

    onchangeDoughnut(event) {
        this.setState({
            chartType: event.target.value
        })
    }

    onchangeBar(event) {
        this.setState({
            chartType:  event.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        console.log(this.state.labels)
        let arr1 = JSON.stringify(nextProps.costs.map(obj => JSON.stringify(obj)))
        let arr2 = JSON.stringify(this.props.costs.map(obj => JSON.stringify(obj)))
        console.log((JSON.stringify(arr1) !== JSON.stringify(arr2)) ? 'не равно' : 'равно');
        if(arr1 !== arr2 || this.state.labels.length == 0 || this.state.datasets[0].data == 0){
        this.setState(state => ({ ...state, labels: this.getLabels() }))
        this.setState(state => ({ ...state, datasets: this.getCost() }))
        }
    }

    render() {
        let res = today()
        console.log(this.state)
        return (
            <div>
                <Header2 />
                <div>
                    <input type="date" onChange={this.firstDate} defaultValue={res} />
                    <input type="date" onChange={this.lastDate} defaultValue={res} />
                </div>
                <div>
                    <input type='radio' name='chart' value='Doughnut'  defaultChecked onClick={this.onchangeDoughnut}/><label htmlFor='Doughnut'>Doughnut</label>
                    <input type='radio' name='chart' value='Bar' onClick={this.onchangeBar}/><label htmlFor='Bar'>Bar</label>
                </div>
                {this.state.chartType === 'Doughnut' ? 
                    <Doughnut data={this.state} /> :
                        <Bar data={this.state} width={100} height={50} options={this.state.options} />}
            </div >
        )
    }
}
export default connect(state => ({ costs: state.getCosts.costs }))(Chart);
