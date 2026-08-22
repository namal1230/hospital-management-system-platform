# Hospital Management System Platform
<img width="695" height="1787" alt="Screenshot 2026-08-21 051347" src="https://github.com/user-attachments/assets/eba67487-ea3e-47aa-9a83-8a3528178b96" />
<img width="486" height="116" alt="Screenshot 2026-08-21 051507" src="https://github.com/user-attachments/assets/0c41a845-8500-4b9e-b3f8-be990eaf98e8" />

<br>
<br>
<br>

<img width="1122" height="885" alt="Screenshot 2026-08-22 072245" src="https://github.com/user-attachments/assets/41c373af-fc5b-4c0f-8ee6-5117b3909a09" />



This repository is the parent Maven project for a Hospital Management System platform. It aggregates several microservice modules used in the platform.

## Modules

- APIGateway
- ConfigServer
- ServiceRegistry

Each module is a separate Maven module inside this multi-module project.

## Prerequisites

- Java JDK 11 or later
- Apache Maven 3.6+

## Build

From the repository root run:

mvn clean install

This builds all modules and produces the artifacts in each module's `target/` directory.

## Run

Each module can be run independently. Typical options:

1. Using Maven (module directory):

cd APIGateway
mvn spring-boot:run

2. Using the built JAR (after `mvn clean install`):

java -jar APIGateway/target/<artifact>-<version>.jar

Replace `<artifact>-<version>.jar` with the actual JAR file name created in the module's `target/` folder.

Note: Modules likely rely on each other (e.g., ServiceRegistry and ConfigServer). Start them in the appropriate order: ConfigServer, ServiceRegistry, then APIGateway.

## Project Structure

- pom.xml (parent POM)
- APIGateway/ (API gateway module)
- ConfigServer/ (Spring Cloud Config server module)
- ServiceRegistry/ (Eureka/registry module)

## Contributing

Contributions are welcome. Please open an issue to discuss major changes before sending PRs.

## License

This project does not include a LICENSE file. Add one if you intend to publish under a specific license.

## Contact

Repository owner: @namal1230
