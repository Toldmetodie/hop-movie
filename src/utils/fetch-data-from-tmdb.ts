import { axiosInstance } from "@/lib/axios-instance";

export const fetchDataFromTMDB = async <T>(endpoint: string): Promise<T> => { 
    const {data} = await axiosInstance.get<T>(endpoint);
return data;
}