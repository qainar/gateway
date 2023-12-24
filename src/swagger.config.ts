import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class SwaggerConfig {
    setupConfig(app: any){
        const config = new DocumentBuilder()
        .setTitle('Gateway Api')
        .setDescription('Routes documentation')
        .setVersion('1.0.0')
        .addTag('eBook')
        .build()

        const document = SwaggerModule.createDocument(app, config)
        SwaggerModule.setup('/api/docs', app, document)
    }
}