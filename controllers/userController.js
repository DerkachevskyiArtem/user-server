const createHttpError = require('http-errors');
const { User } = require('../db/models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body, file } = req;

    // console.log('file:', file);
    // console.log('body:', body);
    console.log('imgSrc:', body.imgSrc);

    const user = await User.create({
      ...body,
      imgSrc: file ? file.filename : null,
    });

    console.log(user);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const { user } = req;

    await user.destroy();

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    const { pagination } = req;
    const users = await User.findAll({
      ...pagination,
    });

    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const { user } = req;
    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};
module.exports.updateUser = async (req, res, next) => {
  try {
    const { user, validatedBody } = req;

    if (!user || !user.id) {
      throw createHttpError(400, 'User not found in request');
    }

    const updates = {
      ...validatedBody,
      imgSrc: req.file ? req.file.filename : user.imgSrc,
    };

    const [rowsUpdated, updatedUser] = await User.update(updates, {
      where: { id: user.id },
      returning: true,
    });

    res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};


