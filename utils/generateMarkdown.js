// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  const readMe =`
  # ${answer.title}
  ## Description
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
  ## Usage?
  ${answer.usage}
  ## License
 
  ## Contributors
  ${answer.contribution}
  ## Tests
  ${answer.test}
  ## Questions
  Any questions about this project please send me a message on https://github.com/${
    answer.githubUser
  } or email me at [${answer.email}](mailto:${answer.email})
  ${
    answer.license
      ? `## License
  This project is licensed under the ${answer.license} .`
      : ""
  }
      `;
  return readMe;
}

module.exports = generateMarkdown;
