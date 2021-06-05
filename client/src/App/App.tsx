import React, { useEffect } from 'react'
import isEmpty from 'is-empty-typed'

import { TokenPreview } from '../components/tokenPreview/TokenPreview'
import styles from './App.scss'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchGeneralInfoAsync, selectTokenIds } from './AppSlice'

function App() {
    const dispatch = useAppDispatch()
    const tokenIds = useAppSelector(selectTokenIds)

    useEffect(() => {
        dispatch(fetchGeneralInfoAsync())
    }, [])

    return (
        <div className={styles.app}>
            {!isEmpty(tokenIds) && tokenIds.map((tokenId) => <TokenPreview key={tokenId} tokenId={tokenId} />)}
        </div>
    )
}

export default App
