import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const IndividualTasks = ({ match }) => {
    const { id } = useParams();
    const [individual, setIndividual] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
            response => response.json()).then(
                json => setIndividual(json)
            )

    }, [])



    return (
        <div>
            <center>
                {individual !== null ?
                    <div>
                        Id:{individual.id} <br />
                        Title:{individual.title}
                    </div> : <p>Loading..</p>
                }
            </center>
        </div>
    )
}

export default IndividualTasks
