[A].  3 Project features

    1. Course Management
    2. Fixed Credit Hours
    3.Enroll and Payment

[B].  Discuss how you managed the state in your assignment project.

Managing state is a crucial aspect of any web application, including a course registration project. Proper state management ensures that the application accurately reflects the
current data and user interactions. In a course registration project, i can manage state using a combination of client-side and server-side techniques. Here's how i might
manage state in such a project:

Server-Side State Management:
Database: The core of your application's state management lies in the database. Store information about courses, enrollments, and other relevant data in a relational or NoSQL database. When users
interact with the website, the server queries the database to retrieve or update this information.
Session Management: If you're using server-based authentication (e.g., session cookies), the server keeps track of the user's session state, including their login status and authorization levels.
Caching: Implement caching mechanisms to reduce the load on your database and improve response times for frequently accessed data. Popular caching solutions include Redis or Memcached.
State Management Libraries:

If you're building a single-page application (SPA), consider using state management libraries like Redux (for React) or Vuex (for Vue.js) to manage client-side application state. These libraries
offer a centralized store for managing data that can be accessed and modified from different parts of the application.

Enforce data validation rules and constraints at both the client and server sides to maintain data consistency and integrity. For example, ensure that course enrollments do not exceed the maximum capacity.
Implement database transactions and constraints to handle concurrent updates and prevent data inconsistencies.