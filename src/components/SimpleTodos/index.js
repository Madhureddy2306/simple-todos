import {Component} from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {v4 as uuidv4} from 'uuid'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, newTodo: ''}

  deleteTodoMain = id => {
    const {todoList} = this.state
    const filteredList = todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredList})
  }

  updateTodo = event => {
    this.setState({newTodo: event.target.value})
  }

  addTodo = () => {
    const {newTodo} = this.state
    const array = newTodo.split(' ')

    if (newTodo !== '' && array[1]===undefined) {
      const newItem = {
        id: uuidv4(),
        title: newTodo,
      }

      this.setState(preState => ({
        todoList: [...preState.todoList, newItem],
        newTodo: '',
      }))
    } else {
      let num = array[1]

      while (num > 0) {
        const newItem = {
          id: uuidv4(),
          title: array[0],
        }

        this.setState(preState => ({
          todoList: [...preState.todoList, newItem],
          newTodo: '',
        }))
        num -= 1
      }
    }
  }

  render() {
    const {todoList, newTodo} = this.state

    return (
      <div className="main">
        <div className="card">
          <h1>Simple Todos</h1>
          <input
            type="text"
            className="input"
            value={newTodo}
            onChange={this.updateTodo}
          />
          <button type="button" onClick={this.addTodo}>
            Add
          </button>
          <ul>
            {todoList.map(eachTodo => (
              <TodoItem
                todoDetails={eachTodo}
                deleteTodoMain={this.deleteTodoMain}
                key={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
