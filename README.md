gruntServer
=============

Grunt Server project is for creating a portable webserver for web app development


**How to setup:**

1. install Node / npm on your system
2. clone this repository into any directory of your choice... we will call it "gruntServer" for explanation purposes.
3. in terminal navigate to gruntServer directory and run "npm install"
4. create a "src" folder inside the gruntServer directory to contain your development site files example: index.html
5. in terminal from the gruntServer directory run the command "grunt server"

finish: you should now be able to navigate to localhost in any browser and see the site which is now being hosted from   gruntServer/src/{index.html}

**Troubleshooting**
port 80 may be already taken by an instance of apache or other web services.  you can do the following to resolve this.

1. stop the service that is using port 80.
2. use that service to host this repository instead of using gruntServer
3. edit the GruntFile.js of gruntServer to use a different port


**Purpose:**

this project is used to easily deploy a portable development environment for developers to use instead of apache.
