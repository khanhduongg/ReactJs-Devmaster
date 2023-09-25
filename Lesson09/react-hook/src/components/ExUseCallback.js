import React, { useCallback, useState } from "react";
import ContentUseCallback from "./ContentUseCallback";

function ExUseCallback() {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  });
  return (
    <div>
      <ContentUseCallback onIncrease={handleIncrease}></ContentUseCallback>
      <h2>{count}</h2>
    </div>
  );
}

export default ExUseCallback;
