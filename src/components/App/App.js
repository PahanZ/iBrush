// @flow

import * as React from 'react';
import Header from '../Header/Header';
import PairsList from '../PairsList/PairsList';
import PairDetails from '../PairDetails/PairDetails';
import getTicker from '../../API/ticker';
import getOrderBook from '../../API/orderBook';
import Preloader from '../Preloader/Preloader';
import './App.css';

type AppState = {
  pairs: Array<Object>,
  preloaderIsActive: bool,
  statistics: Array<bool>,
  pairDetailsData: {
    pairData: Object,
    isOpen: bool,
    pairStatus: bool | number,
    sale: Array<number>,
    buy: Array<number>,
  },
}

class App extends React.Component<null, AppState> {
  state = {
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
  componentDidMount() {
    this.getTickers()
      .then(() => {
        this.setState({
          preloaderIsActive: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getTickers(): Object {
    return getTicker.getTicker()
      .then((res) => {
        this.setState({
          pairs: res.arr,
          statistics: res.statistics,
        });
      });
  }
  showPairDetails = (index: number) => {
    this.setState({
      preloaderIsActive: true,
    });
    this.getTickers()
      .then(() => {
        const pairData = this.state.pairs[index];
        const status = this.state.statistics[index];
        getOrderBook.getOrderBook(pairData.pair)
          .then((res) => {
            this.setState({
              pairDetailsData: {
                pairData,
                isOpen: true,
                pairStatus: status,
                sale: res.ask,
                buy: res.bid,
              },
              preloaderIsActive: false,
            });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  hidePairDetails = () => {
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
      <React.Fragment>
        <Preloader preloaderIsActive={this.state.preloaderIsActive} />
        <div className={`App ${isOpen ? 'popup_open' : 'popup_hide'}`}>
          <Header />
          <PairsList
            pairs={this.state.pairs}
            statistics={this.state.statistics}
            showPairDetails={this.showPairDetails}
          />
          <PairDetails
            pairDetailsData={this.state.pairDetailsData}
            hidePairDetails={this.hidePairDetails}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
