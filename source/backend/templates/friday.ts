import Task from "../../shared/task/interface"
import Tasks from "../../shared/tasks/interface"
import TaskList from "../../shared/task_list/interface"

import day from "./day"

const friday : TaskList =
    {
        "🦮 No takeout food":
        {
            type:   "Task",
            isComplete: true
        } as Task,

        ...day,
    }

export default friday