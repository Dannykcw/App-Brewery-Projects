/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs';

inquirer
    .prompt([
        {
            name: 'url',
            message: 'Please input a valid url: '
        }
    ])
    .then((answers) => {
        let urlStream = qr.image(answers.url)
        urlStream.pipe(fs.createWriteStream('qr-img.png'))
        fs.writeFile('url.txt', qr, (err) => {
            if (err) throw err
            console.log('The file has been saved!')
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    })