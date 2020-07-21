// Author Nicholas Glover
import React from "react"

const TaskCard = props => {
    return (
        <div>
            <h2>Task</h2>
            <div>
                <li>{props.task.task}</li>
                <li>{props.task.date}</li>
                <li>{props.task.isComplete ? "Complete" : "Unfinished"} <input type="checkbox" name="isComplete" value="Bike"></input></li>
            </div>
            <button type="button"
                onClick={() => props.history.push(`/tasks/${props.task.id}/edit`)}>
                Edit
            </button>
            <button type="button" onClick={() => props.deleteTask(props.task.id)}>Delete</button>
        </div>
    )
}

export default TaskCard