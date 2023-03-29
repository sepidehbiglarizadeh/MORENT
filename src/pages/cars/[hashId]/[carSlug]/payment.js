import getOneCarService from "@/services/getOneCarService";
import RentalSummary from "@/components/RentalSummary";

const PaymentPage = ({ car }) => {
  console.log(car.discount.$numberDecimal);

  return (
    <div className="px-6 py-8">
      <RentalSummary car={car} />
    </div>
  );
};

export default PaymentPage;

export async function getServerSideProps({ req, query }) {
  const { data } = await getOneCarService(req, query);

  return {
    props: {
      car: data.data,
    },
  };
}
