var invoker = {
    rooms: {},
    fallbackHits: {},
    fallbackWarnings: true,
    fallbackMode: "warn"
};

invoker.roomName = function (roomID) {
    return "room" + roomID.toString();
};

invoker.registerRoom = function (roomID, handlers) {
    invoker.rooms[roomID] = handlers;
    return handlers;
};

invoker.setFallbackMode = function (mode) {
    var allowed = ["allow", "warn", "strict"];
    if (allowed.indexOf(mode) === -1)
        throw new Error("Invoker error: invalid fallback mode [" + mode + "]");

    invoker.fallbackMode = mode;
};

invoker.trackFallback = function (roomID, roomName) {
    var key = roomID.toString();
    if (!Object.prototype.hasOwnProperty.call(invoker.fallbackHits, key)) {
        invoker.fallbackHits[key] = {
            roomID: roomID,
            roomName: roomName,
            count: 0
        };
    }

    invoker.fallbackHits[key].count++;

    if (invoker.fallbackMode === "warn" && invoker.fallbackWarnings && invoker.fallbackHits[key].count === 1 && typeof console !== "undefined" && typeof console.warn === "function")
        console.warn("Invoker fallback used for " + roomName + " [roomID=" + roomID + "]");
};

invoker.getFallbackReport = function () {
    var report = [];
    for (var key in invoker.fallbackHits) {
        if (Object.prototype.hasOwnProperty.call(invoker.fallbackHits, key)) {
            report.push({
                roomID: invoker.fallbackHits[key].roomID,
                roomName: invoker.fallbackHits[key].roomName,
                count: invoker.fallbackHits[key].count
            });
        }
    }
    report.sort(function (a, b) { return a.roomID - b.roomID; });
    return report;
};

invoker.resetFallbackReport = function () {
    invoker.fallbackHits = {};
};

invoker.error = function (roomID, commandName, message) {
    var text = "Invoker error: " + message + " [roomID=" + roomID + ", command=" + commandName + "]";
    if (typeof g !== "undefined" && typeof g.error === "function")
        g.error("invoker", text);
    throw new Error(text);
};

invoker.resolveRoom = function (roomID) {
    if (Object.prototype.hasOwnProperty.call(invoker.rooms, roomID))
        return invoker.rooms[roomID];

    var roomName = invoker.roomName(roomID);
    if (typeof window[roomName] !== "undefined") {
        if (invoker.fallbackMode === "strict")
            invoker.error(roomID, "resolveRoom", "fallback disabled for unregistered room");

        invoker.trackFallback(roomID, roomName);
        invoker.rooms[roomID] = window[roomName];
        return window[roomName];
    }

    return null;
};

invoker.invoke = function (roomID, commandName) {
    var room = invoker.resolveRoom(roomID);
    var args = Array.prototype.slice.call(arguments, 2);

    if (room === null)
        invoker.error(roomID, commandName, "room not found");

    if (typeof room[commandName] !== "function")
        invoker.error(roomID, commandName, "command not found");

    return room[commandName].apply(room, args);
};

invoker.invokeCurrent = function (commandName) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.unshift(commandName);
    args.unshift(g.roomID);
    return invoker.invoke.apply(invoker, args);
};
