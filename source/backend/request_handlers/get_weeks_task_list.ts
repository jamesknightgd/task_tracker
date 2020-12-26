import * as express from "express"
import * as path from "path"
import * as fs from "fs"
import {promisify} from "util"

import TaskList from "../../shared/task_list/interface"

import weekTemplate from "../templates/week"

export default function handleRequestGetTodaysTaskList(app : express.Express)
{
    app.get("/api/weeksTaskList", async (request, response)=>
    {
        const todaysDate      : Date = new Date()
        const startOfWeekDate : Date = new Date()
        startOfWeekDate.setDate(todaysDate.getDate() - todaysDate.getDay())

        const pathToMonthDir      : string = path.resolve("..", "..", "data", `${todaysDate.getFullYear()}_${todaysDate.getMonth() + 1}` )
        const pathToWeeklyTaskList : string = path.resolve(pathToMonthDir, `week_${startOfWeekDate.getDate()}.json`)
        
        const shouldCreateMonthDirectory : boolean = !fs.existsSync(pathToMonthDir)
        if(shouldCreateMonthDirectory) await promisify(fs.mkdir)(pathToMonthDir)
        
        const shouldCreateWeeklyTaskList : boolean = !fs.existsSync(pathToWeeklyTaskList)
        if(shouldCreateWeeklyTaskList) await promisify(fs.writeFile)(pathToWeeklyTaskList, JSON.stringify(weekTemplate, null, 4))

        const weeklyTaskList : TaskList = JSON.parse( (await promisify(fs.readFile)(pathToWeeklyTaskList)).toString() )

        response.status(200).type(`application/json`).send(weeklyTaskList)     
    })
}