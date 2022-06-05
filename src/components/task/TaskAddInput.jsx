import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function TasAddInput({ inputText, setInputText, taskList, setTaskList }) {
  const handleSubmit = (e) => {
    const taskID = uuidv4()

    e.preventDefault()
    if (inputText === '') {
      return
    }

    setTaskList([
      ...taskList,
      {
        id: taskID, // 配列の長さをIDとする
        draggableId: `task-${taskID}`,
        text: inputText,
      },
    ])
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
