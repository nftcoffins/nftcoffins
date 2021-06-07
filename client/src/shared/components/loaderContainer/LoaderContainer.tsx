import React, { ReactElement } from 'react'
import classNames from 'classnames'

import styles from './LoaderContainer.scss'
import { Spinner } from '../spinner/Spinner'

type Props = {
    isLoading: boolean
    className?: string
    children: ReactElement
}

export const LoaderContainer = ({ isLoading, children, className }: Props) => {
    const onContentClick = (e) => e.preventDefault()

    if (isLoading) {
        return (
            <div className={classNames(styles.loaderContainer, className)} onClick={onContentClick}>
                <Spinner />
            </div>
        )
    }

    return children
}
