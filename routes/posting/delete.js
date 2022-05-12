module.exports = async function (fastify, opts) {
   fastify.delete('/:id', async function (request, reply) {
        const posting = this.mongo.db.collection('posting')
        const id = this.mongo.ObjectId(request.params.id)
        await posting.deleteOne({_id:id})

        reply
        .code(204)
        })
}