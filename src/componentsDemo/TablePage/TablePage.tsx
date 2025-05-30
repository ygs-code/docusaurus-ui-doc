import React, { Component, JSX } from "react";
import { tablePage } from "src/components/TablePage";
import {  Button,  } from "antd";
import TableButton from "src/components/TableButton";
import dayjs from "dayjs";
import { tableData } from "@/data";

interface IndexProps {
  pushRoute: (path: string | object) => void;
  routePaths?: {
    memberManagementDetails: string;
  };
}

interface SearchParams {}

interface IndexState {
  autoLoading?: boolean;
  searchParams?: SearchParams;
  multipleFields?: {
    selectValue?: string[];
    inputValue?: string;
  };
}

@tablePage
class Index extends Component<IndexProps, IndexState> {
  renderSearch: Function;
  renderTable: Function;
  constructor(props: any) {
    super(props);
  }
  // 定义表格列
  getColumns = () => {
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
        width: 200,
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

  // 表格数据源
  tableDataLoader = async (searchParams: any) => {
    try {
      const { pageNumber = 1, pageSize = 10 } = searchParams;

      // highlight-start
      /*
        //配置 Api 发送请求 到后台获取数据  然后后台返回的数据 data
        // data 数据 有list ,pageNumber , pageSize ,total 等字段 可以直接把data返回去即可
        let {data} =  await Ajax(searchParams});

        return  data
      */  
      // highlight-end

      return {
        pageNumber,
        pageSize,
        total: tableData.list.length,
        list: tableData.list.slice(
          (pageNumber - 1) * pageSize,
          (pageNumber - 1) * pageSize + pageSize
        ),
      };
    } catch (error) {}
  };

  // 表格搜索字段
  getSearchFields() {
    const { searchParams: {} = {} } = this.state;
    return [
      {
        label: "搜索条件",
        name: "name",
        type: "input",
        span: 1,
        props: {
          selectProps: {},
          options: [
            {
              label: "销售价",
              value: "salesPrice",
            },
            {
              label: "回收价",
              value: "repurchasePrice",
            },
          ],
        },
      },
      {
        label: "用户名",
        name: "name",
        type: "input",
        span: 1,
      },
      {
        label: "状态",
        name: "status",
        type: "select",
        span: 1,
        props: {
          selectProps: {},
          options: [
            {
              label: "开启",
              value: "0",
            },
            {
              label: "关闭",
              value: "1",
            },
          ],
        },
      },
    ];
  }

  getTableProps = () => {
    return {};
  };

  // componentDidMount() { }

  render() {
    const { searchParams: {} = {} } = this.state;
    const { pushRoute, routePaths: { memberManagementDetails = "" } = {} } =
      this.props;

    return (
      <>
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <Button
            type="primary"
            onClick={async () => {
                 //跳转到新增页面
            }}
          >
            新增
          </Button>
        </div>

        {this.renderSearch({})}
        {this.renderTable({
          rowKey: "reference",
          // scroll: {
          //   x: 1300,
          // },
        })}
      </>
    );
  }
}

export default Index;
