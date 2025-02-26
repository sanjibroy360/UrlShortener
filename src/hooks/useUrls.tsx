import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUrls, createUrl, deleteUrl } from "../apis/urlsApi";

export const useUrls = () => {
  const queryClient = useQueryClient();

  const { data, isPending, error } = useQuery({
    queryKey: ["urls"],
    queryFn: fetchUrls,
  });

  const createMutation = useMutation({
    mutationFn: createUrl,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["urls"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUrl,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["urls"] }),
  });

  return {
    urls: data?.urls || [],
    isLoading:
      isPending || createMutation.isPending || deleteMutation.isPending,
    error,
    createUrl: createMutation.mutate,
    deleteUrl: deleteMutation.mutate,
  };
};
