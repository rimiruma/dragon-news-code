import FindUs from "./FindUs";
import Hero from "./Hero";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";


const RightAside = () => {
    return (
        <div className="space-y-8">
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <QZone></QZone>
           <Hero></Hero>
        </div>
    );
};

export default RightAside;