import * as React from "react"
import {Box, Grid, Typography, Divider, makeStyles} from "@material-ui/core"

import colors from "./../libraries/colors"

import TaskList from "./../../shared/task_list/interface"
import Task from "./../../shared/task/interface"
import Tasks from "./../../shared/tasks/interface"

import Task_Row from "./task_row"
import Tasks_Rows from "./tasks_rows"

export interface Props
{
    taskList : TaskList,
    refreshTaskList : ()=>void,
    type: "Day" | "Week" | "Month"
}
export default function TaskListColumn(props : Props) : JSX.Element
{

    return(
        <Box width="100%" height="100%">
            <Grid container direction="column" style={{height: "100%", width: "100%"}}> 
                {
                    Object.keys(props.taskList).map(
                        (taskName)=>
                        {
                            switch(props.taskList[taskName].type)
                            {
                                case `Task`:  return <Box key={taskName} width="100%"><Task_Row task={props.taskList[taskName] as Task} onTaskUpdated={props.refreshTaskList} path={[taskName]} type={props.type}/></Box>
                                case `Tasks`: return <Box key={taskName} width="100%"><Tasks_Rows tasks={props.taskList[taskName] as Tasks} onTaskUpdated={props.refreshTaskList} path={taskName} type={props.type}/></Box>
                                default: throw `Unhandled document type.`
                            }
                        }
                    )
                }
            </Grid>
        </Box>
    )
}