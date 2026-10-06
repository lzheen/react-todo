import {useContext} from "react";
import {TasksContext} from "../../context/TasksContext.jsx";
import Field from "../Field/Field.jsx";

const SearchTaskForm = (props) => {
  const {
    styles
  } = props

  const {
    searchQuery,
    setSearchQuery,
  } = useContext(TasksContext)
  return (
    <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
      <Field
        className={styles.field}
        label="Search Task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm