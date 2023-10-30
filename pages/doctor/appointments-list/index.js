import Navbar from '@/component/Doctor/Navbar'
import AppointmentsList from '@/component/Doctor/AppointmentsList'

import PatientCard from '@/component/Doctor/PatientCard'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar/>
        <AppointmentsList/>
        <PatientCard/>
    </div>
  )
}

export default index