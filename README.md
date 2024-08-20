# Google Search Clone

![image](https://github.com/user-attachments/assets/61f403be-04cb-4fc9-9e8c-275aef3ef515)


This project is a Google Search clone built using React and Tailwind CSS. The main objective of this project is to gain a clear understanding of React hooks and Context API by implementing a simplified version of a search engine interface.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Concepts Learned](#concepts-learned)
- [License](#license)

## Features

- Search functionality with dynamic results
- Dark and light theme toggle
- Responsive design using Tailwind CSS
- Use of React hooks for state management
- Context API for managing global state

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/theprince29/Search-engine.git
   cd Search-engine
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the App

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:5173/
   ```

## Project Structure

```
.
├── public
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Results.js
│   │   ├── Search.js
│   ├── contexts
│   │   └── ResultContext.js
│   ├── App.js
│   ├── index.js
│   └── ...
└── README.md
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Tailwind CSS**: A utility-first CSS framework for styling
- **React Router**: For handling routing in the application
- **Context API**: For managing global state across components
- **React Hooks**: For managing state and side effects in functional components

## Concepts Learned

- **React Hooks**: Learned how to use `useState`, `useEffect`, and `useContext` to manage component state and side effects.
- **Context API**: Implemented global state management using Context API, allowing data to be shared across multiple components.
- **Routing**: Used `react-router-dom` to implement client-side routing for a single-page application (SPA).
- **Responsive Design**: Applied Tailwind CSS to create a responsive and modern UI.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

