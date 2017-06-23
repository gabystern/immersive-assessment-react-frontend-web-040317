import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import TransactionsAdapter from './adapters'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let searchTerm = event.target.value
    this.setState({
      searchTerm
    })
  }

  componentDidMount(){
    TransactionsAdapter.all()
    .then((transactions) => {
      this.setState({
        transactions
      })
    })
  }

  matchingTransactions(){
    return this.state.transactions.filter(t => this.transactionMatches(t, this.state.searchTerm))
  }

  transactionMatches(transaction, searchTerm){
    return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={(event) => this.handleChange(event)} />
        <TransactionsList transactions={matchingTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
