import React, { useEffect } from 'react'

import { TokenPreviews } from '../components/tokenPreviews/TokenPreviews'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Header } from '../components/header/Header'

import { fetchGeneralInfoAsync, selectTokenIds } from './AppSlice'
import styles from './App.scss'

export function App() {
    const dispatch = useAppDispatch()
    const tokenIds = useAppSelector(selectTokenIds)

    useEffect(() => {
        dispatch(fetchGeneralInfoAsync())
    }, [])

    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <Header />

                <TokenPreviews title="for sale" tokenIds={tokenIds} />
            </div>
        </div>
    )
}
