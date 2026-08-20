#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { MobileStack } from '../lib/stack/MobileStack';
import { ConsoleStack } from '../lib/stack/ConsoleStack';
import { BackendStack } from '../lib/stack/BackendStack';

const app = new cdk.App();
new MobileStack(app, 'MobileStack', {});
new ConsoleStack(app, 'ConsoleStack', {});
new BackendStack(app, 'BackendStack', {});

