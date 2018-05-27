var env = process.env.NODE_ENV  || 'development';
if(env === 'develpoment'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp;'
}else if(env ==='test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}else{
  process.env.MONGODB_URI = 'mongodb://app:app123@ds137650.mlab.com:37650/todo-app';
}