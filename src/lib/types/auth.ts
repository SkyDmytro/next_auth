export interface User {
  id: string;
  email: string;
  name: string | null;
}

export interface LoginResponse {
  accessToken: string;
}

export interface LoginCredentials {
  username: string;
  name: string;
  password: string;
}
