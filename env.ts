import dotenv from 'dotenv';


dotenv.config();
export const saltRounds = process.env.saltRounds;
export const JWT_SECRET = process.env.JWT_SECRET;