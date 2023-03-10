exports.allAccess = (req, res) => {
  res.status(200).send("Public Content my foot.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
 