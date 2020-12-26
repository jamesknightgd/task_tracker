import * as React from "react"
import {Box, Grid, Button, Divider} from "@material-ui/core"
import {Add} from "@material-ui/icons"

import colors from "./../libraries/colors"

export default function ToolColumn() : JSX.Element
{
    function addNewTask() : void
    {
        
    }

    return(
        <Box height={`calc(100% - 6px * 2)`} width={`calc(100% - 6px)`} m="6px" mr="0px" bgcolor={colors.primary.dark}>
            <Grid container direction="column" style={{height: "100%", width: "100%"}}>

            <Divider variant="middle"/>

            <Button startIcon={<Add style={{color: colors.primary.light}}/>}  onClick={addNewTask}>
                Daily Task
            </Button>

            <Divider variant="middle"/>

            <Button startIcon={<Add style={{color: colors.primary.light}}/>}  onClick={addNewTask}>
                Weekly Task
            </Button>

            <Divider variant="middle"/>

            <Button startIcon={<Add style={{color: colors.primary.light}}/>}  onClick={addNewTask}>
                Monthly Task
            </Button>

            <Divider variant="middle"/>

            </Grid>
        </Box>
    )
}