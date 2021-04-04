export interface User {
  user: {
    id: number;
    name: string;
    email: string;
    roles: [];
    claims: [];
  };
  access_token: any;
}
