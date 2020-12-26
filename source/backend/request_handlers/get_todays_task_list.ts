import * as express from "express"
import * as path from "path"
import * as fs from "fs"
import {promisify} from "util"

import TaskList from "../../shared/task_list/interface"

import tuesdayTemplate from "../templates/tuesday"

export default function handleRequestGetTodaysTaskList(app : express.Express)
{
    app.get("/api/todaysTaskList", async (request, response)=>
    {
        const date                : Date   = new Date()
        const pathToMonthDir      : string = path.resolve("..", "..", "data", `${date.getFullYear()}_${date.getMonth() + 1}` )
        const pathToDailyTaskList : string = path.resolve(pathToMonthDir, `${date.getDate()}.json`)
        
        const shouldCreateMonthDirectory : boolean = !fs.existsSync(pathToMonthDir)
        if(shouldCreateMonthDirectory) await promisify(fs.mkdir)(pathToMonthDir)
        
        const shouldCreateDailyTaskList : boolean = !fs.existsSync(pathToDailyTaskList)
        if(shouldCreateDailyTaskList)
        {
            const dayToTemplate : TaskList[] = [tuesdayTemplate, tuesdayTemplate, tuesdayTemplate, tuesdayTemplate, tuesdayTemplate, tuesdayTemplate, tuesdayTemplate]
            const dailyTaskList : TaskList   = dayToTemplate[date.getDay()]

            await promisify(fs.writeFile)(pathToDailyTaskList, JSON.stringify(dailyTaskList, null, 4))
        }

        const dailyTaskList : TaskList = JSON.parse( (await promisify(fs.readFile)(pathToDailyTaskList)).toString() )

        response.status(200).type(`application/json`).send(dailyTaskList)     
    })
}