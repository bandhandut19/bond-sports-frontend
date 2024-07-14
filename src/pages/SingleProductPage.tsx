import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  console.log(id);
  const { data, error, isLoading } = useGetSingleProductQuery(id);
  console.log(data);
  console.log(error);
  return (
    <div>
      {isLoading ? <span className="text-xl">Loading...</span> : ""}

      <div>{data?.data?.productName}</div>
    </div>
  );
};

export default SingleProductPage;
