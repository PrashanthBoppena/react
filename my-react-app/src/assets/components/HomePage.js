import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
export default function HomePage(){
    return(
        <>
        <h2>Login Successful!!</h2>
        <Link to="/">Logout</Link>
        </>
    )
}