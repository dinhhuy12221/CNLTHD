import Calculator from './Calculator/components/Calculator'
import Game from './Tic-Tac-Toe/components/Game'
import ToDoList from './Todo-List/ToDoList'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='tictactoe' element={<Game/>}></Route>
          <Route path='calculator' element={<Calculator/>}></Route>
          <Route path='todolist' element={<ToDoList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

function Header() {

  return(
    <head className='header'>
      <a href='tictactoe' target=''>Tic-Tac-Toe</a>
      <a href='calculator' target=''>Calculator</a>
      <a href='todolist' target=''>Todo List</a>
    </head>
  );
}

export default App;
