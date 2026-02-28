import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      course,
      message,
    }: {
      name: string;
      phone: string;
      course: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitEnquiry(name, phone, course, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enquiries"] });
    },
  });
}
