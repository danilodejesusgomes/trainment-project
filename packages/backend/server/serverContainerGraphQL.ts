import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import { startStandaloneServer } from '@apollo/server/standalone';
import { authMiddleware, handleLogin } from './authentication';
import { readFile } from 'fs/promises';
import { resolvers } from './layers/graphQL/resolvers';
import typeDefs from './layers/graphQL/schema.graphql';
import cors from 'cors';
import express from 'express';

const PORT = 4000;
const app = express();
app.use(cors(), express.json(), authMiddleware);
app.post('/login', handleLogin);

app.listen({ port: PORT }, async () => {

    //const typeDefs = await readFile('./layers/graphQL/schema.graphql', 'utf8')

    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();

    app.use('/graphql', apolloMiddleware(apolloServer));

    console.log(`🚀 Server ready on port ${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
