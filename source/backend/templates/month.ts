import Task from "./../../shared/task/interface"
import Tasks from "./../../shared/tasks/interface"
import TaskList from "./../../shared/task_list/interface"

const month : TaskList =
{
    "Do the thing Zhu Li":
    {
        type: "Tasks",
        time: null,
        tasks:
            {
                "🧘 Yoga":
                {
                    type:       "Task",
                    isComplete: true
                } as Task,

                "💧 Finish glass of water":
                {
                    type:       "Task",
                    isComplete: true
                } as Task,
            }
    } as Tasks,
}

export default month