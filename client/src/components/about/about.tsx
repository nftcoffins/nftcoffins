import React from 'react'
import classNames from 'classnames'

import styles from './about.scss'

type Props = {
    className: string
}

export function About({ className }: Props) {
    return (
        <div className={classNames(styles.about, className)}>
            <div className={styles.title}>about</div>

            <div className={styles.description}>
                <p>
                    When death strikes, we are all the same. Even Jesus! You control how future generations will
                    remember you until you leave. The set of our actions leaves a mark on our biography. Do great
                    things.
                </p>
                <p>
                    We've created a collection of 420 unique NFT coffins for the most influential people of all time.
                    Features of each coffin reflect how people remember it. Some of the coffins are already full, and
                    others will have their lids slammed soon. But some of them will remain in undefined status. Yeah,
                    like Jesus.
                </p>
                <p>
                    Collect, share, have fun, but do not forget to think that you have only two states: an empty and a
                    full coffin. See you behind the closed coffin lid.
                </p>
            </div>
        </div>
    )
}
