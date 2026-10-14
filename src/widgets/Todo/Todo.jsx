import {useContext} from "react";
import {TasksContext} from "@/entities/todo";
import AddTaskForm from "@/features/add-task"
import SearchTaskForm from "@/features/search-task";
import TodoInfo from "@/features/stats";
import Button from "@/shared/ui/Button";
import {TodoList} from "@/entities/todo";

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