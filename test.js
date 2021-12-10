const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('cheng', 'root', '123456', { //引入mysql
  dialect: 'mysql',
  dialectOptions: {
    // Your mysql2 options here
  }
})
//创建user模型
class User extends Model {}
//初始化
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
  // //删除 table中的数据
  // await User.destroy({
  //   where: {
  //     id: 1
  //   }
  // });
  //查询 table中的数据
  // const users = await User.findAll();
  // console.log(JSON.stringify(users))
  await sequelize.sync(); //同步到数据库
  const jane = await User.create({ //创建一条记录
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON()); // 打印结果
})();