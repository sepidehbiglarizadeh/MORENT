import Hero from "@/components/Hero/Hero";
import Head from "next/head";
import FilterForm from "@/components/FIlterForm/index.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>MORENT</title>
        <meta name="description" content="This is a car rental app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />

        {/* Filter Section */}
        <section className="px-4 md:px-[60px]  mb-9">
          <FilterForm />
        </section>
      </main>
    </>
  );
}
