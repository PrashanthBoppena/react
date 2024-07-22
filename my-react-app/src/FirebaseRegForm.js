import React, { useState } from 'react'
import axios from 'axios'

function FirebaseRegForm() {
    const [data, setData] = useState(
        {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    );

    const { username, email, password, confirmPassword } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://my-react-project-427706-default-rtdb.firebaseio.com/registration_ajay.json', data).then(
            alert('data posted!!')
        )

        // axios.get('https://my-react-project-427706-default-rtdb.firebaseio.com/registration_ajay.json').then(
        //     response=>console.log(response.data)
        // )

    }



    return (
        <div>
            <center>
                <form autoComplete="off" onSubmit={submitHandler}>
                    <input type="text" name="username" value={username} placeholder="Username" onChange={changeHandler} />
                    <br />
                    <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler} />
                    <br />
                    <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler} />
                    <br />
                    <input type="password" name="confirmPassword" value={confirmPassword} placeholder="Re-enter password" onChange={changeHandler} />
                    <br />
                    {password !== confirmPassword ? <p style={{ "color": "red" }}>password not same please check</p> : null}
                    <input type="submit" name="submit" />
                </form>
            </center>
        </div>
    )
}

export default FirebaseRegForm
