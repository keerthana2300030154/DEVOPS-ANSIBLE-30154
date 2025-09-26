# Stage 1: Build the application
FROM eclipse-temurin:21-jdk AS builder

# Set working directory
WORKDIR /app

# Copy Maven wrapper and configuration
COPY mvnw .
COPY .mvn/ .mvn

# Make the wrapper executable
RUN chmod +x mvnw

# Copy project descriptor and source code
COPY pom.xml .
COPY src/ ./src

# Build the project without running tests
RUN ./mvnw clean package -DskipTests

# Stage 2: Run the application
FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy the built jar from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose the port your Spring Boot app uses
EXPOSE 4000

# Run the Spring Boot app
ENTRYPOINT ["java","-jar","app.jar"]
