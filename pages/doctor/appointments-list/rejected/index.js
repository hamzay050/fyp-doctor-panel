import AppointmentsList from '@/component/Doctor/AppointmentsList'
import Navbar from '@/component/Doctor/Navbar'
import RejectedCard from '@/component/Doctor/RejectedCard'
import React from 'react'

const index = () => {
  return (
    <div>
    <Navbar/>
    <AppointmentsList/>
    <RejectedCard/>

    </div>
  )
}

export default index