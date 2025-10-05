import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppShell } from '../widgets/AppShell'
import { LoginPage } from '../pages/auth/LoginPage'
import { RegisterPage } from '../pages/auth/RegisterPage'
import { VerifyPage } from '../pages/auth/VerifyPage'
import { ResetPasswordPage } from '../pages/auth/ResetPasswordPage'
import { FeedPage } from '../pages/feed/FeedPage'
import { JobsPage } from '../pages/jobs/JobsPage'
import { JobDetailsPage } from '../pages/jobs/JobDetailsPage'
import { ProfilePage } from '../pages/profile/ProfilePage'
import { EditProfilePage } from '../pages/profile/EditProfilePage'
import { EventsPage } from '../pages/events/EventsPage'
import { EventDetailsPage } from '../pages/events/EventDetailsPage'
import { GroupsPage } from '../pages/groups/GroupsPage'
import { GroupDetailsPage } from '../pages/groups/GroupDetailsPage'
import { ChatPage } from '../pages/chat/ChatPage'
import { SearchPage } from '../pages/search/SearchPage'
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage'
import { NotificationsPage } from '../pages/notifications/NotificationsPage'

const isAuthed = () => {
  // Temporary dev auth: ?auth=1 enables authed routes for UI testing
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    if (params.get('auth') === '1') return true
  }
  return false
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/feed" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/verify',
    element: <VerifyPage />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
  },
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        path: 'feed',
        element: isAuthed() ? <FeedPage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'jobs',
        element: isAuthed() ? <JobsPage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'jobs/:id',
        element: isAuthed() ? <JobDetailsPage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'profile/:id',
        element: isAuthed() ? <ProfilePage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'profile/edit',
        element: isAuthed() ? <EditProfilePage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'events',
        element: isAuthed() ? <EventsPage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'events/:id',
        element: isAuthed() ? <EventDetailsPage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'groups',
        element: isAuthed() ? <GroupsPage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'groups/:id',
        element: isAuthed() ? <GroupDetailsPage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'chat',
        element: isAuthed() ? <ChatPage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'search',
        element: isAuthed() ? <SearchPage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'admin',
        element: isAuthed() ? <AdminDashboardPage /> : <Navigate to="/login" replace />,
      },
      {
        path: 'notifications',
        element: isAuthed() ? <NotificationsPage /> : <Navigate to="/login" replace />,
      },
    ],
  },
])
