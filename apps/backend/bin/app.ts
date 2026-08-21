#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { BackendStack } from '../src/stack/BackendStack';

const app = new cdk.App();
new BackendStack(app, 'backend-stack', {});

