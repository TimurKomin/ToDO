import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pagination from "./Pagination";
import { http } from "../api/http";
import { notification, message, Button, Checkbox, ConfigProvider } from "antd";
import en_US from 'antd/lib/locale/en_US';
// import "antd/dist/antd.css";
import { PageContainer, ProColumns, ProForm, ProFormText } from "@ant-design/pro-components";
import { DeleteOutlined } from "@ant-design/icons";
import ProTable from "@ant-design/pro-table";
import Search from "antd/lib/transfer/search";
// import InputTodo from "./InputTodo";
import { Layout } from "antd";
const {Header, Footer, Sider, Content} = Layout

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [check, setCheck] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [sortTasks, setSortTask] = useState("asc");
  const [totalPage, setTotalPage] = useState(0);
  const [statusFilter, setStatusFilter] = useState("OLD");
  const [countButtons, setCountButtons] = useState([]);
  const [length, setLength] = useState(0);
  const [allPerPage, setAllPerPage] = useState(10);

  const getTodos = async () => {
    try {
      const response = await http.get(
        `/getTask?page=${currentPage}&order=${sortTasks}&allPerPage=${allPerPage}&filterBy=${filter}`
      );
      setTodos(response.data.rows);
      setTotalPage(Math.ceil(response.data.count));
      setLength(response.data.count);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (todos.length > 0) {
      const isChecked = todos.every(({ done }) => done);
      setCheck(isChecked);
    }
  }, [todos]);

  useEffect(() => {
    if (todos.length === 0 && currentPage > 0) {
      const page = currentPage - 1;
      setCurrentPage(page);
    }
  }, [length]);

  useEffect(() => {
    getTodos();
  }, [currentPage, filter, sortTasks, allPerPage]);

  useEffect(() => {
    setCountButtons([...new Array(totalPage).keys()]);
  }, [totalPage, todos]);

  const selectPage = (e) => setCurrentPage(Number(e.target.id));

  const postTodos = async (obj) => {
    try {
      await http.post(`/postTask`, obj);
      sortTasks === "desc"
        ? setCurrentPage(0)
        : setCurrentPage(Math.floor(length / 5));
      getTodos();
    } catch (err) {
      console.log(err.response.data);

      notification.error({ message: err.response.data });
      // message("Задача не добавлена")
      console.log("Задача не добавлена");
    }
  };

  const deleteTask = async (uuid) => {
    try {
      await http.delete(`/deleteTask/?uuid=${uuid}`);
      if (todos.length > 0) {
        await getTodos();
      } else {
        if (currentPage !== 0) {
          setCurrentPage(currentPage - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const taskCraete = () => {
    if (inputValue.trim()) {
      const newTask = {
        title: inputValue,
        done: false,
      };
      postTodos(newTask);
    }
  };

  const getValue = (e) => {
    let value = e.target.value;
    setInputValue(value);
    e.preventDefault();
  };

  const addTodoHandler = () => {
    taskCraete();
    setInputValue("");
    // sortTasks === 'desc' ? setCurrentPage(0) : setCurrentPage(Math.floor(length/5))
    // getTodos()
  };

  const sortByDate = () => {
    setStatusFilter("NEW");
    if (statusFilter === "NEW") setStatusFilter("OLD");
    setSortTask("desc");
    if (sortTasks === "desc") setSortTask("asc");
  };

  const checkAll = async ({ target }) => {
    try {
      setCheck(target.checked);
      const arrProm = await todos.map(
        (item) =>
          (item = http.patch(`/patchTask/?uuid=${item.uuid}`, {
            done: target.checked,
          }))
      );
      await Promise.all(arrProm);
      if (filter === "" || currentPage === 0) {
        await getTodos();
      } else if (currentPage !== 0) {
        setCurrentPage(currentPage - 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTasks = async () => {
    if (todos.length) {
      const arrProm = todos.map(
        (item) => (item = http.delete(`/deleteTask/?uuid=${item.uuid}`))
      );
      try {
        await Promise.all(arrProm);
        if (currentPage > 0 && currentPage === totalPage - 1) {
          setCurrentPage((prev) => prev > 0 && prev - 1);
        } else if (currentPage === 0 || currentPage !== totalPage - 1) {
          await getTodos();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const checkTask = async (e, uuid) => {
    console.log(e.target);
    const done = e.target.checked;
    try {
      const resp = await http.patch(`/patchTask/?uuid=${uuid}`, {
        done: done,
      });
      notification.success({ message: "task checked" });

      if (todos.length > 0) {
        await getTodos();
      } else {
        setCurrentPage(currentPage - 1);
      }
    } catch (err) {
      // alert(err);
      console.log(err);
    }
  };
  const columns: ProColumns[] = [
    {
      title: "check",
      dataIndex: "done",
      key: "check",
      width: 60,
      align :"center",
      render: (done, data) => {
        // console.log(e)
        return (
          <Checkbox
            key={data.uuid}
            onChange={(e) => checkTask(e, data.uuid)}
            checked={done}
          />
        );
      },
    },
    {
      title: "title",
      dataIndex: "title",
      width: 300,
      align:"center"
    },
    {
      title: "date",
      dataIndex: "createdAt",
      width: 200,
      align:"center"
    },
    {
      title: "delete",
      dataIndex: "done",
      width: 60,
      align:"center",
      render: (done, data) => (
        <Button onClick={(e) => deleteTask(data.uuid)} type="danger">
          <DeleteOutlined />
        </Button>
      ),
    },
  ];
  const data = todos;

  return (
      
       <Layout>     
      <Header style={{
          color: "white"
      }}>TODO-LIST</Header>
      <Content>
       
<ConfigProvider locale={en_US}>
           <ProFormText label="new Task.."/>
       

       <Button type="primary" >Add</Button>
      
          <PageContainer ghost
      header={{
        title: 'test',
      }}>
      <ProTable
      
        locale={en_US}
        headerTitle="Todo-List"
        columns={columns}
        rowKey="index"
        pagination={true}
        dataSource={data}
        search={false}
        // style={{
        //     textAlign:"right"
        // }}
        
        toolBarRender={() => [
            <Button
            size={filter === "undone" ? "middle" : "small"}
            onClick={() => {
              setFilter("undone");
              setCurrentPage(0);
            }}
            key="primary"
            type="primary"
          >
            Active
          </Button>,
          <Button
            size={filter === "done" ? "middle" : "small"}
            onClick={() => {
              setFilter("done");
              setCurrentPage(0);
            }}
            key="primary"
            type="primary"
          >
            Done
          </Button>,
          <Button
            size={filter === "" ? "middle" : "small"}
            onClick={() => {
              setFilter("");
              setCurrentPage(0);
            }}
            key="primary"
            type="primary"
          >
            All
          </Button>,
            <Button
            type="primary"
            body={statusFilter}
            onClick={sortByDate}
            >
            {statusFilter}
          </Button>,
          ]}
      />
      
      </PageContainer>

    </ConfigProvider>
    </Content>

    
    <Footer style={{
        backgroundColor:"darkblue",
        color:"white"
    }}>We love Data</Footer>
    </Layout>

  );
};
export default Todos;
