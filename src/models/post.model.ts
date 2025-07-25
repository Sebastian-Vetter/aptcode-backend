import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    id: ({
        type: String,
        required: true,
        unique: true,
    }),
    name: ({
        type: String,
        required: true,
        unique: true,
    }),
    description: ({
        type: String,
        required: true,
    }),
    image: ({
        type: String,
        required: true,
    }),
    published: ({
        type: Boolean,
        required: true,
    }),
    releaseDate: ({
        type: String,
        required: true,
    }),
    author: ({
        name: ({
            type: String,
            required: true,
        }),
        description: ({
            type: String,
            required: true,
        }),
        image: ({
            type: String,
            required: true,
        })
    }),
    topic: ({
        type: [String],
        required: true,
    }),
    htmlContent: ({
        type: String,
        required: true,
    })
}, {collection: 'posts'});

export const postModel = mongoose.model('PostType', postSchema);