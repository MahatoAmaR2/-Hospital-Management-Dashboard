import { useState } from "react";
import { MdOutlineAutoGraph, MdDeleteOutline } from "react-icons/md";

const Conference = () => {
  const [products, setProducts] = useState([
    { id: "P001", name: "Paracetamol", stock: 120 },
    { id: "P002", name: "Aspirin", stock: 90 },
    { id: "P003", name: "Ibuprofen", stock: 75 },
    { id: "P004", name: "Amoxicillin", stock: 200 },
    { id: "P005", name: "Vitamin C", stock: 300 },
    { id: "P006", name: "Cetirizine", stock: 150 },
    { id: "P007", name: "Metformin", stock: 50 },
    { id: "P008", name: "Lisinopril", stock: 60 },
    { id: "P009", name: "Omeprazole", stock: 180 },
    // { id: "P010", name: "Ciprofloxacin", stock: 120 },
  ]);

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };
  return (
    <div className="min-h-screen w-full md:w-[60%] p-8">
      <div className=" p-6 rounded-lg shadow-md">
        <div className="flex gap-2 ">
          <MdOutlineAutoGraph color="#2E8075" />
          <h1 className="text-sm font-semibold  mb-6 text-gray-500">
            Hospital Conference
          </h1>
        </div>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm">
              <th className="px-4 py-2 text-left">No</th>
              <th className="pr-4 py-2 text-left">ID Code</th>
              <th className="pr-4 py-2 text-left">Product Name</th>
              <th className="pr-4 py-2 text-left">Total Stock</th>
              <th className="pr-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">
                  <div
                    className="bg-red-600 p-0.5 rounded w-5 cursor-pointer hover:bg-red-700"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <MdDeleteOutline color="white" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Conference;
