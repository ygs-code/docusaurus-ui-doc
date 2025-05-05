import React from "react";
import App from "@/components/App";
import AddBorder from "@/componentsDemo/AddBorder";
import FormPage from "./FormPage";
import  "./index.scss";

export default () => {
  return (
     <div className="form-page-demo">  
      <App>
        <FormPage />
      </App>
    </div>
  );
};
