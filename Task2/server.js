const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
let notes = [];
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Study Notes API is running "
    });
});
app.get('/notes', (req, res) => {
    res.status(200).json({
        success: true,
        count: notes.length,
        data: notes
    });
});
app.post('/notes', (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || title.trim().length < 3) {
            return res.status(400).json({
                success: false,
                message: "Title must be at least 3 characters long"
            });
        }
        if (!content || content.trim().length < 5) {
            return res.status(400).json({
                success: false,
                message: "Content must be at least 5 characters long"
            });
        }
        const newNote = {
            id: Date.now(),
            title: title.trim(),
            content: content.trim(),
            createdAt: new Date().toISOString()
        };
        notes.push(newNote);
        res.status(201).json({
            success: true,
            message: "Note created successfully ",
            data: newNote
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});