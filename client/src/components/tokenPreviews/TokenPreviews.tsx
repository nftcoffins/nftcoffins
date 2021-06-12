import React from 'react'
import isEmpty from 'is-empty-typed'

import { TokenPreview } from '../../shared/components/tokenPreview/TokenPreview'
import { NextMint } from '../../shared/components/nextMint/NextMint'

import styles from './TokenPreviews.scss'

type Props = {
    title: string
    tokenIds: number[]
}

export function TokenPreviews({ title, tokenIds }: Props) {
    return (
        <div className={styles.tokenPreviews}>
            <div className={styles.title}>{title}</div>
            <div className={styles.gridContainer}>
                {!isEmpty(tokenIds) && tokenIds.map((tokenId) => <TokenPreview key={tokenId} tokenId={tokenId} />)}
                <NextMint />
            </div>
        </div>
    )
}
