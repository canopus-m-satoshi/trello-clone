import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'
import Task from './Task'

const reorder = (taskList, startIndex, endIndex) => {
  // タスクを並び替える
  const remove = taskList.splice(startIndex, 1)
  taskList.splice(endIndex, 0, remove[0])
}

function Tasks({ taskList, setTaskList }) {
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="doroppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    key={index}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
