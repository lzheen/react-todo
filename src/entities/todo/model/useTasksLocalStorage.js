const useTasksLocalStorage = () => {
  const savedTasks = localStorage.getItem('todo');

  const saveTasks = (tasks) => {
    localStorage.setItem('todo', JSON.stringify(tasks))
  }

  return {
    savedTasks: savedTasks ? JSON.parse(savedTasks) : null,
    saveTasks,
  }
}

export default useTasksLocalStorage