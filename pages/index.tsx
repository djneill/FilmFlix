import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className="text-red-700 text-4xl p-4">FilmFlix</h1>
      <h2 className="text-red-700 text-2xl p-4">A Netflix Clone</h2>
      <h3 className="text-red-700 text-xl p-4">Built with React, Typescript, TailwindCSS, Next.js, MongoDB, NextAuth and Vercel</h3>
      <h4 className='text-red-700 text-xl p-4'>This is currently still in development. I&#39;m glad you&#39;re here, thanks for visiting and I&#39;m excited to show you what&#39;s to come</h4>
      <h4 className='text-red-700 text-xl p-4'>You can view the Sign In / Register page here <a href='https://film-flix-opal.vercel.app/auth'>https://film-flix-opal.vercel.app/auth</a> </h4>
    </>
  )
}
