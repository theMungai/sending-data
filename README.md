## Project Overview

This project allows users to submit their name and email via a form on a webpage. The data is sent to a mock server using the `fetch()` API as a POST request, and the server responds with the newly created user object, including a newly assigned `id`.

The project also includes basic error handling to catch any issues during the `fetch()` request and provide feedback to the user.

## Features

- Submit user name and email via a POST request.
- Server response with the created user object including an ID.
- Display the user's ID on the page after a successful submission.
- Error handling in case of failure, providing feedback to the user.

## Technologies Used

- **HTML**: Structure and layout of the webpage.
- **CSS**: Basic styling for the page.
- **JavaScript**: Used to handle the user input and send a POST request using the `fetch()` API.
- **JSON Server**: A mock REST API server to handle POST requests and simulate real server behavior.

## How to Run the Project

### 1. Prerequisites

Before running the application, you need to have the following installed on your machine:

- **Node.js**: Required for running the server and handling requests. [Install Node.js](https://nodejs.org/).
- **npm**: Node Package Manager (usually comes with Node.js).

### 2. Running the JSON Server

To simulate a mock server that handles the POST requests, we will use JSON Server. Follow these steps to set it up:

1. **Install JSON Server globally** by running:
   ```bash
   npm install -g json-server

json-server --watch db.json --port 3000

git clone <git@github.com:theMungai/sending-data.git>


/project-root
  ├── index.html      
  ├── index.js        
  ├── styles.css       
  ├── db.json          
  └── README.md        
