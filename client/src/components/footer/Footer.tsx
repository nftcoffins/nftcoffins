import React from 'react'
import classNames from 'classnames'

import footerImage from '../../../images/footer.png'

import styles from './Footer.scss'
import * as url from 'url'

type Props = {
    className: string
}

export function Footer({ className }: Props) {
    return (
        <div
            className={classNames(styles.footer, className)}
            style={{
                backgroundImage: `url("../../../images/footer.png")`,
            }}
        />
    )
}
