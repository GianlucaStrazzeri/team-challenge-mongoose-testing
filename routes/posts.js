const express = require("express");
const router = express.Router();
const Task = require("../models/Post.js");
const Post = require("../models/Post.js");


router.post("/create", async(req, res) => {
    try {
        const post = await Post.create({...req.body});
        res.status(201).send(post);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a post" });
    }
});

router.get("/", async (req, res) => {
    try {
        // find all documents
        const posts = await Post.find({})
        res.status(201).send(posts)
    } catch (error) {
        console.error(error)
        res.status(500).send({message: "There was a problem trying to retrieve the posts"})
    }
})

router.get("/id/:_id", async (req, res) => {
    try {
        const id = req.params._id
        const post = await Post.findById(id)
        if(!Post) {
            return res.status(404).send({message: "Post not found"})
        }
        res.send(post);
    } catch (error) {
        console.error(error)
        res.status(500).send({message: "There was a problem trying to get the solicited post"})

    }
})

router.get("/title/:title", async (req, res) => {
    try {
        const title = req.params.title
        const post = await Post.find({title: title})
        if(!post) {
            return res.status(404).send({message: "Post not found"})
        }
        res.send(post);
    } catch (error) {
        console.error(error)
        res.status(500).send({message: "There was a problem trying to get the solicited post"})

    }
})



router.put("/id/:_id", async (req, res) => {
    try {
        const id = req.params._id
        const updatedPost = await Task.findByIdAndUpdate(id, {...req.body})
        if(!updatedPost) {
            return res.status(404).send({message: "Post with that id not found"})
        }
        res.json(updatedPost)
    } catch (error) {
        console.error(error)
        res.status(500).send({message: "There was a problem trying to update the solicited post"})
    }
})

router.delete("/id/:_id", async (req, res) => {
    try {
        const id = req.params._id
        const deletedPost = await Task.findByIdAndDelete(id)
        if(!deletedPost) {
            return res.status(404).send({message: "Post with that id not found"})
        }
        res.send({ message: "Post deleted successfully" });
    } catch (error) {
        console.error(error)
        res.status(500).send({message: "There was a problem trying to delete the solicited post"})
    }
})

router.get("/postsWithPagination", async (req, res) => {
    
})
module.exports = router;