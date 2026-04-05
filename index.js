#!/usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';

const data = {
    name: chalk.bold.magenta("                 Saransh Sethi"),
    handle: chalk.white("@Saransh2412"),
    work: chalk.white("Full-Stack Developer | AI/ML Enthusiast | Builder"),
    github: chalk.gray("https://github.com/") + chalk.green("Saransh2412"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("saransh-sethi"),
    leetcode: chalk.gray("https://leetcode.com/u/") + chalk.yellow("Saranshsethi"),
    web: chalk.cyan("https://saransh2412.github.io"),
    npx: chalk.red("npx") + " " + chalk.white("saransh2412"),
    labelWork: chalk.white.bold("       Work:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelLeetCode: chalk.white.bold("   LeetCode:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const leetcoding = `${data.labelLeetCode}  ${data.leetcode}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

const output = heading + 
               newline + newline + 
               working + newline + 
               githubing + newline + 
               linkedining + newline + 
               leetcoding + newline + 
               webing + newline + newline +
               carding;

console.log(chalk.green(boxen(output, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "magenta"
})));
