import React from "react";
import { Link } from "react-router-dom";

const NavTeacher = () => {
    return (
        <>
            <li>
                <Link to="/teacher/lectures">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 22.5V1.5C32 0.66875 31.2357 0 30.2857 0H6.85714C3.07143 0 0 2.6875 0 6V26C0 29.3125 3.07143 32 6.85714 32H30.2857C31.2357 32 32 31.3313 32 30.5V29.5C32 29.0312 31.75 28.6062 31.3643 28.3312C31.0643 27.3687 31.0643 24.625 31.3643 23.6625C31.75 23.3938 32 22.9688 32 22.5ZM9.14286 8.375C9.14286 8.16875 9.33571 8 9.57143 8H24.7143C24.95 8 25.1429 8.16875 25.1429 8.375V9.625C25.1429 9.83125 24.95 10 24.7143 10H9.57143C9.33571 10 9.14286 9.83125 9.14286 9.625V8.375ZM9.14286 12.375C9.14286 12.1688 9.33571 12 9.57143 12H24.7143C24.95 12 25.1429 12.1688 25.1429 12.375V13.625C25.1429 13.8312 24.95 14 24.7143 14H9.57143C9.33571 14 9.14286 13.8312 9.14286 13.625V12.375ZM27.2429 28H6.85714C5.59286 28 4.57143 27.1063 4.57143 26C4.57143 24.9 5.6 24 6.85714 24H27.2429C27.1071 25.0688 27.1071 26.9312 27.2429 28Z" fill="black" />
                    </svg>
                    <span>Лекции</span>
                </Link>
            </li>
            <li>
                <Link to="/teacher/messages">
                    <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2778 12.5C25.2778 5.59375 19.6207 0 12.6389 0C5.65712 0 0 5.59375 0 12.5C0 15.1797 0.856771 17.6484 2.30903 19.6875C1.49479 22.0469 0.15191 23.9219 0.133681 23.9453C0 24.125 -0.0364583 24.3906 0.0425347 24.625C0.121528 24.8594 0.291667 25 0.486111 25C2.71007 25 4.55122 24.0391 5.87587 23.0469C7.83247 24.2734 10.1476 25 12.6389 25C19.6207 25 25.2778 19.4063 25.2778 12.5ZM32.691 29.6875C34.1432 27.6562 35 25.1797 35 22.5C35 17.2734 31.7491 12.7969 27.1432 10.9297C27.1979 11.4453 27.2222 11.9687 27.2222 12.5C27.2222 20.7734 20.678 27.5 12.6389 27.5C11.9826 27.5 11.3446 27.4375 10.7127 27.3516C12.6267 31.8438 17.1233 35 22.3611 35C24.8524 35 27.1675 34.2813 29.1241 33.0469C30.4488 34.0391 32.2899 35 34.5139 35C34.7083 35 34.8845 34.8516 34.9575 34.625C35.0365 34.3984 35 34.1328 34.8663 33.9453C34.8481 33.9219 33.5052 32.0547 32.691 29.6875Z" fill="black" />
                    </svg>
                    <span>Сообщения</span>
                </Link>
            </li>
            <li>
                <Link to="/teacher/upload-lecture">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 0H18.5C19.3313 0 20 0.66875 20 1.5V12H25.4813C26.5938 12 27.15 13.3438 26.3625 14.1313L16.8563 23.6437C16.3875 24.1125 15.6187 24.1125 15.15 23.6437L5.63125 14.1313C4.84375 13.3438 5.4 12 6.5125 12H12V1.5C12 0.66875 12.6687 0 13.5 0ZM32 23.5V30.5C32 31.3313 31.3313 32 30.5 32H1.5C0.66875 32 0 31.3313 0 30.5V23.5C0 22.6687 0.66875 22 1.5 22H10.6687L13.7312 25.0625C14.9875 26.3188 17.0125 26.3188 18.2687 25.0625L21.3312 22H30.5C31.3313 22 32 22.6687 32 23.5ZM24.25 29C24.25 28.3125 23.6875 27.75 23 27.75C22.3125 27.75 21.75 28.3125 21.75 29C21.75 29.6875 22.3125 30.25 23 30.25C23.6875 30.25 24.25 29.6875 24.25 29ZM28.25 29C28.25 28.3125 27.6875 27.75 27 27.75C26.3125 27.75 25.75 28.3125 25.75 29C25.75 29.6875 26.3125 30.25 27 30.25C27.6875 30.25 28.25 29.6875 28.25 29Z" fill="black" />
                    </svg>
                    <span>Загрузить лекцию</span>
                </Link>
            </li>
        </>
    )
}

export default NavTeacher;