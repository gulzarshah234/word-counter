#!/usr/bin/env node
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence to count the word:"
    },
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence word count is ${words.length}`);
