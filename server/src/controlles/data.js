const dataModel = require('../models/datasModel')


const createData = async (req, res) => {
    try {

        const { data } = req.body

        if (!data) return res.status(400).send({ msg: 'send data' })

        await dataModel.create(data)

        res.status(201).send({ msg: 'add'})

    } catch (error) {
        return res.status(500).send({ msg: error })
    }
}

const getData = async (req,res) =>{
    try {

       const data = await dataModel.find();

       if(data.length == 0) return res.status(404).send({ msg: 'no any data' })

       return res.status(200).send({ msg: 'all done', data})

    } catch (error) {
        return res.status(500).send({ msg: error })
    }
}

module.exports = { createData , getData}