var gameClass = module.exports = function (id) {
    "use strict";
    this.id = id;
};

gameClass.prototype.addBoard = function (board) {
    "use strict";
    if (this.boards === undefined) {
        this.boards = {};
    }
    this.boards[board.id] = board;
};

gameClass.prototype.addUser = function (user) {
    "use strict";
    if (this.users === undefined) {
        this.users = {};
    }
    this.users[user.username] = user;
};
