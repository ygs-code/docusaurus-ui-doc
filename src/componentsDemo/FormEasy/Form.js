import React from "react";
import Form from "@/components/Form";
export default () => {
  const getFields = () => {

    
    return [
      //   {
      //     type: "section",
      //     title: "详情基本设置",
      //     items: [

      {
        label: "input 表单输入类型",
        name: "input",
        type: "input",
        props: {
          showCount: true,
          maxLength: 20,
          readOnly: false,
        },

        rules: [
          {
            required: true,
            message: "必填",
          },
        ],
      },

     
    ];
  };

  return (
    <div>
      <Form fields={getFields()} />
    </div>
  );
};

 