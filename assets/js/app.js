/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

import ReactDOM from "react-dom";
import React, { Component } from 'react';
import MaterialTable from 'material-table';

  class NumberForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        fetch("/random/by-month/"+this.state.value)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          Month Number:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  ReactDOM.render(
    <NumberForm />,
    document.getElementById('NumberForm')
  );
  
var options = {
    chart: {
      type: 'donut'
    },
    series: [544, 555, 541, 517, 315],
    chartOptions: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr']
}
  }
  
  var byMonthDonut = new ApexCharts(document.querySelector("#byMonthDonut"), options);
  
  byMonthDonut.render();

class App extends Component {
    render() {
      return (
        <div style={{ display: 'flex', justifyContent: 'center' , maxWidth: '100%' }}>
            <div style={{ justifyContent: 'center' , maxWidth: '50%' }}>
            <MaterialTable
                columns={[
                { title: 'Month', field: 'month' },
                { title: 'Number', field: 'number' }
                ]}
                data={[{ month: 'Jan', number: 12 }]}
                title="Random by Month"
            />
            </div>
            <div style={{ justifyContent: 'center' , maxWidth: '50%' }}>
            <MaterialTable
            columns={[
                { title: 'Day', field: 'day' },
                { title: 'Number', field: 'number' }
            ]}
            data={[{ day: '1', number: 132 }]}
            title="Random by Day"
            />
        </div>
      </div>
      )
    }
  }

ReactDOM.render(<App />, document.querySelector("#app"));
// ReactDOM.render(<App />, document.querySelector("#app"));