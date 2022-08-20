# Social Network API with NoSQL

## Description

This application is an api that will serve a user JSON objects if queryied on the correct routes, and that allows a user to create users, thoughts(posts), and reactions to those posts. It has full CRUD functionality, although not every use case is handled. 

In this project, I wanted to expand my understanding of database technologies. I already had some experience with SQL databases, so NoSQL was a nice next step. I used MongoDB, mongoose, and Express in this project. 

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

To get started with the project, follow the following guide:

1. Install MongoDB following the instructions for your OS found here: https://www.mongodb.com/docs/manual/installation/
2. Clone or copy the repo.
3. Run npm i to get all necessary packages.
4. Run node index.js to start a server.
5. Build insomnia testing routes to test the server. 

## Usage
See this link for a video walkthrough of the API: https://drive.google.com/file/d/1atmr0oC4_Qh0-Q_H0XfvMqjl4kV7b2so/view

Below is a sample route for testing the API:
![A screenshot of the application being tested in insomnia](./assets/images/insomniatest.png)

## License
MIT License

Copyright (c) 2022 Justus Brown

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.