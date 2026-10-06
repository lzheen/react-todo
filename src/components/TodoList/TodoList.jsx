import {memo, useContext} from "react";

import {TasksContext} from "../../context/TasksContext.jsx";
import TodoItem from "../TodoItem/TodoItem.jsx";


const TodoList = (props) => {
  const {
    styles
  } = props

  const {
    tasks,
    filteredTasks,
    hasTasks
  } = useContext(TasksContext)


  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if (!hasTasks) {
    return <div className={styles.emptyMessage}>No tasks :(</div>
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className={styles.emptyMessage}> Tasks not found :(</div>
  }

  return (
    <ul className={styles.list}>
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          className={styles.item}
          key={task.id}
          id={task.id}
          title={task.title}
          isDone={task.isDone}

        />
      ))}
    </ul>
  )
}

export default memo(TodoList)