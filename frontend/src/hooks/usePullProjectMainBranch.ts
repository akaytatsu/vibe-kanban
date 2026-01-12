import { useMutation } from '@tanstack/react-query';
import { projectsApi } from '@/lib/api';

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
      return projectsApi.pullMainBranch(projectId, params);
    },
    onSuccess: (response) => {
      onSuccess?.(response);
    },
    onError: (error) => {
      onError?.(error as Error);
    },
  });
}
