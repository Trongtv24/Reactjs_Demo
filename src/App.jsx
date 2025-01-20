
import './Components/todo/todo.css'
import reactLogo from './assets/react.svg';
import TodoNew from './Components/todo/TodoNew';
import TodoData from './Components/todo/TodoData';

const App = () => {

  const hoidanit = "Eric Arsenal";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  //{key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={hoidanit}
        age={age}
        data={data} />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App