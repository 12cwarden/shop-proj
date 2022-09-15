import SignInForm from '../../components/signin/signin.component';
import SignUpForm from '../../components/signup/signup.component';
import { AuthBlock } from './authentication.styles';

const SignIn = () => {
  return (
    <AuthBlock>
      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup.</button> */}
      <SignUpForm />
    </AuthBlock>
  );
};

export default SignIn;
