import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout'
import Paragraph from '../../components/Paragraph'
import Row from '../../components/Row'
import Col from '../../components/Col'

import Image from 'next/image'
import Link from 'next/link'

import { getProjects } from '../../lib/api';

export async function getStaticProps() {
    const projects = await getProjects();

    return{
        props : {
            projects
        }
    }
}

const ProjectsPage = ({ projects }) => {

    return <Layout>
        <Container>
            <Heading level="1">Projects</Heading>
                <Row>
                    {projects.map((project, index) => {
                        const { title, slug, image } = project;

                        return <Col 
                            key={index}
                            xs="6"
                            sm="4"
                            md="3"
                        >
                        {/*featuredImage && 
                            <Image 
                            src={featuredImage.node.sourceUrl}
                            alt={featuredImage.altText}
                            width={featuredImage.node.mediaDetails.width}
                            height={featuredImage.node.mediaDetails.height}
                            />
                        */}
                        {image &&
                            <Image 
                                src={`/images/${image}`}
                                alt={title}
                                width={1500}
                                height={1000}
                                layout="responsive"
                            />
                        }
                            <Heading level="3">
                                {title}
                            </Heading>
                            <Paragraph>
                                <Link href={`/projects/${slug}`}>
                                    <a>
                                        View project
                                    </a>
                                </Link>
                            </Paragraph>
                        </Col>
                    })}
                </Row>
        </Container>
    </Layout>
}
export default ProjectsPage;