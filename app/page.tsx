'use client';
import useGetProducts from './Hook/useGetProducts';

const Page = () => {
  const { data: products } = useGetProducts();

  const renderProductItems = () => {
    return products?.map((product) => {
      return (
        <section
          className="p-2 rounded capitalize bg-gray-200"
          key={product.id}
        >
          {product.title}
        </section>
      );
    });
  };

  return (
    <div className="grid grid-cols-4 gap-2 mx-auto container">
      {renderProductItems()}
    </div>
  );
};

export default Page;
