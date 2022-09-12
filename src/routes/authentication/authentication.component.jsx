import SignInForm from '../../components/signin/signin.component';
import SignUpForm from '../../components/signup/signup.component';
import './authentication.styles.scss';

const SignIn = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup.</button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
