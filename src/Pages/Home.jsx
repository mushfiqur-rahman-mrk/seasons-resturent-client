import Downlode from "../Components/DownlodeApp/Downlode";
import Banner from "../Components/Header/Banner";
import PopularFood from "../Components/PopularFood/PopularFood";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularFood></PopularFood>
            <Downlode></Downlode>
        </div>
    );
};

export default Home;