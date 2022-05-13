module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
      
        const posting = this.mongo.db.collection('posting')
        const result = await posting.find({}).toArray()
        return result;
    })

    fastify.get('/:id', async function (request, reply) {
      
        const posting = this.mongo.db.collection('posting')
        const id = this.mongo.ObjectId(request.params.id)
        const result = await posting.find({_id:id} ).toArray()
        return result;
    })
}
