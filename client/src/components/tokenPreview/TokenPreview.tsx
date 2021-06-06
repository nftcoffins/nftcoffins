import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import { fetchToken } from '../../shared/api'
import { LoaderContainer } from '../../shared/components'
import { selectGeneralInfo } from '../../app/AppSlice'
import { useAppSelector } from '../../shared/hooks'

import { Token } from '../../shared/models'
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

    const containerClasses = classNames(styles.tokenPreview, styles[token?.rank.toLowerCase()])

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
