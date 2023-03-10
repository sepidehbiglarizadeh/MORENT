import Card from "@/components/Card/Card";
import DesktopCategory from "@/components/Category/DesktopCategory";
import FilterForm from "@/components/FIlterForm/index.js";
import getAllCarsService from "@/services/getAllCarsService";
import getAllTypesService from "@/services/getAllTypesService";

const CarsPage = ({ carsData, types }) => {
  return (
    <main className="container mx-auto max-w-[1440px] flex">
      <div className="relative">
        <DesktopCategory types={types} />
      </div>
      <div className="px-6 md:px-8 flex-1 mt-7">
        <div className="w-full mb-11 ">
          <FilterForm />
        </div>
        <div className="grid grid-cols-6 gap-8">
          {carsData.docs.map((car) => {
            return <Card car={car} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default CarsPage;

export async function getServerSideProps({ req }) {
  const { data: carsResult } = await getAllCarsService(req);
  const { data: typesResult } = await getAllTypesService();

  return {
    props: {
      carsData: carsResult.data,
      types: typesResult.data,
    },
  };
}
