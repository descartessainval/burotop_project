import React, { useState } from 'react';

const LoginForm = () => {

    //eslint-disable-next-line
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form>
            <div class='form-group'>
                <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div class='form-group'>
                <input
                    type='password'
                    className='form-control'
                    id='exampleInputPass'
                    aria-describedby='passwordHelp'
                    placeholder='Mot-de-passe'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type='submit' class='btn'>
                Connexion
            </button>
        </form>
    )
}

export default LoginForm