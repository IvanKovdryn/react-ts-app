import { Product } from "../components/Product";
import { CreateProduct } from "../components/createProduct";
import { ErrorMessage } from "../components/error";
import { LoadingMessage } from "../components/loader";
import { Modal } from "../components/modal";
import { useProducts } from "../hooks/products";
import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";

export function ProductsPage() {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <LoadingMessage />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => close()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        onClick={() => open()}
        className="fixed bottom-10 right-10 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
      >
        +
      </button>
    </div>
  );
}
