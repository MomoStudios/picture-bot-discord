import { App } from '@aws-cdk/core';
import { BotStack } from './stacks/bot-stack';

const app = new App();
const startAPIStack = new BotStack(app, 'BotStack');