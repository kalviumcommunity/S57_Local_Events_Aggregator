const userModel = require("../Schema/UserSchema");
// const Joi = require("joi");
const bcrypt = require("bcrypt");
// const {
//   validateRegister,
//   validateLogin,
// } = require("../Validation/Registration");

const jwt = require("jsonwebtoken")

const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      userName: name,
      // redirectUrl: "/dashboard" // Assuming you have a dashboard page
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in signupUser:", error.message);
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    
  } catch (error) {
    console.error("Error in login function:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { signupUser, login };
