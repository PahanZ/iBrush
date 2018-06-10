import React, { Component, Fragment } from 'react';
import PairsList from '../PairsList/PairsList';
import PairDetails from '../PairDetails/PairDetails';
import getTicker from '../../API/ticker';
import getOrderBook from '../../API/orderBook';
import Preloader from '../Preloader/Preloader';
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
        pairStatus: 0,
        sale: [],
        buy: [],
      },
      preloaderIsActive: true,
    };
    this.showPairDetails = this.showPairDetails.bind(this);
    this.hidePairDetails = this.hidePairDetails.bind(this);
  }
  componentDidMount() {
    getTicker.getTicker()
      .then((res) => {
        this.setState({
          pairs: res.arr,
          statistics: res.statistics,
          preloaderIsActive: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  showPairDetails(popupData, pairStatus) {
    this.setState({
      preloaderIsActive: true,
    });
    getOrderBook.getOrderBook(popupData.pair)
      .then((res) => {
        this.setState({
          pairDetailsData: {
            pairData: popupData,
            isOpen: true,
            pairStatus,
            sale: res.ask,
            buy: res.bid,
          },
          preloaderIsActive: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  hidePairDetails() {
    this.setState({
      pairDetailsData: {
        isOpen: false,
        pairStatus: 0,
        pairData: {},
        sale: [],
        buy: [],
      },
    });
  }
  render() {
    const { isOpen } = this.state.pairDetailsData;
    return (
      <Fragment>
        <Preloader preloaderIsActive={this.state.preloaderIsActive} />
        <div className={`App ${isOpen ? 'popup_open' : 'popup_hide'}`}>
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
      </Fragment>
    );
  }
}

export default App;
