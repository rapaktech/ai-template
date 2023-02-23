# GPT-3 Template

This project is a fun experiment that uses OpenAI's language model to generate jokes. The project is built using Node.js and can be run on your local machine with the `yarn dev` command.

## Installation

1. Clone the repository to your local machine.
2. Install the required dependencies by running `yarn install`.

## Configuration

To use the OpenAI language model, you will need to set your OpenAI API key as an environment variable named `OPENAI_API_KEY`.

You can obtain your API key from the [OpenAI website](https://beta.openai.com/docs/api-reference/authentication).

To set the environment variable, you can create a `.env` file in the root directory of the project with the following content:

```
OPENAI_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.

You can change the content of the application in the `content.ts` file.

## Usage

Once you have set your API key as an environment variable, you can run the project using the following command:

```
yarn dev
```

## Contributing

If you want to contribute to this project, please fork the repository and create a new branch for your changes. Once you have made your changes, submit a pull request and I will review your code as soon as possible.
