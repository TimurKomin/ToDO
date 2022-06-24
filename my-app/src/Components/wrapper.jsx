import { useApolloClient } from '@apollo/react-hooks';
import React from 'react';
import { useLocation, useNavigate, useParams } from "react-router";
import EditTask from './editTask';
import Todos from './Todos';

const wrapperEdit = () => {
const paramsTask = useParams();
const history = useNavigate();
const client = useApolloClient();
return <EditTask params={paramsTask} history={history} client={client}/>
}

export default wrapperEdit;