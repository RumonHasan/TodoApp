import React from 'react'

// components
import Navbar from './component/Navbar/Navbar';
import SignInModal from './component/SignUp/SignInModal';
import TodoPage from './component/Todo/TodoPage';
import AddTodo from './component/Todo/AddTodo';

// style
import style_main from './style_main.css';

// global provider 
import { GlobalProvider } from './context/mainContext';

const App = () => {
    return (
        <GlobalProvider>
            <main>
                <Navbar/>
                <SignInModal/>
                <TodoPage/>
                <AddTodo/>
            </main>
        </GlobalProvider>
    )
}

export default App;
