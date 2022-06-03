import React from 'react'

function TaskCardInput({ inputText, setInputText, taskText, setTaskText }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default TaskCardInput