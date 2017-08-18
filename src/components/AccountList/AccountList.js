
import React, { Component } from 'react'
import './AccountList.css'

class AccountList extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {};
    }

    updateCurrentAccount = (account) => {
        const { handleAccountSelect } = this.props;
        console.log(this, account)
        handleAccountSelect(account);
    };

    getTicketsForBalance = (balance) => {
        return balance/2;
    }

    render() {
      return (
        <table>
        <thead>
          <tr>
              <td>Account Number</td>
              <td>Coins</td>
              <td>Tickets</td>
          </tr>
        </thead>
        <tbody>
          {this.props.accounts.map(this.renderAccount)}
        </tbody>
      </table>
    )
  }

  renderAccount = ({account, balance}) => {
      return (
        <tr key={account} onClick={() => this.updateCurrentAccount(account)}>
            <td>{account}</td>
            <td>{balance.account}</td>
            <td>{this.getTicketsForBalance(balance.account)}</td>
        </tr>
    )
  }
}

export default AccountList
