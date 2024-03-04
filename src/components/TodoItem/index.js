import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodoMain} = props
  const {id, title} = todoDetails

  const deleteTodo = () => {
    deleteTodoMain(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
