import React, { useState } from 'react';
import TasksManager from '../../modules/TaskManager';

const TasksForm = props => {
  const [task, setTasks] = useState({ task: "", date: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = evt.target.value;
    setTasks(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create task      
  object, invoke the TasksManager post method, and redirect to the full task list
  */
  const constructNewTasks = evt => {
    evt.preventDefault();
    if (task.task === "" || task.date === "")  {
      window.alert("Please input a task or date.");
    } else {
      setIsLoading(true);
      // Create the task and redirect user to task list
      TasksManager.post(task)
        .then(() => props.history.push("/tasks"));
    }
  };

  return (
    <>
    <form>
      <fieldset>
        <div className="formgrid">
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="task"
            placeholder="Task name"
          />
          <label htmlFor="task">Name</label>
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="date"
            placeholder="Task Date"
          />
          <label htmlFor="date">Task Date</label>
        </div>
        <div className="alignRight">
          <button
            type="button"
            disabled={isLoading}
            onClick={constructNewTasks}
          >Submit</button>
        </div>
      </fieldset>
    </form>
  </>
  );
};

export default TasksForm