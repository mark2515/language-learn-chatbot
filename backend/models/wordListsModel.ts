import mongoose from 'mongoose'

const wordListsSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false, // temporary
        ref: 'User',
    },
    rank: {
        type: String,
        required: true,
        unique: true,
    },
    word: {
        type: String,
        required: true,
    }
}, 
)

const WordLists = mongoose.model('Word', wordListsSchema)

export default WordLists