import React, { Component } from 'react';
import axios from 'axios';
import PairsList from '../PairsList/PairsList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: [],
      statistics: [],
    };
  }
  componentDidMount() {
    axios.get('https://api.exmo.com/v1/ticker/')
      .then(response => JSON.parse(response.request.response))
      .then((res) => {
        const arr = Object.keys(res).map(el => Object.assign({}, res[el], { pair: el }));
        const storage = JSON.parse(localStorage.getItem('pairs'));
        let statistics = [];
        if (storage === null) {
          localStorage.setItem('pairs', JSON.stringify(arr));
          statistics.length = arr.length;
          statistics.fill('without changes');
        } else {
          statistics = arr.map((el, i) => {
            if (el.buy_price > storage[i].buy_price) {
              return 'up';
            } else if (el.buy_price < storage[i].buy_price) {
              return 'down';
            }
            return 'without changes';
          });
        }
        this.setState({
          pairs: arr,
          statistics,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Сам себе трэйдер</h1>
        </header>
        <PairsList
          pairs={this.state.pairs}
          statistics={this.state.statistics}
        />
      </div>
    );
  }
}

export default App;
