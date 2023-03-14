import DesktopCategory from "@/components/Category/DesktopCategory";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import getAllTypesService from "@/services/getAllTypesService";
import getOneCarService from "@/services/getOneCarService";
import Image from "next/image";

const CarDetailPage = ({ car, types }) => {
  return (
    <section className="container mx-auto max-w-[1440px] flex">
      <div>
        <DesktopCategory types={types} />
      </div>
      <section className="px-6 mt-8 w-full">
        <ImageGallery car={car}/>

      </section>
    </section>
  );
};

export default CarDetailPage;

export async function getServerSideProps({ req, query }) {
  const { data } = await getOneCarService(req, query);
  const { data: typesResult } = await getAllTypesService();

  return {
    props: {
      car: data.data,
      types: typesResult.data,
    },
  };
}
