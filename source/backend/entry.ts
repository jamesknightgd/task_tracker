import * as express from "express"
import * as bodyParser from "body-parser"
import * as path from "path"
import * as fs from "fs"
import {promisify} from "util"

import handleRequestGetTodaysTaskList from "./request_handlers/get_todays_task_list"
import handleRequestUpdateTaskIsComplete from "./request_handlers/update_task_is_complete"
import handleRequestGetWeekTaskList from "./request_handlers/get_weeks_task_list"
import handleRequestGetMonthsTaskList from "./request_handlers/get_months_task_list"

const app                     : express.Express = express()
const port                    : number          = 8001
const pathToFrontendResources : string = path.resolve(`..`, `frontend`)

app.use(bodyParser.json())

/*
    Responsibility
        Respond to requests for the index.html file.      
*/
app.get(`/`, 
    async (request,response)=>
    {
        const pathToIndex   : string = path.resolve(pathToFrontendResources, "index.html")
        const indexFileData : string = (await promisify(fs.readFile)(pathToIndex)).toString()

        response.type('text/html').status(200).send(indexFileData)
    })

/*
    Responsibility
        Respond to requests for the entry.js file.      
*/
app.get(`/entry.js`, 
    async (request,response)=>
    {
        const pathToEntry   : string = path.resolve(pathToFrontendResources, "entry.js")
        const entryFileData : string = (await promisify(fs.readFile)(pathToEntry)).toString()

        response.type('text/javascript').status(200).send(entryFileData)
    })

handleRequestGetTodaysTaskList(app)
handleRequestGetWeekTaskList(app)
handleRequestUpdateTaskIsComplete(app)
handleRequestGetMonthsTaskList(app)

app.listen(port, ()=>{})