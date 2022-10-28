import UserModel from "../Models/User.js";

export default async function CreateUser (req, res) {
  console.log(req.body)
    const { firstName, lastName, email, password, password_confirm } = req.body;
    const userData = { firstName, lastName, email, password}
    try {
        const newUser = await UserModel.create(firstName, lastName, email, password, password_confirm);
        if(userData) {
          res.status(200).send("Inscription réussie");
          res.redirect("/login");
        }
    } catch ({ message: errorMessage }) {
      var erreur =  errorMessage 
      return res.status(400).json(erreur);
    }
}

