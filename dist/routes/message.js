"use strict";

const express = require("express");

const router = express.Router();

const isAuth = require("../middleware/is-auth");

const messagesController = require("../controllers/message");

router.get("/list/:id", isAuth, messagesController.getMessages);
router.post("/create", isAuth, messagesController.postCreateMessage);
router.put("/update", isAuth, messagesController.putUpdateMessage);
router.delete("/delete", isAuth, messagesController.deleteMessage);
module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInJvdXRlciIsIlJvdXRlciIsImlzQXV0aCIsIm1lc3NhZ2VzQ29udHJvbGxlciIsImdldCIsImdldE1lc3NhZ2VzIiwicG9zdCIsInBvc3RDcmVhdGVNZXNzYWdlIiwicHV0IiwicHV0VXBkYXRlTWVzc2FnZSIsImRlbGV0ZSIsImRlbGV0ZU1lc3NhZ2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBdkI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixPQUFPLENBQUNHLE1BQVIsRUFBZjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdILE9BQU8sQ0FBQyx1QkFBRCxDQUF0Qjs7QUFFQSxNQUFNSSxrQkFBa0IsR0FBR0osT0FBTyxDQUFDLHdCQUFELENBQWxDOztBQUVBQyxNQUFNLENBQUNJLEdBQVAsQ0FBVyxXQUFYLEVBQXdCRixNQUF4QixFQUFnQ0Msa0JBQWtCLENBQUNFLFdBQW5EO0FBRUFMLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLFNBQVosRUFBdUJKLE1BQXZCLEVBQStCQyxrQkFBa0IsQ0FBQ0ksaUJBQWxEO0FBRUFQLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFNBQVgsRUFBc0JOLE1BQXRCLEVBQThCQyxrQkFBa0IsQ0FBQ00sZ0JBQWpEO0FBRUFULE1BQU0sQ0FBQ1UsTUFBUCxDQUFjLFNBQWQsRUFBeUJSLE1BQXpCLEVBQWlDQyxrQkFBa0IsQ0FBQ1EsYUFBcEQ7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixNQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5jb25zdCBpc0F1dGggPSByZXF1aXJlKFwiLi4vbWlkZGxld2FyZS9pcy1hdXRoXCIpO1xuXG5jb25zdCBtZXNzYWdlc0NvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi4vY29udHJvbGxlcnMvbWVzc2FnZVwiKTtcblxucm91dGVyLmdldChcIi9saXN0LzppZFwiLCBpc0F1dGgsIG1lc3NhZ2VzQ29udHJvbGxlci5nZXRNZXNzYWdlcyk7XG5cbnJvdXRlci5wb3N0KFwiL2NyZWF0ZVwiLCBpc0F1dGgsIG1lc3NhZ2VzQ29udHJvbGxlci5wb3N0Q3JlYXRlTWVzc2FnZSk7XG5cbnJvdXRlci5wdXQoXCIvdXBkYXRlXCIsIGlzQXV0aCwgbWVzc2FnZXNDb250cm9sbGVyLnB1dFVwZGF0ZU1lc3NhZ2UpO1xuXG5yb3V0ZXIuZGVsZXRlKFwiL2RlbGV0ZVwiLCBpc0F1dGgsIG1lc3NhZ2VzQ29udHJvbGxlci5kZWxldGVNZXNzYWdlKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=