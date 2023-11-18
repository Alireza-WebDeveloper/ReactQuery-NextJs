'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface ProductResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const getProducts = async (): Promise<ProductResponse[]> => {
  try {
    const response = await axios.get<ProductResponse[]>(
      'https://fakestoreapi.com/products'
    );
    return response.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const useGetProducts = () => {
  const queryKey = ['products'];
  const { data, isLoading, isError } = useQuery({
    queryKey,
    queryFn: getProducts,
  });
  return { isLoading, isError, data };
};

export default useGetProducts;
