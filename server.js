// Express.js palvelin-tiedosto//
const express = require('express')
const path = require('path')
const fs = require('fs').promises
const app = express()


// GET ALL etsitään kaikki nimet jsonista

app.get('/api/henkilokunta', async (req, res) => {
    try {
        //Luetaan json-tiedoston sisältö
    const henkiloKunta = await fs.readFile('./henkilokunta.json', 'utf-8')
    const data = JSON.parse(henkiloKunta)
    res.json(data)

    //lähetetään tiedoston sisältö vastauksena
    // res.send(henkiloKunta)
    } catch (error) {
        console.error('Error reading file:', error)
        res.status(500).send('Internal Server Error')
    }
})

// Tehdään polkumääritys public kansioon (staattiset tiedostot)
const polku = path.join(__dirname, './public')  //(ensimmäinen parametri viittaa mihin liitetään ja toinen mitä liitetään)

// Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http request
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on post 3000.')
})