# Book Shop -A Online Book Corner

<a href="https://bookshop-9dab3.web.app/">Live Preview</a>
<br>
<br>
<br>
<img src="https://shahidul-portfolio.web.app/_next/static/media/bookShop.7c3c7435.png" height="400"/>
<br>
This is a Book shop web application created using React.js. It allows users to place orders and view their order history, while administrators can add and delete products, and manage the application through a dashboard. The application has a responsive design that supports both desktop and mobile devices.

---

# Table of Contents

<ul>
<li><b>Installation </b></li>
<li><b>Features</b></li>
<li><b> Technologies Used</b></li>
</ul>

---

# Installation

### Clone the client and server repositories to your local machine using the following commands:

```bash
git clone https://github.com/shahiduljahid/bookshopclient.git
```

```bash
git clone https://github.com/shahiduljahid/bookshopserver
```

### Navigate to the root directory of each repository and run the following command to install the required dependencies:

```bash
npm install
```

### Create a Firebase project and configure the authentication and hosting settings as described in the Firebase documentation.

### Create a MongoDB database and obtain the connection string.

### Create a .env file in the server directory and add the following environment variables:

```bash
PORT=4000
DB_URI=<your MongoDB connection string>
```

### Create a .env.local file in the client directory and add the following environment variables:

```bash
REACT_APP_API_BASE_URL=http://localhost:4000
REACT_APP_FIREBASE_API_KEY=<your Firebase API key>
REACT_APP_FIREBASE_APP_ID=<your Firebase App ID>

```

### Start the server and client by running the following commands in the respective directories:

```bash
npm start
```

---

# Features

<ol>
<li><b>Users can view products, add them to their cart, and place orders. </b></li>
<li><b>Users can view their order history and see the status of their orders. </b></li>
<li><b>Administrators can add and delete products. </b></li>
<li><b> Administrators can manage the application through a dashboard.</b></li>
<li><b> The application has a responsive design that supports both desktop and mobile devices.</b></li>
</ol>

# Technologies Used

<ul>
<li><b> React.js</b></li>
<li><b>React Router </b></li>
<li><b>Firebase Authentication </b></li>
<li><b> Firebase Hosting for front end</b></li>
<li><b>Bootstrap
 </b></li>
<li><b> Express.js</b></li>
<li><b>MongoDB </b></li>
<li><b>Mongoose </b></li>
<li><b>Vercel Hosting </b></li>
</ul>



