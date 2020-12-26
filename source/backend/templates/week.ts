import Task from "./../../shared/task/interface"
import Tasks from "./../../shared/tasks/interface"
import TaskList from "./../../shared/task_list/interface"

const week : TaskList =
    {
        "🛒 Grocery Shopping":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "🛒 6 days & nights":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,

                    "🤗 Mental health podcast":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task
                }
        } as Tasks,

        "🧼 Washing":
        {
            type:       "Task",
            isComplete: false
        } as Task,

        "🧽 Deep Clean":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Air Fryer":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,
                    "Shower, using bleach":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,
                }
        } as Tasks,

        "☎️ Call Family":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Mum":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,
                    "Dad":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,
                    "Alex":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,
                    "Dylan":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,
                }
        } as Tasks,

        "💗 Industry Sync: Context":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Gamasutra":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://gamasutra.com/"
                    } as Task,

                    "Games Industry Biz":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://www.gamesindustry.biz/"
                    } as Task
                }
        } as Tasks,

        "💗 Industry Sync: Devlogs":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Youtube":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://www.youtube.com/feed/subscriptions"
                    } as Task,
                }
        } as Tasks,

        "💗 Industry Sync: Unity":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Blog":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://blogs.unity3d.com/"
                    } as Task,
                    "Whats New":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://unity3d.com/unity/whats-new"
                    } as Task,
                }
        } as Tasks,

        "💗 Industry Sync: UE4":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Blog":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://www.unrealengine.com/en-US/feed"
                    } as Task,
                }
        } as Tasks,

        "💗 Industry Sync: Godot":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "News":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://godotengine.org/news"
                    } as Task,
                    "Devlog":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://godotengine.org/devblog"
                    } as Task,
                }
        } as Tasks,

        "💗 Industry Sync: Spatial OS":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Blog":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://improbable.io/blog"
                    } as Task,
                }
        } as Tasks,

        "💗 Industry Sync: General":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "AWS Game Tech":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://aws.amazon.com/blogs/gametech/"
                    } as Task,
                    "Lumberyard":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://aws.amazon.com/blogs/gametech/category/game-development/amazon-lumberyard/"
                    } as Task,
                    "Crytek News":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://www.crytek.com/news"
                    } as Task,
                    "Phaser News":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://phaser.io/news"
                    } as Task,
                    "Our Machinery":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://ourmachinery.com/post/"
                    } as Task,
                }
        } as Tasks,

        "💗 Industry Sync: Game Trends":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Steam":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://store.steampowered.com/stats/Steam-Game-and-Player-Statistics?l=english"
                    } as Task,
                    "Android: Top Selling":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://play.google.com/store/apps/collection/cluster?clp=0g4cChoKFHRvcHNlbGxpbmdfcGFpZF9HQU1FEAcYAw%3D%3D:S:ANO1ljLtt38&gsr=Ch_SDhwKGgoUdG9wc2VsbGluZ19wYWlkX0dBTUUQBxgD:S:ANO1ljJCqyI"
                    } as Task,
                    "Android: Top Grossing":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://play.google.com/store/apps/collection/cluster?clp=0g4YChYKEHRvcGdyb3NzaW5nX0dBTUUQBxgD:S:ANO1ljLhYwQ&gsr=ChvSDhgKFgoQdG9wZ3Jvc3NpbmdfR0FNRRAHGAM%3D:S:ANO1ljIKta8"
                    } as Task,
                    "Android: Top Games":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://play.google.com/store/apps/collection/cluster?clp=0g4cChoKFHRvcHNlbGxpbmdfZnJlZV9HQU1FEAcYAw%3D%3D:S:ANO1ljJ_Y5U&gsr=Ch_SDhwKGgoUdG9wc2VsbGluZ19mcmVlX0dBTUUQBxgD:S:ANO1ljL4b8c"
                    } as Task,
                    "Twitch":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://www.twitch.tv/"
                    } as Task,
                }
        } as Tasks,

        "💗 Dependency Sync: WASM":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "WASM Website":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://webassembly.org/docs/future-features/"
                    } as Task,
                    "GitHub Proposals":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://github.com/WebAssembly/proposals"
                    } as Task,
                    "Roadmap":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://webassembly.org/roadmap/"
                    } as Task,
                    "Mozilla Hacks":
                    {
                        type:       "Task",
                        isComplete: false,
                        url:        "https://hacks.mozilla.org/category/webassembly/"
                    } as Task,
                }
        } as Tasks,

        "🎧 Download Podcasts":
        {
            type: "Tasks",
            time: null,
            tasks:
                {
                    "Subscriptions":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,
                    "Topic: WASM":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,
                    "Topic: Game Development":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,
                    "Topic: Game Engine":
                    {
                        type:       "Task",
                        isComplete: false,
                    } as Task,
                }
        } as Tasks,

        
    }

export default week