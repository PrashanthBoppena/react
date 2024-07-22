import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Task = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            response => setData(response.data)
        )
    }, [])
    return (
        <div>

            {data.map((obj) => <Link key={obj.id} to={`/task/${obj.id}`} ><li >{obj.title}</li> </Link>)
            }

        </div >
    )
}

export default Task
