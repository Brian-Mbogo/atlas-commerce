// Central route map for public pages, protected user pages, and admin-only pages.
import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '../components/common/ProtectedRoute'
import { MainLayout } from '../layouts/MainLayout'
import { AdminDashboardPage } from '../pages/AdminDashboardPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProductDetailsPage } from '../pages/ProductDetailsPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ShopPage } from '../pages/ShopPage'
import { UserDashboardPage } from '../pages/UserDashboardPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'product/:slug', element: <ProductDetailsPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <UserDashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboardPage />
          </ProtectedRoute>
        ),
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
