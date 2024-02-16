const request = require("supertest")
const app = require("../index.js")
const Post = require("../models/Post.js")


describe("testing/posts", ()=>{
    const post={
        title:"Title",
        body:"Body"
    }


test("Create a post", async ()=>{

    let postsCount= await Post.countDocuments({});
    expect(postsCount).toBe(0)
    resPost = await request(app).post("/create").send(post).expect(201);

    postsCount =await Post.countDocuments({});
    expect(postsCount).toBe(1);
})
afterAll(() => {
    return Post.deleteMany();
});
})





