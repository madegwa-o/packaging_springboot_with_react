# Build Stage
FROM maven:3.8.5-openjdk-17-slim AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package

# Production Stage
FROM openjdk:17-jdk-alpine
# Create a group named newshop_group and a user named newshop_user
#RUN addgroup --system newshop_group && adduser --system --ingroup newshop_group newshop_user
WORKDIR /app
COPY --from=build /app/target/newShop-0.0.1-SNAPSHOT.jar ./shop.jar
#USER newshop_user  # Use the user explicitly
EXPOSE 8080
ENV SPRING_PROFILES_ACTIVE=prod

ENTRYPOINT ["java", "-jar", "shop.jar"]
HEALTHCHECK --interval=30s --timeout=10s CMD curl -f http://localhost:8080/actuator/health || exit 1
