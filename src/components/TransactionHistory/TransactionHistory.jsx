import PropTypes from 'prop-types';  
import css from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return (
      <table className={css.transaction_history}>
  <thead className={css.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody>
    {items.map(({ id, type, amount, currency }, index) => (
      <tr key={id} className={index % 2 === 0 ? css.even_row : css.odd_row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))}
      </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;