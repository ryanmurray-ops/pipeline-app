# Use an official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Enable Corepack so pnpm can be used without installing it manually
RUN corepack enable

# Copy dependency files into the container
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install all project depencencies using pnpm
RUN pnpm install

# Copy the rest of the project files into the container (/app)
COPY . .

#Indicate that the app will run on port 3000
EXPOSE 3000

# Specify the command to start the applicaiton
CMD ["node", "index.js"]