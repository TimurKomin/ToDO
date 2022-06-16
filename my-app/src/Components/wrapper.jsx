import React from 'react';
import { useLocation, useParams } from "react-router";
import EditTask from './editTask';
import Todos from './Todos';

const wrapperEdit = () => {
const paramsTask = useParams();
return <EditTask params={paramsTask} />
}

export default wrapperEdit;