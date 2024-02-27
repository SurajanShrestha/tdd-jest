import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const up = () => {
    setCount(count + 1);
  };

  const down = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <h3 data-testid="counter">Count 🔢: {count}</h3>
      <button onClick={up} data-testid="count-upx" style={{ marginRight: 8 }}>
        Increase Count
      </button>
      <button onClick={down} data-testid="count-down">
        Decrease Count
      </button>
    </div>
  );
};
