import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js React App</title>
        <meta name="description" content="A complete Next.js application with React components" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  )
}