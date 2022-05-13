const { ReadConcernLevel } = require("mongodb")

module.exports = async function (fastify, opts) {
    fastify.put('/:id', async function (request, reply) {
      
        const posting = this.mongo.db.collection('posting')
        const id = this.mongo.ObjectId(request.params.id)
        const downdated = await posting.findOneAndUpdate({
          _id:id
        }, {
          $set: request.body
        })
        const value = await posting.find({_id:id}).toArray()

        reply
        .code(200)
        .header("content-type", "application/json")
        .send({value})
  })
}
