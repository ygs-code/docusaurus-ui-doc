import React from "react";
import Form from "@/components/Form";
import App from "@/components/App";

const FormComponent = () => {
  const getFields = () => {
    let action = "view";

    const readOnly = action === "view";

    /*
      const mapTpye = {
    text: <>{value}</>,
    datepicker: (
      <DatePicker
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}
      />
    ),

    textarea: (
      <TextArea
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}
        rows={4}
      />
    ),
    input: (
      <Input
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></Input>
    ),
    inputnumber: (
      <InputNumber
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></InputNumber>
    ),
    radio: (
      <Radio
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></Radio>
    ),
    radiogroup: (
      <Radio.Group
        allowClear
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}
        {...formProps}></Radio.Group>
    ),
    rate: (
      <Rate
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></Rate>
    ),

    multipleselectinput: (
      <MultipleSelectInput
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></MultipleSelectInput>
    ),
    select: (
      <Select
        allowClear
        {...formProps}
        showSearch
        filterOption={(input, option) => {
          return (
            option?.label?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0 ||
            option?.[labelKey]
              ?.toString()
              ?.toLowerCase()
              .indexOf(input?.toLowerCase()) >= 0 ||
            option?.[valueKey]?.toString()?.indexOf(input?.toLowerCase()) >= 0
          );
        }}
        disabled={readOnly || disabled}
        value={value}
        options={(formProps.options || []).map((item) => {
          return {
            ...item,
            label: item[labelKey] || item.label,
            value: item[valueKey] || item.value,
          };
        })}
        onChange={onChange}></Select>
    ),

    switch: (
      <Switch
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></Switch>
    ),
    slider: (
      <Slider
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></Slider>
    ),
    timepicker: (
      <TimePicker
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></TimePicker>
    ),
    transfer: (
      <Transfer
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></Transfer>
    ),
    checkbox: (
      <Checkbox
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></Checkbox>
    ),
    password: (
      <Password
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></Password>
    ),

    rangepicker: (
      <RangePicker
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
        }}></RangePicker>
    ),

    lazyselect: (
      <LazySelect
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></LazySelect>
    ),

    cascader: (
      <Cascader
        allowClear
        {...formProps}
        disabled={readOnly || disabled}
        value={value}
        onChange={onChange}></Cascader>
    ),
  };
    
    */

    return [
    //   {
    //     type: "section",
    //     title: "详情基本设置",
    //     items: [
          {
            label: "datepicker 日期类型",
            name: "datepicker",
            type: "input",
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
            label: "用户名称",
            name: "name",
            type: "input",
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
            label: "邮箱地址",
            name: "email",
            type: "input",
            props: {
              showCount: true,
              maxLength: 100,
              readOnly: false,
            },

            rules: [
              {
                required: true,
                message: "请输入邮箱地址",
              },
            ],
          },
          {
            label: "手机号码",
            name: "phone",
            type: "input",
            props: {
              showCount: true,
              maxLength: 11,
              readOnly: false,
            },

            rules: [
              {
                required: true,
                message: "请输入手机号码",
              },
            ],
          },
          {
            label: "用户类型",
            name: "type",
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
          // {
          //   label: "设置角色",
          //   name: "roles",

          //   itemProps: {

          //     labelCol: {
          //       span: 4,
          //     },
          //     wrapperCol: {
          //       span: 40,
          //     },
          //   },

          //   render: (props) => {
          //     const {value, onChange} = props;

          //     return (
          //       <TablePicker
          //         readOnly={readOnly}
          //         buttonText={readOnly ? "查看角色" : "选择角色"}
          //         value={value}
          //         onChange={(v) => {
          //           onChange(v);
          //           this.getRolePermissions(v);
          //         }}
          //         request={getRoleList}
          //         modalProps={{
          //           title: readOnly ? "查看角色" : "设置角色",
          //         }}
          //         tableProps={{
          //           rowKey: "id",
          //           getSearchFields: () => {
          //             return [
          //               {
          //                 label: "角色名称",
          //                 name: "name",
          //                 type: "input",
          //                 span: 1,
          //               },
          //               {
          //                 label: "角色ID",
          //                 name: "id",
          //                 type: "input",
          //               },
          //             ];
          //           },
          //           getColumns: () => {
          //             return [
          //               {
          //                 title: "角色ID",
          //                 dataIndex: "id",
          //                 key: "id",
          //               },
          //               {
          //                 title: "角色名称",
          //                 dataIndex: "name",
          //                 key: "name",
          //               },
          //               {
          //                 title: "描述",
          //                 dataIndex: "description",
          //                 key: "description",
          //               },

          //               {
          //                 title: "操作",
          //                 dataIndex: "actions",
          //                 key: "actions",
          //                 width: 180,
          //                 render: (text, row) => {
          //                   const {id} = row;

          //                   return (
          //                     <TableButton
          //                       render={[
          //                         {
          //                           label: "查看角色拥有权限", // 按钮文字
          //                           status: true, //权限控制
          //                           props: {
          //                             onClick: () => {
          //                               this.setState({
          //                                 authOpen: true,
          //                                 roleId: id,
          //                               });
          //                             },
          //                           },
          //                         },
          //                       ]}
          //                     />
          //                   );
          //                 },
          //               },
          //             ];
          //           },
          //         }}
          //       ></TablePicker>
          //     );
          //   },
          //   rules: [
          //     // {
          //     //   required: true,
          //     //   message: "请设置角色"
          //     // }
          //   ],
          // },
          // {
          //   label: "总共拥有权限",
          //   name: "permissions",

          //   render: (props) => {
          //     const {value: {checkedKeys} = {}, onChange} = props;

          //     // checkedChildrenKeys.length
          //     //       : checkedKeys.length

          //     return (
          //       <div className="tree-picker-content user-role-details-tree-content">
          //         <TreeContent
          //           value={{
          //             checkedChildrenKeys: checkedKeys,
          //             checkedKeys,
          //           }}
          //           onChange={onChange}
          //           searchProps={{
          //             placeholder: "搜索权限名称/ID",
          //           }}
          //           isSelectLast={false}
          //           readOnly={true}
          //           isSelectLastHasParent
          //           requestParameter={{
          //             pageNum: 1,
          //             pageSize: 10000,
          //           }}
          //           promiseRequest={()=>{}}
          //           searchKeys={["name", "id"]}
          //           totalTitle={"一共有{n}条数据"}
          //           selectedTitle={"已选{n}条数据"}
          //           valueKey="id"
          //           titleKey="name"
          //           nextLevelKey="children"
          //           dataMapper={(data) => {
          //             data = transformTreeData(data.data.list);
          //             return data;
          //           }}
          //         ></TreeContent>
          //       </div>
          //     );
          //   },
          //   rules: [
          //     // {
          //     //   required: true,
          //     //   message: "请设置角色"
          //     // }
          //   ],
          // },
    //     ],
    //   },
    ];
  };

  return (
    <div>
      <Form fields={getFields()} />
    </div>
  );
};

export default () => {
  return (
    <div>
      <App>
        <FormComponent />
      </App>
    </div>
  );
};
