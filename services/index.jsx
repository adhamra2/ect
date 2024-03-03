import request, { gql } from "graphql-request"

export const getProductsList=async()=>{
    const query=gql`
    query Products {
      products {
        createdAt
        id
        productDescription
        productName
        productPrice
        publishedAt
        updatedAt
        sale
        productImage {
          url
        }
      }
    }
    `

    const result = await request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clt8n4l4u1fdk07utec7duj0z/master', query)
    return result;
}