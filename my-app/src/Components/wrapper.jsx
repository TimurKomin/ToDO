import React from 'react';
import { useLocation, useNavigate, useParams } from "react-router";
import EditTask from './editTask';
import Todos from './Todos';

const wrapperEdit = () => {
const paramsTask = useParams();
const history = useNavigate()
return <EditTask params={paramsTask} history={history} />
}

export default wrapperEdit;