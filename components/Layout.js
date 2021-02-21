import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'

const Layout = ({children})=>{
    return(
        <div>
            <Meta></Meta>
            <Nav></Nav>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header></Header>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout