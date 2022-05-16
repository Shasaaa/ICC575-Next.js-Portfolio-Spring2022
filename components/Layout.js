import { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

import styles from './layout.module.scss'

export default function Layout({ children }) {
    return <Fragment>
        <Header />
        <main className={styles.container}>
            {children}
        </main>
        <Footer />
    </Fragment>
}