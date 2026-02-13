FROM nginx:alpine

# Copy all files from current directory to Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

# Default command for nginx:alpine is already correct, but specifying it is fine
CMD ["nginx", "-g", "daemon off;"]
