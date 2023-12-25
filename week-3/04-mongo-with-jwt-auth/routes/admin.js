const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const admin = await Admin.create({ username, password, isAdmin: true });
  console.log(admin);
  return res.status(200).json({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const admin = await Admin.find({ username: username, password: password }).exec();
  console.log(admin);
  if (admin == null) {
    return res.status(400).json({ error: "Invalid creds" });
  }
  const token = jwt.sign({ username }, "secret");
  return res.status(200).json({ token });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const course = req.body;
  const savedCourse = await Course.create(course);
  console.log(savedCourse);
  return res.status(200).json({ message: "Course created successfully", courseId : savedCourse });
});

router.get("/courses", adminMiddleware, (req, res) => {
// Implement fetching all courses logic
    const coursesList = Course.find({}).exec();
    return coursesList;
});

module.exports = router;
