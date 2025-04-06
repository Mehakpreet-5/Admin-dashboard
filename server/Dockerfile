# Use Node.js base image
FROM node:18

# Set working directory in container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Expose the port the server runs on
EXPOSE 5000

# Command to start the server
CMD ["npm", "start"]
