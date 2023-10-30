import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'react-toastify/dist/ReactToastify.css'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { ProtectedRoute } from './features/UI/ProtectedRoute/ProtectedRoute'
import { Account } from './pages/Account/Account'
import { TVShows } from './pages/TVShows/TVShows'
import { MyList } from './pages/MyList/MyList'
import { Root } from './pages/Root/Root'
import { createPortal } from 'react-dom'
import { CustomModal } from './features/UI/Modal/Modal'
import { useModal } from './context/ModalContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'home',
        element: <Root />,
      },
      {
        path: 'tv-shows',
        element: <TVShows />,
      },
      {
        path: 'my',
        element: <MyList />,
      },
    ],
  },
  {
    path: '/account',
    element: <Account />,
  },
])

const queryClient = new QueryClient()

export const App = () => {
  const { isOpen } = useModal()

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
      {isOpen && createPortal(<CustomModal />, document.querySelector('#modal')!)}
    </QueryClientProvider>
  )
}
