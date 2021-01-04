import { DynamoDB, Endpoint } from 'aws-sdk';

// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    const dbConfig = {
        "apiVersion": "2012-08-10",
        //"accessKeyId": "1234",
        //"secretAccessKey": "1234",
        "region":"eu-west-2",
        //"endpoint": "http://film-tracker-local-dynamodb:8000",
        //"endpoint": "https://arn:aws:dynamodb:eu-west-2:485675000042"
    };

    const testTableParams = {
        TableName: "testTable",
        KeySchema: [
          {
            AttributeName: "id",
            KeyType: "HASH"
          }
        ],
        AttributeDefinitions: [
          {
            AttributeName: "id",
            AttributeType: "S"
          }
        ],
        BillingMode: "PAY_PER_REQUEST"
    };

    try {
        const db = new DynamoDB(dbConfig);
        await db.createTable(testTableParams).promise();
        //await db.deleteTable({ TableName: "testTable"}).promise();
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
