import DesktopCategory from "@/components/Category/DesktopCategory";
import FilterForm from "@/components/FIlterForm/index.js";
import getAllCarsService from "@/services/getAllCarsService";
import getAllTypesService from "@/services/getAllTypesService";

const CarsPage = ({ carsData, types }) => {
  return (
    <main className="container mx-auto max-w-[1440px] flex ">
      <div className="">
        <DesktopCategory types={types} />
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
