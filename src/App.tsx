import { Header } from "./modules/Header";
import { SingInForm } from "./modules/SingInForm";
import { Footer } from "./modules/Footer";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100">
      <Header />
      <SingInForm />
      <Footer />
    </div>
  );
}
