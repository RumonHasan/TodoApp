import React from 'react'

// components
import Navbar from './component/Navbar/Navbar';
import SignInModal from './component/SignUp/SignInModal';
import TodoSidebar from './component/Todo/TodoSidebar';

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
                <TodoSidebar/>
            </main>
        </GlobalProvider>
    )
}

export default App;
