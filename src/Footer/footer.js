import React from 'react'
import {
    SFacebook,
    SFooter,
    SFooterPicture1,
    SFooterPicture2,
    SFooterPicture3,
    SLinkedin,
    SPinterest,
    STwitter
} from "./styles";
import {
    facebookLink, facebookLogo,
    greenCartoonLink,
    linkedinLogo,
    myLinkedinLink, pinterestLink, pinterestLogo,
    redCartoonLink,
    twitterLink, twitterLogo,
    yellowCartoonLink
} from "./content";

const Footer = () => {
    return (
        <SFooter>
            <SFooterPicture1 src={redCartoonLink}></SFooterPicture1>
            <SFooterPicture2 src={greenCartoonLink}></SFooterPicture2>
            <SFooterPicture3 src={yellowCartoonLink}></SFooterPicture3>
            <a href={myLinkedinLink} target={"_blank"}>
                <SLinkedin src={linkedinLogo}></SLinkedin>
            </a>
            <a href={twitterLink} target={"_blank"}>
                <STwitter src={twitterLogo}></STwitter>
            </a>
            <a href={facebookLink} target={"_blank"}>
                <SFacebook src={facebookLogo}></SFacebook>
            </a>
            <a href={pinterestLink} targer={"_blank"}>
                <SPinterest src={pinterestLogo}></SPinterest>
            </a>

        </SFooter>
    );
}
export default Footer;