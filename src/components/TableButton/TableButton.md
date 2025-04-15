## TreePicker 弹窗使用说明

## 入参说明：

| 参数               | 说明                                                         |
| :----------------- | :----------------------------------------------------------- |
| label              | // 是否需要气泡弹窗提示 默认为false                          |
| showPopconfirm     | 是否需要气泡弹窗提示 默认为false                             |
| confirmInfo        | 气泡弹窗信息提示，如果不传则为   "您确定要${item.label}吗？" |
| item.props         | 按钮的props属性，按钮是span标签                              |
| item.props.onClick | 为 treeData 数据中的 title 显示字段，比如数据结构为[{value:'1',name:'hao'}],如果使用 titleKey={'name'},则显示 tree 的时候显示该字段 |
| status             | 用于隐藏或者显示按钮，可用于权限控制                         |

##  Demo


```tsx
<TableButton
                render={[
                  {
                    showPopconfirm: true, // 是否需要弹窗提示
                    confirmInfo: '你确定要发布该标签吗？', //弹窗信息
                    label: '发布', // 按钮文字
                    status: true, //权限控制
                    props: {
                      onClick: () => {
                        // 事件

                       
                      },
                    },
                  },   
                    {
                    label: '编辑',
                    status: true,
                    
                    props: {
                      onClick: () => {
                         
                      },
                    },
                  },
                  {
                    label: '删除',
                    status: true,
                    showPopconfirm: true,
                    confirmInfo: '你确定要删除该标签吗？',
                    props: {
                      onClick: () => {
                        
                      },
                    },
                  },
                ]}
              />
```

