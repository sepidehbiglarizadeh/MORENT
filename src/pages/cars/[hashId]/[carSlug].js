import getOneCarService from "@/services/getOneCarService";

const CarDetailPage = ({car}) => {
  console.log(car);
  return ( 
    <div>this is car detail page</div>
   );
}
 
export default CarDetailPage;

export async function getServerSideProps({ req, query }) {
  const {data}= await getOneCarService(req,query);
  return {
    props: {
      car:data.data
    },
  };
}