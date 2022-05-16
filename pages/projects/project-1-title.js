import Container from "../../components/Container";
import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import Paragraph from "../../components/Paragraph";

import Image from 'next/image'

const ProjectOnePage = () => {
    return <Layout>
        <Container>
            <Image 
                src="/images/01.jpg"
                alt="Rocky coast landscape"
                width={1500}
                height={1000}
                layout="responsive"
            />
            <Heading level="1">Project 1 Titile</Heading>
            <Paragraph>This is a description about my project.</Paragraph>
        </Container>
    </Layout>
}
export default ProjectOnePage;