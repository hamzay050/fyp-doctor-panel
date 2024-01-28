import PrescribeMedicine from '@/component/Doctor/PrescribeMedicine'
import PrivateRoute from '@/component/Doctor/SecurePage'
import React from 'react'

export default function index() {
  return (
    <PrivateRoute>
      <PrescribeMedicine/>
    </PrivateRoute>
  )
}
