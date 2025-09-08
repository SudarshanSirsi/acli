# acli

> **Note:** This project is in early development. Features may be incomplete or subject to change.

A command-line interface (CLI) for interacting with Google's Gemini AI.

## Description

This tool allows you to get responses from the Gemini AI model directly in your terminal. You can ask questions, request content generation, and more. It's built with Node.js and uses React Ink for the interactive command-line interface.

## Prerequisites

- [Node.js](httpss://nodejs.org/) (v18 or higher recommended)
- An active Google AI Studio API key.

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/acli.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd acli
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

Before running the application, you need to set up your Google Gemini API key. The application loads the key from an environment variable named `GEMINI_API_KEY`.



## Usage

To run the CLI, use the following command:

```bash
npm run dev
```

This will start the application. You will be prompted to enter your query. After you submit your query by pressing `Enter`, the AI's response will be displayed below.


## Project Structure

```
.
├── ai.js           # Handles the connection and interaction with the Gemini AI API.
├── cli.js          # The transpiled output file that is executed by Node.js.
├── package.json    # Project metadata and dependencies.
├── README.md       # You are here.
└── source.js       # The main application logic written with React Ink.
```

## Dependencies

*   [@google/genai](https://www.npmjs.com/package/@google/genai): The official Google GenAI client library for Node.js.
*   [ink](https://www.npmjs.com/package/ink): A React renderer for interactive command-line apps.
*   [ink-text-input](https://www.npmjs.com/package/ink-text-input): A text input component for Ink.
*   [react](https://www.npmjs.com/package/react): A JavaScript library for building user interfaces.

## Development

This project uses Babel to transpile modern JavaScript from `source.js` into `cli.js`.

*   `npm run dev`: Transpiles the code and starts the application in development mode.
*   `npm run build`: Transpiles the source code for production.

