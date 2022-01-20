import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {title: '', type: 'INCOME', amount: '', history: []}

  input = (e, data) => {
    this.setState({[data]: e.target.value})
  }

  del = e => {
    this.setState(p => ({history: p.history.filter(data => data.id !== e)}))
  }

  add = e => {
    e.preventDefault()
    this.setState(p => ({
      history: [
        ...p.history,
        {
          id: uuidv4(),
          title: p.title ? p.title : 'Title',
          type: p.type === 'INCOME' ? 'Income' : 'Expenses',
          amount: p.amount ? Math.abs(p.amount) : '0',
        },
      ],
      title: '',
      type: 'INCOME',
      amount: '',
    }))
  }

  render() {
    const {title, type, amount, history} = this.state
    console.log(title, type, amount)
    return (
      <div className="main">
        <div className="bg">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="moneytext">Money Manager</span>
          </p>
        </div>
        <MoneyDetails data={history} />
        <div className="container2">
          <form onSubmit={e => this.add(e)}>
            <h1 className="addtransaction">Add Transaction</h1>
            <div className="item">
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                required
                value={title}
                onChange={e => this.input(e, 'title')}
              />
            </div>
            <div className="item">
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                required
                placeholder="AMOUNT"
                value={amount}
                onChange={e => this.input(e, 'amount')}
              />
            </div>
            <div className="item">
              <label htmlFor="type">TYPE</label>
              <select
                id="type"
                onChange={e => this.input(e, 'type')}
                value={type}
              >
                {transactionTypeOptions.map(e => (
                  <option value={e.optionId} key={e.optionId}>
                    {e.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Add</button>
          </form>
          <TransactionItem history={history} del={this.del} />
        </div>
      </div>
    )
  }
}

export default MoneyManager
