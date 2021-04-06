import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { logIn } from '../Action/index';
export default function LogOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("password")
    const dispatch = useDispatch();
    const history = useHistory();
    dispatch(logIn(''));
    history.push('/')
    return (
        <></>
    )

}