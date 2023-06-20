const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('doctorscare', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

// để dùng được await phải thêm async để nó xử lý bất đồng bộ
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default connectDB