import React, { Component } from 'react';
import PairsList from '../PairsList/PairsList';
import PairDetails from '../PairDetails/PairDetails';
import getTicker from '../../API/getTicker';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: [],
      statistics: [],
      pairDetailsData: {
        pairData: {},
        isOpen: false,
        pairStatus: null,
      },
    };
    this.showPairDetails = this.showPairDetails.bind(this);
    this.hidePairDetails = this.hidePairDetails.bind(this);
  }
  componentDidMount() {
    getTicker()
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
  showPairDetails(popupData, pairStatus) {
    this.setState({
      pairDetailsData: {
        pairData: popupData,
        isOpen: true,
        pairStatus,
      },
    });
  }
  hidePairDetails() {
    this.setState({
      pairDetailsData: {
        isOpen: false,
        pairStatus: null,
        pairData: {},
      },
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
          showPairDetails={this.showPairDetails}
        />
        <PairDetails
          pairDetailsData={this.state.pairDetailsData}
          hidePairDetails={() => {
            this.hidePairDetails();
          }}
        />
      </div>
    );
  }
}

export default App;
