const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Determine if we're in production or development
const isProduction = process.env.NODE_ENV === 'production';

console.log(`Starting application in ${isProduction ? 'production' : 'development'} mode...`);

// Start frontend
const frontendCommand = isProduction 
  ? 'npm run build && npm run preview'
  : 'npm run dev:frontend';

// Start backend
const backendCommand = 'npm run dev:backend';

// Execute frontend
const frontendProcess = exec(frontendCommand, { cwd: path.resolve(__dirname) });

frontendProcess.stdout.on('data', (data) => {
  console.log(`Frontend: ${data}`);
});

frontendProcess.stderr.on('data', (data) => {
  console.error(`Frontend Error: ${data}`);
});

// Execute backend
const backendProcess = exec(backendCommand, { cwd: path.resolve(__dirname) });

backendProcess.stdout.on('data', (data) => {
  console.log(`Backend: ${data}`);
});

backendProcess.stderr.on('data', (data) => {
  console.error(`Backend Error: ${data}`);
});

console.log('Both frontend and backend servers are starting...');
console.log('Press Ctrl+C to stop all servers.');

// Handle process termination
process.on('SIGINT', () => {
  console.log('Shutting down servers...');
  frontendProcess.kill();
  backendProcess.kill();
  process.exit(0);
});