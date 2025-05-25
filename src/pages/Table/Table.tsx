import React from "react";
import Table from "@/components/Table";
// import Table from "@/components/Table";
export default () => {
  const tableData = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      address: "123 Main St",
      // email:
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      address: "456 Elm St",
    },
  ];
  const getColumns = () => {
  
    return [
      {
        title: "地区",
        dataIndex: "region",
        key: "region",
      },
      {
        title: "货币/单位",
        dataIndex: "currency",
        key: "currency",
        render(value, record) {
        
        },
      },
      {
        title: "销售价",
        dataIndex: "salesPrice",
        key: "salesPrice",
      },
      {
        title: "回收价",
        dataIndex: "repurchasePrice",
        key: "repurchasePrice",
      },
      // {
      //   title: "日期",
      //   dataIndex: "date",
      //   key: "date",
      //   render: (value) => dayjs(value).format("YYYY-MM-DD HH:mm"),
      // },
      {
        title: "操作",
        dataIndex: "operation",
        key: "actions",
        fixed: "right",
        render: (value, record) => {
          const { regionCode: id } = record;
          return (
            <TableButton
              render={[
                {
                  label: "编辑",
                  status: true,
                  color: "#d4a767",
                  props: {
                    onClick: () => {
                      pushRoute &&
                        pushRoute({
                          path: globalGoldPriceDetails,
                          params: {
                            action: "edit",
                            id,
                          },
                        });
                    },
                  },
                },
                {
                  label: "查看",
                  status: true,
                  props: {
                    onClick: () => {
                      pushRoute &&
                        pushRoute({
                          path: globalGoldPriceDetails,
                          params: {
                            action: "view",
                            id,
                          },
                        });
                    },
                  },
                },
              ]}
            />
          );
        },
      },
    ];
  };

  return (
    <div>
      <Table
        // readOnly={readOnly}
        // tableProps={tableProps}
        columns={getColumns()}
        data={tableData}
        // paginationProps={paginationProps}
        // onChange={(searchParams: Object) => {
        //   this.loadTableData(searchParams);
        // }}
        // onSelect={(
        //   selectedRows: Array<Object>,
        //   selectedRowKeys: Array<String>
        // ) => {
        //   this.onSelect(selectedRows, selectedRowKeys as React.Key[]);
        //   onSelect(selectedRows, selectedRowKeys);
        // }}
      />
    </div>
  );
};
