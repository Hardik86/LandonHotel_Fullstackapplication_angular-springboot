# =========================================================
# STAGE 1 — Build (Maven + Node for Angular)
# =========================================================
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Install Node 18 LTS (Angular requires it)
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    node -v && npm -v \
    RUN npm install -g @angular/cli

WORKDIR /app

# Copy Maven configuration
COPY pom.xml .

# Pre-download dependencies
RUN mvn dependency:go-offline -B

# Copy entire project
COPY src ./src

# Install Angular UI dependencies
WORKDIR /app/src/main/UI
RUN npm install

# Run Angular production build
RUN npm run build --omit=dev

# Move back and build the Spring Boot JAR
WORKDIR /app
RUN mvn clean package -DskipTests

# =========================================================
# STAGE 2 — Runtime Image (Small, Fast)
# =========================================================
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy built JAR
COPY --from=build /app/target/D387_sample_code-0.0.2-SNAPSHOT.jar app.jar

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8080/ || exit 1

ENTRYPOINT ["java", "-jar", "app.jar"]
