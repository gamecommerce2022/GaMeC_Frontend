export type User = {
  id?: string;
  firstName: string;
  lastName: string;
  displayName: string;
  favorites?: string[];
  email: string;
  isVerified: boolean;
  role: string;
};
