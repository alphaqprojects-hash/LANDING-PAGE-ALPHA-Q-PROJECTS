
  # AlphaQ Projects - Landing Page

This is a code bundle for AlphaQ Projects, a Melbourne-based home renovation specialist.

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation
1. Install dependencies
   ```bash
   npm install
   ```

2. Configure environment variables
   - Make sure your `api/.env` file is properly configured with your email credentials
   - For Gmail, you need to use an App Password if 2FA is enabled

### Running the Application

#### Development Mode (Full Stack)
To run both frontend and backend simultaneously:
```bash
npm run dev
```
This will start:
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:3001](http://localhost:3001)

#### Frontend Only
```bash
npm run dev:frontend
```

#### Backend Only
```bash
npm run dev:backend
```

### Building for Production
```bash
npm run build
```
This will create a `build` directory with the optimized production build.

## Contact Form
The application includes a contact form that sends emails using Nodemailer.
  