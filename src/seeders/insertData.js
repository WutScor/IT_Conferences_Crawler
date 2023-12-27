const csv = require('csv-parser');
const fs = require('fs');
const { Conferences } = require('../models');

const results = [];

fs.createReadStream('it_conferences.csv')
  .pipe(csv())
  .on('data', (data) => {
    // Transform the data
    const transformedData = {
      Rank: data['Rank'],
      Conference: data['Link_Img'],
      Title: data['Title'],
      Link2Conf: data['Link2Conference'],
      ImpactScore: data['Impact_Score'],
      StartDate: data['Start_Date'],
      EndDate: data['End_Date'],
      Venue: data['Venue']
    };
    results.push(transformedData);
  })
  .on('end', () => {
    // Insert the data into the database
    Conferences.bulkCreate(results, {ignoreDuplicates: true})
      .then(() => console.log('Data has been inserted'))
      .catch((error) => console.log(error));
  });