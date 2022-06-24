import { DefaultHeader, ProForm } from "@ant-design/pro-form";
import React, { Component, ReactNode } from "react";
import { ProFormText } from "@ant-design/pro-form";
import { notification, message, Button, Checkbox, Col, ConfigProvider, Row } from "antd";
import en_US from "antd/lib/locale/en_US";
import Todos from "./Todos";
import { http } from "../api/http";
import { getValue } from "@testing-library/user-event/dist/utils";
import { PageContainer } from "@ant-design/pro-layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      checkBox: false
    };
  }

  changeTask = async (uuid) => {
    try {
      const res = await http.patch(`/patchTask/?uuid=${this.props.params.id}`, {
        title: this.state.inputValue,
        done: this.state.checkBox
      });
      console.log(res);
    
      if (res.status === 200) {
        // window.location.replace("/");
        this.props.history("/");
      
    }
    this.getTodos()
    } catch (err) {
      console.log("asdasdsdas", err);
    }
  };

  componentDidMount() {
    this.getTodos();
  }
  getTodos = async (e) => {
    try {
      const response = await http.get(
        "/getTask?page=0&order=asc&allPerPage=10000&filterBy="
      );
      const res = response.data.rows.find(
        (item) => item.uuid === this.props.params.id
      );
      this.setState({ inputValue: res.title });
      this.setState({checkBox: res.done})
    } catch (err) {
      notification.error({message: err.response.data})
    }
  };

  getValue = (e) => {
    const value = e.target.value;
    this.setState({ inputValue: value });
  };

  

  render() {
    const a = window.location;
    console.log(this.props);
    // console.log(this.props);
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
          ><span style={{
            color:"skyblue", marginRight: 10}}>DONE</span>
            <Checkbox 
            onChange={() => this.setState({checkBox: !this.state.checkBox})}
             checked={this.state.checkBox}
             />
            <ProForm
              style={{
                width: "110%",
                minHeight: "87vh",
              }}
              submitter={{
                render: () => {
                  return (
                    <Row>
                    <Col style={{
                            padding: 10
                        }} ><Button
                      href="/"
                      type="primary"
                      style={{
                        backgroundColor: "green",
                      }}
                    >
                      BACK
                    </Button></Col>
                    <Col style={{
                            padding: 10
                        }} > <Button onClick={() =>
                this.changeTask()} type="primary"  style={{

                    }}>
                      Submit
                    </Button></Col>
                  </Row>
                  
                  );
                },
                
              }}
            >
              <ProFormText
              
              label={ 
                "TASK NAME"}
              width={
              "140%"
              }
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
                name={"ProEdit"}
                fieldProps={{
                  value: this.state.inputValue,
                  onChange: (e) => this.getValue(e),
                  onKeyDown: (e) =>
                    e.key === "Enter" ? this.changeTask() : false,
                }}
              ></ProFormText>
            </ProForm>
          </PageContainer>
        </ConfigProvider>{" "}
      </div>
    );
  }
}

export default EditTask;
