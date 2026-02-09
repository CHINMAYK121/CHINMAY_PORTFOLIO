FROM nginx:alpine

# Copy all files from current directory to Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
