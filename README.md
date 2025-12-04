# 🏨 Landon Hotel Scheduling Application

[![Java](https://img.shields.io/badge/Java-11+-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.7+-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Angular](https://img.shields.io/badge/Angular-14+-red.svg)](https://angular.io/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-blue.svg)](https://www.docker.com/)
[![AWS](https://img.shields.io/badge/AWS-Deployed-yellow.svg)](https://aws.amazon.com/)

A full-stack hotel reservation scheduling application built with **Spring Boot** (Java backend) and **Angular** (frontend), featuring multithreading, internationalization, and cloud deployment capabilities.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Installation & Setup](#installation--setup)
- [Docker Deployment](#docker-deployment)
- [Cloud Deployment](#cloud-deployment)
- [Screenshots](#screenshots)
- [Technical Highlights](#technical-highlights)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

---

## 🎯 Overview

The Landon Hotel Scheduling Application is a comprehensive hotel reservation management system designed for a Toronto-based hotel chain. This application demonstrates advanced Java development skills including multithreading, internationalization, REST API design, and cloud deployment using Docker containers.

**Business Context:** Developed to meet Canadian regulatory requirements for bilingual support (English/French) while providing multi-currency pricing and timezone-aware scheduling for international customers.

---

## ✨ Key Features

### 🌍 **Internationalization & Localization**
- **Bilingual Support:** Real-time language switching between English and French
- **Multithreaded Language Processing:** Separate threads handle each language resource bundle for optimal performance
- **Resource Bundles:** Externalized messages for easy localization

### 💰 **Multi-Currency Support**
- Display prices in three currencies:
  - US Dollars (USD $)
  - Canadian Dollars (CAD C$)
  - Euros (EUR €)
- Real-time currency display on reservation pages

### 🕐 **Timezone Conversion**
- **Live Presentation Scheduler** with automatic timezone conversion
- Supports three time zones:
  - Eastern Time (ET)
  - Mountain Time (MT)
  - Coordinated Universal Time (UTC)
- Custom Java method for accurate timezone calculations

### 🏗️ **Full-Stack Architecture**
- RESTful API backend with Spring Boot
- Responsive Angular frontend
- MySQL database integration
- Docker containerization for consistent deployment

---

## 🛠️ Technologies Used

### Backend
- **Java 11+** - Core programming language
- **Spring Boot 2.7+** - Application framework
- **Spring MVC** - Web application architecture
- **Spring Data JPA** - Database interaction
- **Hibernate** - ORM framework
- **Maven** - Dependency management

### Frontend
- **Angular 14+** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **HTML5/CSS3** - Markup and styling
- **Bootstrap** - Responsive design

### Database
- **MySQL** - Relational database management

### DevOps & Deployment
- **Docker** - Containerization
- **AWS EC2** - Cloud hosting
- **Git/GitLab** - Version control
- **IntelliJ IDEA Ultimate** - IDE

### Key Libraries
- **Thymeleaf** - Server-side templating
- **Lombok** - Boilerplate code reduction
- **Jackson** - JSON processing

---

## 🏛️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Angular Frontend                   │
│  (Responsive UI, Language Switching, Currency View)  │
└──────────────────┬──────────────────────────────────┘
                   │ HTTP/REST API
                   ↓
┌─────────────────────────────────────────────────────┐
│              Spring Boot Backend                     │
│  ┌─────────────────────────────────────────────┐   │
│  │  Controllers (REST Endpoints)                │   │
│  └──────────────┬───────────────────────────────┘   │
│                 ↓                                    │
│  ┌─────────────────────────────────────────────┐   │
│  │  Service Layer                               │   │
│  │  - Multithreaded Language Processing         │   │
│  │  - Timezone Conversion Logic                 │   │
│  │  - Business Rules                            │   │
│  └──────────────┬───────────────────────────────┘   │
│                 ↓                                    │
│  ┌─────────────────────────────────────────────┐   │
│  │  Repository Layer (Spring Data JPA)          │   │
│  └──────────────┬───────────────────────────────┘   │
└─────────────────┼───────────────────────────────────┘
                  ↓
         ┌────────────────┐
         │  MySQL Database │
         └────────────────┘
```

---

## 🚀 Installation & Setup

### Prerequisites
- Java JDK 11 or higher
- Node.js 14+ and npm
- MySQL 8.0+
- Docker (optional, for containerized deployment)
- IntelliJ IDEA Ultimate Edition (recommended)

### Local Development Setup

1. **Clone the Repository**
```bash
git clone https://github.com/Hardik86/LandonHotel_Fullstackapplication_angular-springboot.git
cd LandonHotel_Fullstackapplication_angular-springboot
```

2. **Configure Database**
```bash
# Create MySQL database
mysql -u root -p
CREATE DATABASE landon_hotel;
```

Update `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/landon_hotel
spring.datasource.username=your_username
spring.datasource.password=your_password
```

3. **Build Backend**
```bash
mvn clean install
mvn spring-boot:run
```

4. **Build Frontend**
```bash
cd src/main/resources/static
npm install
ng serve
```

5. **Access Application**
- Backend API: `http://localhost:8080`
- Frontend: `http://localhost:4200`

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
# Build the Docker image
docker build -t landon-hotel-app .

# Run the container
docker run -d -p 8080:8080 --name D387_landon_hotel landon-hotel-app

# Verify container is running
docker ps
```

### Docker Compose (Optional)
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/landon_hotel
    depends_on:
      - db
  db:
    image: mysql:8.0
    environment:
      MYSQL_DATABASE: landon_hotel
      MYSQL_ROOT_PASSWORD: password
    ports:
      - "3306:3306"
```

---

## ☁️ Cloud Deployment

### AWS EC2 Deployment Process

1. **Launch EC2 Instance**
   - Instance Type: t2.micro (Free Tier eligible)
   - AMI: Amazon Linux 2 or Ubuntu
   - Security Group: Allow ports 22 (SSH), 8080 (HTTP)

2. **Install Docker on EC2**
```bash
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user
```

3. **Deploy Application**
```bash
# Pull Docker image (if pushed to Docker Hub)
docker pull hardik86/landon-hotel-app:latest

# Run container
docker run -d -p 8080:8080 --name D387_landon_hotel hardik86/landon-hotel-app:latest
```

4. **Access Application**
```
http://your-ec2-public-ip:8080
```

### Alternative Cloud Providers
- **Google Cloud Platform (GCP):** Google Kubernetes Engine (GKE)
- **Microsoft Azure:** Azure Container Instances
- **Heroku:** Container deployment with Heroku CLI

---

## 📸 Screenshots

### Home Page - English
*[Screenshot showing the main landing page with English welcome message]*

### Home Page - French
*[Screenshot showing the main landing page with French welcome message]*

### Reservation Page - Multi-Currency Display
*[Screenshot showing room prices in USD, CAD, and EUR]*

### Live Presentation Schedule - Timezone Display
*[Screenshot showing event times in ET, MT, and UTC]*

### Docker Container Running
*[Screenshot of terminal showing `docker ps` with the running container]*

---

## 💡 Technical Highlights

### Multithreading Implementation
```java
// Example: Separate threads for language processing
ExecutorService executor = Executors.newFixedThreadPool(2);

executor.submit(() -> {
    ResourceBundle bundleEN = ResourceBundle.getBundle("messages", Locale.ENGLISH);
    String welcomeEN = bundleEN.getString("welcome.message");
    System.out.println("Thread-EN: " + welcomeEN);
});

executor.submit(() -> {
    ResourceBundle bundleFR = ResourceBundle.getBundle("messages", Locale.FRENCH);
    String welcomeFR = bundleFR.getString("welcome.message");
    System.out.println("Thread-FR: " + welcomeFR);
});

executor.shutdown();
```

### Timezone Conversion Method
```java
public String convertTimezone(LocalDateTime dateTime, String fromZone, String toZone) {
    ZonedDateTime fromZonedTime = dateTime.atZone(ZoneId.of(fromZone));
    ZonedDateTime toZonedTime = fromZonedTime.withZoneSameInstant(ZoneId.of(toZone));
    return toZonedTime.format(DateTimeFormatter.ofPattern("HH:mm"));
}
```

### Resource Bundle Configuration
```properties
# messages_en.properties
welcome.message=Welcome to Landon Hotel!

# messages_fr.properties
welcome.message=Bienvenue à l'Hôtel Landon!
```

---

## 🔮 Future Enhancements

- [ ] **Real-time Currency Conversion API Integration**
- [ ] **User Authentication & Authorization** (Spring Security + JWT)
- [ ] **Payment Gateway Integration** (Stripe/PayPal)
- [ ] **Email Confirmation System** for reservations
- [ ] **Admin Dashboard** for reservation management
- [ ] **Mobile Application** (React Native/Flutter)
- [ ] **CI/CD Pipeline** with Jenkins or GitHub Actions
- [ ] **Kubernetes Orchestration** for scalability
- [ ] **Microservices Architecture** migration
- [ ] **GraphQL API** as alternative to REST

---

## 📝 Project Structure

```
landon-hotel-app/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/landon/hotel/
│   │   │       ├── config/          # Configuration classes
│   │   │       ├── controller/      # REST controllers
│   │   │       ├── model/           # Entity classes
│   │   │       ├── repository/      # Data access layer
│   │   │       ├── service/         # Business logic
│   │   │       └── util/            # Utility classes (timezone conversion)
│   │   └── resources/
│   │       ├── static/              # Angular frontend
│   │       ├── templates/           # Thymeleaf templates
│   │       ├── messages_en.properties
│   │       ├── messages_fr.properties
│   │       └── application.properties
│   └── test/                        # Unit and integration tests
├── Dockerfile
├── docker-compose.yml
├── pom.xml
└── README.md
```

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- ✅ **Full-stack development** with modern frameworks
- ✅ **Multithreading** and concurrent programming
- ✅ **Internationalization (i18n)** and localization (l10n)
- ✅ **RESTful API design** and implementation
- ✅ **Containerization** with Docker
- ✅ **Cloud deployment** on AWS
- ✅ **Database design** and ORM mapping
- ✅ **Version control** with Git
- ✅ **Software architecture** best practices

---

## 👤 Contact

**Hardik hariyani**

- 💼 LinkedIn: https://www.linkedin.com/in/hardik-hariyani/
- 📧 Email: hardikhariyani86@gmail.com
- 💻 GitHub: https://github.com/Hardik86/

---

## 📄 License

This project was developed as part of the Western Governors University (WGU) Advanced Java course (D387). Feel free to use it as a reference for your own learning.

---

## 🙏 Acknowledgments

- Western Governors University (WGU) for the project framework
- Landon Hotel for the business case scenario
- Spring Boot and Angular communities for excellent documentation

---

⭐ **If you find this project helpful, please consider giving it a star!**

---

*Last Updated: December 2025*
