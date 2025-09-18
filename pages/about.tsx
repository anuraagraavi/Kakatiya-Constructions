import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Next.js React App</title>
        <meta name="description" content="Learn more about our Next.js application" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Our Application</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                This is a sample Next.js application demonstrating the complete setup process 
                with React components, TypeScript support, and modern web development practices.
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Server-side rendering (SSR)</li>
                <li>Static site generation (SSG)</li>
                <li>TypeScript support</li>
                <li>Responsive design</li>
                <li>Modern React patterns</li>
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}