# Stage 1: Build the app
FROM node:18 AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install apexcharts --legacy-peer-deps && npm install --legacy-peer-deps

# Copy the rest of the project and build it
COPY . .
RUN npm run build

# Stage 2: Serve the build output
FROM node:18
WORKDIR /app

# Install serve globally to serve the static files
RUN npm install -g serve

# Copy built files from previous stage
COPY --from=builder /app/dist ./dist

# Expose the desired port
EXPOSE 3000

# Command to serve the app
CMD ["serve", "-s", "dist", "-l", "3000"]
