import Document from "./../document/interface"
import Task from "./../task/interface"

export default interface Tasks extends Document
{
    type: "Tasks",
    time: null | string,
    tasks: { [key : string ] : Task }
}