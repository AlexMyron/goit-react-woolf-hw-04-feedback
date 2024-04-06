import classes from './Statistics.module.css';

const STATS_LIST = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
  total: 'total',
  positivePercentage: 'Positive feedback',
};

const Statistics = props => {
  return (
    <>
      <ul>
        {Object.entries(STATS_LIST).map(([statName]) => (
          <li className={classes.item} key={statName}>
            <span className={classes.label}>{STATS_LIST[statName]}</span>:&nbsp;
            <span>
              {props[statName]}
              {statName === 'positive' && '%'}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Statistics;
