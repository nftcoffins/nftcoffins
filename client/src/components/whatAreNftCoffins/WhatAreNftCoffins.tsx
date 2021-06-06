import React from 'react'
import classNames from 'classnames'

import empty from '../../../images/emptyCoffin.png'
import withAttributes from '../../../images/withAttributes.png'
import fullCoffin from '../../../images/fullCoffin.png'

import styles from './WhatAreNftCoffins.scss'

type Props = {
    className: string
}

export function WhatAreNftCoffins({ className }: Props) {
    return (
        <div className={classNames(styles.whatAreNftCoffins, className)}>
            <div className={styles.title}>what are the NFT Coffins?</div>

            <div className={styles.points}>
                <div className={styles.point}>
                    <img src={withAttributes} />
                    <div className={styles.descriptionBlock}>
                        <div className={styles.subtitle}>ERC-721 </div>
                        <div className={styles.description}>
                            The NFT contract (0xf7a0Be0EBb60EaE52f9340Cc5FA136fcFde4744E) the governs ownership is a
                            standard ERC-721 that works with any compatible service or exchange.
                        </div>
                    </div>
                </div>

                <div className={styles.point}>
                    <img src={empty} />
                    <div className={styles.descriptionBlock}>
                        <div className={styles.subtitle}>Ranks and Categories</div>
                        <div className={styles.description}>
                            All coffins are divided into five ranks: God, Legendary, Gold, Silver and Evil. And all the
                            coffins are grouped into eight categories: Art, Business, Scientist, Politician, Character,
                            Influencer, Sport, Comedian.
                        </div>
                    </div>
                </div>

                <div className={styles.point}>
                    <img src={fullCoffin} />
                    <div className={styles.descriptionBlock}>
                        <div className={styles.subtitle}>Burning price</div>
                        <div className={styles.description}>
                            Each coffin, depending on its rank, has a specific cost of burning. So the owner of the
                            token can destroy it. Just know it.
                        </div>
                    </div>
                </div>

                <div className={styles.point}>
                    <img src={fullCoffin} />
                    <div className={styles.descriptionBlock}>
                        <div className={styles.subtitle}>Start of new Ecosystem</div>
                        <div className={styles.description}>
                            The collection of NFT coffins is the beginning of a new Ecosystem. You can earn for holding
                            your tokens, increase the cost by unique attributes and compete with other users in a casual
                            game.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
