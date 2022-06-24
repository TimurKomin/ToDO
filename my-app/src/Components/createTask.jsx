import ProForm, { DefaultHeader } from "@ant-design/pro-form";
import React, { Component, ReactNode } from "react";
import { ProFormText } from "@ant-design/pro-form";
import { notification, message, Button, Col, ConfigProvider, Row } from "antd";
import en_US from "antd/lib/locale/en_US";
import Todos from "./Todos";
import { http } from "../api/http";
import { PageContainer } from "@ant-design/pro-layout";
import { Link } from "react-router-dom";
// import { withApollo } from "react-apollo";
class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputValue: "",
        };
    }

    taskCraete = async () => {
        if (this.state.inputValue.trim()) {
        const newTask = {
            title: this.state.inputValue,
        };

        try {
            if (newTask.title !== "") {
            const res = await http.post(`/postTask`, newTask);
            }
            notification.success({ message: "Задача добавлена" });

        } catch (err) {
            notification.error({ message: err.response.data });
        }
        }
    };
    getValue = (e) => {
        const value = e.target.value;
        this.setState({ inputValue: value });
        console.log(e.key);
    };

    render() {
        // console.log(this.props)
        return (
        <ConfigProvider locale={en_US}>
            <PageContainer
            title="Create Task"
            style={{
                marginLeft: 20,
                display: "grid",
                justifyContent: "space-between",
            }}
            >
            <ProForm
                style={{
                width: 600,
                minHeight: "79vh",
                }}
                onFinish={() => this.taskCraete()}
                submitter={{
                render: () => {
                    return (
                    <Row>
                        <Col style={{
                            padding: 10
                        }}>
                        <Button
                            href="/"
                            type="primary"
                            style={{
                            backgroundColor: "green",
                            
                            }}
                        >
                            BACK
                        </Button>
                        </Col>

                        <Col style={{
                            padding: 10
                        }}>
                        {" "}
                        <Button
                            onClick={() => this.taskCraete()}
                            type="primary"
                            style={{
                                // paddingRight: 30,
                                // marginRight: 30
                            }}
                        >
                            Submit
                        </Button>
                        </Col>
                    </Row>
                    );
                },
                }}
            >
                <ProFormText
                rules={[
                    {
                    required: true,
                    message: "Please enter task",
                    },
                ]}
                name="InputEdit"
                width="xs"
                fieldProps={{
                    onChange: (e) => this.getValue(e),
                    onKeyDown: (e) =>
                    e.key === "Enter" ? this.taskCraete() : false,
                }}
                // label="new Task.."
                />
            </ProForm>
            </PageContainer>
        </ConfigProvider>
        );
    }
}

export default CreateTask;
