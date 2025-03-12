const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  staticImages: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', BlogSchema);

// API Route (Express)
router.post('/api/blogs', upload.array('images', 5), async (req, res) => {
  try {
    const { title, category, description, content } = req.body;
    
    // Handle image uploads
    const mainImage = req.files[0] ? req.files[0].path : '';
    const staticImages = req.files.slice(1).map(file => file.path);

    const newBlog = new Blog({
      title,
      category,
      description,
      content,
      image: mainImage,
      staticImages
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

