import { useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [fullName, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [counter, setCounter] = useState(0);


 
// If you only update fullName, totalPrice won’t recalculate.

// It recalculates only when price or qty changes.

// This saves performance when:

// You do heavy calculations (loops, filtering, sorting, etc.)

// You work with large datasets.

// You want to prevent child components from re-rendering unnecessarily.
  // ✅ useMemo: recalculates only if price or qty changes
  const totalPrice = useMemo(() => {
    console.log("🧮 Recalculating Total Price...", Date.now());
    return (Number(qty) || 0) * (Number(price) || 0);
  }, [qty, price]);

  return (
    <div className="py-5 min-vh-100">
      <div className="container text-center">
        {/* Child will only re-render if fullName changes */}
        <Child fullName={fullName} />

        <h1 className="fw-bold text-primary mb-5">
          Total Price: <span className="text-success">{totalPrice}</span>
        </h1>

        <p>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </p>
        <p>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
        </p>
        <p>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            placeholder="Qty"
          />
        </p>

        {/* Counter button to show how memo prevents re-renders */}
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          Increase Counter
        </button>

        <h3 className="mt-3">Counter: {counter}</h3>
      </div>
    </div>
  );
};

export default Parent;
