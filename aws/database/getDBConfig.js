const getDBConfig = () => {
  let config;
  // same config for test and local dev environments
  if (process.env.NODE_ENV === 'test' || process.env.AWS_SAM_LOCAL) {
    config = {
      "apiVersion": "2012-08-10",
      "accessKeyId": "1234",
      "secretAccessKey": "1234",
      "region":"eu-west-2",
      "endpoint": "http://172.18.0.1:8000"
    };
  } else {
    config = {
      "apiVersion": "2012-08-10",
      "region":"eu-west-2"
    };
  }

  return config;
};

export { getDBConfig };