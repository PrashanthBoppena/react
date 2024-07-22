# Use the official Node.js image as the base image
FROM node:18-alpine
 
# Set the working directory
WORKDIR /amdocApp
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install -g npm@10.8.1
 
# Copy the rest of the application code
COPY . .
 
# Build the React application
RUN npm run build
 
# Install express globally to ensure it's available
RUN npm install -g express
 
# Expose the port the app runs on
EXPOSE 4000
 
# Start the Node.js server
CMD ["npm", "start"]