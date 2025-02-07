export interface User {
  id: string;
  username: string;
  name: string | null;
}

export interface Session {
  user: User | null;
  token: string | null;
}

export interface LoginResponse {
  accessToken: string;
}

export interface LoginCredentials {
  username: string;
  name: string;
  password: string;
}
