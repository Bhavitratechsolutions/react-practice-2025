import React, { useEffect, useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // Always return a cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const handleStart = () => {
    if (!intervalId) {
      let id = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null); // ✅ reset state
    }
  };

  const handleReset = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null); // ✅ reset state
    }
    setCounter(0);
  };

  return (
    <div className="py-5 min-vh-100">
      <div className="container text-center">
        <h1 className="fw-bold text-primary mb-5">
          Counter <span className="text-success">{counter}</span>
        </h1>
        <button type="button" className="btn btn-success" onClick={handleStart}>
          Start
        </button>{" "}
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={handleStop}>
          Stop
        </button>{" "}
        &nbsp;
        <button type="button" className="btn btn-warning" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseState;
