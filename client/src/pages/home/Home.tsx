import React from 'react'

import { Banner } from '../../components/banner/Banner'
import { About } from '../../components/about/About'
import { Rules } from '../../components/rules/Rules'
import { WhatAreNftCoffins } from '../../components/whatAreNftCoffins/WhatAreNftCoffins'
import { FirstToken } from '../../components/firstToken/FirstToken'
import { TokenPreviews } from '../../components/tokenPreviews/TokenPreviews'
import { useAppSelector, useResetScroll } from '../../shared/hooks'
import { selectTokenIds } from '../../app/AppSlice'

import styles from './Home.scss'

export function Home() {
    useResetScroll([])

    const tokenIds = useAppSelector(selectTokenIds)
    const [firstTokenId] = tokenIds

    return (
        <div className={styles.home}>
            <Banner className={styles.banner} />

            <About className={styles.about} />

            <Rules className={styles.rules} />

            <WhatAreNftCoffins className={styles.whatAreNftCoffins} />

            {firstTokenId && <FirstToken firstTokenId={firstTokenId} className={styles.firstToken} />}

            <TokenPreviews title="for sale" tokenIds={tokenIds} />
        </div>
    )
}
