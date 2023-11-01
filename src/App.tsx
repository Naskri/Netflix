import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import { Watch } from './pages/Watch/Watch'
import { useModal } from './context/ModalContext'
import { createPortal } from 'react-dom'
import { CustomModal } from './features/UI/Modal/Modal'
import { Help } from './pages/Help/Help'
import { PasswordUpdate } from './features/Account/ForgotPassword/PasswordUpdate/PasswordUpdate'
import { AccountForgotPassword } from './features/Account/ForgotPassword/AccountForgotPassword'
import { NotFound } from './pages/NotFound/NotFound'

const queryClient = new QueryClient()

export const App = () => {
  const { isOpen } = useModal()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<Root />} />
            <Route path="tv-shows" element={<TVShows />} />
            <Route path="my" element={<MyList />} />
          </Route>
          <Route path="watch/:id" element={<Watch />} />
          <Route path="account" element={<Account />} />
          <Route path="help" element={<Help />}>
            <Route path="" element={<AccountForgotPassword />} />
            <Route path="update" element={<PasswordUpdate />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
        {isOpen && createPortal(<CustomModal />, document.querySelector('#modal')!)}
      </BrowserRouter>
    </QueryClientProvider>
  )
}
