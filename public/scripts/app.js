/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Main = __webpack_require__(3);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _data = __webpack_require__(28);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_Main2.default, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	__webpack_require__(31);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _state = __webpack_require__(4);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _Opportunity = __webpack_require__(13);
	
	var _Opportunity2 = _interopRequireDefault(_Opportunity);
	
	var _OpportunityAddEdit = __webpack_require__(22);
	
	var _OpportunityAddEdit2 = _interopRequireDefault(_OpportunityAddEdit);
	
	var _Opportunities = __webpack_require__(26);
	
	var _Opportunities2 = _interopRequireDefault(_Opportunities);
	
	var _Navigation = __webpack_require__(27);
	
	var _Navigation2 = _interopRequireDefault(_Navigation);
	
	var _reactRouter = __webpack_require__(14);
	
	var _baobabReact = __webpack_require__(15);
	
	var _baobabReact2 = _interopRequireDefault(_baobabReact);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var root = _baobabReact2.default.decorators.root;
	var branch = _baobabReact2.default.decorators.branch;
	
	var Main = (_dec = root(_state2.default), _dec(_class = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main() {
	    _classCallCheck(this, Main);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
	  }
	
	  _createClass(Main, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Router,
	          { history: _reactRouter.browserHistory },
	          _react2.default.createElement(
	            _reactRouter.Route,
	            { path: '/', component: _Navigation2.default },
	            _react2.default.createElement(_reactRouter.IndexRoute, { component: _Opportunities2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/add', component: _OpportunityAddEdit2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/edit/:id', component: _OpportunityAddEdit2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/view/:id', component: _Opportunity2.default })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react2.default.Component)) || _class);
	exports.default = Main;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baobab = __webpack_require__(5);
	
	var _baobab2 = _interopRequireDefault(_baobab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tree = new _baobab2.default({
	  opportunities: [],
	  selected: null
	});
	
	window.tree = tree;
	
	exports.default = tree;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Data Structure
	 * ======================
	 *
	 * A handy data tree with cursors.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _emmett = __webpack_require__(6);
	
	var _emmett2 = _interopRequireDefault(_emmett);
	
	var _cursor = __webpack_require__(7);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _monkey = __webpack_require__(8);
	
	var _watcher = __webpack_require__(12);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _type = __webpack_require__(9);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _update2 = __webpack_require__(10);
	
	var _update3 = _interopRequireDefault(_update2);
	
	var _helpers = __webpack_require__(11);
	
	var helpers = _interopRequireWildcard(_helpers);
	
	var arrayFrom = helpers.arrayFrom;
	var coercePath = helpers.coercePath;
	var deepFreeze = helpers.deepFreeze;
	var getIn = helpers.getIn;
	var makeError = helpers.makeError;
	var deepClone = helpers.deepClone;
	var deepMerge = helpers.deepMerge;
	var shallowClone = helpers.shallowClone;
	var shallowMerge = helpers.shallowMerge;
	var uniqid = helpers.uniqid;
	
	/**
	 * Baobab defaults
	 */
	var DEFAULTS = {
	
	  // Should the tree handle its transactions on its own?
	  autoCommit: true,
	
	  // Should the transactions be handled asynchronously?
	  asynchronous: true,
	
	  // Should the tree's data be immutable?
	  immutable: true,
	
	  // Should the monkeys be lazy?
	  lazyMonkeys: true,
	
	  // Should the tree be persistent?
	  persistent: true,
	
	  // Should the tree's update be pure?
	  pure: true,
	
	  // Validation specifications
	  validate: null,
	
	  // Validation behavior 'rollback' or 'notify'
	  validationBehavior: 'rollback'
	};
	
	/**
	 * Function returning a string hash from a non-dynamic path expressed as an
	 * array.
	 *
	 * @param  {array}  path - The path to hash.
	 * @return {string} string - The resultant hash.
	 */
	function hashPath(path) {
	  return 'λ' + path.map(function (step) {
	    if (_type2['default']['function'](step) || _type2['default'].object(step)) return '#' + uniqid() + '#';
	
	    return step;
	  }).join('λ');
	}
	
	/**
	 * Baobab class
	 *
	 * @constructor
	 * @param {object|array} [initialData={}]    - Initial data passed to the tree.
	 * @param {object}       [opts]              - Optional options.
	 * @param {boolean}      [opts.autoCommit]   - Should the tree auto-commit?
	 * @param {boolean}      [opts.asynchronous] - Should the tree's transactions
	 *                                             handled asynchronously?
	 * @param {boolean}      [opts.immutable]    - Should the tree be immutable?
	 * @param {boolean}      [opts.persistent]   - Should the tree be persistent?
	 * @param {boolean}      [opts.pure]         - Should the tree be pure?
	 * @param {function}     [opts.validate]     - Validation function.
	 * @param {string}       [opts.validationBehaviour] - "rollback" or "notify".
	 */
	
	var Baobab = (function (_Emitter) {
	  _inherits(Baobab, _Emitter);
	
	  function Baobab(initialData, opts) {
	    var _this = this;
	
	    _classCallCheck(this, Baobab);
	
	    _get(Object.getPrototypeOf(Baobab.prototype), 'constructor', this).call(this);
	
	    // Setting initialData to an empty object if no data is provided by use
	    if (arguments.length < 1) initialData = {};
	
	    // Checking whether given initial data is valid
	    if (!_type2['default'].object(initialData) && !_type2['default'].array(initialData)) throw makeError('Baobab: invalid data.', { data: initialData });
	
	    // Merging given options with defaults
	    this.options = shallowMerge({}, DEFAULTS, opts);
	
	    // Disabling immutability & persistence if persistence if disabled
	    if (!this.options.persistent) {
	      this.options.immutable = false;
	      this.options.pure = false;
	    }
	
	    // Privates
	    this._identity = '[object Baobab]';
	    this._cursors = {};
	    this._future = null;
	    this._transaction = [];
	    this._affectedPathsIndex = {};
	    this._monkeys = {};
	    this._previousData = null;
	    this._data = initialData;
	
	    // Properties
	    this.root = new _cursor2['default'](this, [], 'λ');
	    delete this.root.release;
	
	    // Does the user want an immutable tree?
	    if (this.options.immutable) deepFreeze(this._data);
	
	    // Bootstrapping root cursor's getters and setters
	    var bootstrap = function bootstrap(name) {
	      _this[name] = function () {
	        var r = this.root[name].apply(this.root, arguments);
	        return r instanceof _cursor2['default'] ? this : r;
	      };
	    };
	
	    ['apply', 'clone', 'concat', 'deepClone', 'deepMerge', 'exists', 'get', 'push', 'merge', 'pop', 'project', 'serialize', 'set', 'shift', 'splice', 'unset', 'unshift'].forEach(bootstrap);
	
	    // Registering the initial monkeys
	    this._refreshMonkeys();
	
	    // Initial validation
	    var validationError = this.validate();
	
	    if (validationError) throw Error('Baobab: invalid data.', { error: validationError });
	  }
	
	  /**
	   * Monkey helper.
	   */
	
	  /**
	   * Internal method used to refresh the tree's monkey register on every
	   * update.
	   * Note 1) For the time being, placing monkeys beneath array nodes is not
	   * allowed for performance reasons.
	   *
	   * @param  {mixed}   node      - The starting node.
	   * @param  {array}   path      - The starting node's path.
	   * @param  {string}  operation - The operation that lead to a refreshment.
	   * @return {Baobab}            - The tree instance for chaining purposes.
	   */
	
	  _createClass(Baobab, [{
	    key: '_refreshMonkeys',
	    value: function _refreshMonkeys(node, path, operation) {
	      var _this2 = this;
	
	      var clean = function clean(data) {
	        var p = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	        if (data instanceof _monkey.Monkey) {
	          data.release();
	          (0, _update3['default'])(_this2._monkeys, p, { type: 'unset' }, {
	            immutable: false,
	            persistent: false,
	            pure: false
	          });
	
	          return;
	        }
	
	        if (_type2['default'].object(data)) {
	          for (var k in data) {
	            clean(data[k], p.concat(k));
	          }
	        }
	      };
	
	      var walk = function walk(data) {
	        var p = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	        // Should we sit a monkey in the tree?
	        if (data instanceof _monkey.MonkeyDefinition || data instanceof _monkey.Monkey) {
	          var monkeyInstance = new _monkey.Monkey(_this2, p, data instanceof _monkey.Monkey ? data.definition : data);
	
	          (0, _update3['default'])(_this2._monkeys, p, { type: 'set', value: monkeyInstance }, {
	            immutable: false,
	            persistent: false,
	            pure: false
	          });
	
	          return;
	        }
	
	        // Object iteration
	        if (_type2['default'].object(data)) {
	          for (var k in data) {
	            walk(data[k], p.concat(k));
	          }
	        }
	      };
	
	      // Walking the whole tree
	      if (!arguments.length) {
	        walk(this._data);
	      } else {
	        var monkeysNode = getIn(this._monkeys, path).data;
	
	        // Is this required that we clean some already existing monkeys?
	        if (monkeysNode) clean(monkeysNode, path);
	
	        // Let's walk the tree only from the updated point
	        if (operation !== 'unset') {
	          walk(node, path);
	        }
	      }
	
	      return this;
	    }
	
	    /**
	     * Method used to validate the tree's data.
	     *
	     * @return {boolean} - Is the tree valid?
	     */
	  }, {
	    key: 'validate',
	    value: function validate(affectedPaths) {
	      var _options = this.options;
	      var validate = _options.validate;
	      var behavior = _options.validationBehavior;
	
	      if (typeof validate !== 'function') return null;
	
	      var error = validate.call(this, this._previousData, this._data, affectedPaths || [[]]);
	
	      if (error instanceof Error) {
	
	        if (behavior === 'rollback') {
	          this._data = this._previousData;
	          this._affectedPathsIndex = {};
	          this._transaction = [];
	          this._previousData = this._data;
	        }
	
	        this.emit('invalid', { error: error });
	
	        return error;
	      }
	
	      return null;
	    }
	
	    /**
	     * Method used to select data within the tree by creating a cursor. Cursors
	     * are kept as singletons by the tree for performance and hygiene reasons.
	     *
	     * Arity (1):
	     * @param {path}    path - Path to select in the tree.
	     *
	     * Arity (*):
	     * @param {...step} path - Path to select in the tree.
	     *
	     * @return {Cursor}      - The resultant cursor.
	     */
	  }, {
	    key: 'select',
	    value: function select(path) {
	
	      // If no path is given, we simply return the root
	      path = path || [];
	
	      // Variadic
	      if (arguments.length > 1) path = arrayFrom(arguments);
	
	      // Checking that given path is valid
	      if (!_type2['default'].path(path)) throw makeError('Baobab.select: invalid path.', { path: path });
	
	      // Casting to array
	      path = [].concat(path);
	
	      // Computing hash (done here because it would be too late to do it in the
	      // cursor's constructor since we need to hit the cursors' index first).
	      var hash = hashPath(path);
	
	      // Creating a new cursor or returning the already existing one for the
	      // requested path.
	      var cursor = this._cursors[hash];
	
	      if (!cursor) {
	        cursor = new _cursor2['default'](this, path, hash);
	        this._cursors[hash] = cursor;
	      }
	
	      // Emitting an event to notify that a part of the tree was selected
	      this.emit('select', { path: path, cursor: cursor });
	      return cursor;
	    }
	
	    /**
	     * Method used to update the tree. Updates are simply expressed by a path,
	     * dynamic or not, and an operation.
	     *
	     * This is where path solving should happen and not in the cursor.
	     *
	     * @param  {path}   path      - The path where we'll apply the operation.
	     * @param  {object} operation - The operation to apply.
	     * @return {mixed} - Return the result of the update.
	     */
	  }, {
	    key: 'update',
	    value: function update(path, operation) {
	      var _this3 = this;
	
	      // Coercing path
	      path = coercePath(path);
	
	      if (!_type2['default'].operationType(operation.type)) throw makeError('Baobab.update: unknown operation type "' + operation.type + '".', { operation: operation });
	
	      // Solving the given path
	
	      var _getIn = getIn(this._data, path);
	
	      var solvedPath = _getIn.solvedPath;
	      var exists = _getIn.exists;
	
	      // If we couldn't solve the path, we throw
	      if (!solvedPath) throw makeError('Baobab.update: could not solve the given path.', {
	        path: solvedPath
	      });
	
	      // Read-only path?
	      var monkeyPath = _type2['default'].monkeyPath(this._monkeys, solvedPath);
	      if (monkeyPath && solvedPath.length > monkeyPath.length) throw makeError('Baobab.update: attempting to update a read-only path.', {
	        path: solvedPath
	      });
	
	      // We don't unset irrelevant paths
	      if (operation.type === 'unset' && !exists) return;
	
	      // If we merge data, we need to acknowledge monkeys
	      var realOperation = operation;
	      if (/merge/i.test(operation.type)) {
	        var monkeysNode = getIn(this._monkeys, solvedPath).data;
	
	        if (_type2['default'].object(monkeysNode)) {
	
	          // Cloning the operation not to create weird behavior for the user
	          realOperation = shallowClone(realOperation);
	
	          // Fetching the existing node in the current data
	          var currentNode = getIn(this._data, solvedPath).data;
	
	          if (/deep/i.test(realOperation.type)) realOperation.value = deepMerge({}, deepMerge({}, currentNode, deepClone(monkeysNode)), realOperation.value);else realOperation.value = shallowMerge({}, deepMerge({}, currentNode, deepClone(monkeysNode)), realOperation.value);
	        }
	      }
	
	      // Stashing previous data if this is the frame's first update
	      if (!this._transaction.length) this._previousData = this._data;
	
	      // Applying the operation
	      var result = (0, _update3['default'])(this._data, solvedPath, realOperation, this.options);
	
	      var data = result.data;
	      var node = result.node;
	
	      // If because of purity, the update was moot, we stop here
	      if (!('data' in result)) return node;
	
	      // If the operation is push, the affected path is slightly different
	      var affectedPath = solvedPath.concat(operation.type === 'push' ? node.length - 1 : []);
	
	      var hash = hashPath(affectedPath);
	
	      // Updating data and transaction
	      this._data = data;
	      this._affectedPathsIndex[hash] = true;
	      this._transaction.push(shallowMerge({}, operation, { path: affectedPath }));
	
	      // Updating the monkeys
	      this._refreshMonkeys(node, solvedPath, operation.type);
	
	      // Emitting a `write` event
	      this.emit('write', { path: affectedPath });
	
	      // Should we let the user commit?
	      if (!this.options.autoCommit) return node;
	
	      // Should we update asynchronously?
	      if (!this.options.asynchronous) {
	        this.commit();
	        return node;
	      }
	
	      // Updating asynchronously
	      if (!this._future) this._future = setTimeout(function () {
	        return _this3.commit();
	      }, 0);
	
	      // Finally returning the affected node
	      return node;
	    }
	
	    /**
	     * Method committing the updates of the tree and firing the tree's events.
	     *
	     * @return {Baobab} - The tree instance for chaining purposes.
	     */
	  }, {
	    key: 'commit',
	    value: function commit() {
	
	      // Do not fire update if the transaction is empty
	      if (!this._transaction.length) return this;
	
	      // Clearing timeout if one was defined
	      if (this._future) this._future = clearTimeout(this._future);
	
	      var affectedPaths = Object.keys(this._affectedPathsIndex).map(function (h) {
	        return h !== 'λ' ? h.split('λ').slice(1) : [];
	      });
	
	      // Is the tree still valid?
	      var validationError = this.validate(affectedPaths);
	
	      if (validationError) return this;
	
	      // Caching to keep original references before we change them
	      var transaction = this._transaction,
	          previousData = this._previousData;
	
	      this._affectedPathsIndex = {};
	      this._transaction = [];
	      this._previousData = this._data;
	
	      // Emitting update event
	      this.emit('update', {
	        paths: affectedPaths,
	        currentData: this._data,
	        transaction: transaction,
	        previousData: previousData
	      });
	
	      return this;
	    }
	
	    /**
	     * Method returning a monkey at the given path or else `null`.
	     *
	     * @param  {path}        path - Path of the monkey to retrieve.
	     * @return {Monkey|null}      - The Monkey instance of `null`.
	     */
	  }, {
	    key: 'getMonkey',
	    value: function getMonkey(path) {
	      path = coercePath(path);
	
	      var monkey = getIn(this._monkeys, [].concat(path)).data;
	
	      if (monkey instanceof _monkey.Monkey) return monkey;
	
	      return null;
	    }
	
	    /**
	     * Method used to watch a collection of paths within the tree. Very useful
	     * to bind UI components and such to the tree.
	     *
	     * @param  {object} mapping - Mapping of paths to listen.
	     * @return {Cursor}         - The created watcher.
	     */
	  }, {
	    key: 'watch',
	    value: function watch(mapping) {
	      return new _watcher2['default'](this, mapping);
	    }
	
	    /**
	     * Method releasing the tree and its attached data from memory.
	     */
	  }, {
	    key: 'release',
	    value: function release() {
	      var k = undefined;
	
	      this.emit('release');
	
	      delete this.root;
	
	      delete this._data;
	      delete this._previousData;
	      delete this._transaction;
	      delete this._affectedPathsIndex;
	      delete this._monkeys;
	
	      // Releasing cursors
	      for (k in this._cursors) this._cursors[k].release();
	      delete this._cursors;
	
	      // Killing event emitter
	      this.kill();
	    }
	
	    /**
	     * Overriding the `toJSON` method for convenient use with JSON.stringify.
	     *
	     * @return {mixed} - Data at cursor.
	     */
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return this.serialize();
	    }
	
	    /**
	     * Overriding the `toString` method for debugging purposes.
	     *
	     * @return {string} - The baobab's identity.
	     */
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this._identity;
	    }
	  }]);
	
	  return Baobab;
	})(_emmett2['default']);
	
	exports['default'] = Baobab;
	Baobab.monkey = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  if (!args.length) throw new Error('Baobab.monkey: missing definition.');
	
	  if (args.length === 1 && typeof args[0] !== 'function') return new _monkey.MonkeyDefinition(args[0]);
	
	  return new _monkey.MonkeyDefinition(args);
	};
	Baobab.dynamicNode = Baobab.monkey;
	
	/**
	 * Exposing some internals for convenience
	 */
	Baobab.Cursor = _cursor2['default'];
	Baobab.MonkeyDefinition = _monkey.MonkeyDefinition;
	Baobab.Monkey = _monkey.Monkey;
	Baobab.type = _type2['default'];
	Baobab.helpers = helpers;
	
	/**
	 * Version
	 */
	Baobab.VERSION = '2.3.2';
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  'use strict';
	
	  /**
	   * Here is the list of every allowed parameter when using Emitter#on:
	   * @type {Object}
	   */
	  var __allowedOptions = {
	    once: 'boolean',
	    scope: 'object'
	  };
	
	  /**
	   * Incremental id used to order event handlers.
	   */
	  var __order = 0;
	
	  /**
	   * A simple helper to shallowly merge two objects. The second one will "win"
	   * over the first one.
	   *
	   * @param  {object}  o1 First target object.
	   * @param  {object}  o2 Second target object.
	   * @return {object}     Returns the merged object.
	   */
	  function shallowMerge(o1, o2) {
	    var o = {},
	        k;
	
	    for (k in o1) o[k] = o1[k];
	    for (k in o2) o[k] = o2[k];
	
	    return o;
	  }
	
	  /**
	   * Is the given variable a plain JavaScript object?
	   *
	   * @param  {mixed}  v   Target.
	   * @return {boolean}    The boolean result.
	   */
	  function isPlainObject(v) {
	    return v &&
	           typeof v === 'object' &&
	           !Array.isArray(v) &&
	           !(v instanceof Function) &&
	           !(v instanceof RegExp);
	  }
	
	  /**
	   * Iterate over an object that may have ES6 Symbols.
	   *
	   * @param  {object}   object  Object on which to iterate.
	   * @param  {function} fn      Iterator function.
	   * @param  {object}   [scope] Optional scope.
	   */
	  function forIn(object, fn, scope) {
	    var symbols,
	        k,
	        i,
	        l;
	
	    for (k in object)
	      fn.call(scope || null, k, object[k]);
	
	    if (Object.getOwnPropertySymbols) {
	      symbols = Object.getOwnPropertySymbols(object);
	
	      for (i = 0, l = symbols.length; i < l; i++)
	        fn.call(scope || null, symbols[i], object[symbols[i]]);
	    }
	  }
	
	  /**
	   * The emitter's constructor. It initializes the handlers-per-events store and
	   * the global handlers store.
	   *
	   * Emitters are useful for non-DOM events communication. Read its methods
	   * documentation for more information about how it works.
	   *
	   * @return {Emitter}         The fresh new instance.
	   */
	  var Emitter = function() {
	    this._enabled = true;
	
	    // Dirty trick that will set the necessary properties to the emitter
	    this.unbindAll();
	  };
	
	  /**
	   * This method unbinds every handlers attached to every or any events. So,
	   * these functions will no more be executed when the related events are
	   * emitted. If the functions were not bound to the events, nothing will
	   * happen, and no error will be thrown.
	   *
	   * Usage:
	   * ******
	   * > myEmitter.unbindAll();
	   *
	   * @return {Emitter}      Returns this.
	   */
	  Emitter.prototype.unbindAll = function() {
	
	    this._handlers = {};
	    this._handlersAll = [];
	    this._handlersComplex = [];
	
	    return this;
	  };
	
	
	  /**
	   * This method binds one or more functions to the emitter, handled to one or a
	   * suite of events. So, these functions will be executed anytime one related
	   * event is emitted.
	   *
	   * It is also possible to bind a function to any emitted event by not
	   * specifying any event to bind the function to.
	   *
	   * Recognized options:
	   * *******************
	   *  - {?boolean} once   If true, the handlers will be unbound after the first
	   *                      execution. Default value: false.
	   *  - {?object}  scope  If a scope is given, then the listeners will be called
	   *                      with this scope as "this".
	   *
	   * Variant 1:
	   * **********
	   * > myEmitter.on('myEvent', function(e) { console.log(e); });
	   * > // Or:
	   * > myEmitter.on('myEvent', function(e) { console.log(e); }, { once: true });
	   *
	   * @param  {string}   event   The event to listen to.
	   * @param  {function} handler The function to bind.
	   * @param  {?object}  options Eventually some options.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 2:
	   * **********
	   * > myEmitter.on(
	   * >   ['myEvent1', 'myEvent2'],
	   * >   function(e) { console.log(e); }
	   * >);
	   * > // Or:
	   * > myEmitter.on(
	   * >   ['myEvent1', 'myEvent2'],
	   * >   function(e) { console.log(e); }
	   * >   { once: true }}
	   * >);
	   *
	   * @param  {array}    events  The events to listen to.
	   * @param  {function} handler The function to bind.
	   * @param  {?object}  options Eventually some options.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 3:
	   * **********
	   * > myEmitter.on({
	   * >   myEvent1: function(e) { console.log(e); },
	   * >   myEvent2: function(e) { console.log(e); }
	   * > });
	   * > // Or:
	   * > myEmitter.on({
	   * >   myEvent1: function(e) { console.log(e); },
	   * >   myEvent2: function(e) { console.log(e); }
	   * > }, { once: true });
	   *
	   * @param  {object}  bindings An object containing pairs event / function.
	   * @param  {?object}  options Eventually some options.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 4:
	   * **********
	   * > myEmitter.on(function(e) { console.log(e); });
	   * > // Or:
	   * > myEmitter.on(function(e) { console.log(e); }, { once: true});
	   *
	   * @param  {function} handler The function to bind to every events.
	   * @param  {?object}  options Eventually some options.
	   * @return {Emitter}          Returns this.
	   */
	  Emitter.prototype.on = function(a, b, c) {
	    var i,
	        l,
	        k,
	        event,
	        eArray,
	        handlersList,
	        bindingObject;
	
	    // Variant 3
	    if (isPlainObject(a)) {
	      forIn(a, function(name, fn) {
	        this.on(name, fn, b);
	      }, this);
	
	      return this;
	    }
	
	    // Variant 1, 2 and 4
	    if (typeof a === 'function') {
	      c = b;
	      b = a;
	      a = null;
	    }
	
	    eArray = [].concat(a);
	
	    for (i = 0, l = eArray.length; i < l; i++) {
	      event = eArray[i];
	
	      bindingObject = {
	        order: __order++,
	        fn: b
	      };
	
	      // Defining the list in which the handler should be inserted
	      if (typeof event === 'string' || typeof event === 'symbol') {
	        if (!this._handlers[event])
	          this._handlers[event] = [];
	        handlersList = this._handlers[event];
	        bindingObject.type = event;
	      }
	      else if (event instanceof RegExp) {
	        handlersList = this._handlersComplex;
	        bindingObject.pattern = event;
	      }
	      else if (event === null) {
	        handlersList = this._handlersAll;
	      }
	      else {
	        throw Error('Emitter.on: invalid event.');
	      }
	
	      // Appending needed properties
	      for (k in c || {})
	        if (__allowedOptions[k])
	          bindingObject[k] = c[k];
	
	      handlersList.push(bindingObject);
	    }
	
	    return this;
	  };
	
	
	  /**
	   * This method works exactly as the previous #on, but will add an options
	   * object if none is given, and set the option "once" to true.
	   *
	   * The polymorphism works exactly as with the #on method.
	   */
	  Emitter.prototype.once = function() {
	    var args = Array.prototype.slice.call(arguments),
	        li = args.length - 1;
	
	    if (isPlainObject(args[li]) && args.length > 1)
	      args[li] = shallowMerge(args[li], {once: true});
	    else
	      args.push({once: true});
	
	    return this.on.apply(this, args);
	  };
	
	
	  /**
	   * This method unbinds one or more functions from events of the emitter. So,
	   * these functions will no more be executed when the related events are
	   * emitted. If the functions were not bound to the events, nothing will
	   * happen, and no error will be thrown.
	   *
	   * Variant 1:
	   * **********
	   * > myEmitter.off('myEvent', myHandler);
	   *
	   * @param  {string}   event   The event to unbind the handler from.
	   * @param  {function} handler The function to unbind.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 2:
	   * **********
	   * > myEmitter.off(['myEvent1', 'myEvent2'], myHandler);
	   *
	   * @param  {array}    events  The events to unbind the handler from.
	   * @param  {function} handler The function to unbind.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 3:
	   * **********
	   * > myEmitter.off({
	   * >   myEvent1: myHandler1,
	   * >   myEvent2: myHandler2
	   * > });
	   *
	   * @param  {object} bindings An object containing pairs event / function.
	   * @return {Emitter}         Returns this.
	   *
	   * Variant 4:
	   * **********
	   * > myEmitter.off(myHandler);
	   *
	   * @param  {function} handler The function to unbind from every events.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 5:
	   * **********
	   * > myEmitter.off(event);
	   *
	   * @param  {string} event     The event we should unbind.
	   * @return {Emitter}          Returns this.
	   */
	  function filter(target, fn) {
	    target = target || [];
	
	    var a = [],
	        l,
	        i;
	
	    for (i = 0, l = target.length; i < l; i++)
	      if (target[i].fn !== fn)
	        a.push(target[i]);
	
	    return a;
	  }
	
	  Emitter.prototype.off = function(events, fn) {
	    var i,
	        n,
	        k,
	        event;
	
	    // Variant 4:
	    if (arguments.length === 1 && typeof events === 'function') {
	      fn = arguments[0];
	
	      // Handlers bound to events:
	      for (k in this._handlers) {
	        this._handlers[k] = filter(this._handlers[k], fn);
	
	        if (this._handlers[k].length === 0)
	          delete this._handlers[k];
	      }
	
	      // Generic Handlers
	      this._handlersAll = filter(this._handlersAll, fn);
	
	      // Complex handlers
	      this._handlersComplex = filter(this._handlersComplex, fn);
	    }
	
	    // Variant 5
	    else if (arguments.length === 1 &&
	             (typeof events === 'string' || typeof events === 'symbol')) {
	      delete this._handlers[events];
	    }
	
	    // Variant 1 and 2:
	    else if (arguments.length === 2) {
	      var eArray = [].concat(events);
	
	      for (i = 0, n = eArray.length; i < n; i++) {
	        event = eArray[i];
	
	        this._handlers[event] = filter(this._handlers[event], fn);
	
	        if ((this._handlers[event] || []).length === 0)
	          delete this._handlers[event];
	      }
	    }
	
	    // Variant 3
	    else if (isPlainObject(events)) {
	      forIn(events, this.off, this);
	    }
	
	    return this;
	  };
	
	  /**
	   * This method retrieve the listeners attached to a particular event.
	   *
	   * @param  {?string}    Name of the event.
	   * @return {array}      Array of handler functions.
	   */
	  Emitter.prototype.listeners = function(event) {
	    var handlers = this._handlersAll || [],
	        complex = false,
	        h,
	        i,
	        l;
	
	    if (!event)
	      throw Error('Emitter.listeners: no event provided.');
	
	    handlers = handlers.concat(this._handlers[event] || []);
	
	    for (i = 0, l = this._handlersComplex.length; i < l; i++) {
	      h = this._handlersComplex[i];
	
	      if (~event.search(h.pattern)) {
	        complex = true;
	        handlers.push(h);
	      }
	    }
	
	    // If we have any complex handlers, we need to sort
	    if (this._handlersAll.length || complex)
	      return handlers.sort(function(a, b) {
	        return a.order - b.order;
	      });
	    else
	      return handlers.slice(0);
	  };
	
	  /**
	   * This method emits the specified event(s), and executes every handlers bound
	   * to the event(s).
	   *
	   * Use cases:
	   * **********
	   * > myEmitter.emit('myEvent');
	   * > myEmitter.emit('myEvent', myData);
	   * > myEmitter.emit(['myEvent1', 'myEvent2']);
	   * > myEmitter.emit(['myEvent1', 'myEvent2'], myData);
	   * > myEmitter.emit({myEvent1: myData1, myEvent2: myData2});
	   *
	   * @param  {string|array} events The event(s) to emit.
	   * @param  {object?}      data   The data.
	   * @return {Emitter}             Returns this.
	   */
	  Emitter.prototype.emit = function(events, data) {
	
	    // Short exit if the emitter is disabled
	    if (!this._enabled)
	      return this;
	
	    // Object variant
	    if (isPlainObject(events)) {
	      forIn(events, this.emit, this);
	      return this;
	    }
	
	    var eArray = [].concat(events),
	        onces = [],
	        event,
	        parent,
	        handlers,
	        handler,
	        i,
	        j,
	        l,
	        m;
	
	    for (i = 0, l = eArray.length; i < l; i++) {
	      handlers = this.listeners(eArray[i]);
	
	      for (j = 0, m = handlers.length; j < m; j++) {
	        handler = handlers[j];
	        event = {
	          type: eArray[i],
	          target: this
	        };
	
	        if (arguments.length > 1)
	          event.data = data;
	
	        handler.fn.call('scope' in handler ? handler.scope : this, event);
	
	        if (handler.once)
	          onces.push(handler);
	      }
	
	      // Cleaning onces
	      for (j = onces.length - 1; j >= 0; j--) {
	        parent = onces[j].type ?
	          this._handlers[onces[j].type] :
	          onces[j].pattern ?
	            this._handlersComplex :
	            this._handlersAll;
	
	        parent.splice(parent.indexOf(onces[j]), 1);
	      }
	    }
	
	    return this;
	  };
	
	
	  /**
	   * This method will unbind all listeners and make it impossible to ever
	   * rebind any listener to any event.
	   */
	  Emitter.prototype.kill = function() {
	
	    this.unbindAll();
	    this._handlers = null;
	    this._handlersAll = null;
	    this._handlersComplex = null;
	    this._enabled = false;
	
	    // Nooping methods
	    this.unbindAll =
	    this.on =
	    this.once =
	    this.off =
	    this.emit =
	    this.listeners = Function.prototype;
	  };
	
	
	  /**
	   * This method disabled the emitter, which means its emit method will do
	   * nothing.
	   *
	   * @return {Emitter} Returns this.
	   */
	  Emitter.prototype.disable = function() {
	    this._enabled = false;
	
	    return this;
	  };
	
	
	  /**
	   * This method enables the emitter.
	   *
	   * @return {Emitter} Returns this.
	   */
	  Emitter.prototype.enable = function() {
	    this._enabled = true;
	
	    return this;
	  };
	
	
	  /**
	   * Version:
	   */
	  Emitter.version = '3.1.1';
	
	
	  // Export:
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports)
	      exports = module.exports = Emitter;
	    exports.Emitter = Emitter;
	  } else if (typeof define === 'function' && define.amd)
	    define('emmett', [], function() {
	      return Emitter;
	    });
	  else
	    this.Emitter = Emitter;
	}).call(this);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Cursors
	 * ===============
	 *
	 * Cursors created by selecting some data within a Baobab tree.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _emmett = __webpack_require__(6);
	
	var _emmett2 = _interopRequireDefault(_emmett);
	
	var _monkey = __webpack_require__(8);
	
	var _type = __webpack_require__(9);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _helpers = __webpack_require__(11);
	
	/**
	 * Traversal helper function for dynamic cursors. Will throw a legible error
	 * if traversal is not possible.
	 *
	 * @param {string} method     - The method name, to create a correct error msg.
	 * @param {array}  solvedPath - The cursor's solved path.
	 */
	function checkPossibilityOfDynamicTraversal(method, solvedPath) {
	  if (!solvedPath) throw (0, _helpers.makeError)('Baobab.Cursor.' + method + ': ' + ('cannot use ' + method + ' on an unresolved dynamic path.'), { path: solvedPath });
	}
	
	/**
	 * Cursor class
	 *
	 * @constructor
	 * @param {Baobab} tree   - The cursor's root.
	 * @param {array}  path   - The cursor's path in the tree.
	 * @param {string} hash   - The path's hash computed ahead by the tree.
	 */
	
	var Cursor = (function (_Emitter) {
	  _inherits(Cursor, _Emitter);
	
	  function Cursor(tree, path, hash) {
	    var _this = this;
	
	    _classCallCheck(this, Cursor);
	
	    _get(Object.getPrototypeOf(Cursor.prototype), 'constructor', this).call(this);
	
	    // If no path were to be provided, we fallback to an empty path (root)
	    path = path || [];
	
	    // Privates
	    this._identity = '[object Cursor]';
	    this._archive = null;
	
	    // Properties
	    this.tree = tree;
	    this.path = path;
	    this.hash = hash;
	
	    // State
	    this.state = {
	      killed: false,
	      recording: false,
	      undoing: false
	    };
	
	    // Checking whether the given path is dynamic or not
	    this._dynamicPath = _type2['default'].dynamicPath(this.path);
	
	    // Checking whether the given path will meet a monkey
	    this._monkeyPath = _type2['default'].monkeyPath(this.tree._monkeys, this.path);
	
	    if (!this._dynamicPath) this.solvedPath = this.path;else this.solvedPath = (0, _helpers.getIn)(this.tree._data, this.path).solvedPath;
	
	    /**
	     * Listener bound to the tree's writes so that cursors with dynamic paths
	     * may update their solved path correctly.
	     *
	     * @param {object} event - The event fired by the tree.
	     */
	    this._writeHandler = function (_ref) {
	      var data = _ref.data;
	
	      if (_this.state.killed || !(0, _helpers.solveUpdate)([data.path], _this._getComparedPaths())) return;
	
	      _this.solvedPath = (0, _helpers.getIn)(_this.tree._data, _this.path).solvedPath;
	    };
	
	    /**
	     * Function in charge of actually trigger the cursor's updates and
	     * deal with the archived records.
	     *
	     * @note: probably should wrap the current solvedPath in closure to avoid
	     * for tricky cases where it would fail.
	     *
	     * @param {mixed} previousData - the tree's previous data.
	     */
	    var fireUpdate = function fireUpdate(previousData) {
	      var self = _this;
	
	      var eventData = Object.defineProperties({}, {
	        previousData: {
	          get: function get() {
	            return (0, _helpers.getIn)(previousData, self.solvedPath).data;
	          },
	          configurable: true,
	          enumerable: true
	        },
	        currentData: {
	          get: function get() {
	            return self.get();
	          },
	          configurable: true,
	          enumerable: true
	        }
	      });
	
	      if (_this.state.recording && !_this.state.undoing) _this.archive.add(eventData.previousData);
	
	      _this.state.undoing = false;
	
	      return _this.emit('update', eventData);
	    };
	
	    /**
	     * Listener bound to the tree's updates and determining whether the
	     * cursor is affected and should react accordingly.
	     *
	     * Note that this listener is lazily bound to the tree to be sure
	     * one wouldn't leak listeners when only creating cursors for convenience
	     * and not to listen to updates specifically.
	     *
	     * @param {object} event - The event fired by the tree.
	     */
	    this._updateHandler = function (event) {
	      if (_this.state.killed) return;
	
	      var _event$data = event.data;
	      var paths = _event$data.paths;
	      var previousData = _event$data.previousData;
	      var update = fireUpdate.bind(_this, previousData);
	      var comparedPaths = _this._getComparedPaths();
	
	      if ((0, _helpers.solveUpdate)(paths, comparedPaths)) return update();
	    };
	
	    // Lazy binding
	    var bound = false;
	    this._lazyBind = function () {
	      if (bound) return;
	
	      bound = true;
	
	      if (_this._dynamicPath) _this.tree.on('write', _this._writeHandler);
	
	      return _this.tree.on('update', _this._updateHandler);
	    };
	
	    // If the path is dynamic, we actually need to listen to the tree
	    if (this._dynamicPath) {
	      this._lazyBind();
	    } else {
	
	      // Overriding the emitter `on` and `once` methods
	      this.on = (0, _helpers.before)(this._lazyBind, this.on.bind(this));
	      this.once = (0, _helpers.before)(this._lazyBind, this.once.bind(this));
	    }
	  }
	
	  /**
	   * Method used to allow iterating over cursors containing list-type data.
	   *
	   * e.g. for(let i of cursor) { ... }
	   *
	   * @returns {object} -  Each item sequentially.
	   */
	
	  /**
	   * Internal helpers
	   * -----------------
	   */
	
	  /**
	   * Method returning the paths of the tree watched over by the cursor and that
	   * should be taken into account when solving a potential update.
	   *
	   * @return {array} - Array of paths to compare with a given update.
	   */
	
	  _createClass(Cursor, [{
	    key: '_getComparedPaths',
	    value: function _getComparedPaths() {
	
	      // Checking whether we should keep track of some dependencies
	      var additionalPaths = this._monkeyPath ? (0, _helpers.getIn)(this.tree._monkeys, this._monkeyPath).data.relatedPaths() : [];
	
	      return [this.solvedPath].concat(additionalPaths);
	    }
	
	    /**
	     * Predicates
	     * -----------
	     */
	
	    /**
	     * Method returning whether the cursor is at root level.
	     *
	     * @return {boolean} - Is the cursor the root?
	     */
	  }, {
	    key: 'isRoot',
	    value: function isRoot() {
	      return !this.path.length;
	    }
	
	    /**
	     * Method returning whether the cursor is at leaf level.
	     *
	     * @return {boolean} - Is the cursor a leaf?
	     */
	  }, {
	    key: 'isLeaf',
	    value: function isLeaf() {
	      return _type2['default'].primitive(this._get().data);
	    }
	
	    /**
	     * Method returning whether the cursor is at branch level.
	     *
	     * @return {boolean} - Is the cursor a branch?
	     */
	  }, {
	    key: 'isBranch',
	    value: function isBranch() {
	      return !this.isRoot() && !this.isLeaf();
	    }
	
	    /**
	     * Traversal Methods
	     * ------------------
	     */
	
	    /**
	     * Method returning the root cursor.
	     *
	     * @return {Baobab} - The root cursor.
	     */
	  }, {
	    key: 'root',
	    value: function root() {
	      return this.tree.select();
	    }
	
	    /**
	     * Method selecting a subpath as a new cursor.
	     *
	     * Arity (1):
	     * @param  {path} path    - The path to select.
	     *
	     * Arity (*):
	     * @param  {...step} path - The path to select.
	     *
	     * @return {Cursor}       - The created cursor.
	     */
	  }, {
	    key: 'select',
	    value: function select(path) {
	      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);
	
	      return this.tree.select(this.path.concat(path));
	    }
	
	    /**
	     * Method returning the parent node of the cursor or else `null` if the
	     * cursor is already at root level.
	     *
	     * @return {Baobab} - The parent cursor.
	     */
	  }, {
	    key: 'up',
	    value: function up() {
	      if (!this.isRoot()) return this.tree.select(this.path.slice(0, -1));
	
	      return null;
	    }
	
	    /**
	     * Method returning the child node of the cursor.
	     *
	     * @return {Baobab} - The child cursor.
	     */
	  }, {
	    key: 'down',
	    value: function down() {
	      checkPossibilityOfDynamicTraversal('down', this.solvedPath);
	
	      if (!(this._get().data instanceof Array)) throw Error('Baobab.Cursor.down: cannot go down on a non-list type.');
	
	      return this.tree.select(this.solvedPath.concat(0));
	    }
	
	    /**
	     * Method returning the left sibling node of the cursor if this one is
	     * pointing at a list. Returns `null` if this cursor is already leftmost.
	     *
	     * @return {Baobab} - The left sibling cursor.
	     */
	  }, {
	    key: 'left',
	    value: function left() {
	      checkPossibilityOfDynamicTraversal('left', this.solvedPath);
	
	      var last = +this.solvedPath[this.solvedPath.length - 1];
	
	      if (isNaN(last)) throw Error('Baobab.Cursor.left: cannot go left on a non-list type.');
	
	      return last ? this.tree.select(this.solvedPath.slice(0, -1).concat(last - 1)) : null;
	    }
	
	    /**
	     * Method returning the right sibling node of the cursor if this one is
	     * pointing at a list. Returns `null` if this cursor is already rightmost.
	     *
	     * @return {Baobab} - The right sibling cursor.
	     */
	  }, {
	    key: 'right',
	    value: function right() {
	      checkPossibilityOfDynamicTraversal('right', this.solvedPath);
	
	      var last = +this.solvedPath[this.solvedPath.length - 1];
	
	      if (isNaN(last)) throw Error('Baobab.Cursor.right: cannot go right on a non-list type.');
	
	      if (last + 1 === this.up()._get().data.length) return null;
	
	      return this.tree.select(this.solvedPath.slice(0, -1).concat(last + 1));
	    }
	
	    /**
	     * Method returning the leftmost sibling node of the cursor if this one is
	     * pointing at a list.
	     *
	     * @return {Baobab} - The leftmost sibling cursor.
	     */
	  }, {
	    key: 'leftmost',
	    value: function leftmost() {
	      checkPossibilityOfDynamicTraversal('leftmost', this.solvedPath);
	
	      var last = +this.solvedPath[this.solvedPath.length - 1];
	
	      if (isNaN(last)) throw Error('Baobab.Cursor.leftmost: cannot go left on a non-list type.');
	
	      return this.tree.select(this.solvedPath.slice(0, -1).concat(0));
	    }
	
	    /**
	     * Method returning the rightmost sibling node of the cursor if this one is
	     * pointing at a list.
	     *
	     * @return {Baobab} - The rightmost sibling cursor.
	     */
	  }, {
	    key: 'rightmost',
	    value: function rightmost() {
	      checkPossibilityOfDynamicTraversal('rightmost', this.solvedPath);
	
	      var last = +this.solvedPath[this.solvedPath.length - 1];
	
	      if (isNaN(last)) throw Error('Baobab.Cursor.rightmost: cannot go right on a non-list type.');
	
	      var list = this.up()._get().data;
	
	      return this.tree.select(this.solvedPath.slice(0, -1).concat(list.length - 1));
	    }
	
	    /**
	     * Method mapping the children nodes of the cursor.
	     *
	     * @param  {function} fn      - The function to map.
	     * @param  {object}   [scope] - An optional scope.
	     * @return {array}            - The resultant array.
	     */
	  }, {
	    key: 'map',
	    value: function map(fn, scope) {
	      checkPossibilityOfDynamicTraversal('map', this.solvedPath);
	
	      var array = this._get().data,
	          l = arguments.length;
	
	      if (!_type2['default'].array(array)) throw Error('baobab.Cursor.map: cannot map a non-list type.');
	
	      return array.map(function (item, i) {
	        return fn.call(l > 1 ? scope : this, this.select(i), i, array);
	      }, this);
	    }
	
	    /**
	     * Getter Methods
	     * ---------------
	     */
	
	    /**
	     * Internal get method. Basically contains the main body of the `get` method
	     * without the event emitting. This is sometimes needed not to fire useless
	     * events.
	     *
	     * @param  {path}   [path=[]]       - Path to get in the tree.
	     * @return {object} info            - The resultant information.
	     * @return {mixed}  info.data       - Data at path.
	     * @return {array}  info.solvedPath - The path solved when getting.
	     */
	  }, {
	    key: '_get',
	    value: function _get() {
	      var path = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
	      if (!_type2['default'].path(path)) throw (0, _helpers.makeError)('Baobab.Cursor.getters: invalid path.', { path: path });
	
	      if (!this.solvedPath) return { data: undefined, solvedPath: null, exists: false };
	
	      return (0, _helpers.getIn)(this.tree._data, this.solvedPath.concat(path));
	    }
	
	    /**
	     * Method used to check whether a certain path exists in the tree starting
	     * from the current cursor.
	     *
	     * Arity (1):
	     * @param  {path}   path           - Path to check in the tree.
	     *
	     * Arity (2):
	     * @param {..step}  path           - Path to check in the tree.
	     *
	     * @return {boolean}               - Does the given path exists?
	     */
	  }, {
	    key: 'exists',
	    value: function exists(path) {
	      path = (0, _helpers.coercePath)(path);
	
	      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);
	
	      return this._get(path).exists;
	    }
	
	    /**
	     * Method used to get data from the tree. Will fire a `get` event from the
	     * tree so that the user may sometimes react upon it to fetch data, for
	     * instance.
	     *
	     * Arity (1):
	     * @param  {path}   path           - Path to get in the tree.
	     *
	     * Arity (2):
	     * @param  {..step} path           - Path to get in the tree.
	     *
	     * @return {mixed}                 - Data at path.
	     */
	  }, {
	    key: 'get',
	    value: function get(path) {
	      path = (0, _helpers.coercePath)(path);
	
	      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);
	
	      var _get2 = this._get(path);
	
	      var data = _get2.data;
	      var solvedPath = _get2.solvedPath;
	
	      // Emitting the event
	      this.tree.emit('get', { data: data, solvedPath: solvedPath, path: this.path.concat(path) });
	
	      return data;
	    }
	
	    /**
	     * Method used to shallow clone data from the tree.
	     *
	     * Arity (1):
	     * @param  {path}   path           - Path to get in the tree.
	     *
	     * Arity (2):
	     * @param  {..step} path           - Path to get in the tree.
	     *
	     * @return {mixed}                 - Cloned data at path.
	     */
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var data = this.get.apply(this, arguments);
	
	      return (0, _helpers.shallowClone)(data);
	    }
	
	    /**
	     * Method used to deep clone data from the tree.
	     *
	     * Arity (1):
	     * @param  {path}   path           - Path to get in the tree.
	     *
	     * Arity (2):
	     * @param  {..step} path           - Path to get in the tree.
	     *
	     * @return {mixed}                 - Cloned data at path.
	     */
	  }, {
	    key: 'deepClone',
	    value: function deepClone() {
	      var data = this.get.apply(this, arguments);
	
	      return (0, _helpers.deepClone)(data);
	    }
	
	    /**
	     * Method used to return raw data from the tree, by carefully avoiding
	     * computed one.
	     *
	     * @todo: should be more performant as the cloning should happen as well as
	     * when dropping computed data.
	     *
	     * Arity (1):
	     * @param  {path}   path           - Path to serialize in the tree.
	     *
	     * Arity (2):
	     * @param  {..step} path           - Path to serialize in the tree.
	     *
	     * @return {mixed}                 - The retrieved raw data.
	     */
	  }, {
	    key: 'serialize',
	    value: function serialize(path) {
	      path = (0, _helpers.coercePath)(path);
	
	      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);
	
	      if (!_type2['default'].path(path)) throw (0, _helpers.makeError)('Baobab.Cursor.getters: invalid path.', { path: path });
	
	      if (!this.solvedPath) return undefined;
	
	      var fullPath = this.solvedPath.concat(path);
	
	      var data = (0, _helpers.deepClone)((0, _helpers.getIn)(this.tree._data, fullPath).data),
	          monkeys = (0, _helpers.getIn)(this.tree._monkeys, fullPath).data;
	
	      var dropComputedData = function dropComputedData(d, m) {
	        if (!_type2['default'].object(m) || !_type2['default'].object(d)) return;
	
	        for (var k in m) {
	          if (m[k] instanceof _monkey.Monkey) delete d[k];else dropComputedData(d[k], m[k]);
	        }
	      };
	
	      dropComputedData(data, monkeys);
	      return data;
	    }
	
	    /**
	     * Method used to project some of the data at cursor onto a map or a list.
	     *
	     * @param  {object|array} projection - The projection's formal definition.
	     * @return {object|array}            - The resultant map/list.
	     */
	  }, {
	    key: 'project',
	    value: function project(projection) {
	      if (_type2['default'].object(projection)) {
	        var data = {};
	
	        for (var k in projection) {
	          data[k] = this.get(projection[k]);
	        }return data;
	      } else if (_type2['default'].array(projection)) {
	        var data = [];
	
	        for (var i = 0, l = projection.length; i < l; i++) {
	          data.push(this.get(projection[i]));
	        }return data;
	      }
	
	      throw (0, _helpers.makeError)('Baobab.Cursor.project: wrong projection.', { projection: projection });
	    }
	
	    /**
	     * History Methods
	     * ----------------
	     */
	
	    /**
	     * Methods starting to record the cursor's successive states.
	     *
	     * @param  {integer} [maxRecords] - Maximum records to keep in memory. Note
	     *                                  that if no number is provided, the cursor
	     *                                  will keep everything.
	     * @return {Cursor}               - The cursor instance for chaining purposes.
	     */
	  }, {
	    key: 'startRecording',
	    value: function startRecording(maxRecords) {
	      maxRecords = maxRecords || Infinity;
	
	      if (maxRecords < 1) throw (0, _helpers.makeError)('Baobab.Cursor.startRecording: invalid max records.', {
	        value: maxRecords
	      });
	
	      this.state.recording = true;
	
	      if (this.archive) return this;
	
	      // Lazy binding
	      this._lazyBind();
	
	      this.archive = new _helpers.Archive(maxRecords);
	      return this;
	    }
	
	    /**
	     * Methods stopping to record the cursor's successive states.
	     *
	     * @return {Cursor} - The cursor instance for chaining purposes.
	     */
	  }, {
	    key: 'stopRecording',
	    value: function stopRecording() {
	      this.state.recording = false;
	      return this;
	    }
	
	    /**
	     * Methods undoing n steps of the cursor's recorded states.
	     *
	     * @param  {integer} [steps=1] - The number of steps to rollback.
	     * @return {Cursor}            - The cursor instance for chaining purposes.
	     */
	  }, {
	    key: 'undo',
	    value: function undo() {
	      var steps = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	      if (!this.state.recording) throw new Error('Baobab.Cursor.undo: cursor is not recording.');
	
	      var record = this.archive.back(steps);
	
	      if (!record) throw Error('Baobab.Cursor.undo: cannot find a relevant record.');
	
	      this.state.undoing = true;
	      this.set(record);
	
	      return this;
	    }
	
	    /**
	     * Methods returning whether the cursor has a recorded history.
	     *
	     * @return {boolean} - `true` if the cursor has a recorded history?
	     */
	  }, {
	    key: 'hasHistory',
	    value: function hasHistory() {
	      return !!(this.archive && this.archive.get().length);
	    }
	
	    /**
	     * Methods returning the cursor's history.
	     *
	     * @return {array} - The cursor's history.
	     */
	  }, {
	    key: 'getHistory',
	    value: function getHistory() {
	      return this.archive ? this.archive.get() : [];
	    }
	
	    /**
	     * Methods clearing the cursor's history.
	     *
	     * @return {Cursor} - The cursor instance for chaining purposes.
	     */
	  }, {
	    key: 'clearHistory',
	    value: function clearHistory() {
	      if (this.archive) this.archive.clear();
	      return this;
	    }
	
	    /**
	     * Releasing
	     * ----------
	     */
	
	    /**
	     * Methods releasing the cursor from memory.
	     */
	  }, {
	    key: 'release',
	    value: function release() {
	
	      // Removing listeners on parent
	      if (this._dynamicPath) this.tree.off('write', this._writeHandler);
	
	      this.tree.off('update', this._updateHandler);
	
	      // Unsubscribe from the parent
	      if (this.hash) delete this.tree._cursors[this.hash];
	
	      // Dereferencing
	      delete this.tree;
	      delete this.path;
	      delete this.solvedPath;
	      delete this.archive;
	
	      // Killing emitter
	      this.kill();
	      this.state.killed = true;
	    }
	
	    /**
	     * Output
	     * -------
	     */
	
	    /**
	     * Overriding the `toJSON` method for convenient use with JSON.stringify.
	     *
	     * @return {mixed} - Data at cursor.
	     */
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return this.serialize();
	    }
	
	    /**
	     * Overriding the `toString` method for debugging purposes.
	     *
	     * @return {string} - The cursor's identity.
	     */
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this._identity;
	    }
	  }]);
	
	  return Cursor;
	})(_emmett2['default']);
	
	exports['default'] = Cursor;
	if (typeof Symbol === 'function' && typeof Symbol.iterator !== 'undefined') {
	  Cursor.prototype[Symbol.iterator] = function () {
	    var array = this._get().data;
	
	    if (!_type2['default'].array(array)) throw Error('baobab.Cursor.@@iterate: cannot iterate a non-list type.');
	
	    var i = 0;
	
	    var cursor = this,
	        length = array.length;
	
	    return {
	      next: function next() {
	        if (i < length) {
	          return {
	            value: cursor.select(i++)
	          };
	        }
	
	        return {
	          done: true
	        };
	      }
	    };
	  };
	}
	
	/**
	 * Setter Methods
	 * ---------------
	 *
	 * Those methods are dynamically assigned to the class for DRY reasons.
	 */
	
	// Not using a Set so that ES5 consumers don't pay a bundle size price
	var INTRANSITIVE_SETTERS = {
	  unset: true,
	  pop: true,
	  shift: true
	};
	
	/**
	 * Function creating a setter method for the Cursor class.
	 *
	 * @param {string}   name          - the method's name.
	 * @param {function} [typeChecker] - a function checking that the given value is
	 *                                   valid for the given operation.
	 */
	function makeSetter(name, typeChecker) {
	
	  /**
	   * Binding a setter method to the Cursor class and having the following
	   * definition.
	   *
	   * Note: this is not really possible to make those setters variadic because
	   * it would create an impossible polymorphism with path.
	   *
	   * @todo: perform value validation elsewhere so that tree.update can
	   * beneficiate from it.
	   *
	   * Arity (1):
	   * @param  {mixed} value - New value to set at cursor's path.
	   *
	   * Arity (2):
	   * @param  {path}  path  - Subpath to update starting from cursor's.
	   * @param  {mixed} value - New value to set.
	   *
	   * @return {mixed}       - Data at path.
	   */
	  Cursor.prototype[name] = function (path, value) {
	
	    // We should warn the user if he applies to many arguments to the function
	    if (arguments.length > 2) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': too many arguments.');
	
	    // Handling arities
	    if (arguments.length === 1 && !INTRANSITIVE_SETTERS[name]) {
	      value = path;
	      path = [];
	    }
	
	    // Coerce path
	    path = (0, _helpers.coercePath)(path);
	
	    // Checking the path's validity
	    if (!_type2['default'].path(path)) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': invalid path.', { path: path });
	
	    // Checking the value's validity
	    if (typeChecker && !typeChecker(value)) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': invalid value.', { path: path, value: value });
	
	    // Checking the solvability of the cursor's dynamic path
	    if (!this.solvedPath) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': the dynamic path of the cursor cannot be solved.', { path: this.path });
	
	    var fullPath = this.solvedPath.concat(path);
	
	    // Filing the update to the tree
	    return this.tree.update(fullPath, {
	      type: name,
	      value: value
	    });
	  };
	}
	
	/**
	 * Making the necessary setters.
	 */
	makeSetter('set');
	makeSetter('unset');
	makeSetter('apply', _type2['default']['function']);
	makeSetter('push');
	makeSetter('concat', _type2['default'].array);
	makeSetter('unshift');
	makeSetter('pop');
	makeSetter('shift');
	makeSetter('splice', _type2['default'].splicer);
	makeSetter('merge', _type2['default'].object);
	makeSetter('deepMerge', _type2['default'].object);
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Monkeys
	 * ===============
	 *
	 * Exposing both handy monkey definitions and the underlying working class.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _type = __webpack_require__(9);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _update2 = __webpack_require__(10);
	
	var _update3 = _interopRequireDefault(_update2);
	
	var _helpers = __webpack_require__(11);
	
	/**
	 * Monkey Definition class
	 * Note: The only reason why this is a class is to be able to spot it within
	 * otherwise ordinary data.
	 *
	 * @constructor
	 * @param {array|object} definition - The formal definition of the monkey.
	 */
	
	var MonkeyDefinition = function MonkeyDefinition(definition) {
	  var _this = this;
	
	  _classCallCheck(this, MonkeyDefinition);
	
	  var monkeyType = _type2['default'].monkeyDefinition(definition);
	
	  if (!monkeyType) throw (0, _helpers.makeError)('Baobab.monkey: invalid definition.', { definition: definition });
	
	  this.type = monkeyType;
	
	  if (this.type === 'object') {
	    this.getter = definition.get;
	    this.projection = definition.cursors || {};
	    this.paths = Object.keys(this.projection).map(function (k) {
	      return _this.projection[k];
	    });
	    this.options = definition.options || {};
	  } else {
	    var offset = 1,
	        options = {};
	
	    if (_type2['default'].object(definition[definition.length - 1])) {
	      offset++;
	      options = definition[definition.length - 1];
	    }
	
	    this.getter = definition[definition.length - offset];
	    this.projection = definition.slice(0, -offset);
	    this.paths = this.projection;
	    this.options = options;
	  }
	
	  // Coercing paths for convenience
	  this.paths = this.paths.map(function (p) {
	    return [].concat(p);
	  });
	
	  // Does the definition contain dynamic paths
	  this.hasDynamicPaths = this.paths.some(_type2['default'].dynamicPath);
	}
	
	/**
	 * Monkey core class
	 *
	 * @constructor
	 * @param {Baobab}           tree       - The bound tree.
	 * @param {MonkeyDefinition} definition - A definition instance.
	 */
	;
	
	exports.MonkeyDefinition = MonkeyDefinition;
	
	var Monkey = (function () {
	  function Monkey(tree, pathInTree, definition) {
	    var _this2 = this;
	
	    _classCallCheck(this, Monkey);
	
	    // Properties
	    this.tree = tree;
	    this.path = pathInTree;
	    this.definition = definition;
	
	    // Adapting the definition's paths & projection to this monkey's case
	    var projection = definition.projection,
	        relative = _helpers.solveRelativePath.bind(null, pathInTree.slice(0, -1));
	
	    if (definition.type === 'object') {
	      this.projection = Object.keys(projection).reduce(function (acc, k) {
	        acc[k] = relative(projection[k]);
	        return acc;
	      }, {});
	      this.depPaths = Object.keys(this.projection).map(function (k) {
	        return _this2.projection[k];
	      });
	    } else {
	      this.projection = projection.map(relative);
	      this.depPaths = this.projection;
	    }
	
	    // Internal state
	    this.state = {
	      killed: false
	    };
	
	    /**
	     * Listener on the tree's `write` event.
	     *
	     * When the tree writes, this listener will check whether the updated paths
	     * are of any use to the monkey and, if so, will update the tree's node
	     * where the monkey sits.
	     */
	    this.writeListener = function (_ref) {
	      var path = _ref.data.path;
	
	      if (_this2.state.killed) return;
	
	      // Is the monkey affected by the current write event?
	      var concerned = (0, _helpers.solveUpdate)([path], _this2.relatedPaths());
	
	      if (concerned) _this2.update();
	    };
	
	    /**
	     * Listener on the tree's `monkey` event.
	     *
	     * When another monkey updates, this listener will check whether the
	     * updated paths are of any use to the monkey and, if so, will update the
	     * tree's node where the monkey sits.
	     */
	    this.recursiveListener = function (_ref2) {
	      var _ref2$data = _ref2.data;
	      var monkey = _ref2$data.monkey;
	      var path = _ref2$data.path;
	
	      if (_this2.state.killed) return;
	
	      // Breaking if this is the same monkey
	      if (_this2 === monkey) return;
	
	      // Is the monkey affected by the current monkey event?
	      var concerned = (0, _helpers.solveUpdate)([path], _this2.relatedPaths(false));
	
	      if (concerned) _this2.update();
	    };
	
	    // Binding listeners
	    this.tree.on('write', this.writeListener);
	    this.tree.on('_monkey', this.recursiveListener);
	
	    // Updating relevant node
	    this.update();
	  }
	
	  /**
	   * Method returning solved paths related to the monkey.
	   *
	   * @param  {boolean} recursive - Should we compute recursive paths?
	   * @return {array}             - An array of related paths.
	   */
	
	  _createClass(Monkey, [{
	    key: 'relatedPaths',
	    value: function relatedPaths() {
	      var _this3 = this;
	
	      var recursive = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      var paths = undefined;
	
	      if (this.definition.hasDynamicPaths) paths = this.depPaths.map(function (p) {
	        return (0, _helpers.getIn)(_this3.tree._data, p).solvedPath;
	      });else paths = this.depPaths;
	
	      var isRecursive = recursive && this.depPaths.some(function (p) {
	        return !!_type2['default'].monkeyPath(_this3.tree._monkeys, p);
	      });
	
	      if (!isRecursive) return paths;
	
	      return paths.reduce(function (accumulatedPaths, path) {
	        var monkeyPath = _type2['default'].monkeyPath(_this3.tree._monkeys, path);
	
	        if (!monkeyPath) return accumulatedPaths.concat([path]);
	
	        // Solving recursive path
	        var relatedMonkey = (0, _helpers.getIn)(_this3.tree._monkeys, monkeyPath).data;
	
	        return accumulatedPaths.concat(relatedMonkey.relatedPaths());
	      }, []);
	    }
	
	    /**
	     * Method used to update the tree's internal data with a lazy getter holding
	     * the computed data.
	     *
	     * @return {Monkey} - Returns itself for chaining purposes.
	     */
	  }, {
	    key: 'update',
	    value: function update() {
	      var deps = this.tree.project(this.projection);
	
	      var lazyGetter = (function (tree, def, data) {
	        var cache = null,
	            alreadyComputed = false;
	
	        return function () {
	
	          if (!alreadyComputed) {
	            cache = def.getter.apply(tree, def.type === 'object' ? [data] : data);
	
	            if (tree.options.immutable && def.options.immutable !== false) (0, _helpers.deepFreeze)(cache);
	
	            alreadyComputed = true;
	          }
	
	          return cache;
	        };
	      })(this.tree, this.definition, deps);
	
	      lazyGetter.isLazyGetter = true;
	
	      // Should we write the lazy getter in the tree or solve it right now?
	      if (this.tree.options.lazyMonkeys) {
	        this.tree._data = (0, _update3['default'])(this.tree._data, this.path, {
	          type: 'monkey',
	          value: lazyGetter
	        }, this.tree.options).data;
	      } else {
	        var result = (0, _update3['default'])(this.tree._data, this.path, {
	          type: 'set',
	          value: lazyGetter(),
	          options: {
	            mutableLeaf: !this.definition.options.immutable
	          }
	        }, this.tree.options);
	
	        if ('data' in result) this.tree._data = result.data;
	      }
	
	      // Notifying the monkey's update so we can handle recursivity
	      this.tree.emit('_monkey', { monkey: this, path: this.path });
	
	      return this;
	    }
	
	    /**
	     * Method releasing the monkey from memory.
	     */
	  }, {
	    key: 'release',
	    value: function release() {
	
	      // Unbinding events
	      this.tree.off('write', this.writeListener);
	      this.tree.off('_monkey', this.monkeyListener);
	      this.state.killed = true;
	
	      // Deleting properties
	      // NOTE: not deleting this.definition because some strange things happen
	      // in the _refreshMonkeys method. See #372.
	      delete this.projection;
	      delete this.depPaths;
	      delete this.tree;
	    }
	  }]);
	
	  return Monkey;
	})();
	
	exports.Monkey = Monkey;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Type Checking
	 * =====================
	 *
	 * Helpers functions used throughout the library to perform some type
	 * tests at runtime.
	 *
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _monkey = __webpack_require__(8);
	
	var type = {};
	
	/**
	 * Helpers
	 * --------
	 */
	
	/**
	 * Checking whether the given variable is of any of the given types.
	 *
	 * @todo   Optimize this function by dropping `some`.
	 *
	 * @param  {mixed} target  - Variable to test.
	 * @param  {array} allowed - Array of allowed types.
	 * @return {boolean}
	 */
	function anyOf(target, allowed) {
	  return allowed.some(function (t) {
	    return type[t](target);
	  });
	}
	
	/**
	 * Simple types
	 * -------------
	 */
	
	/**
	 * Checking whether the given variable is an array.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type.array = function (target) {
	  return Array.isArray(target);
	};
	
	/**
	 * Checking whether the given variable is an object.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type.object = function (target) {
	  return target && typeof target === 'object' && !Array.isArray(target) && !(target instanceof Date) && !(target instanceof RegExp) && !(typeof Map === 'function' && target instanceof Map) && !(typeof Set === 'function' && target instanceof Set);
	};
	
	/**
	 * Checking whether the given variable is a string.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type.string = function (target) {
	  return typeof target === 'string';
	};
	
	/**
	 * Checking whether the given variable is a number.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type.number = function (target) {
	  return typeof target === 'number';
	};
	
	/**
	 * Checking whether the given variable is a function.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type['function'] = function (target) {
	  return typeof target === 'function';
	};
	
	/**
	 * Checking whether the given variable is a JavaScript primitive.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type.primitive = function (target) {
	  return target !== Object(target);
	};
	
	/**
	 * Complex types
	 * --------------
	 */
	
	/**
	 * Checking whether the given variable is a valid splicer.
	 *
	 * @param  {mixed} target    - Variable to test.
	 * @param  {array} [allowed] - Optional valid types in path.
	 * @return {boolean}
	 */
	type.splicer = function (target) {
	  if (!type.array(target) || target.length < 2) return false;
	
	  return anyOf(target[0], ['number', 'function', 'object']) && type.number(target[1]);
	};
	
	/**
	 * Checking whether the given variable is a valid cursor path.
	 *
	 * @param  {mixed} target    - Variable to test.
	 * @param  {array} [allowed] - Optional valid types in path.
	 * @return {boolean}
	 */
	
	// Order is important for performance reasons
	var ALLOWED_FOR_PATH = ['string', 'number', 'function', 'object'];
	
	type.path = function (target) {
	  if (!target && target !== 0 && target !== '') return false;
	
	  return [].concat(target).every(function (step) {
	    return anyOf(step, ALLOWED_FOR_PATH);
	  });
	};
	
	/**
	 * Checking whether the given path is a dynamic one.
	 *
	 * @param  {mixed} path - The path to test.
	 * @return {boolean}
	 */
	type.dynamicPath = function (path) {
	  return path.some(function (step) {
	    return type['function'](step) || type.object(step);
	  });
	};
	
	/**
	 * Retrieve any monkey subpath in the given path or null if the path never comes
	 * across computed data.
	 *
	 * @param  {mixed} data - The data to test.
	 * @param  {array} path - The path to test.
	 * @return {boolean}
	 */
	type.monkeyPath = function (data, path) {
	  var subpath = [];
	
	  var c = data,
	      i = undefined,
	      l = undefined;
	
	  for (i = 0, l = path.length; i < l; i++) {
	    subpath.push(path[i]);
	
	    if (typeof c !== 'object') return null;
	
	    c = c[path[i]];
	
	    if (c instanceof _monkey.Monkey) return subpath;
	  }
	
	  return null;
	};
	
	/**
	 * Check if the given object property is a lazy getter used by a monkey.
	 *
	 * @param  {mixed}   o           - The target object.
	 * @param  {string}  propertyKey - The property to test.
	 * @return {boolean}
	 */
	type.lazyGetter = function (o, propertyKey) {
	  var descriptor = Object.getOwnPropertyDescriptor(o, propertyKey);
	
	  return descriptor && descriptor.get && descriptor.get.isLazyGetter === true;
	};
	
	/**
	 * Returns the type of the given monkey definition or `null` if invalid.
	 *
	 * @param  {mixed} definition - The definition to check.
	 * @return {string|null}
	 */
	type.monkeyDefinition = function (definition) {
	
	  if (type.object(definition)) {
	    if (!type['function'](definition.get) || definition.cursors && (!type.object(definition.cursors) || !Object.keys(definition.cursors).every(function (k) {
	      return type.path(definition.cursors[k]);
	    }))) return null;
	
	    return 'object';
	  } else if (type.array(definition)) {
	    var offset = 1;
	
	    if (type.object(definition[definition.length - 1])) offset++;
	
	    if (!type['function'](definition[definition.length - offset]) || !definition.slice(0, -offset).every(function (p) {
	      return type.path(p);
	    })) return null;
	
	    return 'array';
	  }
	
	  return null;
	};
	
	/**
	 * Checking whether the given watcher definition is valid.
	 *
	 * @param  {mixed}   definition - The definition to check.
	 * @return {boolean}
	 */
	type.watcherMapping = function (definition) {
	  return type.object(definition) && Object.keys(definition).every(function (k) {
	    return type.path(definition[k]);
	  });
	};
	
	/**
	 * Checking whether the given string is a valid operation type.
	 *
	 * @param  {mixed} string - The string to test.
	 * @return {boolean}
	 */
	
	// Ordered by likeliness
	var VALID_OPERATIONS = ['set', 'apply', 'push', 'unshift', 'concat', 'pop', 'shift', 'deepMerge', 'merge', 'splice', 'unset'];
	
	type.operationType = function (string) {
	  return typeof string === 'string' && !! ~VALID_OPERATIONS.indexOf(string);
	};
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Update
	 * ==============
	 *
	 * The tree's update scheme.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = update;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _type = __webpack_require__(9);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _helpers = __webpack_require__(11);
	
	function err(operation, expectedTarget, path) {
	  return (0, _helpers.makeError)('Baobab.update: cannot apply the "' + operation + '" on ' + ('a non ' + expectedTarget + ' (path: /' + path.join('/') + ').'), { path: path });
	}
	
	/**
	 * Function aiming at applying a single update operation on the given tree's
	 * data.
	 *
	 * @param  {mixed}  data      - The tree's data.
	 * @param  {path}   path      - Path of the update.
	 * @param  {object} operation - The operation to apply.
	 * @param  {object} [opts]    - Optional options.
	 * @return {mixed}            - Both the new tree's data and the updated node.
	 */
	
	function update(data, path, operation) {
	  var opts = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	  var operationType = operation.type;
	  var value = operation.value;
	  var _operation$options = operation.options;
	  var operationOptions = _operation$options === undefined ? {} : _operation$options;
	
	  // Dummy root, so we can shift and alter the root
	  var dummy = { root: data },
	      dummyPath = ['root'].concat(_toConsumableArray(path)),
	      currentPath = [];
	
	  // Walking the path
	  var p = dummy,
	      i = undefined,
	      l = undefined,
	      s = undefined;
	
	  for (i = 0, l = dummyPath.length; i < l; i++) {
	
	    // Current item's reference is therefore p[s]
	    // The reason why we don't create a variable here for convenience
	    // is because we actually need to mutate the reference.
	    s = dummyPath[i];
	
	    // Updating the path
	    if (i > 0) currentPath.push(s);
	
	    // If we reached the end of the path, we apply the operation
	    if (i === l - 1) {
	
	      /**
	       * Set
	       */
	      if (operationType === 'set') {
	
	        // Purity check
	        if (opts.pure && p[s] === value) return { node: p[s] };
	
	        if (_type2['default'].lazyGetter(p, s)) {
	          Object.defineProperty(p, s, {
	            value: value,
	            enumerable: true,
	            configurable: true
	          });
	        } else if (opts.persistent && !operationOptions.mutableLeaf) {
	          p[s] = (0, _helpers.shallowClone)(value);
	        } else {
	          p[s] = value;
	        }
	      }
	
	      /**
	       * Monkey
	       */
	      else if (operationType === 'monkey') {
	          Object.defineProperty(p, s, {
	            get: value,
	            enumerable: true,
	            configurable: true
	          });
	        }
	
	        /**
	         * Apply
	         */
	        else if (operationType === 'apply') {
	            var result = value(p[s]);
	
	            // Purity check
	            if (opts.pure && p[s] === result) return { node: p[s] };
	
	            if (_type2['default'].lazyGetter(p, s)) {
	              Object.defineProperty(p, s, {
	                value: result,
	                enumerable: true,
	                configurable: true
	              });
	            } else if (opts.persistent) {
	              p[s] = (0, _helpers.shallowClone)(result);
	            } else {
	              p[s] = result;
	            }
	          }
	
	          /**
	           * Push
	           */
	          else if (operationType === 'push') {
	              if (!_type2['default'].array(p[s])) throw err('push', 'array', currentPath);
	
	              if (opts.persistent) p[s] = p[s].concat([value]);else p[s].push(value);
	            }
	
	            /**
	             * Unshift
	             */
	            else if (operationType === 'unshift') {
	                if (!_type2['default'].array(p[s])) throw err('unshift', 'array', currentPath);
	
	                if (opts.persistent) p[s] = [value].concat(p[s]);else p[s].unshift(value);
	              }
	
	              /**
	               * Concat
	               */
	              else if (operationType === 'concat') {
	                  if (!_type2['default'].array(p[s])) throw err('concat', 'array', currentPath);
	
	                  if (opts.persistent) p[s] = p[s].concat(value);else p[s].push.apply(p[s], value);
	                }
	
	                /**
	                 * Splice
	                 */
	                else if (operationType === 'splice') {
	                    if (!_type2['default'].array(p[s])) throw err('splice', 'array', currentPath);
	
	                    if (opts.persistent) p[s] = _helpers.splice.apply(null, [p[s]].concat(value));else p[s].splice.apply(p[s], value);
	                  }
	
	                  /**
	                   * Pop
	                   */
	                  else if (operationType === 'pop') {
	                      if (!_type2['default'].array(p[s])) throw err('pop', 'array', currentPath);
	
	                      if (opts.persistent) p[s] = (0, _helpers.splice)(p[s], -1, 1);else p[s].pop();
	                    }
	
	                    /**
	                     * Shift
	                     */
	                    else if (operationType === 'shift') {
	                        if (!_type2['default'].array(p[s])) throw err('shift', 'array', currentPath);
	
	                        if (opts.persistent) p[s] = (0, _helpers.splice)(p[s], 0, 1);else p[s].shift();
	                      }
	
	                      /**
	                       * Unset
	                       */
	                      else if (operationType === 'unset') {
	                          if (_type2['default'].object(p)) delete p[s];else if (_type2['default'].array(p)) p.splice(s, 1);
	                        }
	
	                        /**
	                         * Merge
	                         */
	                        else if (operationType === 'merge') {
	                            if (!_type2['default'].object(p[s])) throw err('merge', 'object', currentPath);
	
	                            if (opts.persistent) p[s] = (0, _helpers.shallowMerge)({}, p[s], value);else p[s] = (0, _helpers.shallowMerge)(p[s], value);
	                          }
	
	                          /**
	                           * Deep merge
	                           */
	                          else if (operationType === 'deepMerge') {
	                              if (!_type2['default'].object(p[s])) throw err('deepMerge', 'object', currentPath);
	
	                              if (opts.persistent) p[s] = (0, _helpers.deepMerge)({}, p[s], value);else p[s] = (0, _helpers.deepMerge)(p[s], value);
	                            }
	
	      // Deep freezing the resulting value
	      if (opts.immutable && !operationOptions.mutableLeaf) (0, _helpers.deepFreeze)(p);
	
	      break;
	    }
	
	    // If we reached a leaf, we override by setting an empty object
	    else if (_type2['default'].primitive(p[s])) {
	        p[s] = {};
	      }
	
	      // Else, we shift the reference and continue the path
	      else if (opts.persistent) {
	          p[s] = (0, _helpers.shallowClone)(p[s]);
	        }
	
	    // Should we freeze the current step before continuing?
	    if (opts.immutable && l > 0) (0, _helpers.freeze)(p);
	
	    p = p[s];
	  }
	
	  // If we are updating a dynamic node, we need not return the affected node
	  if (_type2['default'].lazyGetter(p, s)) return { data: dummy.root };
	
	  // Returning new data object
	  return { data: dummy.root, node: p[s] };
	}
	
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* eslint eqeqeq: 0 */
	
	/**
	 * Baobab Helpers
	 * ===============
	 *
	 * Miscellaneous helper functions.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.arrayFrom = arrayFrom;
	exports.before = before;
	exports.coercePath = coercePath;
	exports.getIn = getIn;
	exports.makeError = makeError;
	exports.solveRelativePath = solveRelativePath;
	exports.solveUpdate = solveUpdate;
	exports.splice = splice;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _monkey = __webpack_require__(8);
	
	var _type = __webpack_require__(9);
	
	var _type2 = _interopRequireDefault(_type);
	
	/**
	 * Noop function
	 */
	var noop = Function.prototype;
	
	/**
	 * Function returning the index of the first element of a list matching the
	 * given predicate.
	 *
	 * @param  {array}     a  - The target array.
	 * @param  {function}  fn - The predicate function.
	 * @return {mixed}        - The index of the first matching item or -1.
	 */
	function index(a, fn) {
	  var i = undefined,
	      l = undefined;
	  for (i = 0, l = a.length; i < l; i++) {
	    if (fn(a[i])) return i;
	  }
	  return -1;
	}
	
	/**
	 * Efficient slice function used to clone arrays or parts of them.
	 *
	 * @param  {array} array - The array to slice.
	 * @return {array}       - The sliced array.
	 */
	function slice(array) {
	  var newArray = new Array(array.length);
	
	  var i = undefined,
	      l = undefined;
	
	  for (i = 0, l = array.length; i < l; i++) newArray[i] = array[i];
	
	  return newArray;
	}
	
	/**
	 * Archive abstraction
	 *
	 * @constructor
	 * @param {integer} size - Maximum number of records to store.
	 */
	
	var Archive = (function () {
	  function Archive(size) {
	    _classCallCheck(this, Archive);
	
	    this.size = size;
	    this.records = [];
	  }
	
	  /**
	   * Function creating a real array from what should be an array but is not.
	   * I'm looking at you nasty `arguments`...
	   *
	   * @param  {mixed} culprit - The culprit to convert.
	   * @return {array}         - The real array.
	   */
	
	  /**
	   * Method retrieving the records.
	   *
	   * @return {array} - The records.
	   */
	
	  _createClass(Archive, [{
	    key: 'get',
	    value: function get() {
	      return this.records;
	    }
	
	    /**
	     * Method adding a record to the archive
	     *
	     * @param {object}  record - The record to store.
	     * @return {Archive}       - The archive itself for chaining purposes.
	     */
	  }, {
	    key: 'add',
	    value: function add(record) {
	      this.records.unshift(record);
	
	      // If the number of records is exceeded, we truncate the records
	      if (this.records.length > this.size) this.records.length = this.size;
	
	      return this;
	    }
	
	    /**
	     * Method clearing the records.
	     *
	     * @return {Archive} - The archive itself for chaining purposes.
	     */
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.records = [];
	      return this;
	    }
	
	    /**
	     * Method to go back in time.
	     *
	     * @param {integer} steps - Number of steps we should go back by.
	     * @return {number}       - The last record.
	     */
	  }, {
	    key: 'back',
	    value: function back(steps) {
	      var record = this.records[steps - 1];
	
	      if (record) this.records = this.records.slice(steps);
	      return record;
	    }
	  }]);
	
	  return Archive;
	})();
	
	exports.Archive = Archive;
	
	function arrayFrom(culprit) {
	  return slice(culprit);
	}
	
	/**
	 * Function decorating one function with another that will be called before the
	 * decorated one.
	 *
	 * @param  {function} decorator - The decorating function.
	 * @param  {function} fn        - The function to decorate.
	 * @return {function}           - The decorated function.
	 */
	
	function before(decorator, fn) {
	  return function () {
	    decorator.apply(null, arguments);
	    fn.apply(null, arguments);
	  };
	}
	
	/**
	 * Function cloning the given regular expression. Supports `y` and `u` flags
	 * already.
	 *
	 * @param  {RegExp} re - The target regular expression.
	 * @return {RegExp}    - The cloned regular expression.
	 */
	function cloneRegexp(re) {
	  var pattern = re.source;
	
	  var flags = '';
	
	  if (re.global) flags += 'g';
	  if (re.multiline) flags += 'm';
	  if (re.ignoreCase) flags += 'i';
	  if (re.sticky) flags += 'y';
	  if (re.unicode) flags += 'u';
	
	  return new RegExp(pattern, flags);
	}
	
	/**
	 * Function cloning the given variable.
	 *
	 * @todo: implement a faster way to clone an array.
	 *
	 * @param  {boolean} deep - Should we deep clone the variable.
	 * @param  {mixed}   item - The variable to clone
	 * @return {mixed}        - The cloned variable.
	 */
	function cloner(deep, item) {
	  if (!item || typeof item !== 'object' || item instanceof Error || item instanceof _monkey.MonkeyDefinition || item instanceof _monkey.Monkey || 'ArrayBuffer' in global && item instanceof ArrayBuffer) return item;
	
	  // Array
	  if (_type2['default'].array(item)) {
	    if (deep) {
	      var a = [];
	
	      var i = undefined,
	          l = undefined;
	
	      for (i = 0, l = item.length; i < l; i++) a.push(cloner(true, item[i]));
	      return a;
	    }
	
	    return slice(item);
	  }
	
	  // Date
	  if (item instanceof Date) return new Date(item.getTime());
	
	  // RegExp
	  if (item instanceof RegExp) return cloneRegexp(item);
	
	  // Object
	  if (_type2['default'].object(item)) {
	    var o = {};
	
	    var k = undefined;
	
	    // NOTE: could be possible to erase computed properties through `null`.
	    for (k in item) {
	      if (_type2['default'].lazyGetter(item, k)) {
	        Object.defineProperty(o, k, {
	          get: Object.getOwnPropertyDescriptor(item, k).get,
	          enumerable: true,
	          configurable: true
	        });
	      } else if (item.hasOwnProperty(k)) {
	        o[k] = deep ? cloner(true, item[k]) : item[k];
	      }
	    }
	    return o;
	  }
	
	  return item;
	}
	
	/**
	 * Exporting shallow and deep cloning functions.
	 */
	var shallowClone = cloner.bind(null, false),
	    deepClone = cloner.bind(null, true);
	
	exports.shallowClone = shallowClone;
	exports.deepClone = deepClone;
	
	/**
	 * Coerce the given variable into a full-fledged path.
	 *
	 * @param  {mixed} target - The variable to coerce.
	 * @return {array}        - The array path.
	 */
	
	function coercePath(target) {
	  if (target || target === 0 || target === '') return target;
	  return [];
	}
	
	/**
	 * Function comparing an object's properties to a given descriptive
	 * object.
	 *
	 * @param  {object} object      - The object to compare.
	 * @param  {object} description - The description's mapping.
	 * @return {boolean}            - Whether the object matches the description.
	 */
	function compare(object, description) {
	  var ok = true,
	      k = undefined;
	
	  // If we reached here via a recursive call, object may be undefined because
	  // not all items in a collection will have the same deep nesting structure.
	  if (!object) return false;
	
	  for (k in description) {
	    if (_type2['default'].object(description[k])) {
	      ok = ok && compare(object[k], description[k]);
	    } else if (_type2['default'].array(description[k])) {
	      ok = ok && !! ~description[k].indexOf(object[k]);
	    } else {
	      if (object[k] !== description[k]) return false;
	    }
	  }
	
	  return ok;
	}
	
	/**
	 * Function freezing the given variable if possible.
	 *
	 * @param  {boolean} deep - Should we recursively freeze the given objects?
	 * @param  {object}  o    - The variable to freeze.
	 * @return {object}    - The merged object.
	 */
	function freezer(deep, o) {
	  if (typeof o !== 'object' || o === null || o instanceof _monkey.Monkey) return;
	
	  Object.freeze(o);
	
	  if (!deep) return;
	
	  if (Array.isArray(o)) {
	
	    // Iterating through the elements
	    var i = undefined,
	        l = undefined;
	
	    for (i = 0, l = o.length; i < l; i++) freezer(true, o[i]);
	  } else {
	    var p = undefined,
	        k = undefined;
	
	    for (k in o) {
	      if (_type2['default'].lazyGetter(o, k)) continue;
	
	      p = o[k];
	
	      if (!p || !o.hasOwnProperty(k) || typeof p !== 'object' || Object.isFrozen(p)) continue;
	
	      freezer(true, p);
	    }
	  }
	}
	
	/**
	 * Exporting both `freeze` and `deepFreeze` functions.
	 * Note that if the engine does not support `Object.freeze` then this will
	 * export noop functions instead.
	 */
	var isFreezeSupported = typeof Object.freeze === 'function';
	
	var freeze = isFreezeSupported ? freezer.bind(null, false) : noop,
	    deepFreeze = isFreezeSupported ? freezer.bind(null, true) : noop;
	
	exports.freeze = freeze;
	exports.deepFreeze = deepFreeze;
	
	/**
	 * Function retrieving nested data within the given object and according to
	 * the given path.
	 *
	 * @todo: work if dynamic path hit objects also.
	 * @todo: memoized perfgetters.
	 *
	 * @param  {object}  object - The object we need to get data from.
	 * @param  {array}   path   - The path to follow.
	 * @return {object}  result            - The result.
	 * @return {mixed}   result.data       - The data at path, or `undefined`.
	 * @return {array}   result.solvedPath - The solved path or `null`.
	 * @return {boolean} result.exists     - Does the path exists in the tree?
	 */
	var NOT_FOUND_OBJECT = { data: undefined, solvedPath: null, exists: false };
	
	function getIn(object, path) {
	  if (!path) return NOT_FOUND_OBJECT;
	
	  var solvedPath = [];
	
	  var exists = true,
	      c = object,
	      idx = undefined,
	      i = undefined,
	      l = undefined;
	
	  for (i = 0, l = path.length; i < l; i++) {
	    if (!c) return {
	      data: undefined,
	      solvedPath: solvedPath.concat(path.slice(i)),
	      exists: false
	    };
	
	    if (typeof path[i] === 'function') {
	      if (!_type2['default'].array(c)) return NOT_FOUND_OBJECT;
	
	      idx = index(c, path[i]);
	      if (! ~idx) return NOT_FOUND_OBJECT;
	
	      solvedPath.push(idx);
	      c = c[idx];
	    } else if (typeof path[i] === 'object') {
	      if (!_type2['default'].array(c)) return NOT_FOUND_OBJECT;
	
	      idx = index(c, function (e) {
	        return compare(e, path[i]);
	      });
	      if (! ~idx) return NOT_FOUND_OBJECT;
	
	      solvedPath.push(idx);
	      c = c[idx];
	    } else {
	      solvedPath.push(path[i]);
	      exists = typeof c === 'object' && path[i] in c;
	      c = c[path[i]];
	    }
	  }
	
	  return { data: c, solvedPath: solvedPath, exists: exists };
	}
	
	/**
	 * Little helper returning a JavaScript error carrying some data with it.
	 *
	 * @param  {string} message - The error message.
	 * @param  {object} [data]  - Optional data to assign to the error.
	 * @return {Error}          - The created error.
	 */
	
	function makeError(message, data) {
	  var err = new Error(message);
	
	  for (var k in data) {
	    err[k] = data[k];
	  }return err;
	}
	
	/**
	 * Function taking n objects to merge them together.
	 * Note 1): the latter object will take precedence over the first one.
	 * Note 2): the first object will be mutated to allow for perf scenarios.
	 * Note 3): this function will consider monkeys as leaves.
	 *
	 * @param  {boolean}   deep    - Whether the merge should be deep or not.
	 * @param  {...object} objects - Objects to merge.
	 * @return {object}            - The merged object.
	 */
	function merger(deep) {
	  for (var _len = arguments.length, objects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    objects[_key - 1] = arguments[_key];
	  }
	
	  var o = objects[0];
	
	  var t = undefined,
	      i = undefined,
	      l = undefined,
	      k = undefined;
	
	  for (i = 1, l = objects.length; i < l; i++) {
	    t = objects[i];
	
	    for (k in t) {
	      if (deep && _type2['default'].object(t[k]) && !(t[k] instanceof _monkey.Monkey)) {
	        o[k] = merger(true, o[k] || {}, t[k]);
	      } else {
	        o[k] = t[k];
	      }
	    }
	  }
	
	  return o;
	}
	
	/**
	 * Exporting both `shallowMerge` and `deepMerge` functions.
	 */
	var shallowMerge = merger.bind(null, false),
	    deepMerge = merger.bind(null, true);
	
	exports.shallowMerge = shallowMerge;
	exports.deepMerge = deepMerge;
	
	/**
	 * Solving a potentially relative path.
	 *
	 * @param  {array} base - The base path from which to solve the path.
	 * @param  {array} to   - The subpath to reach.
	 * @param  {array}      - The solved absolute path.
	 */
	
	function solveRelativePath(base, to) {
	  var solvedPath = [];
	
	  // Coercing to array
	  to = [].concat(to);
	
	  for (var i = 0, l = to.length; i < l; i++) {
	    var step = to[i];
	
	    if (step === '.') {
	      if (!i) solvedPath = base.slice(0);
	    } else if (step === '..') {
	      solvedPath = (!i ? base : solvedPath).slice(0, -1);
	    } else {
	      solvedPath.push(step);
	    }
	  }
	
	  return solvedPath;
	}
	
	/**
	 * Function determining whether some paths in the tree were affected by some
	 * updates that occurred at the given paths. This helper is mainly used at
	 * cursor level to determine whether the cursor is concerned by the updates
	 * fired at tree level.
	 *
	 * NOTES: 1) If performance become an issue, the following threefold loop
	 *           can be simplified to a complex twofold one.
	 *        2) A regex version could also work but I am not confident it would
	 *           be faster.
	 *        3) Another solution would be to keep a register of cursors like with
	 *           the monkeys and update along this tree.
	 *
	 * @param  {array} affectedPaths - The paths that were updated.
	 * @param  {array} comparedPaths - The paths that we are actually interested in.
	 * @return {boolean}             - Is the update relevant to the compared
	 *                                 paths?
	 */
	
	function solveUpdate(affectedPaths, comparedPaths) {
	  var i = undefined,
	      j = undefined,
	      k = undefined,
	      l = undefined,
	      m = undefined,
	      n = undefined,
	      p = undefined,
	      c = undefined,
	      s = undefined;
	
	  // Looping through possible paths
	  for (i = 0, l = affectedPaths.length; i < l; i++) {
	    p = affectedPaths[i];
	
	    if (!p.length) return true;
	
	    // Looping through logged paths
	    for (j = 0, m = comparedPaths.length; j < m; j++) {
	      c = comparedPaths[j];
	
	      if (!c || !c.length) return true;
	
	      // Looping through steps
	      for (k = 0, n = c.length; k < n; k++) {
	        s = c[k];
	
	        // If path is not relevant, we break
	        // NOTE: the '!=' instead of '!==' is required here!
	        if (s != p[k]) break;
	
	        // If we reached last item and we are relevant
	        if (k + 1 === n || k + 1 === p.length) return true;
	      }
	    }
	  }
	
	  return false;
	}
	
	/**
	 * Non-mutative version of the splice array method.
	 *
	 * @param  {array}    array        - The array to splice.
	 * @param  {integer}  startIndex   - The start index.
	 * @param  {integer}  nb           - Number of elements to remove.
	 * @param  {...mixed} elements     - Elements to append after splicing.
	 * @return {array}                 - The spliced array.
	 */
	
	function splice(array, startIndex, nb) {
	  nb = Math.max(0, nb);
	
	  // Solving startIndex
	  if (_type2['default']['function'](startIndex)) startIndex = index(array, startIndex);
	  if (_type2['default'].object(startIndex)) startIndex = index(array, function (e) {
	    return compare(e, startIndex);
	  });
	
	  // Positive index
	
	  for (var _len2 = arguments.length, elements = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
	    elements[_key2 - 3] = arguments[_key2];
	  }
	
	  if (startIndex >= 0) return array.slice(0, startIndex).concat(elements).concat(array.slice(startIndex + nb));
	
	  // Negative index
	  return array.slice(0, array.length + startIndex).concat(elements).concat(array.slice(array.length + startIndex + nb));
	}
	
	/**
	 * Function returning a unique incremental id each time it is called.
	 *
	 * @return {integer} - The latest unique id.
	 */
	var uniqid = (function () {
	  var i = 0;
	
	  return function () {
	    return i++;
	  };
	})();
	
	exports.uniqid = uniqid;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Watchers
	 * ================
	 *
	 * Abstraction used to listen and retrieve data from multiple parts of a
	 * Baobab tree at once.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _emmett = __webpack_require__(6);
	
	var _emmett2 = _interopRequireDefault(_emmett);
	
	var _cursor = __webpack_require__(7);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _type = __webpack_require__(9);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _helpers = __webpack_require__(11);
	
	/**
	 * Watcher class.
	 *
	 * @constructor
	 * @param {Baobab} tree     - The watched tree.
	 * @param {object} mapping  - A mapping of the paths to watch in the tree.
	 */
	
	var Watcher = (function (_Emitter) {
	  _inherits(Watcher, _Emitter);
	
	  function Watcher(tree, mapping) {
	    var _this = this;
	
	    _classCallCheck(this, Watcher);
	
	    _get(Object.getPrototypeOf(Watcher.prototype), 'constructor', this).call(this);
	
	    // Properties
	    this.tree = tree;
	    this.mapping = null;
	
	    this.state = {
	      killed: false
	    };
	
	    // Initializing
	    this.refresh(mapping);
	
	    // Listening
	    this.handler = function (e) {
	      if (_this.state.killed) return;
	
	      var watchedPaths = _this.getWatchedPaths();
	
	      if ((0, _helpers.solveUpdate)(e.data.paths, watchedPaths)) return _this.emit('update');
	    };
	
	    this.tree.on('update', this.handler);
	  }
	
	  /**
	   * Method used to get the current watched paths.
	   *
	   * @return {array} - The array of watched paths.
	   */
	
	  _createClass(Watcher, [{
	    key: 'getWatchedPaths',
	    value: function getWatchedPaths() {
	      var _this2 = this;
	
	      var rawPaths = Object.keys(this.mapping).map(function (k) {
	        var v = _this2.mapping[k];
	
	        // Watcher mappings can accept a cursor
	        if (v instanceof _cursor2['default']) return v.solvedPath;
	
	        return _this2.mapping[k];
	      });
	
	      return rawPaths.reduce(function (cp, p) {
	
	        // Handling path polymorphisms
	        p = [].concat(p);
	
	        // Dynamic path?
	        if (_type2['default'].dynamicPath(p)) p = (0, _helpers.getIn)(_this2.tree._data, p).solvedPath;
	
	        if (!p) return cp;
	
	        // Facet path?
	        var monkeyPath = _type2['default'].monkeyPath(_this2.tree._monkeys, p);
	
	        if (monkeyPath) return cp.concat((0, _helpers.getIn)(_this2.tree._monkeys, monkeyPath).data.relatedPaths());
	
	        return cp.concat([p]);
	      }, []);
	    }
	
	    /**
	     * Method used to return a map of the watcher's cursors.
	     *
	     * @return {object} - TMap of relevant cursors.
	     */
	  }, {
	    key: 'getCursors',
	    value: function getCursors() {
	      var _this3 = this;
	
	      var cursors = {};
	
	      Object.keys(this.mapping).forEach(function (k) {
	        var path = _this3.mapping[k];
	
	        if (path instanceof _cursor2['default']) cursors[k] = path;else cursors[k] = _this3.tree.select(path);
	      });
	
	      return cursors;
	    }
	
	    /**
	     * Method used to refresh the watcher's mapping.
	     *
	     * @param  {object}  mapping  - The new mapping to apply.
	     * @return {Watcher}          - Itself for chaining purposes.
	     */
	  }, {
	    key: 'refresh',
	    value: function refresh(mapping) {
	
	      if (!_type2['default'].watcherMapping(mapping)) throw (0, _helpers.makeError)('Baobab.watch: invalid mapping.', { mapping: mapping });
	
	      this.mapping = mapping;
	
	      // Creating the get method
	      var projection = {};
	
	      for (var k in mapping) {
	        projection[k] = mapping[k] instanceof _cursor2['default'] ? mapping[k].path : mapping[k];
	      }this.get = this.tree.project.bind(this.tree, projection);
	    }
	
	    /**
	     * Methods releasing the watcher from memory.
	     */
	  }, {
	    key: 'release',
	    value: function release() {
	
	      this.tree.off('update', this.handler);
	      this.state.killed = true;
	      this.kill();
	    }
	  }]);
	
	  return Watcher;
	})(_emmett2['default']);
	
	exports['default'] = Watcher;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(14);
	
	var _baobabReact = __webpack_require__(15);
	
	var _baobabReact2 = _interopRequireDefault(_baobabReact);
	
	var _state = __webpack_require__(4);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _config = __webpack_require__(23);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _ItemActions = __webpack_require__(35);
	
	var _ItemActions2 = _interopRequireDefault(_ItemActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var root = _baobabReact2.default.decorators.root;
	var branch = _baobabReact2.default.decorators.branch;
	
	var Opportunity = (_dec = branch({
	  cursors: {
	    selected: ['selected']
	  }
	}), _dec(_class = function (_React$Component) {
	  _inherits(Opportunity, _React$Component);
	
	  function Opportunity() {
	    _classCallCheck(this, Opportunity);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Opportunity).apply(this, arguments));
	  }
	
	  _createClass(Opportunity, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _ItemActions2.default.selectOpportunity(this.props.params.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var selected = this.props.selected;
	
	
	      if (!selected) return _react2.default.createElement('div', null);
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'page opportunity' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Opportunity'
	        ),
	        selected.image && _react2.default.createElement('img', { src: selected.image }),
	        selected.name,
	        ' - ',
	        selected.company
	      );
	    }
	  }]);
	
	  return Opportunity;
	}(_react2.default.Component)) || _class);
	exports.default = Opportunity;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  decorators: __webpack_require__(16),
	  higherOrder: __webpack_require__(17),
	  mixins: __webpack_require__(20),
	  PropTypes: __webpack_require__(19),
	  wrappers: __webpack_require__(21)
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab-React Decorators
	 * ========================
	 *
	 * ES7 decorators sugar for higher order components.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.root = root;
	exports.branch = branch;
	
	var _higherOrderJs = __webpack_require__(17);
	
	function root(tree) {
	  return function (Component) {
	    return (0, _higherOrderJs.root)(Component, tree);
	  };
	}
	
	function branch(specs) {
	  return function (Component) {
	    return (0, _higherOrderJs.branch)(Component, specs);
	  };
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab-React Higher Order Component
	 * ====================================
	 *
	 * ES6 higher order component to enchance one's component.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports.root = root;
	exports.branch = branch;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baobab = __webpack_require__(5);
	
	var _baobab2 = _interopRequireDefault(_baobab);
	
	var _utilsHelpersJs = __webpack_require__(18);
	
	var _utilsPropTypesJs = __webpack_require__(19);
	
	var _utilsPropTypesJs2 = _interopRequireDefault(_utilsPropTypesJs);
	
	var makeError = _baobab2['default'].helpers.makeError;
	
	/**
	 * Root component
	 */
	
	function root(Component, tree) {
	  if (!(tree instanceof _baobab2['default'])) throw makeError('baobab-react:higher-order.root: given tree is not a Baobab.', { target: tree });
	
	  var componentDisplayName = Component.name || Component.displayName || 'Component';
	
	  var ComposedComponent = (function (_React$Component) {
	    _inherits(ComposedComponent, _React$Component);
	
	    function ComposedComponent() {
	      _classCallCheck(this, ComposedComponent);
	
	      _get(Object.getPrototypeOf(ComposedComponent.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(ComposedComponent, [{
	      key: 'getChildContext',
	
	      // Handling child context
	      value: function getChildContext() {
	        return {
	          tree: tree
	        };
	      }
	
	      // Render shim
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2['default'].createElement(Component, this.props);
	      }
	    }], [{
	      key: 'displayName',
	      value: 'Rooted' + componentDisplayName,
	      enumerable: true
	    }, {
	      key: 'childContextTypes',
	      value: {
	        tree: _utilsPropTypesJs2['default'].baobab
	      },
	      enumerable: true
	    }]);
	
	    return ComposedComponent;
	  })(_react2['default'].Component);
	
	  return ComposedComponent;
	}
	
	/**
	 * Branch component
	 */
	
	function branch(Component) {
	  var mapping = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	  var componentDisplayName = Component.name || Component.displayName || 'Component';
	
	  var ComposedComponent = (function (_React$Component2) {
	    _inherits(ComposedComponent, _React$Component2);
	
	    _createClass(ComposedComponent, [{
	      key: 'getChildContext',
	
	      // Passing the component's cursors through context
	      value: function getChildContext() {
	        return this.cursors ? {
	          cursors: this.cursors
	        } : {};
	      }
	
	      // Building initial state
	    }], [{
	      key: 'displayName',
	      value: 'Branched' + componentDisplayName,
	      enumerable: true
	    }, {
	      key: 'contextTypes',
	      value: {
	        tree: _utilsPropTypesJs2['default'].baobab
	      },
	      enumerable: true
	    }, {
	      key: 'childContextTypes',
	      value: {
	        cursors: _utilsPropTypesJs2['default'].cursors
	      },
	      enumerable: true
	    }]);
	
	    function ComposedComponent(props, context) {
	      _classCallCheck(this, ComposedComponent);
	
	      _get(Object.getPrototypeOf(ComposedComponent.prototype), 'constructor', this).call(this, props, context);
	
	      if (mapping.cursors) {
	        var solvedMapping = (0, _utilsHelpersJs.solveMapping)(mapping.cursors, props, context);
	
	        if (!solvedMapping) throw makeError('baobab-react:higher-order.branch: given cursors mapping is invalid (check the "' + displayName + '" component).', { mapping: solvedMapping });
	
	        // Creating the watcher
	        this.watcher = this.context.tree.watch(solvedMapping);
	        this.cursors = this.watcher.getCursors();
	        this.state = this.watcher.get();
	      }
	    }
	
	    // On component mount
	
	    _createClass(ComposedComponent, [{
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        if (!this.watcher) return;
	
	        var handler = (function () {
	          if (this.watcher) this.setState(this.watcher.get());
	        }).bind(this);
	
	        this.watcher.on('update', handler);
	      }
	
	      // Render shim
	    }, {
	      key: 'render',
	      value: function render() {
	        var tree = this.context.tree,
	            suppl = {};
	
	        // Binding actions if any
	        if (mapping.actions) {
	          suppl.actions = {};
	
	          Object.keys(mapping.actions).forEach(function (k) {
	            suppl.actions[k] = mapping.actions[k].bind(tree, tree);
	          });
	        }
	
	        return _react2['default'].createElement(Component, _extends({}, this.props, suppl, this.state));
	      }
	
	      // On component unmount
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        if (!this.watcher) return;
	
	        // Releasing watcher
	        this.watcher.release();
	        this.watcher = null;
	      }
	
	      // On new props
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(props) {
	        if (!this.watcher || !mapping.cursors) return;
	
	        var solvedMapping = (0, _utilsHelpersJs.solveMapping)(mapping.cursors, props, this.context);
	
	        if (!solvedMapping) throw makeError('baobab-react:higher-order.branch: given mapping is invalid (check the "' + displayName + '" component).', { mapping: solvedMapping });
	
	        // Refreshing the watcher
	        this.watcher.refresh(solvedMapping);
	        this.cursors = this.watcher.getCursors();
	        this.setState(this.watcher.get());
	      }
	    }]);
	
	    return ComposedComponent;
	  })(_react2['default'].Component);
	
	  return ComposedComponent;
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Baobab-React Helpers
	 * =====================
	 *
	 * Miscellaneous helper functions.
	 */
	'use strict';
	
	function solveMapping(mapping, props, context) {
	  if (typeof mapping === 'function') mapping = mapping(props, context);
	
	  return mapping;
	}
	
	module.exports = {
	  solveMapping: solveMapping
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab-React Custom Prop Types
	 * ===============================
	 *
	 * PropTypes used to propagate context safely.
	 */
	'use strict';
	
	var Baobab = __webpack_require__(5),
	    Cursor = Baobab.Cursor,
	    type = Baobab.type;
	
	function errorMessage(propName, what) {
	  return 'prop type `' + propName + '` is invalid; it must be ' + what + '.';
	}
	
	var PropTypes = {};
	
	PropTypes.baobab = function (props, propName) {
	  if (!(propName in props)) return;
	
	  if (!(props[propName] instanceof Baobab)) return new Error(errorMessage(propName, 'a Baobab tree'));
	};
	
	PropTypes.cursors = function (props, propName) {
	  if (!(propName in props)) return;
	
	  var cursors = props[propName];
	
	  if (!type.object(cursors) || !Object.keys(cursors).every(function (k) {
	    return cursors[k] instanceof Cursor;
	  })) return new Error(errorMessage(propName, 'a cursors object'));
	};
	
	module.exports = PropTypes;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab-React Mixins
	 * ====================
	 *
	 * Old style react mixins.
	 */
	'use strict';
	
	var PropTypes = __webpack_require__(19),
	    helpers = __webpack_require__(18),
	    makeError = __webpack_require__(5).helpers.makeError;
	
	/**
	 * Helpers
	 */
	function displayName(instance) {
	  return (instance.constructor || {}).displayName || 'Component';
	}
	
	function bindActions(actions) {
	  var tree = this.context.tree,
	      suppl = {};
	
	  this.actions = {};
	
	  Object.keys(actions).forEach(function (k) {
	    this.actions[k] = actions[k].bind(tree, tree);
	  }, this);
	}
	
	/**
	 * Root mixin
	 */
	var RootMixin = {
	
	  // Component prop Type
	  propTypes: {
	    tree: PropTypes.baobab
	  },
	
	  // Context prop types
	  childContextTypes: {
	    tree: PropTypes.baobab
	  },
	
	  // Handling child context
	  getChildContext: function getChildContext() {
	    return {
	      tree: this.props.tree
	    };
	  }
	};
	
	/**
	 * Branch mixin
	 */
	var BranchMixin = {
	
	  // Context prop types
	  contextTypes: {
	    tree: PropTypes.baobab
	  },
	
	  // Building initial state
	  getInitialState: function getInitialState() {
	    var name = displayName(this);
	
	    if (this.actions) {
	      this.__actionsMapping = this.actions;
	      bindActions.call(this, this.__actionsMapping);
	    }
	
	    if (this.cursors) {
	      this.__cursorsMapping = this.cursors;
	
	      var solvedMapping = helpers.solveMapping(this.__cursorsMapping, this.props, this.context);
	
	      // The given cursors property should be valid
	      if (!solvedMapping) throw makeError('baobab-react:mixins.branch: given mapping is invalid (check the "' + name + '" component).', { mapping: solvedMapping });
	
	      // Creating the watcher
	      this.__watcher = this.context.tree.watch(solvedMapping);
	
	      // Binding cursors
	      this.cursors = this.__watcher.getCursors();
	
	      // Setting initial state
	      return this.__watcher.get();
	    }
	
	    return null;
	  },
	
	  // On component mount
	  componentWillMount: function componentWillMount() {
	    if (!this.__watcher) return;
	
	    var handler = (function () {
	      if (this.__watcher) this.setState(this.__watcher.get());
	    }).bind(this);
	
	    this.__watcher.on('update', handler);
	  },
	
	  // On component unmount
	  componentWillUnmount: function componentWillUnmount() {
	    if (!this.__watcher) return;
	
	    // Releasing facet
	    this.__watcher.release();
	    this.__watcher = null;
	  },
	
	  // On new props
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (!this.__watcher) return;
	
	    // Refreshing the watcher
	    var solvedMapping = helpers.solveMapping(this.__cursorsMapping, props, this.context);
	
	    if (!solvedMapping) throw makeError('baobab-react:mixins.branch: given mapping is invalid (check the "' + displayName(this) + '" component).', { mapping: solvedMapping });
	
	    this.__watcher.refresh(solvedMapping);
	    this.cursors = this.__watcher.getCursors();
	    this.setState(this.__watcher.get());
	  },
	
	  // On update
	  componentWillUpdate: function componentWillUpdate() {
	    if (this.__actionsMapping) bindActions.call(this, this.__actionsMapping);
	  }
	};
	
	// Exporting
	exports.root = RootMixin;
	exports.branch = BranchMixin;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab-React Wrapper Component
	 * ===============================
	 *
	 * ES6 wrapper component.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baobab = __webpack_require__(5);
	
	var _baobab2 = _interopRequireDefault(_baobab);
	
	var _utilsPropTypesJs = __webpack_require__(19);
	
	var _utilsPropTypesJs2 = _interopRequireDefault(_utilsPropTypesJs);
	
	var _utilsHelpersJs = __webpack_require__(18);
	
	var makeError = _baobab2['default'].helpers.makeError;
	
	/**
	 * Helpers
	 */
	function rootPass(props) {
	  var children = props.children;
	  var tree = props.tree;
	
	  var otherProps = _objectWithoutProperties(props, ['children', 'tree']);
	
	  return _extends({}, otherProps);
	}
	
	function branchPass(props, suppl, state) {
	  var actions = props.actions;
	  var children = props.children;
	  var cursors = props.cursors;
	
	  var otherProps = _objectWithoutProperties(props, ['actions', 'children', 'cursors']);
	
	  return _extends({}, otherProps, suppl, state);
	}
	
	function renderChildren(children, props) {
	  if (!children) return null;
	
	  if (!Array.isArray(children)) {
	    return _react2['default'].cloneElement(children, props);
	  } else {
	    var group = _react2['default'].Children.map(children, function (child) {
	      return _react2['default'].cloneElement(child, props);
	    });
	
	    return _react2['default'].createElement(
	      'span',
	      null,
	      group
	    );
	  }
	}
	
	/**
	 * Root wrapper
	 */
	
	var Root = (function (_React$Component) {
	  _inherits(Root, _React$Component);
	
	  function Root() {
	    _classCallCheck(this, Root);
	
	    _get(Object.getPrototypeOf(Root.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  /**
	   * Branch wrapper
	   */
	
	  _createClass(Root, [{
	    key: 'getChildContext',
	
	    // Handling child context
	    value: function getChildContext() {
	      return {
	        tree: this.props.tree
	      };
	    }
	
	    // Rendering children
	  }, {
	    key: 'render',
	    value: function render() {
	      return renderChildren(this.props.children, rootPass(this.props));
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      tree: _utilsPropTypesJs2['default'].baobab
	    },
	    enumerable: true
	  }, {
	    key: 'childContextTypes',
	    value: {
	      tree: _utilsPropTypesJs2['default'].baobab
	    },
	    enumerable: true
	  }]);
	
	  return Root;
	})(_react2['default'].Component);
	
	exports.Root = Root;
	
	var Branch = (function (_React$Component2) {
	  _inherits(Branch, _React$Component2);
	
	  _createClass(Branch, [{
	    key: 'getChildContext',
	
	    // Passing the component's cursors through context
	    value: function getChildContext() {
	      return this.cursors ? {
	        cursors: this.cursors
	      } : {};
	    }
	
	    // Building initial state
	  }], [{
	    key: 'contextTypes',
	    value: {
	      tree: _utilsPropTypesJs2['default'].baobab
	    },
	    enumerable: true
	  }, {
	    key: 'childContextTypes',
	    value: {
	      cursors: _utilsPropTypesJs2['default'].cursors
	    },
	    enumerable: true
	  }]);
	
	  function Branch(props, context) {
	    _classCallCheck(this, Branch);
	
	    _get(Object.getPrototypeOf(Branch.prototype), 'constructor', this).call(this, props, context);
	
	    if (props.cursors) {
	      var solvedMapping = (0, _utilsHelpersJs.solveMapping)(props.cursors, props, context);
	
	      if (!solvedMapping) throw makeError('baobab-react:wrappers.branch: given mapping is invalid.', { mapping: solvedMapping });
	
	      // Creating the watcher
	      this.watcher = this.context.tree.watch(solvedMapping);
	      this.cursors = this.watcher.getCursors();
	      this.state = this.watcher.get();
	    }
	  }
	
	  // On component mount
	
	  _createClass(Branch, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (!this.watcher) return;
	
	      var handler = (function () {
	        if (this.watcher) this.setState(this.watcher.get());
	      }).bind(this);
	
	      this.watcher.on('update', handler);
	    }
	
	    // Render shim
	  }, {
	    key: 'render',
	    value: function render() {
	      var tree = this.context.tree,
	          actions = this.props.actions,
	          suppl = {};
	
	      // Binding actions if any
	      if (actions) {
	        suppl.actions = {};
	
	        Object.keys(actions).forEach(function (k) {
	          suppl.actions[k] = actions[k].bind(tree, tree);
	        });
	      }
	
	      return renderChildren(this.props.children, branchPass(this.props, suppl, this.state));
	    }
	
	    // On component unmount
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (!this.watcher) return;
	
	      // Releasing watcher
	      this.watcher.release();
	      this.watcher = null;
	    }
	
	    // On new props
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      if (!this.watcher) return;
	
	      var solvedMapping = (0, _utilsHelpersJs.solveMapping)(props.cursors, props, this.context);
	
	      if (!solvedMapping) throw makeError('baobab-react:wrappers.branch: given mapping is invalid.', { mapping: solvedMapping });
	
	      // Refreshing the watcher
	      this.watcher.refresh(solvedMapping);
	      this.cursors = this.watcher.getCursors();
	      this.setState(this.watcher.get());
	    }
	  }]);
	
	  return Branch;
	})(_react2['default'].Component);
	
	exports.Branch = Branch;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _state = __webpack_require__(4);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _reactRouter = __webpack_require__(14);
	
	var _baobabReact = __webpack_require__(15);
	
	var _baobabReact2 = _interopRequireDefault(_baobabReact);
	
	var _config = __webpack_require__(23);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _lodash = __webpack_require__(24);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _ItemActions = __webpack_require__(35);
	
	var _ItemActions2 = _interopRequireDefault(_ItemActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var branch = _baobabReact2.default.decorators.branch;
	
	var OpportunityAddEdit = (_dec = branch({
	  cursors: {
	    selected: ['selected']
	  }
	}), _dec(_class = function (_React$Component) {
	  _inherits(OpportunityAddEdit, _React$Component);
	
	  function OpportunityAddEdit() {
	    _classCallCheck(this, OpportunityAddEdit);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(OpportunityAddEdit).apply(this, arguments));
	  }
	
	  _createClass(OpportunityAddEdit, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.isAdding = this.props.params.id === undefined;
	
	      if (!this.isAdding) {
	        _ItemActions2.default.selectOpportunity(this.props.params.id);
	      } else {
	        _ItemActions2.default.resetSelected();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // remove db
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit() {
	      var data = this.props.selected;
	      if (this.isAdding) {
	        _ItemActions2.default.addOpportunity(data);
	      } else {
	        _ItemActions2.default.updateOpportunity(this.props.params.id, data);
	      }
	
	      _reactRouter.browserHistory.push('/');
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(type, e) {
	      _ItemActions2.default.modifySelectedField(type, e.target.value);
	    }
	  }, {
	    key: 'handleFile',
	    value: function handleFile(type, e) {
	      var self = this;
	      var reader = new FileReader();
	      var file = e.target.files[0];
	
	      reader.onload = function (upload) {
	        _ItemActions2.default.modifySelectedField('image', upload.target.result);
	      };
	      reader.readAsDataURL(file);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var selected = this.props.selected;
	
	
	      if (!this.isAdding && !selected) return _react2.default.createElement('div', null);
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'page opportunityAddEdit' },
	        this.isAdding ? _react2.default.createElement(
	          'h3',
	          null,
	          'Add'
	        ) : _react2.default.createElement(
	          'h3',
	          null,
	          'Update'
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.renderItem('input', 'name'),
	          this.renderItem('input', 'company'),
	          this.renderItem('input', 'date'),
	          this.renderItem('textarea', 'description'),
	          this.renderItem('image', 'image')
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.onSubmit.bind(this) },
	          'submit'
	        )
	      );
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(type, name) {
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          'label',
	          { 'for': 'name' },
	          name
	        ),
	        this.renderInput(type, name)
	      );
	    }
	  }, {
	    key: 'renderInput',
	    value: function renderInput(type, name) {
	      var selected = this.props.selected;
	
	      switch (type) {
	        case 'input':
	          return _react2.default.createElement('input', { id: 'name', ref: 'name',
	            onChange: this.onChange.bind(this, name),
	            value: selected[name] || '' });
	        case 'textarea':
	          return _react2.default.createElement('textarea', { ref: 'description',
	            onChange: this.onChange.bind(this, name),
	            value: selected[name] || '' });
	        case 'image':
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('img', { src: selected[name] || '' }),
	            _react2.default.createElement('input', { type: 'file', onChange: this.handleFile.bind(this, name) })
	          );
	      }
	    }
	  }]);
	
	  return OpportunityAddEdit;
	}(_react2.default.Component)) || _class);
	exports.default = OpportunityAddEdit;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  firebaseURL: 'https://glowing-fire-7199.firebaseio.com'
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 4.7.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash -d -o ./foo/lodash.js`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	;(function() {
	
	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;
	
	  /** Used as the semantic version number. */
	  var VERSION = '4.7.0';
	
	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;
	
	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';
	
	  /** Used to stand-in for `undefined` hash values. */
	  var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';
	
	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256,
	      FLIP_FLAG = 512;
	
	  /** Used to compose bitmasks for comparison styles. */
	  var UNORDERED_COMPARE_FLAG = 1,
	      PARTIAL_COMPARE_FLAG = 2;
	
	  /** Used as default options for `_.truncate`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';
	
	  /** Used to detect hot functions by number of calls within a span of milliseconds. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;
	
	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2,
	      LAZY_WHILE_FLAG = 3;
	
	  /** Used as references for various `Number` constants. */
	  var INFINITY = 1 / 0,
	      MAX_SAFE_INTEGER = 9007199254740991,
	      MAX_INTEGER = 1.7976931348623157e+308,
	      NAN = 0 / 0;
	
	  /** Used as references for the maximum length and index of an array. */
	  var MAX_ARRAY_LENGTH = 4294967295,
	      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
	
	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      genTag = '[object GeneratorFunction]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      promiseTag = '[object Promise]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      symbolTag = '[object Symbol]',
	      weakMapTag = '[object WeakMap]',
	      weakSetTag = '[object WeakSet]';
	
	  var arrayBufferTag = '[object ArrayBuffer]',
	      dataViewTag = '[object DataView]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';
	
	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
	
	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
	
	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;
	
	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
	
	  /** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
	  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
	      reHasRegExpChar = RegExp(reRegExpChar.source);
	
	  /** Used to match leading and trailing whitespace. */
	  var reTrim = /^\s+|\s+$/g,
	      reTrimStart = /^\s+/,
	      reTrimEnd = /\s+$/;
	
	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;
	
	  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
	
	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;
	
	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0x/i;
	
	  /** Used to detect bad signed hexadecimal string values. */
	  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	  /** Used to detect binary string values. */
	  var reIsBinary = /^0b[01]+$/i;
	
	  /** Used to detect host constructors (Safari). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	  /** Used to detect octal string values. */
	  var reIsOctal = /^0o[0-7]+$/i;
	
	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
	
	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;
	
	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
	
	  /** Used to compose unicode character classes. */
	  var rsAstralRange = '\\ud800-\\udfff',
	      rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	      rsComboSymbolsRange = '\\u20d0-\\u20f0',
	      rsDingbatRange = '\\u2700-\\u27bf',
	      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	      rsQuoteRange = '\\u2018\\u2019\\u201c\\u201d',
	      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	      rsVarRange = '\\ufe0e\\ufe0f',
	      rsBreakRange = rsMathOpRange + rsNonCharRange + rsQuoteRange + rsSpaceRange;
	
	  /** Used to compose unicode capture groups. */
	  var rsAstral = '[' + rsAstralRange + ']',
	      rsBreak = '[' + rsBreakRange + ']',
	      rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	      rsDigits = '\\d+',
	      rsDingbat = '[' + rsDingbatRange + ']',
	      rsLower = '[' + rsLowerRange + ']',
	      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	      rsFitz = '\\ud83c[\\udffb-\\udfff]',
	      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	      rsNonAstral = '[^' + rsAstralRange + ']',
	      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	      rsUpper = '[' + rsUpperRange + ']',
	      rsZWJ = '\\u200d';
	
	  /** Used to compose unicode regexes. */
	  var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
	      rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
	      reOptMod = rsModifier + '?',
	      rsOptVar = '[' + rsVarRange + ']?',
	      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	      rsSeq = rsOptVar + reOptMod + rsOptJoin,
	      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
	      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	
	  /**
	   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	   */
	  var reComboMark = RegExp(rsCombo, 'g');
	
	  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	  var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	
	  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	  var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
	
	  /** Used to match non-compound words composed of alphanumeric characters. */
	  var reBasicWord = /[a-zA-Z0-9]+/g;
	
	  /** Used to match complex or compound words. */
	  var reComplexWord = RegExp([
	    rsUpper + '?' + rsLower + '+(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	    rsUpperMisc + '+(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
	    rsUpper + '?' + rsLowerMisc + '+',
	    rsUpper + '+',
	    rsDigits,
	    rsEmoji
	  ].join('|'), 'g');
	
	  /** Used to detect strings that need a more robust regexp to match words. */
	  var reHasComplexWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	
	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
	    'Promise', 'Reflect', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError',
	    'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
	    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
	  ];
	
	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;
	
	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	  typedArrayTags[setTag] = typedArrayTags[stringTag] =
	  typedArrayTags[weakMapTag] = false;
	
	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	  cloneableTags[boolTag] = cloneableTags[dateTag] =
	  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	  cloneableTags[int32Tag] = cloneableTags[mapTag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[setTag] =
	  cloneableTags[stringTag] = cloneableTags[symbolTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[weakMapTag] = false;
	
	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };
	
	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };
	
	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };
	
	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };
	
	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  /** Built-in method references without a dependency on `root`. */
	  var freeParseFloat = parseFloat,
	      freeParseInt = parseInt;
	
	  /** Detect free variable `exports`. */
	  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	    ? exports
	    : undefined;
	
	  /** Detect free variable `module`. */
	  var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	    ? module
	    : undefined;
	
	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = (freeModule && freeModule.exports === freeExports)
	    ? freeExports
	    : undefined;
	
	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
	
	  /** Detect free variable `self`. */
	  var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	
	  /** Detect free variable `window`. */
	  var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	
	  /** Detect `this` as the global object. */
	  var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	
	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal ||
	    ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	      freeSelf || thisGlobal || Function('return this')();
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Adds the key-value `pair` to `map`.
	   *
	   * @private
	   * @param {Object} map The map to modify.
	   * @param {Array} pair The key-value pair to add.
	   * @returns {Object} Returns `map`.
	   */
	  function addMapEntry(map, pair) {
	    // Don't return `Map#set` because it doesn't return the map instance in IE 11.
	    map.set(pair[0], pair[1]);
	    return map;
	  }
	
	  /**
	   * Adds `value` to `set`.
	   *
	   * @private
	   * @param {Object} set The set to modify.
	   * @param {*} value The value to add.
	   * @returns {Object} Returns `set`.
	   */
	  function addSetEntry(set, value) {
	    set.add(value);
	    return set;
	  }
	
	  /**
	   * A faster alternative to `Function#apply`, this function invokes `func`
	   * with the `this` binding of `thisArg` and the arguments of `args`.
	   *
	   * @private
	   * @param {Function} func The function to invoke.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {...*} args The arguments to invoke `func` with.
	   * @returns {*} Returns the result of `func`.
	   */
	  function apply(func, thisArg, args) {
	    var length = args.length;
	    switch (length) {
	      case 0: return func.call(thisArg);
	      case 1: return func.call(thisArg, args[0]);
	      case 2: return func.call(thisArg, args[0], args[1]);
	      case 3: return func.call(thisArg, args[0], args[1], args[2]);
	    }
	    return func.apply(thisArg, args);
	  }
	
	  /**
	   * A specialized version of `baseAggregator` for arrays.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} setter The function to set `accumulator` values.
	   * @param {Function} iteratee The iteratee to transform keys.
	   * @param {Object} accumulator The initial aggregated object.
	   * @returns {Function} Returns `accumulator`.
	   */
	  function arrayAggregator(array, setter, iteratee, accumulator) {
	    var index = -1,
	        length = array.length;
	
	    while (++index < length) {
	      var value = array[index];
	      setter(accumulator, value, iteratee(value), array);
	    }
	    return accumulator;
	  }
	
	  /**
	   * Creates a new array concatenating `array` with `other`.
	   *
	   * @private
	   * @param {Array} array The first array to concatenate.
	   * @param {Array} other The second array to concatenate.
	   * @returns {Array} Returns the new concatenated array.
	   */
	  function arrayConcat(array, other) {
	    var index = -1,
	        length = array.length,
	        othIndex = -1,
	        othLength = other.length,
	        result = Array(length + othLength);
	
	    while (++index < length) {
	      result[index] = array[index];
	    }
	    while (++othIndex < othLength) {
	      result[index++] = other[othIndex];
	    }
	    return result;
	  }
	
	  /**
	   * A specialized version of `_.forEach` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayEach(array, iteratee) {
	    var index = -1,
	        length = array.length;
	
	    while (++index < length) {
	      if (iteratee(array[index], index, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }
	
	  /**
	   * A specialized version of `_.forEachRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayEachRight(array, iteratee) {
	    var length = array.length;
	
	    while (length--) {
	      if (iteratee(array[length], length, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }
	
	  /**
	   * A specialized version of `_.every` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`.
	   */
	  function arrayEvery(array, predicate) {
	    var index = -1,
	        length = array.length;
	
	    while (++index < length) {
	      if (!predicate(array[index], index, array)) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  /**
	   * A specialized version of `_.filter` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   */
	  function arrayFilter(array, predicate) {
	    var index = -1,
	        length = array.length,
	        resIndex = 0,
	        result = [];
	
	    while (++index < length) {
	      var value = array[index];
	      if (predicate(value, index, array)) {
	        result[resIndex++] = value;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * A specialized version of `_.includes` for arrays without support for
	   * specifying an index to search from.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} target The value to search for.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */
	  function arrayIncludes(array, value) {
	    return !!array.length && baseIndexOf(array, value, 0) > -1;
	  }
	
	  /**
	   * This function is like `arrayIncludes` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} target The value to search for.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */
	  function arrayIncludesWith(array, value, comparator) {
	    var index = -1,
	        length = array.length;
	
	    while (++index < length) {
	      if (comparator(value, array[index])) {
	        return true;
	      }
	    }
	    return false;
	  }
	
	  /**
	   * A specialized version of `_.map` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   */
	  function arrayMap(array, iteratee) {
	    var index = -1,
	        length = array.length,
	        result = Array(length);
	
	    while (++index < length) {
	      result[index] = iteratee(array[index], index, array);
	    }
	    return result;
	  }
	
	  /**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayPush(array, values) {
	    var index = -1,
	        length = values.length,
	        offset = array.length;
	
	    while (++index < length) {
	      array[offset + index] = values[index];
	    }
	    return array;
	  }
	
	  /**
	   * A specialized version of `_.reduce` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the first element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */
	  function arrayReduce(array, iteratee, accumulator, initAccum) {
	    var index = -1,
	        length = array.length;
	
	    if (initAccum && length) {
	      accumulator = array[++index];
	    }
	    while (++index < length) {
	      accumulator = iteratee(accumulator, array[index], index, array);
	    }
	    return accumulator;
	  }
	
	  /**
	   * A specialized version of `_.reduceRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the last element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */
	  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
	    var length = array.length;
	    if (initAccum && length) {
	      accumulator = array[--length];
	    }
	    while (length--) {
	      accumulator = iteratee(accumulator, array[length], length, array);
	    }
	    return accumulator;
	  }
	
	  /**
	   * A specialized version of `_.some` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */
	  function arraySome(array, predicate) {
	    var index = -1,
	        length = array.length;
	
	    while (++index < length) {
	      if (predicate(array[index], index, array)) {
	        return true;
	      }
	    }
	    return false;
	  }
	
	  /**
	   * The base implementation of methods like `_.max` and `_.min` which accepts a
	   * `comparator` to determine the extremum value.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The iteratee invoked per iteration.
	   * @param {Function} comparator The comparator used to compare values.
	   * @returns {*} Returns the extremum value.
	   */
	  function baseExtremum(array, iteratee, comparator) {
	    var index = -1,
	        length = array.length;
	
	    while (++index < length) {
	      var value = array[index],
	          current = iteratee(value);
	
	      if (current != null && (computed === undefined
	            ? current === current
	            : comparator(current, computed)
	          )) {
	        var computed = current,
	            result = value;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * The base implementation of methods like `_.find` and `_.findKey`, without
	   * support for iteratee shorthands, which iterates over `collection` using
	   * `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @param {boolean} [retKey] Specify returning the key of the found element
	   *  instead of the element itself.
	   * @returns {*} Returns the found element or its key, else `undefined`.
	   */
	  function baseFind(collection, predicate, eachFunc, retKey) {
	    var result;
	    eachFunc(collection, function(value, key, collection) {
	      if (predicate(value, key, collection)) {
	        result = retKey ? key : value;
	        return false;
	      }
	    });
	    return result;
	  }
	
	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;
	
	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * This function is like `baseIndexOf` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOfWith(array, value, fromIndex, comparator) {
	    var index = fromIndex - 1,
	        length = array.length;
	
	    while (++index < length) {
	      if (comparator(array[index], value)) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * The base implementation of `_.mean` and `_.meanBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the mean.
	   */
	  function baseMean(array, iteratee) {
	    var length = array ? array.length : 0;
	    return length ? (baseSum(array, iteratee) / length) : NAN;
	  }
	
	  /**
	   * The base implementation of `_.reduce` and `_.reduceRight`, without support
	   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} accumulator The initial value.
	   * @param {boolean} initAccum Specify using the first or last element of
	   *  `collection` as the initial value.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the accumulated value.
	   */
	  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	    eachFunc(collection, function(value, index, collection) {
	      accumulator = initAccum
	        ? (initAccum = false, value)
	        : iteratee(accumulator, value, index, collection);
	    });
	    return accumulator;
	  }
	
	  /**
	   * The base implementation of `_.sortBy` which uses `comparer` to define the
	   * sort order of `array` and replaces criteria objects with their corresponding
	   * values.
	   *
	   * @private
	   * @param {Array} array The array to sort.
	   * @param {Function} comparer The function to define sort order.
	   * @returns {Array} Returns `array`.
	   */
	  function baseSortBy(array, comparer) {
	    var length = array.length;
	
	    array.sort(comparer);
	    while (length--) {
	      array[length] = array[length].value;
	    }
	    return array;
	  }
	
	  /**
	   * The base implementation of `_.sum` and `_.sumBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the sum.
	   */
	  function baseSum(array, iteratee) {
	    var result,
	        index = -1,
	        length = array.length;
	
	    while (++index < length) {
	      var current = iteratee(array[index]);
	      if (current !== undefined) {
	        result = result === undefined ? current : (result + current);
	      }
	    }
	    return result;
	  }
	
	  /**
	   * The base implementation of `_.times` without support for iteratee shorthands
	   * or max array length checks.
	   *
	   * @private
	   * @param {number} n The number of times to invoke `iteratee`.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the array of results.
	   */
	  function baseTimes(n, iteratee) {
	    var index = -1,
	        result = Array(n);
	
	    while (++index < n) {
	      result[index] = iteratee(index);
	    }
	    return result;
	  }
	
	  /**
	   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	   * of key-value pairs for `object` corresponding to the property names of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the new array of key-value pairs.
	   */
	  function baseToPairs(object, props) {
	    return arrayMap(props, function(key) {
	      return [key, object[key]];
	    });
	  }
	
	  /**
	   * The base implementation of `_.unary` without support for storing wrapper metadata.
	   *
	   * @private
	   * @param {Function} func The function to cap arguments for.
	   * @returns {Function} Returns the new function.
	   */
	  function baseUnary(func) {
	    return function(value) {
	      return func(value);
	    };
	  }
	
	  /**
	   * The base implementation of `_.values` and `_.valuesIn` which creates an
	   * array of `object` property values corresponding to the property names
	   * of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the array of property values.
	   */
	  function baseValues(object, props) {
	    return arrayMap(props, function(key) {
	      return object[key];
	    });
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the first unmatched string symbol.
	   */
	  function charsStartIndex(strSymbols, chrSymbols) {
	    var index = -1,
	        length = strSymbols.length;
	
	    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the last unmatched string symbol.
	   */
	  function charsEndIndex(strSymbols, chrSymbols) {
	    var index = strSymbols.length;
	
	    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	    return index;
	  }
	
	  /**
	   * Checks if `value` is a global object.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	   */
	  function checkGlobal(value) {
	    return (value && value.Object === Object) ? value : null;
	  }
	
	  /**
	   * Compares values to sort them in ascending order.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function compareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;
	
	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;
	
	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }
	
	  /**
	   * Used by `_.orderBy` to compare multiple properties of a value to another
	   * and stable sort them.
	   *
	   * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	   * specify an order of "desc" for descending or "asc" for ascending sort order
	   * of corresponding values.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {boolean[]|string[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;
	
	    while (++index < length) {
	      var result = compareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        var order = orders[index];
	        return result * (order == 'desc' ? -1 : 1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }
	
	  /**
	   * Gets the number of `placeholder` occurrences in `array`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} placeholder The placeholder to search for.
	   * @returns {number} Returns the placeholder count.
	   */
	  function countHolders(array, placeholder) {
	    var length = array.length,
	        result = 0;
	
	    while (length--) {
	      if (array[length] === placeholder) {
	        result++;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Creates a function that performs a mathematical operation on two values.
	   *
	   * @private
	   * @param {Function} operator The function to perform the operation.
	   * @returns {Function} Returns the new mathematical operation function.
	   */
	  function createMathOperation(operator) {
	    return function(value, other) {
	      var result;
	      if (value === undefined && other === undefined) {
	        return 0;
	      }
	      if (value !== undefined) {
	        result = value;
	      }
	      if (other !== undefined) {
	        result = result === undefined ? other : operator(result, other);
	      }
	      return result;
	    };
	  }
	
	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }
	
	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }
	
	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }
	
	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * Checks if `value` is a host object in IE < 9.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	   */
	  function isHostObject(value) {
	    // Many host objects are `Object` objects that can coerce to strings
	    // despite having improperly defined `toString` methods.
	    var result = false;
	    if (value != null && typeof value.toString != 'function') {
	      try {
	        result = !!(value + '');
	      } catch (e) {}
	    }
	    return result;
	  }
	
	  /**
	   * Checks if `value` is a valid array-like index.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	   */
	  function isIndex(value, length) {
	    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	    length = length == null ? MAX_SAFE_INTEGER : length;
	    return value > -1 && value % 1 == 0 && value < length;
	  }
	
	  /**
	   * Converts `iterator` to an array.
	   *
	   * @private
	   * @param {Object} iterator The iterator to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function iteratorToArray(iterator) {
	    var data,
	        result = [];
	
	    while (!(data = iterator.next()).done) {
	      result.push(data.value);
	    }
	    return result;
	  }
	
	  /**
	   * Converts `map` to an array.
	   *
	   * @private
	   * @param {Object} map The map to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function mapToArray(map) {
	    var index = -1,
	        result = Array(map.size);
	
	    map.forEach(function(value, key) {
	      result[++index] = [key, value];
	    });
	    return result;
	  }
	
	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = 0,
	        result = [];
	
	    while (++index < length) {
	      var value = array[index];
	      if (value === placeholder || value === PLACEHOLDER) {
	        array[index] = PLACEHOLDER;
	        result[resIndex++] = index;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Converts `set` to an array.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function setToArray(set) {
	    var index = -1,
	        result = Array(set.size);
	
	    set.forEach(function(value) {
	      result[++index] = value;
	    });
	    return result;
	  }
	
	  /**
	   * Gets the number of symbols in `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the string size.
	   */
	  function stringSize(string) {
	    if (!(string && reHasComplexSymbol.test(string))) {
	      return string.length;
	    }
	    var result = reComplexSymbol.lastIndex = 0;
	    while (reComplexSymbol.test(string)) {
	      result++;
	    }
	    return result;
	  }
	
	  /**
	   * Converts `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function stringToArray(string) {
	    return string.match(reComplexSymbol);
	  }
	
	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Create a new pristine `lodash` function using the `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.1.0
	   * @category Util
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // Use `context` to mock `Date#getTime` use in `_.now`.
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // Create a suped-up `defer` in Node.js.
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    context = context ? _.defaults({}, context, _.pick(root, contextProps)) : root;
	
	    /** Built-in constructor references. */
	    var Date = context.Date,
	        Error = context.Error,
	        Math = context.Math,
	        RegExp = context.RegExp,
	        TypeError = context.TypeError;
	
	    /** Used for built-in method references. */
	    var arrayProto = context.Array.prototype,
	        objectProto = context.Object.prototype;
	
	    /** Used to resolve the decompiled source of functions. */
	    var funcToString = context.Function.prototype.toString;
	
	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;
	
	    /** Used to generate unique IDs. */
	    var idCounter = 0;
	
	    /** Used to infer the `Object` constructor. */
	    var objectCtorString = funcToString.call(Object);
	
	    /**
	     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objectToString = objectProto.toString;
	
	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;
	
	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );
	
	    /** Built-in value references. */
	    var Buffer = moduleExports ? context.Buffer : undefined,
	        Reflect = context.Reflect,
	        Symbol = context.Symbol,
	        Uint8Array = context.Uint8Array,
	        clearTimeout = context.clearTimeout,
	        enumerate = Reflect ? Reflect.enumerate : undefined,
	        getOwnPropertySymbols = Object.getOwnPropertySymbols,
	        iteratorSymbol = typeof (iteratorSymbol = Symbol && Symbol.iterator) == 'symbol' ? iteratorSymbol : undefined,
	        objectCreate = Object.create,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice;
	
	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeFloor = Math.floor,
	        nativeGetPrototype = Object.getPrototypeOf,
	        nativeIsFinite = context.isFinite,
	        nativeJoin = arrayProto.join,
	        nativeKeys = Object.keys,
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random,
	        nativeReverse = arrayProto.reverse;
	
	    /* Built-in method references that are verified to be native. */
	    var DataView = getNative(context, 'DataView'),
	        Map = getNative(context, 'Map'),
	        Promise = getNative(context, 'Promise'),
	        Set = getNative(context, 'Set'),
	        WeakMap = getNative(context, 'WeakMap'),
	        nativeCreate = getNative(Object, 'create');
	
	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;
	
	    /** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	    var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
	
	    /** Used to lookup unminified function names. */
	    var realNames = {};
	
	    /** Used to detect maps, sets, and weakmaps. */
	    var dataViewCtorString = DataView ? (DataView + '') : '',
	        mapCtorString = Map ? funcToString.call(Map) : '',
	        promiseCtorString = Promise ? funcToString.call(Promise) : '',
	        setCtorString = Set ? funcToString.call(Set) : '',
	        weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';
	
	    /** Used to convert symbols to primitives and strings. */
	    var symbolProto = Symbol ? Symbol.prototype : undefined,
	        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	        symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit method
	     * chain sequences. Methods that operate on and return arrays, collections,
	     * and functions can be chained together. Methods that retrieve a single value
	     * or may return a primitive value will automatically end the chain sequence
	     * and return the unwrapped value. Otherwise, the value must be unwrapped
	     * with `_#value`.
	     *
	     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	     * enabled using `_.chain`.
	     *
	     * The execution of chained methods is lazy, that is, it's deferred until
	     * `_#value` is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion.
	     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	     * the creation of intermediate arrays and can greatly reduce the number of
	     * iteratee executions. Sections of a chain sequence qualify for shortcut
	     * fusion if the section is applied to an array of at least two hundred
	     * elements and any iteratees accept only one argument. The heuristic for
	     * whether a section qualifies for shortcut fusion is subject to change.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	     * `zipObject`, `zipObjectDeep`, and `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `deburr`, `divide`, `each`,
	     * `eachRight`, `endsWith`, `eq`, `escape`, `escapeRegExp`, `every`, `find`,
	     * `findIndex`, `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `first`,
	     * `floor`, `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`,
	     * `forOwnRight`, `get`, `gt`, `gte`, `has`, `hasIn`, `head`, `identity`,
	     * `includes`, `indexOf`, `inRange`, `invoke`, `isArguments`, `isArray`,
	     * `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`, `isBoolean`, `isBuffer`,
	     * `isDate`, `isElement`, `isEmpty`, `isEqual`, `isEqualWith`, `isError`,
	     * `isFinite`, `isFunction`, `isInteger`, `isLength`, `isMap`, `isMatch`,
	     * `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`, `isNumber`,
	     * `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`, `isSafeInteger`,
	     * `isSet`, `isString`, `isUndefined`, `isTypedArray`, `isWeakMap`, `isWeakSet`,
	     * `join`, `kebabCase`, `last`, `lastIndexOf`, `lowerCase`, `lowerFirst`,
	     * `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`, `min`, `minBy`, `multiply`,
	     * `noConflict`, `noop`, `now`, `pad`, `padEnd`, `padStart`, `parseInt`,
	     * `pop`, `random`, `reduce`, `reduceRight`, `repeat`, `result`, `round`,
	     * `runInContext`, `sample`, `shift`, `size`, `snakeCase`, `some`, `sortedIndex`,
	     * `sortedIndexBy`, `sortedLastIndex`, `sortedLastIndexBy`, `startCase`,
	     * `startsWith`, `subtract`, `sum`, `sumBy`, `template`, `times`, `toInteger`,
	     * `toJSON`, `toLength`, `toLower`, `toNumber`, `toSafeInteger`, `toString`,
	     * `toUpper`, `trim`, `trimEnd`, `trimStart`, `truncate`, `unescape`,
	     * `uniqueId`, `upperCase`, `upperFirst`, `value`, and `words`
	     *
	     * @name _
	     * @constructor
	     * @category Seq
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // Returns an unwrapped value.
	     * wrapped.reduce(_.add);
	     * // => 6
	     *
	     * // Returns a wrapped value.
	     * var squares = wrapped.map(square);
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }
	
	    /**
	     * The function whose prototype chain sequence wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }
	
	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable explicit method chain sequences.
	     */
	    function LodashWrapper(value, chainAll) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__chain__ = !!chainAll;
	      this.__index__ = 0;
	      this.__values__ = undefined;
	    }
	
	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type {Object}
	     */
	    lodash.templateSettings = {
	
	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'escape': reEscape,
	
	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'evaluate': reEvaluate,
	
	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'interpolate': reInterpolate,
	
	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type {string}
	       */
	      'variable': '',
	
	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type {Object}
	       */
	      'imports': {
	
	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type {Function}
	         */
	        '_': lodash
	      }
	    };
	
	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;
	    lodash.prototype.constructor = lodash;
	
	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @constructor
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = MAX_ARRAY_LENGTH;
	      this.__views__ = [];
	    }
	
	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = copyArray(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = copyArray(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = copyArray(this.__views__);
	      return result;
	    }
	
	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }
	
	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);
	
	      if (!isArr || arrLength < LARGE_ARRAY_SIZE ||
	          (arrLength == length && takeCount == length)) {
	        return baseWrapperValue(array, this.__actions__);
	      }
	      var result = [];
	
	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;
	
	        var iterIndex = -1,
	            value = array[index];
	
	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);
	
	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }
	
	    // Ensure `LazyWrapper` is an instance of `baseLodash`.
	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an hash object.
	     *
	     * @private
	     * @constructor
	     * @returns {Object} Returns the new hash object.
	     */
	    function Hash() {}
	
	    /**
	     * Removes `key` and its value from the hash.
	     *
	     * @private
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function hashDelete(hash, key) {
	      return hashHas(hash, key) && delete hash[key];
	    }
	
	    /**
	     * Gets the hash value for `key`.
	     *
	     * @private
	     * @param {Object} hash The hash to query.
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function hashGet(hash, key) {
	      if (nativeCreate) {
	        var result = hash[key];
	        return result === HASH_UNDEFINED ? undefined : result;
	      }
	      return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
	    }
	
	    /**
	     * Checks if a hash value for `key` exists.
	     *
	     * @private
	     * @param {Object} hash The hash to query.
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function hashHas(hash, key) {
	      return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
	    }
	
	    /**
	     * Sets the hash `key` to `value`.
	     *
	     * @private
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     */
	    function hashSet(hash, key, value) {
	      hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	    }
	
	    // Avoid inheriting from `Object.prototype` when possible.
	    Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a map cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */
	    function MapCache(values) {
	      var index = -1,
	          length = values ? values.length : 0;
	
	      this.clear();
	      while (++index < length) {
	        var entry = values[index];
	        this.set(entry[0], entry[1]);
	      }
	    }
	
	    /**
	     * Removes all key-value entries from the map.
	     *
	     * @private
	     * @name clear
	     * @memberOf MapCache
	     */
	    function mapClear() {
	      this.__data__ = {
	        'hash': new Hash,
	        'map': Map ? new Map : [],
	        'string': new Hash
	      };
	    }
	
	    /**
	     * Removes `key` and its value from the map.
	     *
	     * @private
	     * @name delete
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function mapDelete(key) {
	      var data = this.__data__;
	      if (isKeyable(key)) {
	        return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
	      }
	      return Map ? data.map['delete'](key) : assocDelete(data.map, key);
	    }
	
	    /**
	     * Gets the map value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf MapCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function mapGet(key) {
	      var data = this.__data__;
	      if (isKeyable(key)) {
	        return hashGet(typeof key == 'string' ? data.string : data.hash, key);
	      }
	      return Map ? data.map.get(key) : assocGet(data.map, key);
	    }
	
	    /**
	     * Checks if a map value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf MapCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      var data = this.__data__;
	      if (isKeyable(key)) {
	        return hashHas(typeof key == 'string' ? data.string : data.hash, key);
	      }
	      return Map ? data.map.has(key) : assocHas(data.map, key);
	    }
	
	    /**
	     * Sets the map `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf MapCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the map cache instance.
	     */
	    function mapSet(key, value) {
	      var data = this.__data__;
	      if (isKeyable(key)) {
	        hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
	      } else if (Map) {
	        data.map.set(key, value);
	      } else {
	        assocSet(data.map, key, value);
	      }
	      return this;
	    }
	
	    // Add methods to `MapCache`.
	    MapCache.prototype.clear = mapClear;
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     *
	     * Creates a set cache object to store unique values.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var index = -1,
	          length = values ? values.length : 0;
	
	      this.__data__ = new MapCache;
	      while (++index < length) {
	        this.push(values[index]);
	      }
	    }
	
	    /**
	     * Checks if `value` is in `cache`.
	     *
	     * @private
	     * @param {Object} cache The set cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `true` if `value` is found, else `false`.
	     */
	    function cacheHas(cache, value) {
	      var map = cache.__data__;
	      if (isKeyable(value)) {
	        var data = map.__data__,
	            hash = typeof value == 'string' ? data.string : data.hash;
	
	        return hash[value] === HASH_UNDEFINED;
	      }
	      return map.has(value);
	    }
	
	    /**
	     * Adds `value` to the set cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var map = this.__data__;
	      if (isKeyable(value)) {
	        var data = map.__data__,
	            hash = typeof value == 'string' ? data.string : data.hash;
	
	        hash[value] = HASH_UNDEFINED;
	      }
	      else {
	        map.set(value, HASH_UNDEFINED);
	      }
	    }
	
	    // Add methods to `SetCache`.
	    SetCache.prototype.push = cachePush;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a stack cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */
	    function Stack(values) {
	      var index = -1,
	          length = values ? values.length : 0;
	
	      this.clear();
	      while (++index < length) {
	        var entry = values[index];
	        this.set(entry[0], entry[1]);
	      }
	    }
	
	    /**
	     * Removes all key-value entries from the stack.
	     *
	     * @private
	     * @name clear
	     * @memberOf Stack
	     */
	    function stackClear() {
	      this.__data__ = { 'array': [], 'map': null };
	    }
	
	    /**
	     * Removes `key` and its value from the stack.
	     *
	     * @private
	     * @name delete
	     * @memberOf Stack
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function stackDelete(key) {
	      var data = this.__data__,
	          array = data.array;
	
	      return array ? assocDelete(array, key) : data.map['delete'](key);
	    }
	
	    /**
	     * Gets the stack value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Stack
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function stackGet(key) {
	      var data = this.__data__,
	          array = data.array;
	
	      return array ? assocGet(array, key) : data.map.get(key);
	    }
	
	    /**
	     * Checks if a stack value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Stack
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function stackHas(key) {
	      var data = this.__data__,
	          array = data.array;
	
	      return array ? assocHas(array, key) : data.map.has(key);
	    }
	
	    /**
	     * Sets the stack `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Stack
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the stack cache instance.
	     */
	    function stackSet(key, value) {
	      var data = this.__data__,
	          array = data.array;
	
	      if (array) {
	        if (array.length < (LARGE_ARRAY_SIZE - 1)) {
	          assocSet(array, key, value);
	        } else {
	          data.array = null;
	          data.map = new MapCache(array);
	        }
	      }
	      var map = data.map;
	      if (map) {
	        map.set(key, value);
	      }
	      return this;
	    }
	
	    // Add methods to `Stack`.
	    Stack.prototype.clear = stackClear;
	    Stack.prototype['delete'] = stackDelete;
	    Stack.prototype.get = stackGet;
	    Stack.prototype.has = stackHas;
	    Stack.prototype.set = stackSet;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Removes `key` and its value from the associative array.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function assocDelete(array, key) {
	      var index = assocIndexOf(array, key);
	      if (index < 0) {
	        return false;
	      }
	      var lastIndex = array.length - 1;
	      if (index == lastIndex) {
	        array.pop();
	      } else {
	        splice.call(array, index, 1);
	      }
	      return true;
	    }
	
	    /**
	     * Gets the associative array value for `key`.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function assocGet(array, key) {
	      var index = assocIndexOf(array, key);
	      return index < 0 ? undefined : array[index][1];
	    }
	
	    /**
	     * Checks if an associative array value for `key` exists.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function assocHas(array, key) {
	      return assocIndexOf(array, key) > -1;
	    }
	
	    /**
	     * Gets the index at which the `key` is found in `array` of key-value pairs.
	     *
	     * @private
	     * @param {Array} array The array to search.
	     * @param {*} key The key to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */
	    function assocIndexOf(array, key) {
	      var length = array.length;
	      while (length--) {
	        if (eq(array[length][0], key)) {
	          return length;
	        }
	      }
	      return -1;
	    }
	
	    /**
	     * Sets the associative array `key` to `value`.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     */
	    function assocSet(array, key, value) {
	      var index = assocIndexOf(array, key);
	      if (index < 0) {
	        array.push([key, value]);
	      } else {
	        array[index][1] = value;
	      }
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Used by `_.defaults` to customize its `_.assignIn` use.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to assign.
	     * @param {Object} object The parent object of `objValue`.
	     * @returns {*} Returns the value to assign.
	     */
	    function assignInDefaults(objValue, srcValue, key, object) {
	      if (objValue === undefined ||
	          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	        return srcValue;
	      }
	      return objValue;
	    }
	
	    /**
	     * This function is like `assignValue` except that it doesn't assign
	     * `undefined` values.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
	    function assignMergeValue(object, key, value) {
	      if ((value !== undefined && !eq(object[key], value)) ||
	          (typeof key == 'number' && value === undefined && !(key in object))) {
	        object[key] = value;
	      }
	    }
	
	    /**
	     * Assigns `value` to `key` of `object` if the existing value is not equivalent
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
	    function assignValue(object, key, value) {
	      var objValue = object[key];
	      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	          (value === undefined && !(key in object))) {
	        object[key] = value;
	      }
	    }
	
	    /**
	     * Aggregates elements of `collection` on `accumulator` with keys transformed
	     * by `iteratee` and values set by `setter`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform keys.
	     * @param {Object} accumulator The initial aggregated object.
	     * @returns {Function} Returns `accumulator`.
	     */
	    function baseAggregator(collection, setter, iteratee, accumulator) {
	      baseEach(collection, function(value, key, collection) {
	        setter(accumulator, value, iteratee(value), collection);
	      });
	      return accumulator;
	    }
	
	    /**
	     * The base implementation of `_.assign` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return object && copyObject(source, keys(source), object);
	    }
	
	    /**
	     * The base implementation of `_.at` without support for individual paths.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {string[]} paths The property paths of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(object, paths) {
	      var index = -1,
	          isNil = object == null,
	          length = paths.length,
	          result = Array(length);
	
	      while (++index < length) {
	        result[index] = isNil ? undefined : get(object, paths[index]);
	      }
	      return result;
	    }
	
	    /**
	     * Casts `value` to an empty array if it's not an array like object.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array|Object} Returns the cast array-like object.
	     */
	    function baseCastArrayLikeObject(value) {
	      return isArrayLikeObject(value) ? value : [];
	    }
	
	    /**
	     * Casts `value` to `identity` if it's not a function.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Function} Returns cast function.
	     */
	    function baseCastFunction(value) {
	      return typeof value == 'function' ? value : identity;
	    }
	
	    /**
	     * Casts `value` to a string if it's not a string or symbol.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {string|symbol} Returns the cast key.
	     */
	    function baseCastKey(key) {
	      return (typeof key == 'string' || isSymbol(key)) ? key : (key + '');
	    }
	
	    /**
	     * Casts `value` to a path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast property path array.
	     */
	    function baseCastPath(value) {
	      return isArray(value) ? value : stringToPath(value);
	    }
	
	    /**
	     * The base implementation of `_.clamp` which doesn't coerce arguments to numbers.
	     *
	     * @private
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     */
	    function baseClamp(number, lower, upper) {
	      if (number === number) {
	        if (upper !== undefined) {
	          number = number <= upper ? number : upper;
	        }
	        if (lower !== undefined) {
	          number = number >= lower ? number : lower;
	        }
	      }
	      return number;
	    }
	
	    /**
	     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	     * traversed objects.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {boolean} [isFull] Specify a clone including symbols.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The parent object of `value`.
	     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object, stack) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return copyArray(value, result);
	        }
	      } else {
	        var tag = getTag(value),
	            isFunc = tag == funcTag || tag == genTag;
	
	        if (isBuffer(value)) {
	          return cloneBuffer(value, isDeep);
	        }
	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          if (isHostObject(value)) {
	            return object ? value : {};
	          }
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return copySymbols(value, baseAssign(result, value));
	          }
	        } else {
	          if (!cloneableTags[tag]) {
	            return object ? value : {};
	          }
	          result = initCloneByTag(value, tag, baseClone, isDeep);
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stack || (stack = new Stack);
	      var stacked = stack.get(value);
	      if (stacked) {
	        return stacked;
	      }
	      stack.set(value, result);
	
	      if (!isArr) {
	        var props = isFull ? getAllKeys(value) : keys(value);
	      }
	      // Recursively populate clone (susceptible to call stack limits).
	      arrayEach(props || value, function(subValue, key) {
	        if (props) {
	          key = subValue;
	          subValue = value[key];
	        }
	        assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.conforms` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new function.
	     */
	    function baseConforms(source) {
	      var props = keys(source),
	          length = props.length;
	
	      return function(object) {
	        if (object == null) {
	          return !length;
	        }
	        var index = length;
	        while (index--) {
	          var key = props[index],
	              predicate = source[key],
	              value = object[key];
	
	          if ((value === undefined &&
	              !(key in Object(object))) || !predicate(value)) {
	            return false;
	          }
	        }
	        return true;
	      };
	    }
	
	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    function baseCreate(proto) {
	      return isObject(proto) ? objectCreate(proto) : {};
	    }
	
	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an array
	     * of `func` arguments.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments to provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }
	
	    /**
	     * The base implementation of methods like `_.difference` without support
	     * for excluding multiple arrays or iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values, iteratee, comparator) {
	      var index = -1,
	          includes = arrayIncludes,
	          isCommon = true,
	          length = array.length,
	          result = [],
	          valuesLength = values.length;
	
	      if (!length) {
	        return result;
	      }
	      if (iteratee) {
	        values = arrayMap(values, baseUnary(iteratee));
	      }
	      if (comparator) {
	        includes = arrayIncludesWith;
	        isCommon = false;
	      }
	      else if (values.length >= LARGE_ARRAY_SIZE) {
	        includes = cacheHas;
	        isCommon = false;
	        values = new SetCache(values);
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;
	
	        if (isCommon && computed === computed) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === computed) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (!includes(values, computed, comparator)) {
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.forEach` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);
	
	    /**
	     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);
	
	    /**
	     * The base implementation of `_.every` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;
	
	      start = toInteger(start);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : toInteger(end);
	      if (end < 0) {
	        end += length;
	      }
	      end = start > end ? 0 : toLength(end);
	      while (start < end) {
	        array[start++] = value;
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.filter` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.flatten` with support for restricting flattening.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {number} depth The maximum recursion depth.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, depth, isStrict, result) {
	      result || (result = []);
	
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        var value = array[index];
	        if (depth > 0 && isArrayLikeObject(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (depth > 1) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, depth - 1, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `baseForOwn` which iterates over `object`
	     * properties returned by `keysFunc` invoking `iteratee` for each property.
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();
	
	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);
	
	    /**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return object && baseFor(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return object && baseForRight(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from `props`.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      return arrayFilter(props, function(key) {
	        return isFunction(object[key]);
	      });
	    }
	
	    /**
	     * The base implementation of `_.get` without support for default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path) {
	      path = isKey(path, object) ? [path] : baseCastPath(path);
	
	      var index = 0,
	          length = path.length;
	
	      while (object != null && index < length) {
	        object = object[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }
	
	    /**
	     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @param {Function} symbolsFunc The function to get the symbols of `object`.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	      var result = keysFunc(object);
	      return isArray(object)
	        ? result
	        : arrayPush(result, symbolsFunc(object));
	    }
	
	    /**
	     * The base implementation of `_.has` without support for deep paths.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
	    function baseHas(object, key) {
	      // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	      // that are composed entirely of index properties, return `false` for
	      // `hasOwnProperty` checks of them.
	      return hasOwnProperty.call(object, key) ||
	        (typeof object == 'object' && key in object && getPrototype(object) === null);
	    }
	
	    /**
	     * The base implementation of `_.hasIn` without support for deep paths.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
	    function baseHasIn(object, key) {
	      return key in Object(object);
	    }
	
	    /**
	     * The base implementation of `_.inRange` which doesn't coerce arguments to numbers.
	     *
	     * @private
	     * @param {number} number The number to check.
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     */
	    function baseInRange(number, start, end) {
	      return number >= nativeMin(start, end) && number < nativeMax(start, end);
	    }
	
	    /**
	     * The base implementation of methods like `_.intersection`, without support
	     * for iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of shared values.
	     */
	    function baseIntersection(arrays, iteratee, comparator) {
	      var includes = comparator ? arrayIncludesWith : arrayIncludes,
	          length = arrays[0].length,
	          othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(othLength),
	          maxLength = Infinity,
	          result = [];
	
	      while (othIndex--) {
	        var array = arrays[othIndex];
	        if (othIndex && iteratee) {
	          array = arrayMap(array, baseUnary(iteratee));
	        }
	        maxLength = nativeMin(array.length, maxLength);
	        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	          ? new SetCache(othIndex && array)
	          : undefined;
	      }
	      array = arrays[0];
	
	      var index = -1,
	          seen = caches[0];
	
	      outer:
	      while (++index < length && result.length < maxLength) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;
	
	        if (!(seen
	              ? cacheHas(seen, computed)
	              : includes(result, computed, comparator)
	            )) {
	          othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if (!(cache
	                  ? cacheHas(cache, computed)
	                  : includes(arrays[othIndex], computed, comparator))
	                ) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.invert` and `_.invertBy` which inverts
	     * `object` with values transformed by `iteratee` and set by `setter`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform values.
	     * @param {Object} accumulator The initial inverted object.
	     * @returns {Function} Returns `accumulator`.
	     */
	    function baseInverter(object, setter, iteratee, accumulator) {
	      baseForOwn(object, function(value, key, object) {
	        setter(accumulator, iteratee(value), key, object);
	      });
	      return accumulator;
	    }
	
	    /**
	     * The base implementation of `_.invoke` without support for individual
	     * method arguments.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function baseInvoke(object, path, args) {
	      if (!isKey(path, object)) {
	        path = baseCastPath(path);
	        object = parent(object, path);
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : apply(func, object, args);
	    }
	
	    /**
	     * The base implementation of `_.isEqual` which supports partial comparisons
	     * and tracks traversed objects.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {boolean} [bitmask] The bitmask of comparison flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - Unordered comparison
	     *     2 - Partial comparison
	     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, bitmask, stack) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	    }
	
	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;
	
	      if (!objIsArr) {
	        objTag = getTag(object);
	        objTag = objTag == argsTag ? objectTag : objTag;
	      }
	      if (!othIsArr) {
	        othTag = getTag(other);
	        othTag = othTag == argsTag ? objectTag : othTag;
	      }
	      var objIsObj = objTag == objectTag && !isHostObject(object),
	          othIsObj = othTag == objectTag && !isHostObject(other),
	          isSameTag = objTag == othTag;
	
	      if (isSameTag && !objIsObj) {
	        stack || (stack = new Stack);
	        return (objIsArr || isTypedArray(object))
	          ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	          : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	      }
	      if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	        if (objIsWrapped || othIsWrapped) {
	          var objUnwrapped = objIsWrapped ? object.value() : object,
	              othUnwrapped = othIsWrapped ? other.value() : other;
	
	          stack || (stack = new Stack);
	          return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      stack || (stack = new Stack);
	      return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	    }
	
	    /**
	     * The base implementation of `_.isMatch` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Array} matchData The property names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, source, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;
	
	      if (object == null) {
	        return !length;
	      }
	      object = Object(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];
	
	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var stack = new Stack;
	          if (customizer) {
	            var result = customizer(objValue, srcValue, key, object, source, stack);
	          }
	          if (!(result === undefined
	                ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	                : result
	              )) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }
	
	    /**
	     * The base implementation of `_.iteratee`.
	     *
	     * @private
	     * @param {*} [value=_.identity] The value to convert to an iteratee.
	     * @returns {Function} Returns the iteratee.
	     */
	    function baseIteratee(value) {
	      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	      if (typeof value == 'function') {
	        return value;
	      }
	      if (value == null) {
	        return identity;
	      }
	      if (typeof value == 'object') {
	        return isArray(value)
	          ? baseMatchesProperty(value[0], value[1])
	          : baseMatches(value);
	      }
	      return property(value);
	    }
	
	    /**
	     * The base implementation of `_.keys` which doesn't skip the constructor
	     * property of prototypes or treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function baseKeys(object) {
	      return nativeKeys(Object(object));
	    }
	
	    /**
	     * The base implementation of `_.keysIn` which doesn't skip the constructor
	     * property of prototypes or treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function baseKeysIn(object) {
	      object = object == null ? object : Object(object);
	
	      var result = [];
	      for (var key in object) {
	        result.push(key);
	      }
	      return result;
	    }
	
	    // Fallback for IE < 9 with es6-shim.
	    if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	      baseKeysIn = function(object) {
	        return iteratorToArray(enumerate(object));
	      };
	    }
	
	    /**
	     * The base implementation of `_.map` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	
	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.matches` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];
	
	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          return object[key] === value &&
	            (value !== undefined || (key in Object(object)));
	        };
	      }
	      return function(object) {
	        return object === source || baseIsMatch(object, source, matchData);
	      };
	    }
	
	    /**
	     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      return function(object) {
	        var objValue = get(object, path);
	        return (objValue === undefined && objValue === srcValue)
	          ? hasIn(object, path)
	          : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	      };
	    }
	
	    /**
	     * The base implementation of `_.merge` without support for multiple sources.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */
	    function baseMerge(object, source, srcIndex, customizer, stack) {
	      if (object === source) {
	        return;
	      }
	      if (!(isArray(source) || isTypedArray(source))) {
	        var props = keysIn(source);
	      }
	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObject(srcValue)) {
	          stack || (stack = new Stack);
	          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	        }
	        else {
	          var newValue = customizer
	            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	            : undefined;
	
	          if (newValue === undefined) {
	            newValue = srcValue;
	          }
	          assignMergeValue(object, key, newValue);
	        }
	      });
	    }
	
	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */
	    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	      var objValue = object[key],
	          srcValue = source[key],
	          stacked = stack.get(srcValue);
	
	      if (stacked) {
	        assignMergeValue(object, key, stacked);
	        return;
	      }
	      var newValue = customizer
	        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	        : undefined;
	
	      var isCommon = newValue === undefined;
	
	      if (isCommon) {
	        newValue = srcValue;
	        if (isArray(srcValue) || isTypedArray(srcValue)) {
	          if (isArray(objValue)) {
	            newValue = objValue;
	          }
	          else if (isArrayLikeObject(objValue)) {
	            newValue = copyArray(objValue);
	          }
	          else {
	            isCommon = false;
	            newValue = baseClone(srcValue, true);
	          }
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          if (isArguments(objValue)) {
	            newValue = toPlainObject(objValue);
	          }
	          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	            isCommon = false;
	            newValue = baseClone(srcValue, true);
	          }
	          else {
	            newValue = objValue;
	          }
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      stack.set(srcValue, newValue);
	
	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	      }
	      stack['delete'](srcValue);
	      assignMergeValue(object, key, newValue);
	    }
	
	    /**
	     * The base implementation of `_.orderBy` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {string[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseOrderBy(collection, iteratees, orders) {
	      var index = -1;
	      iteratees = arrayMap(iteratees.length ? iteratees : [identity], getIteratee());
	
	      var result = baseMap(collection, function(value, key, collection) {
	        var criteria = arrayMap(iteratees, function(iteratee) {
	          return iteratee(value);
	        });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });
	
	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }
	
	    /**
	     * The base implementation of `_.pick` without support for individual
	     * property identifiers.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property identifiers to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function basePick(object, props) {
	      object = Object(object);
	      return arrayReduce(props, function(result, key) {
	        if (key in object) {
	          result[key] = object[key];
	        }
	        return result;
	      }, {});
	    }
	
	    /**
	     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per property.
	     * @returns {Object} Returns the new object.
	     */
	    function basePickBy(object, predicate) {
	      var index = -1,
	          props = getAllKeysIn(object),
	          length = props.length,
	          result = {};
	
	      while (++index < length) {
	        var key = props[index],
	            value = object[key];
	
	        if (predicate(value, key)) {
	          result[key] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }
	
	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      return function(object) {
	        return baseGet(object, path);
	      };
	    }
	
	    /**
	     * The base implementation of `_.pullAllBy` without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAll(array, values, iteratee, comparator) {
	      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
	          index = -1,
	          length = values.length,
	          seen = array;
	
	      if (iteratee) {
	        seen = arrayMap(array, baseUnary(iteratee));
	      }
	      while (++index < length) {
	        var fromIndex = 0,
	            value = values[index],
	            computed = iteratee ? iteratee(value) : value;
	
	        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
	          if (seen !== array) {
	            splice.call(seen, fromIndex, 1);
	          }
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * indexes or capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0,
	          lastIndex = length - 1;
	
	      while (length--) {
	        var index = indexes[length];
	        if (lastIndex == length || index != previous) {
	          var previous = index;
	          if (isIndex(index)) {
	            splice.call(array, index, 1);
	          }
	          else if (!isKey(index, array)) {
	            var path = baseCastPath(index),
	                object = parent(array, path);
	
	            if (object != null) {
	              delete object[last(path)];
	            }
	          }
	          else {
	            delete array[index];
	          }
	        }
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.random` without support for returning
	     * floating-point numbers.
	     *
	     * @private
	     * @param {number} lower The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(lower, upper) {
	      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	    }
	
	    /**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments to numbers.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the new array of numbers.
	     */
	    function baseRange(start, end, step, fromRight) {
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);
	
	      while (length--) {
	        result[fromRight ? length : ++index] = start;
	        start += step;
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.repeat` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {string} string The string to repeat.
	     * @param {number} n The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     */
	    function baseRepeat(string, n) {
	      var result = '';
	      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        if (n) {
	          string += string;
	        }
	      } while (n);
	
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.set`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */
	    function baseSet(object, path, value, customizer) {
	      path = isKey(path, object) ? [path] : baseCastPath(path);
	
	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;
	
	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          var newValue = value;
	          if (index != lastIndex) {
	            var objValue = nested[key];
	            newValue = customizer ? customizer(objValue, key, nested) : undefined;
	            if (newValue === undefined) {
	              newValue = objValue == null
	                ? (isIndex(path[index + 1]) ? [] : {})
	                : objValue;
	            }
	          }
	          assignValue(nested, key, newValue);
	        }
	        nested = nested[key];
	      }
	      return object;
	    }
	
	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };
	
	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;
	
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = end > length ? length : end;
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;
	
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.some` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;
	
	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }
	
	    /**
	     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
	     * performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function baseSortedIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;
	
	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];
	
	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return baseSortedIndexBy(array, value, identity, retHighest);
	    }
	
	    /**
	     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
	     * which invokes `iteratee` for `value` and each element of `array` to compute
	     * their sort ranking. The iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The iteratee invoked per element.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function baseSortedIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);
	
	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;
	
	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;
	
	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }
	
	    /**
	     * The base implementation of `_.sortedUniq`.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     */
	    function baseSortedUniq(array) {
	      return baseSortedUniqBy(array);
	    }
	
	    /**
	     * The base implementation of `_.sortedUniqBy` without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */
	    function baseSortedUniqBy(array, iteratee) {
	      var index = 0,
	          length = array.length,
	          value = array[0],
	          computed = iteratee ? iteratee(value) : value,
	          seen = computed,
	          resIndex = 1,
	          result = [value];
	
	      while (++index < length) {
	        value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	        if (!eq(computed, seen)) {
	          seen = computed;
	          result[resIndex++] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */
	    function baseUniq(array, iteratee, comparator) {
	      var index = -1,
	          includes = arrayIncludes,
	          length = array.length,
	          isCommon = true,
	          result = [],
	          seen = result;
	
	      if (comparator) {
	        isCommon = false;
	        includes = arrayIncludesWith;
	      }
	      else if (length >= LARGE_ARRAY_SIZE) {
	        var set = iteratee ? null : createSet(array);
	        if (set) {
	          return setToArray(set);
	        }
	        isCommon = false;
	        includes = cacheHas;
	        seen = new SetCache;
	      }
	      else {
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;
	
	        if (isCommon && computed === computed) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (!includes(seen, computed, comparator)) {
	          if (seen !== result) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.unset`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     */
	    function baseUnset(object, path) {
	      path = isKey(path, object) ? [path] : baseCastPath(path);
	      object = parent(object, path);
	      var key = last(path);
	      return (object != null && has(object, key)) ? delete object[key] : true;
	    }
	
	    /**
	     * The base implementation of `_.update`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to update.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */
	    function baseUpdate(object, path, updater, customizer) {
	      return baseSet(object, path, updater(baseGet(object, path)), customizer);
	    }
	
	    /**
	     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
	     * without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;
	
	      while ((fromRight ? index-- : ++index < length) &&
	        predicate(array[index], index, array)) {}
	
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }
	
	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to perform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      return arrayReduce(actions, function(result, action) {
	        return action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }, result);
	    }
	
	    /**
	     * The base implementation of methods like `_.xor`, without support for
	     * iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of values.
	     */
	    function baseXor(arrays, iteratee, comparator) {
	      var index = -1,
	          length = arrays.length;
	
	      while (++index < length) {
	        var result = result
	          ? arrayPush(
	              baseDifference(result, arrays[index], iteratee, comparator),
	              baseDifference(arrays[index], result, iteratee, comparator)
	            )
	          : arrays[index];
	      }
	      return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
	    }
	
	    /**
	     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	     *
	     * @private
	     * @param {Array} props The property identifiers.
	     * @param {Array} values The property values.
	     * @param {Function} assignFunc The function to assign values.
	     * @returns {Object} Returns the new object.
	     */
	    function baseZipObject(props, values, assignFunc) {
	      var index = -1,
	          length = props.length,
	          valsLength = values.length,
	          result = {};
	
	      while (++index < length) {
	        var value = index < valsLength ? values[index] : undefined;
	        assignFunc(result, props[index], value);
	      }
	      return result;
	    }
	
	    /**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */
	    function cloneBuffer(buffer, isDeep) {
	      if (isDeep) {
	        return buffer.slice();
	      }
	      var result = new buffer.constructor(buffer.length);
	      buffer.copy(result);
	      return result;
	    }
	
	    /**
	     * Creates a clone of `arrayBuffer`.
	     *
	     * @private
	     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function cloneArrayBuffer(arrayBuffer) {
	      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	      return result;
	    }
	
	    /**
	     * Creates a clone of `dataView`.
	     *
	     * @private
	     * @param {Object} dataView The data view to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned data view.
	     */
	    function cloneDataView(dataView, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	    }
	
	    /**
	     * Creates a clone of `map`.
	     *
	     * @private
	     * @param {Object} map The map to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned map.
	     */
	    function cloneMap(map, isDeep, cloneFunc) {
	      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	      return arrayReduce(array, addMapEntry, new map.constructor);
	    }
	
	    /**
	     * Creates a clone of `regexp`.
	     *
	     * @private
	     * @param {Object} regexp The regexp to clone.
	     * @returns {Object} Returns the cloned regexp.
	     */
	    function cloneRegExp(regexp) {
	      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	      result.lastIndex = regexp.lastIndex;
	      return result;
	    }
	
	    /**
	     * Creates a clone of `set`.
	     *
	     * @private
	     * @param {Object} set The set to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned set.
	     */
	    function cloneSet(set, isDeep, cloneFunc) {
	      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	      return arrayReduce(array, addSetEntry, new set.constructor);
	    }
	
	    /**
	     * Creates a clone of the `symbol` object.
	     *
	     * @private
	     * @param {Object} symbol The symbol object to clone.
	     * @returns {Object} Returns the cloned symbol object.
	     */
	    function cloneSymbol(symbol) {
	      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	    }
	
	    /**
	     * Creates a clone of `typedArray`.
	     *
	     * @private
	     * @param {Object} typedArray The typed array to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned typed array.
	     */
	    function cloneTypedArray(typedArray, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	    }
	
	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders, isCurried) {
	      var argsIndex = -1,
	          argsLength = args.length,
	          holdersLength = holders.length,
	          leftIndex = -1,
	          leftLength = partials.length,
	          rangeLength = nativeMax(argsLength - holdersLength, 0),
	          result = Array(leftLength + rangeLength),
	          isUncurried = !isCurried;
	
	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        if (isUncurried || argsIndex < argsLength) {
	          result[holders[argsIndex]] = args[argsIndex];
	        }
	      }
	      while (rangeLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }
	
	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders, isCurried) {
	      var argsIndex = -1,
	          argsLength = args.length,
	          holdersIndex = -1,
	          holdersLength = holders.length,
	          rightIndex = -1,
	          rightLength = partials.length,
	          rangeLength = nativeMax(argsLength - holdersLength, 0),
	          result = Array(rangeLength + rightLength),
	          isUncurried = !isCurried;
	
	      while (++argsIndex < rangeLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        if (isUncurried || argsIndex < argsLength) {
	          result[offset + holders[holdersIndex]] = args[argsIndex++];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function copyArray(source, array) {
	      var index = -1,
	          length = source.length;
	
	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }
	
	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function copyObject(source, props, object) {
	      return copyObjectWith(source, props, object);
	    }
	
	    /**
	     * This function is like `copyObject` except that it accepts a function to
	     * customize copied values.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @param {Function} [customizer] The function to customize copied values.
	     * @returns {Object} Returns `object`.
	     */
	    function copyObjectWith(source, props, object, customizer) {
	      object || (object = {});
	
	      var index = -1,
	          length = props.length;
	
	      while (++index < length) {
	        var key = props[index];
	
	        var newValue = customizer
	          ? customizer(object[key], source[key], key, object, source)
	          : source[key];
	
	        assignValue(object, key, newValue);
	      }
	      return object;
	    }
	
	    /**
	     * Copies own symbol properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */
	    function copySymbols(source, object) {
	      return copyObject(source, getSymbols(source), object);
	    }
	
	    /**
	     * Creates a function like `_.groupBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} [initializer] The accumulator object initializer.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee) {
	        var func = isArray(collection) ? arrayAggregator : baseAggregator,
	            accumulator = initializer ? initializer() : {};
	
	        return func(collection, setter, getIteratee(iteratee), accumulator);
	      };
	    }
	
	    /**
	     * Creates a function like `_.assign`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return rest(function(object, sources) {
	        var index = -1,
	            length = sources.length,
	            customizer = length > 1 ? sources[length - 1] : undefined,
	            guard = length > 2 ? sources[2] : undefined;
	
	        customizer = typeof customizer == 'function'
	          ? (length--, customizer)
	          : undefined;
	
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        object = Object(object);
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, index, customizer);
	          }
	        }
	        return object;
	      });
	    }
	
	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        if (collection == null) {
	          return collection;
	        }
	        if (!isArrayLike(collection)) {
	          return eachFunc(collection, iteratee);
	        }
	        var length = collection.length,
	            index = fromRight ? length : -1,
	            iterable = Object(collection);
	
	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }
	
	    /**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var index = -1,
	            iterable = Object(object),
	            props = keysFunc(object),
	            length = props.length;
	
	        while (length--) {
	          var key = props[fromRight ? length : ++index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` to invoke it with the optional `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper`
	     *  for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createBaseWrapper(func, bitmask, thisArg) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);
	
	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, arguments);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a function like `_.lowerFirst`.
	     *
	     * @private
	     * @param {string} methodName The name of the `String` case method to use.
	     * @returns {Function} Returns the new function.
	     */
	    function createCaseFirst(methodName) {
	      return function(string) {
	        string = toString(string);
	
	        var strSymbols = reHasComplexSymbol.test(string)
	          ? stringToArray(string)
	          : undefined;
	
	        var chr = strSymbols ? strSymbols[0] : string.charAt(0),
	            trailing = strSymbols ? strSymbols.slice(1).join('') : string.slice(1);
	
	        return chr[methodName]() + trailing;
	      };
	    }
	
	    /**
	     * Creates a function like `_.camelCase`.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        return arrayReduce(words(deburr(string)), callback, '');
	      };
	    }
	
	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);
	
	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` to enable currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper`
	     *  for more details.
	     * @param {number} arity The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCurryWrapper(func, bitmask, arity) {
	      var Ctor = createCtorWrapper(func);
	
	      function wrapper() {
	        var length = arguments.length,
	            args = Array(length),
	            index = length,
	            placeholder = getPlaceholder(wrapper);
	
	        while (index--) {
	          args[index] = arguments[index];
	        }
	        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	          ? []
	          : replaceHolders(args, placeholder);
	
	        length -= holders.length;
	        if (length < arity) {
	          return createRecurryWrapper(
	            func, bitmask, createHybridWrapper, wrapper.placeholder, undefined,
	            args, holders, undefined, undefined, arity - length);
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return apply(fn, this, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return rest(function(funcs) {
	        funcs = baseFlatten(funcs, 1);
	
	        var length = funcs.length,
	            index = length,
	            prereq = LodashWrapper.prototype.thru;
	
	        if (fromRight) {
	          funcs.reverse();
	        }
	        while (index--) {
	          var func = funcs[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
	            var wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? index : length;
	        while (++index < length) {
	          func = funcs[index];
	
	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;
	
	          if (data && isLaziable(data[0]) &&
	                data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) &&
	                !data[4].length && data[9] == 1
	              ) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func))
	              ? wrapper[funcName]()
	              : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];
	
	          if (wrapper && args.length == 1 &&
	              isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;
	
	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      });
	    }
	
	    /**
	     * Creates a function that wraps `func` to invoke it with optional `this`
	     * binding of `thisArg`, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper`
	     *  for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided
	     *  to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
	          isFlip = bitmask & FLIP_FLAG,
	          Ctor = isBindKey ? undefined : createCtorWrapper(func);
	
	      function wrapper() {
	        var length = arguments.length,
	            index = length,
	            args = Array(length);
	
	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (isCurried) {
	          var placeholder = getPlaceholder(wrapper),
	              holdersCount = countHolders(args, placeholder);
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders, isCurried);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	        }
	        length -= holdersCount;
	        if (isCurried && length < arity) {
	          var newHolders = replaceHolders(args, placeholder);
	          return createRecurryWrapper(
	            func, bitmask, createHybridWrapper, wrapper.placeholder, thisArg,
	            args, newHolders, argPos, ary, arity - length
	          );
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;
	
	        length = args.length;
	        if (argPos) {
	          args = reorder(args, argPos);
	        } else if (isFlip && length > 1) {
	          args.reverse();
	        }
	        if (isAry && ary < length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(fn);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a function like `_.invertBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} toIteratee The function to resolve iteratees.
	     * @returns {Function} Returns the new inverter function.
	     */
	    function createInverter(setter, toIteratee) {
	      return function(object, iteratee) {
	        return baseInverter(object, setter, toIteratee(iteratee), {});
	      };
	    }
	
	    /**
	     * Creates a function like `_.over`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over iteratees.
	     * @returns {Function} Returns the new invoker function.
	     */
	    function createOver(arrayFunc) {
	      return rest(function(iteratees) {
	        iteratees = arrayMap(baseFlatten(iteratees, 1), getIteratee());
	        return rest(function(args) {
	          var thisArg = this;
	          return arrayFunc(iteratees, function(iteratee) {
	            return apply(iteratee, thisArg, args);
	          });
	        });
	      });
	    }
	
	    /**
	     * Creates the padding for `string` based on `length`. The `chars` string
	     * is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {number} length The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padding for `string`.
	     */
	    function createPadding(length, chars) {
	      chars = chars === undefined ? ' ' : (chars + '');
	
	      var charsLength = chars.length;
	      if (charsLength < 2) {
	        return charsLength ? baseRepeat(chars, length) : chars;
	      }
	      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
	      return reHasComplexSymbol.test(chars)
	        ? stringToArray(result).slice(0, length).join('')
	        : result.slice(0, length);
	    }
	
	    /**
	     * Creates a function that wraps `func` to invoke it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper`
	     *  for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to
	     *  the new function.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);
	
	      function wrapper() {
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength),
	            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	
	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        return apply(fn, isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a `_.range` or `_.rangeRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new range function.
	     */
	    function createRange(fromRight) {
	      return function(start, end, step) {
	        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	          end = step = undefined;
	        }
	        // Ensure the sign of `-0` is preserved.
	        start = toNumber(start);
	        start = start === start ? start : 0;
	        if (end === undefined) {
	          end = start;
	          start = 0;
	        } else {
	          end = toNumber(end) || 0;
	        }
	        step = step === undefined ? (start < end ? 1 : -1) : (toNumber(step) || 0);
	        return baseRange(start, end, step, fromRight);
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` to continue currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper`
	     *  for more details.
	     * @param {Function} wrapFunc The function to create the `func` wrapper.
	     * @param {*} placeholder The placeholder value.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createRecurryWrapper(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	      var isCurry = bitmask & CURRY_FLAG,
	          newArgPos = argPos ? copyArray(argPos) : undefined,
	          newHolders = isCurry ? holders : undefined,
	          newHoldersRight = isCurry ? undefined : holders,
	          newPartials = isCurry ? partials : undefined,
	          newPartialsRight = isCurry ? undefined : partials;
	
	      bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	      bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
	
	      if (!(bitmask & CURRY_BOUND_FLAG)) {
	        bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	      }
	      var newData = [
	        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	        newHoldersRight, newArgPos, ary, arity
	      ];
	
	      var result = wrapFunc.apply(undefined, newData);
	      if (isLaziable(func)) {
	        setData(result, newData);
	      }
	      result.placeholder = placeholder;
	      return result;
	    }
	
	    /**
	     * Creates a function like `_.round`.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        number = toNumber(number);
	        precision = toInteger(precision);
	        if (precision) {
	          // Shift with exponential notation to avoid floating-point issues.
	          // See [MDN](https://mdn.io/round#Examples) for more details.
	          var pair = (toString(number) + 'e').split('e'),
	              value = func(pair[0] + 'e' + (+pair[1] + precision));
	
	          pair = (toString(value) + 'e').split('e');
	          return +(pair[0] + 'e' + (+pair[1] - precision));
	        }
	        return func(number);
	      };
	    }
	
	    /**
	     * Creates a set of `values`.
	     *
	     * @private
	     * @param {Array} values The values to add to the set.
	     * @returns {Object} Returns the new set.
	     */
	    var createSet = !(Set && new Set([1, 2]).size === 2) ? noop : function(values) {
	      return new Set(values);
	    };
	
	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask of wrapper flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	      arity = arity === undefined ? arity : toInteger(arity);
	      length -= holders ? holders.length : 0;
	
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;
	
	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func);
	
	      var newData = [
	        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	        argPos, ary, arity
	      ];
	
	      if (data) {
	        mergeData(newData, data);
	      }
	      func = newData[0];
	      bitmask = newData[1];
	      thisArg = newData[2];
	      partials = newData[3];
	      holders = newData[4];
	      arity = newData[9] = newData[9] == null
	        ? (isBindKey ? 0 : func.length)
	        : nativeMax(newData[9] - length, 0);
	
	      if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
	        bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
	      }
	      if (!bitmask || bitmask == BIND_FLAG) {
	        var result = createBaseWrapper(func, bitmask, thisArg);
	      } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
	        result = createCurryWrapper(func, bitmask, arity);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
	        result = createPartialWrapper(func, bitmask, thisArg, partials);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `array` and `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	      var index = -1,
	          isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	          isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
	          arrLength = array.length,
	          othLength = other.length;
	
	      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(array);
	      if (stacked) {
	        return stacked == other;
	      }
	      var result = true;
	      stack.set(array, other);
	
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index];
	
	        if (customizer) {
	          var compared = isPartial
	            ? customizer(othValue, arrValue, index, other, array, stack)
	            : customizer(arrValue, othValue, index, array, other, stack);
	        }
	        if (compared !== undefined) {
	          if (compared) {
	            continue;
	          }
	          result = false;
	          break;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isUnordered) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue ||
	                  equalFunc(arrValue, othValue, customizer, bitmask, stack);
	              })) {
	            result = false;
	            break;
	          }
	        } else if (!(
	              arrValue === othValue ||
	                equalFunc(arrValue, othValue, customizer, bitmask, stack)
	            )) {
	          result = false;
	          break;
	        }
	      }
	      stack['delete'](array);
	      return result;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	      switch (tag) {
	        case dataViewTag:
	          if ((object.byteLength != other.byteLength) ||
	              (object.byteOffset != other.byteOffset)) {
	            return false;
	          }
	          object = object.buffer;
	          other = other.buffer;
	
	        case arrayBufferTag:
	          if ((object.byteLength != other.byteLength) ||
	              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	            return false;
	          }
	          return true;
	
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and
	          // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	          // not equal.
	          return +object == +other;
	
	        case errorTag:
	          return object.name == other.name && object.message == other.message;
	
	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object) ? other != +other : object == +other;
	
	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings, primitives and objects,
	          // as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	
	        case mapTag:
	          var convert = mapToArray;
	
	        case setTag:
	          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	          convert || (convert = setToArray);
	
	          if (object.size != other.size && !isPartial) {
	            return false;
	          }
	          // Assume cyclic values are equal.
	          var stacked = stack.get(object);
	          if (stacked) {
	            return stacked == other;
	          }
	          bitmask |= UNORDERED_COMPARE_FLAG;
	          stack.set(object, other);
	
	          // Recursively compare objects (susceptible to call stack limits).
	          return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	
	        case symbolTag:
	          if (symbolValueOf) {
	            return symbolValueOf.call(object) == symbolValueOf.call(other);
	          }
	      }
	      return false;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	          objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;
	
	      if (objLength != othLength && !isPartial) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isPartial ? key in other : baseHas(other, key))) {
	          return false;
	        }
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      var result = true;
	      stack.set(object, other);
	
	      var skipCtor = isPartial;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key];
	
	        if (customizer) {
	          var compared = isPartial
	            ? customizer(othValue, objValue, key, other, object, stack)
	            : customizer(objValue, othValue, key, object, other, stack);
	        }
	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(compared === undefined
	              ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	              : compared
	            )) {
	          result = false;
	          break;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (result && !skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;
	
	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          result = false;
	        }
	      }
	      stack['delete'](object);
	      return result;
	    }
	
	    /**
	     * Creates an array of own enumerable property names and symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function getAllKeys(object) {
	      return baseGetAllKeys(object, keys, getSymbols);
	    }
	
	    /**
	     * Creates an array of own and inherited enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function getAllKeysIn(object) {
	      return baseGetAllKeys(object, keysIn, getSymbolsIn);
	    }
	
	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };
	
	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = (func.name + ''),
	          array = realNames[result],
	          length = hasOwnProperty.call(realNames, result) ? array.length : 0;
	
	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Gets the appropriate "iteratee" function. If the `_.iteratee` method is
	     * customized this function returns the custom method, otherwise it returns
	     * `baseIteratee`. If arguments are provided the chosen function is invoked
	     * with them and its result is returned.
	     *
	     * @private
	     * @param {*} [value] The value to convert to an iteratee.
	     * @param {number} [arity] The arity of the created iteratee.
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getIteratee() {
	      var result = lodash.iteratee || iteratee;
	      result = result === iteratee ? baseIteratee : result;
	      return arguments.length ? result(arguments[0], arguments[1]) : result;
	    }
	
	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a
	     * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	     * Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');
	
	    /**
	     * Gets the property names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = toPairs(object),
	          length = result.length;
	
	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }
	
	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object[key];
	      return isNative(value) ? value : undefined;
	    }
	
	    /**
	     * Gets the argument placeholder value for `func`.
	     *
	     * @private
	     * @param {Function} func The function to inspect.
	     * @returns {*} Returns the placeholder value.
	     */
	    function getPlaceholder(func) {
	      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
	      return object.placeholder;
	    }
	
	    /**
	     * Gets the `[[Prototype]]` of `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {null|Object} Returns the `[[Prototype]]`.
	     */
	    function getPrototype(value) {
	      return nativeGetPrototype(Object(value));
	    }
	
	    /**
	     * Creates an array of the own enumerable symbol properties of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */
	    function getSymbols(object) {
	      // Coerce `object` to an object to avoid non-object errors in V8.
	      // See https://bugs.chromium.org/p/v8/issues/detail?id=3443 for more details.
	      return getOwnPropertySymbols(Object(object));
	    }
	
	    // Fallback for IE < 11.
	    if (!getOwnPropertySymbols) {
	      getSymbols = function() {
	        return [];
	      };
	    }
	
	    /**
	     * Creates an array of the own and inherited enumerable symbol properties
	     * of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */
	    var getSymbolsIn = !getOwnPropertySymbols ? getSymbols : function(object) {
	      var result = [];
	      while (object) {
	        arrayPush(result, getSymbols(object));
	        object = getPrototype(object);
	      }
	      return result;
	    };
	
	    /**
	     * Gets the `toStringTag` of `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */
	    function getTag(value) {
	      return objectToString.call(value);
	    }
	
	    // Fallback for data views, maps, sets, and weak maps in IE 11,
	    // for data views in Edge, and promises in Node.js.
	    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	        (Map && getTag(new Map) != mapTag) ||
	        (Promise && getTag(Promise.resolve()) != promiseTag) ||
	        (Set && getTag(new Set) != setTag) ||
	        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	      getTag = function(value) {
	        var result = objectToString.call(value),
	            Ctor = result == objectTag ? value.constructor : null,
	            ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';
	
	        if (ctorString) {
	          switch (ctorString) {
	            case dataViewCtorString: return dataViewTag;
	            case mapCtorString: return mapTag;
	            case promiseCtorString: return promiseTag;
	            case setCtorString: return setTag;
	            case weakMapCtorString: return weakMapTag;
	          }
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;
	
	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;
	
	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }
	
	    /**
	     * Checks if `path` exists on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @param {Function} hasFunc The function to check properties.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     */
	    function hasPath(object, path, hasFunc) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasFunc(object, path);
	      if (!result && !isKey(path)) {
	        path = baseCastPath(path);
	
	        var index = -1,
	            length = path.length;
	
	        while (object != null && ++index < length) {
	          var key = path[index];
	          if (!(result = hasFunc(object, key))) {
	            break;
	          }
	          object = object[key];
	        }
	      }
	      var length = object ? object.length : undefined;
	      return result || (
	        !!length && isLength(length) && isIndex(path, length) &&
	        (isArray(object) || isString(object) || isArguments(object))
	      );
	    }
	
	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = array.constructor(length);
	
	      // Add properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }
	
	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      return (typeof object.constructor == 'function' && !isPrototype(object))
	        ? baseCreate(getPrototype(object))
	        : {};
	    }
	
	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, cloneFunc, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return cloneArrayBuffer(object);
	
	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);
	
	        case dataViewTag:
	          return cloneDataView(object, isDeep);
	
	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          return cloneTypedArray(object, isDeep);
	
	        case mapTag:
	          return cloneMap(object, isDeep, cloneFunc);
	
	        case numberTag:
	        case stringTag:
	          return new Ctor(object);
	
	        case regexpTag:
	          return cloneRegExp(object);
	
	        case setTag:
	          return cloneSet(object, isDeep, cloneFunc);
	
	        case symbolTag:
	          return cloneSymbol(object);
	      }
	    }
	
	    /**
	     * Creates an array of index keys for `object` values of arrays,
	     * `arguments` objects, and strings, otherwise `null` is returned.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array|null} Returns index keys, else `null`.
	     */
	    function indexKeys(object) {
	      var length = object ? object.length : undefined;
	      if (isLength(length) &&
	          (isArray(object) || isString(object) || isArguments(object))) {
	        return baseTimes(length, String);
	      }
	      return null;
	    }
	
	    /**
	     * Checks if the given arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	     *  else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	            ? (isArrayLike(object) && isIndex(index, object.length))
	            : (type == 'string' && index in object)
	          ) {
	        return eq(object[index], value);
	      }
	      return false;
	    }
	
	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if (type == 'number' || type == 'symbol') {
	        return true;
	      }
	      return !isArray(value) &&
	        (isSymbol(value) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	          (object != null && value in Object(object)));
	    }
	
	    /**
	     * Checks if `value` is suitable for use as unique object key.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	     */
	    function isKeyable(value) {
	      var type = typeof value;
	      return type == 'number' || type == 'boolean' ||
	        (type == 'string' && value != '__proto__') || value == null;
	    }
	
	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	     *  else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func),
	          other = lodash[funcName];
	
	      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }
	
	    /**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */
	    function isPrototype(value) {
	      var Ctor = value && value.constructor,
	          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	      return value === proto;
	    }
	
	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }
	
	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers used to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and
	     * `_.rearg` modify function arguments, making the order in which they are
	     * executed important, preventing the merging of metadata. However, we make
	     * an exception for a safe combined case where curried functions have `_.ary`
	     * and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);
	
	      var isCombo =
	        ((srcBitmask == ARY_FLAG) && (bitmask == CURRY_FLAG)) ||
	        ((srcBitmask == ARY_FLAG) && (bitmask == REARG_FLAG) && (data[7].length <= source[8])) ||
	        ((srcBitmask == (ARY_FLAG | REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG));
	
	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : copyArray(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : copyArray(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : copyArray(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : copyArray(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = copyArray(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;
	
	      return data;
	    }
	
	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to merge.
	     * @param {Object} object The parent object of `objValue`.
	     * @param {Object} source The parent object of `srcValue`.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     * @returns {*} Returns the value to assign.
	     */
	    function mergeDefaults(objValue, srcValue, key, object, source, stack) {
	      if (isObject(objValue) && isObject(srcValue)) {
	        baseMerge(objValue, srcValue, undefined, mergeDefaults, stack.set(srcValue, objValue));
	      }
	      return objValue;
	    }
	
	    /**
	     * Gets the parent value at `path` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path to get the parent value of.
	     * @returns {*} Returns the parent value.
	     */
	    function parent(object, path) {
	      return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	    }
	
	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = copyArray(array);
	
	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }
	
	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity
	     * function to avoid garbage collection pauses in V8. See
	     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;
	
	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);
	
	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());
	
	    /**
	     * Converts `string` to a property path array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the property path array.
	     */
	    var stringToPath = memoize(function(string) {
	      var result = [];
	      toString(string).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    });
	
	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      if (wrapper instanceof LazyWrapper) {
	        return wrapper.clone();
	      }
	      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	      result.__actions__ = copyArray(wrapper.__actions__);
	      result.__index__  = wrapper.__index__;
	      result.__values__ = wrapper.__values__;
	      return result;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `array` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=0] The length of each chunk.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size) {
	      size = nativeMax(toInteger(size), 0);
	
	      var length = array ? array.length : 0;
	      if (!length || size < 1) {
	        return [];
	      }
	      var index = 0,
	          resIndex = 0,
	          result = Array(nativeCeil(length / size));
	
	      while (index < length) {
	        result[resIndex++] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = 0,
	          result = [];
	
	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[resIndex++] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Creates a new array concatenating `array` with any additional arrays
	     * and/or values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to concatenate.
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var other = _.concat(array, 2, [3], [[4]]);
	     *
	     * console.log(other);
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    function concat() {
	      var length = arguments.length,
	          array = castArray(arguments[0]);
	
	      if (length < 2) {
	        return length ? copyArray(array) : [];
	      }
	      var args = Array(length - 1);
	      while (length--) {
	        args[length - 1] = arguments[length];
	      }
	      return arrayConcat(array, baseFlatten(args, 1));
	    }
	
	    /**
	     * Creates an array of unique `array` values not included in the other given
	     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. The order of result values is determined by the
	     * order they occur in the first array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([3, 2, 1], [4, 2]);
	     * // => [3, 1]
	     */
	    var difference = rest(function(array, values) {
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, true))
	        : [];
	    });
	
	    /**
	     * This method is like `_.difference` except that it accepts `iteratee` which
	     * is invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. Result values are chosen from the first array.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
	     * // => [3.1, 1.3]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */
	    var differenceBy = rest(function(array, values) {
	      var iteratee = last(values);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, true), getIteratee(iteratee))
	        : [];
	    });
	
	    /**
	     * This method is like `_.difference` except that it accepts `comparator`
	     * which is invoked to compare elements of `array` to `values`. Result values
	     * are chosen from the first array. The comparator is invoked with two arguments:
	     * (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     *
	     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }]
	     */
	    var differenceWith = rest(function(array, values) {
	      var comparator = last(values);
	      if (isArrayLikeObject(comparator)) {
	        comparator = undefined;
	      }
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, true), undefined, comparator)
	        : [];
	    });
	
	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      return baseSlice(array, n < 0 ? 0 : n, length);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      n = length - n;
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.dropRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropRightWhile(users, ['active', false]);
	     * // => objects for ['barney']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropRightWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), true, true)
	        : [];
	    }
	
	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.dropWhile(users, function(o) { return !o.active; });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropWhile(users, ['active', false]);
	     * // => objects for ['pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), true)
	        : [];
	    }
	
	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8, 10], '*', 1, 3);
	     * // => [4, '*', '*', 10]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }
	
	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(o) { return o.user == 'barney'; });
	     * // => 0
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findIndex(users, ['active', false]);
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    function findIndex(array, predicate) {
	      return (array && array.length)
	        ? baseFindIndex(array, getIteratee(predicate, 3))
	        : -1;
	    }
	
	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
	     * // => 2
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastIndex(users, ['active', false]);
	     * // => 2
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    function findLastIndex(array, predicate) {
	      return (array && array.length)
	        ? baseFindIndex(array, getIteratee(predicate, 3), true)
	        : -1;
	    }
	
	    /**
	     * Flattens `array` a single level deep.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, [3, [4]], 5]
	     */
	    function flatten(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, 1) : [];
	    }
	
	    /**
	     * Recursively flattens `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, 3, 4, 5]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, INFINITY) : [];
	    }
	
	    /**
	     * Recursively flatten `array` up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * var array = [1, [2, [3, [4]], 5]];
	     *
	     * _.flattenDepth(array, 1);
	     * // => [1, 2, [3, [4]], 5]
	     *
	     * _.flattenDepth(array, 2);
	     * // => [1, 2, 3, [4], 5]
	     */
	    function flattenDepth(array, depth) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      depth = depth === undefined ? 1 : toInteger(depth);
	      return baseFlatten(array, depth);
	    }
	
	    /**
	     * The inverse of `_.toPairs`; this method returns an object composed
	     * from key-value `pairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} pairs The key-value pairs.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.fromPairs([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function fromPairs(pairs) {
	      var index = -1,
	          length = pairs ? pairs.length : 0,
	          result = {};
	
	      while (++index < length) {
	        var pair = pairs[index];
	        result[pair[0]] = pair[1];
	      }
	      return result;
	    }
	
	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias first
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.head([1, 2, 3]);
	     * // => 1
	     *
	     * _.head([]);
	     * // => undefined
	     */
	    function head(array) {
	      return array ? array[0] : undefined;
	    }
	
	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the offset
	     * from the end of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // Search from the `fromIndex`.
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      fromIndex = toInteger(fromIndex);
	      if (fromIndex < 0) {
	        fromIndex = nativeMax(length + fromIndex, 0);
	      }
	      return baseIndexOf(array, value, fromIndex);
	    }
	
	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }
	
	    /**
	     * Creates an array of unique values that are included in all given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. The order of result values is determined by the
	     * order they occur in the first array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersection([2, 1], [4, 2], [1, 2]);
	     * // => [2]
	     */
	    var intersection = rest(function(arrays) {
	      var mapped = arrayMap(arrays, baseCastArrayLikeObject);
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped)
	        : [];
	    });
	
	    /**
	     * This method is like `_.intersection` except that it accepts `iteratee`
	     * which is invoked for each element of each `arrays` to generate the criterion
	     * by which they're compared. Result values are chosen from the first array.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
	     * // => [2.1]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }]
	     */
	    var intersectionBy = rest(function(arrays) {
	      var iteratee = last(arrays),
	          mapped = arrayMap(arrays, baseCastArrayLikeObject);
	
	      if (iteratee === last(mapped)) {
	        iteratee = undefined;
	      } else {
	        mapped.pop();
	      }
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped, getIteratee(iteratee))
	        : [];
	    });
	
	    /**
	     * This method is like `_.intersection` except that it accepts `comparator`
	     * which is invoked to compare elements of `arrays`. Result values are chosen
	     * from the first array. The comparator is invoked with two arguments:
	     * (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.intersectionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }]
	     */
	    var intersectionWith = rest(function(arrays) {
	      var comparator = last(arrays),
	          mapped = arrayMap(arrays, baseCastArrayLikeObject);
	
	      if (comparator === last(mapped)) {
	        comparator = undefined;
	      } else {
	        mapped.pop();
	      }
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped, undefined, comparator)
	        : [];
	    });
	
	    /**
	     * Converts all elements in `array` into a string separated by `separator`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to convert.
	     * @param {string} [separator=','] The element separator.
	     * @returns {string} Returns the joined string.
	     * @example
	     *
	     * _.join(['a', 'b', 'c'], '~');
	     * // => 'a~b~c'
	     */
	    function join(array, separator) {
	      return array ? nativeJoin.call(array, separator) : '';
	    }
	
	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }
	
	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // Search from the `fromIndex`.
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (fromIndex !== undefined) {
	        index = toInteger(fromIndex);
	        index = (
	          index < 0
	            ? nativeMax(length + index, 0)
	            : nativeMin(index, length - 1)
	        ) + 1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }
	
	    /**
	     * Removes all given values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	     * to remove elements from an array by predicate.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    var pull = rest(pullAll);
	
	    /**
	     * This method is like `_.pull` except that it accepts an array of values to remove.
	     *
	     * **Note:** Unlike `_.difference`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pullAll(array, [2, 3]);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pullAll(array, values) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values)
	        : array;
	    }
	
	    /**
	     * This method is like `_.pullAll` except that it accepts `iteratee` which is
	     * invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
	     *
	     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
	     * console.log(array);
	     * // => [{ 'x': 2 }]
	     */
	    function pullAllBy(array, values, iteratee) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values, getIteratee(iteratee))
	        : array;
	    }
	
	    /**
	     * This method is like `_.pullAll` except that it accepts `comparator` which
	     * is invoked to compare elements of `array` to `values`. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
	     *
	     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
	     * console.log(array);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
	     */
	    function pullAllWith(array, values, comparator) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values, undefined, comparator)
	        : array;
	    }
	
	    /**
	     * Removes elements from `array` corresponding to `indexes` and returns an
	     * array of removed elements.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified individually or in arrays.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = rest(function(array, indexes) {
	      indexes = arrayMap(baseFlatten(indexes, 1), String);
	
	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(compareAscending));
	      return result;
	    });
	
	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is invoked
	     * with three arguments: (value, index, array).
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	     * to pull elements from an array by value.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;
	
	      predicate = getIteratee(predicate, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }
	
	    /**
	     * Reverses `array` so that the first element becomes the last, the second
	     * element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates `array` and is based on
	     * [`Array#reverse`](https://mdn.io/Array/reverse).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.reverse(array);
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function reverse(array) {
	      return array ? nativeReverse.call(array) : array;
	    }
	
	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of
	     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	     * returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      else {
	        start = start == null ? 0 : toInteger(start);
	        end = end === undefined ? length : toInteger(end);
	      }
	      return baseSlice(array, start, end);
	    }
	
	    /**
	     * Uses a binary search to determine the lowest index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 5], 4);
	     * // => 0
	     */
	    function sortedIndex(array, value) {
	      return baseSortedIndex(array, value);
	    }
	
	    /**
	     * This method is like `_.sortedIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
	     *
	     * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
	     * // => 1
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
	     * // => 0
	     */
	    function sortedIndexBy(array, value, iteratee) {
	      return baseSortedIndexBy(array, value, getIteratee(iteratee));
	    }
	
	    /**
	     * This method is like `_.indexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedIndexOf([1, 1, 2, 2], 2);
	     * // => 2
	     */
	    function sortedIndexOf(array, value) {
	      var length = array ? array.length : 0;
	      if (length) {
	        var index = baseSortedIndex(array, value);
	        if (index < length && eq(array[index], value)) {
	          return index;
	        }
	      }
	      return -1;
	    }
	
	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 5], 4);
	     * // => 1
	     */
	    function sortedLastIndex(array, value) {
	      return baseSortedIndex(array, value, true);
	    }
	
	    /**
	     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
	     * // => 1
	     */
	    function sortedLastIndexBy(array, value, iteratee) {
	      return baseSortedIndexBy(array, value, getIteratee(iteratee), true);
	    }
	
	    /**
	     * This method is like `_.lastIndexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedLastIndexOf([1, 1, 2, 2], 2);
	     * // => 3
	     */
	    function sortedLastIndexOf(array, value) {
	      var length = array ? array.length : 0;
	      if (length) {
	        var index = baseSortedIndex(array, value, true) - 1;
	        if (eq(array[index], value)) {
	          return index;
	        }
	      }
	      return -1;
	    }
	
	    /**
	     * This method is like `_.uniq` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniq([1, 1, 2]);
	     * // => [1, 2]
	     */
	    function sortedUniq(array) {
	      return (array && array.length)
	        ? baseSortedUniq(array)
	        : [];
	    }
	
	    /**
	     * This method is like `_.uniqBy` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
	     * // => [1.1, 2.3]
	     */
	    function sortedUniqBy(array, iteratee) {
	      return (array && array.length)
	        ? baseSortedUniqBy(array, getIteratee(iteratee))
	        : [];
	    }
	
	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.tail([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function tail(array) {
	      return drop(array, 1);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      n = length - n;
	      return baseSlice(array, n < 0 ? 0 : n, length);
	    }
	
	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.takeRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeRightWhile(users, ['active', false]);
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeRightWhile(users, 'active');
	     * // => []
	     */
	    function takeRightWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), false, true)
	        : [];
	    }
	
	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.takeWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeWhile(users, ['active', false]);
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeWhile(users, 'active');
	     * // => []
	     */
	    function takeWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3))
	        : [];
	    }
	
	    /**
	     * Creates an array of unique values, in order, from all given arrays using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([2, 1], [4, 2], [1, 2]);
	     * // => [2, 1, 4]
	     */
	    var union = rest(function(arrays) {
	      return baseUniq(baseFlatten(arrays, 1, true));
	    });
	
	    /**
	     * This method is like `_.union` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which uniqueness is computed. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.unionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
	     * // => [2.1, 1.2, 4.3]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    var unionBy = rest(function(arrays) {
	      var iteratee = last(arrays);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return baseUniq(baseFlatten(arrays, 1, true), getIteratee(iteratee));
	    });
	
	    /**
	     * This method is like `_.union` except that it accepts `comparator` which
	     * is invoked to compare elements of `arrays`. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.unionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */
	    var unionWith = rest(function(arrays) {
	      var comparator = last(arrays);
	      if (isArrayLikeObject(comparator)) {
	        comparator = undefined;
	      }
	      return baseUniq(baseFlatten(arrays, 1, true), undefined, comparator);
	    });
	
	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurrence of each
	     * element is kept.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     */
	    function uniq(array) {
	      return (array && array.length)
	        ? baseUniq(array)
	        : [];
	    }
	
	    /**
	     * This method is like `_.uniq` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * uniqueness is computed. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniqBy(array, iteratee) {
	      return (array && array.length)
	        ? baseUniq(array, getIteratee(iteratee))
	        : [];
	    }
	
	    /**
	     * This method is like `_.uniq` except that it accepts `comparator` which
	     * is invoked to compare elements of `array`. The comparator is invoked with
	     * two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];
	     *
	     * _.uniqWith(objects, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
	     */
	    function uniqWith(array, comparator) {
	      return (array && array.length)
	        ? baseUniq(array, undefined, comparator)
	        : [];
	    }
	
	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.2.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var length = 0;
	      array = arrayFilter(array, function(group) {
	        if (isArrayLikeObject(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      return baseTimes(length, function(index) {
	        return arrayMap(array, baseProperty(index));
	      });
	    }
	
	    /**
	     * This method is like `_.unzip` except that it accepts `iteratee` to specify
	     * how regrouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  regrouped values.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      return arrayMap(result, function(group) {
	        return apply(iteratee, undefined, group);
	      });
	    }
	
	    /**
	     * Creates an array excluding all given values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = rest(function(array, values) {
	      return isArrayLikeObject(array)
	        ? baseDifference(array, values)
	        : [];
	    });
	
	    /**
	     * Creates an array of unique values that is the
	     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the given arrays. The order of result values is determined by the order
	     * they occur in the arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([2, 1], [4, 2]);
	     * // => [1, 4]
	     */
	    var xor = rest(function(arrays) {
	      return baseXor(arrayFilter(arrays, isArrayLikeObject));
	    });
	
	    /**
	     * This method is like `_.xor` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which by which they're compared. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
	     * // => [1.2, 4.3]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */
	    var xorBy = rest(function(arrays) {
	      var iteratee = last(arrays);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee));
	    });
	
	    /**
	     * This method is like `_.xor` except that it accepts `comparator` which is
	     * invoked to compare elements of `arrays`. The comparator is invoked with
	     * two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.xorWith(objects, others, _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */
	    var xorWith = rest(function(arrays) {
	      var comparator = last(arrays);
	      if (isArrayLikeObject(comparator)) {
	        comparator = undefined;
	      }
	      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
	    });
	
	    /**
	     * Creates an array of grouped elements, the first of which contains the
	     * first elements of the given arrays, the second of which contains the
	     * second elements of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = rest(unzip);
	
	    /**
	     * This method is like `_.fromPairs` except that it accepts two arrays,
	     * one of property identifiers and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.4.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject(['a', 'b'], [1, 2]);
	     * // => { 'a': 1, 'b': 2 }
	     */
	    function zipObject(props, values) {
	      return baseZipObject(props || [], values || [], assignValue);
	    }
	
	    /**
	     * This method is like `_.zipObject` except that it supports property paths.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
	     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
	     */
	    function zipObjectDeep(props, values) {
	      return baseZipObject(props || [], values || [], baseSet);
	    }
	
	    /**
	     * This method is like `_.zip` except that it accepts `iteratee` to specify
	     * how grouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee=_.identity] The function to combine grouped values.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
	     *   return a + b + c;
	     * });
	     * // => [111, 222]
	     */
	    var zipWith = rest(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 1 ? arrays[length - 1] : undefined;
	
	      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
	      return unzipWith(arrays, iteratee);
	    });
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
	     * chain sequences enabled. The result of such sequences must be unwrapped
	     * with `_#value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Seq
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _
	     *   .chain(users)
	     *   .sortBy('age')
	     *   .map(function(o) {
	     *     return o.user + ' is ' + o.age;
	     *   })
	     *   .head()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }
	
	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor
	     * is invoked with one argument; (value). The purpose of this method is to
	     * "tap into" a method chain sequence in order to modify intermediate results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    // Mutate input array.
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor) {
	      interceptor(value);
	      return value;
	    }
	
	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     * The purpose of this method is to "pass thru" values replacing intermediate
	     * results in a method chain sequence.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor) {
	      return interceptor(value);
	    }
	
	    /**
	     * This method is the wrapper version of `_.at`.
	     *
	     * @name at
	     * @memberOf _
	     * @since 1.0.0
	     * @category Seq
	     * @param {...(string|string[])} [paths] The property paths of elements to pick,
	     *  specified individually or in arrays.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _(object).at(['a[0].b.c', 'a[1]']).value();
	     * // => [3, 4]
	     *
	     * _(['a', 'b', 'c']).at(0, 2).value();
	     * // => ['a', 'c']
	     */
	    var wrapperAt = rest(function(paths) {
	      paths = baseFlatten(paths, 1);
	      var length = paths.length,
	          start = length ? paths[0] : 0,
	          value = this.__wrapped__,
	          interceptor = function(object) { return baseAt(object, paths); };
	
	      if (length > 1 || this.__actions__.length ||
	          !(value instanceof LazyWrapper) || !isIndex(start)) {
	        return this.thru(interceptor);
	      }
	      value = value.slice(start, +start + (length ? 1 : 0));
	      value.__actions__.push({
	        'func': thru,
	        'args': [interceptor],
	        'thisArg': undefined
	      });
	      return new LodashWrapper(value, this.__chain__).thru(function(array) {
	        if (length && !array.length) {
	          array.push(undefined);
	        }
	        return array;
	      });
	    });
	
	    /**
	     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
	     *
	     * @name chain
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // A sequence without explicit chaining.
	     * _(users).head();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // A sequence with explicit chaining.
	     * _(users)
	     *   .chain()
	     *   .head()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }
	
	    /**
	     * Executes the chain sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }
	
	    /**
	     * Gets the next value on a wrapped object following the
	     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
	     *
	     * @name next
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the next iterator value.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 1 }
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 2 }
	     *
	     * wrapped.next();
	     * // => { 'done': true, 'value': undefined }
	     */
	    function wrapperNext() {
	      if (this.__values__ === undefined) {
	        this.__values__ = toArray(this.value());
	      }
	      var done = this.__index__ >= this.__values__.length,
	          value = done ? undefined : this.__values__[this.__index__++];
	
	      return { 'done': done, 'value': value };
	    }
	
	    /**
	     * Enables the wrapper to be iterable.
	     *
	     * @name Symbol.iterator
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the wrapper object.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped[Symbol.iterator]() === wrapped;
	     * // => true
	     *
	     * Array.from(wrapped);
	     * // => [1, 2]
	     */
	    function wrapperToIterator() {
	      return this;
	    }
	
	    /**
	     * Creates a clone of the chain sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @param {*} value The value to plant.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2]).map(square);
	     * var other = wrapped.plant([3, 4]);
	     *
	     * other.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;
	
	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        clone.__index__ = 0;
	        clone.__values__ = undefined;
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }
	
	    /**
	     * This method is the wrapper version of `_.reverse`.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({
	          'func': thru,
	          'args': [reverse],
	          'thisArg': undefined
	        });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(reverse);
	    }
	
	    /**
	     * Executes the chain sequence to resolve the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @since 0.1.0
	     * @alias toJSON, valueOf
	     * @category Seq
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });
	
	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * Iteration is stopped once `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.every(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, guard) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (guard && isIterateeCall(collection, predicate, guard)) {
	        predicate = undefined;
	      }
	      return func(collection, getIteratee(predicate, 3));
	    }
	
	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, { 'age': 36, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.filter(users, 'active');
	     * // => objects for ['barney']
	     */
	    function filter(collection, predicate) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      return func(collection, getIteratee(predicate, 3));
	    }
	
	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to search.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.find(users, function(o) { return o.age < 40; });
	     * // => object for 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.find(users, { 'age': 1, 'active': true });
	     * // => object for 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.find(users, ['active', false]);
	     * // => object for 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.find(users, 'active');
	     * // => object for 'barney'
	     */
	    function find(collection, predicate) {
	      predicate = getIteratee(predicate, 3);
	      if (isArray(collection)) {
	        var index = baseFindIndex(collection, predicate);
	        return index > -1 ? collection[index] : undefined;
	      }
	      return baseFind(collection, predicate, baseEach);
	    }
	
	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to search.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    function findLast(collection, predicate) {
	      predicate = getIteratee(predicate, 3);
	      if (isArray(collection)) {
	        var index = baseFindIndex(collection, predicate, true);
	        return index > -1 ? collection[index] : undefined;
	      }
	      return baseFind(collection, predicate, baseEachRight);
	    }
	
	    /**
	     * Creates a flattened array of values by running each element in `collection`
	     * through `iteratee` and flattening the mapped results. The iteratee is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [n, n];
	     * }
	     *
	     * _.flatMap([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */
	    function flatMap(collection, iteratee) {
	      return baseFlatten(map(collection, iteratee), 1);
	    }
	
	    /**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDeep([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */
	    function flatMapDeep(collection, iteratee) {
	      return baseFlatten(map(collection, iteratee), INFINITY);
	    }
	
	    /**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDepth([1, 2], duplicate, 2);
	     * // => [[1, 1], [2, 2]]
	     */
	    function flatMapDepth(collection, iteratee, depth) {
	      depth = depth === undefined ? 1 : toInteger(depth);
	      return baseFlatten(map(collection, iteratee), depth);
	    }
	
	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The iteratee is invoked with three arguments: (value, index|key, collection).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length"
	     * property are iterated like arrays. To avoid this behavior use `_.forIn`
	     * or `_.forOwn` for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias each
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `1` then `2`.
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */
	    function forEach(collection, iteratee) {
	      return (typeof iteratee == 'function' && isArray(collection))
	        ? arrayEach(collection, iteratee)
	        : baseEach(collection, getIteratee(iteratee));
	    }
	
	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @example
	     *
	     * _.forEachRight([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `2` then `1`.
	     */
	    function forEachRight(collection, iteratee) {
	      return (typeof iteratee == 'function' && isArray(collection))
	        ? arrayEachRight(collection, iteratee)
	        : baseEachRight(collection, getIteratee(iteratee));
	    }
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of elements responsible for generating the key.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': [4.2], '6': [6.1, 6.3] }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });
	
	    /**
	     * Checks if `value` is in `collection`. If `collection` is a string it's
	     * checked for a substring of `value`, otherwise
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * is used for equality comparisons. If `fromIndex` is negative, it's used as
	     * the offset from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {boolean} Returns `true` if `value` is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, value, fromIndex, guard) {
	      collection = isArrayLike(collection) ? collection : values(collection);
	      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
	
	      var length = collection.length;
	      if (fromIndex < 0) {
	        fromIndex = nativeMax(length + fromIndex, 0);
	      }
	      return isString(collection)
	        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	    }
	
	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it's
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke each method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invokeMap([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invokeMap = rest(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	
	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? apply(func, value, args) : baseInvoke(value, path, args);
	      });
	      return result;
	    });
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var array = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.keyBy(array, function(o) {
	     *   return String.fromCharCode(o.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.keyBy(array, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     */
	    var keyBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });
	
	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `curry`, `curryRight`, `drop`, `dropRight`, `every`, `fill`,
	     * `invert`, `parseInt`, `random`, `range`, `rangeRight`, `slice`, `some`,
	     * `sortBy`, `take`, `takeRight`, `template`, `trim`, `trimEnd`, `trimStart`,
	     * and `words`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * _.map([4, 8], square);
	     * // => [16, 64]
	     *
	     * _.map({ 'a': 4, 'b': 8 }, square);
	     * // => [16, 64] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      return func(collection, getIteratee(iteratee, 3));
	    }
	
	    /**
	     * This method is like `_.sortBy` except that it allows specifying the sort
	     * orders of the iteratees to sort by. If `orders` is unspecified, all values
	     * are sorted in ascending order. Otherwise, specify an order of "desc" for
	     * descending or "asc" for ascending sort order of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @param {string[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // Sort by `user` in ascending order and by `age` in descending order.
	     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */
	    function orderBy(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      orders = guard ? undefined : orders;
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseOrderBy(collection, iteratees, orders);
	    }
	
	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, the second of which
	     * contains elements `predicate` returns falsey for. The predicate is
	     * invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * _.partition(users, function(o) { return o.active; });
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.partition(users, { 'age': 1, 'active': false });
	     * // => objects for [['pebbles'], ['barney', 'fred']]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.partition(users, ['active', false]);
	     * // => objects for [['barney', 'pebbles'], ['fred']]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.partition(users, 'active');
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });
	
	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not given the first element of `collection` is used as the initial
	     * value. The iteratee is invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	     * and `sortBy`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(sum, n) {
	     *   return sum + n;
	     * }, 0);
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     *   return result;
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	     */
	    function reduce(collection, iteratee, accumulator) {
	      var func = isArray(collection) ? arrayReduce : baseReduce,
	          initAccum = arguments.length < 3;
	
	      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	    }
	
	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    function reduceRight(collection, iteratee, accumulator) {
	      var func = isArray(collection) ? arrayReduceRight : baseReduce,
	          initAccum = arguments.length < 3;
	
	      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
	    }
	
	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * _.reject(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.reject(users, { 'age': 40, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.reject(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.reject(users, 'active');
	     * // => objects for ['barney']
	     */
	    function reject(collection, predicate) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getIteratee(predicate, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }
	
	    /**
	     * Gets a random element from `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     */
	    function sample(collection) {
	      var array = isArrayLike(collection) ? collection : values(collection),
	          length = array.length;
	
	      return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
	    }
	
	    /**
	     * Gets `n` random elements at unique keys from `collection` up to the
	     * size of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} [n=0] The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     * @example
	     *
	     * _.sampleSize([1, 2, 3], 2);
	     * // => [3, 1]
	     *
	     * _.sampleSize([1, 2, 3], 4);
	     * // => [2, 3, 1]
	     */
	    function sampleSize(collection, n) {
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;
	
	      n = baseClamp(toInteger(n), 0, length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];
	
	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }
	
	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sampleSize(collection, MAX_ARRAY_LENGTH);
	    }
	
	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable string keyed properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @returns {number} Returns the collection size.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      if (collection == null) {
	        return 0;
	      }
	      if (isArrayLike(collection)) {
	        var result = collection.length;
	        return (result && isString(collection)) ? stringSize(collection) : result;
	      }
	      if (isObjectLike(collection)) {
	        var tag = getTag(collection);
	        if (tag == mapTag || tag == setTag) {
	          return collection.size;
	        }
	      }
	      return keys(collection).length;
	    }
	
	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * Iteration is stopped once `predicate` returns truthy. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.some(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, guard) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (guard && isIterateeCall(collection, predicate, guard)) {
	        predicate = undefined;
	      }
	      return func(collection, getIteratee(predicate, 3));
	    }
	
	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through each iteratee. This method
	     * performs a stable sort, that is, it preserves the original sort order of
	     * equal elements. The iteratees are invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])}
	     *  [iteratees=[_.identity]] The iteratees to sort by, specified individually
	     *  or in arrays.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.sortBy(users, function(o) { return o.user; });
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     *
	     * _.sortBy(users, ['user', 'age']);
	     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	     *
	     * _.sortBy(users, 'user', function(o) {
	     *   return Math.floor(o.age / 10);
	     * });
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */
	    var sortBy = rest(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var length = iteratees.length;
	      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
	        iteratees = [];
	      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
	        iteratees.length = 1;
	      }
	      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
	    });
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Gets the timestamp of the number of milliseconds that have elapsed since
	     * the Unix epoch (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @type {Function}
	     * @category Date
	     * @returns {number} Returns the timestamp.
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => Logs the number of milliseconds it took for the deferred function to be invoked.
	     */
	    var now = Date.now;
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it's called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => Logs 'done saving!' after the two async saves have completed.
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }
	
	    /**
	     * Creates a function that accepts up to `n` arguments, ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      n = guard ? undefined : n;
	      n = (func && n == null) ? func.length : n;
	      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }
	
	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery(element).on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method doesn't set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = rest(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, getPlaceholder(bind));
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });
	
	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist. See
	     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Function
	     * @param {Object} object The object to invoke the method on.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = rest(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, getPlaceholder(bindKey));
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });
	
	    /**
	     * Creates a function that accepts arguments of `func` and either invokes
	     * `func` returning its result, if at least `arity` number of arguments have
	     * been provided, or returns a function that accepts the remaining `func`
	     * arguments, and so on. The arity of `func` may be specified if `func.length`
	     * is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    function curry(func, arity, guard) {
	      arity = guard ? undefined : arity;
	      var result = createWrapper(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	      result.placeholder = curry.placeholder;
	      return result;
	    }
	
	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    function curryRight(func, arity, guard) {
	      arity = guard ? undefined : arity;
	      var result = createWrapper(func, CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	      result.placeholder = curryRight.placeholder;
	      return result;
	    }
	
	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed `func` invocations and a `flush` method to immediately invoke them.
	     * Provide an options object to indicate whether `func` should be invoked on
	     * the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	     * with the last arguments provided to the debounced function. Subsequent calls
	     * to the debounced function return the result of the last `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=false]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {number} [options.maxWait]
	     *  The maximum time `func` is allowed to be delayed before it's invoked.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // Avoid costly calculations while the window size is in flux.
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	     * jQuery(element).on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', debounced);
	     *
	     * // Cancel the trailing debounced invocation.
	     * jQuery(window).on('popstate', debounced.cancel);
	     */
	    function debounce(func, wait, options) {
	      var lastArgs,
	          lastThis,
	          result,
	          timerId,
	          lastCallTime = 0,
	          lastInvokeTime = 0,
	          leading = false,
	          maxWait = false,
	          trailing = true;
	
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = toNumber(wait) || 0;
	      if (isObject(options)) {
	        leading = !!options.leading;
	        maxWait = 'maxWait' in options && nativeMax(toNumber(options.maxWait) || 0, wait);
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	
	      function invokeFunc(time) {
	        var args = lastArgs,
	            thisArg = lastThis;
	
	        lastArgs = lastThis = undefined;
	        lastInvokeTime = time;
	        result = func.apply(thisArg, args);
	        return result;
	      }
	
	      function leadingEdge(time) {
	        // Reset any `maxWait` timer.
	        lastInvokeTime = time;
	        // Start the timer for the trailing edge.
	        timerId = setTimeout(timerExpired, wait);
	        // Invoke the leading edge.
	        return leading ? invokeFunc(time) : result;
	      }
	
	      function remainingWait(time) {
	        var timeSinceLastCall = time - lastCallTime,
	            timeSinceLastInvoke = time - lastInvokeTime,
	            result = wait - timeSinceLastCall;
	
	        return maxWait === false ? result : nativeMin(result, maxWait - timeSinceLastInvoke);
	      }
	
	      function shouldInvoke(time) {
	        var timeSinceLastCall = time - lastCallTime,
	            timeSinceLastInvoke = time - lastInvokeTime;
	
	        // Either this is the first call, activity has stopped and we're at the
	        // trailing edge, the system time has gone backwards and we're treating
	        // it as the trailing edge, or we've hit the `maxWait` limit.
	        return (!lastCallTime || (timeSinceLastCall >= wait) ||
	          (timeSinceLastCall < 0) || (maxWait !== false && timeSinceLastInvoke >= maxWait));
	      }
	
	      function timerExpired() {
	        var time = now();
	        if (shouldInvoke(time)) {
	          return trailingEdge(time);
	        }
	        // Restart the timer.
	        timerId = setTimeout(timerExpired, remainingWait(time));
	      }
	
	      function trailingEdge(time) {
	        clearTimeout(timerId);
	        timerId = undefined;
	
	        // Only invoke if we have `lastArgs` which means `func` has been
	        // debounced at least once.
	        if (trailing && lastArgs) {
	          return invokeFunc(time);
	        }
	        lastArgs = lastThis = undefined;
	        return result;
	      }
	
	      function cancel() {
	        if (timerId !== undefined) {
	          clearTimeout(timerId);
	        }
	        lastCallTime = lastInvokeTime = 0;
	        lastArgs = lastThis = timerId = undefined;
	      }
	
	      function flush() {
	        return timerId === undefined ? result : trailingEdge(now());
	      }
	
	      function debounced() {
	        var time = now(),
	            isInvoking = shouldInvoke(time);
	
	        lastArgs = arguments;
	        lastThis = this;
	        lastCallTime = time;
	
	        if (isInvoking) {
	          if (timerId === undefined) {
	            return leadingEdge(lastCallTime);
	          }
	          // Handle invocations in a tight loop.
	          clearTimeout(timerId);
	          timerId = setTimeout(timerExpired, wait);
	          return invokeFunc(lastCallTime);
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      debounced.flush = flush;
	      return debounced;
	    }
	
	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // => Logs 'deferred' after one or more milliseconds.
	     */
	    var defer = rest(function(func, args) {
	      return baseDelay(func, 1, args);
	    });
	
	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => Logs 'later' after one second.
	     */
	    var delay = rest(function(func, wait, args) {
	      return baseDelay(func, toNumber(wait) || 0, args);
	    });
	
	    /**
	     * Creates a function that invokes `func` with arguments reversed.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to flip arguments for.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var flipped = _.flip(function() {
	     *   return _.toArray(arguments);
	     * });
	     *
	     * flipped('a', 'b', 'c', 'd');
	     * // => ['d', 'c', 'b', 'a']
	     */
	    function flip(func) {
	      return createWrapper(func, FLIP_FLAG);
	    }
	
	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is used as the map cache key. The `func`
	     * is invoked with the `this` binding of the memoized function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the
	     * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `delete`, `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     * var other = { 'c': 3, 'd': 4 };
	     *
	     * var values = _.memoize(_.values);
	     * values(object);
	     * // => [1, 2]
	     *
	     * values(other);
	     * // => [3, 4]
	     *
	     * object.a = 2;
	     * values(object);
	     * // => [1, 2]
	     *
	     * // Modify the result cache.
	     * values.cache.set(object, ['a', 'b']);
	     * values(object);
	     * // => ['a', 'b']
	     *
	     * // Replace `_.memoize.Cache`.
	     * _.memoize.Cache = WeakMap;
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;
	
	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new (memoize.Cache || MapCache);
	      return memoized;
	    }
	
	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;
	
	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }
	
	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first invocation. The `func` is
	     * invoked with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }
	
	    /**
	     * Creates a function that invokes `func` with arguments transformed by
	     * corresponding `transforms`.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms] The functions to transform
	     * arguments, specified individually or in arrays.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var func = _.overArgs(function(x, y) {
	     *   return [x, y];
	     * }, square, doubled);
	     *
	     * func(9, 3);
	     * // => [81, 6]
	     *
	     * func(10, 5);
	     * // => [100, 10]
	     */
	    var overArgs = rest(function(func, transforms) {
	      transforms = arrayMap(baseFlatten(transforms, 1), getIteratee());
	
	      var funcsLength = transforms.length;
	      return rest(function(args) {
	        var index = -1,
	            length = nativeMin(args.length, funcsLength);
	
	        while (++index < length) {
	          args[index] = transforms[index].call(this, args[index]);
	        }
	        return apply(func, this, args);
	      });
	    });
	
	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.2.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // Partially applied with placeholders.
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = rest(function(func, partials) {
	      var holders = replaceHolders(partials, getPlaceholder(partial));
	      return createWrapper(func, PARTIAL_FLAG, undefined, partials, holders);
	    });
	
	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // Partially applied with placeholders.
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = rest(function(func, partials) {
	      var holders = replaceHolders(partials, getPlaceholder(partialRight));
	      return createWrapper(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
	    });
	
	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified individually or in arrays.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     */
	    var rearg = rest(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes, 1));
	    });
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as
	     * an array.
	     *
	     * **Note:** This method is based on the
	     * [rest parameter](https://mdn.io/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.rest(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function rest(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            array = Array(length);
	
	        while (++index < length) {
	          array[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, array);
	          case 1: return func.call(this, args[0], array);
	          case 2: return func.call(this, args[0], args[1], array);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = array;
	        return apply(func, this, otherArgs);
	      };
	    }
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * create function and an array of arguments much like
	     * [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the
	     * [spread operator](https://mdn.io/spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @param {number} [start=0] The start position of the spread.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
	      return rest(function(args) {
	        var array = args[start],
	            otherArgs = args.slice(0, start);
	
	        if (array) {
	          arrayPush(otherArgs, array);
	        }
	        return apply(func, this, otherArgs);
	      });
	    }
	
	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed `func` invocations and a `flush` method to
	     * immediately invoke them. Provide an options object to indicate whether
	     * `func` should be invoked on the leading and/or trailing edge of the `wait`
	     * timeout. The `func` is invoked with the last arguments provided to the
	     * throttled function. Subsequent calls to the throttled function return the
	     * result of the last `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the throttled function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=true]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // Avoid excessively updating the position while scrolling.
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	     * jQuery(element).on('click', throttled);
	     *
	     * // Cancel the trailing throttled invocation.
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;
	
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, {
	        'leading': leading,
	        'maxWait': wait,
	        'trailing': trailing
	      });
	    }
	
	    /**
	     * Creates a function that accepts up to one argument, ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.unary(parseInt));
	     * // => [6, 8, 10]
	     */
	    function unary(func) {
	      return ary(func, 1);
	    }
	
	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} [wrapper=identity] The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return partial(wrapper, value);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Casts `value` as an array if it's not one.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Lang
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast array.
	     * @example
	     *
	     * _.castArray(1);
	     * // => [1]
	     *
	     * _.castArray({ 'a': 1 });
	     * // => [{ 'a': 1 }]
	     *
	     * _.castArray('abc');
	     * // => ['abc']
	     *
	     * _.castArray(null);
	     * // => [null]
	     *
	     * _.castArray(undefined);
	     * // => [undefined]
	     *
	     * _.castArray();
	     * // => []
	     *
	     * var array = [1, 2, 3];
	     * console.log(_.castArray(array) === array);
	     * // => true
	     */
	    function castArray() {
	      if (!arguments.length) {
	        return [];
	      }
	      var value = arguments[0];
	      return isArray(value) ? value : [value];
	    }
	
	    /**
	     * Creates a shallow clone of `value`.
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	     * and supports cloning arrays, array buffers, booleans, date objects, maps,
	     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	     * arrays. The own enumerable properties of `arguments` objects are cloned
	     * as plain objects. An empty object is returned for uncloneable values such
	     * as error objects, functions, DOM nodes, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var shallow = _.clone(objects);
	     * console.log(shallow[0] === objects[0]);
	     * // => true
	     */
	    function clone(value) {
	      return baseClone(value, false, true);
	    }
	
	    /**
	     * This method is like `_.clone` except that it accepts `customizer` which
	     * is invoked to produce the cloned value. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is invoked with
	     * up to four arguments; (value [, index|key, object, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * }
	     *
	     * var el = _.cloneWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 0
	     */
	    function cloneWith(value, customizer) {
	      return baseClone(value, false, true, customizer);
	    }
	
	    /**
	     * This method is like `_.clone` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var deep = _.cloneDeep(objects);
	     * console.log(deep[0] === objects[0]);
	     * // => false
	     */
	    function cloneDeep(value) {
	      return baseClone(value, true, true);
	    }
	
	    /**
	     * This method is like `_.cloneWith` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * }
	     *
	     * var el = _.cloneDeepWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 20
	     */
	    function cloneDeepWith(value, customizer) {
	      return baseClone(value, true, true, customizer);
	    }
	
	    /**
	     * Performs a
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * comparison between two values to determine if they are equivalent.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * _.eq(object, object);
	     * // => true
	     *
	     * _.eq(object, other);
	     * // => false
	     *
	     * _.eq('a', 'a');
	     * // => true
	     *
	     * _.eq('a', Object('a'));
	     * // => false
	     *
	     * _.eq(NaN, NaN);
	     * // => true
	     */
	    function eq(value, other) {
	      return value === other || (value !== value && other !== other);
	    }
	
	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }
	
	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to
	     *  `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }
	
	    /**
	     * Checks if `value` is likely an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	      return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	        (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	    }
	
	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @type {Function}
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(document.body.children);
	     * // => false
	     *
	     * _.isArray('abc');
	     * // => false
	     *
	     * _.isArray(_.noop);
	     * // => false
	     */
	    var isArray = Array.isArray;
	
	    /**
	     * Checks if `value` is classified as an `ArrayBuffer` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isArrayBuffer(new ArrayBuffer(2));
	     * // => true
	     *
	     * _.isArrayBuffer(new Array(2));
	     * // => false
	     */
	    function isArrayBuffer(value) {
	      return isObjectLike(value) && objectToString.call(value) == arrayBufferTag;
	    }
	
	    /**
	     * Checks if `value` is array-like. A value is considered array-like if it's
	     * not a function and has a `value.length` that's an integer greater than or
	     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     * @example
	     *
	     * _.isArrayLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLike(document.body.children);
	     * // => true
	     *
	     * _.isArrayLike('abc');
	     * // => true
	     *
	     * _.isArrayLike(_.noop);
	     * // => false
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value)) && !isFunction(value);
	    }
	
	    /**
	     * This method is like `_.isArrayLike` except that it also checks if `value`
	     * is an object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array-like object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArrayLikeObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLikeObject(document.body.children);
	     * // => true
	     *
	     * _.isArrayLikeObject('abc');
	     * // => false
	     *
	     * _.isArrayLikeObject(_.noop);
	     * // => false
	     */
	    function isArrayLikeObject(value) {
	      return isObjectLike(value) && isArrayLike(value);
	    }
	
	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false ||
	        (isObjectLike(value) && objectToString.call(value) == boolTag);
	    }
	
	    /**
	     * Checks if `value` is a buffer.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	     * @example
	     *
	     * _.isBuffer(new Buffer(2));
	     * // => true
	     *
	     * _.isBuffer(new Uint8Array(2));
	     * // => false
	     */
	    var isBuffer = !Buffer ? constant(false) : function(value) {
	      return value instanceof Buffer;
	    };
	
	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objectToString.call(value) == dateTag;
	    }
	
	    /**
	     * Checks if `value` is likely a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element,
	     *  else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }
	
	    /**
	     * Checks if `value` is an empty object, collection, map, or set.
	     *
	     * Objects are considered empty if they have no own enumerable string keyed
	     * properties.
	     *
	     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	     * jQuery-like collections are considered empty if they have a `length` of `0`.
	     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (isArrayLike(value) &&
	          (isArray(value) || isString(value) || isFunction(value.splice) ||
	            isArguments(value) || isBuffer(value))) {
	        return !value.length;
	      }
	      if (isObjectLike(value)) {
	        var tag = getTag(value);
	        if (tag == mapTag || tag == setTag) {
	          return !value.size;
	        }
	      }
	      for (var key in value) {
	        if (hasOwnProperty.call(value, key)) {
	          return false;
	        }
	      }
	      return !(nonEnumShadows && keys(value).length);
	    }
	
	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent.
	     *
	     * **Note:** This method supports comparing arrays, array buffers, booleans,
	     * date objects, error objects, maps, numbers, `Object` objects, regexes,
	     * sets, strings, symbols, and typed arrays. `Object` objects are compared
	     * by their own, not inherited, enumerable properties. Functions and DOM
	     * nodes are **not** supported.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent,
	     *  else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * object === other;
	     * // => false
	     */
	    function isEqual(value, other) {
	      return baseIsEqual(value, other);
	    }
	
	    /**
	     * This method is like `_.isEqual` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined` comparisons
	     * are handled by the method instead. The `customizer` is invoked with up to
	     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if the values are equivalent,
	     *  else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, othValue) {
	     *   if (isGreeting(objValue) && isGreeting(othValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqualWith(array, other, customizer);
	     * // => true
	     */
	    function isEqualWith(value, other, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }
	
	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object,
	     *  else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      if (!isObjectLike(value)) {
	        return false;
	      }
	      return (objectToString.call(value) == errorTag) ||
	        (typeof value.message == 'string' && typeof value.name == 'string');
	    }
	
	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on
	     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number,
	     *  else `false`.
	     * @example
	     *
	     * _.isFinite(3);
	     * // => true
	     *
	     * _.isFinite(Number.MAX_VALUE);
	     * // => true
	     *
	     * _.isFinite(3.14);
	     * // => true
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }
	
	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in Safari 8 which returns 'object' for typed array and weak map constructors,
	      // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	      var tag = isObject(value) ? objectToString.call(value) : '';
	      return tag == funcTag || tag == genTag;
	    }
	
	    /**
	     * Checks if `value` is an integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
	     * @example
	     *
	     * _.isInteger(3);
	     * // => true
	     *
	     * _.isInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isInteger(Infinity);
	     * // => false
	     *
	     * _.isInteger('3');
	     * // => false
	     */
	    function isInteger(value) {
	      return typeof value == 'number' && value == toInteger(value);
	    }
	
	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is loosely based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length,
	     *  else `false`.
	     * @example
	     *
	     * _.isLength(3);
	     * // => true
	     *
	     * _.isLength(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isLength(Infinity);
	     * // => false
	     *
	     * _.isLength('3');
	     * // => false
	     */
	    function isLength(value) {
	      return typeof value == 'number' &&
	        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }
	
	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(_.noop);
	     * // => true
	     *
	     * _.isObject(null);
	     * // => false
	     */
	    function isObject(value) {
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }
	
	    /**
	     * Checks if `value` is object-like. A value is object-like if it's not `null`
	     * and has a `typeof` result of "object".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	     * @example
	     *
	     * _.isObjectLike({});
	     * // => true
	     *
	     * _.isObjectLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isObjectLike(_.noop);
	     * // => false
	     *
	     * _.isObjectLike(null);
	     * // => false
	     */
	    function isObjectLike(value) {
	      return !!value && typeof value == 'object';
	    }
	
	    /**
	     * Checks if `value` is classified as a `Map` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isMap(new Map);
	     * // => true
	     *
	     * _.isMap(new WeakMap);
	     * // => false
	     */
	    function isMap(value) {
	      return isObjectLike(value) && getTag(value) == mapTag;
	    }
	
	    /**
	     * Performs a partial deep comparison between `object` and `source` to
	     * determine if `object` contains equivalent property values. This method is
	     * equivalent to a `_.matches` function when `source` is partially applied.
	     *
	     * **Note:** This method supports comparing the same values as `_.isEqual`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     */
	    function isMatch(object, source) {
	      return object === source || baseIsMatch(object, source, getMatchData(source));
	    }
	
	    /**
	     * This method is like `_.isMatch` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined` comparisons
	     * are handled by the method instead. The `customizer` is invoked with five
	     * arguments: (objValue, srcValue, index|key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatchWith(object, source, customizer);
	     * // => true
	     */
	    function isMatchWith(object, source, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return baseIsMatch(object, source, getMatchData(source), customizer);
	    }
	
	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as
	     * [`isNaN`](https://es5.github.io/#x15.1.2.4) which returns `true` for
	     * `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some
	      // ActiveX objects in IE.
	      return isNumber(value) && value != +value;
	    }
	
	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (isFunction(value)) {
	        return reIsNative.test(funcToString.call(value));
	      }
	      return isObjectLike(value) &&
	        (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	    }
	
	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }
	
	    /**
	     * Checks if `value` is `null` or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	     * @example
	     *
	     * _.isNil(null);
	     * // => true
	     *
	     * _.isNil(void 0);
	     * // => true
	     *
	     * _.isNil(NaN);
	     * // => false
	     */
	    function isNil(value) {
	      return value == null;
	    }
	
	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	     * classified as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isNumber(3);
	     * // => true
	     *
	     * _.isNumber(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isNumber(Infinity);
	     * // => true
	     *
	     * _.isNumber('3');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' ||
	        (isObjectLike(value) && objectToString.call(value) == numberTag);
	    }
	
	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.8.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object,
	     *  else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      if (!isObjectLike(value) ||
	          objectToString.call(value) != objectTag || isHostObject(value)) {
	        return false;
	      }
	      var proto = getPrototype(value);
	      if (proto === null) {
	        return true;
	      }
	      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	      return (typeof Ctor == 'function' &&
	        Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	    }
	
	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObject(value) && objectToString.call(value) == regexpTag;
	    }
	
	    /**
	     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
	     * double precision number which isn't the result of a rounded unsafe integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a safe integer,
	     *  else `false`.
	     * @example
	     *
	     * _.isSafeInteger(3);
	     * // => true
	     *
	     * _.isSafeInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isSafeInteger(Infinity);
	     * // => false
	     *
	     * _.isSafeInteger('3');
	     * // => false
	     */
	    function isSafeInteger(value) {
	      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
	    }
	
	    /**
	     * Checks if `value` is classified as a `Set` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isSet(new Set);
	     * // => true
	     *
	     * _.isSet(new WeakSet);
	     * // => false
	     */
	    function isSet(value) {
	      return isObjectLike(value) && getTag(value) == setTag;
	    }
	
	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' ||
	        (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	    }
	
	    /**
	     * Checks if `value` is classified as a `Symbol` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isSymbol(Symbol.iterator);
	     * // => true
	     *
	     * _.isSymbol('abc');
	     * // => false
	     */
	    function isSymbol(value) {
	      return typeof value == 'symbol' ||
	        (isObjectLike(value) && objectToString.call(value) == symbolTag);
	    }
	
	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) &&
	        isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	    }
	
	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }
	
	    /**
	     * Checks if `value` is classified as a `WeakMap` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isWeakMap(new WeakMap);
	     * // => true
	     *
	     * _.isWeakMap(new Map);
	     * // => false
	     */
	    function isWeakMap(value) {
	      return isObjectLike(value) && getTag(value) == weakMapTag;
	    }
	
	    /**
	     * Checks if `value` is classified as a `WeakSet` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified,
	     *  else `false`.
	     * @example
	     *
	     * _.isWeakSet(new WeakSet);
	     * // => true
	     *
	     * _.isWeakSet(new Set);
	     * // => false
	     */
	    function isWeakSet(value) {
	      return isObjectLike(value) && objectToString.call(value) == weakSetTag;
	    }
	
	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }
	
	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to
	     *  `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }
	
	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * _.toArray({ 'a': 1, 'b': 2 });
	     * // => [1, 2]
	     *
	     * _.toArray('abc');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toArray(1);
	     * // => []
	     *
	     * _.toArray(null);
	     * // => []
	     */
	    function toArray(value) {
	      if (!value) {
	        return [];
	      }
	      if (isArrayLike(value)) {
	        return isString(value) ? stringToArray(value) : copyArray(value);
	      }
	      if (iteratorSymbol && value[iteratorSymbol]) {
	        return iteratorToArray(value[iteratorSymbol]());
	      }
	      var tag = getTag(value),
	          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
	
	      return func(value);
	    }
	
	    /**
	     * Converts `value` to an integer.
	     *
	     * **Note:** This function is loosely based on
	     * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toInteger(3);
	     * // => 3
	     *
	     * _.toInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toInteger(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toInteger('3');
	     * // => 3
	     */
	    function toInteger(value) {
	      if (!value) {
	        return value === 0 ? value : 0;
	      }
	      value = toNumber(value);
	      if (value === INFINITY || value === -INFINITY) {
	        var sign = (value < 0 ? -1 : 1);
	        return sign * MAX_INTEGER;
	      }
	      var remainder = value % 1;
	      return value === value ? (remainder ? value - remainder : value) : 0;
	    }
	
	    /**
	     * Converts `value` to an integer suitable for use as the length of an
	     * array-like object.
	     *
	     * **Note:** This method is based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toLength(3);
	     * // => 3
	     *
	     * _.toLength(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toLength(Infinity);
	     * // => 4294967295
	     *
	     * _.toLength('3');
	     * // => 3
	     */
	    function toLength(value) {
	      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
	    }
	
	    /**
	     * Converts `value` to a number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     * @example
	     *
	     * _.toNumber(3);
	     * // => 3
	     *
	     * _.toNumber(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toNumber(Infinity);
	     * // => Infinity
	     *
	     * _.toNumber('3');
	     * // => 3
	     */
	    function toNumber(value) {
	      if (typeof value == 'number') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return NAN;
	      }
	      if (isObject(value)) {
	        var other = isFunction(value.valueOf) ? value.valueOf() : value;
	        value = isObject(other) ? (other + '') : other;
	      }
	      if (typeof value != 'string') {
	        return value === 0 ?  value : +value;
	      }
	      value = value.replace(reTrim, '');
	      var isBinary = reIsBinary.test(value);
	      return (isBinary || reIsOctal.test(value))
	        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	        : (reIsBadHex.test(value) ? NAN : +value);
	    }
	
	    /**
	     * Converts `value` to a plain object flattening inherited enumerable string
	     * keyed properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return copyObject(value, keysIn(value));
	    }
	
	    /**
	     * Converts `value` to a safe integer. A safe integer can be compared and
	     * represented correctly.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toSafeInteger(3);
	     * // => 3
	     *
	     * _.toSafeInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toSafeInteger(Infinity);
	     * // => 9007199254740991
	     *
	     * _.toSafeInteger('3');
	     * // => 3
	     */
	    function toSafeInteger(value) {
	      return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
	    }
	
	    /**
	     * Converts `value` to a string if it's not one. An empty string is returned
	     * for `null` and `undefined` values. The sign of `-0` is preserved.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     * @example
	     *
	     * _.toString(null);
	     * // => ''
	     *
	     * _.toString(-0);
	     * // => '-0'
	     *
	     * _.toString([1, 2, 3]);
	     * // => '1,2,3'
	     */
	    function toString(value) {
	      // Exit early for strings to avoid a performance hit in some environments.
	      if (typeof value == 'string') {
	        return value;
	      }
	      if (value == null) {
	        return '';
	      }
	      if (isSymbol(value)) {
	        return symbolToString ? symbolToString.call(value) : '';
	      }
	      var result = (value + '');
	      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Assigns own enumerable string keyed properties of source objects to the
	     * destination object. Source objects are applied from left to right.
	     * Subsequent sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object` and is loosely based on
	     * [`Object.assign`](https://mdn.io/Object/assign).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.c = 3;
	     * }
	     *
	     * function Bar() {
	     *   this.e = 5;
	     * }
	     *
	     * Foo.prototype.d = 4;
	     * Bar.prototype.f = 6;
	     *
	     * _.assign({ 'a': 1 }, new Foo, new Bar);
	     * // => { 'a': 1, 'c': 3, 'e': 5 }
	     */
	    var assign = createAssigner(function(object, source) {
	      if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	        copyObject(source, keys(source), object);
	        return;
	      }
	      for (var key in source) {
	        if (hasOwnProperty.call(source, key)) {
	          assignValue(object, key, source[key]);
	        }
	      }
	    });
	
	    /**
	     * This method is like `_.assign` except that it iterates over own and
	     * inherited source properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * function Bar() {
	     *   this.d = 4;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     * Bar.prototype.e = 5;
	     *
	     * _.assignIn({ 'a': 1 }, new Foo, new Bar);
	     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
	     */
	    var assignIn = createAssigner(function(object, source) {
	      if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	        copyObject(source, keysIn(source), object);
	        return;
	      }
	      for (var key in source) {
	        assignValue(object, key, source[key]);
	      }
	    });
	
	    /**
	     * This method is like `_.assignIn` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined` assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extendWith
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignInWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */
	    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	      copyObjectWith(source, keysIn(source), object, customizer);
	    });
	
	    /**
	     * This method is like `_.assign` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined` assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */
	    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
	      copyObjectWith(source, keys(source), object, customizer);
	    });
	
	    /**
	     * Creates an array of values corresponding to `paths` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {...(string|string[])} [paths] The property paths of elements to pick,
	     *  specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _.at(object, ['a[0].b.c', 'a[1]']);
	     * // => [3, 4]
	     *
	     * _.at(['a', 'b', 'c'], 0, 2);
	     * // => ['a', 'c']
	     */
	    var at = rest(function(object, paths) {
	      return baseAt(object, baseFlatten(paths, 1));
	    });
	
	    /**
	     * Creates an object that inherits from the `prototype` object. If a
	     * `properties` object is given its own enumerable string keyed properties
	     * are assigned to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties) {
	      var result = baseCreate(prototype);
	      return properties ? baseAssign(result, properties) : result;
	    }
	
	    /**
	     * Assigns own and inherited enumerable string keyed properties of source
	     * objects to the destination object for all destination properties that
	     * resolve to `undefined`. Source objects are applied from left to right.
	     * Once a property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = rest(function(args) {
	      args.push(undefined, assignInDefaults);
	      return apply(assignInWith, undefined, args);
	    });
	
	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
	     * // => { 'user': { 'name': 'barney', 'age': 36 } }
	     *
	     */
	    var defaultsDeep = rest(function(args) {
	      args.push(undefined, mergeDefaults);
	      return apply(mergeWith, undefined, args);
	    });
	
	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(o) { return o.age < 40; });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    function findKey(object, predicate) {
	      return baseFind(object, getIteratee(predicate, 3), baseForOwn, true);
	    }
	
	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(o) { return o.age < 40; });
	     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    function findLastKey(object, predicate) {
	      return baseFind(object, getIteratee(predicate, 3), baseForOwnRight, true);
	    }
	
	    /**
	     * Iterates over own and inherited enumerable string keyed properties of an
	     * object invoking `iteratee` for each property. The iteratee is invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
	     */
	    function forIn(object, iteratee) {
	      return object == null
	        ? object
	        : baseFor(object, getIteratee(iteratee), keysIn);
	    }
	
	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
	     */
	    function forInRight(object, iteratee) {
	      return object == null
	        ? object
	        : baseForRight(object, getIteratee(iteratee), keysIn);
	    }
	
	    /**
	     * Iterates over own enumerable string keyed properties of an object invoking
	     * `iteratee` for each property. The iteratee is invoked with three arguments:
	     * (value, key, object). Iteratee functions may exit iteration early by
	     * explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */
	    function forOwn(object, iteratee) {
	      return object && baseForOwn(object, getIteratee(iteratee));
	    }
	
	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
	     */
	    function forOwnRight(object, iteratee) {
	      return object && baseForOwnRight(object, getIteratee(iteratee));
	    }
	
	    /**
	     * Creates an array of function property names from own enumerable properties
	     * of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functions(new Foo);
	     * // => ['a', 'b']
	     */
	    function functions(object) {
	      return object == null ? [] : baseFunctions(object, keys(object));
	    }
	
	    /**
	     * Creates an array of function property names from own and inherited
	     * enumerable properties of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functionsIn(new Foo);
	     * // => ['a', 'b', 'c']
	     */
	    function functionsIn(object) {
	      return object == null ? [] : baseFunctions(object, keysIn(object));
	    }
	
	    /**
	     * Gets the value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, path);
	      return result === undefined ? defaultValue : result;
	    }
	
	    /**
	     * Checks if `path` is a direct property of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     *
	     * _.has(other, 'a');
	     * // => false
	     */
	    function has(object, path) {
	      return hasPath(object, path, baseHas);
	    }
	
	    /**
	     * Checks if `path` is a direct or inherited property of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
	     *
	     * _.hasIn(object, 'a');
	     * // => true
	     *
	     * _.hasIn(object, 'a.b.c');
	     * // => true
	     *
	     * _.hasIn(object, ['a', 'b', 'c']);
	     * // => true
	     *
	     * _.hasIn(object, 'b');
	     * // => false
	     */
	    function hasIn(object, path) {
	      return hasPath(object, path, baseHasIn);
	    }
	
	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite
	     * property assignments of previous values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     */
	    var invert = createInverter(function(result, value, key) {
	      result[value] = key;
	    }, constant(identity));
	
	    /**
	     * This method is like `_.invert` except that the inverted object is generated
	     * from the results of running each element of `object` through `iteratee`.
	     * The corresponding inverted value of each inverted key is an array of keys
	     * responsible for generating the inverted value. The iteratee is invoked
	     * with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invertBy(object);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     *
	     * _.invertBy(object, function(value) {
	     *   return 'group' + value;
	     * });
	     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
	     */
	    var invertBy = createInverter(function(result, value, key) {
	      if (hasOwnProperty.call(result, value)) {
	        result[value].push(key);
	      } else {
	        result[value] = [key];
	      }
	    }, getIteratee);
	
	    /**
	     * Invokes the method at `path` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
	     *
	     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
	     * // => [2, 3]
	     */
	    var invoke = rest(baseInvoke);
	
	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    function keys(object) {
	      var isProto = isPrototype(object);
	      if (!(isProto || isArrayLike(object))) {
	        return baseKeys(object);
	      }
	      var indexes = indexKeys(object),
	          skipIndexes = !!indexes,
	          result = indexes || [],
	          length = result.length;
	
	      for (var key in object) {
	        if (baseHas(object, key) &&
	            !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	            !(isProto && key == 'constructor')) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      var index = -1,
	          isProto = isPrototype(object),
	          props = baseKeysIn(object),
	          propsLength = props.length,
	          indexes = indexKeys(object),
	          skipIndexes = !!indexes,
	          result = indexes || [],
	          length = result.length;
	
	      while (++index < propsLength) {
	        var key = props[index];
	        if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * string keyed property of `object` through `iteratee`. The iteratee is
	     * invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    function mapKeys(object, iteratee) {
	      var result = {};
	      iteratee = getIteratee(iteratee, 3);
	
	      baseForOwn(object, function(value, key, object) {
	        result[iteratee(value, key, object)] = value;
	      });
	      return result;
	    }
	
	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable string keyed property of `object` through
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * _.mapValues(users, function(o) { return o.age; });
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    function mapValues(object, iteratee) {
	      var result = {};
	      iteratee = getIteratee(iteratee, 3);
	
	      baseForOwn(object, function(value, key, object) {
	        result[key] = iteratee(value, key, object);
	      });
	      return result;
	    }
	
	    /**
	     * This method is like `_.assign` except that it recursively merges own and
	     * inherited enumerable string keyed properties of source objects into the
	     * destination object. Source properties that resolve to `undefined` are
	     * skipped if a destination value exists. Array and plain object properties
	     * are merged recursively.Other objects and value types are overridden by
	     * assignment. Source objects are applied from left to right. Subsequent
	     * sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     */
	    var merge = createAssigner(function(object, source, srcIndex) {
	      baseMerge(object, source, srcIndex);
	    });
	
	    /**
	     * This method is like `_.merge` except that it accepts `customizer` which
	     * is invoked to produce the merged values of the destination and source
	     * properties. If `customizer` returns `undefined` merging is handled by the
	     * method instead. The `customizer` is invoked with seven arguments:
	     * (objValue, srcValue, key, object, source, stack).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (_.isArray(objValue)) {
	     *     return objValue.concat(srcValue);
	     *   }
	     * }
	     *
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.mergeWith(object, other, customizer);
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
	      baseMerge(object, source, srcIndex, customizer);
	    });
	
	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable string keyed properties of `object` that are
	     * not omitted.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [props] The property identifiers to omit,
	     *  specified individually or in arrays.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omit(object, ['a', 'c']);
	     * // => { 'b': '2' }
	     */
	    var omit = rest(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      props = arrayMap(baseFlatten(props, 1), baseCastKey);
	      return basePick(object, baseDifference(getAllKeysIn(object), props));
	    });
	
	    /**
	     * The opposite of `_.pickBy`; this method creates an object composed of
	     * the own and inherited enumerable string keyed properties of `object` that
	     * `predicate` doesn't return truthy for. The predicate is invoked with two
	     * arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omitBy(object, _.isNumber);
	     * // => { 'b': '2' }
	     */
	    function omitBy(object, predicate) {
	      predicate = getIteratee(predicate);
	      return basePickBy(object, function(value, key) {
	        return !predicate(value, key);
	      });
	    }
	
	    /**
	     * Creates an object composed of the picked `object` properties.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [props] The property identifiers to pick,
	     *  specified individually or in arrays.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pick(object, ['a', 'c']);
	     * // => { 'a': 1, 'c': 3 }
	     */
	    var pick = rest(function(object, props) {
	      return object == null ? {} : basePick(object, baseFlatten(props, 1));
	    });
	
	    /**
	     * Creates an object composed of the `object` properties `predicate` returns
	     * truthy for. The predicate is invoked with two arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Array|Function|Object|string} [predicate=_.identity]
	     *  The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pickBy(object, _.isNumber);
	     * // => { 'a': 1, 'c': 3 }
	     */
	    function pickBy(object, predicate) {
	      return object == null ? {} : basePickBy(object, getIteratee(predicate));
	    }
	
	    /**
	     * This method is like `_.get` except that if the resolved value is a
	     * function it's invoked with the `this` binding of its parent object and
	     * its result is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a[0].b.c3', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a[0].b.c3', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      path = isKey(path, object) ? [path] : baseCastPath(path);
	
	      var index = -1,
	          length = path.length;
	
	      // Ensure the loop is entered when path is empty.
	      if (!length) {
	        object = undefined;
	        length = 1;
	      }
	      while (++index < length) {
	        var value = object == null ? undefined : object[path[index]];
	        if (value === undefined) {
	          index = length;
	          value = defaultValue;
	        }
	        object = isFunction(value) ? value.call(object) : value;
	      }
	      return object;
	    }
	
	    /**
	     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist
	     * it's created. Arrays are created for missing index properties while objects
	     * are created for all other missing properties. Use `_.setWith` to customize
	     * `path` creation.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      return object == null ? object : baseSet(object, path, value);
	    }
	
	    /**
	     * This method is like `_.set` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.setWith(object, '[0][1]', 'a', Object);
	     * // => { '0': { '1': 'a' } }
	     */
	    function setWith(object, path, value, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return object == null ? object : baseSet(object, path, value, customizer);
	    }
	
	    /**
	     * Creates an array of own enumerable string keyed-value pairs for `object`
	     * which can be consumed by `_.fromPairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entries
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairs(new Foo);
	     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	     */
	    function toPairs(object) {
	      return baseToPairs(object, keys(object));
	    }
	
	    /**
	     * Creates an array of own and inherited enumerable string keyed-value pairs
	     * for `object` which can be consumed by `_.fromPairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entriesIn
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairsIn(new Foo);
	     * // => [['a', 1], ['b', 2], ['c', 1]] (iteration order is not guaranteed)
	     */
	    function toPairsIn(object) {
	      return baseToPairs(object, keysIn(object));
	    }
	
	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * string keyed properties through `iteratee`, with each invocation potentially
	     * mutating the `accumulator` object. The iteratee is invoked with four arguments:
	     * (accumulator, value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * }, []);
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function transform(object, iteratee, accumulator) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getIteratee(iteratee, 4);
	
	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }
	
	    /**
	     * Removes the property at `path` of `object`.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
	     * _.unset(object, 'a[0].b.c');
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     *
	     * _.unset(object, 'a[0].b.c');
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     */
	    function unset(object, path) {
	      return object == null ? true : baseUnset(object, path);
	    }
	
	    /**
	     * This method is like `_.set` except that accepts `updater` to produce the
	     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
	     * is invoked with one argument: (value).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
	     * console.log(object.a[0].b.c);
	     * // => 9
	     *
	     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
	     * console.log(object.x[0].y.z);
	     * // => 0
	     */
	    function update(object, path, updater) {
	      return object == null ? object : baseUpdate(object, path, baseCastFunction(updater));
	    }
	
	    /**
	     * This method is like `_.update` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
	     * // => { '0': { '1': 'a' } }
	     */
	    function updateWith(object, path, updater, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return object == null ? object : baseUpdate(object, path, baseCastFunction(updater), customizer);
	    }
	
	    /**
	     * Creates an array of the own enumerable string keyed property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return object ? baseValues(object, keys(object)) : [];
	    }
	
	    /**
	     * Creates an array of the own and inherited enumerable string keyed property
	     * values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return object == null ? [] : baseValues(object, keysIn(object));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Clamps `number` within the inclusive `lower` and `upper` bounds.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Number
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     * @example
	     *
	     * _.clamp(-10, -5, 5);
	     * // => -5
	     *
	     * _.clamp(10, -5, 5);
	     * // => 5
	     */
	    function clamp(number, lower, upper) {
	      if (upper === undefined) {
	        upper = lower;
	        lower = undefined;
	      }
	      if (upper !== undefined) {
	        upper = toNumber(upper);
	        upper = upper === upper ? upper : 0;
	      }
	      if (lower !== undefined) {
	        lower = toNumber(lower);
	        lower = lower === lower ? lower : 0;
	      }
	      return baseClamp(toNumber(number), lower, upper);
	    }
	
	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it's set to `start` with `start` then set to `0`.
	     * If `start` is greater than `end` the params are swapped to support
	     * negative ranges.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.3.0
	     * @category Number
	     * @param {number} number The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     *
	     * _.inRange(-3, -2, -6);
	     * // => true
	     */
	    function inRange(number, start, end) {
	      start = toNumber(start) || 0;
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = toNumber(end) || 0;
	      }
	      number = toNumber(number);
	      return baseInRange(number, start, end);
	    }
	
	    /**
	     * Produces a random number between the inclusive `lower` and `upper` bounds.
	     * If only one argument is provided a number between `0` and the given number
	     * is returned. If `floating` is `true`, or either `lower` or `upper` are
	     * floats, a floating-point number is returned instead of an integer.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Number
	     * @param {number} [lower=0] The lower bound.
	     * @param {number} [upper=1] The upper bound.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(lower, upper, floating) {
	      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
	        upper = floating = undefined;
	      }
	      if (floating === undefined) {
	        if (typeof upper == 'boolean') {
	          floating = upper;
	          upper = undefined;
	        }
	        else if (typeof lower == 'boolean') {
	          floating = lower;
	          lower = undefined;
	        }
	      }
	      if (lower === undefined && upper === undefined) {
	        lower = 0;
	        upper = 1;
	      }
	      else {
	        lower = toNumber(lower) || 0;
	        if (upper === undefined) {
	          upper = lower;
	          lower = 0;
	        } else {
	          upper = toNumber(upper) || 0;
	        }
	      }
	      if (lower > upper) {
	        var temp = lower;
	        lower = upper;
	        upper = temp;
	      }
	      if (floating || lower % 1 || upper % 1) {
	        var rand = nativeRandom();
	        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
	      }
	      return baseRandom(lower, upper);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar--');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__FOO_BAR__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? capitalize(word) : word);
	    });
	
	    /**
	     * Converts the first character of `string` to upper case and the remaining
	     * to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('FRED');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      return upperFirst(toString(string).toLowerCase());
	    }
	
	    /**
	     * Deburrs `string` by converting
	     * [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing
	     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = toString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }
	
	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = toString(string);
	      target = typeof target == 'string' ? target : (target + '');
	
	      var length = string.length;
	      position = position === undefined
	        ? length
	        : baseClamp(toInteger(position), 0, length);
	
	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }
	
	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional
	     * characters use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value. See
	     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in IE < 9, they can break out of
	     * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the
	     * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
	     *
	     * When working with HTML you should always
	     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	     * XSS vectors.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      string = toString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }
	
	    /**
	     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https://lodash\.com/\)'
	     */
	    function escapeRegExp(string) {
	      string = toString(string);
	      return (string && reHasRegExpChar.test(string))
	        ? string.replace(reRegExpChar, '\\$&')
	        : string;
	    }
	
	    /**
	     * Converts `string` to
	     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__FOO_BAR__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Converts `string`, as space separated words, to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.lowerCase('--Foo-Bar--');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('fooBar');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('__FOO_BAR__');
	     * // => 'foo bar'
	     */
	    var lowerCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Converts the first character of `string` to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.lowerFirst('Fred');
	     * // => 'fred'
	     *
	     * _.lowerFirst('FRED');
	     * // => 'fRED'
	     */
	    var lowerFirst = createCaseFirst('toLowerCase');
	
	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);
	
	      var strLength = length ? stringSize(string) : 0;
	      if (!length || strLength >= length) {
	        return string;
	      }
	      var mid = (length - strLength) / 2;
	      return (
	        createPadding(nativeFloor(mid), chars) +
	        string +
	        createPadding(nativeCeil(mid), chars)
	      );
	    }
	
	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padEnd('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padEnd('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padEnd('abc', 3);
	     * // => 'abc'
	     */
	    function padEnd(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);
	
	      var strLength = length ? stringSize(string) : 0;
	      return (length && strLength < length)
	        ? (string + createPadding(length - strLength, chars))
	        : string;
	    }
	
	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padStart('abc', 6);
	     * // => '   abc'
	     *
	     * _.padStart('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padStart('abc', 3);
	     * // => 'abc'
	     */
	    function padStart(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);
	
	      var strLength = length ? stringSize(string) : 0;
	      return (length && strLength < length)
	        ? (createPadding(length - strLength, chars) + string)
	        : string;
	    }
	
	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
	     * hexadecimal, in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the
	     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix=10] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://bugs.chromium.org/p/v8/issues/detail?id=3109 for more details.
	      if (guard || radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = toString(string).replace(reTrim, '');
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }
	
	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      return baseRepeat(toString(string), toInteger(n));
	    }
	
	    /**
	     * Replaces matches for `pattern` in `string` with `replacement`.
	     *
	     * **Note:** This method is based on
	     * [`String#replace`](https://mdn.io/String/replace).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to modify.
	     * @param {RegExp|string} pattern The pattern to replace.
	     * @param {Function|string} replacement The match replacement.
	     * @returns {string} Returns the modified string.
	     * @example
	     *
	     * _.replace('Hi Fred', 'Fred', 'Barney');
	     * // => 'Hi Barney'
	     */
	    function replace() {
	      var args = arguments,
	          string = toString(args[0]);
	
	      return args.length < 3 ? string : string.replace(args[1], args[2]);
	    }
	
	    /**
	     * Converts `string` to
	     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--FOO-BAR--');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Splits `string` by `separator`.
	     *
	     * **Note:** This method is based on
	     * [`String#split`](https://mdn.io/String/split).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to split.
	     * @param {RegExp|string} separator The separator pattern to split by.
	     * @param {number} [limit] The length to truncate results to.
	     * @returns {Array} Returns the new array of string segments.
	     * @example
	     *
	     * _.split('a-b-c', '-', 2);
	     * // => ['a', 'b']
	     */
	    function split(string, separator, limit) {
	      return toString(string).split(separator, limit);
	    }
	
	    /**
	     * Converts `string` to
	     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.1.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar--');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__FOO_BAR__');
	     * // => 'FOO BAR'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + upperFirst(word);
	    });
	
	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = toString(string);
	      position = baseClamp(toInteger(position), 0, string.length);
	      return string.lastIndexOf(target, position) == position;
	    }
	
	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is given it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options={}] The options object.
	     * @param {RegExp} [options.escape=_.templateSettings.escape]
	     *  The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
	     *  The "evaluate" delimiter.
	     * @param {Object} [options.imports=_.templateSettings.imports]
	     *  An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
	     *  The "interpolate" delimiter.
	     * @param {string} [options.sourceURL='lodash.templateSources[n]']
	     *  The sourceURL of the compiled template.
	     * @param {string} [options.variable='obj']
	     *  The data object variable name.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // Use the "interpolate" delimiter to create a compiled template.
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // Use the HTML "escape" delimiter to escape data property values.
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the internal `print` function in "evaluate" delimiters.
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // Use the ES delimiter as an alternative to the default "interpolate" delimiter.
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // Use custom template delimiters.
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // Use backslashes to treat delimiters as plain text.
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // Use the `imports` option to import `jQuery` as `jq`.
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
	     *
	     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // Use the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and stack traces.
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, guard) {
	      // Based on John Resig's `tmpl` implementation
	      // (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;
	
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      string = toString(string);
	      options = assignInWith({}, options, settings, assignInDefaults);
	
	      var imports = assignInWith({}, options.imports, settings.imports, assignInDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);
	
	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";
	
	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');
	
	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';
	
	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);
	
	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
	
	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;
	
	        // The JS engine embedded in Adobe products needs `match` returned in
	        // order to produce the correct `offset` value.
	        return match;
	      });
	
	      source += "';\n";
	
	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');
	
	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';
	
	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source)
	          .apply(undefined, importsValues);
	      });
	
	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }
	
	    /**
	     * Converts `string`, as a whole, to lower case just like
	     * [String#toLowerCase](https://mdn.io/toLowerCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.toLower('--Foo-Bar--');
	     * // => '--foo-bar--'
	     *
	     * _.toLower('fooBar');
	     * // => 'foobar'
	     *
	     * _.toLower('__FOO_BAR__');
	     * // => '__foo_bar__'
	     */
	    function toLower(value) {
	      return toString(value).toLowerCase();
	    }
	
	    /**
	     * Converts `string`, as a whole, to upper case just like
	     * [String#toUpperCase](https://mdn.io/toUpperCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.toUpper('--foo-bar--');
	     * // => '--FOO-BAR--'
	     *
	     * _.toUpper('fooBar');
	     * // => 'FOOBAR'
	     *
	     * _.toUpper('__foo_bar__');
	     * // => '__FOO_BAR__'
	     */
	    function toUpper(value) {
	      return toString(value).toUpperCase();
	    }
	
	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      string = toString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard || chars === undefined) {
	        return string.replace(reTrim, '');
	      }
	      chars = (chars + '');
	      if (!chars) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          chrSymbols = stringToArray(chars);
	
	      return strSymbols
	        .slice(charsStartIndex(strSymbols, chrSymbols), charsEndIndex(strSymbols, chrSymbols) + 1)
	        .join('');
	    }
	
	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimEnd('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimEnd('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimEnd(string, chars, guard) {
	      string = toString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard || chars === undefined) {
	        return string.replace(reTrimEnd, '');
	      }
	      chars = (chars + '');
	      if (!chars) {
	        return string;
	      }
	      var strSymbols = stringToArray(string);
	      return strSymbols
	        .slice(0, charsEndIndex(strSymbols, stringToArray(chars)) + 1)
	        .join('');
	    }
	
	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimStart('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimStart('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimStart(string, chars, guard) {
	      string = toString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard || chars === undefined) {
	        return string.replace(reTrimStart, '');
	      }
	      chars = (chars + '');
	      if (!chars) {
	        return string;
	      }
	      var strSymbols = stringToArray(string);
	      return strSymbols
	        .slice(charsStartIndex(strSymbols, stringToArray(chars)))
	        .join('');
	    }
	
	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object} [options={}] The options object.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.truncate('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function truncate(string, options) {
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;
	
	      if (isObject(options)) {
	        var separator = 'separator' in options ? options.separator : separator;
	        length = 'length' in options ? toInteger(options.length) : length;
	        omission = 'omission' in options ? toString(options.omission) : omission;
	      }
	      string = toString(string);
	
	      var strLength = string.length;
	      if (reHasComplexSymbol.test(string)) {
	        var strSymbols = stringToArray(string);
	        strLength = strSymbols.length;
	      }
	      if (length >= strLength) {
	        return string;
	      }
	      var end = length - stringSize(omission);
	      if (end < 1) {
	        return omission;
	      }
	      var result = strSymbols
	        ? strSymbols.slice(0, end).join('')
	        : string.slice(0, end);
	
	      if (separator === undefined) {
	        return result + omission;
	      }
	      if (strSymbols) {
	        end += (result.length - end);
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              substring = result;
	
	          if (!separator.global) {
	            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            var newEnd = match.index;
	          }
	          result = result.slice(0, newEnd === undefined ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }
	
	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to
	     * their corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional
	     * HTML entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.6.0
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = toString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }
	
	    /**
	     * Converts `string`, as space separated words, to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.upperCase('--foo-bar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('fooBar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('__foo_bar__');
	     * // => 'FOO BAR'
	     */
	    var upperCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + word.toUpperCase();
	    });
	
	    /**
	     * Converts the first character of `string` to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.upperFirst('fred');
	     * // => 'Fred'
	     *
	     * _.upperFirst('FRED');
	     * // => 'FRED'
	     */
	    var upperFirst = createCaseFirst('toUpperCase');
	
	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      string = toString(string);
	      pattern = guard ? undefined : pattern;
	
	      if (pattern === undefined) {
	        pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord;
	      }
	      return string.match(pattern) || [];
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Function} func The function to attempt.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // Avoid throwing errors for invalid selectors.
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = rest(function(func, args) {
	      try {
	        return apply(func, undefined, args);
	      } catch (e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });
	
	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method.
	     *
	     * **Note:** This method doesn't set the "length" property of bound functions.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} methodNames The object method names to bind,
	     *  specified individually or in arrays.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view, 'onClick');
	     * jQuery(element).on('click', view.onClick);
	     * // => Logs 'clicked docs' when clicked.
	     */
	    var bindAll = rest(function(object, methodNames) {
	      arrayEach(baseFlatten(methodNames, 1), function(key) {
	        object[key] = bind(object[key], object);
	      });
	      return object;
	    });
	
	    /**
	     * Creates a function that iterates over `pairs` invoking the corresponding
	     * function of the first predicate to return truthy. The predicate-function
	     * pairs are invoked with the `this` binding and arguments of the created
	     * function.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Array} pairs The predicate-function pairs.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.cond([
	     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
	     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
	     *   [_.constant(true),                _.constant('no match')]
	     * ]);
	     *
	     * func({ 'a': 1, 'b': 2 });
	     * // => 'matches A'
	     *
	     * func({ 'a': 0, 'b': 1 });
	     * // => 'matches B'
	     *
	     * func({ 'a': '1', 'b': '2' });
	     * // => 'no match'
	     */
	    function cond(pairs) {
	      var length = pairs ? pairs.length : 0,
	          toIteratee = getIteratee();
	
	      pairs = !length ? [] : arrayMap(pairs, function(pair) {
	        if (typeof pair[1] != 'function') {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	        return [toIteratee(pair[0]), pair[1]];
	      });
	
	      return rest(function(args) {
	        var index = -1;
	        while (++index < length) {
	          var pair = pairs[index];
	          if (apply(pair[0], this, args)) {
	            return apply(pair[1], this, args);
	          }
	        }
	      });
	    }
	
	    /**
	     * Creates a function that invokes the predicate properties of `source` with
	     * the corresponding property values of a given object, returning `true` if
	     * all predicates return truthy, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.filter(users, _.conforms({ 'age': _.partial(_.gt, _, 38) }));
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function conforms(source) {
	      return baseConforms(baseClone(source, true));
	    }
	
	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }
	
	    /**
	     * Creates a function that returns the result of invoking the given functions
	     * with the `this` binding of the created function, where each successive
	     * invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();
	
	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the given functions from right to left.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);
	
	    /**
	     * This method returns the first argument given to it.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }
	
	    /**
	     * Creates a function that invokes `func` with the arguments of the created
	     * function. If `func` is a property name the created function returns the
	     * property value for a given element. If `func` is an array or object the
	     * created function returns `true` for elements that contain the equivalent
	     * source properties, otherwise it returns `false`.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Util
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, _.iteratee(['user', 'fred']));
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, _.iteratee('user'));
	     * // => ['barney', 'fred']
	     *
	     * // Create custom iteratee shorthands.
	     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	     *     return func.test(string);
	     *   };
	     * });
	     *
	     * _.filter(['abc', 'def'], /ef/);
	     * // => ['def']
	     */
	    function iteratee(func) {
	      return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
	    }
	
	    /**
	     * Creates a function that performs a partial deep comparison between a given
	     * object and `source`, returning `true` if the given object has equivalent
	     * property values, else `false`. The created function is equivalent to
	     * `_.isMatch` with a `source` partially applied.
	     *
	     * **Note:** This method supports comparing the same values as `_.isEqual`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }
	
	    /**
	     * Creates a function that performs a partial deep comparison between the
	     * value at `path` of a given object to `srcValue`, returning `true` if the
	     * object value is equivalent, else `false`.
	     *
	     * **Note:** This method supports comparing the same values as `_.isEqual`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }
	
	    /**
	     * Creates a function that invokes the method at `path` of a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.map(objects, _.method(['a', 'b', 'c']));
	     * // => [2, 1]
	     */
	    var method = rest(function(path, args) {
	      return function(object) {
	        return baseInvoke(object, path, args);
	      };
	    });
	
	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path of `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = rest(function(object, args) {
	      return function(path) {
	        return baseInvoke(object, path, args);
	      };
	    });
	
	    /**
	     * Adds all own enumerable string keyed function properties of a source
	     * object to the destination object. If `object` is a function then methods
	     * are added to its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      var props = keys(source),
	          methodNames = baseFunctions(source, props);
	
	      if (options == null &&
	          !(isObject(source) && (methodNames.length || !props.length))) {
	        options = source;
	        source = object;
	        object = this;
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = (isObject(options) && 'chain' in options) ? options.chain : true,
	          isFunc = isFunction(object);
	
	      arrayEach(methodNames, function(methodName) {
	        var func = source[methodName];
	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = function() {
	            var chainAll = this.__chain__;
	            if (chain || chainAll) {
	              var result = object(this.__wrapped__),
	                  actions = result.__actions__ = copyArray(this.__actions__);
	
	              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	              result.__chain__ = chainAll;
	              return result;
	            }
	            return func.apply(object, arrayPush([this.value()], arguments));
	          };
	        }
	      });
	
	      return object;
	    }
	
	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      if (root._ === this) {
	        root._ = oldDash;
	      }
	      return this;
	    }
	
	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Util
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }
	
	    /**
	     * Creates a function that returns its nth argument.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [n=0] The index of the argument to return.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.nthArg(1);
	     *
	     * func('a', 'b', 'c');
	     * // => 'b'
	     */
	    function nthArg(n) {
	      n = toInteger(n);
	      return function() {
	        return arguments[n];
	      };
	    }
	
	    /**
	     * Creates a function that invokes `iteratees` with the arguments provided
	     * to the created function and returns their results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} iteratees The iteratees to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.over(Math.max, Math.min);
	     *
	     * func(1, 2, 3, 4);
	     * // => [4, 1]
	     */
	    var over = createOver(arrayMap);
	
	    /**
	     * Creates a function that checks if **all** of the `predicates` return
	     * truthy when invoked with the arguments provided to the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} predicates The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overEvery(Boolean, isFinite);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => false
	     *
	     * func(NaN);
	     * // => false
	     */
	    var overEvery = createOver(arrayEvery);
	
	    /**
	     * Creates a function that checks if **any** of the `predicates` return
	     * truthy when invoked with the arguments provided to the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} predicates The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overSome(Boolean, isFinite);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => true
	     *
	     * func(NaN);
	     * // => false
	     */
	    var overSome = createOver(arraySome);
	
	    /**
	     * Creates a function that returns the value at `path` of a given object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.map(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }
	
	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the value at a given path of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return object == null ? undefined : baseGet(object, path);
	      };
	    }
	
	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	     * `start` is specified without an `end` or `step`. If `end` is not specified
	     * it's set to `start` with `start` then set to `0`.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(-4);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    var range = createRange();
	
	    /**
	     * This method is like `_.range` except that it populates values in
	     * descending order.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.rangeRight(4);
	     * // => [3, 2, 1, 0]
	     *
	     * _.rangeRight(-4);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 5);
	     * // => [4, 3, 2, 1]
	     *
	     * _.rangeRight(0, 20, 5);
	     * // => [15, 10, 5, 0]
	     *
	     * _.rangeRight(0, -4, -1);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.rangeRight(0);
	     * // => []
	     */
	    var rangeRight = createRange(true);
	
	    /**
	     * Invokes the iteratee `n` times, returning an array of the results of
	     * each invocation. The iteratee is invoked with one argument; (index).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.times(3, String);
	     * // => ['0', '1', '2']
	     *
	     *  _.times(4, _.constant(true));
	     * // => [true, true, true, true]
	     */
	    function times(n, iteratee) {
	      n = toInteger(n);
	      if (n < 1 || n > MAX_SAFE_INTEGER) {
	        return [];
	      }
	      var index = MAX_ARRAY_LENGTH,
	          length = nativeMin(n, MAX_ARRAY_LENGTH);
	
	      iteratee = getIteratee(iteratee);
	      n -= MAX_ARRAY_LENGTH;
	
	      var result = baseTimes(length, iteratee);
	      while (++index < n) {
	        iteratee(index);
	      }
	      return result;
	    }
	
	    /**
	     * Converts `value` to a property path array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the new property path array.
	     * @example
	     *
	     * _.toPath('a.b.c');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toPath('a[0].b.c');
	     * // => ['a', '0', 'b', 'c']
	     *
	     * var path = ['a', 'b', 'c'],
	     *     newPath = _.toPath(path);
	     *
	     * console.log(newPath);
	     * // => ['a', 'b', 'c']
	     *
	     * console.log(path === newPath);
	     * // => false
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return arrayMap(value, baseCastKey);
	      }
	      return isSymbol(value) ? [value] : copyArray(stringToPath(value));
	    }
	
	    /**
	     * Generates a unique ID. If `prefix` is given the ID is appended to it.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {string} [prefix=''] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return toString(prefix) + id;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {number} augend The first number in an addition.
	     * @param {number} addend The second number in an addition.
	     * @returns {number} Returns the total.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    var add = createMathOperation(function(augend, addend) {
	      return augend + addend;
	    });
	
	    /**
	     * Computes `number` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');
	
	    /**
	     * Divide two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} dividend The first number in a division.
	     * @param {number} divisor The second number in a division.
	     * @returns {number} Returns the quotient.
	     * @example
	     *
	     * _.divide(6, 4);
	     * // => 1.5
	     */
	    var divide = createMathOperation(function(dividend, divisor) {
	      return dividend / divisor;
	    });
	
	    /**
	     * Computes `number` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');
	
	    /**
	     * Computes the maximum value of `array`. If `array` is empty or falsey
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => undefined
	     */
	    function max(array) {
	      return (array && array.length)
	        ? baseExtremum(array, identity, gt)
	        : undefined;
	    }
	
	    /**
	     * This method is like `_.max` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.maxBy(objects, function(o) { return o.n; });
	     * // => { 'n': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.maxBy(objects, 'n');
	     * // => { 'n': 2 }
	     */
	    function maxBy(array, iteratee) {
	      return (array && array.length)
	        ? baseExtremum(array, getIteratee(iteratee), gt)
	        : undefined;
	    }
	
	    /**
	     * Computes the mean of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * _.mean([4, 2, 8, 6]);
	     * // => 5
	     */
	    function mean(array) {
	      return baseMean(array, identity);
	    }
	
	    /**
	     * This method is like `_.mean` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be averaged.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.meanBy(objects, function(o) { return o.n; });
	     * // => 5
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.meanBy(objects, 'n');
	     * // => 5
	     */
	    function meanBy(array, iteratee) {
	      return baseMean(array, getIteratee(iteratee));
	    }
	
	    /**
	     * Computes the minimum value of `array`. If `array` is empty or falsey
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => undefined
	     */
	    function min(array) {
	      return (array && array.length)
	        ? baseExtremum(array, identity, lt)
	        : undefined;
	    }
	
	    /**
	     * This method is like `_.min` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.minBy(objects, function(o) { return o.n; });
	     * // => { 'n': 1 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.minBy(objects, 'n');
	     * // => { 'n': 1 }
	     */
	    function minBy(array, iteratee) {
	      return (array && array.length)
	        ? baseExtremum(array, getIteratee(iteratee), lt)
	        : undefined;
	    }
	
	    /**
	     * Multiply two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} multiplier The first number in a multiplication.
	     * @param {number} multiplicand The second number in a multiplication.
	     * @returns {number} Returns the product.
	     * @example
	     *
	     * _.multiply(6, 4);
	     * // => 24
	     */
	    var multiply = createMathOperation(function(multiplier, multiplicand) {
	      return multiplier * multiplicand;
	    });
	
	    /**
	     * Computes `number` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');
	
	    /**
	     * Subtract two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {number} minuend The first number in a subtraction.
	     * @param {number} subtrahend The second number in a subtraction.
	     * @returns {number} Returns the difference.
	     * @example
	     *
	     * _.subtract(6, 4);
	     * // => 2
	     */
	    var subtract = createMathOperation(function(minuend, subtrahend) {
	      return minuend - subtrahend;
	    });
	
	    /**
	     * Computes the sum of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 2, 8, 6]);
	     * // => 20
	     */
	    function sum(array) {
	      return (array && array.length)
	        ? baseSum(array, identity)
	        : 0;
	    }
	
	    /**
	     * This method is like `_.sum` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be summed.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Array|Function|Object|string} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.sumBy(objects, function(o) { return o.n; });
	     * // => 20
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sumBy(objects, 'n');
	     * // => 20
	     */
	    function sumBy(array, iteratee) {
	      return (array && array.length)
	        ? baseSum(array, getIteratee(iteratee))
	        : 0;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    // Add methods that return wrapped values in chain sequences.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.assignIn = assignIn;
	    lodash.assignInWith = assignInWith;
	    lodash.assignWith = assignWith;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.castArray = castArray;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.concat = concat;
	    lodash.cond = cond;
	    lodash.conforms = conforms;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.differenceBy = differenceBy;
	    lodash.differenceWith = differenceWith;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatMap = flatMap;
	    lodash.flatMapDeep = flatMapDeep;
	    lodash.flatMapDepth = flatMapDepth;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flattenDepth = flattenDepth;
	    lodash.flip = flip;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.fromPairs = fromPairs;
	    lodash.functions = functions;
	    lodash.functionsIn = functionsIn;
	    lodash.groupBy = groupBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.intersectionBy = intersectionBy;
	    lodash.intersectionWith = intersectionWith;
	    lodash.invert = invert;
	    lodash.invertBy = invertBy;
	    lodash.invokeMap = invokeMap;
	    lodash.iteratee = iteratee;
	    lodash.keyBy = keyBy;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.mergeWith = mergeWith;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.negate = negate;
	    lodash.nthArg = nthArg;
	    lodash.omit = omit;
	    lodash.omitBy = omitBy;
	    lodash.once = once;
	    lodash.orderBy = orderBy;
	    lodash.over = over;
	    lodash.overArgs = overArgs;
	    lodash.overEvery = overEvery;
	    lodash.overSome = overSome;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pickBy = pickBy;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAll = pullAll;
	    lodash.pullAllBy = pullAllBy;
	    lodash.pullAllWith = pullAllWith;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rangeRight = rangeRight;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.reverse = reverse;
	    lodash.sampleSize = sampleSize;
	    lodash.set = set;
	    lodash.setWith = setWith;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortedUniq = sortedUniq;
	    lodash.sortedUniqBy = sortedUniqBy;
	    lodash.split = split;
	    lodash.spread = spread;
	    lodash.tail = tail;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.toArray = toArray;
	    lodash.toPairs = toPairs;
	    lodash.toPairsIn = toPairsIn;
	    lodash.toPath = toPath;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.unary = unary;
	    lodash.union = union;
	    lodash.unionBy = unionBy;
	    lodash.unionWith = unionWith;
	    lodash.uniq = uniq;
	    lodash.uniqBy = uniqBy;
	    lodash.uniqWith = uniqWith;
	    lodash.unset = unset;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.update = update;
	    lodash.updateWith = updateWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.without = without;
	    lodash.words = words;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.xorBy = xorBy;
	    lodash.xorWith = xorWith;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipObjectDeep = zipObjectDeep;
	    lodash.zipWith = zipWith;
	
	    // Add aliases.
	    lodash.entries = toPairs;
	    lodash.entriesIn = toPairsIn;
	    lodash.extend = assignIn;
	    lodash.extendWith = assignInWith;
	
	    // Add methods to `lodash.prototype`.
	    mixin(lodash, lodash);
	
	    /*------------------------------------------------------------------------*/
	
	    // Add methods that return unwrapped values in chain sequences.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clamp = clamp;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.cloneDeepWith = cloneDeepWith;
	    lodash.cloneWith = cloneWith;
	    lodash.deburr = deburr;
	    lodash.divide = divide;
	    lodash.endsWith = endsWith;
	    lodash.eq = eq;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.floor = floor;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.hasIn = hasIn;
	    lodash.head = head;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.invoke = invoke;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isArrayBuffer = isArrayBuffer;
	    lodash.isArrayLike = isArrayLike;
	    lodash.isArrayLikeObject = isArrayLikeObject;
	    lodash.isBoolean = isBoolean;
	    lodash.isBuffer = isBuffer;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isEqualWith = isEqualWith;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isInteger = isInteger;
	    lodash.isLength = isLength;
	    lodash.isMap = isMap;
	    lodash.isMatch = isMatch;
	    lodash.isMatchWith = isMatchWith;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNil = isNil;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isObjectLike = isObjectLike;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isSafeInteger = isSafeInteger;
	    lodash.isSet = isSet;
	    lodash.isString = isString;
	    lodash.isSymbol = isSymbol;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.isWeakMap = isWeakMap;
	    lodash.isWeakSet = isWeakSet;
	    lodash.join = join;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lowerCase = lowerCase;
	    lodash.lowerFirst = lowerFirst;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.maxBy = maxBy;
	    lodash.mean = mean;
	    lodash.meanBy = meanBy;
	    lodash.min = min;
	    lodash.minBy = minBy;
	    lodash.multiply = multiply;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padEnd = padEnd;
	    lodash.padStart = padStart;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.replace = replace;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.sample = sample;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedIndexBy = sortedIndexBy;
	    lodash.sortedIndexOf = sortedIndexOf;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.sortedLastIndexBy = sortedLastIndexBy;
	    lodash.sortedLastIndexOf = sortedLastIndexOf;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.subtract = subtract;
	    lodash.sum = sum;
	    lodash.sumBy = sumBy;
	    lodash.template = template;
	    lodash.times = times;
	    lodash.toInteger = toInteger;
	    lodash.toLength = toLength;
	    lodash.toLower = toLower;
	    lodash.toNumber = toNumber;
	    lodash.toSafeInteger = toSafeInteger;
	    lodash.toString = toString;
	    lodash.toUpper = toUpper;
	    lodash.trim = trim;
	    lodash.trimEnd = trimEnd;
	    lodash.trimStart = trimStart;
	    lodash.truncate = truncate;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.upperCase = upperCase;
	    lodash.upperFirst = upperFirst;
	
	    // Add aliases.
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.first = head;
	
	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), { 'chain': false });
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type {string}
	     */
	    lodash.VERSION = VERSION;
	
	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });
	
	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
	
	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(n, result.__takeCount__);
	        } else {
	          result.__views__.push({
	            'size': nativeMin(n, MAX_ARRAY_LENGTH),
	            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
	          });
	        }
	        return result;
	      };
	
	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });
	
	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
	
	      LazyWrapper.prototype[methodName] = function(iteratee) {
	        var result = this.clone();
	        result.__iteratees__.push({
	          'iteratee': getIteratee(iteratee, 3),
	          'type': type
	        });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.head` and `_.last`.
	    arrayEach(['head', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');
	
	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
	    arrayEach(['initial', 'tail'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');
	
	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });
	
	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };
	
	    LazyWrapper.prototype.find = function(predicate) {
	      return this.filter(predicate).head();
	    };
	
	    LazyWrapper.prototype.findLast = function(predicate) {
	      return this.reverse().find(predicate);
	    };
	
	    LazyWrapper.prototype.invokeMap = rest(function(path, args) {
	      if (typeof path == 'function') {
	        return new LazyWrapper(this);
	      }
	      return this.map(function(value) {
	        return baseInvoke(value, path, args);
	      });
	    });
	
	    LazyWrapper.prototype.reject = function(predicate) {
	      predicate = getIteratee(predicate, 3);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };
	
	    LazyWrapper.prototype.slice = function(start, end) {
	      start = toInteger(start);
	
	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = toInteger(end);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };
	
	    LazyWrapper.prototype.takeRightWhile = function(predicate) {
	      return this.reverse().takeWhile(predicate).reverse();
	    };
	
	    LazyWrapper.prototype.toArray = function() {
	      return this.take(MAX_ARRAY_LENGTH);
	    };
	
	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
	          isTaker = /^(?:head|last)$/.test(methodName),
	          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
	          retUnwrapped = isTaker || /^find/.test(methodName);
	
	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var value = this.__wrapped__,
	            args = isTaker ? [1] : arguments,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);
	
	        var interceptor = function(value) {
	          var result = lodashFunc.apply(lodash, arrayPush([value], args));
	          return (isTaker && chainAll) ? result[0] : result;
	        };
	
	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var chainAll = this.__chain__,
	            isHybrid = !!this.__actions__.length,
	            isUnwrapped = retUnwrapped && !chainAll,
	            onlyLazy = isLazy && !isHybrid;
	
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	          return new LodashWrapper(result, chainAll);
	        }
	        if (isUnwrapped && onlyLazy) {
	          return func.apply(this, args);
	        }
	        result = this.thru(interceptor);
	        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
	      };
	    });
	
	    // Add `Array` methods to `lodash.prototype`.
	    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
	      var func = arrayProto[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:pop|shift)$/.test(methodName);
	
	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          var value = this.value();
	          return func.apply(isArray(value) ? value : [], args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(isArray(value) ? value : [], args);
	        });
	      };
	    });
	
	    // Map minified method names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = (lodashFunc.name + ''),
	            names = realNames[key] || (realNames[key] = []);
	
	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });
	
	    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{
	      'name': 'wrapper',
	      'func': undefined
	    }];
	
	    // Add methods to `LazyWrapper`.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;
	
	    // Add chain sequence methods to the `lodash` wrapper.
	    lodash.prototype.at = wrapperAt;
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.next = wrapperNext;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
	
	    if (iteratorSymbol) {
	      lodash.prototype[iteratorSymbol] = wrapperToIterator;
	    }
	    return lodash;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  // Export lodash.
	  var _ = runInContext();
	
	  // Expose lodash on the free variable `window` or `self` when available. This
	  // prevents errors in cases where lodash is loaded by a script tag in the presence
	  // of an AMD loader. See http://requirejs.org/docs/errors.html#mismatch for more details.
	  (freeWindow || freeSelf || {})._ = _;
	
	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for CommonJS support.
	    freeExports._ = _;
	  }
	  else {
	    // Export to the global object.
	    root._ = _;
	  }
	}.call(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)(module), (function() { return this; }())))

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _state = __webpack_require__(4);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _reactRouter = __webpack_require__(14);
	
	var _baobabReact = __webpack_require__(15);
	
	var _baobabReact2 = _interopRequireDefault(_baobabReact);
	
	var _config = __webpack_require__(23);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var root = _baobabReact2.default.decorators.root;
	var branch = _baobabReact2.default.decorators.branch;
	
	var Opportunities = (_dec = branch({
	  cursors: {
	    opportunities: ['opportunities']
	  }
	}), _dec(_class = function (_React$Component) {
	  _inherits(Opportunities, _React$Component);
	
	  function Opportunities() {
	    _classCallCheck(this, Opportunities);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Opportunities).apply(this, arguments));
	  }
	
	  _createClass(Opportunities, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var db = new Firebase(_config2.default.firebaseURL + '/items/');
	      db.on("child_added", function (child) {
	        _state2.default.select('opportunities').push(_extends({
	          key: child.key()
	        }, child.val()));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page opportunities' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.props.opportunities.map(function (val) {
	            return _react2.default.createElement(
	              'li',
	              { key: val.key },
	              val.image && _react2.default.createElement('img', { src: val.image }),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/view/' + val.key },
	                val.name,
	                ' - ',
	                val.company
	              ),
	              '  ',
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/edit/' + val.key },
	                'edit'
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Opportunities;
	}(_react2.default.Component)) || _class);
	exports.default = Opportunities;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Navigation = function (_React$Component) {
	  _inherits(Navigation, _React$Component);
	
	  function Navigation() {
	    _classCallCheck(this, Navigation);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Navigation).apply(this, arguments));
	  }
	
	  _createClass(Navigation, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'nav',
	          { className: 'navbar navbar-default navbar-static-top navbar-inverse' },
	          _react2.default.createElement(
	            'ul',
	            null,
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: 'btn btn-default btn-sm', to: '/add' },
	                'Add'
	              )
	            )
	          )
	        ),
	        this.props.children
	      );
	    }
	  }]);
	
	  return Navigation;
	}(_react2.default.Component);
	
	exports.default = Navigation;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _firebase = __webpack_require__(29);
	
	var _firebase2 = _interopRequireDefault(_firebase);
	
	var _state = __webpack_require__(4);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _config = __webpack_require__(23);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var db = new _firebase2.default(_config2.default.firebaseURL + '/items/');
	db.on("child_added", function (child) {
	    _state2.default.select('opportunities').set(child.key(), child.val());
	});

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = Firebase;

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  background: #e2e2e2;\n}\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\nh3 {\n  font-size: 20px;\n}\n.navbar {\n  padding: 10px;\n}\n.page {\n  margin: 0 30px;\n  padding: 10px;\n}\n.opportunity {\n  background: white;\n}\n.opportunity img {\n  max-width: 100px;\n  max-height: 100px;\n}\n.opportunityAddEdit {\n  background: white;\n}\n.opportunityAddEdit img {\n  max-width: 100px;\n  max-height: 100px;\n}\n.opportunities li {\n  margin: 3px;\n  padding: 10px;\n  background: white;\n}\n.opportunities li img {\n  padding-right: 5px;\n}\n.opportunities li label {\n  width: 150px;\n}\n.opportunities img {\n  max-width: 50px;\n  max-height: 50px;\n}\n", ""]);
	
	// exports


