import Layout from '../components/Layout.js'

const Content = (props) => {
  return (
    <div>
      <h1> {props.url.query.title} </h1>
      <p> this is the content of the page </p>
    </div>
  )
}
export default (props) => {
  return(
    <Layout>
      <Content url={props.url} />
    </Layout>
  )

}
