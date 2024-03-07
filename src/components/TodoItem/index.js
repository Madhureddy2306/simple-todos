import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodoMain} = props
  const {id, title} = todoDetails

  const deleteTodo = () => {
    deleteTodoMain(id)
  }

  const editTodo = () => {
    const totdoEle = document.getElementById(title)
    const inEle = document.getElementById(`in${title}`)
    const btnEle = document.getElementById(`save${title}`)
    const btnEdit = document.getElementById(`edit${title}`)
    inEle.classList.toggle('hide')
    btnEle.classList.toggle('hide')
    btnEdit.classList.toggle('hide')
    inEle.value = totdoEle.textContent
    totdoEle.classList.toggle('hide')
  }

  const saveTodo = () => {
    const totdoEle = document.getElementById(title)
    const inEle = document.getElementById(`in${title}`)
    const btnEle = document.getElementById(`save${title}`)
    const btnEdit = document.getElementById(`edit${title}`)
    totdoEle.textContent = inEle.value
    inEle.classList.toggle('hide')
    btnEle.classList.toggle('hide')
    btnEdit.classList.toggle('hide')
    totdoEle.classList.toggle('hide')
  }

  const isChecked = () => {
    const totdoEle = document.getElementById(title)
    totdoEle.classList.toggle('line')
  }

  return (
    <li>
      <input type="checkbox" className="box" onClick={isChecked} />
      <p id={title}>{title}</p>
      <input type="text" className="in-ele hide" id={`in${title}`} />
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
      <button type="button" id={`edit${title}`} onClick={editTodo}>
        Edit
      </button>
      <button
        type="button"
        className="hide"
        id={`save${title}`}
        onClick={saveTodo}
      >
        Save
      </button>
    </li>
  )
}

export default TodoItem
