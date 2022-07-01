import { ProForm, ProFormCheckbox, } from "@ant-design/pro-form";
import React, { Component } from "react";
import { ProFormText } from "@ant-design/pro-form";
import {
  notification,
  Button,
  Col,
  ConfigProvider,
  Row,
} from "antd";
import en_US from "antd/lib/locale/en_US";
import { PageContainer } from "@ant-design/pro-layout";
import { editionTask } from "./schema";
const formRef = React.createRef();
class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      checkBox: false,
    };
  }

  changeTask = async (proper) => {

    try {
      await this.props.client.mutate({
        mutation: editionTask,
        variables: {
          title: proper.title,
          done: proper.checkbox,
          uuid: this.props.params.id,
        },
        fetchPolicy: "network-only",
        
      });
      this.props.history("/");
      notification.success({message: "Task changed"})
    } catch (Error) {
      notification.error({ message: `${Error}` });
    }
  };

  componentWillMount() {
    this.getTodos();
  }


  getTodos = (e) => {
    this.setState({ inputValue: this.props.storeTask.state.title });
    this.setState({ checkBox: this.props.storeTask.state.done });
  };

  render() {
    return (
      <div
        style={{
          height: 834,
        }}
      >
        <ConfigProvider locale={en_US}>
          <PageContainer
            style={{
              width: "90%",
              marginLeft: 30,
              display: "grid",
              justifyContent: "space-between",
            }}
            title="Task Edit"
          >
            <span
              style={{
                color: "skyblue",
                marginRight: 10,
              }}
            >
              DONE
            </span>
            <ProForm
              style={{
                width: "110%",
                minHeight: "87vh",
              }}
              formRef={formRef}
              onFinish={this.changeTask}
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
                          htmlType="submit"
                          style={{}}
                        >
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  );
                },
              }}
            > 
              <ProFormCheckbox
              name="checkbox"
              initialValue={this.state.checkBox}
            />
              <ProFormText
              initialValue={this.state.inputValue}
                label="TASK NAME"
                width={"140%"}
                rules={[
                  {
                    validator(_, value) {
                      if (value.trim()) {
                        return Promise.resolve();
                      }
                      return Promise.reject("please enter Task");
                    },
                  },
                ]}
                name="title"
              ></ProFormText>
            </ProForm>
          </PageContainer>
        </ConfigProvider>{" "}
      </div>
    );
  }
}

export default EditTask;
