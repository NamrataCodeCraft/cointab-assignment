const dataModel = require('../models/datasModel')


const createData = async (req, res) => {
    // try {

    const { data } = req.body

    if (!data) return res.status(400).send({ msg: 'send data' })

    for (let i = 0; i < data.length; i++) {
        let obj = {

            gender: data[i].gender,
            title: data[i].name.title,
            name: data[i].name.first + ' ' + data[i].name.last,
            email: data[i].email,
            username: data[i].login.username,
            password: data[i].login.password,
            location: data[i].location.street.number + " , " + data[i].location.street.name,
            city: data[i].location.city,
            state: data[i].location.state,
            country: data[i].location.country,
            longitude: data[i].location.coordinates.longitude,
            latitude: data[i].location.coordinates.latitude,
            postcode: data[i].location.postcode,
            picture: data[i].picture.large,
            age: data[i].dob.age,
            phone: data[i].phone,
            cell: data[i].cell,
            offset: data[i].location.timezone.offset,
            description: data[i].location.timezone.description,
            uuid: data[i].login.uuid,
            salt: data[i].login.salt,
            md5: data[i].login.md5,
            sha1: data[i].login.sha1,
            sha256: data[i].login.sha256

        }
        // obj = {}
        await dataModel.create(obj)
    }


    // await dataModel.bulkWrite(data)

    res.status(201).send({ msg: 'add' })

    // } catch (error) {
    //     return res.status(500).send({ msg: erro r })
    // }
}

const getData = async (req, res) => {
    try {

        const data = await dataModel.find();

        if (data.length == 0) return res.status(404).send({ msg: 'no any data' })

        return res.status(200).send({ msg: 'all done', data })

    } catch (error) {
        return res.status(500).send({ msg: error })
    }
}

module.exports = { createData, getData }