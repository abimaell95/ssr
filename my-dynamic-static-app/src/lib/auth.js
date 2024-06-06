import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET_KEY = 'your_secret_key';

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 12);
};

export const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (user) => {
    return jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};
