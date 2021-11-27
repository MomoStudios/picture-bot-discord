import * as cdk from '@aws-cdk/core';
import {Secret} from '@aws-cdk/aws-secretsmanager';

export class PictureBotStack extends cdk.Stack {

  public readonly discordAPISecrets: Secret;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.discordAPISecrets = new Secret(this, 'discord-bot-api-key');
  }
}
