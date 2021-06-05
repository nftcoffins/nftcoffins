import React, { ReactElement } from 'react'
import classnames from 'classnames'

import { ComponentLike } from '../../../types'

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
            <div className={classnames(styles.loaderContainer, className)} onClick={onContentClick}>
                <Spinner />
            </div>
        )
    }

    return children
}
