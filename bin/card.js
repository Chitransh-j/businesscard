#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Chitransh Jawere'),
  handle: chalk.cyan('@chitranshj'),
  labelWork: chalk.white.bold('      Work:'),
  work: chalk.white('Currently learning Microservices and system design.'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  twitter: chalk.cyan('https://x.com/ChitranshJawere'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.cyan('https://github.com/Chitransh-j'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/chitransh-jawere/'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.cyan('https://chitransh-portfolio-lake.vercel.app/'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline 

console.log(chalk.green(boxen(output, options)))
