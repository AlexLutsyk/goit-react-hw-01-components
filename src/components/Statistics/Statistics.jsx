import PropTypes from 'prop-types';

import StatisticHeader from '../StatisticHeader/StatisticHeader';
import StatisticItems from '../StatisticItems/StatisticItems';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <div className={s.statistic}>
      <section className={s.statics}>
        <StatisticHeader title={title} />
        <ul className={s.statList}>
          {stats.map(stat => (
            <li key={stat.id} className={s.item}>
              <StatisticItems label={stat.label} percentage={stat.percentage} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
