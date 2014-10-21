/**
 * Created by kevin on 2014-10-20.
 */

function processTouchEvent(e) {
    return Rx.Observable.fromArray(e.changedTouches).map(function (touch) {
        return {
            x: touch.pageX,
            y: touch.pageY,
            id: touch.identifier,
            toString: function () {
                return "(" + this.x + ", " + this.y + ") id = " + touch.identifier;
            }
        };
    });
}

function distance(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}