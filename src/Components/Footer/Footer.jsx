import { BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs"; 
import footersvg from '/src/assets/logo.png'
import footerlogo from '/src/assets/footershape.png'
const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 relative">
        <div className="mt-[-10px]">
          <img src={footerlogo}  alt="" />
        </div>
      <footer className="footer p-10 text-base-content">
        <aside>
             <img src={footersvg} className="sm:w-60" alt="" />
        </aside>

        <div className="text-white">
          <header className="text-yellow-500 text-lg font-semibold">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
     
        <nav className="text-white">
          <header className="text-yellow-500 text-lg font-semibold">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        <nav>
          <header className="text-yellow-500 text-lg font-semibold">Socila</header>

          <div className="flex gap-5 text-3xl">
          <BsFacebook className="text-blue-500"></BsFacebook>
          <BsTwitter className="text-sky-500"></BsTwitter>
 
          </div>
           
        </nav>
        
      </footer>
 
      <div className="footer footer-center p-4 text-base-content">
        <aside>
          <p className="text-yellow-500">Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
      </div>
    </>
  );
};

export default Footer;
