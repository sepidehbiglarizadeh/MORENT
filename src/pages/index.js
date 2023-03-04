import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MORENT</title>
        <meta name="description" content="This is a car rental app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-light min-h-screen'>
        <h1>This is MORENT app</h1>
      </main>
    </>
  )
}
