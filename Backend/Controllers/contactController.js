const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_KEY);

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const msg = {
      to: process.env.CONTACT_TO,
      from: process.env.CONTACT_FROM,
      subject: `New Portfolio Message from ${name}`,
      text: message,
      html: `
        <h3>Portfolio Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await sgMail.send(msg);

    res.status(200).json({
      success: true,
      message: "Message sent!",
    });
  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ success: false });
  }
};
