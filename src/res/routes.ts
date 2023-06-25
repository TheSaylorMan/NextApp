export const routes = {
  dashboard: {
    root: '/dashboard',
  },
  projects: {
    root: '/dashboard/projects',
    singleProject: (id: string) => `/dashboard/projects/${id}`
  },
  timeSheets: {
    root: '/dashboard/timesheets',
  },
  calendar: {
    root: '/dashboard/calendar',
  },
  reports: {
    root: '/dashboard/reports',
  },
  chat: {
    root: '/dashboard/chat',
  },
  support: {
    root: '/dashboard/support',
  },
}