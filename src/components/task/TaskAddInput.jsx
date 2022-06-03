import React from 'react'

function TaskCardInput() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add a task" className="taskAddInput" />
      </form>
    </div>
  )
}

export default TaskCardInput
