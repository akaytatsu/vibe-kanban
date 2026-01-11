-- Add auto_pull_main_branch flag to projects table
-- When enabled, the main branch will be automatically pulled before creating a new task
ALTER TABLE projects ADD COLUMN auto_pull_main_branch INTEGER NOT NULL DEFAULT 0;
