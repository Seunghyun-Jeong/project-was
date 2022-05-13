
const { ReadConcernLevel } = require("mongodb")

module.exports = async function (fastify, opts) {
    fastify.put('/:id', async function (request, reply) {
      
        const posting = this.mongo.db.collection('posting')
        const id = this.mongo.ObjectId(request.params.id)
        await posting.findOneAndUpdate({
          _id: id
        }, {
          $set: request.body
        })
        console.log(id)

        const result = await posting.find({_id:id} ).toArray()
        //const created = await posting.updateOne(this.mongo, id, request.body)
        //const result = await posting.findOneAndUpdate(this.mongo, request.params.id, request.body)
        //const result = await updateOne(this.mongo, request.params.id, request.body)
        reply
        .code(200)
        .header("content-type", "application/json")
        .send({result})
  })
}
