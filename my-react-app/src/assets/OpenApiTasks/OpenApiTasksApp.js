import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Task from './Task';
import IndividualTasks from './IndividualTasks';
import DashboardSettings from './DashboardSettings';


const OpenApiTasksApp = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} >
                        <Route path="settings" element={<DashboardSettings />} />

                    </Route>
                    <Route path="task" element={<Task />} />
                    <Route path="task/:id" element={<IndividualTasks />} />
                </Routes>
            </Router>

        </div>
    )
}

export default OpenApiTasksApp
