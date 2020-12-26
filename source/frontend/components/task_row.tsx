import * as React from "react"
import {Box, Grid, Typography, Checkbox, FormControl, FormControlLabel, Link} from "@material-ui/core"

import colors from "../libraries/colors"

import Task from "../../shared/task/interface"

export interface Props
{
    task : Task,
    path : string[],
    onTaskUpdated: ()=>void,
    type: "Day" | "Week" | "Month"
}
export default function Task_Row(props : Props) : JSX.Element
{
    async function handleTaskChecked()
    {
        const response = await fetch("/api/updateTaskIsComplete", {method: "post", body: JSON.stringify({type: props.type, path: props.path}), headers:{"Content-Type": "application/json"}})
        if(response.status !== 200) throw `Expected Update Task As Completed response to be 200.`
        props.onTaskUpdated()
    }

    return(
        <Box width="100%">

            <Grid container direction="row" alignItems="center" justify="center" style={{width: "100%"}}>

                <Box width="15%">
                    <Checkbox size="small" style={{display:'table-cell'}} onChange={handleTaskChecked} checked={props.task.isComplete}/>
                </Box>

                <Box width="55%">
                    {
                        props.task.url !== undefined
                        ? <Typography variant="body2" style={{color: "cyan"}}><Link href={props.task.url} style={{color: "cyan"}}>{props.path[props.path.length - 1]}</Link></Typography>
                        : <Typography variant="body2" color="textPrimary">{props.path[props.path.length - 1]}</Typography>
                    }
                </Box>

                <Box width="30%">
                    {
                        props.task.time !== undefined 
                            ? <Typography variant="body1" color="textPrimary">{`⌚ ${props.task.time}`}</Typography>
                            : null
                    }
                </Box>

            </Grid>
        </Box>
    )
}