import "./body.css";
// import "antd/dist/antd.css";
import React from "react";
import "@ant-design/compatible";
import { Layout } from "antd";
import cubejs from "@cubejs-client/core";
import { CubeProvider } from "@cubejs-client/react";
import Header from "./components/Header";
import WebSocketTransport from "@cubejs-client/ws-transport";
const API_URL = "http://localhost:4000/";
const CUBEJS_TOKEN =
  "7f714017e9512c1d7ccb4c415008ba21a65340a8a9e259745b9bb4baaaac92da7df834fb4be8c2c0b156410a7ff40031305a4331cd4e30a6c06f54c7206268ff";
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzQwMjc0ODksImV4cCI6MTY3NDExMzg4OX0.3zFRlpNWLb9MWR5Uf05tVrxhNmrf2HMAbwfeJGzWZDg";
const cubejsApi = cubejs({
  transport: new WebSocketTransport({
    authorization: CUBEJS_TOKEN,
    apiUrl: API_URL.replace("http", "ws"),
  }),
});
const AppLayout = ({ children }) => (
  <Layout
    style={{
      height: "100%",
    }}
  >
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
);
const App = ({ children }) => (
  <CubeProvider cubejsApi={cubejsApi}>
    <AppLayout>{children}</AppLayout>
  </CubeProvider>
);
export default App;
