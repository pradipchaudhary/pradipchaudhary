# Database Design

Here’s a **database design** for your portfolio website, considering your profession as a Full Stack Web Developer and the key sections of your website like **blogs, certificates, skills, experience, and basic information**.

---

### **Database Design**

#### 1. **Basic Information Table**

Stores personal information displayed on your homepage or about section.

| Column         | Data Type    | Constraints      |
| -------------- | ------------ | ---------------- |
| `id`           | INT          | PRIMARY KEY      |
| `name`         | VARCHAR(100) | NOT NULL         |
| `email`        | VARCHAR(100) | UNIQUE, NOT NULL |
| `phone`        | VARCHAR(20)  | NULLABLE         |
| `bio`          | TEXT         | NULLABLE         |
| `profileImage` | VARCHAR(255) | NULLABLE         |
| `address`      | TEXT         | NULLABLE         |
| `linkedin`     | VARCHAR(255) | NULLABLE         |
| `github`       | VARCHAR(255) | NULLABLE         |
| `twitter`      | VARCHAR(255) | NULLABLE         |

---

#### 2. **Skills Table**

Stores the technical and professional skills.

| Column        | Data Type    | Constraints      |
| ------------- | ------------ | ---------------- |
| `id`          | INT          | PRIMARY KEY      |
| `name`        | VARCHAR(100) | NOT NULL         |
| `proficiency` | INT          | NOT NULL (0–100) |

---

#### 3. **Experience Table**

Stores professional experience details.

| Column        | Data Type    | Constraints |
| ------------- | ------------ | ----------- |
| `id`          | INT          | PRIMARY KEY |
| `title`       | VARCHAR(100) | NOT NULL    |
| `company`     | VARCHAR(100) | NOT NULL    |
| `location`    | VARCHAR(100) | NULLABLE    |
| `startDate`   | DATE         | NOT NULL    |
| `endDate`     | DATE         | NULLABLE    |
| `description` | TEXT         | NULLABLE    |

---

#### 4. **Certificate Table**

Stores certifications you've earned.

| Column            | Data Type    | Constraints |
| ----------------- | ------------ | ----------- |
| `id`              | INT          | PRIMARY KEY |
| `title`           | VARCHAR(100) | NOT NULL    |
| `issuer`          | VARCHAR(100) | NOT NULL    |
| `issueDate`       | DATE         | NOT NULL    |
| `expiryDate`      | DATE         | NULLABLE    |
| `certificateLink` | VARCHAR(255) | NULLABLE    |

---

#### 5. **Projects Table**

Stores information about the projects you've worked on.

| Column        | Data Type    | Constraints                           |
| ------------- | ------------ | ------------------------------------- |
| `id`          | INT          | PRIMARY KEY                           |
| `title`       | VARCHAR(100) | NOT NULL                              |
| `description` | TEXT         | NOT NULL                              |
| `techStack`   | TEXT         | NOT NULL (e.g., JSON or CSV of techs) |
| `liveLink`    | VARCHAR(255) | NULLABLE                              |
| `githubLink`  | VARCHAR(255) | NULLABLE                              |

---

#### 6. **Blog Table**

Stores blog posts for your website.

| Column      | Data Type    | Constraints                             |
| ----------- | ------------ | --------------------------------------- |
| `id`        | INT          | PRIMARY KEY                             |
| `title`     | VARCHAR(100) | NOT NULL                                |
| `content`   | TEXT         | NOT NULL                                |
| `createdAt` | DATE         | NOT NULL                                |
| `updatedAt` | DATE         | NULLABLE                                |
| `authorId`  | INT          | FOREIGN KEY to `Basic Information (id)` |

---

#### 7. **Contact Queries Table**

Stores messages sent by visitors through the contact form.

| Column      | Data Type    | Constraints |
| ----------- | ------------ | ----------- |
| `id`        | INT          | PRIMARY KEY |
| `name`      | VARCHAR(100) | NOT NULL    |
| `email`     | VARCHAR(100) | NOT NULL    |
| `message`   | TEXT         | NOT NULL    |
| `createdAt` | DATE         | NOT NULL    |

---

### **ER Diagram Structure**

1. **Basic Information**

    - One-to-Many with `Blogs`
    - One-to-Many with `Projects`
    - One-to-Many with `Certificates`
    - One-to-Many with `Experience`

2. **Skills**

    - Independent Table

3. **Contact Queries**
    - Independent Table

---

### **SQL Statements**

#### Create Tables

```sql
CREATE TABLE BasicInformation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  bio TEXT,
  profileImage VARCHAR(255),
  address TEXT,
  linkedin VARCHAR(255),
  github VARCHAR(255),
  twitter VARCHAR(255)
);

CREATE TABLE Skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  proficiency INT NOT NULL
);

CREATE TABLE Experience (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  company VARCHAR(100) NOT NULL,
  location VARCHAR(100),
  startDate DATE NOT NULL,
  endDate DATE,
  description TEXT
);

CREATE TABLE Certificate (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  issuer VARCHAR(100) NOT NULL,
  issueDate DATE NOT NULL,
  expiryDate DATE,
  certificateLink VARCHAR(255)
);

CREATE TABLE Projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  techStack TEXT NOT NULL,
  liveLink VARCHAR(255),
  githubLink VARCHAR(255)
);

CREATE TABLE Blog (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  createdAt DATE NOT NULL,
  updatedAt DATE,
  authorId INT,
  FOREIGN KEY (authorId) REFERENCES BasicInformation(id)
);

CREATE TABLE ContactQueries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  createdAt DATE NOT NULL
);
```

---

### **Next Steps**

-   Use a relational database like MySQL or PostgreSQL.
-   Populate your database with data.
-   Use an ORM like Prisma or Sequelize to integrate the database into your Next.js application.

Would you like guidance on implementing this in a specific technology stack?
