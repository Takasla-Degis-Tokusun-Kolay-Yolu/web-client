import {NavBar} from "../../components/ui/Navbar.jsx";
import {Banner} from "./Banner.jsx";
import {CATEGORIES} from "../../utils/constants/tabTypes.js";

export const Categories = () => {
    return (
        <div>
            <NavBar activeTab={CATEGORIES} />
            <Banner />
        </div>
    );
};