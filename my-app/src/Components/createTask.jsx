import ProForm, { DefaultHeader  } from "@ant-design/pro-form";
import React, { Component, ReactNode } from "react";
import { ProFormText } from "@ant-design/pro-form";
import { Button, ConfigProvider } from "antd";
import en_US from "antd/lib/locale/en_US";
import Todos from "./Todos";
import { http } from "../api/http";
import { PageContainer } from "@ant-design/pro-layout"
class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputValue: "",
        };
    }

    // postTodos = async (obj) => {
       
    // };

    taskCraete = async () => {
        if (this.state.inputValue.trim()) {
        const newTask = {
            title: this.state.inputValue,
        };
        try {
            await http.post(`/postTask`, newTask);
            } catch (err) {
            console.log(err.response.data);
            //   notification.error({ message: err.response.data });
            // message("Задача не добавлена")
            console.log("Задача не добавлена");
            }
        }
    };
    getValue = (e) => {
        const value = e.target.value;
        this.setState({ inputValue: value });
        // e.preventDefault();
        // console.log(this.state.inputValue)
    };

    render() {
        return (
        <ConfigProvider locale={en_US}>
            <PageContainer title="test" style={{
                height: "100%",
            //    minHeight: 834
            }}>
            <ProForm>
            <ProFormText
            name="InputEdit"
            width="xs"
            fieldProps={{ onChange: (e) => this.getValue(e) }}
            label="new Task.."
            />
            <Button
            onClick={this.taskCraete}
            type="primary"
            style={{
                backgroundColor: "green",
            }}
            >
            ADD
            </Button>
            </ProForm>
            </PageContainer>
        </ConfigProvider>
        );
    }
    }

export default CreateTask;
