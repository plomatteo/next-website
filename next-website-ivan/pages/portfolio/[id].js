import {useRouter} from 'next/router'
import Header from '../../components/header';
import { client } from '../../lib/apollo'
import { gql } from '@apollo/client'



export default function PortfolioProjectPage ({project}) {

    const router = useRouter();
    const projectId = router.query.id;
console.log(project)
    return <>
    <main>
        <div>
            <h1>The project page: {projectId}</h1>
        </div>
        <div dangerouslySetInnerHTML={{__html: project.content}}></div>
    </main>
    </>
    
}


export async function getStaticProps({params}) {

    const GET_PROJECT_BY_ID = gql`
    query GetProjectById($id: ID!, $idType: PostIdType = SLUG) {
        post(id: $id, idType: $idType) {
          content
          title
          date
          uri
          categories {
            nodes {
              categoryId
            }
          }
        }
      }
    `
    
  const response = await client.query({
    query: GET_PROJECT_BY_ID,
    variables: {
        id: params.id
    }
  })
  
    const project = response?.data?.post;

    console.log(project)
  
    return {
      props: {
        project
      }
    }
  }

export async function getStaticPaths() {
    const paths = []
    return {
        paths,
        fallback: 'blocking'
    }
}