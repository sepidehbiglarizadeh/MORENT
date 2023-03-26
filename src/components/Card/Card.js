import { Button } from "@mui/material";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import GasStation from "@/common/icons/GasStation";
import PointIcon from "@/common/icons/PointIcon";
import DoubleUser from "@/common/icons/DoubleUser";
import Link from "next/link";
import likeCarService from "@/services/likeCarService";
import { toast } from "react-hot-toast";
import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";

const Card = ({ car, gridLayout }) => {
  const router=useRouter()

  const likeHandler = async (carId) => {
    try {
      const { data } = await likeCarService(carId);
      routerPush(router);
      toast.success(data.message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div
      className={` bg-white p-6 rounded-lg flex flex-col justify-between md:min-h-[388px] ${
        gridLayout ? "col-span-6 sm:col-span-3 md:col-span-2" : "min-w-[240px]"
      }`}
    >
      {/* Card header */}
      <div className="flex justify-between items-start mb-3 md:mb-[52px]">
        <div className=" capitalize">
          <h1 className="font-semibold md:font-bold text-base md:text-xl">
            {car.title}
          </h1>
          <span className="text-xs md:text-sm font-medium md:font-bold text-secondary-300">
            {car.cType.title}
          </span>
        </div>
        <button onClick={() => likeHandler(car._id)}>
          {car.isLiked ? (
            <SolidHeartIcon className="w-4 h-4 md:w-6 md:h-6 fill-rose-600" />
          ) : (
            <HeartIcon className="w-4 h-4 md:w-6 md:h-6" />
          )}
        </button>
      </div>

      {/* Card Content */}
      <div
        className={`${
          gridLayout
            ? "flex items-center justify-between gap-x-[59px]"
            : "flex flex-col"
        } md:flex-col md:justify-start md:items-start md:gap-x-0 mb-9 md:mb-0`}
      >
        <Link
          href={`/cars/${car.hashId}/${car.slug}`}
          className={`${gridLayout ? "md:mb-9" : "mb-9 "}`}
        >
          <Image
            src={car.coverImage}
            alt={car.title}
            width={272}
            height={84}
            placeholder="blur"
            blurDataURL={car.coverImage}
          />
        </Link>
        <div
          className={`${
            gridLayout
              ? "flex flex-col gap-y-4"
              : "flex justify-between items-center"
          } md:flex-row justify-between md:items-center md:gap-x-1 md:mb-9 md:w-full`}
        >
          <div className="flex items-center gap-x-1">
            <GasStation />
            <span className="text-xs xl:text-sm font-medium text-secondary-300">
              {car.gasoline}L
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <PointIcon />
            <span className="text-xs xl:text-sm font-medium text-secondary-300">
              {car.steering}
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <DoubleUser />
            <span className="text-xs xl:text-sm font-medium text-secondary-300">
              {car.capacity} People
            </span>
          </div>
        </div>
      </div>

      {/* Card Text and button */}
      <div className="flex justify-between items-center">
        <div>
          {car.discount.$numberDecimal !== "0" && (
            <div className="text-base xl:text-xl font-semibold xl:font-bold">
              ${car.discount.$numberDecimal}{" "}
              <span
                className={`${
                  car.discount.$numberDecimal !== "0" ? "" : "hidden"
                }`}
              >
                /
              </span>
              <span
                className={`ml-1 text-xs xl:text-sm font-semibold xl:font-bold text-secondary-300${
                  car.discount.$numberDecimal !== "0" ? "" : "hidden"
                }`}
              >
                day
              </span>
            </div>
          )}
          <div
            className={` ${
              car.discount.$numberDecimal !== "0"
                ? "line-through text-secondary-300 text-sm font-medium"
                : "text-base xl:text-xl font-semibold xl:font-bold"
            }`}
          >
            ${car.price.$numberDecimal}{" "}
            <span
              className={`${
                car.discount.$numberDecimal !== "0" ? "hidden" : ""
              }`}
            >
              /
            </span>
            <span
              className={`ml-1 text-xs xl:text-sm font-semibold xl:font-bold text-secondary-300 ${
                car.discount.$numberDecimal !== "0" ? "hidden" : ""
              }`}
            >
              day
            </span>
          </div>
        </div>
        <Link href={`/cars/${car.hashId}/${car.slug}`}>
          <Button
            variant="contained"
            className="bg-primary-500 w-[100px] h-9 xl:w-[116px] xl:h-11 capitalize hover:bg-primary-600 text-xs xl:text-base font-semibold"
          >
            Rent Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
