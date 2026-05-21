// Guards private routes and optionally restricts access by role.
import { Navigate, useLocation } from 'react-router-dom'
import { useSessionStore } from '../../store/useSessionStore'

export function ProtectedRoute({ children, allowedRoles }) {
  const location = useLocation()
  const user = useSessionStore((state) => state.user)

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}
