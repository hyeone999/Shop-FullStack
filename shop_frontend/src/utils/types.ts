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
