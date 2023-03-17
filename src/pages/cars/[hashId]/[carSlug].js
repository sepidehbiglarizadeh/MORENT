import DesktopCategory from "@/components/Category/DesktopCategory";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import getAllTypesService from "@/services/getAllTypesService";
import getOneCarService from "@/services/getOneCarService";
import CommentsList from "@/components/Comments/CommentsList";
import CarInfo from "@/components/CarInfo/CarInfo";
import getAllCarsService from "@/services/getAllCarsService";
import http from "@/services/httpService";
import Card from "@/components/Card/Card";
import Link from "next/link";

const CarDetailPage = ({ recentCar, car, types }) => {
  console.log(recentCar);

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

        <section>
          <div className="flex justify-between items-center mb-5 md:mb-[26px]">
            <h2 className="text-secondary-300 font-semibold text-sm md:text-base">Recent Car</h2>
            <Link href="/cars" className="text-primary-500 text-xs md:text-base font-semibold">View All</Link>
          </div>
          <div className="flex gap-x-8 overflow-auto ">
            {recentCar.map((car) => {
              return <Card car={car} />;
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default CarDetailPage;

export async function getServerSideProps({ req, query }) {
  const { data: recentCar } = await http.get("/cars?limit=3");
  const { data } = await getOneCarService(req, query);
  const { data: typesResult } = await getAllTypesService();

  return {
    props: {
      recentCar: recentCar.data.docs,
      car: data.data,
      types: typesResult.data,
    },
  };
}
