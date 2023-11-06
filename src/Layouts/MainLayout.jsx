 
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import useAuth from '../Hooks/useAuth';
import Spinner from '../Components/Spinner/Spinner';

const MainLayout = () => {
    const {loading}=useAuth()
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <> 
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>  
        </>
    );
};

export default MainLayout;