import React, { memo } from "react";

function ContentUseCallback({ onIncrease }) {
  return (
    <>
      <div>Chào cả nhà</div>
      <button onClick={onIncrease}>Click here</button>
    </>
  );
}

export default memo(ContentUseCallback);
