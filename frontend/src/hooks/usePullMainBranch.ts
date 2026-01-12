import { useMutation } from '@tanstack/react-query';
import { attemptsApi } from '@/lib/api';

interface PullMainBranchRequest {
  repo_id: string;
  target_branch: string;
}

interface PullMainBranchResponse {
  commit_id: string;
  branch_name: string;
}

export function usePullMainBranch(
  attemptId: string | undefined,
  onSuccess?: (response: PullMainBranchResponse) => void,
  onError?: (error: Error) => void
) {
  return useMutation({
    mutationFn: async (params: PullMainBranchRequest) => {
      if (!attemptId) {
        throw new Error('Attempt ID is required');
      }
      return attemptsApi.pullMainBranch(attemptId, params);
    },
    onSuccess: (response) => {
      onSuccess?.(response);
    },
    onError: (error) => {
      onError?.(error as Error);
    },
  });
}
