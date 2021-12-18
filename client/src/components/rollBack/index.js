import React from 'react';
import style from "./style/style.module.css";
import { Link } from "react-router-dom";

const RollBack = ({ text }) => {
    return (
        <div className={style.title}>
            <Link to="/teacher" className={style.rollBack}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.3706 23.3255L13.1319 24.5964C12.6074 25.1345 11.7593 25.1345 11.2404 24.5964L0.393371 13.4732C-0.131124 12.9351 -0.131124 12.0649 0.393371 11.5325L11.2404 0.403595C11.7649 -0.134532 12.613 -0.134532 13.1319 0.403595L14.3706 1.67449C14.9007 2.21834 14.8895 3.10568 14.3483 3.63808L7.62471 10.2101H23.6609C24.403 10.2101 25 10.8226 25 11.584V13.416C25 14.1774 24.403 14.7899 23.6609 14.7899H7.62471L14.3483 21.3619C14.8951 21.8943 14.9063 22.7817 14.3706 23.3255Z"
                        fill="black"/>
                </svg>
            </Link>
            <div className={style.text}>{ text }</div>
        </div>
    );
};

export default RollBack;