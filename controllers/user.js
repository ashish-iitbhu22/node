const userDb = require("../models/user");

async function getAllUser(req, res) {
  const alluser = await userDb.find({});
  res.setHeader("x-name", "Ashish");
  return res.json(alluser);
}

async function addUser(req, res) {
  {
    const body = req.body;
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
    ) {
      return res.status(400).json({ message: "All field are required" });
    }
    const result = await userDb.findOne({email:body.email})
    if (result){
        return res.status(400).json({ message: "email already exist" });
    }
      await userDb.create({
        first_name: body.first_name,
        last_name: body.last_name,
        gender: body.gender,
        email: body.email,
        job_title: body.job_title,
      });
    return res.status(201).json({ success: "true" });
  }
}

async function getUserById(req, res) {
   const userdata = await userDb.findById(req.params.id);
   if (!userdata) {
     return res.status(404).json({ error: "data not found" });
   }
   return res.json(userdata);
}

async function updateUserById(req, res) {
  try {
    const body = req.body;
    const id = req.params.id;

    const result = await userDb.findByIdAndUpdate({ _id: id }, { $set: body });
    if (result.matchedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.json({ success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "An error occurred" });
  }
}

async function deleteUser(req, res) {
   try {
     const result = await userDb.findByIdAndDelete(req.params.id);
     if (result.matchedCount === 0) {
       return res
         .status(404)
         .json({ success: false, message: "User not found" });
     }

     return res.json({ success: true });
   } catch (error) {
     console.error(error);
     return res
       .status(500)
       .json({ success: false, message: "An error occurred" });
   }
}

module.exports = {
  addUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUser,
};
