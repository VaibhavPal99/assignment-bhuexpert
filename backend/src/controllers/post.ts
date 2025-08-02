import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET all posts with optional filters
export const getPosts = async (req: Request, res: Response) => {
  try {
    const city = req.query.city as string;
    const type = req.query.type as string;
    const bedroom = req.query.bedroom as string;
    const minPrice = req.query.minPrice as string;
    const maxPrice = req.query.maxPrice as string;

    const posts = await prisma.post.findMany({
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
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

// GET a single post by ID
export const getPost = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({ ...post, isSaved: false });
  } catch (err) {
    console.error("Failed to get post:", err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

// ADD a new post
export const addPost = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const newPost = await prisma.post.create({
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
  } catch (err) {
    console.error("Failed to create post:", err);
    res.status(500).json({ message: "Failed to create post" });
  }
};
