import React from 'react'
import AppointmentsList from '@/component/Doctor/AppointmentsList'
import ApprovedCard from '@/component/Doctor/ApprovedCard'
import PrivateRoute from '@/component/Doctor/SecurePage'
const index = () => {
  return (
    <PrivateRoute>
        <AppointmentsList/>
        <ApprovedCard/> 
    </PrivateRoute>
  )
}

export default index