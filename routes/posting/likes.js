module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
      
        const posting = this.mongo.db.collection('posting')
        const userslike = await posting.
        return result;
        //jwt 토큰
    })
}