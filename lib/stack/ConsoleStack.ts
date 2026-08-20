import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs'; // 1. Added NodejsFunction import
import * as path from 'node:path';

export class ConsoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda1 = new lambdaNodejs.NodejsFunction(this, 'Lambda1Function', {
      functionName: 'console-lambda1',
      runtime: lambda.Runtime.NODEJS_LATEST,
      entry: path.join(__dirname, '../../src/lambda-handlers/console/lambda1/index.ts'),
      handler: 'handler',
    });

    const lambda2 = new lambdaNodejs.NodejsFunction(this, 'Lambda2Function', {
      functionName: 'console-lambda2',
      runtime: lambda.Runtime.NODEJS_LATEST,
      entry: path.join(__dirname, '../../src/lambda-handlers/console/lambda2/index.ts'),
      handler: 'handler',
    });

    const lambda3 = new lambdaNodejs.NodejsFunction(this, 'Lambda3Function', {
      functionName: 'console-lambda3',
      runtime: lambda.Runtime.NODEJS_LATEST,
      entry: path.join(__dirname, '../../src/lambda-handlers/console/lambda3/index.ts'),
      handler: 'handler',
    });

    const api = new apigw.RestApi(this, 'ConsoleApi', {
      restApiName: 'console-stack-api',
    });

    const console = api.root.addResource('console');

    const l1 = console.addResource('lambda1');
    l1.addMethod('GET', new apigw.LambdaIntegration(lambda1));

    const l2 = console.addResource('lambda2');
    l2.addMethod('GET', new apigw.LambdaIntegration(lambda2));

    const l3 = console.addResource('lambda3');
    l3.addMethod('GET', new apigw.LambdaIntegration(lambda3));
  }
}