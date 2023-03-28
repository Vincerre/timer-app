import Container from "./components/Container/Container";
import Timer from "./components/Timer/Timer";
import Button from "./components/Button/Button";
import { useState, useEffect } from "react";
import styles from "./App.module.scss";

const App = (props) => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState("");

  const start = () => {
    setTimer(
      setInterval(() => {
        setTime((preValue) => preValue + 100);
      }, 100)
    );
  };

  const stop = () => {
    setTimer("");
    clearInterval(timer);
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div className={styles.timer_wrapper}>
      <Timer time={time} />
      <Container>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
      </Container>
    </div>
  );
};

export default App;
