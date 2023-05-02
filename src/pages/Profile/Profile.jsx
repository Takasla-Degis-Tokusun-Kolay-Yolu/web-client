import {NavBar} from "../../components/ui/Navbar.jsx";
import {Hero} from "./Hero.jsx";
import {ProfileCard} from "./ProfileCard.jsx";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import {TabView} from "./TabView.jsx";
import { useEffect, useState } from "react";
export const Profile = () => {
    const activeUser = useSelector((state) => state.auth.activeUser);
    const [user, setUser] = useState(activeUser);
    const { selectedUser } = useSelector((state) => state.auth);
    const { id } = useParams();
    useEffect(() => {
        if(id) {
            setUser(selectedUser);
        } else {
            setUser(activeUser);
        }
    }, [selectedUser, activeUser])
    return (
        <>
            <NavBar />
            <Hero user={user} />
            <ProfileCard user={user} />
            <TabView user={user} />
        </>
    )
}