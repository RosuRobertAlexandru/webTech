const express = require('express')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('sqlite:memory')

let Ship = sequelize.define('student', {
    name : Sequelize.STRING,
    portOfSail : Sequelize.STRING,
    displacement : Sequelize.INTEGER
},{
    timestamps : false
})

const app = express()
app.use(express.json())

app.get('/create', async (req, res) => {
    try{
        await sequelize.sync({force : true})
        for (let i = 0; i < 10; i++){
            let ship = new Ship({
                name : 'name${i}',
                portOfSail : 'port ${i}',
                displacement : 3000 + 10 * i
            })
            await ship.save()
        }
        res.status(201).json({message : 'created'})
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})

app.get('/ships/:id', async (req, res) => {
    try{
        let ship = await Ship.findByPk(req.params.id)
        if (!ship){
            res.status(404).json({message : 'not found'})
        }
        else{
            res.status(200).json(ship)
        }
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})


app.put('/ships/:id', async (req, res) => {
    try {
      const ship = await Ship.findByPk(req.params.id);
  
      if (!ship) {
        res.status(404).json({ message: 'not found' });
      } else {
        // Update the ship properties
        ship.name = req.body.name;
        ship.portOfSail = req.body.portOfSail;
        ship.displacement = req.body.displacement;
  
        // Save the updated ship
        await ship.save();
  
        res.status(202).json({ message: 'accepted' });
      }
    } catch (err) {
      console.warn(err.stack);
      res.status(500).json({ message: 'server error' });
    }
  });
  
  app.delete('/ships/:id', async (req, res) => {
    try {
      const ship = await Ship.findByPk(req.params.id);
  
      if (!ship) {
        res.status(404).json({ message: 'not found' });
      } else {
        // Delete the ship
        await ship.destroy();
  
        res.status(202).json({ message: 'accepted' });
      }
    } catch (err) {
      console.warn(err.stack);
      res.status(500).json({ message: 'server error' });
    }
  });


module.exports = app