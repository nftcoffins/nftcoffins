import React from 'react'
import classNames from 'classnames'

import styles from './Burger.scss'

type Props = {
    isActive: boolean
    onClick: () => void
}

export function Burger({ isActive, onClick }: Props) {
    return (
        <div className={classNames(styles.burger, { [styles.active]: isActive })} onClick={onClick}>
            <span />
        </div>
    )
}
