FROM node:6.10.2

# Copy applicaiton files
COPY ./ /usr/src/app
WORKDIR /usr/src/app

# Install Node.js dependencies
RUN npm install --production --silent

CMD [ "npm", "run", "dev" ]
