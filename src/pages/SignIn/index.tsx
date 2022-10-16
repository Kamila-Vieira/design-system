import { Header } from "../../modules/Header";
import { SignInForm } from "../../modules/SignInForm";
import { Footer } from "../../modules/Footer";

export function SignIn() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100">
      <Header />
      <SignInForm />
      <Footer />
    </div>
  );
}
