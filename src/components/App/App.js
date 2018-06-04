import React, { Component } from 'react';
import PairsList from '../PairsList/PairsList';
import Popup from '../Popup/Popup';
import API from '../../API';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: [],
      statistics: [],
      popupData: {
        pairData: {},
        classPopup: 'hide',
        iconClass: '',
      },
    };
    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
  }
  componentDidMount() {
    API()
      .then((res) => {
        this.setState({
          pairs: res.arr,
          statistics: res.statistics,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  showPopup(popupData, iconClass) {
    this.setState({
      popupData: {
        pairData: popupData,
        classPopup: 'show',
        iconClass,
      },
    });
  }
  hidePopup() {
    this.setState({
      popupData: {
        classPopup: 'hide',
        iconClass: '',
        pairData: {},
      },
    });
  }
  render() {
    // console.log(this.state.pairs);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Сам себе трэйдер</h1>
        </header>
        <PairsList
          pairs={this.state.pairs}
          statistics={this.state.statistics}
          showPopup={this.showPopup}
        />
        <Popup
          popupData={this.state.popupData}
          hidePopup={this.hidePopup}
        />
      </div>
    );
  }
}

export default App;
