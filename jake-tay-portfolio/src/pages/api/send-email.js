export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Here you would integrate with EmailJS, SendGrid, or another email service
    try {
      // Example with EmailJS (you need to install: npm install emailjs-com)
      // const emailjs = require('emailjs-com');
      
      // const templateParams = {
      //   from_name: name,
      //   from_email: email,
      //   message: message,
      //   to_email: 'mrjaketay@gmail.com'
      // };
      
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   templateParams,
      //   'YOUR_USER_ID'
      // );

      console.log('Form submission received:', { name, email, message });
      
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Email sending error:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}