import classes from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={classes.message}>{message}</p>;
};

export default Notification;
