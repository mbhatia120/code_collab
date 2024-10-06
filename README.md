## Installation
2. **Install Dependencies**

    For the server:

    ```bash
    cd api
    npm install
    ```

    For the client:

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the `api` directory and add your environment variables:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the Application**

    Start the server:

    ```bash
    cd api
    npm start
    ```

    Start the client:

    ```bash
    npm run dev
    ```

    The application should now be running on `http://localhost:5173`.

## Usage

1. **Create or Join a Room**

    Users can create a new room or join an existing room by entering a room ID.

2. **Collaborate**

    Once inside the room, users can start editing the code. The changes will be synchronized in real-time across all users in the room.


## Technologies Used

- **Frontend**: React, CodeMirror
- **Backend**: Node.js, Express, MongoDB
- **Real-Time Communication**: WebSockets (Socket.io)
- **Authentication**: JWT


