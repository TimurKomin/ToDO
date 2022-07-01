import React from "react";
import Todos from "./Todos";
import WrapperEdit from "./wrapper";
import { Layout, Menu } from "antd";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const { Header, Footer, Content } = Layout;
const items = [
  {
    label: "",
    key: "todo!!",
    children: [
      { label: <a href="/">Todo-List</a>, key: "todo" },
      { label: <a href="/create">Create Task</a>, key: "todo!" },
    ],
  },
];

export default function MyRouter() {
  return (
    <Content>
      <Header
        style={{
          display: "flex",
          justifyContent: "left",

          color: "white",
        }}
      >
        TODO-LIST{" "}
        <Menu
          style={{
            marginTop: "0.38%",
            display: "flex",
            justifyContent: "right",
          }}
          theme="dark"
          items={items}
        />
      </Header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />

          <Route path="/create" element={<WrapperEdit />} />

          <Route path="/edit/:id" element={<WrapperEdit />} />
        </Routes>
      </BrowserRouter>
      <Footer
        style={{
          backgroundColor: "darkblue",
          color: "white",
          marginTop: "auto",
        }}
      >
        We love Data
      </Footer>
    </Content>
  );
}
