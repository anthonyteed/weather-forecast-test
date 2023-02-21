import Head from 'next/head'
import { Inter } from '@next/font/google'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const Base = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Weather Forecast</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={inter.style}>{children}</main>
    </>
  )
}
