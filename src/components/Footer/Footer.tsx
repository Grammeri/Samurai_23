import React from 'react';
import styles from "./footer.module.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
           <div className={styles.socialNetWorks}>
               <FacebookOutlinedIcon fontSize={"large"}/>
               <SendOutlinedIcon fontSize={"large"}/>
               <TwitterIcon fontSize={"large"}/>
               <YouTubeIcon fontSize={"large"}/>
           </div>

            <p>&copy; 2023, by Dmitry Nikolayev. All rights reserved</p>
        </div>
    );
};
