import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <center>
                This is Dashboard Component
            </center>
            <nav>
                <Link to="/dashboard/settings" >Settings</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Dashboard
