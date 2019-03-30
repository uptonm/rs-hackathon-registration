const mongoose = require("mongoose");
const colors = require("colors");
const User = require("../models/user.model");

const error = {
  400: {
    message: "Error, bad request"
  },
  403: {
    message: "Error, request forbidden"
  },
  404: {
    message: "Error, user not found"
  }
};

consoleOutput = (route, request, status) => {
  if (status === 200) {
    console.log(`${route} - ${colors.blue(request)} - ${colors.green(status)}`);
  } else {
    console.log(`${route} - ${colors.blue(request)} - ${colors.red(status)}`);
  }
};

exports.get = async (req, res) => {
  if (req.query.key === process.env.QUERYKEY) {
    const exists = await User.find({});
    if (exists && exists.length > 0) {
      consoleOutput("/api/users", "GET", 200);
      return res.status(200).send(exists);
    }
    consoleOutput("/api/users", "GET", 400);
    return res.status(404).send(error[404]);
  } else {
    consoleOutput("/api/users", "GET", 403);
    return res.status(403).send(error[403]);
  }
};

exports.getOne = async (req, res) => {
  if (req.query.key === process.env.QUERYKEY) {
    const exists = await User.findById(req.params.id);
    if (exists) {
      consoleOutput(`/api/users/${req.params.id}`, "GET", 200);
      return res.status(200).send(exists);
    }
    consoleOutput(`/api/users/${req.params.id}`, "GET", 400);
    return res.status(404).send(error[404]);
  } else {
    consoleOutput("/api/users", "GET", 403);
    return res.status(403).send(error[403]);
  }
};

exports.post = async (req, res) => {
  if (req.query.key === process.env.QUERYKEY) {
    const exists = await User.findOne(req.body);
    if (!exists || exists.length === 0) {
      const user = await new User(req.body).save();
      consoleOutput("/api/users", "POST", 200);
      return res.status(200).send(user);
    }
    consoleOutput("/api/users", "POST", 400);
    return res.status(400).send(error[400]);
  } else {
    consoleOutput("/api/users", "GET", 403);
    return res.status(403).send(error[403]);
  }
};

exports.put = async (req, res) => {
  if (req.query.key === process.env.QUERYKEY) {
    const exists = await User.findById(req.params.id);
    if (exists) {
      const update = await User.findByIdAndUpdate(exists._id, req.body);
      consoleOutput(`/api/users/${req.params.id}`, "PUT", 200);
      return res.status(200).send(update);
    }
    consoleOutput(`/api/users${req.params.id}`, "PUT", 404);
    return res.status(404).send(error[404]);
  } else {
    consoleOutput("/api/users", "GET", 403);
    return res.status(403).send(error[403]);
  }
};

exports.delete = async (req, res) => {
  if (req.query.key === process.env.QUERYKEY) {
    const exists = await User.findById(req.params.id);
    if (exists) {
      const response = await User.findByIdAndDelete(exists._id);
      consoleOutput(`/api/users/${req.params.id}`, "DELETE", 200);
      return res.status(200).send({ message: `User ${req.params.id} deleted` });
    }
    consoleOutput(`/api/users/${req.params.id}`, "DELETE", 404);
    return res.status(404).send(error[404]);
  } else {
    consoleOutput("/api/users", "GET", 403);
    return res.status(403).send(error[403]);
  }
};
