import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const secretKey = process.env.JWT_SECRET;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const generateEmailToken = (userId) => {
    return jwt.sign(
        { userId },
        secretKey,
        { expiresIn: '1h' } // le token expirera dans 1 heure
    );
};

export const sendVerificationEmail = (email, token) => {
    const verificationUrl = `https://o-rando.com/accounts/verify-email?token=${token}`;
    const mailOptions = {
        from: '"O-rando Support" <noreply.orando@gmail.com>',
        to: email,
        subject: 'Vérification de votre adresse email',
        text: `Cliquez sur le lien suivant pour vérifier votre adresse email : ${verificationUrl}`,
        html: `<p>Cliquez sur le lien suivant pour vérifier votre adresse email : <a href="${verificationUrl}">${verificationUrl}</a></p>`,
    };

    return transporter.sendMail(mailOptions);
};