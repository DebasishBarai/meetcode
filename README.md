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
   git clone https://github.com/DebasishBarai/meetcode.git
   ```

2. Navigate to the project directory:

   ```bash
   cd meetcode
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Environment Variables

   To run this project, you will need to create .env file in your root dirctory

   Duplicate `.env.example` to `.env`

   Use `openssl rand -base64 32` to generate a key and add it under `NEXTAUTH_SECRET` which is a string in the `.env` file

   `NEXTAUTH_URL` which is the base url of your project. In development, it is to be kept as [http://localhost:3000](http://localhost:3000)

   `DATABASE_URL` which is the postgresql database url

5. Set up the database connection from scratch:

   - Delete the `prisma` folder in the `root` directory and also delete the `prisma.ts` file in the `lib` folder. You are going to set up prisma yourself.

   - Create a PostgreSQL database. Recommended to use a dockerize postgress image for creating database.

   - Run

     ```bash
     docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres
     ```

     to set up the initial postgres database server

   - Initialize prisma with command

      ```bash
      npx prisma init
      ```

   - Now, you may notice that a prisma schema file `schema.prisma` is created in the prisma folder. `Copy` and `paste` the `schema.prisma` file data from the github repo.

   - Modify the `.env` file with `DATABASE_URL="postgresql://postgres@localhost:5432/postgres?schema=public"`

   - Run prisma database migrations

     ```bash
     npx prisma migrate dev --name init
     ```

   - Create the seed file `seed.ts` in the `prisma` folder. `Copy` and `paste` the `seed.ts` file data from the github repo.

   - Make sure you have the `prisma seed` script in the `package.json` file.

     ```bash
     "prisma": {
       "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
      },
     ```

   - Make sure you have the `ts-node` installed in the `devDependencies` section in `package.json` file.

   - Run the command to seed the database

     ```bash
     npx prisma db seed
     ```

   - Now, you create a new file `prisma.ts` in the `lib` folder. `Copy` and `paste` the `prisma.ts` file data from the github repo.
   
6. Start the development server:

   ```bash
   npm run dev
   ```

8. Access MeetCode by visiting [http://localhost:3000](http://localhost:3000) in your browser.

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