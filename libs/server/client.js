import { PrismaClient } from 'prisma/prisma-client';

const client = global.client || new PrismaClient();
if(process.env.NODE_ENV === 'deployment') global.client = client;

export default client;