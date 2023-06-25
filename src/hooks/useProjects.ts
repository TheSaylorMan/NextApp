import { getProjects } from "@/service/project";
import { useQuery } from "@tanstack/react-query";

export default function useProjects(options?: any) {
    return useQuery({
        queryKey: ["projects"],
        queryFn: () => getProjects().then((res) => res.data),
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 15 * 60 * 1000,
        ...options,
    })
}