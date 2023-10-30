import React from 'react'
import AppointmentsList from '@/component/Doctor/AppointmentsList'
import Navbar from '@/component/Doctor/Navbar'
import ApprovedCard from '@/component/Doctor/ApprovedCard'
const index = () => {
  return (
    <div>
       <Navbar/>
        <AppointmentsList/>
        <ApprovedCard/> 
    </div>
  )
}

export default index