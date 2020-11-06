import React from 'react'
import Head from 'next/head'

import NavBar from '../components/navbar'

import { Container } from '../styles/pages/index'

/*
export async function getServerSideProps(ctx) {
  const { cookie } = new Cookie(ctx)

  const userCookie = cookie.get('user') ? cookie.get('user') : ''

  if (userCookie) {
    ctx.res.setHeader('location', '/user/dashboard')
    ctx.res.statusCode = 302
    ctx.res.end()
  }

  return { props: { userCookie } }
}
*/

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <NavBar />
    </Container>
  )
}
