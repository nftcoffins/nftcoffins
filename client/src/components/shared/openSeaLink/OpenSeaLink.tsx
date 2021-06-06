import React from 'react'

import coffinImage from '../../../../images/coffin.png'
import styles from './OpenSeaLink.scss'

export function OpenSeaLink() {
    return (
        <div className={styles.openSeaLink}>
            <a href="#">Buy on OpenSea</a>
            <img src={coffinImage} />
        </div>
    )
}
