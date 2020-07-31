## Details
This is the frontend of the `Darth-VDR` project of the `AA-Dhaar` team for the [Sahamati Account Aggregator Hackathon](https://sahamati.org.in/blog/first-account-aggregator-hackathon/).

## Project Submission Details

### Project Name
Darth VDR

### Tagline
Darth VDR allows computations on private data through proprietary algorithms in isolated virtual data rooms of a regulated entity without exposing the data or the algorithms to the opposite party.

### The problem it solves

Previously, whenever two corporate entities had to discuss sensitive financial data, they would use a data room. This would involve printing a lot of documents and people going over details to prevent leakage of proprietary algorithms.

The Account Aggregator framework reduces a lot of paperwork. In the same spirit, we developed a virtual data room solution so all this hassle of poring over lengthy documents would be over without compromising privacy.

It is hard to run proprietary algorithms in a data room even if the data is digital due to security and trust issues. Plus, only a limited amount of computation can be done on small remote computers which means that the benefit of advancement in ML algorithms can't be used properly.

We tried using homomorphic encryption but it has a very limited use-case so we came up with a different solution.

Technical Details:
<!-- Describe the solution in 5-6 pts. Note: Both business and tech people will be reading it so make it easy but sufficient -->

Process:
- The FIU creates a function containing their proprietary algorithm and converts it to a zip/binary.
- The binary file is then sent to the VDR (under a regulated entity).
- The function is validated and stored in a secure data bucket.
- The VDR can only send out responses in an approved format like booleans or enums.
- No specific data about balance or history can be sent outside the VDR.
- The algorithms can operate freely to the best of their capabilities.
- Once an algorithm is saved, it can be used multiple times on different sets of data.


### Challenges we ran into
Syncing up with the schema was hard due to regular changes on both the frontend and the backend.
Hosting issues due to current unavailability of security certificates.
Confusions on the specific flow and the best method to solve the problem.

### Technologies we used
Frontend: React + TypeScript
Cloud Infrastructure: AWS Lambdas, AWS S3, AWS Fargate, AWS EC2 (Domain Filtering)
Database: PostgreSQL
Server: Java + Spring Boot
Lambdas: NodeJS, Python

### Links
All code repositories are present here: [aa-dhaar](https://github.com/aa-dhaar)

### Video Demo

### Pictures

## Getting Started

Install `yarn` from here: [Yarn Package Manager](https://yarnpkg.com/)

Navigate to the project in your terminal.
```bash
$ yarn
$ yarn start
```

To create a build
```bash
$ yarn build
```

