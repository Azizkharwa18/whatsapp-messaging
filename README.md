# Murtaza Nu Kaam Che aa (WhatsApp Messaging API)

A Node.js Express application designed to interact with the WhatsApp Business Cloud API for sending messages and managing media.

## Features

- **Express Server**: Lightweight REST API server.
- **WhatsApp Integration**: Controller logic for sending template messages (e.g., `cloud_receipt`).
- **Media Handling**: Utility for uploading media to WhatsApp.
- **CORS Support**: Cross-Origin Resource Sharing enabled.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Azizkharwa18/whatsapp-messaging.git
    cd whatsapp-messaging
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root directory to configure your environment variables.
Example:

```env
PORT=3000
# Add your WhatsApp API credentials here (e.g., ACCESS_TOKEN, PHONE_NUMBER_ID)
```

## Usage

Start the development server:

```bash
npm start
```

The server will typically run on `http://localhost:3000`.

## API Endpoints

-   `GET /`: Health check endpoint. Returns "Our API".

*Note: Additional routes for WhatsApp messaging are currently under development in the `controller/` directory.*

## Project Structure

-   `server.js`: Application entry point.
-   `controller/`: Contains logic for handling API requests (e.g., `whatsapp.js`).
-   `route/`: API route definitions.
-   `utils/`: Helper functions (e.g., `uploadMedia.js`).

## License

ISC
