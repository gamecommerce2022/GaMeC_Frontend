import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPasswordPage from './ui/authentication/forgot_password/forgot_password';
import ResetPasswordPage from './ui/authentication/reset_password/reset_password';
import LoginPage from './ui/authentication/signin/signin';
import SignUpPage from './ui/authentication/signup/signup';
import { AdminPage, NotFoundPage, OnDevelopPage, UserPage, VerifyEmailPage } from './ui/page';

function App() {
  return (
    <React.Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route key="default-app" path="/" element={<Navigate to="user" replace={true} />} />
        <Route key="user-page" path="user/*" element={<UserPage />} />
        <Route key="admin-page" path="admin/*" element={<AdminPage />} />
        <Route key="signin-page" path="signin" element={<LoginPage />} />
        <Route key="signup-page" path="sign-up" element={<SignUpPage />} />
        <Route key="upcoming-page" path="upcoming" element={<OnDevelopPage />} />
        <Route key="not-found-page" path="404" element={<NotFoundPage />} />
        <Route key="forgot-password-page" path="forgot-password" element={<ForgotPasswordPage />} />
        <Route
          key="verify-email-page"
          path="activate/:activation_token"
          element={<VerifyEmailPage />}
        />
        <Route
          key="reset-password-page"
          path="reset-password/:reset_token"
          element={<ResetPasswordPage />}
        />
        <Route key="other-page" path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
