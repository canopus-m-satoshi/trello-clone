import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Task({ task, taskList, setTaskList }) {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  return (
    <div className="taskBox">
      ß<p className="taskText">{task.text}</p>
      <button
        className="taskTrashButton"
        onCßlick={() => handleDelete(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  )
}

export default Task
