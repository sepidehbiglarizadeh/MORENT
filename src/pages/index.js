import Hero from "@/components/Hero/Hero";
import Head from "next/head";
import FilterControl from "@/components/FilterControl";
import { Button } from "@mui/material";
import DoubleArrow from "@/common/icons/DoubleArrow";

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
          <div className="flex flex-col items-center md:flex-row md:justify-between  gap-y-8 md:gap-x-11 relative container mx-auto max-w-[1440px]">
            <FilterControl title="Pick-Up" />
            <Button
              variant="contained"
              className="bg-primary-500 w-[60px] h-[60px] hover:bg-primary-600 rounded-[10px] absolute top-[122px] md:static "
            >
              <DoubleArrow />
            </Button>
            <FilterControl title="Drop-Off" />
          </div>
        </section>
      </main>
    </>
  );
}
