import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["slot", "vouch", "embed", "ticket", "security", "entertainment", "user"],
    protoPath: [
      "src/slot/slot.proto",
      "src/vouch/vouch.proto",
      "src/embed/embed.proto",
      "src/ticket/ticket.proto",
      "src/security/security.proto",
      "src/entertainment/entertainment.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
