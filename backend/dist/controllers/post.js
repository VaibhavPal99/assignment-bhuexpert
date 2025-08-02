"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPost = exports.getPost = exports.getPosts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// GET all posts with optional filters
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = req.query.city;
        const type = req.query.type;
        const bedroom = req.query.bedroom;
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const posts = yield prisma.post.findMany({
            where: {
                city: city || undefined,
                propertyType: type || undefined,
                bedrooms: bedroom ? parseInt(bedroom) : undefined,
                price: {
                    gte: minPrice ? parseInt(minPrice) : undefined,
                    lte: maxPrice ? parseInt(maxPrice) : undefined,
                },
            },
            orderBy: {
                listedDate: "desc",
            },
        });
        res.status(200).json(posts);
    }
    catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ message: "Failed to get posts" });
    }
});
exports.getPosts = getPosts;
// GET a single post by ID
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const post = yield prisma.post.findUnique({
            where: { id },
        });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.status(200).json(Object.assign(Object.assign({}, post), { isSaved: false }));
    }
    catch (err) {
        console.error("Failed to get post:", err);
        res.status(500).json({ message: "Failed to get post" });
    }
});
exports.getPost = getPost;
// ADD a new post
const addPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const newPost = yield prisma.post.create({
            data: {
                title: body.title,
                description: body.description,
                price: body.price,
                city: body.city,
                state: body.state,
                pincode: body.pincode,
                lat: body.lat,
                lng: body.lng,
                propertyType: body.propertyType,
                bedrooms: body.bedrooms,
                bathrooms: body.bathrooms,
                area: body.area,
                images: body.images,
                status: body.status,
                nearbyAmenities: body.nearbyAmenities,
            },
        });
        res.status(200).json(newPost);
    }
    catch (err) {
        console.error("Failed to create post:", err);
        res.status(500).json({ message: "Failed to create post" });
    }
});
exports.addPost = addPost;
