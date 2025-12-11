const nodemailer = require("nodemailer");

const sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECIPIENT || process.env.EMAIL_USER,
      subject: `New portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Message sent successfully." });
  } catch (err) {
    console.error("Error sending contact email:", err);
    res.status(500).json({ message: "Error sending message." });
  }
};

module.exports = {
  sendContactMessage,
};
