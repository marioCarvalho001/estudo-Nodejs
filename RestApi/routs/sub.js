const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subs')

router.get('/', async (req, res) => {
  try{
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

router.get('/:id',getSubs, (req, res) => {
  res.json(res.subsCri)
})

router.post('/', async (req, res) => {
  const subscribe = new Subscriber({
    userName: req.body.userName,
    userChannel: req.body.userChannel
  })

  try{
    const newSub = await subscribe.save()
    res.status(201).json(newSub)
  } catch (error){
    res.status(400).json({message: error.message})
  }

})

router.patch('/:id', getSubs, async (req, res) => {
  if(req.body.userName != null){
    res.subsCri.userName = req.body.userName
  }
  if(req.body.userChannel != null){
    res.subsCri.userChannel = req.body.userChannel
  }
  try{
    const updateSubs = await res.subsCri.save()
    res.json(updateSubs)
  } catch(error){
    res.status(500).json({message: error.message})
  }
})

router.delete('/:id', getSubs, async (req, res) => {
  try{
    await res.subsCri.remove()
    res.json({message: 'User deletado'})
  } catch (error){
    res.status(500).json({message: error.message})
  }
})

async function getSubs(req, res, next){
  try{
    subsId = await Subscriber.findById(req.params.id)
    if(subsId == null ){
      return res.status(404).json({message: 'id não encontrado '})
    }
  } catch(error){
    return res.status(500).json({message: error,message})
  }
  res.subsCri = subsId
  next()
}

module.exports = router