import PropTypes from 'prop-types';

import s from './StatisticItems.module.css';

function StatisticItems({label, percentage}){
    return(
    <>
        <span className = {s.label}>{label}</span>
        <span className = {s.percentage}>{percentage}%</span>
    </>
    );
    }

    StatisticItems.propTypes = {
        label: PropTypes.string,
        percentage: PropTypes.number,
    };

    export default StatisticItems;