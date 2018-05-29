import React, { Component } from 'react';
import axios from 'axios';
import Pair from '../Pair/Pair';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: []
    }
  }  
  componentDidMount() {
    axios.get('https://api.exmo.com/v1/ticker/')
      .then(response => {
        return JSON.parse(response.request.response)
      })
      .then(res => {
        console.log(res);
        const arr = []
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            const element = res[key];
            element.pair = key
            arr.push(element)
          }
        }
        this.setState({
          pairs: arr
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Сам себе трэйдер</h1>
        </header>
        <div className="content">
          <h3 className="subtitle">Валютные пары</h3>
          <section className="container">
              {
                this.state.pairs.map((el, i) => (
                <Pair 
                  key={String(i)}
                  pairHead={el.pair}
                  buyPrice={Number(el.buy_price).toFixed(5)}
                />
                ))
              }
          </section>
        </div>
      </div>
    );
  }
}

export default App;
