import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

export default function index() {
  return (
    <>
      <Link href='/doctor-signup'><Button variant='contained'>Signup</Button></Link>
      <Link href='/doctor-login'><Button variant='contained'>Login</Button></Link>
    </>
  )
}
