import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { http } from "../api/http";
import { notification, message, Button, Checkbox, ConfigProvider, Row } from "antd";
import en_US from "antd/lib/locale/en_US";
import { ProColumns, ProForm, ProFormText } from "@ant-design/pro-form";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ProTable from "@ant-design/pro-table";
import Search from "antd/lib/transfer/search";
import { withRouter } from "react-router";
import { PageContainer } from "@ant-design/pro-layout";
import "antd/dist/antd.css";
import moment from "moment";

import { Layout } from "antd";
import Column from "antd/lib/table/Column";
const { Header, Footer, Sider, Content } = Layout;

const Todos = (props) => {
  console.log(props);
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
      console.log(currentPage, allPerPage, response.data.rows);
      const array = response.data.rows.map((item) => {
        return { ...item, createdAt: item.createdAt };
      });
      console.log(array);
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
      console.log(err);
    }
  };
  const onShowSizeChangeTask = (current, page) => {
    setAllPerPage(page);
    setCurrentPage(current - 1);
  };
  const columns: ProColumns[] = [
    {
      title: "check",
      dataIndex: "done",
      key: "check",
      width: 60,
      align: "center",
      render: (done, data) => {
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
      align: "center",
    },
    {
      title: "date",
      dataIndex: "createdAt",
      width: 200,
      align: "center",
      render: (date) => {
        const dateCreate = new Date(date);
        const dateChange = moment(dateCreate);
        const stringDate = String(dateChange._i);
        const renderDate = stringDate.substring(0, 24);
        return renderDate;
      },
    },
    // {
    //   title: "Editing",
    //   dataIndex: "title",
    //   width: 60,
    //   align: "center",
    //   render: (done, data) => (
    //     <Link
    //       style={{ display: "block", margin: "1rem 0" }}
    //       state={{ id: `${data.uuid}` }}
    //       to={{ pathname: `edit/${data.uuid}` }}
    //       key={`${data.uuid}`}
    //     >
    //       <EditOutlined />
    //     </Link>
    //   ),
    // },
    {
      title: "Edit | Delete",
      dataIndex: "done",
      width: 200,
      align: "center",
      render: (done, data) => (
        <Row style={{
            display: "flex",
            justifyContent:"space-between"
        }}>
        <Link
        style={{ display: "block", margin: "1rem 0" }}
        state={{ id: `${data.uuid}` }}
        to={{ pathname: `edit/${data.uuid}` }}
        key={`${data.uuid}`}
      >
        <EditOutlined />
      </Link> 

        <Button onClick={(e) => deleteTask(data.uuid)} type="danger">
          <DeleteOutlined />
        </Button>
        </Row>
      ),
    },
  ];
  const data = todos;
  return (
    <Layout>
      <Content>
        <ConfigProvider locale={en_US}>
          <PageContainer
            ghost
            style={{
              minHeight: "88vh",
            }}
          >
            <ProTable
              locale={en_US}
              columns={columns}
              rowKey="index"
              pagination={false}
              pagination={{
                total: totalPage,
                defaultPageSize: 10,
                showSizeChanger: true,
                onChange: onShowSizeChangeTask,
              }}
              dataSource={data}
              search={false}
              style={{
                textAlign: "right",
              }}
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
                  type="dashed"
                  size="large"
                  style={{
                    color: "skyblue",
                  }}
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
    </Layout>
  );
};
export default Todos;
