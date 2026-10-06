import {useContext} from "react";
import {TasksContext} from "../../context/TasksContext.jsx";
import AddTaskForm from "../AddTaskForm/AddTaskForm.jsx";
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm.jsx";
import TodoInfo from "../TodoInfo/TodoInfo.jsx";
import Button from "../Button/Button.jsx";
import TodoList from "../TodoList/TodoList.jsx";

import styles from './Todo.module.scss'

const Todo = () => {
  const {firstIncompleteTaskRef, hasTasks} = useContext(TasksContext)

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm
        styles={styles}
      />
      <SearchTaskForm
        styles={styles}
      />
      <TodoInfo
        styles={styles}
      />
      {hasTasks &&
        <Button
          onClick={() => {
            const el = firstIncompleteTaskRef.current
            if (!el) return
            el.scrollIntoView({behavior: "smooth", block: "center"})
            el.animate(
              [
                {backgroundColor: "rgba(255,19,19,0.5)"},
                {backgroundColor: "transparent"},
              ],
              {duration: 1200, easing: "ease-out"}
            )
          }}>
          Show first incomplete task
        </Button>
      }
      <TodoList
        styles={styles}
      />
    </div>
  )
}

export default Todo