import React from 'react'

// components
import Navbar from './component/Navbar/Navbar';
import SignInModal from './component/SignUp/SignInModal';

// global provider 
import { GlobalProvider } from './context/mainContext';

const App = () => {
    return (
        <GlobalProvider>
            <main>
                <Navbar/>
                <SignInModal/>
            </main>
        </GlobalProvider>
    )
}

export default App;
