// Creating a new post
router.post('', validateToken, (req, res, next) => {
  const post = new Post({
    text: req.body.text,
  });
  post.save().then((createdPost) => {
    res.status(201).json({
      message: 'Post added successfully',
      post: {
        ...createdPost,
        id: createdPost._id,
      },
    });
  });
});
