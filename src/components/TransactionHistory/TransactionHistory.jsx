import PropTypes from 'prop-types';
import TransactionBody from '../TransactionItems/TransactionBody/TransactionBody';
import TransactionHead from '../TransactionItems/TransactionHead/TransactionHead';

import s from './TransactionHistory.module.css';

function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <TransactionHead />
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id} className={s.tbodyItem}>
            <TransactionBody
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
