import { ChangeEvent } from "react";

export interface StateProps {
  userData: User;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: number;
  image: string;
}

export interface AuthProps {
  email: string;
  name?: string; // name -> 회원가입시 필수/로그인시 없음
  password: string;
}

export type FileUploadProps = {
  images: string[];
  onImageChange: (newImages: string[]) => void;
};

export interface FetchProductOptions {
  skip: number;
  limit: number;
  loadMore?: boolean;
  filters?: object; // 필터의 타입은 상황에 따라 다를 수 있음
  searchTerm?: string;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  continents: number;
  price: number;
  images: string[];
}

export interface CheckBoxProps {
  continents: { _id: number; name: string }[];
  checkedContinents: number[];
  onFilters: (filters: number[]) => void;
}

export interface Filters {
  continents: number[];
  price: number[];
}

export interface PriceProps {
  prices: {
    _id: number;
    name: string;
    array: number[];
  }[];
  checkedPrice: number[];
  onFilters: (filters: number[]) => void;
}

export interface SearchProps {
  searchTerm: string;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchTermProps {
  skip: number;
  limit: number;
  filters: Filters; // 또는 적절한 타입
  searchTerm: string;
}

export interface ProductProps {
  product: Product | null;
}
