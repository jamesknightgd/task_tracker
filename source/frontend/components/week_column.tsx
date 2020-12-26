import * as React from "react"
import {Box, Grid, Typography, Divider, makeStyles} from "@material-ui/core"

import TaskListColumn from "./task_list_column"

import TaskList from "./../../shared/task_list/interface"

import colors from "./../libraries/colors"

export default function WeekColumn() : JSX.Element
{
    const [weeksTaskList, setWeeksTaskList] = React.useState<TaskList | null>(null)

    const hasInitialized = React.useRef<boolean>(false)
    React.useEffect(()=>
    {
        if(hasInitialized.current) return

        hasInitialized.current = true
        refreshWeeksTaskList()
    }) 

    async function refreshWeeksTaskList()
    {
        const response = await fetch("/api/weeksTaskList", {method: "get", headers:{"Accept": "application/json"}})
        setWeeksTaskList(await response.json() as TaskList) 
    }

    function cDaysRemainingInWeek() : number
    {
        const date = new Date()
        return 7 - date.getDay()
    }

    return(
        <Box height={`calc(100% - 6px * 2)`} width={`calc(100% - 6px)`} m="6px" mr="0px" bgcolor={colors.primary.dark} overflow="auto">
            <Grid container direction="column" justify="flex-start" alignItems="center" style={{height: "100%", width: "100%"}}>

                <Box height="5%" pt="4px">
                    <Typography variant="h6" color="textPrimary">
                        {`Week - ⏳ ${cDaysRemainingInWeek()} days remaining.`}
                    </Typography>
                </Box>

                <Box height="2%" width="100%">
                    <Divider variant="middle"/>
                </Box>

                <Box height="calc(100% - 5% - 2%)" pt="4px">
                    {
                        weeksTaskList !== null ? <TaskListColumn type="Week" refreshTaskList={refreshWeeksTaskList} taskList={weeksTaskList}/> : null
                    }
                </Box>

            </Grid>
        </Box>
    )
}