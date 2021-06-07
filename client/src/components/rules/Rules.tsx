import React from 'react'
import classNames from 'classnames'

import empty from '../../../images/emptyCoffin.png'
import withAttributes from '../../../images/withAttributes.png'
import fullCoffin from '../../../images/fullCoffin.png'

import styles from './Rules.scss'

type Props = {
    className: string
}

export function Rules({ className }: Props) {
    return (
        <div className={classNames(styles.rules, className)}>
            <div className={styles.title}>just three rules</div>

            <div className={styles.rulesBlock}>
                <div className={styles.rule}>
                    <img src={empty} />
                    <div className={styles.subtitle}>Empty Coffin</div>
                    <div className={styles.description}>
                        When the character is alive in the real world, the coffin is empty.
                    </div>
                </div>

                <div className={styles.rule}>
                    <img src={withAttributes} />
                    <div className={styles.subtitle}>With Attributes</div>
                    <div className={styles.description}>
                        The character is still alive but filled with attributes related to the character's life.
                    </div>
                </div>

                <div className={styles.rule}>
                    <img src={fullCoffin} />
                    <div className={styles.subtitle}>Full Coffin</div>
                    <div className={styles.description}>
                        The coffin lid slammed. This is a full coffin behind glass. It Will never be changed attributes
                        related to the character's life.
                    </div>
                </div>
            </div>
        </div>
    )
}
