module.exports = {
  development: {
    PORT: 5000,
    dbAtlas:
      "mongodb+srv://niki:niki548444@cluster0.8me3yuw.mongodb.net/feedback_datas?retryWrites=true&w=majority",
    secretStr: "mnogoqkaparola",
    secretStrTwo: "mymnogoqkaparolatwo",
  },

  production: {
    PORT: 80,
  },
};
