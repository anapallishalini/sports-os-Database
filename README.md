# Sports OS - Database Layer

## Sports OS Database Layer

The Sports OS Database Layer is developed using **MongoDB**, **Node.js**, **Express.js**, and **Mongoose**. It provides a scalable and flexible database for storing sports-related information such as academies, coaches, athletes, sports, and shortlisted academies.

This layer supports **bulk CSV import**, schema validation, and structured collections for easy integration with the Repository Layer and API Layer.

---

# Overview

The Database Layer acts as the foundation of the Sports OS application by managing and organizing sports-related data.

It stores information about:

* Sports Academies
* Coaches
* Athletes
* Sports
* Shortlists

The database is designed to support efficient searching, filtering, recommendations, and future backend integration.

---

# Features

## Database Management

* MongoDB Database
* Mongoose ODM
* Schema Validation
* Flexible NoSQL Design
* Automatic ObjectId Generation

## Collections

* Academies
* Coaches
* Athletes
* Sports
* Shortlists

## CSV Bulk Import

Bulk import support for:

* Academy Data
* Coach Data
* Sports Data

using CSV Parser and Mongoose.

## Sports Collection

Stores reusable sports information such as:

* Sport Name
* Description
* Benefits
* Equipment
* Team Size
* Tournament Levels
* Governing Body
* Olympic Status
* Age Groups

---

# Technologies Used

| Category              | Technology   |
| --------------------- | ------------ |
| Database              | MongoDB      |
| ODM                   | Mongoose     |
| Backend Runtime       | Node.js      |
| Framework             | Express.js   |
| Environment Variables | dotenv       |
| CSV Import            | csv-parser   |
| Version Control       | Git & GitHub |

---

# Project Structure

```text
sports-os
│
├── config
│   └── db.js
│
├── models
│   ├── Academy.js
│   ├── Athlete.js
│   ├── Coach.js
│   ├── Shortlist.js
│   └── Sport.js
│
├── importAcademies.js
├── importCoaches.js
├── importSports.js
│
├── academies.csv
├── sports.csv
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

# Database Collections

## Academies

Stores academy information.

Fields include:

* Academy ID
* Academy Name
* Sport
* Address
* City
* State
* Fees
* Facilities
* Batch Timings
* Rating
* Review Count
* Saved Count

---

## Coaches

Stores coach details.

Fields include:

* Coach Name
* Sport
* Experience
* Certification
* Academy
* Rating
* Reviews

---

## Athletes

Stores athlete information.

Fields include:

* Athlete Name
* Sport
* Age
* Academy

---

## Sports

Stores common sport information.

Fields include:

* Sport Name
* Category
* Description
* Benefits
* Team Size
* Equipment
* Duration
* Tournament Levels
* Governing Body
* Olympic Sport
* Age Groups

---

## Shortlists

Stores shortlisted academies for athletes.

---

# Database Relationships

```
Sports
   │
   ├── Academies
   │
   ├── Coaches
   │
   └── Athletes
          │
          └── Shortlists
```

---

# CSV Import

Bulk import scripts:

```bash
node importAcademies.js
```

```bash
node importCoaches.js
```

```bash
node importSports.js
```

---

# MongoDB Commands

Show Collections

```javascript
show collections
```

Academy Count

```javascript
db.academies.countDocuments()
```

Coach Count

```javascript
db.coaches.countDocuments()
```

Sports Count

```javascript
db.sports.countDocuments()
```

Display Academy

```javascript
db.academies.findOne()
```

Display Coach

```javascript
db.coaches.findOne()
```

Display Sport

```javascript
db.sports.findOne()
```

---

# Setup

Clone Repository

```bash
git clone https://github.com/anapallishalini/sports-os-Database.git
```

Install Packages

```bash
npm install
```

Configure Environment

Create a `.env` file:

```text
MONGO_URI=mongodb://localhost:27017/sportsOS
```

Run the Application

```bash
node server.js
```

---

# Future Integration

This Database Layer is designed to integrate with:

* Repository Layer
* Controller Layer
* REST APIs
* Frontend (Sports OS UI)

---

# Project Status

* MongoDB Connected
* Database Created
* Collections Implemented
* CSV Import Completed
* Sports Collection Added
* GitHub Repository Updated

---

# Author

**Shalini Anapalli**

Sports OS – Database Layer

Built using MongoDB, Node.js, Express.js, and Mongoose.
