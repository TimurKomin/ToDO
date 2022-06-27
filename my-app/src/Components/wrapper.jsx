import { useApolloClient, useMutation } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from "react-router";
import CreateTask from './createTask';
import EditTask from './editTask';
import Todos from './Todos';

const wrapperEdit = () => {
const paramsTask = useParams();
const storeTask = useLocation();
const history = useNavigate();
const client = useApolloClient();

const renderPage = () =>{
    if(window.location.href === 'http://localhost:3000/create'){
        return <CreateTask  params={paramsTask} history={history} client={client}/> 
    }else{
        return <EditTask storeTask={storeTask} params={paramsTask} history={history} client={client}/>
    }

}

return renderPage()
}

export default wrapperEdit;