import nodemailer from 'nodemailer';

// Function to send confirmation email
export function sendConfirmationEmail(email) {
    // Create a Nodemailer transporter using SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'gmail', 'outlook', etc.
        auth: {
            user: 'codingninjas2k16@gmail.com',
            pass: 'slwvvlczduktvhdj'
        }
    });

    // Email message options
    let mailOptions = {
        from: 'gagankumar8294@gmail.com',
        to: email,
        subject: 'Job Application Confirmation',
        html: `
            <p>Dear User,</p>
            <p>Thank you for applying to a job at Easily. We have received your application and are currently reviewing it.</p>
            <p>If your qualifications match our requirements, we will contact you for the next steps of the selection process.</p>
            <p>Thank you for your interest in joining our team!</p>
            <p>Best regards,<br/>The Easily Team</p>
        `
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred while sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}