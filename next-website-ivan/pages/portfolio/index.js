import Link from 'next/link'
import '../../styles/Portfolio.module.scss'
import Header from '../../components/header'
import { client } from '../../lib/apollo'
import { gql } from '@apollo/client'


function Portfolio({allProjectWorks}) {
  return <>
  debugger
  <main>
    <div><h1>The Portfolio page</h1>
    <ul>
    { allProjectWorks.map( project => <li key={project.id}><Link href={`portfolio/${project.slug}`}>{project.title}</Link></li>)
    }
    </ul>
    </div>
  </main>
</>
}

export async function getStaticProps() {

  const GET_PROJECTWORKS = gql`
  query GetAllProjectWorks ($where: RootQueryToPostConnectionWhereArgs = {categoryId: 2}) {
    posts (where: $where) {
      nodes {
        id
        slug
        title
        content
        uri
        date
      }
    }
  }
  `
const response = await client.query({
  query: GET_PROJECTWORKS
})

  const allProjectWorks = response?.data?.posts?.nodes;

  return {
    props: {
      allProjectWorks
    }
  }

}

export default Portfolio;