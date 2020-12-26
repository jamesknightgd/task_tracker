import Document from "./../document/interface"

export default interface Task extends Document
{
    type: "Task",
    isComplete: boolean,

    time?: string,
    url?: string
}