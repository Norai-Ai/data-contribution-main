# NORAI  Backend

This backend fetches and processes data from NORAI's data platform  

## Features

- Fetch raw data from the NORAI API.
- Process data (e.g., summarize, filter).
- Serve data through API endpoints.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Norai-Ai/data-contribution-main.git
   cd NORAI-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following content:
   ```plaintext
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### GET `/api/data`
Fetch raw data from NORAI.

### GET `/api/data/processed`
Fetch and return processed data.

## License

Licensed under the MIT License.