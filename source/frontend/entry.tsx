import * as React from "react"
import * as ReactDOM from "react-dom"
import { createMuiTheme, ThemeProvider, Theme, Grid, responsiveFontSizes, Box } from "@material-ui/core"
import ScopedCSSBaseline from "@material-ui/core/ScopedCssBaseline"

import colors from "./libraries/colors"

import ToolColumn from "./components/tool_column"
import TodayColumn from "./components/today_column"
import WeekColumn from "./components/week_column"
import MonthColumn from "./components/month_column"

let theme: Theme = createMuiTheme(
    {
        palette:
        {
            ...colors,
        },
    }
)
theme = responsiveFontSizes(theme)

interface Props
{
}
function ReactRoot(props: Props)
{
    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor="primary.main" width="100%" height="100%" overflow="hidden">
                <Grid container direction="row" style={{height: "100%", width: "100%"}}>

                    <Grid item style={{height: "100%", width: "33.33%"}}>
                        <TodayColumn/>
                    </Grid>

                    <Grid item style={{height: "100%", width: "33.33%"}}>
                        <WeekColumn/>
                    </Grid>

                    <Grid item style={{height: "100%", width: "33.33%"}}>
                        <MonthColumn/>
                    </Grid>

                </Grid>
                
            </Box>
        </ThemeProvider>
    )
}

ReactDOM.render(<ReactRoot></ReactRoot>, document.getElementById("react-root"))