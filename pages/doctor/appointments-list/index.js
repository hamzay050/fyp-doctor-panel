import AppointmentsList from '@/component/Doctor/AppointmentsList'
import PatientCard from '@/component/Doctor/PatientCard'
import React from 'react'

const index = () => {
  return (
    <div>
        <AppointmentsList/>
        <PatientCard/>
    </div>
  )
}

export default index