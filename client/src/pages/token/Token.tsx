import React from 'react'
import { useParams } from 'react-router-dom'

import { Token as TokenComponent } from '../../shared/components/token/Token'
import { TokenPreviews } from '../../components/tokenPreviews/TokenPreviews'
import { useAppSelector, useResetScroll } from '../../shared/hooks'
import { selectTokenIds } from '../../app/AppSlice'

import styles from './Token.scss'

export function Token() {
    const tokenIds = useAppSelector(selectTokenIds)
    let { id } = useParams()

    useResetScroll([id])

    return (
        <div className={styles.token}>
            <TokenComponent tokenId={id} />

            <TokenPreviews title="for sale" tokenIds={tokenIds} />
        </div>
    )
}
