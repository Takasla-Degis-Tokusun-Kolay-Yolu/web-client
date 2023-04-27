import {NavBar} from "../../components/ui/Navbar.jsx";
import {Hero} from "./Hero.jsx";
import {ProfileCard} from "./ProfileCard.jsx";

import {useSelector} from "react-redux";
export const Profile = () => {
    const activeUser = useSelector((state) => state.auth.activeUser);
    return (
        <>
            <NavBar />
            <Hero user={activeUser} />
            <ProfileCard user={activeUser} />
        </>
    )
}