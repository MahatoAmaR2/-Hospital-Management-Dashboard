import React from 'react'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <>
        <div className="flex">
            <div className="sidebar hidden md:block">
            <Sidebar />
            </div>
            <div className="p-4 flex-1">
                Dashboard Content
            </div>
        </div>
    </>
  )
}

export default Dashboard