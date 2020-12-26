import * as express from "express"
import * as path from "path"
import * as fs from "fs"
import {promisify} from "util"

import TaskList from "../../shared/task_list/interface"

import monthTemplate from "../templates/month"

export default function handleRequestGetTodaysTaskList(app : express.Express)
{
    app.get("/api/monthsTaskList", async (request, response)=>
    {
        const todaysDate       : Date = new Date()

        const pathToMonthDir        : string = path.resolve("..", "..", "data", `${todaysDate.getFullYear()}_${todaysDate.getMonth() + 1}` )
        const pathToMonthlyTaskList : string = path.resolve(pathToMonthDir, `month.json`)
        
        const shouldCreateMonthDirectory : boolean = !fs.existsSync(pathToMonthDir)
        if(shouldCreateMonthDirectory) await promisify(fs.mkdir)(pathToMonthDir)
        
        const shouldCreateMonthlyTaskList : boolean = !fs.existsSync(pathToMonthlyTaskList)
        if(shouldCreateMonthlyTaskList) await promisify(fs.writeFile)(pathToMonthlyTaskList, JSON.stringify(monthTemplate, null, 4))

        const monthlyTaskList : TaskList = JSON.parse( (await promisify(fs.readFile)(pathToMonthlyTaskList)).toString() )

        response.status(200).type(`application/json`).send(monthlyTaskList)     
    })
}