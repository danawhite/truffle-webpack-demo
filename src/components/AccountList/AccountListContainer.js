import React, { Component } from 'react'
import AccountList from './AccountList';
import SendCoin from '../SendCoin/SendCoin'
import EventsContainer from '../Events/EventsContainer';

import MetaCoin from 'contracts/MetaCoin.sol';


class AccountListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [],
      coinbase: '',
      ticketPrice: '10'
    };

    this._getAccountBalance = this._getAccountBalance.bind(this)
    this._getAccountBalances = this._getAccountBalances.bind(this)
  }

  componentWillMount(){
    MetaCoin.setProvider(this.props.web3.currentProvider);
  }

    componentDidMount() {
        const refreshBalances = () => {
            this._getAccountBalances()
        };

        refreshBalances();

        setInterval(()=>{
            refreshBalances();
            return refreshBalances
        }, 5000)
    }

  _getAccountBalance  = (account) => {
    var meta = MetaCoin.deployed();
    return new Promise((resolve, reject) => {
      meta.getBalance.call(account, {from: account}).then(function (value) {
        resolve({ account: value.valueOf() })
      }).catch(function (e) {
        console.log(e)
        reject()
      })
    })
  };

  _getAccountBalances = () => {
    this.props.web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        window.alert('There was an error fetching your accounts.')
        console.error(err);
        return
      }

      if (accs.length === 0) {
        window.alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
        return
      }

      this.setState({coinbase: accs[0]})

      var accountsAndBalances = accs.map((account) => {
        return this._getAccountBalance(account)
            .then((balance) => { return { account, balance } })
      })

      Promise.all(accountsAndBalances).then((accountsAndBalances) => {
        this.setState({
            accounts: accountsAndBalances,
            coinbaseAccount: accountsAndBalances[0]
        })
      })
    }.bind(this))
  };

  updateSelectedAccount = (account) => {
    this.setState({
        selectedAccount: account
    })
  };

  handlePurchase = (event, account, quantity) => {
      const { coinbase, ticketPrice, accounts } = this.state;

      let totalPrice = ticketPrice * quantity.value;

      let sender = accounts[accounts.indexOf(account)].account;
      console.log('onPurchase', coinbase, totalPrice, event, sender, quantity);
      const meta = MetaCoin.deployed();
      console.log(`Recipient Address: ${coinbase}`);

      meta.sendCoin(coinbase, totalPrice, {from: sender}).then(function() {
          console.log(`Coins sent for ${quantity.value} tickets from ${sender} to ${coinbase}`)
      }).catch(function(e) {
          console.log(e);
      });
  };

  render() {
    const {accounts, selectedAccount, coinbase} = this.state;
    return (
        <div style={{display: 'flex', flex: 1, flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'flex-start'}}>
          <div>
            <AccountList accounts={accounts}
                         handleAccountSelect={this.updateSelectedAccount}
            />
            <SendCoin sender={coinbase} account={selectedAccount}/>
          </div>
          <div>
            <EventsContainer accounts={accounts}
                             handleOpenModal={() => console.log('Kevin')}
                             onPurchase={this.handlePurchase}
            />
          </div>
        </div>
    )
  }
}

export default AccountListContainer
