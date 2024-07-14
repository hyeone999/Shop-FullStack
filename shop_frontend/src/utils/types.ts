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
  title: string;
  description: string;
  continents: number;
  price: number;
  images: string[];
}