/***/ },
/* 33 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _state = __webpack_require__(4);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _config = __webpack_require__(23);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ItemActions = function () {
	  function ItemActions() {
	    _classCallCheck(this, ItemActions);
	  }
	
	  _createClass(ItemActions, [{
	    key: 'addOpportunity',
	    value: function addOpportunity(data) {
	      var db = new Firebase(_config2.default.firebaseURL + '/items/');
	      db.push(data);
	    }
	  }, {
	    key: 'selectOpportunity',
	    value: function selectOpportunity(key) {
	      this.resetSelected();
	
	      var db = new Firebase(_config2.default.firebaseURL + '/items/' + key);
	      db.once('value', function (child) {
	        _state2.default.select('selected').set(_extends({
	          key: child.key()
	        }, child.val()));
	      });
	    }
	  }, {
	    key: 'updateOpportunity',
	    value: function updateOpportunity(key, data) {
	      var db = new Firebase(_config2.default.firebaseURL + '/items/' + key);
	      db.update(data);
	    }
	  }, {
	    key: 'modifySelectedField',
	    value: function modifySelectedField(key, val) {
	      _state2.default.select('selected', key).set(val);
	    }
	  }, {
	    key: 'resetSelected',
	    value: function resetSelected() {
	      _state2.default.select('selected').set({});
	    }
	  }]);
	
	  return ItemActions;
	}();
	
	exports.default = new ItemActions();

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map