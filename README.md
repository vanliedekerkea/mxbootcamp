# Mx bootcamp

This is a simple Angular Application for the Mendix bootcamp.

Please be sure the latest version of NodeJs is installed.
Please be sure the angular CLI is installed globally: npm install -g @angular/cli

## Endpoint

The implemented endpoint is: {BASE_URL}/application

The returned JSON is 
{
  "number1": 123,
  "number2": 456
}

The BASE_URL can be:

1. A mock server : 
  Please run in the mx-bootcamp project directory: node ./server/index.js
  Configure in the environment.ts the BASE_URL as http://localhost:3000/api

2. Any other URL :
  Please update the value of BASE_URL in the environment.ts
