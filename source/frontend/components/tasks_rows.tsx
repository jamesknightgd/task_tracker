import * as React from "react"
import {Box, Grid, Typography, Divider, makeStyles, Checkbox} from "@material-ui/core"

import colors from "../libraries/colors"

import Task from "../../shared/task/interface"
import Tasks from "../../shared/tasks/interface"

import Task_Row from "./task_row"

export interface Props
{
    tasks : Tasks,
    path  : string,
    onTaskUpdated: ()=>void,
    type: "Day" | "Week" | "Month"
}
export default function Tasks_Rows(props : Props) : JSX.Element
{
    function areAllTasksCompleted() : boolean
    {
        for(const taskName in props.tasks.tasks)
        {
            const task : Task = props.tasks.tasks[taskName]
            if(!task.isComplete) return false
        }

        return true
    }

    return(
        <Box width="100%">
            <Grid container direction="column">
                <Grid container direction="row" alignItems="center" justify="center" style={{width: "100%"}}>

                    <Box width="15%">
                        <Checkbox size="small" disabled checked={areAllTasksCompleted()}/>
                    </Box>

                    <Box width="55%">
                        <Typography variant="body2" color="textPrimary">{props.path}</Typography>
                    </Box>

                    <Box width="30%">
                        {
                            props.tasks.time !== null 
                                ? <Typography variant="body1" color="textPrimary">{`⌚ ${props.tasks.time}`}</Typography>
                                : null
                        }
                    </Box>

                </Grid>

                <Grid container direction="row" alignItems="center" justify="center" style={{width: "100%",}}>
                {
                    Object.keys(props.tasks.tasks).map(
                        (taskName)=>
                        {
                            return(
                                <Grid key={taskName} container direction="row">
                                    <Box width="10%" height="100%"/>
                                    <Box width="90%"><Task_Row onTaskUpdated={props.onTaskUpdated} task={props.tasks.tasks[taskName]} path={[props.path, taskName]} type={props.type}/></Box>
                                </Grid>
                            )
                        }
                    )
                }
                </Grid>


            </Grid>

            
        </Box>
    )
}