import React, { Component } from 'react';

import './App.css'

import AccountListContainer from 'components/AccountList/AccountListContainer'
import EventsContainer from './components/Events/EventsContainer';

class App extends Component {
  render () {
    const { web3 } = this.props;

    return (
        <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <AccountListContainer web3={web3} />
          <EventsContainer web3={web3}/>
        </div>
    )
  }
}

export default App;
