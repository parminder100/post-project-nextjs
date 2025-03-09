Project Post
Overview
This project is a React application with TypeScript, tested using Jest and React Testing Library. It includes a Card component that displays a post and a "Read More" link.

Approach Taken
The project is built using React, TypeScript, and Jest for testing.
The Card component is tested to ensure:
The title and body of the post render correctly.
The "Read More" link navigates to the correct URL.
The test suite uses React Testing Library with Jest for assertions.
MemoryRouter is used in tests to simulate React Router behavior.
Assumptions Made
The project follows a component-based architecture.
The Card component receives a post prop with id, title, and body.
The "Read More" link follows the format /posts/{id}.
Jest is used as the test runner.


Installation & Setup
1. Clone the Repository
2. git clone https://github.com/your-repo-name.git
3. cd your-repo-name
4. npm install
5. npm start

Running Tests
1. Run All Tests
2. npm test

