const mongoose = require( "mongoose" );

const bookmarkSchema = mongoose.Schema({
    id : {
        type : String,
        require : true,
        unique : true
    },
    title : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    url : {
        type : String,
        require : true
    },
    rating : {
        type : Number,
        require : true
    }
});

const bookmarksCollection = mongoose.model( 'bookmarks', bookmarkSchema );

const Bookmarks = {
    createBookmark : function( newBookmark) {
        return bookmarksCollection
        .create( newBookmark )
        .then( createdBookmark => {
            return createdBookmark;
        })
        .catch( err => {
            return err;
        })
    },
    getAllBookmarks : function() {
        return bookmarksCollection
        .find()
        .then( allBookmarks => {
            return allBookmarks;
        })
        .catch( err => {
            return err;
        });
    },
    getBookmark : function( title ) {
        return bookmarksCollection
        .find({title : title})
        .then( titleBookmark => {
            return titleBookmark;
        })
        .catch( err => {
            return err;
        });
    },
    deleteBookmark : function( id ) {
        return bookmarksCollection
        .deleteOne({ id : id})
        .then( results =>{
            return results;
        })
        .catch( err => {
            return err;
        });
    },
    updateBookmark : function( id, newItems ) {
        return bookmarksCollection
        .updateOne({id : id}, {$set:newItems})
        .then( results =>{
            return results;
        })
        .catch( err => {
            return err;
        });
    },
}

module.exports = { Bookmarks };