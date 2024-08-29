import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: 'test-recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending test email:', error);
        console.log('Error details:');
        console.log('Code:', error.code);
        console.log('Message:', error.message);
        console.log('Command:', error.command);
        console.log('Response:', error.response);
        console.log('ResponseCode:', error.responseCode);
        console.log('Stack:', error.stack);
    } else {
        console.log('Test email sent:', info.response);
    }
});

console.log('EMAIL_USERNAME:', process.env.EMAIL_USERNAME);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '[PASSWORD SET]' : '[PASSWORD NOT SET]');
