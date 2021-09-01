const User =require("../models/user")
const appController = {}


appController.crearUsuario = async(req, res) => {

  try{
    const newUser = new User({
      name:req.body.name,
      lastName: req.body.lastName,
      username:req.body.username, 
      email:req.body.email, 
      phone: req.body.phone,
      password:req.body.password, 
     })

     await newUser.save()
     res.status(200).json({message: `usuario ${newUser} ha sido creado`})
  } catch (error){
    res.status(400).json({message: `error al crear el objeto, error: error`})
  }      

}

appController.consultarUsuarios = async (req, res) => {
  try {
      const users = await User.find()

      if(users) res.status(200).json({message: "users found", users})
      else res.status(202).json({message: "users not found"})
  } catch (error) {
      res.status(400).json({message: "Error", error})
  }
}

appController.consultarUsuario = async (req, res) => {
  try {
      const user = await User.findById(req.params.id_user)

      if(user) res.status(200).json({message: "user found", user})
      else res.status(202).json({message: "user not found"})
  } catch (error) {
      res.status(400).json({message: "Error", error})
  }
}

appController.eliminarusuario = async (req, res) => {
  try {
      const deleted = await User.findByIdAndDelete(req.params.id_user)

      res.status(202).json({message: "user deleted"})
  } catch (error) {
      res.status(400).json({message: "Error", error})
  }
}

module.exports = appController