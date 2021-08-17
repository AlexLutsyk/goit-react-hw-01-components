import PropTypes from 'prop-types';

import s from './StatisticHeader.module.css';

function StatisticHeader({ title }) {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
    </>
  );
}

export default StatisticHeader;

StatisticHeader.propTypes = {
  title: PropTypes.string,
};
