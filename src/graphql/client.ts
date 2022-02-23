import { GraphQLClient } from "graphql-request";

const endpoint =
  "https://api-sa-east-1.graphcms.com/v2/ckzyt7j5967lv01xn3fpx5hz6/master";

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
  },
});

export default client;
