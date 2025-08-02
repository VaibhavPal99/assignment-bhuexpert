"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const locationSchema = new mongoose_1.Schema({
    city: String,
    state: String,
    pincode: String
});
const nearbyAmenitySchema = new mongoose_1.Schema({
    type: String,
    name: String,
    address: String,
    distance: String,
    duration: String,
    placeId: String,
    rating: Number,
    userRatingsTotal: Number,
});
const propertySchna = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: String,
    price: Number,
    location: locationSchema,
    propertyType: String,
    bedrooms: Number,
    bathrooms: Number,
    area: Number,
    amenities: [String],
    images: [String],
    listedDate: { type: Date, default: Date.now },
    status: String,
    nearbyAmenities: [nearbyAmenitySchema],
});
const Property = (0, mongoose_1.model)('Property', propertySchna);
exports.default = Property;
