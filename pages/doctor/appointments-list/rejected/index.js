import AppointmentsList from '@/component/Doctor/AppointmentsList'
import RejectedCard from '@/component/Doctor/RejectedCard'
import PrivateRoute from '@/component/Doctor/SecurePage'
import React from 'react'

const index = () => {
  return (
    <PrivateRoute>

    <AppointmentsList/>
    <RejectedCard/>

    </PrivateRoute>
  )
}

export default index