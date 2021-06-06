import React, { useEffect } from 'react'

import { TokenPreviews } from '../components/tokenPreviews/TokenPreviews'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Header } from '../components/header/Header'

import { fetchGeneralInfoAsync, selectTokenIds } from './AppSlice'
import styles from './App.scss'
import { Banner } from '../components/banner/banner'
import { About } from '../components/about/about'

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

                <TokenPreviews title="for sale" tokenIds={tokenIds} />
            </div>
        </div>
    )
}
