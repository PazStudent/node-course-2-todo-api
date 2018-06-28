var env = process.env.NODE_ENV  || 'development';
if(env === 'development'){
  console.log('Dev - Mode');
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoApp';
}else if(env ==='test'){
  console.log('Test - Mode');
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoAppTest';
}else{
  console.log('Production - Mode');
  process.env.MONGODB_URI = 'mongodb://app:app123@ds137650.mlab.com:37650/todo-app';
}
