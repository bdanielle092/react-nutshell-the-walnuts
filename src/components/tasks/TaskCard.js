// Author Nicholas Glover
import React from "react"
import { link } from "react-router-dom"

const TaskCard = props => {
    return (
        <div>
            <h2>Task</h2>
            <div>
                <li>{props.task.task}</li>
                <li>{props.task.date}</li>
                <li>{props.task.isComplete ? "Complete" : "Unfinished"}</li>
            </div>
            <button type="button" onClick={() => props.deleteTask(props.task.id)}>Delete</button>
        </div>
    )
}

export default TaskCard