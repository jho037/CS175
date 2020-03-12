import Chart from './Chart';
import React from 'react';
export default class Bigchart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            pieData: {},
            lineData: {},
            categories: [],
            pamounts: [],
            dates: [],
            lamounts: []
        }
    }

    componentDidMount() {
        var dataCat = [];
        var dataAmo = [];
        fetch("http://localhost:9000/users/pieChartTrans", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.props.user
            })
        })
            .then(response => response.json())
            .then(res => {
                this.getChartData(res.categories, res.pamounts)
            });
        
        fetch("http://localhost:9000/users/lineChartTrans", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.props.user
            })
        })
            .then(response => response.json())
            .then(res => {
                this.getChartData(res.dates, res.lamounts)
            });

    }
    // setHandler = (cat, amo) => {
    //     console.log(cat);
    //     console.log(amo);
    //     this.setState({ categories: cat, amounts: amo })
    //     console.log(this.state.categories);
    //     console.log(this.state.amounts);
    //     this.getChartData();
    // }
    getChartData(cat, amo) {
        this.setState({
            // chartData: {
            pieData: {
                labels: cat,
                datasets: [{
                    label: 'Colors',
                    data: amo,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ]
                }
                ]
            },
            lineData: {
                labels: cat,
                datasets: [{
                    label: 'Dates',
                    data: amo,
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)'
                    ]
                }]
            }
        });
    }

    render() {
        return (
            <div className="Bigchart">
                <Chart chartData={this.state.chartData} legendPosition="bottom" />
            </div>
        )
    }
}