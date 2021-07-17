export type token = {
  name: string;
  password: string;
  iat: number;
};

export type serviceResponse = {
  data?: any;
  status: number;
};
