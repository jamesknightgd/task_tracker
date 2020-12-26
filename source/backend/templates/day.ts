import Task from "./../../shared/task/interface"
import Tasks from "./../../shared/tasks/interface"
import TaskList from "./../../shared/task_list/interface"

const day : TaskList =
    {
        "🦮 Break after every pomodoro":
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

        "🦮 Communications only after breakfast, lunch, and dinner":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Email":
                    {
                        type:       "Task",
                        isComplete: true
                    } as Task,

                    "Facebook":
                    {
                        type:       "Task",
                        isComplete: true
                    } as Task,

                    "Phone":
                    {
                        type:       "Task",
                        isComplete: true
                    } as Task,
                }
        } as Tasks,

        "🏋️ Awake":
        {
            type: "Tasks",
            time: "06:15",
            tasks:
                {
                    "🎰 No internet except Lotto":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "🌊 Drink 1L of water":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "🛏️ No dallying - out of bed within 5 minutes":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task
                }
        } as Tasks,

        "💚 Morning Exercise":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "🍏 Eat Fruit":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "🚶 Morning Jog or Yoga":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "🚿 Shower":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,
                }
        } as Tasks,

        "🥣 Breakfast":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "🗒️ Gratitude Journal & Affirmations":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "🥣 Complex carbs, low simple carbs":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "💊 Supplements":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,
                }
        } as Tasks,

        "👉 Daily Direction":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "🖥️ Setup views: Pomodoro Tracker, Task Tracker":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "⏰ Set alarms 15mins before":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "🗳️ Add daily tasks":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,
                }
        } as Tasks,

        "🧠 Brain Training: Brilliant or Programming Challenge":
        {
            type:       "Task",
            time:       "20 minutes",
            isComplete: false
        } as Task,

        "🌮 Lunch":
        {
            type: "Tasks",
            time: "30 minutes",
            tasks:
                {
                    "☀️ Sit in park":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "🌮 Complex Carbs & Salad":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,
                }
        } as Tasks,

        "🌱 Water Plants":
        {
            type:       "Task",
            isComplete: false
        } as Task,

        "🧗‍♂️ Gym":
        {
            type: "Tasks",
            time: "16:00",
            tasks:
                {
                    "🧗‍♂️ Rockclimbing":
                    {
                        type:       "Task",
                        time:       "One circuit",
                        isComplete: false
                    } as Task,

                    "🏋️‍♂️ Strength":
                    {
                        type:       "Task",
                        time:       "One circuit",
                        isComplete: false
                    } as Task,
                }
        } as Tasks,

        "🥘 Dinner":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "🥕 Vegetables & Complex carbs":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,
                }
        } as Tasks,

        "🧽 Clean up apartment":
        {
            type: "Tasks",
            time: "19:30",
            tasks:
                {
                    "Dishes":
                        {
                            type:       "Task",
                            isComplete: false
                        } as Task,

                    "Disinfect":
                        {
                            type:       "Task",
                            isComplete: false
                        } as Task,

                    "Organize workspace":
                        {
                            type:       "Task",
                            isComplete: false
                        } as Task,
                }
        } as Tasks,

        "🧼 Hygiene":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Floss":
                        {
                            type:       "Task",
                            isComplete: false
                        } as Task,
                    "Brush Teeth":
                        {
                            type:       "Task",
                            isComplete: false
                        } as Task,
                    "Shave":
                        {
                            type:       "Task",
                            isComplete: false
                        } as Task,
                    "Moisturize":
                        {
                            type:       "Task",
                            isComplete: false
                        } as Task,
                }
        } as Tasks,

        "💭 Retrospection":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "💭 Daily retrospection in document":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "🌐 Turn off internet":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,

                    "📙 Read":
                    {
                        type:       "Task",
                        time:       "30 minutes",
                        isComplete: false
                    } as Task,

                    "✔️ Mark all tasks":
                    {
                        type:       "Task",
                        isComplete: false
                    } as Task,
                }
        } as Tasks,
    }

export default day