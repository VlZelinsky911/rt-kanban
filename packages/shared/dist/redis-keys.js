export const keys = {
    user: (id) => `user:${id}`,
    board: (id) => `board:${id}`,
    boardTasks: (id) => `board:${id}:tasks`,
    task: (id) => `task:${id}`,
    boardEvents: (id) => `board:${id}:events`,
    notif: (userId) => `notif:${userId}`
};
