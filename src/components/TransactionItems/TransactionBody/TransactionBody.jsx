import PropTypes from 'prop-types';

import s from './TransactionBody.module.css';

function TransactionBody({ type, amount, currency }) {
  return (
    <>
      <td className={s.tdBody}>{type}</td>
      <td className={s.tdBody}>{amount}</td>
      <td className={s.tdBody}>{currency}</td>
    </>
  );
}

TransactionBody.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionBody;
