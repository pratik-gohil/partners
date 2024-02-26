import React from 'react'
import styles from "./BreadcrumbSec.module.scss"; 

const BreadcrumbSec = () => {
    return (
        <>
        <div className={`${styles.breadcrumbSec}`}>
            <div className={`${styles.maContainer}`}>
                <ul>
                    <li><a href="#" title="home"><img src="https://www.miraeassetpartners.com/asset/images/icon-home.svg" width="15" height="15" alt="home" title="home"/></a></li>
                    <li>Inner page</li>
                </ul>
            </div>
        </div> 
        </>
    )
}

export default BreadcrumbSec;

