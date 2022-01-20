import {Component} from 'react'
import './index.css'

// History

class TransactionItem extends Component {
  render() {
    const {history, del} = this.props
    const emp = ''
    return (
      <div className="historydiv">
        <h1 className="history">History</h1>
        <ul className="ul">
          <li className="li" key="tulip">
            <p className="heading">Title</p>
            <p className="heading">Amount</p>
            <p className="heading">Type</p>
            <p className="heading">{emp}</p>
          </li>
          <hr />
          {history.map(e => (
            <li className="lii" key={e.id}>
              <p>{e.title}</p>
              <p>{e.amount}</p>
              <p>{e.type}</p>
              <button
                className="button"
                type="button"
                onClick={() => del(e.id)}
                testid="delete"
              >
                <img
                  className="delete"
                  src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                  alt="delete"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
TransactionItem.defaultProps = {
  history: [{title: 'Car', type: 'Type', amount: '5000'}],
}
export default TransactionItem
