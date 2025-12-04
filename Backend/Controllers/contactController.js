exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    res.status(200).json({
      success: true,
      message: "Message received",
      data: { name, email, message },
    });
  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ success: false });
  }
};
