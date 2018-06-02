import React, { Component } from 'react';
import PairsList from '../PairsList/PairsList';
import API from '../../API';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: [],
      statistics: [],
      activeList: [],
    };
    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
  }
  componentDidMount() {
    API()
      .then((res) => {
        const activeList = [];
        activeList.length = res.arr.length;
        activeList.fill('hide');
        this.setState({
          pairs: res.arr,
          statistics: res.statistics,
          activeList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  showPopup(el) {
    this.changeStatusPopup(el, 'show');
  }
  hidePopup(el) {
  //  const arr = [...this.state.activeList];
  //  arr[el] = 'hide';
  //  console.log(arr);
  //  this.setState({
  //    activeList: [],
  //  });
  //  console.log(this.state.activeList);
    this.changeStatusPopup(el, 'hide');
  }
  changeStatusPopup(el, status) {
    const arr = [...this.state.activeList];
    arr[el] = status;
    this.setState({
      activeList: arr,
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
          activeList={this.state.activeList}
          showPopup={this.showPopup}
          hidePopup={this.hidePopup}
        />
      </div>
    );
  }
}

export default App;
