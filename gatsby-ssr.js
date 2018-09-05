/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

export const onRenderBody = () => {
  console.log('Hello from gatsby-ssr.js')
  console.log(process.env.SOME_TOKEN)
  return null
}
