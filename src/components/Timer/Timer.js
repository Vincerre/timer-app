import styles from "./Timer.module.scss";

const Timer = ({ time }) => {
  const formatTime = (milliseconds) => {
    let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let miliseconds = Math.floor(milliseconds % 1000);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(3, "0");

    return `${hours}:${minutes}:${seconds}.${miliseconds}`;
  };

  return <div className={styles.formatter}>{formatTime(time)}</div>;
};

export default Timer;
