import PropTypes from 'prop-types';

import StatisticItems from '../StatisticItems/StatisticItems';
import s from './Statistics.module.css';

function Statistics({stats}){
    return (
        <div className = {s.statistic}>
            <section className = {s.statics}>
                <h2 className = {s.title}>Upload stats</h2>
                <ul className = {s.statList}>
                    {stats.map((stat) => (
                        <li 
                        key = {stat.id}
                        className = {s.item}
                    >
                        <StatisticItems label = {stat.label} percentage = {stat.percentage}/>
                    </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        })
      ),
};

export default Statistics;