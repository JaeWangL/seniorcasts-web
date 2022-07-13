import axios, { type AxiosInstance } from 'axios';

export function axiosClient(): AxiosInstance {
  return axios.create();
}
