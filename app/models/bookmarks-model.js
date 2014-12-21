angular.module('maxwell.models.bookmarks', [])
    .service('bookmarks', function BookmarksService($http, $q) {
      var URLS = {
            FETCH: 'data/bookmarks.json'
          },
          bookmarks,
          bookmarksModel = this;

      function extract(result) {
      }

      function cacheBookmarks(result) {
      }

      function findBookmark(bookmarkId) {
      }

      bookmarksModel.getBookmarks = function() {

      };

      bookmarksModel.getBookmarkById = function(bookmarkId) {

      };

      bookmarksModel.createBookmark = function(bookmark) {

      };

      bookmarksModel.updateBookmark = function(bookmark) {

      };

      bookmarksModel.deleteBookmark = function(bookmark) {

      };

      bookmarksModel.getBookmarksForCategory = function(category) {

      };
    });
