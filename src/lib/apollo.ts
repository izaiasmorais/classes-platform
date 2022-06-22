import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o6sswo0wld01xm3bn816fy/master",
  cache: new InMemoryCache(),
});
