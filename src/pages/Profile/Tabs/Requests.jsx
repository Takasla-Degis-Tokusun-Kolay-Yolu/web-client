import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useRef, useState} from "react";

import {getLoggedUserOffers, getSpecificUserOffers} from "../../../store/actions/offers.js";
import {OfferListWrapper} from "../../../components/ui/OfferListWrapper.jsx";

export const Requests = ({user}) => {
    const [isActiveUserSpecUser, setIsActiveUserSpecUser] = useState(false);
    const dispatch = useDispatch();
    const {id} = useParams();
    const initialRender = useRef(0);
    const {activeUser} = useSelector((state) => state.auth);
    // CHECK PATH HERE IF 'ME' check
    useEffect(() => {
        if (initialRender.current === 0) {
            if(id === activeUser?._id) {
                dispatch(getLoggedUserOffers(activeUser?._id));
                setIsActiveUserSpecUser(true);
                initialRender.current = 1;
            } else {
                dispatch(getSpecificUserOffers(id));
                setIsActiveUserSpecUser(false);
                initialRender.current = 1;
            }
        }
    }, [])
    return (
        <OfferListWrapper user={user} isActiveUserSpecUser={isActiveUserSpecUser}/>
    )
}