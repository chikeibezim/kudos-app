import bycrypt from 'bcryptjs';
import type { RegisterForm } from './types.server';
import { prisma } from './prisma.server';

export const createUser = async (user: RegisterForm) => {
    const passwordHash = await bycrypt.hash(user.password, 10);
    const newUser = await prisma.user.create({ 
        data: {
            email: user.email,
            password: passwordHash
            
        },
    })
}