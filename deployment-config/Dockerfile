FROM node:20.10 
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
CMD ["npm", "run", "start"]
