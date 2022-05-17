import Layout from '../components/Layout'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

import Link from 'next/link'

const ContactUS = () => {
    return <Layout>
        <Container>
            <Heading level="1">Contact us</Heading>
            <Paragraph>Contact us content goes here.</Paragraph>
            <Link href="/">
                <a>
                    Back to Homepage
                </a>
            </Link>
        </Container>
    </Layout>
}
export default ContactUS;