import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './ui/authentication/login/login';
import SignUpPage from './ui/authentication/signup/signup';
import {
  AdminPage,
  NotFoundPage,
  OnDevelopPage,
  ResetPasswordPage,
  UserPage,
  VerifyEmailPage,
} from './ui/page';

function App() {
  return (
    <React.Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route key="default-app" path="/" element={<Navigate to="login" replace={true} />} />
        <Route key="user-page" path="user/*" element={<UserPage />} />
        <Route key="admin-page" path="admin/*" element={<AdminPage />} />
        <Route key="login-page" path="login" element={<LoginPage />} />
        <Route key="signup-page" path="signup" element={<SignUpPage />} />
        <Route key="upcoming-page" path="upcoming" element={<OnDevelopPage />} />
        <Route key="not-found-page" path="404" element={<NotFoundPage />} />
        <Route
          key="verify-email-page"
          path="activate/:activation_token"
          element={<VerifyEmailPage />}
        />
        <Route
          key="reset-password-page"
          path="reset/:reset_token"
          element={<ResetPasswordPage />}
        />
        <Route key="other-page" path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
