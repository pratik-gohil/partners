FROM node:20.10 
WORKDIR /app
COPY . ./
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]
