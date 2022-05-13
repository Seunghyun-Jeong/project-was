module.exports = async function (fastify, opts) {
    fastify.post('/', async function (request, reply) {
        const token = request.headers.authorization.split(" ")[1]
        
        console.log(token);
        request.body.user_id = token
        const posting = this.mongo.db.collection('posting')
        const created = await posting.insertOne(request.body)
        const result = await posting.findOne({_id:created.insertedId})
        // const id = created.value.insertedid
        // console.log(id) 
        //return result
        reply
        .code(201)
        .header("content-type", "application/json")
        .send({result})
    })
}