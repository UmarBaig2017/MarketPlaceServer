const mongoose = require('mongoose');
const ListingReportSchema = new mongoose.Schema({
    description: {
        type: String
    },
    listingID: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    email: {
        type: String
    },
    sellerFirebaseUID: {
        type: String
    },
    sellerName: {
        type: String
    },
    Action: {
        type: String
    },
    title: {
        type: String
    },
    listingImages: [String],
    listingDescription: { type: String },
    listingTitle: {
        type:String
    },
});
ListingReportSchema.index({name:'text','title':"text"})
ListingReportSchema.index({geometry:"2dsphere"});
module.exports = mongoose.model('ReportListing', ListingReportSchema);