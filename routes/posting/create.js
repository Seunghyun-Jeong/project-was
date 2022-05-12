module.exports = async function (fastify, opts) {
    fastify.post('/', async function (request, reply) {
      
        const posting = this.mongo.db.collection('posting')
        const created = await posting.insertOne(request.body)
        const result = await posting.findOne({_id:created.insertedId})
        // const id = created.value.insertedid
        // console.log(id) 
        //return result
        reply
        .code(200)
        .header("content-type", "application/json")
        .send({result})
    })
}