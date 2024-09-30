import McquennPage from "./McquennPage";
import {useState} from "react";
import {IzmirMap} from "../components/map/IzmirMap";
import {izmirMekanList} from "../javascripts/izmirMekanlar";

const HomePage = () => {
    const [isMQVisible, setIsMQVisible] = useState(true);
    const [isMapVisible, setIsMapVisible] = useState(false);

    const handleYesOption = () => {
        setIsMapVisible(true);
        setIsMQVisible(false);
    };

    return (
        <>
            {isMQVisible && <McquennPage handleYesOption={handleYesOption}/>}
            {
                isMapVisible &&
                <>
                    <h1> Nereye Gidiyoruz ? </h1>
                    <IzmirMap markers={izmirMekanList}/>
                </>
            }
        </>
    );
};

export default HomePage;