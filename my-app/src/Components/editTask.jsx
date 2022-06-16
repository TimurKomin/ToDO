import { DefaultHeader,  ProForm } from '@ant-design/pro-form';
import React, { Component, ReactNode } from 'react';
import { ProFormText } from '@ant-design/pro-form';
import { Button, ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import Todos from "./Todos";
import { http } from "../api/http";
import { getValue } from '@testing-library/user-event/dist/utils';
import { PageContainer } from "@ant-design/pro-layout"
// import { withRouter } from "react-router"

class EditTask extends Component {
    

        constructor(props) {
            super(props);
            this.state = {
            inputValue:""
            
            };
            
        } 
        
     

        changeTask = async (uuid) => {
                try {
                    const res = await http.patch(`/patchTask/?uuid=${this.props.params.id}`, {
                    title: this.state.inputValue,
                    
                });
                console.log(res)
                } catch (err) {
                console.log("asdasdsdas",err);
                }
            };
        
        //     openInput = () => {
        //         setInputCreate((prev) => !prev);
        //         rewrite();
        //     };
        //     rewrite = () => {
        //         let valueItem = todo.title;
        //         setInputItemValue(valueItem);
        //         return valueItem;
        //     };
        
        //     saveTask = (e) => {
        //         setInputItemValue(e.target.value);
        //     };
        
        componentDidMount() {
            this.getTodos()
        }
         getTodos = async () => {
            try {
              const response = await http.get(
                "/getTask?page=0&order=asc&allPerPage=10000&filterBy="
              );
              const res = response.data.rows.find((item) => item.uuid === this.props.params.id)
              console.log(res)
              console.log(this.props.params.id)
              this.setState({inputValue: res.title})
            } catch (err) {
              console.log("asdasddas",err);
            }
          };

          getValue = (e) => {
            const value = e.target.value;
            this.setState({ inputValue: value });
            // e.preventDefault();
            // console.log(this.state.inputValue)
        };

        render() { 
              
            const a = window.location;
            console.log(this.props);
        return  <div style={{
            height: 834
        }}><ConfigProvider     locale={en_US}> 
            <PageContainer title="Task Edit">
            <ProForm onFinish={() => this.changeTask()}>
            <ProFormText name={'ProEdit'} fieldProps={{ 
                value: this.state.inputValue,
                onChange: (e) => this.getValue(e)
            }}  />;
            <Button onClick={console.log("1")} type="primary" style={{
                backgroundColor:"green"
            }}>SaveChange</Button>
            </ProForm>
            </PageContainer>
        </ConfigProvider> </div>   
        }
    }
    
export default EditTask;
