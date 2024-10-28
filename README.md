# 🚀 JET-Brains Internship GitHub Discussion App

Welcome to the **JET-Brains Internship GitHub Discussion App**! This project is designed to enhance discussions on GitHub by providing a user-friendly interface for reading comments in Markdown format.

## 📦 Features

- **Animations**: I utilized the **Framer** library to add smooth animations throughout the application, enhancing the overall user experience.
- **Markdown Support**: Comments are rendered using **ReactMarkdown**, allowing users to write and view comments in Markdown format.
- **Error Management**: The application employs an **Alert** component for efficient error handling, ensuring users are informed of any issues that may arise.
  
## 🗂️ Project Structure

The application is organized into the following folders:

- **Core**: Contains application-specific components that are crucial for the core functionality.
- **UI**: Houses reusable components, promoting better code organization and reuse across the application.

## 🔌 Data Fetching

I implemented a custom hook called **useFetch**, which accepts a type argument and is optimally designed for efficient data retrieval. This hook enhances the application's performance by managing API calls effectively by using asynchronic operators like async / await and by using githubClient which i got by **axios** library request.

## 🛠️ Technologies Used

- **React**
- **Vite**
- **TypeScript**

## 📜 Markdown Formatting

Initially, I faced challenges with formatting comments in Markdown. However, by referring to the documentation of the **react-markdown** library, I was able to resolve these issues and successfully implement the required formatting.

## 🧩 Installation

To get started with the project, clone the repository and install the dependencies:

## 🚀 Run
To run application you must type `npm run dev`

```bash
git clone https://github.com/Bezik1/JET-Brains-Internship-Github-Disscussion-App.git
cd JET-Brains-Internship-Github-Disscussion-App
npm install
