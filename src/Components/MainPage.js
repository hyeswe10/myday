import { useState } from "react";
import Quote from "./Quote";

const MainPage = ({user,onLogout}) => {
    return (
        <div>
        <div className="main-page">
            <Quote/>
            <h2>{user}님 반가워요</h2>
            <button onClick={()=>{onLogout('')}}>로그아웃</button>
        </div>
        </div>
    );
};

export default MainPage;