import React, { useEffect } from 'react'

import { TokenPreviews } from '../components/tokenPreviews/TokenPreviews'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Header } from '../components/header/Header'

import { fetchGeneralInfoAsync, selectTokenIds } from './AppSlice'
import styles from './App.scss'
import { Banner } from '../components/banner/Banner'
import { About } from '../components/about/About'
import { Rules } from '../components/rules/Rules'
import { WhatAreNftCoffins } from '../components/whatAreNftCoffins/WhatAreNftCoffins'

export function App() {
    const dispatch = useAppDispatch()
    const tokenIds = useAppSelector(selectTokenIds)

    useEffect(() => {
        dispatch(fetchGeneralInfoAsync())
    }, [])

    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <Header className={styles.header} />

                <Banner className={styles.banner} />

                <About className={styles.about} />

                <Rules className={styles.rules} />

                <WhatAreNftCoffins className={styles.whatAreNftCoffins} />

                <TokenPreviews title="for sale" tokenIds={tokenIds} />
            </div>
        </div>
    )
}
