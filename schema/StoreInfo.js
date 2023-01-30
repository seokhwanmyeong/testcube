cube(`StoreInfo`, {
  sql: `SELECT * FROM \`Store\`.\`StoreInfo\``,
  title: `매장`,

  preAggregations: {
    store_rollup: {
      dimensions: [CUBE.storeName],
    },
    store_info_rollup: {
      measures: [Sales.avg, Sales.sum],
      dimensions: [
        CUBE.storeName,
        CUBE.storeCode,
        CUBE.storeRank,
        CUBE.openDate,
      ],
    },
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
    },
  },

  dimensions: {
    id: {
      primaryKey: true,
      shown: false,
      sql: `${CUBE}.\`_id\``,
      type: `string`,
    },

    storeName: {
      title: `매장명`,
      sql: `${CUBE}.\`BP_NM\``,
      type: `string`,
    },

    storeCode: {
      title: `매장코드`,
      sql: `${CUBE}.\`BP_CD\``,
      type: `string`,
    },

    addr: {
      title: `주소`,
      sql: `${CUBE}.\`ADDR_H\``,
      type: `string`,
    },

    addrDetail: {
      title: `주소상세`,
      sql: `${CUBE}.\`ADDR_D\``,
      type: `string`,
    },

    storeStatus: {
      title: `상태`,
      sql: `${CUBE}.\`STATUS_NM\``,
      type: `string`,
    },

    storeRank: {
      title: `타입`,
      sql: `${CUBE}.\`RK\``,
      type: `string`,
    },

    openDate: {
      title: `개업일`,
      sql: `${CUBE}.\`OPEN_DATE\``,
      type: `time`,
    },

    // bpKindTypeNm: {
    //   sql: `${CUBE}.\`BP_KIND_TYPE_NM\``,
    //   type: `string`,
    // },

    // brandCd: {
    //   sql: `${CUBE}.\`BRAND_CD\``,
    //   type: `string`,
    // },

    // childBpCd: {
    //   sql: `${CUBE}.\`CHILD_BP_CD\``,
    //   type: `string`,
    // },

    // dtsUpdate: {
    //   sql: `${CUBE}.\`DTS_UPDATE\``,
    //   type: `string`,
    // },

    // nmBrand: {
    //   sql: `${CUBE}.\`NM_BRAND\``,
    //   type: `string`,
    // },

    // svCd: {
    //   sql: `${CUBE}.\`SV_CD\``,
    //   type: `string`,
    // },

    // svNm: {
    //   sql: `${CUBE}.\`SV_NM\``,
    //   type: `string`,
    // },

    // svTel: {
    //   sql: `${CUBE}.\`SV_TEL\``,
    //   type: `string`,
    // },

    // teamCd: {
    //   sql: `${CUBE}.\`TEAM_CD\``,
    //   type: `string`,
    // },

    // teamNm: {
    //   sql: `${CUBE}.\`TEAM_NM\``,
    //   type: `string`,
    // },

    // telNo1: {
    //   sql: `${CUBE}.\`TEL_NO1\``,
    //   type: `string`,
    // },
  },

  dataSource: `default`,
});
