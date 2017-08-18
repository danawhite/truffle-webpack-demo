import React, { Component } from 'react';

import './App.css'

import AccountListContainer from 'components/AccountList/AccountListContainer'

class App extends Component {
  render () {
    const { web3 } = this.props;

    return (
        <div style={{display: 'flex', flex: 1, alignItems: 'center', margin: 20}}>
          <AccountListContainer web3={web3} />
        </div>
    )
  }
}

export default App;
