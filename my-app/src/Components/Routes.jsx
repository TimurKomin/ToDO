import React from "react";
import Todos from "./Todos";
import CreateTask from "./createTask";
import EditTask from "./editTask";
import WrapperEdit from './wrapper';
import {Layout} from "antd";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const {Header, Footer, Sider, Content} = Layout

export default function MyRouter() {
  return (
    <Content >
  <Header style={{
  color: "white"
}}>TODO-LIST</Header >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/edit/:id" element={<WrapperEdit />} />
    </Routes>
  </BrowserRouter>
  <Footer style={{
  backgroundColor:"darkblue",
  color:"white",
  marginTop: "auto",
  
}}>We love Data</Footer>
</Content>
  );
}
