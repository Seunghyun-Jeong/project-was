module.exports = async function (fastify, opts) {
    fastify.post('/:id', async function (request, reply) {
      const token = request.headers.authorization.split(" ")[1]
        
        console.log(token);
        request.body.userid = token
        request.body.postid = request.params.id

        const check = await this.mongo.db.collection('likes').findOne({ userid: token, postid: request.body.postid})
        console.log('###',check)
        //check === null : 찾은 결과가 없어서 좋아요를 할수있다. else로 넣고싶음
     
        if (check) { //좋아요가 있을 때 if문 안으로 들어가게 하고싶음 = check 값의 결과가 있을 때 
          reply
          .code(400)
          .header("content-type","application/json")
          .send({"success" : "좋아요가 이미 있습니다."})
        } else {
          const like = this.mongo.db.collection('likes')


        await like.insertOne(request.body)


        //const result = await like.findOne(request.params.id)

        reply
        .code(200)
        .header("content-type","application/json")
        .send({"sucess":"좋아요를 눌렀습니다."})
  }
        }
    )
      }
    