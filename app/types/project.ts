export type Project = {
  name: string;
  description: string;
  stack: string[];
  role: string;
  year: number | string;
  type: string;
  url: string;
  image?: string;
}