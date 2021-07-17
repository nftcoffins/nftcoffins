import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Viewer from 'react-viewer'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

import { fetchToken } from '../../api'
import { LoaderContainer, OpenSeaLink } from '../index'
import { selectGeneralInfo } from '../../../app/AppSlice'
import { useAppSelector } from '../../hooks'

import { Token as TokenModel } from '../../models'
import styles from './Token.scss'

type Props = {
    tokenId: number
}

export function Token({ tokenId }: Props) {
    const { prices } = useAppSelector(selectGeneralInfo)
    const [token, setToken] = useState<TokenModel>(null)
    const tokenPrice = prices[tokenId]
    const [isViewerShown, setIsViewerShown] = useState(false)
    const containerClasses = classNames(styles.tokenPreview, styles[token?.rank.toLowerCase()])
    const priceView = `Price: ${tokenPrice} Eth`

    useEffect(() => {
        setToken(null)
        fetchToken(tokenId).then(setToken)
    }, [tokenId])

    const openViewer = () => {
        setIsViewerShown(true)
        disablePageScroll()
    }

    const closeViewer = () => {
        setIsViewerShown(false)
        enablePageScroll()
    }

    return (
        <LoaderContainer isLoading={!token} className={styles.loaderContainer}>
            <div className={containerClasses}>
                <div className={styles.gridContainer}>
                    <img src={token?.webImage} alt="Token Image" onClick={openViewer} />

                    <Viewer
                        images={[{ src: token?.image, alt: token?.name }]}
                        visible={isViewerShown}
                        onClose={closeViewer}
                        noFooter
                    />

                    <div className={styles.nameTitle}>{token?.name}</div>
                    <div className={styles.price}>{priceView}</div>

                    <div className={styles.id}>
                        <span className={styles.propertyName}>Token ID:</span>
                        <span className={styles.propertyValue}>{token?.id}</span>
                    </div>
                    <div className={styles.name}>
                        <span className={styles.propertyName}>Name:</span>
                        <span className={styles.propertyValue}>{token?.name}</span>
                    </div>
                    <div className={styles.rank}>
                        <span className={styles.propertyName}>Rank:</span>
                        <span className={styles.propertyValue}>{token?.rank}</span>
                    </div>
                    <div className={styles.category}>
                        <span className={styles.propertyName}>Category:</span>
                        <span className={styles.propertyValue}>{token?.category}</span>
                    </div>
                    <div className={styles.subcategory}>
                        <span className={styles.propertyName}>Subcategory:</span>
                        <span className={styles.propertyValue}>{token?.subcategory}</span>
                    </div>
                    <div className={styles.status}>
                        <span className={styles.propertyName}>Coffin Status:</span>
                        <span className={styles.propertyValue}>{token?.coffinStatus}</span>
                    </div>
                    <div className={styles.features}>
                        <span className={styles.propertyName}>Features:</span>
                        <span className={styles.propertyValue}>{token?.featuresCount}</span>
                    </div>
                    <div className={styles.burningFee}>
                        <span className={styles.propertyName}>Burning Fee:</span>
                        <span className={styles.propertyValue}>{token?.burningFee}</span>
                    </div>
                    <div className={styles.born}>
                        <span className={styles.propertyName}>Born:</span>
                        <span className={styles.propertyValue}>{token?.bornDate.toDateString()}</span>
                    </div>
                    {token?.diedDate && (
                        <div className={styles.died}>
                            <span className={styles.propertyName}>Died:</span>
                            <span className={styles.propertyValue}>{token.diedDate.toDateString()}</span>
                        </div>
                    )}
                    <div className={styles.description}>
                        <span className={styles.propertyName}>Description:</span>
                        <span className={styles.propertyValue}>{token?.description}</span>
                    </div>

                    <OpenSeaLink className={styles.openSeaLink} tokenId={tokenId} />
                </div>
            </div>
        </LoaderContainer>
    )
}
