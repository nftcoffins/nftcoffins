import React from 'react'

import emptyPreview from '../../../../images/emptyPreview.jpg'
import styles from './nextMint.scss'

export function NextMint() {
    return (
        <div className={styles.nextMint}>
            <div className={styles.imageBlock}>
                <div className={styles.text}>
                    <div>Mint</div>
                    <div>On Friday</div>
                </div>
                <img src={emptyPreview} alt="Next mint" />
            </div>
        </div>
    )
}
