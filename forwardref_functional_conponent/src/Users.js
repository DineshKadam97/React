import React, { forwardRef } from "react";

function Users(props, ref) {
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  );
}

export default forwardRef(Users);
