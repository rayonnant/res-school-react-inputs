import React from 'react'
import {SignIn} from './components/SignIn'
import {SignUp} from './components/SignUp'

interface SignInProps {
    email: string
    password: string
}

interface SignUpProps extends SignInProps {
    name: string
    nickname: string
    email: string
    gender: string
    password: string
    repeatPassword: string
}


function App(): React.JSX.Element {
    const handleSignIn = (data: SignInProps): void => {
        console.log('SignIn data: ', data)
    }

    const handleSignUp = (data: SignUpProps): void => {
        console.log('SignUp data: ', data)
    }

    return (
        <div className="App">
            <SignIn onSubmit={handleSignIn}/>
            <SignUp onSubmit={handleSignUp}/>
        </div>
    )
}

export default App
