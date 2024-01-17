FROM nginx:stable-alpine3.17

# set working directory
WORKDIR /web/arimelody/

# copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy static files
COPY public /web/arimelody

EXPOSE 80

# start nginx in the foreground so logs appear in docker
CMD ["nginx", "-g", "daemon off;"];
