Deployment Process

Prerequisites:
Passenger and Nginx are already installed on the server.
You have already transferred the application's code to the server.
You have already installed Node.js.
You have already installed all necessary dependencies that your application needs.

To deploy an app to an Nginx virtual host's root path, the following steps must be taken:

Add a virtual host entry (server block) to your Nginx configuration file.
The server block's root must point to your application's public subdirectory.
You must also set passenger_enabled on in the server block.

Here is an example:

server {
    listen 80;
    server_name yourserver.com;

    # Tell Nginx and Passenger where your app's 'public' directory is
    root /path-to-app/public;

    # Turn on Passenger
    passenger_enabled on;
    # Tell Passenger that your app is a Node.js app
    passenger_app_type node;
    passenger_startup_file app.js;
}

Replace yourserver.com with your server's host name, replace /path-to-app with your application's code directory path and replace app.js with your app's entry point file.

When you are done, restart Nginx. If you installed Nginx via our Debian or RPM packages:
$ sudo service nginx restart

Otherwise, if you installed Nginx from source and don't have an init script:
$ sudo kill $(cat /opt/nginx/logs/nginx.pid)
$ sudo /opt/nginx/sbin/nginx
