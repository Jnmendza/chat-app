import React from 'react'
import "./Login.css"
import { auth, provider } from './firebase'
import { useStateValue } from "./StateProvider"
import { actionTypes } from '../reducer'

import { Button } from '@material-ui/core'

function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) => {
            alert(error.message)
        });
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://pbs.twimg.com/profile_images/1185696366107877376/FT126yt5_400x400.jpg" alt="logo" />
                <h1>Sign in to Chat App HQ</h1>
                <p>chatapp.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
