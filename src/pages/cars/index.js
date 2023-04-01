import Card from "@/components/Card/Card";
import DesktopCategory from "@/components/Category/DesktopCategory";
import FilterForm from "@/components/FIlterForm/index.js";
import getAllCarsService from "@/services/getAllCarsService";
import getAllTypesService from "@/services/getAllTypesService";
import routerPush from "@/utils/routerPush";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const CarsPage = ({ carsData, types }) => {
  const router = useRouter();

  console.log(carsData);

  const clickHandler = () => {
    router.query.limit = carsData.totalDocs;
    routerPush(router);
  };

  return (
    <main className="container mx-auto max-w-[1440px] flex">
      <div className="relative">
        <DesktopCategory types={types} />
      </div>
      <div className="px-6 md:px-8 flex-1 mt-7">
        <div className="w-full mb-11 ">
          <FilterForm />
        </div>
        <div className="grid grid-cols-6 gap-8 mb-12 md:mb-16">
          {carsData.docs.map((car) => {
            return <Card key={car._id} car={car} gridLayout={true} />;
          })}
        </div>
        <div className="col-span-6 flex justify-center mb-12 md:mb-16">
          <Button
            variant="contained"
            className={`bg-primary-500 w-[223px] h-9 xl:w-[156px] xl:h-11 capitalize hover:bg-primary-600 text-xs xl:text-base font-semibold ${
              carsData.limit === carsData.totalDocs ? "hidden" : ""
            }`}
            onClick={clickHandler}
          >
            show more car
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CarsPage;

export async function getServerSideProps({ req, query }) {
  const { data: carsResult } = await getAllCarsService(req, query);
  const { data: typesResult } = await getAllTypesService();

  return {
    props: {
      carsData: carsResult.data,
      types: typesResult.data,
    },
  };
}
