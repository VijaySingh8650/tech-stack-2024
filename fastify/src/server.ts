import Fastify, { FastifyRequest, FastifyReply } from 'fastify';

const fastify = Fastify({ logger: false});



fastify.get('/', async (request:FastifyRequest, reply:FastifyReply) => {

    reply.status(200).send({message: "Hello"});

});




const start = async () => {
    try {
      await fastify.listen({ port: 7000 });
      console.log('Server listening on http://localhost:7000');
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  
  start();