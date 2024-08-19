import React, { useEffect, useState } from "react";

function CounterUpCom({ endValue = 0 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const setTime =
      endValue <= 99
        ? 50
        : endValue <= 999
        ? 5
        : endValue <= 9999
        ? 1
        : endValue <= 99999
        ? 0.5
        : 0.5;
    const id = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, setTime);
    if (count === endValue) {
      clearTimeout(id);
    }
    return () => {
      clearTimeout(id);
    };
  }, [count, endValue]);
  return (
    <>
      <span>{count}</span>
    </>
  );
}

export default CounterUpCom;
