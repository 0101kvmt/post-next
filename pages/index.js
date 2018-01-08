import Link from 'next/link'

import Header from '../components/Header.js'
import Layout from '../components/Layout.js'
import PostLink from '../components/PostLink.js'

const Index = () => (
  <div>

    <Layout>
      <p> Next.JS </p>
      <ul>
        <PostLink title='Title number 1' />
        <PostLink title='Title number 3' />
        <PostLink title='Title number 9' />
      </ul>
    </Layout>

  </div>
)

export default Index
