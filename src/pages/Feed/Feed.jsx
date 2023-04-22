import { NavBar } from "../../components/ui/Navbar";

import {useEffect, useState} from "react";
import {fetchActiveUser} from "../../store/actions/auth.js";
import {useDispatch} from "react-redux";

const Feed = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchActiveUser);
    });
  return (
    <>
      <NavBar />

    </>
  );
};

export default Feed;
