'use strict';

var initialize = function initialize(data) {
  var app = data.app,
      bodyParser = data.bodyParser,
      routes = data.routes;

  app.use(bodyParser.json());
  app.use('/', routes);
};

module.exports = initialize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxpemUiLCJkYXRhIiwiYXBwIiwiYm9keVBhcnNlciIsInJvdXRlcyIsInVzZSIsImpzb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFBQSxNQUV6QkMsR0FGeUIsR0FLdkJELElBTHVCLENBRXpCQyxHQUZ5QjtBQUFBLE1BR3pCQyxVQUh5QixHQUt2QkYsSUFMdUIsQ0FHekJFLFVBSHlCO0FBQUEsTUFJekJDLE1BSnlCLEdBS3ZCSCxJQUx1QixDQUl6QkcsTUFKeUI7O0FBTTNCRixNQUFJRyxHQUFKLENBQVFGLFdBQVdHLElBQVgsRUFBUjtBQUNBSixNQUFJRyxHQUFKLENBQVEsR0FBUixFQUFhRCxNQUFiO0FBQ0QsQ0FSRDs7QUFVQUcsT0FBT0MsT0FBUCxHQUFpQlIsVUFBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsaXplID0gKGRhdGEpID0+IHtcbiAgY29uc3Qge1xuICAgIGFwcCxcbiAgICBib2R5UGFyc2VyLFxuICAgIHJvdXRlc1xuICB9ID0gZGF0YTtcbiAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gIGFwcC51c2UoJy8nLCByb3V0ZXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRpYWxpemU7Il19