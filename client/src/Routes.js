import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/auth/LoginPage';
import { SignUpPage } from './pages/auth/SignUpPage';
import { UserInfoPage } from './pages/auth/UserInfoPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';
import { CheckCodePage } from './pages/auth/CheckCodePage';
import { RessetPasswordPage } from './pages/auth/RessetPasswordPage';


export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPasswordPage />
                </Route>
                <Route path="/checkPoint">
                    <CheckCodePage />
                </Route>
                <Route path="/resset-password">
                    <RessetPasswordPage />
                </Route>
            </Switch>
        </Router>
    );
}