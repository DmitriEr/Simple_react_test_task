type Geo = Record<"lat" | "log", string>;

type Address = Record<"city" | "street" | "suite" | "zipcode", string>;

type Company = Record<"bs" | "catchPhrase" | "name", string>;

type User = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: Address & Geo;
};

export type { User };
