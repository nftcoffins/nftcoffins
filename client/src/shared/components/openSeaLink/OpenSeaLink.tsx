import React from 'react'

import { OPEN_SEA_URL } from '../../constants'
import coffinImage from '../../../../images/coffin.png'
import styles from './OpenSeaLink.scss'
import classNames from 'classnames'

type Props = {
    tokenId?: number
    className?: string
}

export function OpenSeaLink({ tokenId, className }: Props) {
    const link = tokenId ? `${OPEN_SEA_URL}1` : OPEN_SEA_URL

    return (
        <div className={classNames(styles.openSeaLink, className)}>
            <a href={link} target="_blank">
                Buy on OpenSea
            </a>
            <img src={coffinImage} />
        </div>
    )
}
