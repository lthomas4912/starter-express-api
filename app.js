const express = require('express');
const app = express();
const fs = require('fs');
const axios = require('axios');
const baseURL = 'https://officeapi.dev/api/';
const resources = ['quotes', 'characters', 'episodes', 'crew'];


// Collecting data from the API and placing in folder

resources.forEach(resource => {
    console.log(resource)
    let dataSaved = (err) => err ? console.log(err) : console.log(`${resource}Data.json Saved!`)
    axios.get(baseURL + resource)
        .then(res => {
            let { data } = res.data;
            let jsonData = JSON.stringify(data);
            let fileName = `${resource}Data.json`;
            let path = `./data/${fileName}`;
            fs.writeFile(path, jsonData, dataSaved);
        })
        .catch(err => console.log(err));
});

//Aggreating the data into folders and in JSON format.

axios.get(baseURL)
    // .then(res => res.json())
    .then( res => {
        console.log(res.data.data);
        let { data } = res.data;
        let dataSaved = (err) => err ? console.log(err) : console.log(`data.json Saved!`);
        let jsonData = JSON.stringify(data)
        fs.writeFile('./data.json', jsonData, dataSaved);
    })
    .catch(err => console.log(err))