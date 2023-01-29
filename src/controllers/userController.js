const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const getAll = (req, res) => {
  
  UserSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({ message: err.message});
      }
      res.status(200).send(users);
  });

  console.log("Bateu na porta do get all")
};

const createUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;
  
  try {
  const newUser = new UserSchema(req.body)

  const savedUser = await newUser.save()
  res.status(201).json({
    statusCode: 201,
    message: "User adicionado com sucesso!",
    savedUser
  });
} catch(error) {
  res.status(500).json({
  statusCode: 500,
  message: error.message,
  });

}};


const updateUserById = async (req, res) => 
{try {await UserSchema.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
  statusCode: 200,
  message: "User atualizada com sucesso",});
} catch (err) {
  console.error(err);
  res.status(500).json({
  statusCode: 500,
  message: err.message,
});
}};


const deleteUserById = async (req, res) => 
{try {await UserSchema.findByIdAndDelete(req.params.id);
  res.status(200).json({
  statusCode: 200,
  mensagem: "User deletada com sucesso",});
} catch (err) {
  res.status(400).json({statusCode: 400,
  message: err.message,});

}};



module.exports = {
  getAll,
  createUser,
  deleteUserById,
  updateUserById,

};
