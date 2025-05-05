import React, { Children, cloneElement } from "react";
// import App from "@/components/App";

export default (props) => {
  const { children =[]} = props;


 

  return (
    <div
      style={{
        border: "1px solid #eaeaea",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
       
      {Children.map(children, (child, index) => {
        return    cloneElement(child, props);
      })}
    </div>
  );
};
