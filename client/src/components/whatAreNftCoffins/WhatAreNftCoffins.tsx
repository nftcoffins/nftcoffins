import React from 'react'
import classNames from 'classnames'

import contract from '../../../images/contract.jpg'
import rank from '../../../images/rank.jpg'
import burning from '../../../images/burning.jpg'
import ecosystem from '../../../images/ecosystem.jpg'

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
                    <div className={styles.descriptionBlock}>
                        <img src={contract} />
                        <span className={styles.subtitle}>ERC-721 </span>
                        <br />
                        <span className={styles.description}>
                            The NFT contract (0xf7a0Be0EBb60EaE52f9340Cc5FA136fcFde4744E) the governs ownership is a
                            standard ERC-721 that works with any compatible service or exchange.
                        </span>
                    </div>
                </div>

                <div className={styles.point}>
                    <div className={styles.descriptionBlock}>
                        <img src={rank} />
                        <span className={styles.subtitle}>Ranks and Categories</span>
                        <br />
                        <span className={styles.description}>
                            All coffins are divided into five ranks: God, Legendary, Gold, Silver and Evil. And all the
                            coffins are grouped into eight categories: Art, Business, Scientist, Politician, Character,
                            Influencer, Sport, Comedian.
                        </span>
                    </div>
                </div>

                <div className={styles.point}>
                    <div className={styles.descriptionBlock}>
                        <img src={burning} />
                        <span className={styles.subtitle}>Burning price</span>
                        <br />
                        <span className={styles.description}>
                            Each coffin, depending on its rank, has a specific cost of burning. So the owner of the
                            token can destroy it. Just know it.
                        </span>
                    </div>
                </div>

                <div className={styles.point}>
                    <div className={styles.descriptionBlock}>
                        <img src={ecosystem} />
                        <span className={styles.subtitle}>Start of new Ecosystem</span>
                        <br />
                        <span className={styles.description}>
                            The collection of NFT coffins is the beginning of a new Ecosystem. You can earn for holding
                            your tokens, increase the cost by unique attributes and compete with other users in a casual
                            game.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
