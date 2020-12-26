import * as React from "react"
import {Box, Grid, Typography, Divider, makeStyles} from "@material-ui/core"

import colors from "./../libraries/colors"

import TaskList from "./../../shared/task_list/interface"

import TaskListColumn from "./task_list_column"

export default function MonthColumn() : JSX.Element
{
    const [monthsTaskList, setMonthsTaskList] = React.useState<TaskList | null>(null)

    const hasInitialized = React.useRef<boolean>(false)
    React.useEffect(()=>
    {
        if(hasInitialized.current) return

        hasInitialized.current = true
        refreshMonthsTaskList()
    }) 

    async function refreshMonthsTaskList()
    {
        const response = await fetch("/api/monthsTaskList", {method: "get", headers:{"Accept": "application/json"}})
        setMonthsTaskList(await response.json() as TaskList) 
    }

    function cDaysRemainingInMonth() : number
    {
        const date = new Date()

        const lastDayOfMonth = new Date()
        lastDayOfMonth.setMonth(date.getMonth() + 1)
        lastDayOfMonth.setDate(0)

        return lastDayOfMonth.getDate() - date.getDate()
    }

    return(
        <Box height={`calc(100% - 6px * 2)`} width={`calc(100% - 6px * 2)`} m="6px" mr="6px" bgcolor={colors.primary.dark}>
            <Grid container direction="column" justify="flex-start" alignItems="center" style={{height: "100%", width: "100%"}}>

                <Box height="5%" pt="4px">
                    <Typography variant="h6" color="textPrimary">
                        {`Month - ⏳ ${cDaysRemainingInMonth()} days remaining.`}
                    </Typography>
                </Box>

                <Box height="2%" width="100%">
                    <Divider variant="middle"/>
                </Box>

                <Box height="calc(100% - 5% - 2%)" pt="4px" width="100%">
                    {
                        monthsTaskList !== null ? <TaskListColumn type="Month" refreshTaskList={refreshMonthsTaskList} taskList={monthsTaskList}/> : null
                    }
                </Box>

            </Grid>
        </Box>
    )
}