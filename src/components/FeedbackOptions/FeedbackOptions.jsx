import classes from './FeedbackOptions.module.css';

const FeedbackOptions = ({ buttonHandler, options }) => {
  return (
    <div className={classes['button-bar']}>
      {Object.keys(options).map(buttonName => (
        <button
          className={classes.button}
          key={buttonName}
          onClick={() => buttonHandler(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
