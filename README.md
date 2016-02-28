# Chattr
Node.JS realtime IPv6-enabled chat app for Advanced Networks using SocketIO 


Installation: 
1. Install node.js <br/>

2. git clone this repo. <br/>

3. fire up a terminal, enter "cd curly-octo-woof" <br/>

4. enter command "npm install" on terminal to install the dependencies. <br/>

5. type "node index" on the terminal now. <br/>

6. This opens a server running on "http://[::]:8080" and has options to use ipv6 and ipv4.

7. Use ipconfig to locate your ipv6 and ipv4 address, and ask your buddy to open "http://<ADDRESS>:8080" in his browser. <br/>
8. Open multiple tabs in your favorite browser, and enjoy chatting. You get a cool name, when you start! :P <br/>

9. Currently clients using an ipv6 address, arent able to send a message. But there presence is felt by broadcasting
   a "is here! :)" and "went away! :(" message in ipv4 clients' window. I don't know why this is happening. Reported the bug to Socket.IO <br/>

I have also deployed a running version [here](http://curly-octo-woof.herokuapp.com/). But i dont know why heroku is blocking websockets as well as xhr-polling (every 10s) :/.
