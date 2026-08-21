#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { MobileStack } from '../../mobile/src/stack/MobileStack';

const app = new cdk.App();
new MobileStack(app, 'mobile-stack', {});
