import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  notification,
  Button,
  Checkbox,
  ConfigProvider,
  Row,
} from "antd";
import en_US from "antd/lib/locale/en_US";
import { ProColumns } from "@ant-design/pro-form";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ProTable from "@ant-design/pro-table";
import { PageContainer } from "@ant-design/pro-layout";
import { useMutation, useQuery } from "@apollo/react-hooks";
import "antd/dist/antd.css";
import moment from "moment";
import { editionTask, getTasks, removeTask } from "./schema";
import { Layout } from "antd";

const { Content } = Layout;

const Todos = (props) => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [sortTasks, setSortTask] = useState("asc");
  const [totalPage, setTotalPage] = useState(0);
  const [statusFilter, setStatusFilter] = useState("OLD");
  const [allPerPage, setAllPerPage] = useState(10);
  const { data, refetch } = useQuery(getTasks, {
    variables: {
      filterBy: filter,
      order: sortTasks,
      allPerPage,
      page: currentPage,
    },
  });
  const [removeTaskMutation] = useMutation(removeTask);
  const [updateTask, { error: checkErr }] =
    useMutation(editionTask);
  useEffect(() => {
    if (data) {
      setTodos(data.tasks.task);
      setTotalPage(data.tasks.count);
    }
  }, [data]);


  useEffect(() => {
    if (todos.length === 0 && currentPage > 0) {
      const page = currentPage - 1;
      setCurrentPage(page);
    }
  }, [todos.length]);
useEffect(() => {
  refetch()
},[todos])




  const deleteTask = async (uuid) => {
    try {
      await removeTaskMutation({ variables: { uuid: uuid } });
      refetch();
      notification.success({ message: `task removed` });
    } catch (error) {
      notification.error({ message: "невозможно удалить" });
    }
  };


  const sortByDate = () => {
    setStatusFilter("NEW");
    if (statusFilter === "NEW") setStatusFilter("OLD");
    setSortTask("desc");
    if (sortTasks === "desc") setSortTask("asc");
  };



  const checkTask = async (e, uuid) => {
    const done = e.target.checked;
    try {
      await updateTask({ variables: { uuid: uuid, done: done } });
      refetch();
      notification.success({ message: "task checked" });

      if (todos.length > 0) {
      } else {
        setCurrentPage(currentPage - 1);
      }
    } catch (err) {
      notification.error({message: `${checkErr}`})
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
      dataIndex: "created_at",
      width: 200,
      align: "center",
      render: (created_at) => {
        const dateCreate = new Date(+created_at);
        const dateChange = moment(dateCreate);
        const stringDate = String(dateChange._i);
        const renderDate = stringDate.substring(0, 24);
        return renderDate;
      },
    },
    {
      title: "Edit | Delete",
      dataIndex: "done",
      width: 100,
      align: "center",
      render: (done, data) => (
        <Row
          style={{
            display: "grid",
            justifyContent: "center",
          }}
        >
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            state={{
              uuid: `${data.uuid}`,
              title: `${data.title}`,
              done: data.done,
            }}
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
  const dataArr = todos;
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
              options={{
                reload: () => refetch() | true,
              }}
              locale={en_US}
              columns={columns}
              rowKey="index"
              pagination={{
                total: totalPage,
                defaultPageSize: 10,
                showSizeChanger: true,
                onChange: onShowSizeChangeTask,
              }}
              dataSource={dataArr}
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
