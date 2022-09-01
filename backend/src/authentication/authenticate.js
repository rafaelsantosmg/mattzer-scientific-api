const { decodeToken } = require('../utils/tokenJWT');
const { User } = require('../database/models');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const { user } = decodeToken(token);
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const findUser = await User.findOne({
    where: { email: user.email },
    attributes: { exclude: 'password' },
  });
  if (!findUser) {
    return res.status(404).json({ message: 'Not Found' });
  }
  req.user = user;
  next();
};
