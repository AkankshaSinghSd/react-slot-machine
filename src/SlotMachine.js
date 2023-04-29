import React from "react";

const SlotMachine = (props) => {
  let { x, y, z } = props;

  return (
    <>
      {x === y && y === z ? (
        <div>
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>This is matching</h1>
          <hr />
        </div>
      ) : (
        <div>
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>This is Not matching</h1>
          <hr />
        </div>
      )}
    </>
  );
};

export default SlotMachine;
