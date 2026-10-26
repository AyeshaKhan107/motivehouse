import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri && process.env.NODE_ENV !== "production") {
  console.warn("MONGODB_URI is not configured; inquiry storage is unavailable.");
}

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cache = globalThis.mongooseCache ?? {
  connection: null,
  promise: null,
};

globalThis.mongooseCache = cache;

export async function connectToDatabase() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (cache.connection) {
    return cache.connection;
  }

  if (!cache.promise) {
    cache.promise = mongoose.connect(uri, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 8000,
    });
  }

  try {
    cache.connection = await cache.promise;
    return cache.connection;
  } catch (error) {
    cache.promise = null;
    throw error;
  }
}
