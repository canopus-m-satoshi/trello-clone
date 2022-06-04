import React from 'react'
import Task from './Task'

function Tasks({ taskList }) {
  return (
    <div>
      {taskList.map((task, index) => (
        <Task task={task} key={index} />
      ))}
    </div>
  )
}

export default Tasks
