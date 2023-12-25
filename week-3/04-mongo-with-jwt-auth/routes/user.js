const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require('jsonwebtoken');

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const body = req.body;
  const user = await User.create(body);
  console.log(user);
  return res.json({ message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const admin = await User.find({
    username: username,
    password: password,
  }).exec();
  console.log(admin);
  if (admin == null) {
    return res.status(400).json({ error: "Invalid creds" });
  }
  const token = jwt.sign({ username }, "secret");
  return res.status(200).json({ token });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const coursesList = await Course.find({}).exec();
  return res.json(coursesList);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  console.log(username, courseId);
  let user = await User.find({ username });
  let course = await Course.findById(courseId);
  if (user == null || course == null) {
    return res.status(400).json({ message: "Invalid username or courseId" });
  }
  console.log(user)
  user[0].courses.push({ course });
await user[0].save();
  return res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const courseIds = user.courses.map(course => course.course);
  console.log(courseIds);

  const courses = await Course.find({ _id: { $in: courseIds } });

  return res.json({ courses });
});

module.exports = router;
