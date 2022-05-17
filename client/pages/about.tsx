import type { NextPage } from "next"
import { gql, useQuery } from "@apollo/client"
import client from "../apollo-client"
import Head from "next/head"
import Image from "next/image"

const About: NextPage = (props) => {
    console.log(props)

    // const { data } = useQuery(gql`
    //     query Hello {
    //         hello
    //     }
    // `)

    return <div>About Page</div>
}

export default About

About.getInitialProps = async () => {
    const { data } = await client.query({
        query: gql`
            query Hello {
                hello
            }
        `,
    })

    return { hello: data.hello }
}
