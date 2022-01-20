import CardFormTodo from './components/cardFormTodo/CardFormTodo'
import CardTodoList from './components/cardTodolist/CardTodoList'
import Donetodo from './components/doneTodo/DoneTodo'
import './App.css'
function App() {
  return (
    <div className="App">
     <CardFormTodo />
     <CardTodoList />
     <Donetodo />
    </div>
  );
}

export default App;
