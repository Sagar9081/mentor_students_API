const { ObjectId } = require("mongodb");

const mongo = require("../shared/mongo");

const service = {
  getPosts() {
    return mongo.db.collection("student_data").find().toArray();
  },
  getPost(id) {
    return mongo.db.collection("student_data").findOne({ _id: ObjectId(id) });
  },
  createPost(data) {
    return mongo.db.collection("student_data").insert(data);
  },
  updatePost(id, data) {
    return mongo.db
      .collection("student_data")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: data },
        { returnDocument: "after" }
      );
  },
  deletePost(id) {
    return mongo.db.collection("student_data").remove({ _id: ObjectId(id) });
  },
};

module.exports = service;
