FROM node:lts-jessie

# Set the work directory
RUN mkdir -p /var/www/app
WORKDIR /var/www/app

# Add our package.json and install *before* adding our application files
ADD app/package.json ./
RUN npm i --production

# Install pm2 *globally* so we can run our application
RUN npm i -g pm2

# Add application files
ADD app /var/www/app

EXPOSE 4000

CMD ["pm2", "start", "process.json", "--no-daemon"]