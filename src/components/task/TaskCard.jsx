import React, { useState } from 'react'
import TaskCardDeleteButton from './TaskCardDeleteButton'
import TaskAddInput from './TaskAddInput'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'

function TaskCard() {
  const [inputText, setInputText] = useState('')
  const [taskText, setTaskText] = useState()

  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskText={taskText}
        setTaskText={setTaskText}
      />
      <Tasks />
    </div>
  )
}

export default TaskCard
