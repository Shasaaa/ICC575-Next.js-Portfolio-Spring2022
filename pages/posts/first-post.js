import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <>
        <Head>
            <title>First post | Shasaaa profile</title>
            <meta name="description"
                  content='Expert of my blog goes here.'
            />
        </Head>

        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
        </>
    )
}