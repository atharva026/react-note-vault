# [Note Vault](https://note-vault-react.vercel.app/)

Note Vault is a web-based note-taking application that allows users to create, edit, and delete notes. It provides a clean and responsive UI using React, a backend API for CRUD operations using Express, and a MongoDB database for storage.

## Features

- Create, read, update, and delete (CRUD) notes.
- Responsive design for optimal viewing on various devices.
- SweetAlert notifications to show when a note is successfully added.
- Auto-dismiss feature for SweetAlert notifications after a set timer.
- Data stored securely using MongoDB.
- Real-time updates to the note list after each operation.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS, CSS
- **Alerts**: SweetAlert
- **Hosting**: Render, Vercel

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- npm or yarn

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/atharva026/note-vault.git
   cd note-vault
```   
2. Install dependencies
- For the backend:

 ```bash
    cd backend
    npm install
```
- For the frontend:
```bashh
    cd Note-Vault
    npm install
```
3. Set up MongoDB
- Create a MongoDB database named notevault.
- Create a .env file in the server folder with your MongoDB connection string:
```env
    MONGO_URl=mongodb://localhost:27017/notevault
```

4. Set up env variables 
- For the backend: Create a .env file in the backend folder
```env
JWT_SECRET=yoursercetkey
DB_URL=.mongodb://localhost:27017/yourdbname
PORT=3000
```

- For the backend: Create a .env file in the Note-Vault folder
```env
VITE_BACKEND_HOST_URL=http://localhost:3000 / If hosted then url
```

5. Run the application
To start both the frontend and backend:

- For the backend:
```bash
    cd backend
    npm start
```
- For the frontend:
```bash
    cd Note-Vault
    npm start
```
- The backend app will be running at http://localhost:3000.
- The frontend app will be running at http://localhost:5173.

### Usage
- Add notes through the form input.
- Edit or delete notes using the available actions.
- SweetAlert shows a success message when a note is added, with an auto-dismiss - feature.
- The app supports real-time updates for the note list.


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Feel free to open issues or submit pull requests if you want to improve the project.

## Acknowledgments
- [React](https://react.dev/) for the frontend framework.
- [Tailwind CSS](https://tailwindcss.com/) CSS for styling.
- [SweetAlert](https://sweetalert2.github.io/) for the alert system.