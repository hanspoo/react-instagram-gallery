FROM node:alpine
RUN apk add git
RUN git clone https://github.com/hanspoo/react-instagram-gallery
WORKDIR /react-instagram-gallery
RUN npm install
RUN npm run build


FROM nginx:alpine
COPY --from=0 /react-instagram-gallery/dist /usr/share/nginx/html
