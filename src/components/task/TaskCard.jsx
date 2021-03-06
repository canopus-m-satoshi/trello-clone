import React, { useState } from 'react'
import TaskCardDeleteButton from './TaskCardDeleteButton'
import TaskAddInput from './TaskAddInput'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'

function TaskCard() {
  const [inputText, setInputText] = useState('')
  const [taskList, setTaskList] = useState([])

  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  )
}

export default TaskCard
