import React from 'react';
import style from './style/style.module.css'

const Pagination = (props) => {
    const handleIncrement = () => {
        if (props.current !== props.pages) props.handlePage(props.current+1);
    }
    const handleDecrement = () => {
        if (props.current !== 1) props.handlePage(props.current-1);
    }
    return (
        <div className={style.pagination}>
            <div className={style.container}>
                <div className={style.leftBtn} onClick={handleDecrement}>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.285 19.0122L10.3743 19.9985C9.98868 20.4161 9.36514 20.4161 8.98363 19.9985L1.00881 11.3664C0.623201 10.9487 0.623201 10.2735 1.00881 9.86029L8.98363 1.22373C9.36924 0.80612 9.99279 0.80612 10.3743 1.22373L11.285 2.21C11.6747 2.63206 11.6665 3.32067 11.2686 3.73384L6.32536 8.83403H18.1153C18.6609 8.83403 19.0998 9.3094 19.0998 9.90027V11.3219C19.0998 11.9128 18.6609 12.3882 18.1153 12.3882H6.32536L11.2686 17.4884C11.6706 17.9015 11.6788 18.5901 11.285 19.0122Z"
                            fill="black"/>
                    </svg>

                </div>

                <div className={style.currentPage}>{props.current} из {props.pages}</div>

                <div className={style.rightBtn} onClick={handleIncrement}>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.38602 1.30177L9.29672 0.315497C9.68234 -0.102113 10.3059 -0.102113 10.6874 0.315498L18.6622 8.94761C19.0478 9.36522 19.0478 10.0405 18.6622 10.4537L10.6874 19.0902C10.3018 19.5078 9.67823 19.5078 9.29672 19.0902L8.38602 18.104C7.9963 17.6819 8.00451 16.9933 8.40243 16.5801L13.3457 11.4799L1.55574 11.4799C1.01014 11.4799 0.571194 11.0046 0.571194 10.4137L0.571194 8.99204C0.571195 8.40116 1.01014 7.92579 1.55574 7.92579L13.3457 7.9258L8.40243 2.82561C8.00041 2.41244 7.9922 1.72382 8.38602 1.30177Z"
                            fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Pagination;