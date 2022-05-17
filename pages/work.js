import Layout from '../components/Layout'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

import Link from 'next/link'

const Work = () => {
    return <Layout>
        <Container>
            <Heading level="1">Work</Heading>
            <Paragraph>Work content goes here.</Paragraph>
            <Link href="/">
                <a>
                    Back to Homepage
                </a>
            </Link>
        </Container>
    </Layout>
}
export default Work;
