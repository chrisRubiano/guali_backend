const { UserService, PostService } = require('../services');

module.exports = {
  create: async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    try {
      const user = await UserService.findOneById(idUser);
      const post = await PostService.create(body);
      const userWithPost = await UserService.addPost(user, post);
      res.status(201).json(userWithPost);
    } catch (error) {
      res.status(400).json({ message: 'error adding post to user', error });
    }
  },
  findAll: async (req, res) => {
    const { idUser } = req.params;
    try {
      const user = await UserService.findOneById(idUser);
      const { posts } = user;
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json({ message: 'Error getting user posts', error });
    }
  },
  findOne: async (req, res) => {
    const { idUser, idPost } = req.params;
    try {
      const user = await UserService.findOneById(idUser);
      const post = PostService.findOneByIdInUser(idPost, user);
      if (!post) res.status(404).json({ message: 'Post not found' });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: 'Error getting user post by id', error });
    }
  },
  deleteOne: async (req, res) => {
    const { idUser, idPost } = req.params;
    try {
      const user = await UserService.findOneById(idUser);
      if (!user) res.status(404).json({ message: 'User not found' });
      const post = PostService.findOneByIdInUser(idPost, user);
      if (!post) res.status(404).json({ message: 'Post not found' });
      await PostService.updateOneByIdInUser(idPost, user, { is_active: false });
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ message: 'Error getting user post by id', error });
    }
  },
};
