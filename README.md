# Portfolio Lab Website Generator

This is a responsive and customizable portfolio website built using ReactJS, CSS, and TailwindCSS. The application allows users to enter their details on a data entry page, which then generates a portfolio. The project implements several core features such as a responsive navbar, a hero section, an about me section, draggable project cards, and a contact form.

## Features

### 1. Data Entry Page
- Users can input all necessary data, including:
  - Student's name, bio, and introductory details.
  - About Me information (profile picture, skills, interests, and detailed description).
  - Project details (title, description, image, GitHub link).
  - Social media links (Name and URL).
- "Add Social Media" button to dynamically add multiple entries.
- "Submit/Generate" button to create the portfolio using the input data.

### 2. Navigation Bar (Navbar Component)
- Responsive design with links to Home, About, Projects, and Contact sections.
- Hamburger menu for mobile views using `useState`.

### 3. Hero Section
- Displays the user's name, a short bio, and a call-to-action button.
- Data is passed via props for dynamic rendering.

### 4. About Me Section
- Displays personal information, profile picture, list of skills, and a short biography.
- Content is customizable using props.

### 5. Projects Section
- Displays a minimum of 3 projects using a reusable `ProjectCard` component.
- Project cards are draggable using `react-beautiful-dnd`, allowing users to rearrange them.

### 6. Contact Section
- Contact form with input fields for name, email, and message.
- Form data managed using `useState`.
- Displays a success message upon submission using `useEffect`.

### 7. Footer

### 8. Extra Features
- **Dark Mode Toggle**: Implements a button using `useState` to toggle between light and dark themes.
- 
## Installation and Setup

1. Clone the repository:
    ```bash
    git clone [REPO_URL]
    ```
2. Navigate to the project directory:
    ```bash
    cd portfolio-project
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and visit `http://localhost:3000`.

## Usage
- Fill in your details on the Data Entry Page.
- Click on **Submit** to preview the portfolio.
- Navigate through sections using the responsive navbar.
- Test dark mode using the toggle button.
- Rearrange project cards using drag-and-drop.
- Submit a message using the contact form.

## Technologies Used
- ReactJS
- TailwindCSS
- Dnd Kit
