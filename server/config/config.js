var env = process.env.NODE_ENV  || 'development';

if(env === 'development' || env === 'test'){
  var config = require('./config.json');
  var env_config = config[env];

  Object.keys(env_config).forEach((key) =>{
    process.env[key] = env_config[key];
  });
}
else{
  console.log('Production - Mode');
  process.env.MONGODB_URI = 'mongodb://app:app123@ds137650.mlab.com:37650/todo-app';
}