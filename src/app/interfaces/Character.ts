export interface Character {
  _id?: (string|undefined);
  name: string;
  role: string;
  description: string;
  age: number;
  personality: string;
  hability: string;
  createdAt?: (Date|string|null);
  creatorName: string;
  avatarPath: string;
}