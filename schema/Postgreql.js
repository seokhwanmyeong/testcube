// cube(`BranchSales`, {
//   sql: `
//     SELECT
//       company_id,
//       code,
//       total_order,
//       total_sales,
//       sales_date
//     FROM
//       public."Franchise_DailyBranchSales"`,
//   dataSource: `default`,
//   title: `매출데이터(postgre)`,
//   description: `All Stores related Sales`,

//   preAggregations: {
//     // Pre-Aggregations definitions go here
//     // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
//   },

//   measures: {
//     //매출 건수
//     count: {
//       title: `매출 건수`,
//       sql: `total_order`,
//       type: `count`,
//       drillMembers: [salesDate],
//     },

//     //매출 건수 평균
//     countAvg: {
//       title: `매출 건수 평균`,
//       sql: `total_order`,
//       type: `avg`,
//       drillMembers: [salesDate],
//     },

//     //매출 금액
//     amount: {
//       title: `매출 금액`,
//       sql: `total_sales`,
//       type: `sum`,
//       drillMembers: [salesDate],
//     },

//     //매출 금액 평균
//     amountAvg: {
//       title: `매출 금액 평균`,
//       sql: `total_sales`,
//       type: `avg`,
//       drillMembers: [salesDate],
//     },
//   },

//   dimensions: {
//     company: {
//       title: `브랜드`,
//       sql: `company_id`,
//       type: `number`,
//     },

//     code: {
//       title: `가맹점`,
//       sql: `code`,
//       type: `string`,
//     },

//     salesDate: {
//       title: `판매일자`,
//       sql: `sales_date`,
//       type: `time`,
//     },
//   },
// });
