import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // This function is recreated every render ❌
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;
