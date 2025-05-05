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
        label: "datepicker 日期类型",
        name: "datepicker",
        type: "datepicker",
        props: {
          showCount: true,
          maxLength: 20,
          readOnly: false,
        },

        rules: [
          {
            required: true,
            message: "请输入用户名称",
          },
        ],
      },
      {
        label: "rangepicker 日期类型",
        name: "rangepicker",
        type: "rangepicker",
        props: {
          showCount: true,
          maxLength: 20,
          readOnly: false,
        },

        rules: [
          {
            required: true,
            message: "请输入用户名称",
          },
        ],
      },
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

      {
        label: "textarea 多行文本类型",
        name: "textarea",
        type: "textarea",
        props: {
          showCount: true,
          maxLength: 100,
          readOnly: false,
        },

        rules: [
          {
            required: true,
            message: "必填",
          },
        ],
      },
      {
        label: "switch 开关类型",
        name: "switch",
        type: "switch",
        props: {
          showCount: true,
          maxLength: 20,
          readOnly: false,

          readOnly: false,
          options: [
            {
              label: "管理员",
              value: 1,
            },
            {
              label: "会员",
              value: 2,
            },
          ],
        },

        rules: [
          {
            required: true,
            message: "必填",
          },
        ],
      },
      {
        label: "radiogroup 单选组类型",
        name: "radiogroup",
        type: "radiogroup",
        props: {
          showCount: true,
          maxLength: 20,
          readOnly: false,

          readOnly: false,
          options: [
            {
              label: "管理员",
              value: 1,
            },
            {
              label: "会员",
              value: 2,
            },
          ],
        },

        rules: [
          {
            required: true,
            message: "必填",
          },
        ],
      },
      {
        label: "checkboxgroup  组类型",
        name: "checkboxgroup",
        type: "checkboxgroup",
        props: {
          showCount: true,
          maxLength: 20,
          readOnly: false,

          readOnly: false,
          options: [
            {
              label: "管理员",
              value: 1,
            },
            {
              label: "会员",
              value: 2,
            },
          ],
        },

        rules: [
          {
            required: true,
            message: "必填",
          },
        ],
      },
      {
        label: "select options 下拉类型",
        name: "select",
        type: "select",
        props: {
          readOnly: false,
          options: [
            {
              label: "管理员",
              value: 1,
            },
            {
              label: "会员",
              value: 2,
            },
          ],
        },
        itemProps: {},
        options: {},

        rules: [
          {
            required: true,
            message: "请选择用户类型",
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

 