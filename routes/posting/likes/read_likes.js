'use strict'

module.exports = async function (fastify, opts) {

fastify.get('/', async function (request, reply) { 
    const token = request.headers.authorization.split(" ")[1]
    const likes = this.mongo.db.collection('likes')
    // const id = this.mongo.ObjectId(request.params.id)
    const result = await likes.find({userid: token}).toArray()
    return result;
})

   
   /*const token = request.headers.authorization.split(" ")[1]

    //request.body.user_id = token
    //
    const like = this.mongo.db.collection('likes')
    const id = this.mongo.ObjectId(request.params.id)
    console.log(id)
    const result = await like.find({_id:userid}).toArray()
    return result;*/
}