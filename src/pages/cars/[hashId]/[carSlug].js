import DesktopCategory from "@/components/Category/DesktopCategory";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import getAllTypesService from "@/services/getAllTypesService";
import getOneCarService from "@/services/getOneCarService";
import CommentsList from "@/components/Comments/CommentsList";
import CarInfo from "@/components/CarInfo/CarInfo";

const CarDetailPage = ({ car, types }) => {
  return (
    <section className="container mx-auto max-w-[1440px] flex">
      <div>
        <DesktopCategory types={types} />
      </div>
      <div className="px-6 mt-8 w-full">
        <section className="md:flex md:justify-between md:gap-x-8 mb-8">
          <ImageGallery car={car} />
          <CarInfo car={car} />
        </section>
        <CommentsList car={car} />
      </div>
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
