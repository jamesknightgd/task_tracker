import * as express from "express"
import * as path from "path"
import * as fs from "fs"
import {promisify} from "util"

import TaskList from "../../shared/task_list/interface"
import Task from "../../shared/task/interface"
import Tasks from "../../shared/tasks/interface"

import tuesdayTemplate from "../templates/tuesday"

export default function handleRequestUpdateTaskIsComplete(app : express.Express)
{
    app.post("/api/updateTaskIsComplete", async (request, response)=>
    {
        const date           : Date   = new Date()
        const pathToMonthDir : string = path.resolve("..", "..", "data", `${date.getFullYear()}_${date.getMonth() + 1}` )

        let pathTotaskList : string | null = null
        switch(request.body.type)
        {
            case "Day" : pathTotaskList = path.resolve(pathToMonthDir, `${date.getDate()}.json`); break;
            case "Week": 
            {
                const startOfWeekDate : Date = new Date()
                startOfWeekDate.setDate(date.getDate() - date.getDay())
                pathTotaskList = path.resolve(pathToMonthDir, `week_${startOfWeekDate.getDate()}.json`); break;
            }
            case "Month": pathTotaskList = path.resolve(pathToMonthDir, `month.json`); break;
        } 

        if(pathTotaskList === null) throw `Expected type to be Day or Week. Type: ${request.body.type}.`

        const doesTaskListFileExist : boolean = fs.existsSync(pathTotaskList)
        if(!doesTaskListFileExist) throw `Expected task list to exist. Path: ${pathTotaskList}`

        const taskList : TaskList = JSON.parse( (await promisify(fs.readFile)(pathTotaskList)).toString() )

        const pathToUpdate : string [] = request.body.path

        // Updating task.
        if(pathToUpdate.length === 1)
        {
            if(taskList[pathToUpdate[0]] === undefined) throw `Expected task at path to exist. Path: ${pathToUpdate[0]}.`;

            (taskList[pathToUpdate[0]] as Task).isComplete = !(taskList[pathToUpdate[0]] as Task).isComplete
        } 
        // Updating tasks
        else if(pathToUpdate.length === 2)
        {
            if(taskList[pathToUpdate[0]] === undefined || (taskList[pathToUpdate[0]] as Tasks).tasks[pathToUpdate[1]] === undefined) throw `Expected task at path to exist. Path: ${pathToUpdate}.`;

            (taskList[pathToUpdate[0]] as Tasks).tasks[pathToUpdate[1]].isComplete = !(taskList[pathToUpdate[0]] as Tasks).tasks[pathToUpdate[1]].isComplete
        }
        else throw `Expected path to update to be 1 or 2.`

        await promisify(fs.writeFile)(pathTotaskList, JSON.stringify(taskList, null, 4))

        response.status(200).send()
    })
}