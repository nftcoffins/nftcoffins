import React, { useEffect, useState } from 'react'
import classnames from 'classnames'

import { fetchToken } from '../../api'
import { LoaderContainer } from '../shared'
import { selectGeneralInfo } from '../../app/AppSlice'
import { useAppSelector } from '../../hooks'

import { Token } from '../../models'
import styles from './TokenPreview.scss'

type Props = {
    tokenId: number
}

export function TokenPreview({ tokenId }: Props) {
    const { prices } = useAppSelector(selectGeneralInfo)
    const [token, setToken] = useState<Token>(null)
    const tokenPrice = prices[tokenId]

    useEffect(() => {
        fetchToken(tokenId).then(setToken)
    }, [])

    const containerClasses = classnames(styles.tokenPreview, styles[token?.rank.toLowerCase()])

    return (
        <LoaderContainer isLoading={!token} className={styles.loaderContainer}>
            <div className={containerClasses}>
                <div className={styles.id}>{`#${token?.id}`}</div>
                <img src={token?.webImage} alt="Token Image" />
                <div className={styles.bottomBlock}>
                    <div className={styles.nameBlock}>
                        <div className={styles.name}>{token?.name}</div>
                        <div className={styles.rank}>{token?.rank}</div>
                    </div>
                    <div className={styles.priceBlock}>
                        <div>{tokenPrice}</div>
                        <div>eth</div>
                    </div>
                </div>
            </div>
        </LoaderContainer>
    )
}
