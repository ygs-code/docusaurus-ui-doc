import React from "react";
import { Button } from "antd";

import HookFormPage, {
  useHookFormPageContext,
  withHookFormPage,
} from "@/components/HookFormPage";

// initData:  初始化数据类型
interface InitData {
  checkbox: string;
  checkboxgroup: string;
  datepicker: string;
  input: string;
  radio: string;
  radiogroup: string;
  rangepicker: string;
  select: string;
  toggle: string;
  textarea: string;
}
// SubmitData:  提交表单数据类型
interface SubmitData {
  checkbox: string;
  checkboxgroup: string;
  datepicker: string;
  input: string;
  radio: string;
  radiogroup: string;
  rangepicker: string;
  select: string;
  toggle: string;
  textarea: string;
}

// props: 组件props类型
interface Props {
  match: {
    params: {
      id?: string;
      action?: string;
    };
  };
  history: {
    back: () => void;
  };
}

// State: 组件State类型
interface State {
  loading: boolean;
}

// FieldsType: 表单字段类型
interface FieldsType {
  label: string;
  name: string;
  type?: string;
  props?: Object;
  itemProps?: Object;
  rules?: {
    required?: boolean;
    message?: string;
    validator?: Function;
  }[];
  render?: Function;
}

const Index = (props) => {
  const { loading, reloadId, form, setForm, setLoading, onValidaForm } =
    useHookFormPageContext();

  /**
   * 用于将从接口获取到的初始化数据，转换成form需要的格式
   * 这个函数需要在getInitData中手动调用，因此函数名不限于mapInitData
   */

  const mapInitData = async (initData: SubmitData): Promise<InitData> => {
    let {
      checkbox,
      checkboxgroup,
      datepicker,
      input,
      radio,
      radiogroup,
      rangepicker,
      select,
      toggle,
      textarea,
    } = initData;

    return {
      checkbox,
      checkboxgroup,
      datepicker,
      input,
      radio,
      radiogroup,
      rangepicker,
      select,
      toggle,
      textarea,
    };
  };
  // 初始化值 可以获取 后台接口请求数据
  const getInitialValues = async () => {
    const { match: { params: { id } = {} } = {} } = props;

    // 获取详情
    const { data } = {
      data: {
        checkbox: "",
        checkboxgroup: "",
        datepicker: "",
        input: "",
        radio: "",
        radiogroup: "",
        rangepicker: "",
        select: "",
        toggle: "",
        textarea: "",
      },
    };
    // highlight-start
    /*
    // 这里可以使用接口请求数据，获取初始化数据
    // 例如：
      let {data} = await Ajax(id);
    
    */
  // highlight-end
    return await mapInitData(data);
  };

  /**
   * 用于将form的字段值转换为接口需要的格式
   */
  const mapSubmitData = (formData: InitData): SubmitData => {
    const {
      checkbox,
      checkboxgroup,
      datepicker,
      input,
      radio,
      radiogroup,
      rangepicker,
      select,
      toggle,
      textarea,
    } = formData;
    return formData;
  };
  // 提交请求到接口
  const onSubmitForm = async (formData: InitData): Promise<any> => {
    const {
      history: { back } = {},
      match: { params: { id, action } = {} } = {},
    } = props;

    const values: SubmitData = await mapSubmitData(formData);

     
 // highlight-start
     //  发送请求到接口
    // const data = await Ajax(values);
     // highlight-end
    return values;
  };

  // 表单字段设置
  const getFields = (): FieldsType[] => {
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
        name: "toggle",
        type: "switch",
        props: {
          showCount: true,
          maxLength: 20,
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
        rules: [
          {
            required: true,
            message: "请选择用户类型",
          },
        ],
      },
    ];
  };

  // 
  return (
    <div>
      <HookFormPage
        formProps={{}}
        onSubmitForm={onSubmitForm}
        getInitialValues={getInitialValues}
        getFields={getFields}
      />
    </div>
  );
};

export default withHookFormPage(Index);
