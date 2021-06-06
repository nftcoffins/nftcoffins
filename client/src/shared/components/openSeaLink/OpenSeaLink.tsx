import React from 'react'

import { OPEN_SEA_URL } from '../../constants'
import coffinImage from '../../../../images/coffin.png'
import styles from './OpenSeaLink.scss'

export function OpenSeaLink() {
    return (
        <div className={styles.openSeaLink}>
            <a href={OPEN_SEA_URL} target="_blank">
                Buy on OpenSea
            </a>
            <img src={coffinImage} />
        </div>
    )
}
