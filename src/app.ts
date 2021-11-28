import { App } from '@aws-cdk/core';
import { DiscordPhotoBotStack } from './stacks/bot-stack';

const app = new App();
const startAPIStack = new DiscordPhotoBotStack(app, 'DiscordPhotoBotStack');