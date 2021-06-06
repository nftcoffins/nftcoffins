import React, { useState } from 'react'
import classNames from 'classnames'

import image from '../../../images/favicon/apple-touch-icon.png'

import { OpenSeaLink } from '../../shared/components'
import { Burger } from './burger/Burger'
import styles from './Header.scss'

type Props = {
    className: string
}

export function Header({ className }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)
    const closeMobileMenu = () => setIsOpen(false)

    return (
        <div className={classNames(styles.header, className)}>
            <div className={styles.logoNav}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={image} alt="Logo" />
                    <div className={styles.title}>NFT Coffins</div>
                </div>

                <ul className={classNames(styles.options, { [styles.active]: isOpen })}>
                    <li className={styles.option} onClick={closeMobileMenu}>
                        <a href="https://twitter.com/nftcoffins" target="_blank">
                            Twitter
                        </a>
                    </li>
                    <li className={styles.option} onClick={closeMobileMenu}>
                        <a href="https://nftcoffins.medium.com" target="_blank">
                            Medium
                        </a>
                    </li>

                    <li className={styles.option} onClick={closeMobileMenu}>
                        <OpenSeaLink />
                    </li>
                </ul>
            </div>

            <div className={styles.burger}>
                <Burger onClick={handleClick} isActive={isOpen} />
            </div>
        </div>
    )
}
