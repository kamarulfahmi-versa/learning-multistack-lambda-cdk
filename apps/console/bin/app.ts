#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { ConsoleStack } from '../../console/src/stack/ConsoleStack';


const app = new cdk.App();
new ConsoleStack(app, 'console-stack', {});


