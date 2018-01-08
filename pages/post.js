import Layout from '../components/Layout.js'

export default (props) => {
  return(
    <Layout>
      <h1> {props.url.query.title} </h1>
      <p> blog post content! </p>
    </Layout>
  )

}
