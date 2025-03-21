// schema/blogSchema.js
import mongoose from 'mongoose';

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

export default Blog;
