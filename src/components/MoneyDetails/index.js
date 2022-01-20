import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {data} = this.props
    let income = 0
    let expences = 0
    for (let i = 0; i <= data.length - 1; i += 1) {
      if (data[i].type === 'Income') {
        income += parseInt(data[i].amount)
      } else {
        expences += parseInt(data[i].amount)
      }
    }
    if (income === 0) {
      expences = 0
    }

    return (
      <div className="itembox">
        <div className="container balance">
          <img
            className=""
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <p>Your Balance</p>
          <p testid="balanceAmount" className="span">
            Rs {income - expences}
          </p>
        </div>
        <div className="container amount">
          <img
            className=""
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
          />
          <p>Your Income</p>
          <p testid="incomeAmount" className="span">
            Rs {income}
          </p>
        </div>
        <div className="container type">
          <img
            className=""
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <p>Your Expenses</p>
          <p testid="expensesAmount" className="span">
            Rs {expences}
          </p>
        </div>
      </div>
    )
  }
}
MoneyDetails.defaultProps = {
  data: [],
}

export default MoneyDetails
