// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answer) { 
  const licenseInput = answer.license
 // if string = MIT License then add MIT badge
    if (licenseInput === 'MIT License') {
      let badgeLink = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
      return badgeLink
    }
    // if string = Apache License 2.0 then add Apache License 2.0 badge
    else if (licenseInput === 'Apache License 2.0') {
      let badgeLink = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
      return badgeLink
    }
    // if string = GNU General Public License (GPL) v3 then add GNU General Public License (GPL) v3 badge
    else if (licenseInput === 'GNU General Public License (GPL) v3') {
      let badgeLink = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
      return badgeLink
    }
    // if string = Mozilla Public License 2.0 then add Mozilla Public License 2.0 badge
    else if (licenseInput === 'Mozilla Public License 2.0') {
      let badgeLink = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
      return badgeLink
    }
    // if string = BSD 3-Clause License then add BSD 3-Clause License badge
    else if (licenseInput === 'BSD 3-Clause License') {
      let badgeLink = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
      return badgeLink
    }
    else if (licenseInput = '') {
      let badgeLink = ''
      return badgeLink
    }
  } 
 
 
 
 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  let badgeLink = renderLicenseBadge(answer)
  const readMe = `
  # ${answer.title}
  ## Description
  ${badgeLink} <br />

  ${answer.description}
  ## Table Of Content
  *[Title](#title)

  *[Description](#description)

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contributors](#contributor)

  *[Tests](#test)

  *[Questions](#questions)

  ## Installation
  ${answer.installInstructions}
  ## Usage
  ${answer.usage}
  ## License
  This is covered under the ${answer.license} license.
  ## Contributors
  ${answer.contribution}
  ## Tests
  ${answer.test}
  ## Questions
  Any questions about this project please send me a message on https://github.com/${answer.githubUser} or email me at [${answer.email}](mailto:${answer.email})  }
      `;
  return readMe;
}

module.exports = generateMarkdown;

