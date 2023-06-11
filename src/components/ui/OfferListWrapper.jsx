import {useSelector} from "react-redux";
import {Loader} from "../global/Loader.jsx";
import {useParams} from "react-router";
import {OfferListTable} from "./OfferListTable.jsx";

export const OfferListWrapper = ({ user, isActiveUserSpecUser }) => {
    const {isLoading, activeUserIncomingOffers, specificUserIncomingOffers } = useSelector((state) => state.offers);
    return (
        <div
            className={
                "flex flex-col justify-center mx-auto w-full"
            }
        >
            {
                isLoading ? (<Loader />) : (<OfferListTable offers={isActiveUserSpecUser ? activeUserIncomingOffers : specificUserIncomingOffers} isActiveUserSpecUser={isActiveUserSpecUser} />)
            }
        </div>
    );
};