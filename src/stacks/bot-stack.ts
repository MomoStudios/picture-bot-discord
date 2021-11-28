import {Runtime} from '@aws-cdk/aws-lambda';
import {NodejsFunction} from '@aws-cdk/aws-lambda-nodejs';
import {Construct, Duration, Stack} from '@aws-cdk/core';
import * as path from 'path';
import {DiscordBotConstruct} from '../constructs/DiscordBotConstruct';

/**
 * Creates a sample Discord bot endpoint that can be used.
 */
export class BotStack extends Stack {
  /**
   * The constructor for building the stack.
   * @param {Construct} scope The Construct scope to create the stack in.
   * @param {string} id The ID of the stack to use.
   */
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Create the Commands Lambda.
    const discordCommandsLambda = new NodejsFunction(this, 'discord-commands-lambda', {
      runtime: Runtime.NODEJS_14_X,
      entry: path.join(__dirname, '../functions/DiscordBotFunction.ts'),
      handler: 'handler',
      timeout: Duration.seconds(60),
    });

    const discordBot = new DiscordBotConstruct(this, 'discord-bot-endpoint', {
      commandsLambdaFunction: discordCommandsLambda,
    });
  }
}