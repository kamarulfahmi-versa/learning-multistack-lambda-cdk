import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs'; 
import * as path from 'node:path';

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda1 = new lambdaNodejs.NodejsFunction(this, 'Lambda1Function', {
      functionName: 'backend-lambda1',
      runtime: lambda.Runtime.NODEJS_LATEST,
      entry: path.join(__dirname, '../handlers/lambda1/index.ts'),
      handler: 'handler',
    });

    const lambda2 = new lambdaNodejs.NodejsFunction(this, 'Lambda2Function', {
      functionName: 'backend-lambda2',
      runtime: lambda.Runtime.NODEJS_LATEST,
      entry: path.join(__dirname, '../handlers/lambda2/index.ts'),
      handler: 'handler',
    });

    const lambda3 = new lambdaNodejs.NodejsFunction(this, 'Lambda3Function', {
      functionName: 'backend-lambda3',
      runtime: lambda.Runtime.NODEJS_LATEST,
      entry: path.join(__dirname, '../handlers/lambda3/index.ts'),
      handler: 'handler',
    });

    const api = new apigw.RestApi(this, 'BackendApi', {
      restApiName: 'backend-stack-api',
    });

    const backend = api.root.addResource('backend');

    const l1 = backend.addResource('lambda1');
    l1.addMethod('GET', new apigw.LambdaIntegration(lambda1));

    const l2 = backend.addResource('lambda2');
    l2.addMethod('GET', new apigw.LambdaIntegration(lambda2));

    const l3 = backend.addResource('lambda3');
    l3.addMethod('GET', new apigw.LambdaIntegration(lambda3));
  }
}