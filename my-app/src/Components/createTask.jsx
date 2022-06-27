import ProForm, { DefaultHeader } from "@ant-design/pro-form";
import React, { Component, ReactNode } from "react";
import { ProFormText } from "@ant-design/pro-form";
import { notification, message, Button, Col, ConfigProvider, Row } from "antd";
import en_US from "antd/lib/locale/en_US";
import Todos from "./Todos";
import { http } from "../api/http";
import { PageContainer } from "@ant-design/pro-layout";
import { Link } from "react-router-dom";
import { postTask } from "./schema";
class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputValue: "",
        };
    }

    taskCreate = async () => {
        if (this.state.inputValue.trim()) {
        try {
        
            const newTask = {
            title: this.state.inputValue,
            };

            const { data, error } = await this.props.client.mutate({
            mutation: postTask,
            variables: {
                title: newTask.title,
            },
            });
            notification.success({message: `task added`});
        } catch (error) {
        notification.error({message: `${error}`});
        }}
    };

    getValue = (e) => {
        const value = e.target.value;
        this.setState({ inputValue: value });
    };

    render() {
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
                submitter={{
                render: () => {
                    return (
                    <Row>
                        <Col
                        style={{
                            padding: 10,
                        }}
                        >
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

                        <Col
                        style={{
                            padding: 10,
                        }}
                        >
                        {" "}
                        <Button
                            onClick={() => this.taskCreate()}
                            type="primary"
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
                    e.key === "Enter" ? this.taskCreate() : false,
                }}
                />
            </ProForm>
            </PageContainer>
        </ConfigProvider>
        );
    }
}

export default CreateTask;
