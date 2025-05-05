/*
 * @Author: your name
 * @Date: 2021-08-23 19:51:05
 * @LastEditTime: 2021-08-26 17:03:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/@/src/common/components/Form/index.js
 */
import "./index.scss";

import { Button, Spin } from "antd";
import { v4 as uuidv4 } from "uuid";
import Form from "@/components/Form";
import hoistStatics from "hoist-non-react-statics";
import React, {
  memo,
  PureComponent,
  createContext,
  useState,
  useContext,
  createElement,
  cloneElement,
} from "react";

interface History {
  back(): void;
}

interface IndexProps {
  history: History & Record<string, any>;
  match?: {
    params?: {
      action?: string;
      id?: string;
    };
  };
}
interface IndexState {
  loading: boolean;
  sourceData: Record<string, any>;
  reloadId: string;
  open?: boolean;
}

// 创建Context
const HookFormPageContext = createContext({
  loading: true,
  setLoading: (loading: boolean) => {},
  reloadId: uuidv4(),
  setReloadId: (reloadId: string) => {},
  sourceData: {} as Record<string, any>,
  setSourceData: (sourceData: Record<string, any>) => {},
  form: {} as Record<string, any>,
  setForm: (form: Record<string, any>) => {},
  onValidaForm: (parameter: Record<string, any>) => {},
  setOnValidaForm: () => {},
});

// 获取到里面的值
const useHookFormPageContext = () => {
  const context = useContext(HookFormPageContext);
  if (!context) {
    throw new Error(
      "useHookFormPageContext must be used within a HookFormPageProvider"
    );
  }
  return context;
};

const HookFormPageProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [reloadId, setReloadId] = useState(uuidv4());
  const [sourceData, setSourceData] = useState({});
  const [form, setForm] = useState({});
  const [onValidaForm, setOnValidaForm] = useState(() => {});

  let value = {
    loading,
    setLoading,
    reloadId,
    setReloadId,
    sourceData,
    setSourceData,
    form,
    setForm,
    onValidaForm,
    setOnValidaForm,
  };
  return (
    <HookFormPageContext.Provider value={value}>
      {children}
    </HookFormPageContext.Provider>
  );
};

const HookFormPage = (props) => {
  const { onSubmitForm, getFooter } = props;

  const {
    loading,
    reloadId,
    form,
    setForm,
    setLoading,
    setSourceData,
    setOnValidaForm,
  } = useHookFormPageContext();
  const { getFields = () => {}, getInitialValues = () => ({}) } = props;

  // 验证表单
  const onValidaForm = async (form, parameter = {}) => {
    const { validateFields } = form;

    return new Promise(async (resolve, reject) => {
      await validateFields()
        .then(async (values) => {
          setLoading(true);
          resolve(values);
          return await onSubmitForm({
            ...parameter,
            ...values,
          }).catch((error) => {
            throw error;
          });
        })
        .catch((error) => {
          reject(error);
          setLoading(false);
          console.error("error:", error);
        });
      setLoading(false);
    });
  };

  // 底部按钮
  const $getFooter = () => {
    const { match: { params: { action } = {} } = {}, history } = props;

    const readOnly = action === "view";

    return (
      <div className="button-box">
        {!readOnly ? (
          <Button
            type="primary"
            loading={loading}
            onClick={() => {
              onValidaForm(form);
            }}
          >
            确认
          </Button>
        ) : null}
        <Button
          loading={loading}
          onClick={() => {
            history.back();
          }}
        >
          返回
        </Button>
      </div>
    );
  };

  const RenderForm = (props = {}) => {
    return (
      <div className="form-page-component">
        <div className="form-box">
          <Spin tip="加载中..." spinning={loading}>
            <Form
              key={reloadId}
              {...props}
              fields={getFields()}
              onReady={(form) => {
                setForm(form);

                setOnValidaForm(() => {
                  return onValidaForm;
                });
              }}
              initialValues={async () => {
                let values = await getInitialValues();
                setSourceData(values);
                setLoading(false);
                return values;
              }}
            ></Form>
          </Spin>
        </div>

        {getFooter !== undefined ? (
          getFooter() ? (
            <div className="footer">{getFooter()}</div>
          ) : null
        ) : (
          <div className="footer">{$getFooter()}</div>
        )}
      </div>
    );
  };

  return RenderForm();
};

const withHookFormPage = (Target) => {
  const displayName =
    "withHookFormPage(" + (Target.displayName || Target.name) + ")";
  const WithHookFormPage = memo((props) => {
    return (
      <HookFormPageProvider>
        {/* {createElement(HookFormPageContext.Consumer, props, (context) => {
          return <Target  {...context} {...props} />;
        })} */}
        <HookFormPageContext.Consumer>
          {(context) => {
            // 把props 属性注入到HookFormPage组件中
            return <Target {...props} {...context} />;
          }}
        </HookFormPageContext.Consumer>
      </HookFormPageProvider>
    );
  });

  WithHookFormPage.displayName = displayName;
  // WithHookFormPage.WrappedComponent = Target;
  return hoistStatics(WithHookFormPage, Target);
};

export default HookFormPage;
export {
  IndexState as FormPageState,
  IndexProps as FormPageProps,
  HookFormPageContext,
  useHookFormPageContext,
  HookFormPageProvider,
  withHookFormPage,
};
