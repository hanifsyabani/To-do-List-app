import React from "react";

const Button = ({items}) => {

  const itemDone= items.filter((item)=>item.checked).length
  
  return (
    <>
      <div className="border border-gray-500/50 p-3 rounded-md font-semibold gradients">
        <h5>To Do Done : {itemDone}</h5>
      </div>
      <div className="border border-gray-500/50 p-3 rounded-md font-semibold gradients">
        <h5>To Do On Progress :{items.length}</h5>
      </div>
    </>
  );
};

export default Button;
