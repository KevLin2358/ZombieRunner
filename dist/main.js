/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Player = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n\nvar Platforms = __webpack_require__(/*! ./scripts/platform */ \"./src/scripts/platform.js\");\n\nvar Controller = __webpack_require__(/*! ./scripts/controller */ \"./src/scripts/controller.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById('canvas1');\n  var ctx = canvas.getContext('2d');\n  var canvasWidth = 1000;\n  var canvasHeight = 500;\n  var player = new Player(canvasWidth, canvasHeight);\n  var platforms = new Platforms();\n  new Controller(player);\n  requestAnimationFrame(loop);\n\n  function loop() {\n    ctx.clearRect(0, 0, canvasWidth, canvasHeight);\n    platforms.drawPlatforms(ctx);\n    player.movePlayer();\n    player.drawPlayer(ctx);\n    requestAnimationFrame(loop);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGlEQUFELENBQXRCOztBQUNBLElBQU1DLFNBQVMsR0FBR0QsbUJBQU8sQ0FBQyxxREFBRCxDQUF6Qjs7QUFDQSxJQUFNRSxVQUFVLEdBQUdGLG1CQUFPLENBQUMseURBQUQsQ0FBMUI7O0FBRUFHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBYjtBQUNBLE1BQUlDLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQSxNQUFNQyxXQUFXLEdBQUcsSUFBcEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsR0FBckI7QUFHQSxNQUFJQyxNQUFNLEdBQUcsSUFBSVosTUFBSixDQUFXVSxXQUFYLEVBQXdCQyxZQUF4QixDQUFiO0FBQ0EsTUFBSUUsU0FBUyxHQUFHLElBQUlYLFNBQUosRUFBaEI7QUFDQSxNQUFJQyxVQUFKLENBQWVTLE1BQWY7QUFDQUUsRUFBQUEscUJBQXFCLENBQUNDLElBQUQsQ0FBckI7O0FBRUEsV0FBU0EsSUFBVCxHQUFlO0FBQ1hQLElBQUFBLEdBQUcsQ0FBQ1EsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JOLFdBQXBCLEVBQWlDQyxZQUFqQztBQUNBRSxJQUFBQSxTQUFTLENBQUNJLGFBQVYsQ0FBd0JULEdBQXhCO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ00sVUFBUDtBQUNBTixJQUFBQSxNQUFNLENBQUNPLFVBQVAsQ0FBa0JYLEdBQWxCO0FBQ0FNLElBQUFBLHFCQUFxQixDQUFDQyxJQUFELENBQXJCO0FBQ0g7QUFDSixDQW5CRCIsInNvdXJjZXMiOlsid2VicGFjazovL3pvbWJpZVJ1bm5lci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvcGxheWVyXCIpO1xuY29uc3QgUGxhdGZvcm1zID0gcmVxdWlyZShcIi4vc2NyaXB0cy9wbGF0Zm9ybVwiKTtcbmNvbnN0IENvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2NvbnRyb2xsZXJcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczEnKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgY2FudmFzV2lkdGggPSAxMDAwO1xuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IDUwMDtcblxuXG4gICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG4gICAgbGV0IHBsYXRmb3JtcyA9IG5ldyBQbGF0Zm9ybXMoKTtcbiAgICBuZXcgQ29udHJvbGxlcihwbGF5ZXIpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcblxuICAgIGZ1bmN0aW9uIGxvb3AoKXtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgICAgcGxhdGZvcm1zLmRyYXdQbGF0Zm9ybXMoY3R4KTtcbiAgICAgICAgcGxheWVyLm1vdmVQbGF5ZXIoKTtcbiAgICAgICAgcGxheWVyLmRyYXdQbGF5ZXIoY3R4KTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIH1cbn0pOyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyZXF1aXJlIiwiUGxhdGZvcm1zIiwiQ29udHJvbGxlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwicGxheWVyIiwicGxhdGZvcm1zIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibG9vcCIsImNsZWFyUmVjdCIsImRyYXdQbGF0Zm9ybXMiLCJtb3ZlUGxheWVyIiwiZHJhd1BsYXllciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/controller.js":
/*!***********************************!*\
  !*** ./src/scripts/controller.js ***!
  \***********************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Controller = function Controller(player) {\n  \"use strict\";\n\n  _classCallCheck(this, Controller);\n\n  document.addEventListener('keydown', function (e) {\n    switch (e.keyCode) {\n      case 68:\n        // d button to move right\n        player.moveRight();\n        break;\n\n      case 65:\n        // a button to move left\n        player.moveLeft();\n        break;\n\n      case 32:\n        // spacebar for jump\n        console.log(\"space down\");\n\n        if (!player.is_jump) {\n          player.is_jump = true;\n          player.jump();\n        }\n\n        break;\n    }\n  });\n  document.addEventListener('keyup', function (e) {\n    switch (e.keyCode) {\n      case 68:\n        // d button to move right\n        if (player.speed > 0) {\n          player.stop();\n          player.fall();\n        }\n\n        break;\n\n      case 65:\n        // a button to move left\n        if (player.speed < 0) {\n          player.stop();\n          player.fall();\n        }\n\n        break;\n\n      case 32:\n        // spacebar for jump\n        console.log(\"space up\");\n\n        if (player.in_air < 0) {\n          player.fall();\n        }\n\n        break;\n    }\n  });\n};\n\nmodule.exports = Controller;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b21iaWVSdW5uZXIvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzPzllOWMiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsInBsYXllciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJjb25zb2xlIiwibG9nIiwiaXNfanVtcCIsImp1bXAiLCJzcGVlZCIsInN0b3AiLCJmYWxsIiwiaW5fYWlyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7SUFBTUEsVSxHQUNGLG9CQUFZQyxNQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWZDLEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFNO0FBQ3ZDLFlBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNJLFdBQUssRUFBTDtBQUFTO0FBQ0xKLFFBQUFBLE1BQU0sQ0FBQ0ssU0FBUDtBQUNBOztBQUVKLFdBQUssRUFBTDtBQUFTO0FBQ0xMLFFBQUFBLE1BQU0sQ0FBQ00sUUFBUDtBQUNBOztBQUVKLFdBQUssRUFBTDtBQUFTO0FBQ1RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7O0FBQ0ksWUFBRyxDQUFDUixNQUFNLENBQUNTLE9BQVgsRUFBbUI7QUFDZlQsVUFBQUEsTUFBTSxDQUFDUyxPQUFQLEdBQWlCLElBQWpCO0FBQ0FULFVBQUFBLE1BQU0sQ0FBQ1UsSUFBUDtBQUNIOztBQUNEO0FBZlI7QUFpQkgsR0FsQkQ7QUFvQkFULEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFNO0FBQ3JDLFlBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNJLFdBQUssRUFBTDtBQUFTO0FBQ0wsWUFBSUosTUFBTSxDQUFDVyxLQUFQLEdBQWUsQ0FBbkIsRUFBc0I7QUFDbEJYLFVBQUFBLE1BQU0sQ0FBQ1ksSUFBUDtBQUNBWixVQUFBQSxNQUFNLENBQUNhLElBQVA7QUFDSDs7QUFDRDs7QUFFSixXQUFLLEVBQUw7QUFBUztBQUNMLFlBQUliLE1BQU0sQ0FBQ1csS0FBUCxHQUFlLENBQW5CLEVBQXNCO0FBQ2xCWCxVQUFBQSxNQUFNLENBQUNZLElBQVA7QUFDQVosVUFBQUEsTUFBTSxDQUFDYSxJQUFQO0FBQ0g7O0FBQ0Q7O0FBRUosV0FBSyxFQUFMO0FBQVM7QUFDVE4sUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjs7QUFDSSxZQUFHUixNQUFNLENBQUNjLE1BQVAsR0FBZ0IsQ0FBbkIsRUFBc0I7QUFDbEJkLFVBQUFBLE1BQU0sQ0FBQ2EsSUFBUDtBQUNIOztBQUNEO0FBcEJSO0FBc0JILEdBdkJEO0FBd0JILEM7O0FBRUxFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpCLFVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29udHJvbGxlcntcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIpe1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT57XG4gICAgICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgICAgICBjYXNlIDY4OiAvLyBkIGJ1dHRvbiB0byBtb3ZlIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDY1OiAvLyBhIGJ1dHRvbiB0byBtb3ZlIGxlZnRcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzMjogLy8gc3BhY2ViYXIgZm9yIGp1bXBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNwYWNlIGRvd25cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFwbGF5ZXIuaXNfanVtcCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuaXNfanVtcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuanVtcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PntcbiAgICAgICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgNjg6IC8vIGQgYnV0dG9uIHRvIG1vdmUgcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZmFsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlIDY1OiAvLyBhIGJ1dHRvbiB0byBtb3ZlIGxlZnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZmFsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzMjogLy8gc3BhY2ViYXIgZm9yIGp1bXBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNwYWNlIHVwXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuaW5fYWlyIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmZhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBDb250cm9sbGVyOyJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/controller.js\n");

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Platforms = /*#__PURE__*/function () {\n  \"use strict\";\n\n  function Platforms() {\n    _classCallCheck(this, Platforms);\n  }\n\n  _createClass(Platforms, [{\n    key: \"drawPlatforms\",\n    value: function drawPlatforms(ctx) {\n      for (var i = 0; i < plat.length; i++) {\n        ctx.fillStyle = plat[i].color;\n        ctx.fillRect(plat[i].x, plat[i].y, plat[i].width, plat[i].height);\n      }\n    }\n  }]);\n\n  return Platforms;\n}(); // Platform Objects\n\n\nground = {\n  x: 0,\n  y: 470,\n  width: 1000,\n  height: 30,\n  color: '#155261'\n};\nplat1 = {\n  x: 50,\n  y: 80,\n  width: 50,\n  height: 30,\n  color: 'yellow'\n};\nplat2 = {\n  x: 50,\n  y: 300,\n  width: 50,\n  height: 30,\n  color: 'red'\n};\nplat3 = {\n  x: 50,\n  y: 270,\n  width: 50,\n  height: 30,\n  color: 'blue'\n};\nplat4 = {\n  x: 100,\n  y: 370,\n  width: 50,\n  height: 10,\n  color: 'black'\n};\nvar plat = [];\nplat.push(ground, plat1, plat2, plat3, plat4);\nmodule.exports = Platforms;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b21iaWVSdW5uZXIvLi9zcmMvc2NyaXB0cy9wbGF0Zm9ybS5qcz84NmRkIl0sIm5hbWVzIjpbIlBsYXRmb3JtcyIsImN0eCIsImkiLCJwbGF0IiwibGVuZ3RoIiwiZmlsbFN0eWxlIiwiY29sb3IiLCJmaWxsUmVjdCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJncm91bmQiLCJwbGF0MSIsInBsYXQyIiwicGxhdDMiLCJwbGF0NCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsUzs7O0FBQ0YsdUJBQWE7QUFBQTtBQUNaOzs7O1dBRUQsdUJBQWNDLEdBQWQsRUFBa0I7QUFDZCxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBekIsRUFBaUNGLENBQUMsRUFBbEMsRUFBc0M7QUFDbENELFFBQUFBLEdBQUcsQ0FBQ0ksU0FBSixHQUFnQkYsSUFBSSxDQUFDRCxDQUFELENBQUosQ0FBUUksS0FBeEI7QUFDQUwsUUFBQUEsR0FBRyxDQUFDTSxRQUFKLENBQWFKLElBQUksQ0FBQ0QsQ0FBRCxDQUFKLENBQVFNLENBQXJCLEVBQXdCTCxJQUFJLENBQUNELENBQUQsQ0FBSixDQUFRTyxDQUFoQyxFQUFtQ04sSUFBSSxDQUFDRCxDQUFELENBQUosQ0FBUVEsS0FBM0MsRUFBa0RQLElBQUksQ0FBQ0QsQ0FBRCxDQUFKLENBQVFTLE1BQTFEO0FBQ0g7QUFDSjs7OztLQUVMOzs7QUFDQUMsTUFBTSxHQUFFO0FBQ0pKLEVBQUFBLENBQUMsRUFBRSxDQURDO0FBRUpDLEVBQUFBLENBQUMsRUFBRSxHQUZDO0FBR0pDLEVBQUFBLEtBQUssRUFBRSxJQUhIO0FBSUpDLEVBQUFBLE1BQU0sRUFBRSxFQUpKO0FBS0pMLEVBQUFBLEtBQUssRUFBRTtBQUxILENBQVI7QUFRQU8sS0FBSyxHQUFFO0FBQ0hMLEVBQUFBLENBQUMsRUFBRSxFQURBO0FBRUhDLEVBQUFBLENBQUMsRUFBRSxFQUZBO0FBR0hDLEVBQUFBLEtBQUssRUFBRSxFQUhKO0FBSUhDLEVBQUFBLE1BQU0sRUFBRSxFQUpMO0FBS0hMLEVBQUFBLEtBQUssRUFBRTtBQUxKLENBQVA7QUFRQVEsS0FBSyxHQUFFO0FBQ0hOLEVBQUFBLENBQUMsRUFBRSxFQURBO0FBRUhDLEVBQUFBLENBQUMsRUFBRSxHQUZBO0FBR0hDLEVBQUFBLEtBQUssRUFBRSxFQUhKO0FBSUhDLEVBQUFBLE1BQU0sRUFBRSxFQUpMO0FBS0hMLEVBQUFBLEtBQUssRUFBRTtBQUxKLENBQVA7QUFRQVMsS0FBSyxHQUFFO0FBQ0hQLEVBQUFBLENBQUMsRUFBRSxFQURBO0FBRUhDLEVBQUFBLENBQUMsRUFBRSxHQUZBO0FBR0hDLEVBQUFBLEtBQUssRUFBRSxFQUhKO0FBSUhDLEVBQUFBLE1BQU0sRUFBRSxFQUpMO0FBS0hMLEVBQUFBLEtBQUssRUFBRTtBQUxKLENBQVA7QUFRQVUsS0FBSyxHQUFFO0FBQ0hSLEVBQUFBLENBQUMsRUFBRSxHQURBO0FBRUhDLEVBQUFBLENBQUMsRUFBRSxHQUZBO0FBR0hDLEVBQUFBLEtBQUssRUFBRSxFQUhKO0FBSUhDLEVBQUFBLE1BQU0sRUFBRSxFQUpMO0FBS0hMLEVBQUFBLEtBQUssRUFBRTtBQUxKLENBQVA7QUFRQSxJQUFJSCxJQUFJLEdBQUcsRUFBWDtBQUNBQSxJQUFJLENBQUNjLElBQUwsQ0FBVUwsTUFBVixFQUFrQkMsS0FBbEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsS0FBdkM7QUFHQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsU0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF0Zm9ybXN7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG5cbiAgICBkcmF3UGxhdGZvcm1zKGN0eCl7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBsYXRbaV0uY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QocGxhdFtpXS54LCBwbGF0W2ldLnksIHBsYXRbaV0ud2lkdGgsIHBsYXRbaV0uaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIFBsYXRmb3JtIE9iamVjdHNcbmdyb3VuZCA9e1xuICAgIHg6IDAsXG4gICAgeTogNDcwLFxuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogMzAsXG4gICAgY29sb3I6ICcjMTU1MjYxJ1xufTtcblxucGxhdDEgPXtcbiAgICB4OiA1MCxcbiAgICB5OiA4MCxcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiAzMCxcbiAgICBjb2xvcjogJ3llbGxvdydcbn1cblxucGxhdDIgPXtcbiAgICB4OiA1MCxcbiAgICB5OiAzMDAsXG4gICAgd2lkdGg6IDUwLFxuICAgIGhlaWdodDogMzAsXG4gICAgY29sb3I6ICdyZWQnXG59XG5cbnBsYXQzID17XG4gICAgeDogNTAsXG4gICAgeTogMjcwLFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGNvbG9yOiAnYmx1ZSdcbn1cblxucGxhdDQgPXtcbiAgICB4OiAxMDAsXG4gICAgeTogMzcwLFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDEwLFxuICAgIGNvbG9yOiAnYmxhY2snXG59XG5cbmxldCBwbGF0ID0gW107XG5wbGF0LnB1c2goZ3JvdW5kLCBwbGF0MSwgcGxhdDIsIHBsYXQzLCBwbGF0NCk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF0Zm9ybXM7Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/platform.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// player class and functions\nvar Player = /*#__PURE__*/function () {\n  \"use strict\";\n\n  function Player(canvasWidth, canvasHeight) {\n    _classCallCheck(this, Player);\n\n    // canvas properties\n    this.canvasWidth = canvasWidth;\n    this.canvasHeight = canvasHeight;\n    this.ground = this.canvasHeight - this.height - 30; //player object\n    //starting position\n\n    this.x = 0; // starting position x axis\n\n    this.y = 445; //starting position y axis\n\n    this.color = '#FCA738';\n    this.width = 25; // player \n\n    this.height = 25; // player\n    // moving logic\n\n    this.speed = 0; // starting speed\n\n    this.maxSpeed = 5; // increment speed \n    //jumping logic\n\n    this.is_jump = false; // default false\n\n    this.in_air = 0;\n    this.gravity = 0.95;\n    this.jumpHeight = -15;\n  }\n\n  _createClass(Player, [{\n    key: \"moveLeft\",\n    value: function moveLeft() {\n      // console.log(\"move left\");\n      this.speed = -this.maxSpeed; // console.log(this.x);\n    }\n  }, {\n    key: \"moveRight\",\n    value: function moveRight() {\n      // console.log(\"move right\");\n      this.speed = this.maxSpeed; // console.log(this.x);\n    } //reset speed\n\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      console.log(\"stop\");\n      this.speed = 0;\n    }\n  }, {\n    key: \"jump\",\n    value: function jump() {\n      console.log(\"jump\");\n\n      if (this.is_jump) {\n        this.in_air = this.jumpHeight;\n      }\n    }\n  }, {\n    key: \"fall\",\n    value: function fall() {\n      console.log(\"fall\");\n\n      if (this.is_jump) {\n        this.in_air += this.gravity;\n      }\n    }\n  }, {\n    key: \"drawPlayer\",\n    value: function drawPlayer(ctx) {\n      ctx.fillStyle = 'orange';\n      ctx.fillRect(this.x, this.y, this.width, this.height);\n    }\n  }, {\n    key: \"movePlayer\",\n    value: function movePlayer() {\n      this.x += this.speed;\n      this.in_air += this.gravity;\n      this.y += this.in_air; //side constraint\n\n      if (this.x < 0) {\n        this.x = 0;\n      }\n\n      if (this.x + this.width > this.canvasWidth) {\n        this.x = this.canvasWidth - this.width;\n      } // ground constraint\n\n\n      if (this.y > this.canvasHeight - 30 - this.height) {\n        this.y = this.canvasHeight - 30 - this.height;\n        this.is_jump = false;\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b21iaWVSdW5uZXIvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImdyb3VuZCIsImhlaWdodCIsIngiLCJ5IiwiY29sb3IiLCJ3aWR0aCIsInNwZWVkIiwibWF4U3BlZWQiLCJpc19qdW1wIiwiaW5fYWlyIiwiZ3Jhdml0eSIsImp1bXBIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQUNNQSxNOzs7QUFDRixrQkFBWUMsV0FBWixFQUF5QkMsWUFBekIsRUFBc0M7QUFBQTs7QUFDbEM7QUFDQSxTQUFLRCxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtELFlBQUwsR0FBb0IsS0FBS0UsTUFBekIsR0FBa0MsRUFBaEQsQ0FKa0MsQ0FLbEM7QUFFQTs7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVCxDQVJrQyxDQVF0Qjs7QUFDWixTQUFLQyxDQUFMLEdBQVMsR0FBVCxDQVRrQyxDQVNwQjs7QUFFZCxTQUFLQyxLQUFMLEdBQWEsU0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBWmtDLENBWWpCOztBQUNqQixTQUFLSixNQUFMLEdBQWMsRUFBZCxDQWJrQyxDQWFoQjtBQUVsQjs7QUFDQSxTQUFLSyxLQUFMLEdBQWEsQ0FBYixDQWhCa0MsQ0FnQmxCOztBQUNoQixTQUFLQyxRQUFMLEdBQWdCLENBQWhCLENBakJrQyxDQWlCZjtBQUVuQjs7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBZixDQXBCa0MsQ0FvQlo7O0FBQ3RCLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLENBQUMsRUFBbkI7QUFDSDs7OztXQUVELG9CQUFVO0FBQ047QUFDQSxXQUFLTCxLQUFMLEdBQWEsQ0FBQyxLQUFLQyxRQUFuQixDQUZNLENBR047QUFDSDs7O1dBRUQscUJBQVc7QUFDUDtBQUNBLFdBQUtELEtBQUwsR0FBYSxLQUFLQyxRQUFsQixDQUZPLENBR1A7QUFDSCxLLENBRUQ7Ozs7V0FDQSxnQkFBTTtBQUNGSyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsV0FBS1AsS0FBTCxHQUFhLENBQWI7QUFDSDs7O1dBRUQsZ0JBQU07QUFDRk0sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjs7QUFDQSxVQUFHLEtBQUtMLE9BQVIsRUFBZ0I7QUFDWixhQUFLQyxNQUFMLEdBQWMsS0FBS0UsVUFBbkI7QUFDSDtBQUNKOzs7V0FFRCxnQkFBTTtBQUNGQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaOztBQUNBLFVBQUcsS0FBS0wsT0FBUixFQUFnQjtBQUNaLGFBQUtDLE1BQUwsSUFBZSxLQUFLQyxPQUFwQjtBQUNIO0FBQ0o7OztXQUVELG9CQUFXSSxHQUFYLEVBQWU7QUFDWEEsTUFBQUEsR0FBRyxDQUFDQyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQUtkLENBQWxCLEVBQXFCLEtBQUtDLENBQTFCLEVBQTZCLEtBQUtFLEtBQWxDLEVBQXlDLEtBQUtKLE1BQTlDO0FBQ0g7OztXQUVELHNCQUFZO0FBQ1IsV0FBS0MsQ0FBTCxJQUFVLEtBQUtJLEtBQWY7QUFDQSxXQUFLRyxNQUFMLElBQWUsS0FBS0MsT0FBcEI7QUFDQSxXQUFLUCxDQUFMLElBQVUsS0FBS00sTUFBZixDQUhRLENBS1I7O0FBQ0EsVUFBRyxLQUFLUCxDQUFMLEdBQVMsQ0FBWixFQUFjO0FBQ1YsYUFBS0EsQ0FBTCxHQUFTLENBQVQ7QUFDSDs7QUFFRCxVQUFJLEtBQUtBLENBQUwsR0FBUyxLQUFLRyxLQUFmLEdBQXdCLEtBQUtQLFdBQWhDLEVBQTRDO0FBQ3hDLGFBQUtJLENBQUwsR0FBUyxLQUFLSixXQUFMLEdBQW1CLEtBQUtPLEtBQWpDO0FBQ0gsT0FaTyxDQWNSOzs7QUFDQSxVQUFHLEtBQUtGLENBQUwsR0FBUyxLQUFLSixZQUFMLEdBQW9CLEVBQXBCLEdBQXlCLEtBQUtFLE1BQTFDLEVBQWlEO0FBQzdDLGFBQUtFLENBQUwsR0FBUyxLQUFLSixZQUFMLEdBQW9CLEVBQXBCLEdBQXlCLEtBQUtFLE1BQXZDO0FBQ0EsYUFBS08sT0FBTCxHQUFlLEtBQWY7QUFDSDtBQUNKOzs7Ozs7QUFHTFMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckIsTUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwbGF5ZXIgY2xhc3MgYW5kIGZ1bmN0aW9uc1xuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KXtcbiAgICAgICAgLy8gY2FudmFzIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhc0hlaWdodDtcbiAgICAgICAgdGhpcy5ncm91bmQgPSB0aGlzLmNhbnZhc0hlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMzA7XG4gICAgICAgIC8vcGxheWVyIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgLy9zdGFydGluZyBwb3NpdGlvblxuICAgICAgICB0aGlzLnggPSAwOyAvLyBzdGFydGluZyBwb3NpdGlvbiB4IGF4aXNcbiAgICAgICAgdGhpcy55ID0gNDQ1OyAvL3N0YXJ0aW5nIHBvc2l0aW9uIHkgYXhpc1xuXG4gICAgICAgIHRoaXMuY29sb3IgPSAnI0ZDQTczOCc7XG4gICAgICAgIHRoaXMud2lkdGggPSAyNTsgLy8gcGxheWVyIFxuICAgICAgICB0aGlzLmhlaWdodCA9IDI1OyAvLyBwbGF5ZXJcblxuICAgICAgICAvLyBtb3ZpbmcgbG9naWNcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7IC8vIHN0YXJ0aW5nIHNwZWVkXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSA1OyAvLyBpbmNyZW1lbnQgc3BlZWQgXG5cbiAgICAgICAgLy9qdW1waW5nIGxvZ2ljXG4gICAgICAgIHRoaXMuaXNfanVtcCA9IGZhbHNlOyAvLyBkZWZhdWx0IGZhbHNlXG4gICAgICAgIHRoaXMuaW5fYWlyID0gMDsgXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuOTU7XG4gICAgICAgIHRoaXMuanVtcEhlaWdodCA9IC0xNTtcbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmUgbGVmdFwiKTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLm1heFNwZWVkO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLngpO1xuICAgIH1cblxuICAgIG1vdmVSaWdodCgpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmUgcmlnaHRcIik7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLngpO1xuICAgIH1cblxuICAgIC8vcmVzZXQgc3BlZWRcbiAgICBzdG9wKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcFwiKTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxuICAgIFxuICAgIGp1bXAoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJqdW1wXCIpO1xuICAgICAgICBpZih0aGlzLmlzX2p1bXApe1xuICAgICAgICAgICAgdGhpcy5pbl9haXIgPSB0aGlzLmp1bXBIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmYWxsKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFsbFwiKTtcbiAgICAgICAgaWYodGhpcy5pc19qdW1wKXtcbiAgICAgICAgICAgIHRoaXMuaW5fYWlyICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoY3R4KXtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdvcmFuZ2UnO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBtb3ZlUGxheWVyKCl7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLmluX2FpciArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmluX2FpcjtcblxuICAgICAgICAvL3NpZGUgY29uc3RyYWludFxuICAgICAgICBpZih0aGlzLnggPCAwKXtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZigodGhpcy54ICsgdGhpcy53aWR0aCkgPiB0aGlzLmNhbnZhc1dpZHRoKXtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuY2FudmFzV2lkdGggLSB0aGlzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBncm91bmQgY29uc3RyYWludFxuICAgICAgICBpZih0aGlzLnkgPiB0aGlzLmNhbnZhc0hlaWdodCAtIDMwIC0gdGhpcy5oZWlnaHQpe1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXNIZWlnaHQgLSAzMCAtIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5pc19qdW1wID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b21iaWVSdW5uZXIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;