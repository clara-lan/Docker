# basic image,pull node from alpine(official version)
FROM node:alpine

#install dependencies
# https://stackoverflow.com/questions/57534295/npm-err-tracker-idealtree-already-exists-while-creating-the-docker-image-for
WORKDIR /usr/app
# copy from current file simpleweb to current container
# only copy and past package.json to enable npm install only when changes in package.json
COPY ./package.json ./  
RUN npm install
COPY ./ ./

#d efault command
CMD ["npm", "start"]