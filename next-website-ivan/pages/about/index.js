import '../../styles/About.module.scss'
import Header from '../../components/header';
import { client } from '../../lib/apollo'
import { gql } from '@apollo/client'

function About({aboutPageData}) {
  return <>
  <main>
    <div><h1>{aboutPageData.title}</h1></div>
  </main>
  <div dangerouslySetInnerHTML={{__html: aboutPageData.content}}></div>
  </>
}

export async function getStaticProps() {

  const GET_ABOUT_PAGE_DATA = gql`
  query aboutPageData($id: ID = "cG9zdDo3") {
    page(id: $id) {
      id
      title
      content
    }
  }
  `
const response = await client.query({
  query: GET_ABOUT_PAGE_DATA ,

})

  const aboutPageData = response?.data?.page;

  return {
    props: {
      aboutPageData
    }
  }
}

export default About;