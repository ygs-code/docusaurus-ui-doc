/*
 * @Date: 2022-04-14 09:48:45
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-07-08 13:58:43
 * @FilePath: /scrm-fe/src/components/TableButton/index.jsx
 * @Description:
 */
import "./styles.scss";

import { Popconfirm } from "antd";
import React, { useCallback } from "react";
 
// interface TableButtonProps {
//   render: Array<{
//     status: boolean;
//     label: string;
//     color?: string;
//     showPopconfirm?: boolean;
//     confirmInfo?: string;
//     props?: React.HTMLAttributes<HTMLSpanElement> & {
//       onClick?: () => void;
//     };
//   }>;
// }

export default React.forwardRef((props, ref) => {
  const { render = [] } = props;
  return (
    <ul className="table-button">
      {render
        .filter((item) => item.status)
        .map((item, index) => {
          const {
            color
          } = item
          let onClick = item.props?.onClick;

          // if (item.showPopconfirm) {
          //   delete item.props.onClick;
          // }
          return (
            <li key={index + "table-button"}>
              {item.showPopconfirm ? (
                <Popconfirm
                  title={item.confirmInfo || `您确定要${item.label}吗？`}
                  onConfirm={onClick}
                >
                  <span style={{
                    color: color
                  }} {...item.props}>{item.label}</span>
                </Popconfirm>
              ) : (
                <span {...item.props} style={{
                  color: color
                }}>{item.label}</span>
              )}
            </li>
          );
        })}
    </ul>
  );
});
