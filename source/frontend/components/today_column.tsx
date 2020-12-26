import * as React from "react"
import {Box, Grid, Typography, Divider, makeStyles, FormControl, FormControlLabel} from "@material-ui/core"

import TaskListColumn from "./task_list_column"

import colors from "./../libraries/colors"

import TaskList from "./../../shared/task_list/interface"

import cDayFromTodaysDate from "./../../shared/day/compute/from_todays_date"

export default function TodayColumn() : JSX.Element
{
    const [todaysTaskList, setTodaysTaskList] = React.useState<TaskList | null>(null)

    const hasInitialized = React.useRef<boolean>(false)
    React.useEffect(()=>
    {
        if(hasInitialized.current) return

        hasInitialized.current = true
        refreshTodaysTaskList()
    }) 

    async function refreshTodaysTaskList()
    {
        const response = await fetch("/api/todaysTaskList", {method: "get", headers:{"Accept": "application/json"}})
        setTodaysTaskList(await response.json() as TaskList) 
    }

    return(
        <Box height={`calc(100% - 6px * 2)`} width={`calc(100% - 6px)`} m="6px" mr="0px" bgcolor={colors.primary.dark} overflow="auto">
            <Grid container direction="column" justify="flex-start" alignItems="center" style={{height: "100%", width: "100%"}}>
            
                <Box height="5%" pt="4px">
                    <Typography variant="h6" color="textPrimary">
                        {cDayFromTodaysDate()}
                    </Typography>
                </Box>

                <Box height="2%" width="100%">
                    <Divider variant="middle"/>
                </Box>

                <Box height="calc(100% - 5% - 2%)" width="100%" pt="4px">
                    {
                        todaysTaskList === null ? null : <TaskListColumn type="Day" refreshTaskList={refreshTodaysTaskList} taskList={todaysTaskList}/>
                    }
                </Box>

            </Grid>
        </Box>
    )
}