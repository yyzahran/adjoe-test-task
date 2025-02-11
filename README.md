# adjoe-test-task

Solution for test task for adjoe's Senior QA Engineer position

<a name="readme-top"></a>

<h1 align="center">Adjoe's Test task</h1>

  <p align="center">
    My solution to solving Adjoe's test task
    <br />
    <br />
  </p>
</div>

  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#setup">Setup</a>
      <ul>
        <li><a href="#project-structure">Project Structure</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>

## About The Project

This is Node-Selenium-based project that automates test cases on a sample url given

For more about the through process of going through the project, please check <a href="ThoughtProcess.md">ThoughtProcess.md</a>.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

This section is to walk you through the setup for running the automation tests.

### Prerequisites

You'll need chrome, node 18 and JavaScript installed for this to work

### Installation

Note: You might wanna remove `/node_modules` first

1. In the root directory of the project `/adjoe-test-task`, install requirements using
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup

I used JavaScript and Selenium for this project. I chose javaScript because it is the easier to setup, and it fulfills the constraint of the languages provided. If it weren't for the time-constraint, I think I would have went with Java because out the Python, JavaScript, and Java, I've used to more with Selenium before so I am comfortable using it in this regard. However, a Java-based project can be a bit tedious to setup.

### Project Structure

The project/repo is structured as follows:
- `constants/luckyMiner.js` includes the urls of the current app under test and the previous version too
- `utils/helper.js` includes helper functions
- `tests/TestCaseOne.js` includes the automated test case as per the given instructions
- `QuestionOne.md` includes my solution for the question "Bug Identifying & Reporting"
- `QuestionThree.md` includes my solution for the question "Prioritization based on quick assumptions"

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

You can run the test case as follows

1. Run the following in the root directory
   ```sh
   npm test
   ```

## Contact

Youssef Zahran - youssefyzahran@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
