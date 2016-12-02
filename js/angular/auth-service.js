var app = angular.module('baseApp');

app.service("authService", function() {
    var db = firebase.database();

    this.login = function(email, password, success, fail) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(msg) {
            success("Successfully signed in.");
        })
        .catch(function(error) {
            fail(error.message);
        });
    };

    this.logout = function(success, fail) {
        firebase.auth().signOut().then(function() {
            success("Successfully signed out.");
        }, function(error) {
            fail(error.message);
        });
    };

    this.getSignedInUser = function(returnCallback) {
        var user = firebase.auth().currentUser;
        returnCallback(user);
    };
});
