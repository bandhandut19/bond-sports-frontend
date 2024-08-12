/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { TProduct } from "@/types/ProductType";
import { FaQuestion } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const UpdateProductsDisplay = () => {
  const { data, isLoading } = useGetAllProductsQuery({
    queryName: "product",
    userQuery: "",
  });
  const [deleteProduct] = useDeleteProductMutation();

  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);

  const handleDeleteProduct = async (id: string) => {
    try {
      const result = await deleteProduct(id);
      toast(result.data.message);
    } catch (error: any) {
      toast(error?.mesaage);
    }
  };

  const products: TProduct[] = data?.data;

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="bg-yellow-400 hover:bg-yellow-400">
              <TableHead className="text-black lg:text-left text-center">
                Product
              </TableHead>
              <TableHead className="text-right text-black">Price</TableHead>
              <TableHead className="text-center text-black">
                Stock Quantity
              </TableHead>
              <TableHead className="text-center text-black">Update</TableHead>
              <TableHead className="text-center text-black">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((item, index) => (
              <TableRow
                className="bg-gradient-to-bl from-orange-400 to-yellow-500 hover:from-yellow-500 hover:to-orange-600"
                key={item._id}
              >
                <TableCell className="flex items-center gap-2 font-medium px-1 border-l-2 border border-t-0">
                  <div className="text-left">
                    <img
                      src={item.image as string}
                      className="lg:max-w-[5rem] w-[180px] h-[180px] lg:h-auto"
                      alt={item.productName}
                    />
                  </div>
                  <div className="text-center">
                    <h1>{item.productName}</h1>
                  </div>
                </TableCell>
                <TableCell className="text-right font-bold">
                  {item.price} BDT
                </TableCell>
                <TableCell className="text-center font-semibold">
                  {item.stockQuantity} left only
                </TableCell>
                <TableCell className="text-center font-semibold">
                  <Link to={`/updateproduct/${item._id}`}>
                    <button className="px-2 border-2 border-green-700 hover:border-yellow-400 bg-green-500 py-2 hover:text-xl rounded-b-full font-bold text-2xl text-white">
                      <GrUpdate />
                    </button>
                  </Link>
                </TableCell>
                <TableCell className="text-center font-semibold">
                  <button
                    onClick={() => {
                      setSelectedProduct(item);
                      const modal = document.getElementById(
                        `my_modal_${index}`
                      ) as HTMLDialogElement;
                      if (modal) {
                        modal.showModal();
                      }
                    }}
                    className="px-2 btn border-2 border-orange-600 hover:text-xl hover:border-yellow-400 bg-yellow-400 hover:bg-yellow-400  py-2 rounded-r-full font-bold text-2xl text-red-600"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                  <dialog id={`my_modal_${index}`} className="modal">
                    <div className="modal-box bg-yellow-400 flex flex-col items-center justify-center rounded-sm">
                      <h1 className="text-9xl text-orange-600 text-center">
                        <FaQuestion />
                      </h1>
                      <h3 className="font-bold text-3xl">Are you sure?</h3>
                      <p className="py-4">
                        You want to delete the product:{" "}
                        <span className="text-lg font-bold">
                          {selectedProduct?.productName}{" "}
                        </span>
                      </p>
                      <div className="modal-action">
                        <button
                          className="btn btn-danger bg-green-500 hover:bg-green-600 hover:text-white  border-none rounded-sm"
                          onClick={() =>
                            handleDeleteProduct(selectedProduct?._id as string)
                          }
                        >
                          Yes! Delete the product
                        </button>
                        <form method="dialog">
                          <button className="btn bg-red-600 hover:text-black hover:bg-red-500 text-white border-none rounded-sm">
                            Cancel
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      )}
    </div>
  );
};

export default UpdateProductsDisplay;
