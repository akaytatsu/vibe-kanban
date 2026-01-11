import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { api } from '@/lib/api';

interface PullProjectMainBranchRequest {
  repo_id: string;
  target_branch: string;
}

interface PullProjectMainBranchResponse {
  commit_id: string;
  branch_name: string;
}

export function usePullProjectMainBranch(
  projectId: string | undefined,
  onSuccess?: (response: PullProjectMainBranchResponse) => void,
  onError?: (error: Error) => void
) {
  return useMutation({
    mutationFn: async (params: PullProjectMainBranchRequest) => {
      if (!projectId) {
        throw new Error('Project ID is required');
      }
      const response = await api.post<{
        data: PullProjectMainBranchResponse;
      }>(`/projects/${projectId}/pull-main-branch`, params);
      return response.data.data;
    },
    onSuccess: (response) => {
      onSuccess?.(response);
    },
    onError: (error) => {
      onError?.(error as Error);
    },
  });
}
