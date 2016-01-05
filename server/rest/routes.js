
var Controllers = rootRequire('server/modules/controllers');

exports.routes = function () {

    return [
        { method: "GET", path: "/users", config: Controllers.User.findAll},
        { method: "POST", path: "/users", config: Controllers.User.findAll}
    ];
}
