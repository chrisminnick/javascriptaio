router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({
        message: 'Login failed!',
      });
    }
    if (user) {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        res.status(401).json({
          message: 'Incorrect password',
        });
      }
      res.status(200).json({
        userId: user._id,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});
