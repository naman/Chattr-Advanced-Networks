# curly-octo-woof
Node.JS realtime chat app for Advanced Networks using IPv6


Installation: 
1. Install node.js
2. git clone this repo.
3. fire up a terminal, enter "cd curly-octo-woof"
4. enter command "npm install" on terminal to install the dependencies.
5. type "node index" on the terminal now.
6. This opens a server running on "http://[::]:8080" and has options to use ipv6 and ipv4.
7. Use ipconfig to locate your ipv6 and ipv4 address, and as your mate to open "http://<ADDRESS>:8080" in his browser.
8. Open multiple tabs in your favorite browser, and enjoy chatting. You get a cool name, when you start! :P
9. Currently clients using an ipv6 address, arent able to send a message. But there presence is felt by broadcasting 
   a "is here! :)" and "went away! :(" message in ipv4 clients' window.
   This is due to a bug in socket.io library! Have reported the bug.

