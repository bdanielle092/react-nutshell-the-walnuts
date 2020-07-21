import React, { useState, useEffect } from "react"
import TaskManager from "../../modules/TaskManager"

const TaskEditForm = props => {
  const [task, setTask] = useState({ task: "", date: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };

  const updateExistingTask = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedTask = {
      id: props.match.params.taskId,
      task: task.task,
      date: task.date
    };

    TaskManager.update(editedTask)
      .then(() => props.history.push("/tasks"))
  }

  useEffect(() => {
    TaskManager.get(props.match.params.taskId)
      .then(task => {
        setTask(task);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="task"
              value={task.task}
            />
            <label htmlFor="task">Task name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={task.date}
            />
            <label htmlFor="date">Date</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingTask}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default TaskEditForm