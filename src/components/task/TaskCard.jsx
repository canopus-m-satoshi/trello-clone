import React from 'react'
import TaskCardDeleteButton from './TaskCardDeleteButton'
import TaskAddInput from './TaskAddInput'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'

function TaskCard() {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  )
}

export default TaskCard
