import { App, Aspects, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { ApplyRemovalPolicy } from '../src';

class TestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new Bucket(this, 'TestBucket');
  }
}

describe('apply RemovalPolicy', () => {
  it('RemovalPolicy.RETAIN', () => {
    // prepare
    const app = new App();
    const testStack = new TestStack(app, 'TestStack1');

    // test: Apply RemovalPolicy.
    Aspects.of(testStack).add(new ApplyRemovalPolicy(RemovalPolicy.RETAIN));

    // assertion: snapshot test
    const template = Template.fromStack(testStack).toJSON();
    expect(template).toMatchSnapshot();
  });
  it('RemovalPolicy.DESTROY', () => {
    // prepare
    const app = new App();
    const testStack = new TestStack(app, 'TestStack2');

    // test: Apply RemovalPolicy.
    Aspects.of(testStack).add(new ApplyRemovalPolicy(RemovalPolicy.DESTROY));

    // assertion: snapshot test
    const template = Template.fromStack(testStack).toJSON();
    expect(template).toMatchSnapshot();
  });
});
