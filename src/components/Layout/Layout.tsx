import './Layout.css';
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }: any) => {
  return(
    <div className='children'>
      <Header />
      { children }
      <Footer />
    </div>
  )
}