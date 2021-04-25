import React from 'react'

// components
import Navbar from './component/Navbar/Navbar';
import SignInModal from './component/SignUp/SignInModal';
import TodoPage from './component/Todo/TodoPage';

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
            </main>
        </GlobalProvider>
    )
}

export default App;
