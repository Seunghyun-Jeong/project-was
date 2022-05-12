const { ReadConcernLevel } = require("mongodb")

module.exports = async function (fastify, opts) {
    fastify.put('/:id', async function (request, reply) {
      
        const posting = this.mongo.db.collection('posting')
        id = this.mongo.ObjectId(request.params.id)
        //const created = await posting.updateOne(this.mongo, id, request.body)
        //const result = await posting.findOneAndUpdate(this.mongo, request.params.id, request.body)
        //const result = await updateOne(this.mongo, request.params.id, request.body)
        reply
        .code(200)
        .header("content-type", "application/json")
        .send({readresult})
  })
}
