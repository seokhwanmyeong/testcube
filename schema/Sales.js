cube(`Sales`, {
  sql: `SELECT * FROM \`Store\`.\`Sales\``,
  title: `매출`,
  preAggregations: {
    sales_amount_rollup: {
      measures: [CUBE.sum, CUBE.count],
      dimensions: [StoreInfo.storeName],
      refreshKey: {
        every: `1 day`,
      },
    },
    sales_menu_rollup: {
      measures: [CUBE.sum, CUBE.count],
      dimensions: [CUBE.menuNm, StoreInfo.storeName],
      refreshKey: {
        every: `1 day`,
      },
    },
    sales_dlvType_rollup: {
      measures: [CUBE.sum, CUBE.count],
      dimensions: [CUBE.dlvType, StoreInfo.storeName],
      refreshKey: {
        every: `1 day`,
      },
    },
    // store_sales_join: {
    //   type: `rollupJoin`,
    //   measures: [CUBE.sum, CUBE.avg],
    //   dimensions: [
    //     StoreInfo.storeName,
    //     StoreInfo.storeCode,
    //     StoreInfo.storeRank,
    //     StoreInfo.openDate,
    //   ],
    //   rollups: [StoreInfo.store_info_rollup, CUBE.sales_amount_rollup],
    // },
  },

  joins: {
    StoreInfo: {
      relationship: `belongsTo`,
      sql: `${CUBE.franCd} = ${StoreInfo.storeCode}`,
    },
  },

  measures: {
    count: {
      title: "건수",
      // sql: saleAmt,
      type: `count`,
      drillMembers: [menuNm, dlvType, saleAmt],
    },
    sum: {
      title: "매출합계",
      sql: saleAmt,
      type: `sum`,
    },
    avg: {
      title: "평균매출",
      sql: saleAmt,
      type: `avg`,
    },
    // avgM: {
    //   title: "평균일매출",
    //   sql: saleAmt,
    //   type: `avg`,
    // },
    avgD: {
      title: "평균월매출",
      sql: saleAmt,
      type: `avg`,
    },
  },

  dimensions: {
    // addr: {
    //   sql: `${CUBE}.\`ADDR\``,
    //   type: `string`
    // },

    // addrDetail: {
    //   sql: `${CUBE}.\`ADDR_DETAIL\``,
    //   type: `string`
    // },

    // addrHeader: {
    //   sql: `${CUBE}.\`ADDR_HEADER\``,
    //   type: `string`
    // },

    // brandCd: {
    //   sql: `${CUBE}.\`BRAND_CD\``,
    //   type: `string`
    // },
    id: {
      primaryKey: true,
      shown: false,
      sql: `${CUBE}.\`_id\``,
      type: `string`,
    },
    dlvType: {
      title: `주문타입`,
      sql: `${CUBE}.\`DLV_TYPE\``,
      type: `string`,
    },
    franCd: {
      title: `가맹점 코드`,
      sql: `${CUBE}.\`FRAN_CD\``,
      type: `string`,
    },
    menuNm: {
      title: `메뉴명`,
      sql: `${CUBE}.\`MENU_NM\``,
      type: `string`,
    },
    // telNo: {
    //   sql: `${CUBE}.\`TEL_NO\``,
    //   type: `string`
    // },

    saleAmt: {
      title: "매출",
      sql: `${CUBE}.\`SALE_AMT\``,
      type: `number`,
    },
    saleDate: {
      title: `판매일`,
      sql: `${CUBE}.\`SALE_DATE\``,
      type: `time`,
    },
  },

  // dataSource: `default`,
});
