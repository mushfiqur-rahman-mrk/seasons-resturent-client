import Downlode from "../Components/DownlodeApp/Downlode";
import Banner from "../Components/Header/Banner";
import PopularFood from "../Components/PopularFood/PopularFood";
import HotDeals from "../Components/Ui/HotDeals";
 

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularFood></PopularFood>
            <HotDeals></HotDeals>
            <Downlode></Downlode>
             
        </div>
    );
};

export default Home;