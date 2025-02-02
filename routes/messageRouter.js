const {Router} = require("express");

module.exports = (messages) => {
    const messageRouter = Router();
    messageRouter.get("/:index", (req, res) => {
    const index = req.params.index;
    console.log(messages);
    const message = messages[index];
    res.render("message", {message: message});
  })
  return messageRouter; 
};