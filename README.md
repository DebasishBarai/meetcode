# MeetCode

## Description

MeetCode is a fun open-source project that serves as an alternative to LeetCode. It is built using Next.js with Tailwind CSS for the frontend and Prisma as the ORM (Object-Relational Mapping) tool. The project utilizes PostgreSQL as its database, which is hosted on Supabase. The application is deployed on Vercel.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run MeetCode locally on your machine, follow these steps:

1. Clone the repository:

    ```bash
    https://github.com/DebasishBarai/meetcode.git
    ```

2. Navigate to the project directory:

    ```bash
    cd meetcode
    ```
3.  Install the dependencies:

    ```bash
    npm install
    ```

4.  Set up the database connection:

    - Create a PostgreSQL database.
    - Configure the database connection in the .env file, providing the necessary credentials and connection details.

5.  Run database migrations:

    ```bash
    npx prisma migrate dev
    ```
6.  Start the development server:

    ```bash
    npm run dev
    ```

7.  Access MeetCode by visiting [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

Once you have MeetCode up and running, you can visit the website URL provided [here](https://meetcode.vercel.app/) to start using the application. It provides a LeetCode-like experience, allowing you to solve coding problems, practice algorithms, and enhance your programming skills.

## Contributing

We welcome contributions from the community to improve MeetCode. To contribute, please follow these guidelines:

1.  Fork the repository.

2.  Create a new branch for your feature or bug fix.

3.  Make your changes and commit them with descriptive messages.

4.  Push your branch to your forked repository.

5.  Submit a pull request to the main repository.

## License

MeetCode is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.