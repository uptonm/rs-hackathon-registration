const mongoose = require("mongoose");
const User = mongoose.model("users");
let joe;
describe("User Testing", () => {
  beforeEach(async () => {
    joe = await new User({
      first: "Joe",
      last: "Smith",
      email: "smithj@giggle.io"
    }).save();
  });

  afterEach(async () => {
    await User.findOneAndRemove({ first: "Joe" });
  });

  test("Saving user to database", async () => {
    const exists = await User.findOne({ first: "Joe" });
    expect(exists.first).toEqual("Joe");
  });

  test("Modifying user in database", async () => {
    const modifying = await User.findByIdAndUpdate(joe._id, { last: "Warren" });
    const exists = await User.findById(joe._id);
    expect(exists).toBeTruthy();
    expect(exists.last).toEqual("Warren");
  });

  test("Removing user from database", async () => {
    const removed = await User.findByIdAndDelete(joe._id);
    const exists = await User.findById(joe._id);
    expect(exists).toBeFalsy();
  });
});
