import React, { useState } from "react";
import TableButton from "@/components/TableButton";
import Table from "@/components/Table";
import dayjs from "dayjs";

import { tableData } from "@/data";

export default () => {
 
  const [searchParams, setSearchParams] = useState({
    pageNumber: 1,
    pageSize: 10,
  });

  const { pageNumber, pageSize } = searchParams;
  const getColumns = () => {
    return [
      {
        title: "地区",
        dataIndex: "region",
        key: "region",
        width: 200,
      },
      {
        title: "销售价",
        dataIndex: "salesPrice",
        key: "salesPrice",
        width: 200,
      },
      {
        title: "回收价",
        dataIndex: "repurchasePrice",
        key: "repurchasePrice",
        width: 200,
      },
      {
        title: "日期",
        dataIndex: "date",
        key: "date",
        render: (value) => dayjs(value).format("YYYY-MM-DD HH:mm"),
      },
      {
        title: "操作",
        dataIndex: "operation",
        key: "actions",
        fixed: "right",
        width: 180,
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
                      // pushRoute &&
                      //   pushRoute({
                      //     path: globalGoldPriceDetails,
                      //     params: {
                      //       action: "edit",
                      //       id,
                      //     },
                      //   });
                    },
                  },
                },
                {
                  label: "查看",
                  status: true,
                  props: {
                    onClick: () => {
                      // pushRoute &&
                      //   pushRoute({
                      //     path: globalGoldPriceDetails,
                      //     params: {
                      //       action: "view",
                      //       id,
                      //     },
                      //   });
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
        // 表格 props 属性
        // tableProps={tableProps}
        // columns 字段
        columns={getColumns()}
        // 是否前端分页
        isPaginate={true}
        // 数据
        data={{
          ...tableData,
          pageNumber,
          pageSize,
          // pages,
          total: tableData.list.length,
        }}
        rowKey="id"
        // paginationProps={paginationProps}

        // 分页改变 或者 table 表格排序改变 回调方法
        onChange={(searchParams: { pageNumber: number; pageSize: number }) => {
          setSearchParams(searchParams);
 
          // this.loadTableData(searchParams);
        }}
 
        // 选中行
        // onSelect={(
        //   selectedRows: Array<Object>,
        //   selectedRowKeys: Array<String>
        // ) => {
  
    
        // }}
      />
    </div>
  );
};
