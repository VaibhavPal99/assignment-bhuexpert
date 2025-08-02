export interface ILocation {
    city : String;
    state : string;
    pincode : string;
    coordinates : {
        lat : number;
        lng : number;
    }
}

export interface IProperty{
    _id : string;
    title : string;
    description : string;
    price : number;
    location : Location;
    propertyType : string;
    bedrooms : number;
    bathrooms : number;
    area : number;
    amenities : string[];
    images : string[];
    listedDate : Date;
    status : string;
    nearbyAmenities ?: INearbyAmenity[];
}

export interface INearbyAmenity{
    type : string;
    name : string;
    address : string;
    distance : string;
    duration : string;
    placeId : string;
    rating ?: number;
    userRatingsTotal ?:number;
}

