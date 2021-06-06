import React from 'react'
import classNames from 'classnames'

import { OpenSeaLink } from '../../shared/components'

import image from '../../../images/main.png'
import styles from './Banner.scss'

type Props = {
    className: string
}

export function Banner({ className }: Props) {
    return (
        <div className={classNames(styles.banner, className)}>
            <div className={styles.description}>
                <div className={styles.big}>Get busy living or get busy dying.</div>
                <div className={styles.small}>420 unique coffins of significant figures of all time.</div>
                <OpenSeaLink />
            </div>
            <div className={styles.imageBlock}>
                <img src={image} />
            </div>
        </div>
    )
}
