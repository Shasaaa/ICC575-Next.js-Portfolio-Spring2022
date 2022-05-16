import styles from './footer.module.scss'

import Container from './Container'
import Row from './Row'
import Col from './Col'
import Logo from './Logo'
import Nav from './Nav'


export default function Footer() {
    return <footer className={styles.footer}>
        <Container>
            <Row alignItems="center">
                <Col xs="6" sm="3">
                    <Logo />
                </Col>
                <Col xs="6" sm="9">
                    <Nav />
                </Col>
            </Row>
        </Container>
    </footer>
}