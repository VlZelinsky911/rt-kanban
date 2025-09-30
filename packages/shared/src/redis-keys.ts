export const keys = {
  user: (id: string) => `user:${id}`,
  board: (id: string) => `board:${id}`,
  boardTasks: (id: string) => `board:${id}:tasks`,
  task: (id: string) => `task:${id}`,
  boardEvents: (id: string) => `board:${id}:events`,
  notif: (userId: string) => `notif:${userId}`
} as const;

