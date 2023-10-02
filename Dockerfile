FROM nginx:stable-alpine3.17

# set working directory
WORKDIR /usr/share/nginx/arimelody/

# copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy static files
COPY public /usr/share/nginx/arimelody

EXPOSE 443

# start nginx in the foreground so logs appear in docker
CMD ["nginx", "-g", "daemon off;"];
