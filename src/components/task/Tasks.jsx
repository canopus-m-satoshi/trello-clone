import React from 'react'

function Tasks({ inputText, taskList }) {
  return (
    <div>
      {taskList.map((task, index) => (
        <div key={index}>{task.text}</div>
      ))}
    </div>
  )
}

export default Tasks
