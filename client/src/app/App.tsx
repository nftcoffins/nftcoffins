import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useAppDispatch } from '../shared/hooks'
import { Header } from '../components/header/Header'

import { Home } from '../pages/home/Home'
import { Token } from '../pages/token/Token'

import { fetchGeneralInfoAsync } from './AppSlice'
import styles from './App.scss'
import { Footer } from '../components/footer/Footer'

export function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchGeneralInfoAsync())
    }, [])

    return (
        <Router>
            <div className={styles.app}>
                <div className={styles.content}>
                    <Header className={styles.header} />

                    <Switch>
                        <Route path="/token/:id">
                            <Token />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
                <Footer className={styles.footer} />
            </div>
        </Router>
    )
}
