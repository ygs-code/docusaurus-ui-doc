import Mock from "mockjs";
const Random = Mock.Random;
const tableData = Mock.mock({
  "list|100": [
    {
        id: "@id",
        name: "@cname",
        age: "@integer(18, 60)",
        email: "@email",
        date: "@date('yyyy-MM-dd')",
        address: "@county(true)",
        regionCode: "@county(true)",
        region: "@county(true)",
        currency: "@float(0, 100, 2, 2)",
        salesPrice: "@float(0, 100, 2, 2)",
        repurchasePrice: "@float(0, 100, 2, 2)"
    },
  ],
});

export default tableData