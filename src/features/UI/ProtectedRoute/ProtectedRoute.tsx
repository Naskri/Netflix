import { ReactNode, useEffect } from 'react'
import { useUser } from '../../Authentication/useUser'
import { FullPageSpinner } from '../FullPageSpinner/FullPageSpinner'
import { useNavigate } from 'react-router'

type ProtectedRouteProps = {
  children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoading, isAuthenticated } = useUser()

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login')
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) {
    return <FullPageSpinner />
  }

  return isAuthenticated && children
}
