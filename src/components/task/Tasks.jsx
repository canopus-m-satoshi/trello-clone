import React from 'react'
import Task from './Task'

function Tasks({ taskList, setTaskList }) {
  return (
    <div>
      {taskList.map((task, index) => (
        <Task
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
          key={index}
        />
      ))}
    </div>
  )
}

export default Tasks
