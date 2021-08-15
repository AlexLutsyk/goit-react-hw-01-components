import s from './TransactionHead.module.css';

function TransactionHead() {
  return (
    <>
      <th className={s.thHead}>Type</th>
      <th className={s.thHead}>Amount</th>
      <th className={s.thHead}>Currency</th>
    </>
  );
}

export default TransactionHead;
