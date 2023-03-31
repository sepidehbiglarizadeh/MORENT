import getOneCarService from "@/services/getOneCarService";
import RentalSummary from "@/components/RentalSummary";
import BillingInfoForm from "@/components/BillingInfo";
import getCitiesService from "@/services/getlCitiesService";
import RentalInfoForm from "@/components/RentalInfo";
import PaymentMethodForm from "@/components/PaymentMethod";
import Confirmation from "@/components/Confirmation";

const PaymentPage = ({ car, cities }) => {
  return (
    <div className="px-6 py-8 md:flex md:items-start gap-x-8">
      <RentalSummary car={car} />
      <div className="md:flex-1">
        <BillingInfoForm />
        <RentalInfoForm cities={cities} />
        <PaymentMethodForm />
        <Confirmation />
      </div>
    </div>
  );
};

export default PaymentPage;

export async function getServerSideProps({ req, query }) {
  const { data: citiesData } = await getCitiesService(req);
  const { data } = await getOneCarService(req, query);

  return {
    props: {
      car: data.data,
      cities: citiesData.data,
    },
  };
}
