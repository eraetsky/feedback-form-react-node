import {SMap, SPicture1, SPicture2, SPicture3} from "../Page/styles";
import {mapLink, redCartoonLink, yellowCartoonLink1, yellowCartoonLink2} from "./content";


const Background = () => {
    return(
        <div>
            <SMap src={mapLink}></SMap>
            <SPicture3 src={redCartoonLink}></SPicture3>
            <SPicture2 src={yellowCartoonLink1}></SPicture2>
            <SPicture1 src={yellowCartoonLink2}></SPicture1>
        </div>
    );
}

export  default Background