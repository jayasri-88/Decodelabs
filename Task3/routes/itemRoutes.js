const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
router.post('/items', async (req, res) => {
    try {
        const { name, quantity, category } = req.body;

        if (!name || quantity == null || !category) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const item = await Item.create({ name, quantity, category });

        res.status(201).json({
            success: true,
            data: item
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();

        res.json({
            success: true,
            count: items.length,
            data: items
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
router.put('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found"
            });
        }

        res.json({ success: true, data: item });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
router.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found"
            });
        }

        res.json({
            success: true,
            message: "Item deleted"
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
module.exports = router;