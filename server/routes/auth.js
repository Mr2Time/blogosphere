import bcrypt from 'bcrypt';
import { User } from '../models/user.js';
import { loginValidation } from '../validation/user.js';

export const userAuth = async (req, res) => {
    try {
        const { error } = loginValidation(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("User does not exist");
        }

        // Compare password
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).send("Invalid email or password");
        }

        // Successful login response
        const id = user._id;
        const blogs = user.blogs;

        // Send user data in the response
        res.status(200).send({ user: { id, email, blogs }, data: [blogs] });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
