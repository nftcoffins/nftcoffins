import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'

import { fetchToken } from '../../api'
import { LoaderContainer } from '../index'
import { selectGeneralInfo } from '../../../app/AppSlice'
import { useAppSelector } from '../../hooks'

import { Token } from '../../models'
import styles from './TokenPreview.scss'

type Props = {
    tokenId: number
}

export function TokenPreview({ tokenId }: Props) {
    const history = useHistory()
    const { prices } = useAppSelector(selectGeneralInfo)
    const [token, setToken] = useState<Token>(null)
    const tokenPrice = prices[tokenId]

    useEffect(() => {
        fetchToken(tokenId).then(setToken)
    }, [tokenId])

    const containerClasses = classNames(styles.tokenPreview, styles[token?.rank.toLowerCase()])

    const toToken = () => {
        history.push(`/token/${tokenId}`)
    }

    return (
        <LoaderContainer isLoading={!token} className={styles.loaderContainer}>
            <div onClick={toToken} className={containerClasses}>
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
