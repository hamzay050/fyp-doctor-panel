import AppointmentsList from '@/component/Doctor/AppointmentsList'
import CompletedCard from '@/component/Doctor/CompletedCard'
import PrivateRoute from '@/component/Doctor/SecurePage'
import React from 'react'

export default function index() {
  return (
    <PrivateRoute>
     <AppointmentsList/>
      <CompletedCard/>
    </PrivateRoute>
  )
}
