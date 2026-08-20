#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { MobileStack } from '../lib/stack/mobile-stack';

const app = new cdk.App();
new MobileStack(app, 'mobile-stack',{} );

