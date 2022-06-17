import React from "react";
import Todos from "./Todos";
import CreateTask from "./createTask";
import EditTask from "./editTask";
import WrapperEdit from "./wrapper";
import { Layout, Menu } from "antd";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
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
          <Route path="/create" element={<CreateTask />} />
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
