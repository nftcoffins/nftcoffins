import React from 'react'
import classNames from 'classnames'

import styles from './FirstToken.scss'
import { Token } from '../../shared/components/token/Token'

type Props = {
    firstTokenId: number
    className: string
}

export function FirstToken({ firstTokenId, className }: Props) {
    return (
        <div className={classNames(styles.firstToken, className)}>
            <div className={styles.title}>welcome the first token</div>

            <Token tokenId={firstTokenId} />
        </div>
    )
}
