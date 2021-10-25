const express = require('express')
const mongoose = require('mongoose')
const post = require('../mongoose/models/posts')

const router = express.Router();

router.get('/', async(req, res) =>{
  const posts = await post.find()

  try {
    res.send(posts);
  } catch (error) {
    res.send(error);
  }
})

router.get('/:postId', async(req, res) => {
 
  try{
    const singlePost = await post.findById(req.params.postId)
    res.send(singlePost)
  }
  catch(error){
    res.send(error)
  }
})

router.post('/', async(req, res) => {
  const Post = new post({
    title: req.body.title,
    desc: req.body.desc
  })
  try{
    const newPost = await Post.save();
    res.send(newPost);
  }catch(err){
    res.send({message: 'there is an error somewhere'})
  }
 
})

router.delete('/:postId', async(req, res) => {
 
  try{
    const delPost = await post.remove({_id: req.params.postId})
    res.send(delPost)
  }
  catch(error){
    res.send(error)
  }
})

router.patch('/:postId', async(req, res) => {
 
  try{
    const updatePost = await post.updateOne(
      {_id: req.params.postId}, 
      {$set: {title : req.body.title, desc: req.body.desc}})
    res.send(updatePost)
  }
  catch(error){
    res.send(error)
  }
})

module.exports = router;