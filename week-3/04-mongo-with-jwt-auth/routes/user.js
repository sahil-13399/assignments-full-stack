const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const body = req.body;
  await User.create(body);
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
  const courseId = req.query.courseId;
  const username = req.headers.username;
  const user = await User.find({ username });
  const course = await Course.findById(courseId);
  if (user == null || course == null) {
    return res.status(400).json({ message: "Invalid username or courseId" });
  }
  user.courses.push(courseId);
  await User.save(user);
  return res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
