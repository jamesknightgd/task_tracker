import Task from "./../task/interface"
import Tasks from "./../task/interface"
import Document from "./../document/interface"

export default interface TaskList
{
    [key : string] : Document
}