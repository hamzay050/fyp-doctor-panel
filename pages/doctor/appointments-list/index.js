import AppointmentsList from '@/component/Doctor/AppointmentsList'
import PatientCard from '@/component/Doctor/PatientCard'
import React from 'react'
import PrivateRoute from '@/component/Doctor/SecurePage'

const index = () => {
  return (
    <PrivateRoute>
        <AppointmentsList/>
        <PatientCard/>
    </PrivateRoute>
  )
}

export default index