import * as React from "react"
import Layout from '../components/Layout';
import '../styles/global.css'

const NotFound = () => {
  return (
    <Layout>
      <div>
        <h1>404: Not Found</h1>
        <br />
        <br />
        <p>Sorry, that page doesn't exist yet!</p>
        <br>
        </br>
    </div>
    </Layout>
  );
}

export default NotFound