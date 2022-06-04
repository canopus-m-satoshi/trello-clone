import React from 'react'

function TasAddInput({ inputText, setInputText, taskList, setTaskList }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    setTaskList([...taskList, { text: inputText }])
    setInputText('')
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
          value={inputText}
        />
      </form>
    </div>
  )
}

export default TasAddInput
