import bcrypt from 'bcrypt';
import { User } from '../models/user.js';

import { regValidation } from '../validation/user.js';

export const register = async (req, res) => {
 try {

    console.log(req.body)

    const {error} = regValidation(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message)
    }

    const {email, password} = req.body;

    // check if user already exists

    const user = await User.findOne({email});
    if (user) {
        return res.status(400).send("User already exists");
    }

    // hash password
    // to hash a password, we use bcrypt library
    // we need salt and hash
    // salt is a random string that is used to hash the password
    // hash is the hashed password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        email,
        password: hashedPassword,
    });
    await newUser.save();
    
    res.status(201).send("User created successfully");
 } catch (error) {
    res.status(500).send({ message: error.message });
 }
}

