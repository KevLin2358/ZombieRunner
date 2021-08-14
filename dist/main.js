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

eval("var Game = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\nvar Platforms = __webpack_require__(/*! ./scripts/platform */ \"./src/scripts/platform.js\");\n\nvar Player = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\"); // const View = require(\"./view\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById('canvas1');\n  var ctx = canvas.getContext('2d');\n  var game = new Game(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUNBLElBQU1DLFNBQVMsR0FBR0QsbUJBQU8sQ0FBQyxxREFBRCxDQUF6Qjs7QUFDQSxJQUFNRSxNQUFNLEdBQUdGLG1CQUFPLENBQUMsaURBQUQsQ0FBdEIsQyxDQUNBOzs7QUFFQUcsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJVixJQUFKLENBQVNRLEdBQVQsQ0FBYjtBQUNILENBSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b21iaWVSdW5uZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lXCIpO1xuY29uc3QgUGxhdGZvcm1zID0gcmVxdWlyZShcIi4vc2NyaXB0cy9wbGF0Zm9ybVwiKTtcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvcGxheWVyXCIpO1xuLy8gY29uc3QgVmlldyA9IHJlcXVpcmUoXCIuL3ZpZXdcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzMScpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xufSk7Il0sIm5hbWVzIjpbIkdhbWUiLCJyZXF1aXJlIiwiUGxhdGZvcm1zIiwiUGxheWVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// const Zombie = require(\"./zombie\");\n// const Player = require(\"./player\");\nvar Player = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\nvar Platforms = __webpack_require__(/*! ./platform */ \"./src/scripts/platform.js\");\n\nvar Game = function Game(ctx) {\n  _classCallCheck(this, Game);\n\n  var player = new Player(ctx);\n  var platforms = new Platforms(ctx);\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyx5Q0FBRCxDQUF0Qjs7QUFDQSxJQUFNQyxTQUFTLEdBQUdELG1CQUFPLENBQUMsNkNBQUQsQ0FBekI7O0lBQ01FLEksR0FDRixjQUFZQyxHQUFaLEVBQWdCO0FBQUE7O0FBQ1osTUFBTUMsTUFBTSxHQUFHLElBQUlMLE1BQUosQ0FBV0ksR0FBWCxDQUFmO0FBQ0EsTUFBTUUsU0FBUyxHQUFHLElBQUlKLFNBQUosQ0FBY0UsR0FBZCxDQUFsQjtBQUNILEM7O0FBR0xHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkwsSUFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b21iaWVSdW5uZXIvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgWm9tYmllID0gcmVxdWlyZShcIi4vem9tYmllXCIpO1xuLy8gY29uc3QgUGxheWVyID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuXG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5jb25zdCBQbGF0Zm9ybXMgPSByZXF1aXJlKFwiLi9wbGF0Zm9ybVwiKTtcbmNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihjdHgpO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybXMgPSBuZXcgUGxhdGZvcm1zKGN0eCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7Il0sIm5hbWVzIjpbIlBsYXllciIsInJlcXVpcmUiLCJQbGF0Zm9ybXMiLCJHYW1lIiwiY3R4IiwicGxheWVyIiwicGxhdGZvcm1zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Platform Objects\nground = {\n  x: 0,\n  y: 470,\n  width: 1000,\n  height: 30,\n  color: '#155261'\n};\nplat1 = {\n  x: 50,\n  y: 80,\n  width: 50,\n  height: 30,\n  color: 'yellow'\n};\nplat2 = {\n  x: 50,\n  y: 300,\n  width: 50,\n  height: 30,\n  color: 'red'\n};\nplat3 = {\n  x: 50,\n  y: 270,\n  width: 50,\n  height: 30,\n  color: 'blue'\n};\nplat4 = {\n  x: 100,\n  y: 370,\n  width: 50,\n  height: 10,\n  color: 'black'\n};\nvar plat = [];\nplat.push(ground, plat1, plat2, plat3, plat4); // platform class with functions\n\nvar Platforms = /*#__PURE__*/function () {\n  function Platforms(ctx) {\n    _classCallCheck(this, Platforms);\n\n    this.ctx = ctx;\n    this.drawPlatforms();\n  }\n\n  _createClass(Platforms, [{\n    key: \"drawPlatforms\",\n    value: function drawPlatforms() {\n      for (var i = 0; i < plat.length; i++) {\n        this.ctx.fillStyle = plat[i].color;\n        this.ctx.fillRect(plat[i].x, plat[i].y, plat[i].width, plat[i].height);\n      }\n    }\n  }]);\n\n  return Platforms;\n}();\n\nmodule.exports = Platforms;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b21iaWVSdW5uZXIvLi9zcmMvc2NyaXB0cy9wbGF0Zm9ybS5qcz84NmRkIl0sIm5hbWVzIjpbImdyb3VuZCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsInBsYXQxIiwicGxhdDIiLCJwbGF0MyIsInBsYXQ0IiwicGxhdCIsInB1c2giLCJQbGF0Zm9ybXMiLCJjdHgiLCJkcmF3UGxhdGZvcm1zIiwiaSIsImxlbmd0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQUEsTUFBTSxHQUFFO0FBQ0pDLEVBQUFBLENBQUMsRUFBRSxDQURDO0FBRUpDLEVBQUFBLENBQUMsRUFBRSxHQUZDO0FBR0pDLEVBQUFBLEtBQUssRUFBRSxJQUhIO0FBSUpDLEVBQUFBLE1BQU0sRUFBRSxFQUpKO0FBS0pDLEVBQUFBLEtBQUssRUFBRTtBQUxILENBQVI7QUFRQUMsS0FBSyxHQUFFO0FBQ0hMLEVBQUFBLENBQUMsRUFBRSxFQURBO0FBRUhDLEVBQUFBLENBQUMsRUFBRSxFQUZBO0FBR0hDLEVBQUFBLEtBQUssRUFBRSxFQUhKO0FBSUhDLEVBQUFBLE1BQU0sRUFBRSxFQUpMO0FBS0hDLEVBQUFBLEtBQUssRUFBRTtBQUxKLENBQVA7QUFRQUUsS0FBSyxHQUFFO0FBQ0hOLEVBQUFBLENBQUMsRUFBRSxFQURBO0FBRUhDLEVBQUFBLENBQUMsRUFBRSxHQUZBO0FBR0hDLEVBQUFBLEtBQUssRUFBRSxFQUhKO0FBSUhDLEVBQUFBLE1BQU0sRUFBRSxFQUpMO0FBS0hDLEVBQUFBLEtBQUssRUFBRTtBQUxKLENBQVA7QUFRQUcsS0FBSyxHQUFFO0FBQ0hQLEVBQUFBLENBQUMsRUFBRSxFQURBO0FBRUhDLEVBQUFBLENBQUMsRUFBRSxHQUZBO0FBR0hDLEVBQUFBLEtBQUssRUFBRSxFQUhKO0FBSUhDLEVBQUFBLE1BQU0sRUFBRSxFQUpMO0FBS0hDLEVBQUFBLEtBQUssRUFBRTtBQUxKLENBQVA7QUFRQUksS0FBSyxHQUFFO0FBQ0hSLEVBQUFBLENBQUMsRUFBRSxHQURBO0FBRUhDLEVBQUFBLENBQUMsRUFBRSxHQUZBO0FBR0hDLEVBQUFBLEtBQUssRUFBRSxFQUhKO0FBSUhDLEVBQUFBLE1BQU0sRUFBRSxFQUpMO0FBS0hDLEVBQUFBLEtBQUssRUFBRTtBQUxKLENBQVA7QUFRQSxJQUFJSyxJQUFJLEdBQUcsRUFBWDtBQUNBQSxJQUFJLENBQUNDLElBQUwsQ0FBVVgsTUFBVixFQUFrQk0sS0FBbEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsS0FBdkMsRSxDQUVBOztJQUNNRyxTO0FBQ0YscUJBQVlDLEdBQVosRUFBZ0I7QUFBQTs7QUFDWixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxhQUFMO0FBQ0g7Ozs7V0FFRCx5QkFBZTtBQUNQLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsSUFBSSxDQUFDTSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxhQUFLRixHQUFMLENBQVNJLFNBQVQsR0FBcUJQLElBQUksQ0FBQ0ssQ0FBRCxDQUFKLENBQVFWLEtBQTdCO0FBQ0EsYUFBS1EsR0FBTCxDQUFTSyxRQUFULENBQWtCUixJQUFJLENBQUNLLENBQUQsQ0FBSixDQUFRZCxDQUExQixFQUE2QlMsSUFBSSxDQUFDSyxDQUFELENBQUosQ0FBUWIsQ0FBckMsRUFBd0NRLElBQUksQ0FBQ0ssQ0FBRCxDQUFKLENBQVFaLEtBQWhELEVBQXVETyxJQUFJLENBQUNLLENBQUQsQ0FBSixDQUFRWCxNQUEvRDtBQUNIO0FBQ1I7Ozs7OztBQUdMZSxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLFNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGxhdGZvcm0gT2JqZWN0c1xuZ3JvdW5kID17XG4gICAgeDogMCxcbiAgICB5OiA0NzAsXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiAzMCxcbiAgICBjb2xvcjogJyMxNTUyNjEnXG59O1xuXG5wbGF0MSA9e1xuICAgIHg6IDUwLFxuICAgIHk6IDgwLFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGNvbG9yOiAneWVsbG93J1xufVxuXG5wbGF0MiA9e1xuICAgIHg6IDUwLFxuICAgIHk6IDMwMCxcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiAzMCxcbiAgICBjb2xvcjogJ3JlZCdcbn1cblxucGxhdDMgPXtcbiAgICB4OiA1MCxcbiAgICB5OiAyNzAsXG4gICAgd2lkdGg6IDUwLFxuICAgIGhlaWdodDogMzAsXG4gICAgY29sb3I6ICdibHVlJ1xufVxuXG5wbGF0NCA9e1xuICAgIHg6IDEwMCxcbiAgICB5OiAzNzAsXG4gICAgd2lkdGg6IDUwLFxuICAgIGhlaWdodDogMTAsXG4gICAgY29sb3I6ICdibGFjaydcbn1cblxubGV0IHBsYXQgPSBbXTtcbnBsYXQucHVzaChncm91bmQsIHBsYXQxLCBwbGF0MiwgcGxhdDMsIHBsYXQ0KTtcblxuLy8gcGxhdGZvcm0gY2xhc3Mgd2l0aCBmdW5jdGlvbnNcbmNsYXNzIFBsYXRmb3Jtc3tcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgfVxuXG4gICAgZHJhd1BsYXRmb3Jtcygpe1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGF0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gcGxhdFtpXS5jb2xvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChwbGF0W2ldLngsIHBsYXRbaV0ueSwgcGxhdFtpXS53aWR0aCwgcGxhdFtpXS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF0Zm9ybXM7Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/platform.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// player object\npOb = {\n  x: 0,\n  y: 450,\n  x_v: 0,\n  y_v: 0,\n  speed: 5,\n  jump: true,\n  width: 25,\n  height: 25,\n  color: '#FCA738'\n}; // player class and functions\n\nvar Player = /*#__PURE__*/function () {\n  function Player(ctx) {\n    _classCallCheck(this, Player);\n\n    this.ctx = ctx;\n    this.update();\n    canvas.addEventListener(\"keypress\", update);\n  }\n\n  _createClass(Player, [{\n    key: \"update\",\n    value: function update() {\n      if (keyCode == 38) {\n        y -= speed; //going up\n      }\n\n      if (keyCode == 40) {\n        y += speed; //going down\n      }\n\n      if (keyCode == 37) {\n        x -= speed; //going left\n      }\n\n      if (keyCode == 39) {\n        x += speed; //going right\n      }\n\n      this.drawPlayer(this.ctx);\n    }\n  }, {\n    key: \"drawPlayer\",\n    value: function drawPlayer() {\n      this.ctx.clearRect(pOb.x, pOb.y, pOb.width, pOb.height);\n      this.ctx.fillStyle = pOb.color;\n      this.ctx.fillRect(pOb.x, pOb.y, pOb.width, pOb.height);\n    } // move player\n    // event.keycode == 65 // a left\n    // event.keycode == 87 // w  up\n    // event.keycode == 68 // d right\n    // event.keycode == 83 // s down\n    // event.keycode == 32 // space jump\n\n  }]);\n\n  return Player;\n}();\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b21iaWVSdW5uZXIvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJuYW1lcyI6WyJwT2IiLCJ4IiwieSIsInhfdiIsInlfdiIsInNwZWVkIiwianVtcCIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJQbGF5ZXIiLCJjdHgiLCJ1cGRhdGUiLCJjYW52YXMiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsImRyYXdQbGF5ZXIiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0FBLEdBQUcsR0FBRztBQUNGQyxFQUFBQSxDQUFDLEVBQUcsQ0FERjtBQUVGQyxFQUFBQSxDQUFDLEVBQUcsR0FGRjtBQUdGQyxFQUFBQSxHQUFHLEVBQUUsQ0FISDtBQUlGQyxFQUFBQSxHQUFHLEVBQUUsQ0FKSDtBQUtGQyxFQUFBQSxLQUFLLEVBQUUsQ0FMTDtBQU1GQyxFQUFBQSxJQUFJLEVBQUUsSUFOSjtBQU9GQyxFQUFBQSxLQUFLLEVBQUUsRUFQTDtBQVFGQyxFQUFBQSxNQUFNLEVBQUUsRUFSTjtBQVNGQyxFQUFBQSxLQUFLLEVBQUU7QUFUTCxDQUFOLEMsQ0FhQTs7SUFDTUMsTTtBQUNGLGtCQUFZQyxHQUFaLEVBQWdCO0FBQUE7O0FBQ1osU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTDtBQUNBQyxJQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DRixNQUFwQztBQUNIOzs7O1dBQ0Qsa0JBQVE7QUFDSixVQUFJRyxPQUFPLElBQUksRUFBZixFQUNBO0FBQ0liLFFBQUFBLENBQUMsSUFBSUcsS0FBTCxDQURKLENBQ2dCO0FBQ2Y7O0FBQ0QsVUFBSVUsT0FBTyxJQUFJLEVBQWYsRUFDQTtBQUNJYixRQUFBQSxDQUFDLElBQUlHLEtBQUwsQ0FESixDQUNnQjtBQUNmOztBQUNELFVBQUlVLE9BQU8sSUFBSSxFQUFmLEVBQ0E7QUFDSWQsUUFBQUEsQ0FBQyxJQUFJSSxLQUFMLENBREosQ0FDZ0I7QUFDZjs7QUFDRCxVQUFJVSxPQUFPLElBQUksRUFBZixFQUNBO0FBQ0lkLFFBQUFBLENBQUMsSUFBSUksS0FBTCxDQURKLENBQ2dCO0FBQ2Y7O0FBQ0QsV0FBS1csVUFBTCxDQUFnQixLQUFLTCxHQUFyQjtBQUNIOzs7V0FFRCxzQkFBYTtBQUNULFdBQUtBLEdBQUwsQ0FBU00sU0FBVCxDQUFtQmpCLEdBQUcsQ0FBQ0MsQ0FBdkIsRUFBMEJELEdBQUcsQ0FBQ0UsQ0FBOUIsRUFBaUNGLEdBQUcsQ0FBQ08sS0FBckMsRUFBNENQLEdBQUcsQ0FBQ1EsTUFBaEQ7QUFDQSxXQUFLRyxHQUFMLENBQVNPLFNBQVQsR0FBcUJsQixHQUFHLENBQUNTLEtBQXpCO0FBQ0EsV0FBS0UsR0FBTCxDQUFTUSxRQUFULENBQWtCbkIsR0FBRyxDQUFDQyxDQUF0QixFQUF5QkQsR0FBRyxDQUFDRSxDQUE3QixFQUFnQ0YsR0FBRyxDQUFDTyxLQUFwQyxFQUEyQ1AsR0FBRyxDQUFDUSxNQUEvQztBQUNILEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFFSlksTUFBTSxDQUFDQyxPQUFQLEdBQWlCWCxNQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBsYXllciBvYmplY3RcbnBPYiA9IHtcbiAgICB4IDogMCxcbiAgICB5IDogNDUwLFxuICAgIHhfdjogMCxcbiAgICB5X3Y6IDAsXG4gICAgc3BlZWQ6IDUsXG4gICAganVtcDogdHJ1ZSxcbiAgICB3aWR0aDogMjUsXG4gICAgaGVpZ2h0OiAyNSxcbiAgICBjb2xvcjogJyNGQ0E3MzgnLFxuXG59O1xuXG4vLyBwbGF5ZXIgY2xhc3MgYW5kIGZ1bmN0aW9uc1xuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCB1cGRhdGUpO1xuICAgIH1cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgaWYgKGtleUNvZGUgPT0gMzgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHkgLT0gc3BlZWQ7IC8vZ29pbmcgdXBcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5Q29kZSA9PSA0MClcbiAgICAgICAge1xuICAgICAgICAgICAgeSArPSBzcGVlZDsgLy9nb2luZyBkb3duXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleUNvZGUgPT0gMzcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHggLT0gc3BlZWQ7IC8vZ29pbmcgbGVmdFxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlDb2RlID09IDM5KVxuICAgICAgICB7XG4gICAgICAgICAgICB4ICs9IHNwZWVkOyAvL2dvaW5nIHJpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3UGxheWVyKHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QocE9iLngsIHBPYi55LCBwT2Iud2lkdGgsIHBPYi5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBwT2IuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBPYi54LCBwT2IueSwgcE9iLndpZHRoLCBwT2IuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBtb3ZlIHBsYXllclxuICAgIC8vIGV2ZW50LmtleWNvZGUgPT0gNjUgLy8gYSBsZWZ0XG4gICAgLy8gZXZlbnQua2V5Y29kZSA9PSA4NyAvLyB3ICB1cFxuICAgIC8vIGV2ZW50LmtleWNvZGUgPT0gNjggLy8gZCByaWdodFxuICAgIC8vIGV2ZW50LmtleWNvZGUgPT0gODMgLy8gcyBkb3duXG4gICAgLy8gZXZlbnQua2V5Y29kZSA9PSAzMiAvLyBzcGFjZSBqdW1wXG59XG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvcGxheWVyLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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