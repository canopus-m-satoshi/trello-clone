import React from 'react'
import TaskCardDeleteButton from './TaskCardDeleteButton'
import TaskCardInput from './TaskCardInput'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'

function TaskCard() {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskCardInput />
      <Tasks />
    </div>
  )
}

export default TaskCard
