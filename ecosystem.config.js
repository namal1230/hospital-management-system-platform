module.exports = {
  apps: [
    {
      name: "ConfigServer",
      script: "java",
      args: "-jar ./ConfigServer/target/ConfigServer-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/config-server.log"
    },
    {
      name: "ServiceRegistry",
      script: "java",
      args: "-jar ./ServiceRegistry/target/ServiceRegistry-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/service-registry.log"
    },
    {
      name: "APIGateway",
      script: "java",
      args: "-jar ./APIGateway/target/APIGateway-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/api-gateway.log"
    }
  ]
}