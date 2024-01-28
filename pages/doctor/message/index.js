import MessageBox from '@/component/Doctor/MessageBox'
import PrivateRoute from '@/component/Doctor/SecurePage'
import React from 'react'

export default function index() {
  return (
    <>
    <PrivateRoute>
      <MessageBox/>
    </PrivateRoute>
    </>
  )
}
