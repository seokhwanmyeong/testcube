import React, { useEffect, useState } from "react";
import { Col } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";
const DashboardItems = [
  {
    id: 0,
    name: "New Chart",
    vizState: {
      query: {
        order: {
          "Sales.saleDate": "asc",
        },
        dimensions: ["StoreInfo.bpNm"],
        limit: 100,
        measures: ["Sales.sum"],
      },
      chartType: "line",
    },
  },
  {
    id: 1,
    name: "New Chart",
    vizState: {
      query: {
        limit: 10,
        dimensions: ["StoreInfo.bpNm"],
        order: [["Sales.sum", "asc"]],
        measures: ["Sales.sum"],
        filters: [
          {
            member: "Sales.sum",
            operator: "lte",
            values: ["5000000"],
          },
        ],
      },
      chartType: "bar",
    },
  },
];
const DashboardPage = () => {
  const dashboardItem = (item) => {
    console.log(item);
    return (
      <Col
        span={24}
        lg={12}
        key={item.id}
        style={{
          marginBottom: "24px",
          maxWidth: "100%",
          width: "100%",
          minHeight: "500px",
        }}
      >
        <DashboardItem title={item.name}>
          <ChartRenderer vizState={item.vizState} />
        </DashboardItem>
      </Col>
    );
  };
  const Empty = () => (
    <div
      style={{
        textAlign: "center",
        padding: 12,
      }}
    >
      <h2>
        There are no charts on this dashboard. Use Playground Build to add one.
      </h2>
    </div>
  );
  return DashboardItems.length ? (
    <Dashboard dashboardItems={DashboardItems}>
      {DashboardItems.map(dashboardItem)}
    </Dashboard>
  ) : (
    <Empty />
  );
};
export default DashboardPage;
