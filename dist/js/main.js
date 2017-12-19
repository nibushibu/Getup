/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* Riot v3.7.4, @license MIT */
(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.riot = {})));
}(this, (function (exports) { 'use strict';

var __TAGS_CACHE = [];
var __TAG_IMPL = {};
var YIELD_TAG = 'yield';
var GLOBAL_MIXIN = '__global_mixin';
var ATTRS_PREFIX = 'riot-';
var REF_DIRECTIVES = ['ref', 'data-ref'];
var IS_DIRECTIVE = 'data-is';
var CONDITIONAL_DIRECTIVE = 'if';
var LOOP_DIRECTIVE = 'each';
var LOOP_NO_REORDER_DIRECTIVE = 'no-reorder';
var SHOW_DIRECTIVE = 'show';
var HIDE_DIRECTIVE = 'hide';
var KEY_DIRECTIVE = 'key';
var RIOT_EVENTS_KEY = '__riot-events__';
var T_STRING = 'string';
var T_OBJECT = 'object';
var T_UNDEF  = 'undefined';
var T_FUNCTION = 'function';
var XLINK_NS = 'http://www.w3.org/1999/xlink';
var SVG_NS = 'http://www.w3.org/2000/svg';
var XLINK_REGEX = /^xlink:(\w+)/;
var WIN = typeof window === T_UNDEF ? undefined : window;
var RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/;
var RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;
var RE_EVENTS_PREFIX = /^on/;
var RE_HTML_ATTRS = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;
var CASE_SENSITIVE_ATTRIBUTES = {
    'viewbox': 'viewBox',
    'preserveaspectratio': 'preserveAspectRatio'
  };
var RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/;
var IE_VERSION = (WIN && WIN.document || {}).documentMode | 0;

/**
 * Shorter and fast way to select multiple nodes in the DOM
 * @param   { String } selector - DOM selector
 * @param   { Object } ctx - DOM node where the targets of our search will is located
 * @returns { Object } dom nodes found
 */
function $$(selector, ctx) {
  return [].slice.call((ctx || document).querySelectorAll(selector))
}

/**
 * Shorter and fast way to select a single node in the DOM
 * @param   { String } selector - unique dom selector
 * @param   { Object } ctx - DOM node where the target of our search will is located
 * @returns { Object } dom node found
 */
function $(selector, ctx) {
  return (ctx || document).querySelector(selector)
}

/**
 * Create a document fragment
 * @returns { Object } document fragment
 */
function createFrag() {
  return document.createDocumentFragment()
}

/**
 * Create a document text node
 * @returns { Object } create a text node to use as placeholder
 */
function createDOMPlaceholder() {
  return document.createTextNode('')
}

/**
 * Check if a DOM node is an svg tag or part of an svg
 * @param   { HTMLElement }  el - node we want to test
 * @returns {Boolean} true if it's an svg node
 */
function isSvg(el) {
  var owner = el.ownerSVGElement;
  return !!owner || owner === null
}

/**
 * Create a generic DOM node
 * @param   { String } name - name of the DOM node we want to create
 * @returns { Object } DOM node just created
 */
function mkEl(name) {
  return name === 'svg' ? document.createElementNS(SVG_NS, name) : document.createElement(name)
}

/**
 * Set the inner html of any DOM node SVGs included
 * @param { Object } container - DOM node where we'll inject new html
 * @param { String } html - html to inject
 * @param { Boolean } isSvg - svg tags should be treated a bit differently
 */
/* istanbul ignore next */
function setInnerHTML(container, html, isSvg) {
  // innerHTML is not supported on svg tags so we neet to treat them differently
  if (isSvg) {
    var node = container.ownerDocument.importNode(
      new DOMParser()
        .parseFromString(("<svg xmlns=\"" + SVG_NS + "\">" + html + "</svg>"), 'application/xml')
        .documentElement,
      true
    );

    container.appendChild(node);
  } else {
    container.innerHTML = html;
  }
}

/**
 * Toggle the visibility of any DOM node
 * @param   { Object }  dom - DOM node we want to hide
 * @param   { Boolean } show - do we want to show it?
 */

function toggleVisibility(dom, show) {
  dom.style.display = show ? '' : 'none';
  dom.hidden = show ? false : true;
}

/**
 * Remove any DOM attribute from a node
 * @param   { Object } dom - DOM node we want to update
 * @param   { String } name - name of the property we want to remove
 */
function remAttr(dom, name) {
  dom.removeAttribute(name);
}

/**
 * Convert a style object to a string
 * @param   { Object } style - style object we need to parse
 * @returns { String } resulting css string
 * @example
 * styleObjectToString({ color: 'red', height: '10px'}) // => 'color: red; height: 10px'
 */
function styleObjectToString(style) {
  return Object.keys(style).reduce(function (acc, prop) {
    return (acc + " " + prop + ": " + (style[prop]) + ";")
  }, '')
}

/**
 * Get the value of any DOM attribute on a node
 * @param   { Object } dom - DOM node we want to parse
 * @param   { String } name - name of the attribute we want to get
 * @returns { String | undefined } name of the node attribute whether it exists
 */
function getAttr(dom, name) {
  return dom.getAttribute(name)
}

/**
 * Set any DOM attribute
 * @param { Object } dom - DOM node we want to update
 * @param { String } name - name of the property we want to set
 * @param { String } val - value of the property we want to set
 */
function setAttr(dom, name, val) {
  var xlink = XLINK_REGEX.exec(name);
  if (xlink && xlink[1])
    { dom.setAttributeNS(XLINK_NS, xlink[1], val); }
  else
    { dom.setAttribute(name, val); }
}

/**
 * Insert safely a tag to fix #1962 #1649
 * @param   { HTMLElement } root - children container
 * @param   { HTMLElement } curr - node to insert
 * @param   { HTMLElement } next - node that should preceed the current node inserted
 */
function safeInsert(root, curr, next) {
  root.insertBefore(curr, next.parentNode && next);
}

/**
 * Minimize risk: only zero or one _space_ between attr & value
 * @param   { String }   html - html string we want to parse
 * @param   { Function } fn - callback function to apply on any attribute found
 */
function walkAttrs(html, fn) {
  if (!html) { return }
  var m;
  while (m = RE_HTML_ATTRS.exec(html))
    { fn(m[1].toLowerCase(), m[2] || m[3] || m[4]); }
}

/**
 * Walk down recursively all the children tags starting dom node
 * @param   { Object }   dom - starting node where we will start the recursion
 * @param   { Function } fn - callback to transform the child node just found
 * @param   { Object }   context - fn can optionally return an object, which is passed to children
 */
function walkNodes(dom, fn, context) {
  if (dom) {
    var res = fn(dom, context);
    var next;
    // stop the recursion
    if (res === false) { return }

    dom = dom.firstChild;

    while (dom) {
      next = dom.nextSibling;
      walkNodes(dom, fn, res);
      dom = next;
    }
  }
}

var dom = Object.freeze({
	$$: $$,
	$: $,
	createFrag: createFrag,
	createDOMPlaceholder: createDOMPlaceholder,
	isSvg: isSvg,
	mkEl: mkEl,
	setInnerHTML: setInnerHTML,
	toggleVisibility: toggleVisibility,
	remAttr: remAttr,
	styleObjectToString: styleObjectToString,
	getAttr: getAttr,
	setAttr: setAttr,
	safeInsert: safeInsert,
	walkAttrs: walkAttrs,
	walkNodes: walkNodes
});

var styleNode;
// Create cache and shortcut to the correct property
var cssTextProp;
var byName = {};
var remainder = [];
var needsInject = false;

// skip the following code on the server
if (WIN) {
  styleNode = ((function () {
    // create a new style element with the correct type
    var newNode = mkEl('style');
    // replace any user node or insert the new one into the head
    var userNode = $('style[type=riot]');

    setAttr(newNode, 'type', 'text/css');
    /* istanbul ignore next */
    if (userNode) {
      if (userNode.id) { newNode.id = userNode.id; }
      userNode.parentNode.replaceChild(newNode, userNode);
    } else { document.head.appendChild(newNode); }

    return newNode
  }))();
  cssTextProp = styleNode.styleSheet;
}

/**
 * Object that will be used to inject and manage the css of every tag instance
 */
var styleManager = {
  styleNode: styleNode,
  /**
   * Save a tag style to be later injected into DOM
   * @param { String } css - css string
   * @param { String } name - if it's passed we will map the css to a tagname
   */
  add: function add(css, name) {
    if (name) { byName[name] = css; }
    else { remainder.push(css); }
    needsInject = true;
  },
  /**
   * Inject all previously saved tag styles into DOM
   * innerHTML seems slow: http://jsperf.com/riot-insert-style
   */
  inject: function inject() {
    if (!WIN || !needsInject) { return }
    needsInject = false;
    var style = Object.keys(byName)
      .map(function (k) { return byName[k]; })
      .concat(remainder).join('\n');
    /* istanbul ignore next */
    if (cssTextProp) { cssTextProp.cssText = style; }
    else { styleNode.innerHTML = style; }
  }
};

/**
 * The riot template engine
 * @version v3.0.8
 */

var skipRegex = (function () { //eslint-disable-line no-unused-vars

  var beforeReChars = '[{(,;:?=|&!^~>%*/';

  var beforeReWords = [
    'case',
    'default',
    'do',
    'else',
    'in',
    'instanceof',
    'prefix',
    'return',
    'typeof',
    'void',
    'yield'
  ];

  var wordsLastChar = beforeReWords.reduce(function (s, w) {
    return s + w.slice(-1)
  }, '');

  var RE_REGEX = /^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/;
  var RE_VN_CHAR = /[$\w]/;

  function prev (code, pos) {
    while (--pos >= 0 && /\s/.test(code[pos])){  }
    return pos
  }

  function _skipRegex (code, start) {

    var re = /.*/g;
    var pos = re.lastIndex = start++;
    var match = re.exec(code)[0].match(RE_REGEX);

    if (match) {
      var next = pos + match[0].length;

      pos = prev(code, pos);
      var c = code[pos];

      if (pos < 0 || ~beforeReChars.indexOf(c)) {
        return next
      }

      if (c === '.') {

        if (code[pos - 1] === '.') {
          start = next;
        }

      } else if (c === '+' || c === '-') {

        if (code[--pos] !== c ||
            (pos = prev(code, pos)) < 0 ||
            !RE_VN_CHAR.test(code[pos])) {
          start = next;
        }

      } else if (~wordsLastChar.indexOf(c)) {

        var end = pos + 1;

        while (--pos >= 0 && RE_VN_CHAR.test(code[pos])){  }
        if (~beforeReWords.indexOf(code.slice(pos + 1, end))) {
          start = next;
        }
      }
    }

    return start
  }

  return _skipRegex

})();

/**
 * riot.util.brackets
 *
 * - `brackets    ` - Returns a string or regex based on its parameter
 * - `brackets.set` - Change the current riot brackets
 *
 * @module
 */

/* global riot */

/* istanbul ignore next */
var brackets = (function (UNDEF) {

  var
    REGLOB = 'g',

    R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,

    R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,

    S_QBLOCKS = R_STRINGS.source + '|' +
      /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' +
      /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,

    UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),

    NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,

    S_QBLOCK2 = R_STRINGS.source + '|' + /(\/)(?![*\/])/.source,

    FINDBRACES = {
      '(': RegExp('([()])|'   + S_QBLOCK2, REGLOB),
      '[': RegExp('([[\\]])|' + S_QBLOCK2, REGLOB),
      '{': RegExp('([{}])|'   + S_QBLOCK2, REGLOB)
    },

    DEFAULT = '{ }';

  var _pairs = [
    '{', '}',
    '{', '}',
    /{[^}]*}/,
    /\\([{}])/g,
    /\\({)|{/g,
    RegExp('\\\\(})|([[({])|(})|' + S_QBLOCK2, REGLOB),
    DEFAULT,
    /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,
    /(^|[^\\]){=[\S\s]*?}/
  ];

  var
    cachedBrackets = UNDEF,
    _regex,
    _cache = [],
    _settings;

  function _loopback (re) { return re }

  function _rewrite (re, bp) {
    if (!bp) { bp = _cache; }
    return new RegExp(
      re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''
    )
  }

  function _create (pair) {
    if (pair === DEFAULT) { return _pairs }

    var arr = pair.split(' ');

    if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
      throw new Error('Unsupported brackets "' + pair + '"')
    }
    arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '));

    arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
    arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
    arr[6] = _rewrite(_pairs[6], arr);
    arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCK2, REGLOB);
    arr[8] = pair;
    return arr
  }

  function _brackets (reOrIdx) {
    return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx]
  }

  _brackets.split = function split (str, tmpl, _bp) {
    // istanbul ignore next: _bp is for the compiler
    if (!_bp) { _bp = _cache; }

    var
      parts = [],
      match,
      isexpr,
      start,
      pos,
      re = _bp[6];

    var qblocks = [];
    var prevStr = '';
    var mark, lastIndex;

    isexpr = start = re.lastIndex = 0;

    while ((match = re.exec(str))) {

      lastIndex = re.lastIndex;
      pos = match.index;

      if (isexpr) {

        if (match[2]) {

          var ch = match[2];
          var rech = FINDBRACES[ch];
          var ix = 1;

          rech.lastIndex = lastIndex;
          while ((match = rech.exec(str))) {
            if (match[1]) {
              if (match[1] === ch) { ++ix; }
              else if (!--ix) { break }
            } else {
              rech.lastIndex = pushQBlock(match.index, rech.lastIndex, match[2]);
            }
          }
          re.lastIndex = ix ? str.length : rech.lastIndex;
          continue
        }

        if (!match[3]) {
          re.lastIndex = pushQBlock(pos, lastIndex, match[4]);
          continue
        }
      }

      if (!match[1]) {
        unescapeStr(str.slice(start, pos));
        start = re.lastIndex;
        re = _bp[6 + (isexpr ^= 1)];
        re.lastIndex = start;
      }
    }

    if (str && start < str.length) {
      unescapeStr(str.slice(start));
    }

    parts.qblocks = qblocks;

    return parts

    function unescapeStr (s) {
      if (prevStr) {
        s = prevStr + s;
        prevStr = '';
      }
      if (tmpl || isexpr) {
        parts.push(s && s.replace(_bp[5], '$1'));
      } else {
        parts.push(s);
      }
    }

    function pushQBlock(_pos, _lastIndex, slash) { //eslint-disable-line
      if (slash) {
        _lastIndex = skipRegex(str, _pos);
      }

      if (tmpl && _lastIndex > _pos + 2) {
        mark = '\u2057' + qblocks.length + '~';
        qblocks.push(str.slice(_pos, _lastIndex));
        prevStr += str.slice(start, _pos) + mark;
        start = _lastIndex;
      }
      return _lastIndex
    }
  };

  _brackets.hasExpr = function hasExpr (str) {
    return _cache[4].test(str)
  };

  _brackets.loopKeys = function loopKeys (expr) {
    var m = expr.match(_cache[9]);

    return m
      ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }
      : { val: expr.trim() }
  };

  _brackets.array = function array (pair) {
    return pair ? _create(pair) : _cache
  };

  function _reset (pair) {
    if ((pair || (pair = DEFAULT)) !== _cache[8]) {
      _cache = _create(pair);
      _regex = pair === DEFAULT ? _loopback : _rewrite;
      _cache[9] = _regex(_pairs[9]);
    }
    cachedBrackets = pair;
  }

  function _setSettings (o) {
    var b;

    o = o || {};
    b = o.brackets;
    Object.defineProperty(o, 'brackets', {
      set: _reset,
      get: function () { return cachedBrackets },
      enumerable: true
    });
    _settings = o;
    _reset(b);
  }

  Object.defineProperty(_brackets, 'settings', {
    set: _setSettings,
    get: function () { return _settings }
  });

  /* istanbul ignore next: in the browser riot is always in the scope */
  _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
  _brackets.set = _reset;
  _brackets.skipRegex = skipRegex;

  _brackets.R_STRINGS = R_STRINGS;
  _brackets.R_MLCOMMS = R_MLCOMMS;
  _brackets.S_QBLOCKS = S_QBLOCKS;
  _brackets.S_QBLOCK2 = S_QBLOCK2;

  return _brackets

})();

/**
 * @module tmpl
 *
 * tmpl          - Root function, returns the template value, render with data
 * tmpl.hasExpr  - Test the existence of a expression inside a string
 * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
 */

/* istanbul ignore next */
var tmpl = (function () {

  var _cache = {};

  function _tmpl (str, data) {
    if (!str) { return str }

    return (_cache[str] || (_cache[str] = _create(str))).call(
      data, _logErr.bind({
        data: data,
        tmpl: str
      })
    )
  }

  _tmpl.hasExpr = brackets.hasExpr;

  _tmpl.loopKeys = brackets.loopKeys;

  // istanbul ignore next
  _tmpl.clearCache = function () { _cache = {}; };

  _tmpl.errorHandler = null;

  function _logErr (err, ctx) {

    err.riotData = {
      tagName: ctx && ctx.__ && ctx.__.tagName,
      _riot_id: ctx && ctx._riot_id  //eslint-disable-line camelcase
    };

    if (_tmpl.errorHandler) { _tmpl.errorHandler(err); }
    else if (
      typeof console !== 'undefined' &&
      typeof console.error === 'function'
    ) {
      console.error(err.message);
      console.log('<%s> %s', err.riotData.tagName || 'Unknown tag', this.tmpl); // eslint-disable-line
      console.log(this.data); // eslint-disable-line
    }
  }

  function _create (str) {
    var expr = _getTmpl(str);

    if (expr.slice(0, 11) !== 'try{return ') { expr = 'return ' + expr; }

    return new Function('E', expr + ';')    // eslint-disable-line no-new-func
  }

  var RE_DQUOTE = /\u2057/g;
  var RE_QBMARK = /\u2057(\d+)~/g;

  function _getTmpl (str) {
    var parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);
    var qstr = parts.qblocks;
    var expr;

    if (parts.length > 2 || parts[0]) {
      var i, j, list = [];

      for (i = j = 0; i < parts.length; ++i) {

        expr = parts[i];

        if (expr && (expr = i & 1

            ? _parseExpr(expr, 1, qstr)

            : '"' + expr
                .replace(/\\/g, '\\\\')
                .replace(/\r\n?|\n/g, '\\n')
                .replace(/"/g, '\\"') +
              '"'

          )) { list[j++] = expr; }

      }

      expr = j < 2 ? list[0]
           : '[' + list.join(',') + '].join("")';

    } else {

      expr = _parseExpr(parts[1], 0, qstr);
    }

    if (qstr.length) {
      expr = expr.replace(RE_QBMARK, function (_, pos) {
        return qstr[pos]
          .replace(/\r/g, '\\r')
          .replace(/\n/g, '\\n')
      });
    }
    return expr
  }

  var RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/;
  var
    RE_BREND = {
      '(': /[()]/g,
      '[': /[[\]]/g,
      '{': /[{}]/g
    };

  function _parseExpr (expr, asText, qstr) {

    expr = expr
      .replace(/\s+/g, ' ').trim()
      .replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

    if (expr) {
      var
        list = [],
        cnt = 0,
        match;

      while (expr &&
            (match = expr.match(RE_CSNAME)) &&
            !match.index
        ) {
        var
          key,
          jsb,
          re = /,|([[{(])|$/g;

        expr = RegExp.rightContext;
        key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];

        while (jsb = (match = re.exec(expr))[1]) { skipBraces(jsb, re); }

        jsb  = expr.slice(0, match.index);
        expr = RegExp.rightContext;

        list[cnt++] = _wrapExpr(jsb, 1, key);
      }

      expr = !cnt ? _wrapExpr(expr, asText)
           : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
    }
    return expr

    function skipBraces (ch, re) {
      var
        mm,
        lv = 1,
        ir = RE_BREND[ch];

      ir.lastIndex = re.lastIndex;
      while (mm = ir.exec(expr)) {
        if (mm[0] === ch) { ++lv; }
        else if (!--lv) { break }
      }
      re.lastIndex = lv ? expr.length : ir.lastIndex;
    }
  }

  // istanbul ignore next: not both
  var // eslint-disable-next-line max-len
    JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
    JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
    JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

  function _wrapExpr (expr, asText, key) {
    var tb;

    expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
      if (mvar) {
        pos = tb ? 0 : pos + match.length;

        if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
          match = p + '("' + mvar + JS_CONTEXT + mvar;
          if (pos) { tb = (s = s[pos]) === '.' || s === '(' || s === '['; }
        } else if (pos) {
          tb = !JS_NOPROPS.test(s.slice(pos));
        }
      }
      return match
    });

    if (tb) {
      expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
    }

    if (key) {

      expr = (tb
          ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')'
        ) + '?"' + key + '":""';

    } else if (asText) {

      expr = 'function(v){' + (tb
          ? expr.replace('return ', 'v=') : 'v=(' + expr + ')'
        ) + ';return v||v===0?v:""}.call(this)';
    }

    return expr
  }

  _tmpl.version = brackets.version = 'v3.0.8';

  return _tmpl

})();

/* istanbul ignore next */
var observable$1 = function(el) {

  /**
   * Extend the original object or create a new empty one
   * @type { Object }
   */

  el = el || {};

  /**
   * Private variables
   */
  var callbacks = {},
    slice = Array.prototype.slice;

  /**
   * Public Api
   */

  // extend the el object adding the observable methods
  Object.defineProperties(el, {
    /**
     * Listen to the given `event` ands
     * execute the `callback` each time an event is triggered.
     * @param  { String } event - event id
     * @param  { Function } fn - callback function
     * @returns { Object } el
     */
    on: {
      value: function(event, fn) {
        if (typeof fn == 'function')
          { (callbacks[event] = callbacks[event] || []).push(fn); }
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Removes the given `event` listeners
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    off: {
      value: function(event, fn) {
        if (event == '*' && !fn) { callbacks = {}; }
        else {
          if (fn) {
            var arr = callbacks[event];
            for (var i = 0, cb; cb = arr && arr[i]; ++i) {
              if (cb == fn) { arr.splice(i--, 1); }
            }
          } else { delete callbacks[event]; }
        }
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Listen to the given `event` and
     * execute the `callback` at most once
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    one: {
      value: function(event, fn) {
        function on() {
          el.off(event, on);
          fn.apply(el, arguments);
        }
        return el.on(event, on)
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Execute all callback functions that listen to
     * the given `event`
     * @param   { String } event - event id
     * @returns { Object } el
     */
    trigger: {
      value: function(event) {
        var arguments$1 = arguments;


        // getting the arguments
        var arglen = arguments.length - 1,
          args = new Array(arglen),
          fns,
          fn,
          i;

        for (i = 0; i < arglen; i++) {
          args[i] = arguments$1[i + 1]; // skip first argument
        }

        fns = slice.call(callbacks[event] || [], 0);

        for (i = 0; fn = fns[i]; ++i) {
          fn.apply(el, args);
        }

        if (callbacks['*'] && event != '*')
          { el.trigger.apply(el, ['*', event].concat(args)); }

        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    }
  });

  return el

};

/**
 * Check if the passed argument is a boolean attribute
 * @param   { String } value -
 * @returns { Boolean } -
 */
function isBoolAttr(value) {
  return RE_BOOL_ATTRS.test(value)
}

/**
 * Check if passed argument is a function
 * @param   { * } value -
 * @returns { Boolean } -
 */
function isFunction(value) {
  return typeof value === T_FUNCTION
}

/**
 * Check if passed argument is an object, exclude null
 * NOTE: use isObject(x) && !isArray(x) to excludes arrays.
 * @param   { * } value -
 * @returns { Boolean } -
 */
function isObject(value) {
  return value && typeof value === T_OBJECT // typeof null is 'object'
}

/**
 * Check if passed argument is undefined
 * @param   { * } value -
 * @returns { Boolean } -
 */
function isUndefined(value) {
  return typeof value === T_UNDEF
}

/**
 * Check if passed argument is a string
 * @param   { * } value -
 * @returns { Boolean } -
 */
function isString(value) {
  return typeof value === T_STRING
}

/**
 * Check if passed argument is empty. Different from falsy, because we dont consider 0 or false to be blank
 * @param { * } value -
 * @returns { Boolean } -
 */
function isBlank(value) {
  return isNil(value) || value === ''
}

/**
 * Check against the null and undefined values
 * @param   { * }  value -
 * @returns {Boolean} -
 */
function isNil(value) {
  return isUndefined(value) || value === null
}

/**
 * Check if passed argument is a kind of array
 * @param   { * } value -
 * @returns { Boolean } -
 */
function isArray(value) {
  return Array.isArray(value) || value instanceof Array
}

/**
 * Check whether object's property could be overridden
 * @param   { Object }  obj - source object
 * @param   { String }  key - object property
 * @returns { Boolean } true if writable
 */
function isWritable(obj, key) {
  var descriptor = getPropDescriptor(obj, key);
  return isUndefined(obj[key]) || descriptor && descriptor.writable
}


var check = Object.freeze({
	isBoolAttr: isBoolAttr,
	isFunction: isFunction,
	isObject: isObject,
	isUndefined: isUndefined,
	isString: isString,
	isBlank: isBlank,
	isNil: isNil,
	isArray: isArray,
	isWritable: isWritable
});

/**
 * Specialized function for looping an array-like collection with `each={}`
 * @param   { Array } list - collection of items
 * @param   {Function} fn - callback function
 * @returns { Array } the array looped
 */
function each(list, fn) {
  var len = list ? list.length : 0;
  var i = 0;
  for (; i < len; i++) { fn(list[i], i); }
  return list
}

/**
 * Check whether an array contains an item
 * @param   { Array } array - target array
 * @param   { * } item - item to test
 * @returns { Boolean } -
 */
function contains(array, item) {
  return array.indexOf(item) !== -1
}

/**
 * Convert a string containing dashes to camel case
 * @param   { String } str - input string
 * @returns { String } my-string -> myString
 */
function toCamel(str) {
  return str.replace(/-(\w)/g, function (_, c) { return c.toUpperCase(); })
}

/**
 * Faster String startsWith alternative
 * @param   { String } str - source string
 * @param   { String } value - test string
 * @returns { Boolean } -
 */
function startsWith(str, value) {
  return str.slice(0, value.length) === value
}

/**
 * Helper function to set an immutable property
 * @param   { Object } el - object where the new property will be set
 * @param   { String } key - object key where the new property will be stored
 * @param   { * } value - value of the new property
 * @param   { Object } options - set the propery overriding the default options
 * @returns { Object } - the initial object
 */
function defineProperty(el, key, value, options) {
  Object.defineProperty(el, key, extend({
    value: value,
    enumerable: false,
    writable: false,
    configurable: true
  }, options));
  return el
}

/**
 * Function returning always a unique identifier
 * @returns { Number } - number from 0...n
 */
var uid = (function() {
  var i = -1;
  return function () { return ++i; }
})();

/**
 * Short alias for Object.getOwnPropertyDescriptor
 */
var getPropDescriptor = function (o, k) { return Object.getOwnPropertyDescriptor(o, k); };

/**
 * Extend any object with other properties
 * @param   { Object } src - source object
 * @returns { Object } the resulting extended object
 *
 * var obj = { foo: 'baz' }
 * extend(obj, {bar: 'bar', foo: 'bar'})
 * console.log(obj) => {bar: 'bar', foo: 'bar'}
 *
 */
function extend(src) {
  var obj;
  var i = 1;
  var args = arguments;
  var l = args.length;

  for (; i < l; i++) {
    if (obj = args[i]) {
      for (var key in obj) {
        // check if this property of the source object could be overridden
        if (isWritable(src, key))
          { src[key] = obj[key]; }
      }
    }
  }
  return src
}

var misc = Object.freeze({
	each: each,
	contains: contains,
	toCamel: toCamel,
	startsWith: startsWith,
	defineProperty: defineProperty,
	uid: uid,
	getPropDescriptor: getPropDescriptor,
	extend: extend
});

var settings$1 = extend(Object.create(brackets.settings), {
  skipAnonymousTags: true,
  // handle the auto updates on any DOM event
  autoUpdate: true
});

/**
 * Trigger DOM events
 * @param   { HTMLElement } dom - dom element target of the event
 * @param   { Function } handler - user function
 * @param   { Object } e - event object
 */
function handleEvent(dom, handler, e) {
  var ptag = this.__.parent;
  var item = this.__.item;

  if (!item)
    { while (ptag && !item) {
      item = ptag.__.item;
      ptag = ptag.__.parent;
    } }

  // override the event properties
  /* istanbul ignore next */
  if (isWritable(e, 'currentTarget')) { e.currentTarget = dom; }
  /* istanbul ignore next */
  if (isWritable(e, 'target')) { e.target = e.srcElement; }
  /* istanbul ignore next */
  if (isWritable(e, 'which')) { e.which = e.charCode || e.keyCode; }

  e.item = item;

  handler.call(this, e);

  // avoid auto updates
  if (!settings$1.autoUpdate) { return }

  if (!e.preventUpdate) {
    var p = getImmediateCustomParentTag(this);
    // fixes #2083
    if (p.isMounted) { p.update(); }
  }
}

/**
 * Attach an event to a DOM node
 * @param { String } name - event name
 * @param { Function } handler - event callback
 * @param { Object } dom - dom node
 * @param { Tag } tag - tag instance
 */
function setEventHandler(name, handler, dom, tag) {
  var eventName;
  var cb = handleEvent.bind(tag, dom, handler);

  // avoid to bind twice the same event
  // possible fix for #2332
  dom[name] = null;

  // normalize event name
  eventName = name.replace(RE_EVENTS_PREFIX, '');

  // cache the listener into the listeners array
  if (!contains(tag.__.listeners, dom)) { tag.__.listeners.push(dom); }
  if (!dom[RIOT_EVENTS_KEY]) { dom[RIOT_EVENTS_KEY] = {}; }
  if (dom[RIOT_EVENTS_KEY][name]) { dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][name]); }

  dom[RIOT_EVENTS_KEY][name] = cb;
  dom.addEventListener(eventName, cb, false);
}

/**
 * Update dynamically created data-is tags with changing expressions
 * @param { Object } expr - expression tag and expression info
 * @param { Tag }    parent - parent for tag creation
 * @param { String } tagName - tag implementation we want to use
 */
function updateDataIs(expr, parent, tagName) {
  var tag = expr.tag || expr.dom._tag;
  var ref;

  var ref$1 = tag ? tag.__ : {};
  var head = ref$1.head;
  var isVirtual = expr.dom.tagName === 'VIRTUAL';

  if (tag && expr.tagName === tagName) {
    tag.update();
    return
  }

  // sync _parent to accommodate changing tagnames
  if (tag) {
    // need placeholder before unmount
    if(isVirtual) {
      ref = createDOMPlaceholder();
      head.parentNode.insertBefore(ref, head);
    }

    tag.unmount(true);
  }

  // unable to get the tag name
  if (!isString(tagName)) { return }

  expr.impl = __TAG_IMPL[tagName];

  // unknown implementation
  if (!expr.impl) { return }

  expr.tag = tag = initChildTag(
    expr.impl, {
      root: expr.dom,
      parent: parent,
      tagName: tagName
    },
    expr.dom.innerHTML,
    parent
  );

  each(expr.attrs, function (a) { return setAttr(tag.root, a.name, a.value); });
  expr.tagName = tagName;
  tag.mount();

  // root exist first time, after use placeholder
  if (isVirtual) { makeReplaceVirtual(tag, ref || tag.root); }

  // parent is the placeholder tag, not the dynamic tag so clean up
  parent.__.onUnmount = function () {
    var delName = tag.opts.dataIs;
    arrayishRemove(tag.parent.tags, delName, tag);
    arrayishRemove(tag.__.parent.tags, delName, tag);
    tag.unmount();
  };
}

/**
 * Nomalize any attribute removing the "riot-" prefix
 * @param   { String } attrName - original attribute name
 * @returns { String } valid html attribute name
 */
function normalizeAttrName(attrName) {
  if (!attrName) { return null }
  attrName = attrName.replace(ATTRS_PREFIX, '');
  if (CASE_SENSITIVE_ATTRIBUTES[attrName]) { attrName = CASE_SENSITIVE_ATTRIBUTES[attrName]; }
  return attrName
}

/**
 * Update on single tag expression
 * @this Tag
 * @param { Object } expr - expression logic
 * @returns { undefined }
 */
function updateExpression(expr) {
  if (this.root && getAttr(this.root,'virtualized')) { return }

  var dom = expr.dom;
  // remove the riot- prefix
  var attrName = normalizeAttrName(expr.attr);
  var isToggle = contains([SHOW_DIRECTIVE, HIDE_DIRECTIVE], attrName);
  var isVirtual = expr.root && expr.root.tagName === 'VIRTUAL';
  var ref = this.__;
  var isAnonymous = ref.isAnonymous;
  var parent = dom && (expr.parent || dom.parentNode);
  // detect the style attributes
  var isStyleAttr = attrName === 'style';
  var isClassAttr = attrName === 'class';

  var value;

  // if it's a tag we could totally skip the rest
  if (expr._riot_id) {
    if (expr.__.wasCreated) {
      expr.update();
    // if it hasn't been mounted yet, do that now.
    } else {
      expr.mount();
      if (isVirtual) {
        makeReplaceVirtual(expr, expr.root);
      }
    }
    return
  }

  // if this expression has the update method it means it can handle the DOM changes by itself
  if (expr.update) { return expr.update() }

  var context = isToggle && !isAnonymous ? inheritParentProps.call(this) : this;

  // ...it seems to be a simple expression so we try to calculate its value
  value = tmpl(expr.expr, context);

  var hasValue = !isBlank(value);
  var isObj = isObject(value);

  // convert the style/class objects to strings
  if (isObj) {
    if (isClassAttr) {
      value = tmpl(JSON.stringify(value), this);
    } else if (isStyleAttr) {
      value = styleObjectToString(value);
    }
  }

  // remove original attribute
  if (expr.attr && (!expr.wasParsedOnce || !hasValue || value === false)) {
    // remove either riot-* attributes or just the attribute name
    remAttr(dom, getAttr(dom, expr.attr) ? expr.attr : attrName);
  }

  // for the boolean attributes we don't need the value
  // we can convert it to checked=true to checked=checked
  if (expr.bool) { value = value ? attrName : false; }
  if (expr.isRtag) { return updateDataIs(expr, this, value) }
  if (expr.wasParsedOnce && expr.value === value) { return }

  // update the expression value
  expr.value = value;
  expr.wasParsedOnce = true;

  // if the value is an object (and it's not a style or class attribute) we can not do much more with it
  if (isObj && !isClassAttr && !isStyleAttr && !isToggle) { return }
  // avoid to render undefined/null values
  if (!hasValue) { value = ''; }

  // textarea and text nodes have no attribute name
  if (!attrName) {
    // about #815 w/o replace: the browser converts the value to a string,
    // the comparison by "==" does too, but not in the server
    value += '';
    // test for parent avoids error with invalid assignment to nodeValue
    if (parent) {
      // cache the parent node because somehow it will become null on IE
      // on the next iteration
      expr.parent = parent;
      if (parent.tagName === 'TEXTAREA') {
        parent.value = value;                    // #1113
        if (!IE_VERSION) { dom.nodeValue = value; }  // #1625 IE throws here, nodeValue
      }                                         // will be available on 'updated'
      else { dom.nodeValue = value; }
    }
    return
  }


  // event handler
  if (isFunction(value)) {
    setEventHandler(attrName, value, dom, this);
  // show / hide
  } else if (isToggle) {
    toggleVisibility(dom, attrName === HIDE_DIRECTIVE ? !value : value);
  // handle attributes
  } else {
    if (expr.bool) {
      dom[attrName] = value;
    }

    if (attrName === 'value' && dom.value !== value) {
      dom.value = value;
    } else if (hasValue && value !== false) {
      setAttr(dom, attrName, value);
    }

    // make sure that in case of style changes
    // the element stays hidden
    if (isStyleAttr && dom.hidden) { toggleVisibility(dom, false); }
  }
}

/**
 * Update all the expressions in a Tag instance
 * @this Tag
 * @param { Array } expressions - expression that must be re evaluated
 */
function updateAllExpressions(expressions) {
  each(expressions, updateExpression.bind(this));
}

var IfExpr = {
  init: function init(dom, tag, expr) {
    remAttr(dom, CONDITIONAL_DIRECTIVE);
    this.tag = tag;
    this.expr = expr;
    this.stub = createDOMPlaceholder();
    this.pristine = dom;

    var p = dom.parentNode;
    p.insertBefore(this.stub, dom);
    p.removeChild(dom);

    return this
  },
  update: function update() {
    this.value = tmpl(this.expr, this.tag);

    if (this.value && !this.current) { // insert
      this.current = this.pristine.cloneNode(true);
      this.stub.parentNode.insertBefore(this.current, this.stub);
      this.expressions = parseExpressions.apply(this.tag, [this.current, true]);
    } else if (!this.value && this.current) { // remove
      unmountAll(this.expressions);
      if (this.current._tag) {
        this.current._tag.unmount();
      } else if (this.current.parentNode) {
        this.current.parentNode.removeChild(this.current);
      }
      this.current = null;
      this.expressions = [];
    }

    if (this.value) { updateAllExpressions.call(this.tag, this.expressions); }
  },
  unmount: function unmount() {
    unmountAll(this.expressions || []);
  }
};

var RefExpr = {
  init: function init(dom, parent, attrName, attrValue) {
    this.dom = dom;
    this.attr = attrName;
    this.rawValue = attrValue;
    this.parent = parent;
    this.hasExp = tmpl.hasExpr(attrValue);
    return this
  },
  update: function update() {
    var old = this.value;
    var customParent = this.parent && getImmediateCustomParentTag(this.parent);
    // if the referenced element is a custom tag, then we set the tag itself, rather than DOM
    var tagOrDom = this.dom.__ref || this.tag || this.dom;

    this.value = this.hasExp ? tmpl(this.rawValue, this.parent) : this.rawValue;

    // the name changed, so we need to remove it from the old key (if present)
    if (!isBlank(old) && customParent) { arrayishRemove(customParent.refs, old, tagOrDom); }
    if (!isBlank(this.value) && isString(this.value)) {
      // add it to the refs of parent tag (this behavior was changed >=3.0)
      if (customParent) { arrayishAdd(
        customParent.refs,
        this.value,
        tagOrDom,
        // use an array if it's a looped node and the ref is not an expression
        null,
        this.parent.__.index
      ); }

      if (this.value !== old) {
        setAttr(this.dom, this.attr, this.value);
      }
    } else {
      remAttr(this.dom, this.attr);
    }

    // cache the ref bound to this dom node
    // to reuse it in future (see also #2329)
    if (!this.dom.__ref) { this.dom.__ref = tagOrDom; }
  },
  unmount: function unmount() {
    var tagOrDom = this.tag || this.dom;
    var customParent = this.parent && getImmediateCustomParentTag(this.parent);
    if (!isBlank(this.value) && customParent)
      { arrayishRemove(customParent.refs, this.value, tagOrDom); }
  }
};

/**
 * Convert the item looped into an object used to extend the child tag properties
 * @param   { Object } expr - object containing the keys used to extend the children tags
 * @param   { * } key - value to assign to the new object returned
 * @param   { * } val - value containing the position of the item in the array
 * @param   { Object } base - prototype object for the new item
 * @returns { Object } - new object containing the values of the original item
 *
 * The variables 'key' and 'val' are arbitrary.
 * They depend on the collection type looped (Array, Object)
 * and on the expression used on the each tag
 *
 */
function mkitem(expr, key, val, base) {
  var item = base ? Object.create(base) : {};
  item[expr.key] = key;
  if (expr.pos) { item[expr.pos] = val; }
  return item
}

/**
 * Unmount the redundant tags
 * @param   { Array } items - array containing the current items to loop
 * @param   { Array } tags - array containing all the children tags
 */
function unmountRedundant(items, tags) {
  var i = tags.length;
  var j = items.length;

  while (i > j) {
    i--;
    remove.apply(tags[i], [tags, i]);
  }
}


/**
 * Remove a child tag
 * @this Tag
 * @param   { Array } tags - tags collection
 * @param   { Number } i - index of the tag to remove
 */
function remove(tags, i) {
  tags.splice(i, 1);
  this.unmount();
  arrayishRemove(this.parent, this, this.__.tagName, true);
}

/**
 * Move the nested custom tags in non custom loop tags
 * @this Tag
 * @param   { Number } i - current position of the loop tag
 */
function moveNestedTags(i) {
  var this$1 = this;

  each(Object.keys(this.tags), function (tagName) {
    moveChildTag.apply(this$1.tags[tagName], [tagName, i]);
  });
}

/**
 * Move a child tag
 * @this Tag
 * @param   { HTMLElement } root - dom node containing all the loop children
 * @param   { Tag } nextTag - instance of the next tag preceding the one we want to move
 * @param   { Boolean } isVirtual - is it a virtual tag?
 */
function move(root, nextTag, isVirtual) {
  if (isVirtual)
    { moveVirtual.apply(this, [root, nextTag]); }
  else
    { safeInsert(root, this.root, nextTag.root); }
}

/**
 * Insert and mount a child tag
 * @this Tag
 * @param   { HTMLElement } root - dom node containing all the loop children
 * @param   { Tag } nextTag - instance of the next tag preceding the one we want to insert
 * @param   { Boolean } isVirtual - is it a virtual tag?
 */
function insert(root, nextTag, isVirtual) {
  if (isVirtual)
    { makeVirtual.apply(this, [root, nextTag]); }
  else
    { safeInsert(root, this.root, nextTag.root); }
}

/**
 * Append a new tag into the DOM
 * @this Tag
 * @param   { HTMLElement } root - dom node containing all the loop children
 * @param   { Boolean } isVirtual - is it a virtual tag?
 */
function append(root, isVirtual) {
  if (isVirtual)
    { makeVirtual.call(this, root); }
  else
    { root.appendChild(this.root); }
}

/**
 * Return the value we want to use to lookup the postion of our items in the collection
 * @param   { String }  keyAttr         - lookup string or expression
 * @param   { * }       originalItem    - original item from the collection
 * @param   { Object }  keyedItem       - object created by riot via { item, i in collection }
 * @param   { Boolean } hasKeyAttrExpr  - flag to check whether the key is an expression
 * @returns { * } value that we will use to figure out the item position via collection.indexOf
 */
function getItemId(keyAttr, originalItem, keyedItem, hasKeyAttrExpr) {
  if (keyAttr) {
    return hasKeyAttrExpr ?  tmpl(keyAttr, keyedItem) :  originalItem[keyAttr]
  }

  return originalItem
}

/**
 * Manage tags having the 'each'
 * @param   { HTMLElement } dom - DOM node we need to loop
 * @param   { Tag } parent - parent tag instance where the dom node is contained
 * @param   { String } expr - string contained in the 'each' attribute
 * @returns { Object } expression object for this each loop
 */
function _each(dom, parent, expr) {
  var mustReorder = typeof getAttr(dom, LOOP_NO_REORDER_DIRECTIVE) !== T_STRING || remAttr(dom, LOOP_NO_REORDER_DIRECTIVE);
  var keyAttr = getAttr(dom, KEY_DIRECTIVE);
  var hasKeyAttrExpr = keyAttr ? tmpl.hasExpr(keyAttr) : false;
  var tagName = getTagName(dom);
  var impl = __TAG_IMPL[tagName];
  var parentNode = dom.parentNode;
  var placeholder = createDOMPlaceholder();
  var child = getTag(dom);
  var ifExpr = getAttr(dom, CONDITIONAL_DIRECTIVE);
  var tags = [];
  var isLoop = true;
  var innerHTML = dom.innerHTML;
  var isAnonymous = !__TAG_IMPL[tagName];
  var isVirtual = dom.tagName === 'VIRTUAL';
  var oldItems = [];
  var hasKeys;

  // remove the each property from the original tag
  remAttr(dom, LOOP_DIRECTIVE);
  remAttr(dom, KEY_DIRECTIVE);

  // parse the each expression
  expr = tmpl.loopKeys(expr);
  expr.isLoop = true;

  if (ifExpr) { remAttr(dom, CONDITIONAL_DIRECTIVE); }

  // insert a marked where the loop tags will be injected
  parentNode.insertBefore(placeholder, dom);
  parentNode.removeChild(dom);

  expr.update = function updateEach() {
    // get the new items collection
    expr.value = tmpl(expr.val, parent);

    var items = expr.value;
    var frag = createFrag();
    var isObject$$1 = !isArray(items) && !isString(items);
    var root = placeholder.parentNode;
    var tmpItems = [];

    // if this DOM was removed the update here is useless
    // this condition fixes also a weird async issue on IE in our unit test
    if (!root) { return }

    // object loop. any changes cause full redraw
    if (isObject$$1) {
      hasKeys = items || false;
      items = hasKeys ?
        Object.keys(items).map(function (key) { return mkitem(expr, items[key], key); }) : [];
    } else {
      hasKeys = false;
    }

    if (ifExpr) {
      items = items.filter(function (item, i) {
        if (expr.key && !isObject$$1)
          { return !!tmpl(ifExpr, mkitem(expr, item, i, parent)) }

        return !!tmpl(ifExpr, extend(Object.create(parent), item))
      });
    }

    // loop all the new items
    each(items, function (_item, i) {
      var item = !hasKeys && expr.key ? mkitem(expr, _item, i) : _item;
      var itemId = getItemId(keyAttr, _item, item, hasKeyAttrExpr);
      // reorder only if the items are objects
      var doReorder = mustReorder && typeof _item === T_OBJECT && !hasKeys;
      var oldPos = oldItems.indexOf(itemId);
      var isNew = oldPos === -1;
      var pos = !isNew && doReorder ? oldPos : i;
      // does a tag exist in this position?
      var tag = tags[pos];
      var mustAppend = i >= oldItems.length;
      var mustCreate =  doReorder && isNew || !doReorder && !tag;

      // new tag
      if (mustCreate) {
        tag = createTag(impl, {
          parent: parent,
          isLoop: isLoop,
          isAnonymous: isAnonymous,
          tagName: tagName,
          root: dom.cloneNode(isAnonymous),
          item: item,
          index: i,
        }, innerHTML);

        // mount the tag
        tag.mount();

        if (mustAppend)
          { append.apply(tag, [frag || root, isVirtual]); }
        else
          { insert.apply(tag, [root, tags[i], isVirtual]); }

        if (!mustAppend) { oldItems.splice(i, 0, item); }
        tags.splice(i, 0, tag);
        if (child) { arrayishAdd(parent.tags, tagName, tag, true); }
      } else if (pos !== i && doReorder) {
        // move
        if (keyAttr || contains(items, oldItems[pos])) {
          move.apply(tag, [root, tags[i], isVirtual]);
          // move the old tag instance
          tags.splice(i, 0, tags.splice(pos, 1)[0]);
          // move the old item
          oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
        }

        // update the position attribute if it exists
        if (expr.pos) { tag[expr.pos] = i; }

        // if the loop tags are not custom
        // we need to move all their custom tags into the right position
        if (!child && tag.tags) { moveNestedTags.call(tag, i); }
      }

      // cache the original item to use it in the events bound to this node
      // and its children
      tag.__.item = item;
      tag.__.index = i;
      tag.__.parent = parent;

      tmpItems[i] = itemId;

      if (!mustCreate) { tag.update(item); }
    });

    // remove the redundant tags
    unmountRedundant(items, tags);

    // clone the items array
    oldItems = tmpItems.slice();

    root.insertBefore(frag, placeholder);
  };

  expr.unmount = function () {
    each(tags, function (t) { t.unmount(); });
  };

  return expr
}

/**
 * Walk the tag DOM to detect the expressions to evaluate
 * @this Tag
 * @param   { HTMLElement } root - root tag where we will start digging the expressions
 * @param   { Boolean } mustIncludeRoot - flag to decide whether the root must be parsed as well
 * @returns { Array } all the expressions found
 */
function parseExpressions(root, mustIncludeRoot) {
  var this$1 = this;

  var expressions = [];

  walkNodes(root, function (dom) {
    var type = dom.nodeType;
    var attr;
    var tagImpl;

    if (!mustIncludeRoot && dom === root) { return }

    // text node
    if (type === 3 && dom.parentNode.tagName !== 'STYLE' && tmpl.hasExpr(dom.nodeValue))
      { expressions.push({dom: dom, expr: dom.nodeValue}); }

    if (type !== 1) { return }

    var isVirtual = dom.tagName === 'VIRTUAL';

    // loop. each does it's own thing (for now)
    if (attr = getAttr(dom, LOOP_DIRECTIVE)) {
      if(isVirtual) { setAttr(dom, 'loopVirtual', true); } // ignore here, handled in _each
      expressions.push(_each(dom, this$1, attr));
      return false
    }

    // if-attrs become the new parent. Any following expressions (either on the current
    // element, or below it) become children of this expression.
    if (attr = getAttr(dom, CONDITIONAL_DIRECTIVE)) {
      expressions.push(Object.create(IfExpr).init(dom, this$1, attr));
      return false
    }

    if (attr = getAttr(dom, IS_DIRECTIVE)) {
      if (tmpl.hasExpr(attr)) {
        expressions.push({
          isRtag: true,
          expr: attr,
          dom: dom,
          attrs: [].slice.call(dom.attributes)
        });

        return false
      }
    }

    // if this is a tag, stop traversing here.
    // we ignore the root, since parseExpressions is called while we're mounting that root
    tagImpl = getTag(dom);

    if(isVirtual) {
      if(getAttr(dom, 'virtualized')) {dom.parentElement.removeChild(dom); } // tag created, remove from dom
      if(!tagImpl && !getAttr(dom, 'virtualized') && !getAttr(dom, 'loopVirtual'))  // ok to create virtual tag
        { tagImpl = { tmpl: dom.outerHTML }; }
    }

    if (tagImpl && (dom !== root || mustIncludeRoot)) {
      if(isVirtual && !getAttr(dom, IS_DIRECTIVE)) { // handled in update
        // can not remove attribute like directives
        // so flag for removal after creation to prevent maximum stack error
        setAttr(dom, 'virtualized', true);
        var tag = createTag(
          {tmpl: dom.outerHTML},
          {root: dom, parent: this$1},
          dom.innerHTML
        );

        expressions.push(tag); // no return, anonymous tag, keep parsing
      } else {
        expressions.push(
          initChildTag(
            tagImpl,
            {
              root: dom,
              parent: this$1
            },
            dom.innerHTML,
            this$1
          )
        );
        return false
      }
    }

    // attribute expressions
    parseAttributes.apply(this$1, [dom, dom.attributes, function (attr, expr) {
      if (!expr) { return }
      expressions.push(expr);
    }]);
  });

  return expressions
}

/**
 * Calls `fn` for every attribute on an element. If that attr has an expression,
 * it is also passed to fn.
 * @this Tag
 * @param   { HTMLElement } dom - dom node to parse
 * @param   { Array } attrs - array of attributes
 * @param   { Function } fn - callback to exec on any iteration
 */
function parseAttributes(dom, attrs, fn) {
  var this$1 = this;

  each(attrs, function (attr) {
    if (!attr) { return false }

    var name = attr.name;
    var bool = isBoolAttr(name);
    var expr;

    if (contains(REF_DIRECTIVES, name) && dom.tagName.toLowerCase() !== YIELD_TAG) {
      expr =  Object.create(RefExpr).init(dom, this$1, name, attr.value);
    } else if (tmpl.hasExpr(attr.value)) {
      expr = {dom: dom, expr: attr.value, attr: name, bool: bool};
    }

    fn(attr, expr);
  });
}

/*
  Includes hacks needed for the Internet Explorer version 9 and below
  See: http://kangax.github.io/compat-table/es5/#ie8
       http://codeplanet.io/dropping-ie8/
*/

var reHasYield  = /<yield\b/i;
var reYieldAll  = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig;
var reYieldSrc  = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig;
var reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
var rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' };
var tblTags = IE_VERSION && IE_VERSION < 10 ? RE_SPECIAL_TAGS : RE_SPECIAL_TAGS_NO_OPTION;
var GENERIC = 'div';
var SVG = 'svg';


/*
  Creates the root element for table or select child elements:
  tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
*/
function specialTags(el, tmpl, tagName) {

  var
    select = tagName[0] === 'o',
    parent = select ? 'select>' : 'table>';

  // trim() is important here, this ensures we don't have artifacts,
  // so we can check if we have only one element inside the parent
  el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent;
  parent = el.firstChild;

  // returns the immediate parent if tr/th/td/col is the only element, if not
  // returns the whole tree, as this can include additional elements
  /* istanbul ignore next */
  if (select) {
    parent.selectedIndex = -1;  // for IE9, compatible w/current riot behavior
  } else {
    // avoids insertion of cointainer inside container (ex: tbody inside tbody)
    var tname = rootEls[tagName];
    if (tname && parent.childElementCount === 1) { parent = $(tname, parent); }
  }
  return parent
}

/*
  Replace the yield tag from any tag template with the innerHTML of the
  original tag in the page
*/
function replaceYield(tmpl, html) {
  // do nothing if no yield
  if (!reHasYield.test(tmpl)) { return tmpl }

  // be careful with #1343 - string on the source having `$1`
  var src = {};

  html = html && html.replace(reYieldSrc, function (_, ref, text) {
    src[ref] = src[ref] || text;   // preserve first definition
    return ''
  }).trim();

  return tmpl
    .replace(reYieldDest, function (_, ref, def) {  // yield with from - to attrs
      return src[ref] || def || ''
    })
    .replace(reYieldAll, function (_, def) {        // yield without any "from"
      return html || def || ''
    })
}

/**
 * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
 * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
 *
 * @param   { String } tmpl  - The template coming from the custom tag definition
 * @param   { String } html - HTML content that comes from the DOM element where you
 *           will mount the tag, mostly the original tag in the page
 * @param   { Boolean } isSvg - true if the root node is an svg
 * @returns { HTMLElement } DOM element with _tmpl_ merged through `YIELD` with the _html_.
 */
function mkdom(tmpl, html, isSvg$$1) {
  var match   = tmpl && tmpl.match(/^\s*<([-\w]+)/);
  var  tagName = match && match[1].toLowerCase();
  var el = mkEl(isSvg$$1 ? SVG : GENERIC);

  // replace all the yield tags with the tag inner html
  tmpl = replaceYield(tmpl, html);

  /* istanbul ignore next */
  if (tblTags.test(tagName))
    { el = specialTags(el, tmpl, tagName); }
  else
    { setInnerHTML(el, tmpl, isSvg$$1); }

  return el
}

/**
 * Another way to create a riot tag a bit more es6 friendly
 * @param { HTMLElement } el - tag DOM selector or DOM node/s
 * @param { Object } opts - tag logic
 * @returns { Tag } new riot tag instance
 */
function Tag$1(el, opts) {
  // get the tag properties from the class constructor
  var ref = this;
  var name = ref.name;
  var tmpl = ref.tmpl;
  var css = ref.css;
  var attrs = ref.attrs;
  var onCreate = ref.onCreate;
  // register a new tag and cache the class prototype
  if (!__TAG_IMPL[name]) {
    tag$1(name, tmpl, css, attrs, onCreate);
    // cache the class constructor
    __TAG_IMPL[name].class = this.constructor;
  }

  // mount the tag using the class instance
  mountTo(el, name, opts, this);
  // inject the component css
  if (css) { styleManager.inject(); }

  return this
}

/**
 * Create a new riot tag implementation
 * @param   { String }   name - name/id of the new riot tag
 * @param   { String }   tmpl - tag template
 * @param   { String }   css - custom tag css
 * @param   { String }   attrs - root tag attributes
 * @param   { Function } fn - user function
 * @returns { String } name/id of the tag just created
 */
function tag$1(name, tmpl, css, attrs, fn) {
  if (isFunction(attrs)) {
    fn = attrs;

    if (/^[\w-]+\s?=/.test(css)) {
      attrs = css;
      css = '';
    } else
      { attrs = ''; }
  }

  if (css) {
    if (isFunction(css))
      { fn = css; }
    else
      { styleManager.add(css); }
  }

  name = name.toLowerCase();
  __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

  return name
}

/**
 * Create a new riot tag implementation (for use by the compiler)
 * @param   { String }   name - name/id of the new riot tag
 * @param   { String }   tmpl - tag template
 * @param   { String }   css - custom tag css
 * @param   { String }   attrs - root tag attributes
 * @param   { Function } fn - user function
 * @returns { String } name/id of the tag just created
 */
function tag2$1(name, tmpl, css, attrs, fn) {
  if (css) { styleManager.add(css, name); }

  __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

  return name
}

/**
 * Mount a tag using a specific tag implementation
 * @param   { * } selector - tag DOM selector or DOM node/s
 * @param   { String } tagName - tag implementation name
 * @param   { Object } opts - tag logic
 * @returns { Array } new tags instances
 */
function mount$1(selector, tagName, opts) {
  var tags = [];
  var elem, allTags;

  function pushTagsTo(root) {
    if (root.tagName) {
      var riotTag = getAttr(root, IS_DIRECTIVE), tag;

      // have tagName? force riot-tag to be the same
      if (tagName && riotTag !== tagName) {
        riotTag = tagName;
        setAttr(root, IS_DIRECTIVE, tagName);
      }

      tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);

      if (tag)
        { tags.push(tag); }
    } else if (root.length)
      { each(root, pushTagsTo); } // assume nodeList
  }

  // inject styles into DOM
  styleManager.inject();

  if (isObject(tagName)) {
    opts = tagName;
    tagName = 0;
  }

  // crawl the DOM to find the tag
  if (isString(selector)) {
    selector = selector === '*' ?
      // select all registered tags
      // & tags found with the riot-tag attribute set
      allTags = selectTags() :
      // or just the ones named like the selector
      selector + selectTags(selector.split(/, */));

    // make sure to pass always a selector
    // to the querySelectorAll function
    elem = selector ? $$(selector) : [];
  }
  else
    // probably you have passed already a tag or a NodeList
    { elem = selector; }

  // select all the registered and mount them inside their root elements
  if (tagName === '*') {
    // get all custom tags
    tagName = allTags || selectTags();
    // if the root els it's just a single tag
    if (elem.tagName)
      { elem = $$(tagName, elem); }
    else {
      // select all the children for all the different root elements
      var nodeList = [];

      each(elem, function (_el) { return nodeList.push($$(tagName, _el)); });

      elem = nodeList;
    }
    // get rid of the tagName
    tagName = 0;
  }

  pushTagsTo(elem);

  return tags
}

// Create a mixin that could be globally shared across all the tags
var mixins = {};
var globals = mixins[GLOBAL_MIXIN] = {};
var mixins_id = 0;

/**
 * Create/Return a mixin by its name
 * @param   { String }  name - mixin name (global mixin if object)
 * @param   { Object }  mix - mixin logic
 * @param   { Boolean } g - is global?
 * @returns { Object }  the mixin logic
 */
function mixin$1(name, mix, g) {
  // Unnamed global
  if (isObject(name)) {
    mixin$1(("__" + (mixins_id++) + "__"), name, true);
    return
  }

  var store = g ? globals : mixins;

  // Getter
  if (!mix) {
    if (isUndefined(store[name]))
      { throw new Error(("Unregistered mixin: " + name)) }

    return store[name]
  }

  // Setter
  store[name] = isFunction(mix) ?
    extend(mix.prototype, store[name] || {}) && mix :
    extend(store[name] || {}, mix);
}

/**
 * Update all the tags instances created
 * @returns { Array } all the tags instances
 */
function update$1() {
  return each(__TAGS_CACHE, function (tag) { return tag.update(); })
}

function unregister$1(name) {
  __TAG_IMPL[name] = null;
}

var version$1 = 'v3.7.4';


var core = Object.freeze({
	Tag: Tag$1,
	tag: tag$1,
	tag2: tag2$1,
	mount: mount$1,
	mixin: mixin$1,
	update: update$1,
	unregister: unregister$1,
	version: version$1
});

/**
 * We need to update opts for this tag. That requires updating the expressions
 * in any attributes on the tag, and then copying the result onto opts.
 * @this Tag
 * @param   {Boolean} isLoop - is it a loop tag?
 * @param   { Tag }  parent - parent tag node
 * @param   { Boolean }  isAnonymous - is it a tag without any impl? (a tag not registered)
 * @param   { Object }  opts - tag options
 * @param   { Array }  instAttrs - tag attributes array
 */
function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) {
  // isAnonymous `each` tags treat `dom` and `root` differently. In this case
  // (and only this case) we don't need to do updateOpts, because the regular parse
  // will update those attrs. Plus, isAnonymous tags don't need opts anyway
  if (isLoop && isAnonymous) { return }
  var ctx = isLoop ? inheritParentProps.call(this) : parent || this;

  each(instAttrs, function (attr) {
    if (attr.expr) { updateExpression.call(ctx, attr.expr); }
    // normalize the attribute names
    opts[toCamel(attr.name).replace(ATTRS_PREFIX, '')] = attr.expr ? attr.expr.value : attr.value;
  });
}

/**
 * Manage the mount state of a tag triggering also the observable events
 * @this Tag
 * @param { Boolean } value - ..of the isMounted flag
 */
function setMountState(value) {
  var ref = this.__;
  var isAnonymous = ref.isAnonymous;

  defineProperty(this, 'isMounted', value);

  if (!isAnonymous) {
    if (value) { this.trigger('mount'); }
    else {
      this.trigger('unmount');
      this.off('*');
      this.__.wasCreated = false;
    }
  }
}


/**
 * Tag creation factory function
 * @constructor
 * @param { Object } impl - it contains the tag template, and logic
 * @param { Object } conf - tag options
 * @param { String } innerHTML - html that eventually we need to inject in the tag
 */
function createTag(impl, conf, innerHTML) {
  if ( impl === void 0 ) impl = {};
  if ( conf === void 0 ) conf = {};

  var tag = conf.context || {};
  var opts = extend({}, conf.opts);
  var parent = conf.parent;
  var isLoop = conf.isLoop;
  var isAnonymous = !!conf.isAnonymous;
  var skipAnonymous = settings$1.skipAnonymousTags && isAnonymous;
  var item = conf.item;
  // available only for the looped nodes
  var index = conf.index;
  // All attributes on the Tag when it's first parsed
  var instAttrs = [];
  // expressions on this type of Tag
  var implAttrs = [];
  var expressions = [];
  var root = conf.root;
  var tagName = conf.tagName || getTagName(root);
  var isVirtual = tagName === 'virtual';
  var isInline = !isVirtual && !impl.tmpl;
  var dom;

  // make this tag observable
  if (!skipAnonymous) { observable$1(tag); }
  // only call unmount if we have a valid __TAG_IMPL (has name property)
  if (impl.name && root._tag) { root._tag.unmount(true); }

  // not yet mounted
  defineProperty(tag, 'isMounted', false);

  defineProperty(tag, '__', {
    isAnonymous: isAnonymous,
    instAttrs: instAttrs,
    innerHTML: innerHTML,
    tagName: tagName,
    index: index,
    isLoop: isLoop,
    isInline: isInline,
    // tags having event listeners
    // it would be better to use weak maps here but we can not introduce breaking changes now
    listeners: [],
    // these vars will be needed only for the virtual tags
    virts: [],
    wasCreated: false,
    tail: null,
    head: null,
    parent: null,
    item: null
  });

  // create a unique id to this tag
  // it could be handy to use it also to improve the virtual dom rendering speed
  defineProperty(tag, '_riot_id', uid()); // base 1 allows test !t._riot_id
  defineProperty(tag, 'root', root);
  extend(tag, { opts: opts }, item);
  // protect the "tags" and "refs" property from being overridden
  defineProperty(tag, 'parent', parent || null);
  defineProperty(tag, 'tags', {});
  defineProperty(tag, 'refs', {});

  if (isInline || isLoop && isAnonymous) {
    dom = root;
  } else {
    if (!isVirtual) { root.innerHTML = ''; }
    dom = mkdom(impl.tmpl, innerHTML, isSvg(root));
  }

  /**
   * Update the tag expressions and options
   * @param   { * }  data - data we want to use to extend the tag properties
   * @returns { Tag } the current tag instance
   */
  defineProperty(tag, 'update', function tagUpdate(data) {
    var nextOpts = {};
    var canTrigger = tag.isMounted && !skipAnonymous;

    // inherit properties from the parent tag
    if (isAnonymous && parent) { extend(tag, parent); }
    extend(tag, data);

    updateOpts.apply(tag, [isLoop, parent, isAnonymous, nextOpts, instAttrs]);

    if (
      canTrigger &&
      tag.isMounted &&
      isFunction(tag.shouldUpdate) && !tag.shouldUpdate(data, nextOpts)
    ) {
      return tag
    }

    extend(opts, nextOpts);

    if (canTrigger) { tag.trigger('update', data); }
    updateAllExpressions.call(tag, expressions);
    if (canTrigger) { tag.trigger('updated'); }

    return tag
  });

  /**
   * Add a mixin to this tag
   * @returns { Tag } the current tag instance
   */
  defineProperty(tag, 'mixin', function tagMixin() {
    each(arguments, function (mix) {
      var instance;
      var obj;
      var props = [];

      // properties blacklisted and will not be bound to the tag instance
      var propsBlacklist = ['init', '__proto__'];

      mix = isString(mix) ? mixin$1(mix) : mix;

      // check if the mixin is a function
      if (isFunction(mix)) {
        // create the new mixin instance
        instance = new mix();
      } else { instance = mix; }

      var proto = Object.getPrototypeOf(instance);

      // build multilevel prototype inheritance chain property list
      do { props = props.concat(Object.getOwnPropertyNames(obj || instance)); }
      while (obj = Object.getPrototypeOf(obj || instance))

      // loop the keys in the function prototype or the all object keys
      each(props, function (key) {
        // bind methods to tag
        // allow mixins to override other properties/parent mixins
        if (!contains(propsBlacklist, key)) {
          // check for getters/setters
          var descriptor = getPropDescriptor(instance, key) || getPropDescriptor(proto, key);
          var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);

          // apply method only if it does not already exist on the instance
          if (!tag.hasOwnProperty(key) && hasGetterSetter) {
            Object.defineProperty(tag, key, descriptor);
          } else {
            tag[key] = isFunction(instance[key]) ?
              instance[key].bind(tag) :
              instance[key];
          }
        }
      });

      // init method will be called automatically
      if (instance.init)
        { instance.init.bind(tag)(opts); }
    });

    return tag
  });

  /**
   * Mount the current tag instance
   * @returns { Tag } the current tag instance
   */
  defineProperty(tag, 'mount', function tagMount() {
    root._tag = tag; // keep a reference to the tag just created

    // Read all the attrs on this instance. This give us the info we need for updateOpts
    parseAttributes.apply(parent, [root, root.attributes, function (attr, expr) {
      if (!isAnonymous && RefExpr.isPrototypeOf(expr)) { expr.tag = tag; }
      attr.expr = expr;
      instAttrs.push(attr);
    }]);

    // update the root adding custom attributes coming from the compiler
    walkAttrs(impl.attrs, function (k, v) { implAttrs.push({name: k, value: v}); });
    parseAttributes.apply(tag, [root, implAttrs, function (attr, expr) {
      if (expr) { expressions.push(expr); }
      else { setAttr(root, attr.name, attr.value); }
    }]);

    // initialiation
    updateOpts.apply(tag, [isLoop, parent, isAnonymous, opts, instAttrs]);

    // add global mixins
    var globalMixin = mixin$1(GLOBAL_MIXIN);

    if (globalMixin && !skipAnonymous) {
      for (var i in globalMixin) {
        if (globalMixin.hasOwnProperty(i)) {
          tag.mixin(globalMixin[i]);
        }
      }
    }

    if (impl.fn) { impl.fn.call(tag, opts); }

    if (!skipAnonymous) { tag.trigger('before-mount'); }

    // parse layout after init. fn may calculate args for nested custom tags
    each(parseExpressions.apply(tag, [dom, isAnonymous]), function (e) { return expressions.push(e); });

    tag.update(item);

    if (!isAnonymous && !isInline) {
      while (dom.firstChild) { root.appendChild(dom.firstChild); }
    }

    defineProperty(tag, 'root', root);

    // if we need to wait that the parent "mount" or "updated" event gets triggered
    if (!skipAnonymous && tag.parent) {
      var p = getImmediateCustomParentTag(tag.parent);
      p.one(!p.isMounted ? 'mount' : 'updated', function () {
        setMountState.call(tag, true);
      });
    } else {
      // otherwise it's not a child tag we can trigger its mount event
      setMountState.call(tag, true);
    }

    tag.__.wasCreated = true;

    return tag

  });

  /**
   * Unmount the tag instance
   * @param { Boolean } mustKeepRoot - if it's true the root node will not be removed
   * @returns { Tag } the current tag instance
   */
  defineProperty(tag, 'unmount', function tagUnmount(mustKeepRoot) {
    var el = tag.root;
    var p = el.parentNode;
    var tagIndex = __TAGS_CACHE.indexOf(tag);

    if (!skipAnonymous) { tag.trigger('before-unmount'); }

    // clear all attributes coming from the mounted tag
    walkAttrs(impl.attrs, function (name) {
      if (startsWith(name, ATTRS_PREFIX))
        { name = name.slice(ATTRS_PREFIX.length); }

      remAttr(root, name);
    });

    // remove all the event listeners
    tag.__.listeners.forEach(function (dom) {
      Object.keys(dom[RIOT_EVENTS_KEY]).forEach(function (eventName) {
        dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][eventName]);
      });
    });

    // remove tag instance from the global tags cache collection
    if (tagIndex !== -1) { __TAGS_CACHE.splice(tagIndex, 1); }

    // clean up the parent tags object
    if (parent && !isAnonymous) {
      var ptag = getImmediateCustomParentTag(parent);

      if (isVirtual) {
        Object
          .keys(tag.tags)
          .forEach(function (tagName) { return arrayishRemove(ptag.tags, tagName, tag.tags[tagName]); });
      } else {
        arrayishRemove(ptag.tags, tagName, tag);
      }
    }

    // unmount all the virtual directives
    if (tag.__.virts) {
      each(tag.__.virts, function (v) {
        if (v.parentNode) { v.parentNode.removeChild(v); }
      });
    }

    // allow expressions to unmount themselves
    unmountAll(expressions);
    each(instAttrs, function (a) { return a.expr && a.expr.unmount && a.expr.unmount(); });

    // clear the tag html if it's necessary
    if (mustKeepRoot) { setInnerHTML(el, ''); }
    // otherwise detach the root tag from the DOM
    else if (p) { p.removeChild(el); }

    // custom internal unmount function to avoid relying on the observable
    if (tag.__.onUnmount) { tag.__.onUnmount(); }

    // weird fix for a weird edge case #2409 and #2436
    // some users might use your software not as you've expected
    // so I need to add these dirty hacks to mitigate unexpected issues
    if (!tag.isMounted) { setMountState.call(tag, true); }

    setMountState.call(tag, false);

    delete tag.root._tag;

    return tag
  });

  return tag
}

/**
 * Detect the tag implementation by a DOM node
 * @param   { Object } dom - DOM node we need to parse to get its tag implementation
 * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
 */
function getTag(dom) {
  return dom.tagName && __TAG_IMPL[getAttr(dom, IS_DIRECTIVE) ||
    getAttr(dom, IS_DIRECTIVE) || dom.tagName.toLowerCase()]
}

/**
 * Move the position of a custom tag in its parent tag
 * @this Tag
 * @param   { String } tagName - key where the tag was stored
 * @param   { Number } newPos - index where the new tag will be stored
 */
function moveChildTag(tagName, newPos) {
  var parent = this.parent;
  var tags;
  // no parent no move
  if (!parent) { return }

  tags = parent.tags[tagName];

  if (isArray(tags))
    { tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0]); }
  else { arrayishAdd(parent.tags, tagName, this); }
}

/**
 * Create a new child tag including it correctly into its parent
 * @param   { Object } child - child tag implementation
 * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
 * @param   { String } innerHTML - inner html of the child node
 * @param   { Object } parent - instance of the parent tag including the child custom tag
 * @returns { Object } instance of the new child tag just created
 */
function initChildTag(child, opts, innerHTML, parent) {
  var tag = createTag(child, opts, innerHTML);
  var tagName = opts.tagName || getTagName(opts.root, true);
  var ptag = getImmediateCustomParentTag(parent);
  // fix for the parent attribute in the looped elements
  defineProperty(tag, 'parent', ptag);
  // store the real parent tag
  // in some cases this could be different from the custom parent tag
  // for example in nested loops
  tag.__.parent = parent;

  // add this tag to the custom parent tag
  arrayishAdd(ptag.tags, tagName, tag);

  // and also to the real parent tag
  if (ptag !== parent)
    { arrayishAdd(parent.tags, tagName, tag); }

  return tag
}

/**
 * Loop backward all the parents tree to detect the first custom parent tag
 * @param   { Object } tag - a Tag instance
 * @returns { Object } the instance of the first custom parent tag found
 */
function getImmediateCustomParentTag(tag) {
  var ptag = tag;
  while (ptag.__.isAnonymous) {
    if (!ptag.parent) { break }
    ptag = ptag.parent;
  }
  return ptag
}

/**
 * Trigger the unmount method on all the expressions
 * @param   { Array } expressions - DOM expressions
 */
function unmountAll(expressions) {
  each(expressions, function (expr) {
    if (expr.unmount) { expr.unmount(true); }
    else if (expr.tagName) { expr.tag.unmount(true); }
    else if (expr.unmount) { expr.unmount(); }
  });
}

/**
 * Get the tag name of any DOM node
 * @param   { Object } dom - DOM node we want to parse
 * @param   { Boolean } skipDataIs - hack to ignore the data-is attribute when attaching to parent
 * @returns { String } name to identify this dom node in riot
 */
function getTagName(dom, skipDataIs) {
  var child = getTag(dom);
  var namedTag = !skipDataIs && getAttr(dom, IS_DIRECTIVE);
  return namedTag && !tmpl.hasExpr(namedTag) ?
    namedTag : child ? child.name : dom.tagName.toLowerCase()
}

/**
 * Set the property of an object for a given key. If something already
 * exists there, then it becomes an array containing both the old and new value.
 * @param { Object } obj - object on which to set the property
 * @param { String } key - property name
 * @param { Object } value - the value of the property to be set
 * @param { Boolean } ensureArray - ensure that the property remains an array
 * @param { Number } index - add the new item in a certain array position
 */
function arrayishAdd(obj, key, value, ensureArray, index) {
  var dest = obj[key];
  var isArr = isArray(dest);
  var hasIndex = !isUndefined(index);

  if (dest && dest === value) { return }

  // if the key was never set, set it once
  if (!dest && ensureArray) { obj[key] = [value]; }
  else if (!dest) { obj[key] = value; }
  // if it was an array and not yet set
  else {
    if (isArr) {
      var oldIndex = dest.indexOf(value);
      // this item never changed its position
      if (oldIndex === index) { return }
      // remove the item from its old position
      if (oldIndex !== -1) { dest.splice(oldIndex, 1); }
      // move or add the item
      if (hasIndex) {
        dest.splice(index, 0, value);
      } else {
        dest.push(value);
      }
    } else { obj[key] = [dest, value]; }
  }
}

/**
 * Removes an item from an object at a given key. If the key points to an array,
 * then the item is just removed from the array.
 * @param { Object } obj - object on which to remove the property
 * @param { String } key - property name
 * @param { Object } value - the value of the property to be removed
 * @param { Boolean } ensureArray - ensure that the property remains an array
*/
function arrayishRemove(obj, key, value, ensureArray) {
  if (isArray(obj[key])) {
    var index = obj[key].indexOf(value);
    if (index !== -1) { obj[key].splice(index, 1); }
    if (!obj[key].length) { delete obj[key]; }
    else if (obj[key].length === 1 && !ensureArray) { obj[key] = obj[key][0]; }
  } else if (obj[key] === value)
    { delete obj[key]; } // otherwise just delete the key
}

/**
 * Mount a tag creating new Tag instance
 * @param   { Object } root - dom node where the tag will be mounted
 * @param   { String } tagName - name of the riot tag we want to mount
 * @param   { Object } opts - options to pass to the Tag instance
 * @param   { Object } ctx - optional context that will be used to extend an existing class ( used in riot.Tag )
 * @returns { Tag } a new Tag instance
 */
function mountTo(root, tagName, opts, ctx) {
  var impl = __TAG_IMPL[tagName];
  var implClass = __TAG_IMPL[tagName].class;
  var context = ctx || (implClass ? Object.create(implClass.prototype) : {});
  // cache the inner HTML to fix #855
  var innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;
  var conf = extend({ root: root, opts: opts, context: context }, { parent: opts ? opts.parent : null });
  var tag;

  if (impl && root) { tag = createTag(impl, conf, innerHTML); }

  if (tag && tag.mount) {
    tag.mount(true);
    // add this tag to the virtualDom variable
    if (!contains(__TAGS_CACHE, tag)) { __TAGS_CACHE.push(tag); }
  }

  return tag
}

/**
 * makes a tag virtual and replaces a reference in the dom
 * @this Tag
 * @param { tag } the tag to make virtual
 * @param { ref } the dom reference location
 */
function makeReplaceVirtual(tag, ref) {
  var frag = createFrag();
  makeVirtual.call(tag, frag);
  ref.parentNode.replaceChild(frag, ref);
}

/**
 * Adds the elements for a virtual tag
 * @this Tag
 * @param { Node } src - the node that will do the inserting or appending
 * @param { Tag } target - only if inserting, insert before this tag's first child
 */
function makeVirtual(src, target) {
  var this$1 = this;

  var head = createDOMPlaceholder();
  var tail = createDOMPlaceholder();
  var frag = createFrag();
  var sib;
  var el;

  this.root.insertBefore(head, this.root.firstChild);
  this.root.appendChild(tail);

  this.__.head = el = head;
  this.__.tail = tail;

  while (el) {
    sib = el.nextSibling;
    frag.appendChild(el);
    this$1.__.virts.push(el); // hold for unmounting
    el = sib;
  }

  if (target)
    { src.insertBefore(frag, target.__.head); }
  else
    { src.appendChild(frag); }
}

/**
 * Return a temporary context containing also the parent properties
 * @this Tag
 * @param { Tag } - temporary tag context containing all the parent properties
 */
function inheritParentProps() {
  if (this.parent) { return extend(Object.create(this), this.parent) }
  return this
}

/**
 * Move virtual tag and all child nodes
 * @this Tag
 * @param { Node } src  - the node that will do the inserting
 * @param { Tag } target - insert before this tag's first child
 */
function moveVirtual(src, target) {
  var this$1 = this;

  var el = this.__.head;
  var sib;
  var frag = createFrag();

  while (el) {
    sib = el.nextSibling;
    frag.appendChild(el);
    el = sib;
    if (el === this$1.__.tail) {
      frag.appendChild(el);
      src.insertBefore(frag, target.__.head);
      break
    }
  }
}

/**
 * Get selectors for tags
 * @param   { Array } tags - tag names to select
 * @returns { String } selector
 */
function selectTags(tags) {
  // select all tags
  if (!tags) {
    var keys = Object.keys(__TAG_IMPL);
    return keys + selectTags(keys)
  }

  return tags
    .filter(function (t) { return !/[^-\w]/.test(t); })
    .reduce(function (list, t) {
      var name = t.trim().toLowerCase();
      return list + ",[" + IS_DIRECTIVE + "=\"" + name + "\"]"
    }, '')
}


var tags = Object.freeze({
	getTag: getTag,
	moveChildTag: moveChildTag,
	initChildTag: initChildTag,
	getImmediateCustomParentTag: getImmediateCustomParentTag,
	unmountAll: unmountAll,
	getTagName: getTagName,
	arrayishAdd: arrayishAdd,
	arrayishRemove: arrayishRemove,
	mountTo: mountTo,
	makeReplaceVirtual: makeReplaceVirtual,
	makeVirtual: makeVirtual,
	inheritParentProps: inheritParentProps,
	moveVirtual: moveVirtual,
	selectTags: selectTags
});

/**
 * Riot public api
 */
var settings = settings$1;
var util = {
  tmpl: tmpl,
  brackets: brackets,
  styleManager: styleManager,
  vdom: __TAGS_CACHE,
  styleNode: styleManager.styleNode,
  // export the riot internal utils as well
  dom: dom,
  check: check,
  misc: misc,
  tags: tags
};

// export the core props/methods
var Tag = Tag$1;
var tag = tag$1;
var tag2 = tag2$1;
var mount = mount$1;
var mixin = mixin$1;
var update = update$1;
var unregister = unregister$1;
var version = version$1;
var observable = observable$1;

var riot$1 = extend({}, core, {
  observable: observable$1,
  settings: settings,
  util: util,
});

exports.settings = settings;
exports.util = util;
exports.Tag = Tag;
exports.tag = tag;
exports.tag2 = tag2;
exports.mount = mount;
exports.mixin = mixin;
exports.update = update;
exports.unregister = unregister;
exports.version = version;
exports.observable = observable;
exports['default'] = riot$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _riot = __webpack_require__(1);

var _riot2 = _interopRequireDefault(_riot);

var _feature = __webpack_require__(3);

var _feature2 = _interopRequireDefault(_feature);

__webpack_require__(4);

var _promisePolyfill = __webpack_require__(5);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _moJs = __webpack_require__(10);

var _moJs2 = _interopRequireDefault(_moJs);

var _scrollmagic = __webpack_require__(11);

var _scrollmagic2 = _interopRequireDefault(_scrollmagic);

var _slickCarousel = __webpack_require__(12);

var _slickCarousel2 = _interopRequireDefault(_slickCarousel);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_riot2.default.mount('*');
// import p5 from 'p5'

(function ($) {

  $(function () {

    // アンカースクロールアニメーション
    var anchorScroll = function anchorScroll() {

      function scrollTo(selector, offset, cb) {
        console.log(selector);
        var body = [document.body, document.documentElement];
        var offset = offset || 0;
        if (_feature2.default.touch) {
          offset += 60;
        }
        var el = document.querySelector(selector);
        var scrollAnim = anime({
          targets: body,
          scrollTop: el.offsetTop - offset,
          duration: 500,
          easing: 'easeInOutQuart',
          complete: function complete() {
            if (cb) cb();
          }
        });
      }

      if (!_feature2.default.touch) {
        $('a[href^="#"], .js-anchor-scroll').on('click', function (e) {
          e.preventDefault();
          var href = $(e.currentTarget).attr('href');
          scrollTo(href);
          return false;
        });
      }
    };

    anchorScroll();
  });
})(jQuery);

var s = function s(sketch) {

  var x = 100;
  var y = 100;

  sketch.setup = function () {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = function () {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(x, y, 50, 50);
  };
};

console.log('feature.touch = ' + _feature2.default.touch);

// mo.js動作チェック
var mojsAnime = new _moJs2.default.Html({
  el: '.js-anime',
  x: { 0: 250 },
  angleZ: { 0: 360 },
  duration: 800,
  easing: 'expo.out',
  repeat: true,
  isYoyo: true,
  delay: 500,
  onComplete: function onComplete() {
    this.replay();
  }
}).play();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*!
 * FEATURE.JS 1.0.0, A Fast, simple and lightweight browser feature
 * detection library in just 1kb.
 *
 * http://featurejs.com
 *
 * CSS 3D Transform, CSS Transform, CSS Transition, Canvas, SVG,
 * addEventListener, querySelectorAll, matchMedia, classList API,
 * placeholder, localStorage, History API, Viewport Units, REM Units,
 * CORS, WebGL, Service Worker, Context Menu, Geolocation,
 * Device Motion, Device Orientation, Touch, Async, Defer,
 * Srcset, Sizes & Picture Element.
 *
 *
 * USAGE EXAMPLE:
 * if (feature.webGL) {
 *   console.log("webGL supported!");
 * }
 *
 * Author: @viljamis, https://viljamis.com
 */

/* globals DocumentTouch */
;(function (window, document, undefined) {
  "use strict";

  // For minification only
  var docEl = document.documentElement;


  /**
   * Utilities
   */
  var util = {

    /**
     * Simple create element method
     */
    create : function(el) {
      return document.createElement(el);
    },

    /**
     * Test if it's an old device that we want to filter out
     */
    old : !!(/(Android\s(1.|2.))|(Silk\/1.)/i.test(navigator.userAgent)),

    /**
     * Function that takes a standard CSS property name as a parameter and
     * returns it's prefixed version valid for current browser it runs in
     */
    pfx : (function() {
      var style = document.createElement("dummy").style;
      var prefixes = ["Webkit", "Moz", "O", "ms"];
      var memory = {};
      return function(prop) {
        if (typeof memory[prop] === "undefined") {
          var ucProp = prop.charAt(0).toUpperCase() + prop.substr(1),
            props = (prop + " " + prefixes.join(ucProp + " ") + ucProp).split(" ");
            memory[prop] = null;
          for (var i in props) {
            if (style[props[i]] !== undefined) {
              memory[prop] = props[i];
              break;
            }
          }
        }
        return memory[prop];
      };
    })()

  };


  /**
   * The Feature.js object
   */

  var Feature = {
    // Test if CSS 3D transforms are supported
    css3Dtransform : (function() {
      var test = (!util.old && util.pfx("perspective") !== null);
      return !!test;
    })(),

    // Test if CSS transforms are supported
    cssTransform : (function() {
      var test = (!util.old && util.pfx("transformOrigin") !== null);
      return !!test;
    })(),

    // Test if CSS transitions are supported
    cssTransition : (function() {
      var test = util.pfx("transition") !== null;
      return !!test;
    })(),

    // Test if addEventListener is supported
    addEventListener : !!window.addEventListener,

    // Test if querySelectorAll is supported
    querySelectorAll : !!document.querySelectorAll,

    // Test if matchMedia is supported
    matchMedia : !!window.matchMedia,

    // Test if Device Motion is supported
    deviceMotion : ("DeviceMotionEvent" in window),

    // Test if Device Orientation is supported
    deviceOrientation : ("DeviceOrientationEvent" in window),

    // Test if Context Menu is supported
    contextMenu : ("contextMenu" in docEl && "HTMLMenuItemElement" in window),

    // Test if classList API is supported
    classList : ("classList" in docEl),

    // Test if placeholder attribute is supported
    placeholder : ("placeholder" in util.create("input")),

    // Test if localStorage is supported
    localStorage : (function() {
      var test = "x";
      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch(err) {
        return false;
      }
    })(),

    // Test if History API is supported
    historyAPI : (window.history && "pushState" in window.history),

    // Test if ServiceWorkers are supported
    serviceWorker : ("serviceWorker" in navigator),

    // Test if viewport units are supported
    viewportUnit : (function(el) {
      try {
        el.style.width = "1vw";
        var test = el.style.width !== "";
        return !!test;
      } catch(err) {
        return false;
      }
    })(util.create("dummy")),

    // Test if REM units are supported
    remUnit : (function(el) {
      try {
        el.style.width = "1rem";
        var test = el.style.width !== "";
        return !!test;
      } catch(err) {
        return false;
      }
    })(util.create("dummy")),

    // Test if Canvas is supported
    canvas : (function(el) {
      return !!(el.getContext && el.getContext("2d"));
    })(util.create("canvas")),

    // Test if SVG is supported
    svg : !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,

    // Test if WebGL is supported
    webGL : (function(el) {
      try {
        return !!(window.WebGLRenderingContext && (el.getContext("webgl") || el.getContext("experimental-webgl")));
      } catch(err) {
        return false;
      }
    })(util.create("canvas")),

    // Test if cors is supported
    cors : ("XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest()),

    // Tests if touch events are supported, but doesn't necessarily reflect a touchscreen device
    touch : !!(("ontouchstart" in window) || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch),

    // Test if async attribute is supported
    async : ("async" in util.create("script")),

    // Test if defer attribute is supported
    defer : ("defer" in util.create("script")),

    // Test if Geolocation is supported
    geolocation : ("geolocation" in navigator),

    // Test if img srcset attribute is supported
    srcset : ("srcset" in util.create("img")),

    // Test if img sizes attribute is supported
    sizes : ("sizes" in util.create("img")),

    // Test if Picture element is supported
    pictureElement : ("HTMLPictureElement" in window),

    // Run all the tests and add supported classes
    testAll : function() {
      var classes = " js";
      for (var test in this) {
        if (test !== "testAll" && test !== "constructor" && this[test]) {
          classes += " " + test;
        }
      }
      docEl.className += classes.toLowerCase();
    }

  };

  /**
   * Expose a public-facing API
   */
  window.feature = Feature;

}(window, document));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6).setImmediate))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(7);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(9)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mojs", [], factory);
	else if(typeof exports === 'object')
		exports["mojs"] = factory();
	else
		root["mojs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(3);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	var _shapesMap = __webpack_require__(72);

	var _shapesMap2 = _interopRequireDefault(_shapesMap);

	var _shape = __webpack_require__(94);

	var _shape2 = _interopRequireDefault(_shape);

	var _shapeSwirl = __webpack_require__(117);

	var _shapeSwirl2 = _interopRequireDefault(_shapeSwirl);

	var _burst = __webpack_require__(118);

	var _burst2 = _interopRequireDefault(_burst);

	var _html = __webpack_require__(119);

	var _html2 = _interopRequireDefault(_html);

	var _stagger = __webpack_require__(127);

	var _stagger2 = _interopRequireDefault(_stagger);

	var _spriter = __webpack_require__(128);

	var _spriter2 = _interopRequireDefault(_spriter);

	var _motionPath = __webpack_require__(129);

	var _motionPath2 = _interopRequireDefault(_motionPath);

	var _tween = __webpack_require__(101);

	var _tween2 = _interopRequireDefault(_tween);

	var _timeline = __webpack_require__(110);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _tweener = __webpack_require__(102);

	var _tweener2 = _interopRequireDefault(_tweener);

	var _tweenable = __webpack_require__(100);

	var _tweenable2 = _interopRequireDefault(_tweenable);

	var _thenable = __webpack_require__(99);

	var _thenable2 = _interopRequireDefault(_thenable);

	var _tunable = __webpack_require__(116);

	var _tunable2 = _interopRequireDefault(_tunable);

	var _delta = __webpack_require__(126);

	var _delta2 = _interopRequireDefault(_delta);

	var _deltas = __webpack_require__(125);

	var _deltas2 = _interopRequireDefault(_deltas);

	var _module = __webpack_require__(84);

	var _module2 = _interopRequireDefault(_module);

	var _easing = __webpack_require__(105);

	var _easing2 = _interopRequireDefault(_easing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mojs = {
	  revision: '0.288.2', isDebug: true, helpers: _h2.default,
	  Shape: _shape2.default, ShapeSwirl: _shapeSwirl2.default, Burst: _burst2.default, Html: _html2.default, stagger: _stagger2.default, Spriter: _spriter2.default, MotionPath: _motionPath2.default,
	  Tween: _tween2.default, Timeline: _timeline2.default, Tweenable: _tweenable2.default, Thenable: _thenable2.default, Tunable: _tunable2.default, Module: _module2.default,
	  tweener: _tweener2.default, easing: _easing2.default, shapesMap: _shapesMap2.default, _pool: { Delta: _delta2.default, Deltas: _deltas2.default }
	};

	// functions alias
	mojs.h = mojs.helpers;
	mojs.delta = mojs.h.delta;
	// custom shape add function and class
	mojs.addShape = mojs.shapesMap.addShape;
	mojs.CustomShape = mojs.shapesMap.custom;
	// module alias
	mojs.Transit = mojs.Shape;
	mojs.Swirl = mojs.ShapeSwirl;

	// TODO:
	/*
	  H/V in paths

	  rand for direction
	  burst children angle after tune
	  burst pathScale after tune
	  swirl then issue
	  'rand' angle flick with `then`
	  not able to `play()` in `onComplete` callback
	  ---
	  module names
	  swirls in then chains for x/y
	  parse rand(stagger(20, 10), 20) values
	  percentage for radius
	*/

	// istanbul ignore next
	if (true) {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return mojs;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	// istanbul ignore next
	if (( false ? 'undefined' : (0, _typeof3.default)(module)) === "object" && (0, _typeof3.default)(module.exports) === "object") {
	  module.exports = mojs;
	}

	exports.default = mojs;


	typeof window !== 'undefined' && (window.mojs = mojs);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(4);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(55);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(50);
	module.exports = __webpack_require__(54).f('iterator');

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(7)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(10)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(8)
	  , defined   = __webpack_require__(9);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(11)
	  , $export        = __webpack_require__(12)
	  , redefine       = __webpack_require__(27)
	  , hide           = __webpack_require__(17)
	  , has            = __webpack_require__(28)
	  , Iterators      = __webpack_require__(29)
	  , $iterCreate    = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(46)
	  , getPrototypeOf = __webpack_require__(48)
	  , ITERATOR       = __webpack_require__(47)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(13)
	  , core      = __webpack_require__(14)
	  , ctx       = __webpack_require__(15)
	  , hide      = __webpack_require__(17)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(18)
	  , createDesc = __webpack_require__(26);
	module.exports = __webpack_require__(22) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(19)
	  , IE8_DOM_DEFINE = __webpack_require__(21)
	  , toPrimitive    = __webpack_require__(25)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(22) && !__webpack_require__(23)(function(){
	  return Object.defineProperty(__webpack_require__(24)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(23)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20)
	  , document = __webpack_require__(13).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(20);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(31)
	  , descriptor     = __webpack_require__(26)
	  , setToStringTag = __webpack_require__(46)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(17)(IteratorPrototype, __webpack_require__(47)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(19)
	  , dPs         = __webpack_require__(32)
	  , enumBugKeys = __webpack_require__(44)
	  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(24)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(45).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(18)
	  , anObject = __webpack_require__(19)
	  , getKeys  = __webpack_require__(33);

	module.exports = __webpack_require__(22) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(34)
	  , enumBugKeys = __webpack_require__(44);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(28)
	  , toIObject    = __webpack_require__(35)
	  , arrayIndexOf = __webpack_require__(38)(false)
	  , IE_PROTO     = __webpack_require__(41)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(36)
	  , defined = __webpack_require__(9);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(37);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(35)
	  , toLength  = __webpack_require__(39)
	  , toIndex   = __webpack_require__(40);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(8)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(8)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(42)('keys')
	  , uid    = __webpack_require__(43);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(13)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13).document && document.documentElement;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(18).f
	  , has = __webpack_require__(28)
	  , TAG = __webpack_require__(47)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(42)('wks')
	  , uid        = __webpack_require__(43)
	  , Symbol     = __webpack_require__(13).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(28)
	  , toObject    = __webpack_require__(49)
	  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(9);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	var global        = __webpack_require__(13)
	  , hide          = __webpack_require__(17)
	  , Iterators     = __webpack_require__(29)
	  , TO_STRING_TAG = __webpack_require__(47)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(52)
	  , step             = __webpack_require__(53)
	  , Iterators        = __webpack_require__(29)
	  , toIObject        = __webpack_require__(35);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(10)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(47);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(57);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	module.exports = __webpack_require__(14).Symbol;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(13)
	  , has            = __webpack_require__(28)
	  , DESCRIPTORS    = __webpack_require__(22)
	  , $export        = __webpack_require__(12)
	  , redefine       = __webpack_require__(27)
	  , META           = __webpack_require__(58).KEY
	  , $fails         = __webpack_require__(23)
	  , shared         = __webpack_require__(42)
	  , setToStringTag = __webpack_require__(46)
	  , uid            = __webpack_require__(43)
	  , wks            = __webpack_require__(47)
	  , wksExt         = __webpack_require__(54)
	  , wksDefine      = __webpack_require__(59)
	  , keyOf          = __webpack_require__(60)
	  , enumKeys       = __webpack_require__(61)
	  , isArray        = __webpack_require__(64)
	  , anObject       = __webpack_require__(19)
	  , toIObject      = __webpack_require__(35)
	  , toPrimitive    = __webpack_require__(25)
	  , createDesc     = __webpack_require__(26)
	  , _create        = __webpack_require__(31)
	  , gOPNExt        = __webpack_require__(65)
	  , $GOPD          = __webpack_require__(67)
	  , $DP            = __webpack_require__(18)
	  , $keys          = __webpack_require__(33)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(66).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(63).f  = $propertyIsEnumerable;
	  __webpack_require__(62).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(11)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(43)('meta')
	  , isObject = __webpack_require__(20)
	  , has      = __webpack_require__(28)
	  , setDesc  = __webpack_require__(18).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(23)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(13)
	  , core           = __webpack_require__(14)
	  , LIBRARY        = __webpack_require__(11)
	  , wksExt         = __webpack_require__(54)
	  , defineProperty = __webpack_require__(18).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(33)
	  , toIObject = __webpack_require__(35);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(33)
	  , gOPS    = __webpack_require__(62)
	  , pIE     = __webpack_require__(63);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(37);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(35)
	  , gOPN      = __webpack_require__(66).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(34)
	  , hiddenKeys = __webpack_require__(44).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(63)
	  , createDesc     = __webpack_require__(26)
	  , toIObject      = __webpack_require__(35)
	  , toPrimitive    = __webpack_require__(25)
	  , has            = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(21)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(22) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(59)('asyncIterator');

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(59)('observable');

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	var Helpers, h;

	Helpers = (function() {
	  Helpers.prototype.NS = 'http://www.w3.org/2000/svg';

	  Helpers.prototype.logBadgeCss = 'background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;';

	  Helpers.prototype.shortColors = {
	    transparent: 'rgba(0,0,0,0)',
	    none: 'rgba(0,0,0,0)',
	    aqua: 'rgb(0,255,255)',
	    black: 'rgb(0,0,0)',
	    blue: 'rgb(0,0,255)',
	    fuchsia: 'rgb(255,0,255)',
	    gray: 'rgb(128,128,128)',
	    green: 'rgb(0,128,0)',
	    lime: 'rgb(0,255,0)',
	    maroon: 'rgb(128,0,0)',
	    navy: 'rgb(0,0,128)',
	    olive: 'rgb(128,128,0)',
	    purple: 'rgb(128,0,128)',
	    red: 'rgb(255,0,0)',
	    silver: 'rgb(192,192,192)',
	    teal: 'rgb(0,128,128)',
	    white: 'rgb(255,255,255)',
	    yellow: 'rgb(255,255,0)',
	    orange: 'rgb(255,128,0)'
	  };

	  Helpers.prototype.chainOptionMap = {};

	  Helpers.prototype.callbacksMap = {
	    onRefresh: 1,
	    onStart: 1,
	    onComplete: 1,
	    onFirstUpdate: 1,
	    onUpdate: 1,
	    onProgress: 1,
	    onRepeatStart: 1,
	    onRepeatComplete: 1,
	    onPlaybackStart: 1,
	    onPlaybackPause: 1,
	    onPlaybackStop: 1,
	    onPlaybackComplete: 1
	  };

	  Helpers.prototype.tweenOptionMap = {
	    duration: 1,
	    delay: 1,
	    speed: 1,
	    repeat: 1,
	    easing: 1,
	    backwardEasing: 1,
	    isYoyo: 1,
	    shiftTime: 1,
	    isReversed: 1,
	    callbacksContext: 1
	  };

	  Helpers.prototype.unitOptionMap = {
	    left: 1,
	    top: 1,
	    x: 1,
	    y: 1,
	    rx: 1,
	    ry: 1
	  };

	  Helpers.prototype.RAD_TO_DEG = 180 / Math.PI;

	  function Helpers() {
	    this.vars();
	  }

	  Helpers.prototype.vars = function() {
	    var ua;
	    this.prefix = this.getPrefix();
	    this.getRemBase();
	    this.isFF = this.prefix.lowercase === 'moz';
	    this.isIE = this.prefix.lowercase === 'ms';
	    ua = navigator.userAgent;
	    this.isOldOpera = ua.match(/presto/gim);
	    this.isSafari = ua.indexOf('Safari') > -1;
	    this.isChrome = ua.indexOf('Chrome') > -1;
	    this.isOpera = ua.toLowerCase().indexOf("op") > -1;
	    this.isChrome && this.isSafari && (this.isSafari = false);
	    (ua.match(/PhantomJS/gim)) && (this.isSafari = false);
	    this.isChrome && this.isOpera && (this.isChrome = false);
	    this.is3d = this.checkIf3d();
	    this.uniqIDs = -1;
	    this.div = document.createElement('div');
	    document.body.appendChild(this.div);
	    return this.defaultStyles = this.computedStyle(this.div);
	  };

	  Helpers.prototype.cloneObj = function(obj, exclude) {
	    var i, key, keys, newObj;
	    keys = Object.keys(obj);
	    newObj = {};
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (exclude != null) {
	        if (!exclude[key]) {
	          newObj[key] = obj[key];
	        }
	      } else {
	        newObj[key] = obj[key];
	      }
	    }
	    return newObj;
	  };

	  Helpers.prototype.extend = function(objTo, objFrom) {
	    var key, value;
	    for (key in objFrom) {
	      value = objFrom[key];
	      if (objTo[key] == null) {
	        objTo[key] = objFrom[key];
	      }
	    }
	    return objTo;
	  };

	  Helpers.prototype.getRemBase = function() {
	    var html, style;
	    html = document.querySelector('html');
	    style = getComputedStyle(html);
	    return this.remBase = parseFloat(style.fontSize);
	  };

	  Helpers.prototype.clamp = function(value, min, max) {
	    if (value < min) {
	      return min;
	    } else if (value > max) {
	      return max;
	    } else {
	      return value;
	    }
	  };

	  Helpers.prototype.setPrefixedStyle = function(el, name, value) {
	    (name === 'transform') && (el.style["" + this.prefix.css + name] = value);
	    return el.style[name] = value;
	  };

	  Helpers.prototype.style = function(el, name, value) {
	    var key, keys, len, results;
	    if (typeof name === 'object') {
	      keys = Object.keys(name);
	      len = keys.length;
	      results = [];
	      while (len--) {
	        key = keys[len];
	        value = name[key];
	        results.push(this.setPrefixedStyle(el, key, value));
	      }
	      return results;
	    } else {
	      return this.setPrefixedStyle(el, name, value);
	    }
	  };

	  Helpers.prototype.prepareForLog = function(args) {
	    args = Array.prototype.slice.apply(args);
	    args.unshift('::');
	    args.unshift(this.logBadgeCss);
	    args.unshift('%cmo·js%c');
	    return args;
	  };

	  Helpers.prototype.log = function() {
	    if (mojs.isDebug === false) {
	      return;
	    }
	    return console.log.apply(console, this.prepareForLog(arguments));
	  };

	  Helpers.prototype.warn = function() {
	    if (mojs.isDebug === false) {
	      return;
	    }
	    return console.warn.apply(console, this.prepareForLog(arguments));
	  };

	  Helpers.prototype.error = function() {
	    if (mojs.isDebug === false) {
	      return;
	    }
	    return console.error.apply(console, this.prepareForLog(arguments));
	  };

	  Helpers.prototype.parseUnit = function(value) {
	    var amount, isStrict, ref, regex, returnVal, unit;
	    if (typeof value === 'number') {
	      return returnVal = {
	        unit: 'px',
	        isStrict: false,
	        value: value,
	        string: value === 0 ? "" + value : value + "px"
	      };
	    } else if (typeof value === 'string') {
	      regex = /px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg/gim;
	      unit = (ref = value.match(regex)) != null ? ref[0] : void 0;
	      isStrict = true;
	      if (!unit) {
	        unit = 'px';
	        isStrict = false;
	      }
	      amount = parseFloat(value);
	      return returnVal = {
	        unit: unit,
	        isStrict: isStrict,
	        value: amount,
	        string: amount === 0 ? "" + amount : "" + amount + unit
	      };
	    }
	    return value;
	  };

	  Helpers.prototype.bind = function(func, context) {
	    var bindArgs, wrapper;
	    wrapper = function() {
	      var args, unshiftArgs;
	      args = Array.prototype.slice.call(arguments);
	      unshiftArgs = bindArgs.concat(args);
	      return func.apply(context, unshiftArgs);
	    };
	    bindArgs = Array.prototype.slice.call(arguments, 2);
	    return wrapper;
	  };

	  Helpers.prototype.getRadialPoint = function(o) {
	    var point, radAngle, radiusX, radiusY;
	    if (o == null) {
	      o = {};
	    }
	    radAngle = (o.angle - 90) * 0.017453292519943295;
	    radiusX = o.radiusX != null ? o.radiusX : o.radius;
	    radiusY = o.radiusY != null ? o.radiusY : o.radius;
	    return point = {
	      x: o.center.x + (Math.cos(radAngle) * radiusX),
	      y: o.center.y + (Math.sin(radAngle) * radiusY)
	    };
	  };

	  Helpers.prototype.getPrefix = function() {
	    var dom, pre, styles, v;
	    styles = window.getComputedStyle(document.documentElement, "");
	    v = Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/);
	    pre = (v || (styles.OLink === "" && ["", "o"]))[1];
	    dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
	    return {
	      dom: dom,
	      lowercase: pre,
	      css: "-" + pre + "-",
	      js: pre[0].toUpperCase() + pre.substr(1)
	    };
	  };

	  Helpers.prototype.strToArr = function(string) {
	    var arr;
	    arr = [];
	    if (typeof string === 'number' && !isNaN(string)) {
	      arr.push(this.parseUnit(string));
	      return arr;
	    }
	    string.trim().split(/\s+/gim).forEach((function(_this) {
	      return function(str) {
	        return arr.push(_this.parseUnit(_this.parseIfRand(str)));
	      };
	    })(this));
	    return arr;
	  };

	  Helpers.prototype.calcArrDelta = function(arr1, arr2) {
	    var delta, i, j, len1, num;
	    delta = [];
	    for (i = j = 0, len1 = arr1.length; j < len1; i = ++j) {
	      num = arr1[i];
	      delta[i] = this.parseUnit("" + (arr2[i].value - arr1[i].value) + arr2[i].unit);
	    }
	    return delta;
	  };

	  Helpers.prototype.isArray = function(variable) {
	    return variable instanceof Array;
	  };

	  Helpers.prototype.normDashArrays = function(arr1, arr2) {
	    var arr1Len, arr2Len, currItem, i, j, k, lenDiff, ref, ref1, startI;
	    arr1Len = arr1.length;
	    arr2Len = arr2.length;
	    if (arr1Len > arr2Len) {
	      lenDiff = arr1Len - arr2Len;
	      startI = arr2.length;
	      for (i = j = 0, ref = lenDiff; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	        currItem = i + startI;
	        arr2.push(this.parseUnit("0" + arr1[currItem].unit));
	      }
	    } else if (arr2Len > arr1Len) {
	      lenDiff = arr2Len - arr1Len;
	      startI = arr1.length;
	      for (i = k = 0, ref1 = lenDiff; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
	        currItem = i + startI;
	        arr1.push(this.parseUnit("0" + arr2[currItem].unit));
	      }
	    }
	    return [arr1, arr2];
	  };

	  Helpers.prototype.makeColorObj = function(color) {
	    var alpha, b, colorObj, g, isRgb, r, regexString1, regexString2, result, rgbColor;
	    if (color[0] === '#') {
	      result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);
	      colorObj = {};
	      if (result) {
	        r = result[1].length === 2 ? result[1] : result[1] + result[1];
	        g = result[2].length === 2 ? result[2] : result[2] + result[2];
	        b = result[3].length === 2 ? result[3] : result[3] + result[3];
	        colorObj = {
	          r: parseInt(r, 16),
	          g: parseInt(g, 16),
	          b: parseInt(b, 16),
	          a: 1
	        };
	      }
	    }
	    if (color[0] !== '#') {
	      isRgb = color[0] === 'r' && color[1] === 'g' && color[2] === 'b';
	      if (isRgb) {
	        rgbColor = color;
	      }
	      if (!isRgb) {
	        rgbColor = !this.shortColors[color] ? (this.div.style.color = color, this.computedStyle(this.div).color) : this.shortColors[color];
	      }
	      regexString1 = '^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),';
	      regexString2 = '\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$';
	      result = new RegExp(regexString1 + regexString2, 'gi').exec(rgbColor);
	      colorObj = {};
	      alpha = parseFloat(result[4] || 1);
	      if (result) {
	        colorObj = {
	          r: parseInt(result[1], 10),
	          g: parseInt(result[2], 10),
	          b: parseInt(result[3], 10),
	          a: (alpha != null) && !isNaN(alpha) ? alpha : 1
	        };
	      }
	    }
	    return colorObj;
	  };

	  Helpers.prototype.computedStyle = function(el) {
	    return getComputedStyle(el);
	  };

	  Helpers.prototype.capitalize = function(str) {
	    if (typeof str !== 'string') {
	      throw Error('String expected - nothing to capitalize');
	    }
	    return str.charAt(0).toUpperCase() + str.substring(1);
	  };

	  Helpers.prototype.parseRand = function(string) {
	    var rand, randArr, units;
	    randArr = string.split(/rand\(|\,|\)/);
	    units = this.parseUnit(randArr[2]);
	    rand = this.rand(parseFloat(randArr[1]), parseFloat(randArr[2]));
	    if (units.unit && randArr[2].match(units.unit)) {
	      return rand + units.unit;
	    } else {
	      return rand;
	    }
	  };

	  Helpers.prototype.parseStagger = function(string, index) {
	    var base, number, splittedValue, unit, unitValue, value;
	    value = string.split(/stagger\(|\)$/)[1].toLowerCase();
	    splittedValue = value.split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim);
	    value = splittedValue.length > 3 ? (base = this.parseUnit(this.parseIfRand(splittedValue[1])), splittedValue[3]) : (base = this.parseUnit(0), splittedValue[1]);
	    value = this.parseIfRand(value);
	    unitValue = this.parseUnit(value);
	    number = index * unitValue.value + base.value;
	    unit = base.isStrict ? base.unit : unitValue.isStrict ? unitValue.unit : '';
	    if (unit) {
	      return "" + number + unit;
	    } else {
	      return number;
	    }
	  };

	  Helpers.prototype.parseIfStagger = function(value, i) {
	    if (!(typeof value === 'string' && value.match(/stagger/g))) {
	      return value;
	    } else {
	      return this.parseStagger(value, i);
	    }
	  };

	  Helpers.prototype.parseIfRand = function(str) {
	    if (typeof str === 'string' && str.match(/rand\(/)) {
	      return this.parseRand(str);
	    } else {
	      return str;
	    }
	  };

	  Helpers.prototype.parseDelta = function(key, value, index) {
	    var curve, delta, easing, end, endArr, endColorObj, i, j, len1, start, startArr, startColorObj;
	    value = this.cloneObj(value);
	    easing = value.easing;
	    if (easing != null) {
	      easing = mojs.easing.parseEasing(easing);
	    }
	    delete value.easing;
	    curve = value.curve;
	    if (curve != null) {
	      curve = mojs.easing.parseEasing(curve);
	    }
	    delete value.curve;
	    start = Object.keys(value)[0];
	    end = value[start];
	    delta = {
	      start: start
	    };
	    if (isNaN(parseFloat(start)) && !start.match(/rand\(/) && !start.match(/stagger\(/)) {
	      if (key === 'strokeLinecap') {
	        this.warn("Sorry, stroke-linecap property is not animatable yet, using the start(" + start + ") value instead", value);
	        return delta;
	      }
	      startColorObj = this.makeColorObj(start);
	      endColorObj = this.makeColorObj(end);
	      delta = {
	        type: 'color',
	        name: key,
	        start: startColorObj,
	        end: endColorObj,
	        easing: easing,
	        curve: curve,
	        delta: {
	          r: endColorObj.r - startColorObj.r,
	          g: endColorObj.g - startColorObj.g,
	          b: endColorObj.b - startColorObj.b,
	          a: endColorObj.a - startColorObj.a
	        }
	      };
	    } else if (key === 'strokeDasharray' || key === 'strokeDashoffset' || key === 'origin') {
	      startArr = this.strToArr(start);
	      endArr = this.strToArr(end);
	      this.normDashArrays(startArr, endArr);
	      for (i = j = 0, len1 = startArr.length; j < len1; i = ++j) {
	        start = startArr[i];
	        end = endArr[i];
	        this.mergeUnits(start, end, key);
	      }
	      delta = {
	        type: 'array',
	        name: key,
	        start: startArr,
	        end: endArr,
	        delta: this.calcArrDelta(startArr, endArr),
	        easing: easing,
	        curve: curve
	      };
	    } else {
	      if (!this.callbacksMap[key] && !this.tweenOptionMap[key]) {
	        if (this.unitOptionMap[key]) {
	          end = this.parseUnit(this.parseStringOption(end, index));
	          start = this.parseUnit(this.parseStringOption(start, index));
	          this.mergeUnits(start, end, key);
	          delta = {
	            type: 'unit',
	            name: key,
	            start: start,
	            end: end,
	            delta: end.value - start.value,
	            easing: easing,
	            curve: curve
	          };
	        } else {
	          end = parseFloat(this.parseStringOption(end, index));
	          start = parseFloat(this.parseStringOption(start, index));
	          delta = {
	            type: 'number',
	            name: key,
	            start: start,
	            end: end,
	            delta: end - start,
	            easing: easing,
	            curve: curve
	          };
	        }
	      }
	    }
	    return delta;
	  };

	  Helpers.prototype.mergeUnits = function(start, end, key) {
	    if (!end.isStrict && start.isStrict) {
	      end.unit = start.unit;
	      return end.string = "" + end.value + end.unit;
	    } else if (end.isStrict && !start.isStrict) {
	      start.unit = end.unit;
	      return start.string = "" + start.value + start.unit;
	    } else if (end.isStrict && start.isStrict) {
	      if (end.unit !== start.unit) {
	        start.unit = end.unit;
	        start.string = "" + start.value + start.unit;
	        return this.warn("Two different units were specified on \"" + key + "\" delta property, mo · js will fallback to end \"" + end.unit + "\" unit ");
	      }
	    }
	  };

	  Helpers.prototype.rand = function(min, max) {
	    return (Math.random() * (max - min)) + min;
	  };

	  Helpers.prototype.isDOM = function(o) {
	    var isNode;
	    if (o == null) {
	      return false;
	    }
	    isNode = typeof o.nodeType === 'number' && typeof o.nodeName === 'string';
	    return typeof o === 'object' && isNode;
	  };

	  Helpers.prototype.getChildElements = function(element) {
	    var childNodes, children, i;
	    childNodes = element.childNodes;
	    children = [];
	    i = childNodes.length;
	    while (i--) {
	      if (childNodes[i].nodeType === 1) {
	        children.unshift(childNodes[i]);
	      }
	    }
	    return children;
	  };

	  Helpers.prototype.delta = function(start, end) {
	    var isType1, isType2, obj, type1, type2;
	    type1 = typeof start;
	    type2 = typeof end;
	    isType1 = type1 === 'string' || type1 === 'number' && !isNaN(start);
	    isType2 = type2 === 'string' || type2 === 'number' && !isNaN(end);
	    if (!isType1 || !isType2) {
	      this.error("delta method expects Strings or Numbers at input but got - " + start + ", " + end);
	      return;
	    }
	    obj = {};
	    obj[start] = end;
	    return obj;
	  };

	  Helpers.prototype.getUniqID = function() {
	    return ++this.uniqIDs;
	  };

	  Helpers.prototype.parsePath = function(path) {
	    var domPath;
	    if (typeof path === 'string') {
	      if (path.charAt(0).toLowerCase() === 'm') {
	        domPath = document.createElementNS(this.NS, 'path');
	        domPath.setAttributeNS(null, 'd', path);
	        return domPath;
	      } else {
	        return document.querySelector(path);
	      }
	    }
	    if (path.style) {
	      return path;
	    }
	  };

	  Helpers.prototype.closeEnough = function(num1, num2, eps) {
	    return Math.abs(num1 - num2) < eps;
	  };

	  Helpers.prototype.checkIf3d = function() {
	    var div, prefixed, style, tr;
	    div = document.createElement('div');
	    this.style(div, 'transform', 'translateZ(0)');
	    style = div.style;
	    prefixed = this.prefix.css + "transform";
	    tr = style[prefixed] != null ? style[prefixed] : style.transform;
	    return tr !== '';
	  };


	  /*
	    Method to check if variable holds pointer to an object.
	    @param {Any} Variable to test
	    @returns {Boolean} If variable is object.
	   */

	  Helpers.prototype.isObject = function(variable) {
	    return variable !== null && typeof variable === 'object';
	  };


	  /*
	    Method to get first value of the object.
	    Used to get end value on ∆s.
	    @param {Object} Object to get the value of.
	    @returns {Any} The value of the first object' property.
	   */

	  Helpers.prototype.getDeltaEnd = function(obj) {
	    var key;
	    key = Object.keys(obj)[0];
	    return obj[key];
	  };


	  /*
	    Method to get first key of the object.
	    Used to get start value on ∆s.
	    @param {Object} Object to get the value of.
	    @returns {String} The key of the first object' property.
	   */

	  Helpers.prototype.getDeltaStart = function(obj) {
	    var key;
	    key = Object.keys(obj)[0];
	    return key;
	  };


	  /*
	    Method to check if propery exists in callbacksMap or tweenOptionMap.
	    @param {String} Property name to check for
	    @returns {Boolean} If property is tween property.
	   */

	  Helpers.prototype.isTweenProp = function(keyName) {
	    return this.tweenOptionMap[keyName] || this.callbacksMap[keyName];
	  };


	  /*
	    Method to parse string property value
	    which can include both `rand` and `stagger `
	    value in various positions.
	    @param {String} Property name to check for.
	    @param {Number} Optional index for stagger.
	    @returns {Number} Parsed option value.
	   */

	  Helpers.prototype.parseStringOption = function(value, index) {
	    if (index == null) {
	      index = 0;
	    }
	    if (typeof value === 'string') {
	      value = this.parseIfStagger(value, index);
	      value = this.parseIfRand(value);
	    }
	    return value;
	  };


	  /*
	    Method to get the last item of array.
	    @private
	    @param {Array} Array to get the last item in.
	    @returns {Any} The last item of array.
	   */

	  Helpers.prototype.getLastItem = function(arr) {
	    return arr[arr.length - 1];
	  };


	  /*
	    Method parse HTMLElement.
	    @private
	    @param {String, Object} Selector string or HTMLElement.
	    @returns {Object} HTMLElement.
	   */

	  Helpers.prototype.parseEl = function(el) {
	    if (h.isDOM(el)) {
	      return el;
	    } else if (typeof el === 'string') {
	      el = document.querySelector(el);
	    }
	    if (el === null) {
	      h.error("Can't parse HTML element: ", el);
	    }
	    return el;
	  };


	  /*
	    Method force compositor layer on HTMLElement.
	    @private
	    @param {Object} HTMLElement.
	    @returns {Object} HTMLElement.
	   */

	  Helpers.prototype.force3d = function(el) {
	    this.setPrefixedStyle(el, 'backface-visibility', 'hidden');
	    return el;
	  };


	  /*
	    Method to check if value is delta.
	    @private
	    @param {Any} Property to check.
	    @returns {Boolean} If value is delta.
	   */

	  Helpers.prototype.isDelta = function(optionsValue) {
	    var isObject;
	    isObject = this.isObject(optionsValue);
	    isObject = isObject && !optionsValue.unit;
	    return !(!isObject || this.isArray(optionsValue) || this.isDOM(optionsValue));
	  };

	  return Helpers;

	})();

	h = new Helpers;

	module.exports = h;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var Bit, BitsMap, Circle, Cross, Curve, Custom, Equal, Line, Polygon, Rect, Zigzag, h;

	Bit = __webpack_require__(73)["default"] || __webpack_require__(73);

	Custom = __webpack_require__(85)["default"] || __webpack_require__(85);

	Circle = __webpack_require__(86);

	Line = __webpack_require__(87);

	Zigzag = __webpack_require__(88);

	Rect = __webpack_require__(89);

	Polygon = __webpack_require__(90);

	Cross = __webpack_require__(91);

	Curve = __webpack_require__(92)["default"] || __webpack_require__(92);

	Equal = __webpack_require__(93);

	h = __webpack_require__(71);

	BitsMap = (function() {
	  function BitsMap() {
	    this.addShape = h.bind(this.addShape, this);
	  }

	  BitsMap.prototype.bit = Bit;

	  BitsMap.prototype.custom = Custom;

	  BitsMap.prototype.circle = Circle;

	  BitsMap.prototype.line = Line;

	  BitsMap.prototype.zigzag = Zigzag;

	  BitsMap.prototype.rect = Rect;

	  BitsMap.prototype.polygon = Polygon;

	  BitsMap.prototype.cross = Cross;

	  BitsMap.prototype.equal = Equal;

	  BitsMap.prototype.curve = Curve;

	  BitsMap.prototype.getShape = function(name) {
	    return this[name] || h.error("no \"" + name + "\" shape available yet, please choose from this list:", ['circle', 'line', 'zigzag', 'rect', 'polygon', 'cross', 'equal', 'curve']);
	  };


	  /*
	    Method to add shape to the map.
	    @public
	    @param {String} Name of the shape module.
	    @param {Object} Shape module class.
	   */

	  BitsMap.prototype.addShape = function(name, Module) {
	    return this[name] = Module;
	  };

	  return BitsMap;

	})();

	module.exports = new BitsMap;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(3);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(84);

	var _module2 = _interopRequireDefault(_module);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Bit = function (_Module) {
	  (0, _inherits3.default)(Bit, _Module);

	  function Bit() {
	    (0, _classCallCheck3.default)(this, Bit);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method to declare module's defaults.
	    @private
	  */
	  Bit.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {
	      'ns': 'http://www.w3.org/2000/svg',
	      'tag': 'ellipse',
	      'parent': document.body,
	      'ratio': 1,
	      'radius': 50,
	      'radiusX': null,
	      'radiusY': null,
	      'stroke': 'hotpink',
	      'stroke-dasharray': '',
	      'stroke-dashoffset': '',
	      'stroke-linecap': '',
	      'stroke-width': 2,
	      'stroke-opacity': 1,
	      'fill': 'transparent',
	      'fill-opacity': 1,
	      'width': 0,
	      'height': 0
	    };
	    this._drawMap = ['stroke', 'stroke-width', 'stroke-opacity', 'stroke-dasharray', 'fill', 'stroke-dashoffset', 'stroke-linecap', 'fill-opacity', 'transform'];
	  };

	  Bit.prototype._vars = function _vars() {
	    this._state = {};
	    this._drawMapLength = this._drawMap.length;
	  };
	  /*
	    Method for initial render of the shape.
	    @private
	  */


	  Bit.prototype._render = function _render() {
	    if (this._isRendered) {
	      return;
	    }
	    // set `_isRendered` hatch
	    this._isRendered = true;
	    // create `SVG` canvas to draw in
	    this._createSVGCanvas();
	    // set canvas size
	    this._setCanvasSize();
	    // draw the initial state
	    // this._draw();
	    // append the canvas to the parent from props
	    this._props.parent.appendChild(this._canvas);
	  };
	  /*
	    Method to create `SVG` canvas to draw in.
	    @private
	  */


	  Bit.prototype._createSVGCanvas = function _createSVGCanvas() {
	    var p = this._props;
	    // create canvas - `svg` element to draw in
	    this._canvas = document.createElementNS(p.ns, 'svg');
	    // create the element shape element and add it to the canvas
	    this.el = document.createElementNS(p.ns, p.tag);
	    this._canvas.appendChild(this.el);
	  };
	  /*
	    Method to set size of the _canvas.
	    @private
	  */


	  Bit.prototype._setCanvasSize = function _setCanvasSize() {
	    var p = this._props,
	        style = this._canvas.style;

	    style.display = 'block';
	    style.width = '100%';
	    style.height = '100%';
	    style.left = '0px';
	    style.top = '0px';
	  };
	  /*
	    Method to draw the shape.
	    Called on every frame.
	    @private
	  */


	  Bit.prototype._draw = function _draw() {
	    this._props.length = this._getLength();

	    var state = this._state,
	        props = this._props;

	    var len = this._drawMapLength;
	    while (len--) {
	      var name = this._drawMap[len];
	      switch (name) {
	        case 'stroke-dasharray':
	        case 'stroke-dashoffset':
	          this.castStrokeDash(name);
	      }
	      this._setAttrIfChanged(name, this._props[name]);
	    }
	    this._state.radius = this._props.radius;
	  };

	  Bit.prototype.castStrokeDash = function castStrokeDash(name) {
	    // # if array of values
	    var p = this._props;
	    if (_h2.default.isArray(p[name])) {
	      var stroke = '';
	      for (var i = 0; i < p[name].length; i++) {
	        var dash = p[name][i],
	            cast = dash.unit === '%' ? this.castPercent(dash.value) : dash.value;
	        stroke += cast + ' ';
	      }
	      p[name] = stroke === '0 ' ? stroke = '' : stroke;
	      return p[name] = stroke;
	    }
	    // # if single value
	    if ((0, _typeof3.default)(p[name]) === 'object') {
	      stroke = p[name].unit === '%' ? this.castPercent(p[name].value) : p[name].value;
	      p[name] = stroke === 0 ? stroke = '' : stroke;
	    }
	  };

	  Bit.prototype.castPercent = function castPercent(percent) {
	    return percent * (this._props.length / 100);
	  };

	  /*
	    Method to set props to attributes and cache the values.
	    @private
	  */


	  Bit.prototype._setAttrIfChanged = function _setAttrIfChanged(name, value) {
	    if (this._state[name] !== value) {
	      // this.el.style[name] = value;
	      this.el.setAttribute(name, value);
	      this._state[name] = value;
	    }
	  };
	  /*
	    Method to length of the shape.
	    @private
	    @returns {Number} Length of the shape.
	  */


	  Bit.prototype._getLength = function _getLength() {
	    var p = this._props,
	        len = 0,
	        isGetLength = !!(this.el && this.el.getTotalLength);

	    if (isGetLength && this.el.getAttribute('d')) {
	      len = this.el.getTotalLength();
	    } else {
	      len = 2 * (p.radiusX != null ? p.radiusX : p.radius);
	    }
	    return len;
	  };
	  /*
	    Method to calculate total sum between points.
	    @private
	    @param {Array} Array of points.
	    @returns {Number} Distance bewtween all points.
	  */


	  Bit.prototype._getPointsPerimiter = function _getPointsPerimiter(points) {
	    var sum = 0;

	    for (var i = 1; i < points.length; i++) {
	      sum += this._pointsDelta(points[i - 1], points[i]);
	    }

	    sum += this._pointsDelta(points[0], _h2.default.getLastItem(points));
	    return sum;
	  };
	  /*
	    Method to get delta from two points.
	    @private
	    @param {Object} Point 1.
	    @param {Object} Point 2.
	    @returns {Number} Distance between the pooints.
	  */


	  Bit.prototype._pointsDelta = function _pointsDelta(point1, point2) {
	    var dx = Math.abs(point1.x - point2.x),
	        dy = Math.abs(point1.y - point2.y);
	    return Math.sqrt(dx * dx + dy * dy);
	  };
	  /*
	    Method to set module's size.
	    @private
	    @param {Number} Module width.
	    @param {Number} Module height.
	  */


	  Bit.prototype._setSize = function _setSize(width, height) {
	    var p = this._props;
	    p.width = width;
	    p.height = height;
	    this._draw();
	  };

	  return Bit;
	}(_module2.default);

	exports.default = Bit;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(3);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(77);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(81);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(3);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(79);
	module.exports = __webpack_require__(14).Object.setPrototypeOf;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(12);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(80).set});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(20)
	  , anObject = __webpack_require__(19);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(15)(Function.call, __webpack_require__(67).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	var $Object = __webpack_require__(14).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(31)});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(3);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  Base class for module. Extends and parses defaults.
	*/
	var Module = function () {
	  function Module() {
	    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    (0, _classCallCheck3.default)(this, Module);

	    // this._isIt = o.isIt;
	    // delete o.isIt;
	    this._o = o;
	    this._index = this._o.index || 0;
	    // map of props that should be
	    // parsed to arrays of values
	    this._arrayPropertyMap = {
	      strokeDashoffset: 1,
	      strokeDasharray: 1,
	      origin: 1
	    };

	    this._skipPropsDelta = {
	      timeline: 1,
	      prevChainModule: 1,
	      callbacksContext: 1
	    };

	    this._declareDefaults();
	    this._extendDefaults();

	    this._vars();
	    this._render();
	  }
	  /*
	    Method to declare defaults.
	    @private
	  */


	  Module.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {};
	  };
	  /*
	    Method to declare module's variables.
	    @private
	  */


	  Module.prototype._vars = function _vars() {
	    this._progress = 0;
	    this._strokeDasharrayBuffer = [];
	  };
	  /*
	    Method to render on initialization.
	    @private
	  */


	  Module.prototype._render = function _render() {};
	  /*
	    Method to set property on the module.
	    @private
	    @param {String, Object} Name of the property to set
	                            or object with properties to set.
	    @param {Any} Value for the property to set. Could be
	                  undefined if the first param is object.
	  */


	  Module.prototype._setProp = function _setProp(attr, value) {
	    if ((typeof attr === 'undefined' ? 'undefined' : (0, _typeof3.default)(attr)) === 'object') {
	      for (var key in attr) {
	        this._assignProp(key, attr[key]);
	      }
	    } else {
	      this._assignProp(attr, value);
	    }
	  };
	  /*
	    Method to assign single property's value.
	    @private
	    @param {String} Property name.
	    @param {Any}    Property value.
	  */


	  Module.prototype._assignProp = function _assignProp(key, value) {
	    this._props[key] = value;
	  };
	  /*
	    Method to show element.
	    @private
	  */


	  Module.prototype._show = function _show() {
	    var p = this._props;
	    if (!this.el) {
	      return;
	    }

	    if (p.isSoftHide) {
	      // this.el.style.opacity = p.opacity;
	      this._showByTransform();
	    } else {
	      this.el.style.display = 'block';
	    }

	    this._isShown = true;
	  };
	  /*
	    Method to hide element.
	    @private
	  */


	  Module.prototype._hide = function _hide() {
	    if (!this.el) {
	      return;
	    }

	    if (this._props.isSoftHide) {
	      // this.el.style.opacity = 0;
	      _h2.default.setPrefixedStyle(this.el, 'transform', 'scale(0)');
	    } else {
	      this.el.style.display = 'none';
	    }

	    this._isShown = false;
	  };
	  /*
	    Method to show element by applying transform back to normal.
	    @private
	  */


	  Module.prototype._showByTransform = function _showByTransform() {};
	  /*
	    Method to parse option string.
	    Searches for stagger and rand values and parses them.
	    Leaves the value unattended otherwise.
	    @param {Any} Option value to parse.
	    @returns {Number} Parsed options value.
	  */


	  Module.prototype._parseOptionString = function _parseOptionString(value) {
	    if (typeof value === 'string') {
	      if (value.match(/stagger/)) {
	        value = _h2.default.parseStagger(value, this._index);
	      }
	    }
	    if (typeof value === 'string') {
	      if (value.match(/rand/)) {
	        value = _h2.default.parseRand(value);
	      }
	    }
	    return value;
	  };
	  /*
	    Method to parse postion option.
	    @param {String} Property name.
	    @param {Any} Property Value.
	    @returns {String} Parsed options value.
	  */


	  Module.prototype._parsePositionOption = function _parsePositionOption(key, value) {
	    if (_h2.default.unitOptionMap[key]) {
	      value = _h2.default.parseUnit(value).string;
	    }
	    return value;
	  };
	  /*
	    Method to parse strokeDash.. option.
	    @param {String} Property name.
	    @param {Any}    Property value.
	    @returns {String} Parsed options value.
	  */


	  Module.prototype._parseStrokeDashOption = function _parseStrokeDashOption(key, value) {
	    var result = value;
	    // parse numeric/percent values for strokeDash.. properties
	    if (this._arrayPropertyMap[key]) {
	      var result = [];
	      switch (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) {
	        case 'number':
	          result.push(_h2.default.parseUnit(value));
	          break;
	        case 'string':
	          var array = value.split(' ');
	          for (var i = 0; i < array.length; i++) {
	            result.push(_h2.default.parseUnit(array[i]));
	          }
	          break;
	      }
	    }
	    return result;
	  };
	  /*
	    Method to check if the property is delta property.
	    @private
	    @param {Any} Parameter value to check.
	    @returns {Boolean}
	  */


	  Module.prototype._isDelta = function _isDelta(optionsValue) {
	    var isObject = _h2.default.isObject(optionsValue);
	    isObject = isObject && !optionsValue.unit;
	    return !(!isObject || _h2.default.isArray(optionsValue) || _h2.default.isDOM(optionsValue));
	  };
	  /*
	    Method to get delta from property and set
	    the property's start value to the props object.
	    @private
	    @param {String} Key name to get delta for.
	    @param {Object} Option value to get the delta for.
	  */


	  Module.prototype._getDelta = function _getDelta(key, optionsValue) {
	    var delta;
	    if ((key === 'left' || key === 'top') && !this._o.ctx) {
	      _h2.default.warn('Consider to animate x/y properties instead of left/top,\n        as it would be much more performant', optionsValue);
	    }
	    // skip delta calculation for a property if it is listed
	    // in skipPropsDelta object
	    if (this._skipPropsDelta && this._skipPropsDelta[key]) {
	      return;
	    }
	    // get delta
	    delta = _h2.default.parseDelta(key, optionsValue, this._index);
	    // if successfully parsed - save it
	    if (delta.type != null) {
	      this._deltas[key] = delta;
	    }

	    var deltaEnd = (0, _typeof3.default)(delta.end) === 'object' ? delta.end.value === 0 ? 0 : delta.end.string : delta.end;
	    // set props to end value of the delta
	    // 0 should be 0 regardless units
	    this._props[key] = deltaEnd;
	  };
	  /*
	    Method to copy `_o` options to `_props` object
	    with fallback to `_defaults`.
	    @private
	  */


	  Module.prototype._extendDefaults = function _extendDefaults() {
	    this._props = {};
	    this._deltas = {};
	    for (var key in this._defaults) {
	      // skip property if it is listed in _skipProps
	      // if (this._skipProps && this._skipProps[key]) { continue; }
	      // copy the properties to the _o object
	      var value = this._o[key] != null ? this._o[key] : this._defaults[key];
	      // parse option
	      this._parseOption(key, value);
	    }
	  };
	  /*
	    Method to tune new oprions to _o and _props object.
	    @private
	    @param {Object} Options object to tune to.
	  */


	  Module.prototype._tuneNewOptions = function _tuneNewOptions(o) {
	    // hide the module before tuning it's options
	    // cuz the user could see the change
	    this._hide();
	    for (var key in o) {
	      // skip property if it is listed in _skipProps
	      // if (this._skipProps && this._skipProps[key]) { continue; }
	      // copy the properties to the _o object
	      // delete the key from deltas
	      o && delete this._deltas[key];
	      // rewrite _o record
	      this._o[key] = o[key];
	      // save the options to _props
	      this._parseOption(key, o[key]);
	    }
	  };
	  /*
	    Method to parse option value.
	    @private
	    @param {String} Option name.
	    @param {Any} Option value.
	  */


	  Module.prototype._parseOption = function _parseOption(name, value) {
	    // if delta property
	    if (this._isDelta(value) && !this._skipPropsDelta[name]) {
	      this._getDelta(name, value);
	      var deltaEnd = _h2.default.getDeltaEnd(value);
	      return this._assignProp(name, this._parseProperty(name, deltaEnd));
	    }

	    this._assignProp(name, this._parseProperty(name, value));
	  };
	  /*
	    Method to parse postion and string props.
	    @private
	    @param {String} Property name.
	    @param {Any}    Property value.
	    @returns {Any}  Parsed property value.
	  */


	  Module.prototype._parsePreArrayProperty = function _parsePreArrayProperty(name, value) {
	    // parse stagger and rand values
	    value = this._parseOptionString(value);
	    // parse units for position properties
	    return this._parsePositionOption(name, value);
	  };
	  /*
	    Method to parse property value.
	    @private
	    @param {String} Property name.
	    @param {Any}    Property value.
	    @returns {Any}  Parsed property value.
	  */


	  Module.prototype._parseProperty = function _parseProperty(name, value) {
	    // parse `HTML` element in `parent` option
	    if (name === 'parent') {
	      return _h2.default.parseEl(value);
	    }
	    // parse `stagger`, `rand` and `position`
	    value = this._parsePreArrayProperty(name, value);
	    // parse numeric/percent values for strokeDash.. properties
	    return this._parseStrokeDashOption(name, value);
	  };
	  /*
	    Method to parse values inside ∆.
	    @private
	    @param {String} Key name.
	    @param {Object} Delta.
	    @returns {Object} Delta with parsed parameters.
	  */


	  Module.prototype._parseDeltaValues = function _parseDeltaValues(name, delta) {
	    // return h.parseDelta( name, delta, this._index );

	    var d = {};
	    for (var key in delta) {
	      var value = delta[key];

	      // delete delta[key];
	      // add parsed properties
	      var newEnd = this._parsePreArrayProperty(name, value);
	      d[this._parsePreArrayProperty(name, key)] = newEnd;
	    }
	    return d;
	  };
	  /*
	    Method to parse delta and nondelta properties.
	    @private
	    @param {String} Property name.
	    @param {Any}    Property value.
	    @returns {Any}  Parsed property value.
	  */


	  Module.prototype._preparsePropValue = function _preparsePropValue(key, value) {
	    return this._isDelta(value) ? this._parseDeltaValues(key, value) : this._parsePreArrayProperty(key, value);
	  };
	  /*
	    Method to calculate current progress of the deltas.
	    @private
	    @param {Number} Eased progress to calculate - [0..1].
	    @param {Number} Progress to calculate - [0..1].
	  */


	  Module.prototype._calcCurrentProps = function _calcCurrentProps(easedProgress, p) {

	    for (var key in this._deltas) {

	      var value = this._deltas[key];

	      // get eased progress from delta easing if defined and not curve
	      var isCurve = !!value.curve;
	      var ep = value.easing != null && !isCurve ? value.easing(p) : easedProgress;

	      if (value.type === 'array') {
	        var arr;
	        // if prop property is array - reuse it else - create an array
	        if (_h2.default.isArray(this._props[key])) {
	          arr = this._props[key];
	          arr.length = 0;
	        } else {
	          arr = [];
	        }

	        // just optimization to prevent curve
	        // calculations on every array item
	        var proc = isCurve ? value.curve(p) : null;

	        for (var i = 0; i < value.delta.length; i++) {
	          var item = value.delta[i],
	              dash = !isCurve ? value.start[i].value + ep * item.value : proc * (value.start[i].value + p * item.value);
	          arr.push({
	            string: '' + dash + item.unit,
	            value: dash,
	            unit: item.unit
	          });
	        }

	        this._props[key] = arr;
	      } else if (value.type === 'number') {
	        this._props[key] = !isCurve ? value.start + ep * value.delta : value.curve(p) * (value.start + p * value.delta);
	      } else if (value.type === 'unit') {
	        var currentValue = !isCurve ? value.start.value + ep * value.delta : value.curve(p) * (value.start.value + p * value.delta);

	        this._props[key] = '' + currentValue + value.end.unit;
	      } else if (value.type === 'color') {
	        var r, g, b, a;
	        if (!isCurve) {
	          r = parseInt(value.start.r + ep * value.delta.r, 10);
	          g = parseInt(value.start.g + ep * value.delta.g, 10);
	          b = parseInt(value.start.b + ep * value.delta.b, 10);
	          a = parseFloat(value.start.a + ep * value.delta.a);
	        } else {
	          var cp = value.curve(p);
	          r = parseInt(cp * (value.start.r + p * value.delta.r), 10);
	          g = parseInt(cp * (value.start.g + p * value.delta.g), 10);
	          b = parseInt(cp * (value.start.b + p * value.delta.b), 10);
	          a = parseFloat(cp * (value.start.a + p * value.delta.a));
	        }
	        this._props[key] = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	      }
	    }
	  };
	  /*
	    Method to calculate current progress and probably draw it in children.
	    @private
	    @param {Number} Eased progress to set - [0..1].
	    @param {Number} Progress to set - [0..1].
	  */


	  Module.prototype._setProgress = function _setProgress(easedProgress, progress) {
	    this._progress = easedProgress;
	    this._calcCurrentProps(easedProgress, progress);
	  };

	  return Module;
	}();

	exports.default = Module;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _bit = __webpack_require__(73);

	var _bit2 = _interopRequireDefault(_bit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Custom = function (_Bit) {
	  (0, _inherits3.default)(Custom, _Bit);

	  function Custom() {
	    (0, _classCallCheck3.default)(this, Custom);
	    return (0, _possibleConstructorReturn3.default)(this, _Bit.apply(this, arguments));
	  }

	  /*
	    Method to declare module's defaults.
	    @private
	    @overrides @ Bit
	  */
	  Custom.prototype._declareDefaults = function _declareDefaults() {
	    _Bit.prototype._declareDefaults.call(this);

	    this._defaults.tag = 'path';
	    this._defaults.parent = null;

	    // remove `stroke-width` from `_drawMap`
	    // because we need to recal strokeWidth size regarding scale
	    for (var i = 0; i < this._drawMap.length; i++) {
	      if (this._drawMap[i] === 'stroke-width') {
	        this._drawMap.splice(i, 1);
	      }
	    }
	  };
	  /*
	    Method to get shape to set on module's path.
	    @public
	    @returns {String} Empty string.
	  */


	  Custom.prototype.getShape = function getShape() {
	    return '';
	  };
	  /*
	    Method to get shape perimeter length.
	    @public
	    @returns {Number} Default length string.
	  */


	  Custom.prototype.getLength = function getLength() {
	    return 100;
	  };
	  /*
	    Method to draw the shape.
	    Called on every frame.
	    @private
	    @overrides @ Bit
	  */


	  Custom.prototype._draw = function _draw() {
	    var p = this._props,
	        state = this._state,
	        radiusXChange = state['radiusX'] !== p.radiusX,
	        radiusYChange = state['radiusY'] !== p.radiusY,
	        radiusChange = state['radius'] !== p.radius;

	    // update transform only if one of radiuses changed
	    if (radiusXChange || radiusYChange || radiusChange) {
	      this.el.setAttribute('transform', this._getScale());
	      state['radiusX'] = p.radiusX;
	      state['radiusY'] = p.radiusY;
	      state['radius'] = p.radius;
	    }

	    this._setAttrIfChanged('stroke-width', p['stroke-width'] / p.maxScale);

	    _Bit.prototype._draw.call(this);
	  };
	  /*
	    Method for initial render of the shape.
	    @private
	    @overrides @ Bit
	  */


	  Custom.prototype._render = function _render() {
	    if (this._isRendered) {
	      return;
	    }
	    this._isRendered = true;

	    this._length = this.getLength();

	    var p = this._props;
	    p.parent.innerHTML = '<svg id="js-mojs-shape-canvas" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="js-mojs-shape-el">' + this.getShape() + '</g></svg>';

	    this._canvas = p.parent.querySelector('#js-mojs-shape-canvas');
	    this.el = p.parent.querySelector('#js-mojs-shape-el');
	    this._setCanvasSize();
	  };
	  /*
	    Method to get scales for the shape.
	    @private
	    @mutates @props
	  */


	  Custom.prototype._getScale = function _getScale() {
	    var p = this._props,
	        radiusX = p.radiusX ? p.radiusX : p.radius,
	        radiusY = p.radiusY ? p.radiusY : p.radius;

	    p.scaleX = 2 * radiusX / 100;
	    p.scaleY = 2 * radiusY / 100;
	    p.maxScale = Math.max(p.scaleX, p.scaleY);

	    p.shiftX = p.width / 2 - 50 * p.scaleX;
	    p.shiftY = p.height / 2 - 50 * p.scaleY;

	    var translate = 'translate(' + p.shiftX + ', ' + p.shiftY + ')';
	    return translate + ' scale(' + p.scaleX + ', ' + p.scaleY + ')';
	  };
	  /*
	    Method to length of the shape.
	    @private
	    @returns {Number} Length of the shape.
	  */


	  Custom.prototype._getLength = function _getLength() {
	    return this._length;
	  };

	  return Custom;
	}(_bit2.default);

	exports.default = Custom;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */
	var Bit, Circle,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	Bit = __webpack_require__(73)["default"] || __webpack_require__(73);

	Circle = (function(superClass) {
	  extend(Circle, superClass);

	  function Circle() {
	    return Circle.__super__.constructor.apply(this, arguments);
	  }

	  Circle.prototype._declareDefaults = function() {
	    Circle.__super__._declareDefaults.apply(this, arguments);
	    return this._defaults.shape = 'ellipse';
	  };

	  Circle.prototype._draw = function() {
	    var rx, ry;
	    rx = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	    ry = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	    this._setAttrIfChanged('rx', rx);
	    this._setAttrIfChanged('ry', ry);
	    this._setAttrIfChanged('cx', this._props.width / 2);
	    this._setAttrIfChanged('cy', this._props.height / 2);
	    return Circle.__super__._draw.apply(this, arguments);
	  };

	  Circle.prototype._getLength = function() {
	    var radiusX, radiusY;
	    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	    return 2 * Math.PI * Math.sqrt((radiusX * radiusX + radiusY * radiusY) / 2);
	  };

	  return Circle;

	})(Bit);

	module.exports = Circle;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */
	var Bit, Line,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	Bit = __webpack_require__(73)["default"] || __webpack_require__(73);

	Line = (function(superClass) {
	  extend(Line, superClass);

	  function Line() {
	    return Line.__super__.constructor.apply(this, arguments);
	  }

	  Line.prototype._declareDefaults = function() {
	    Line.__super__._declareDefaults.apply(this, arguments);
	    return this._defaults.tag = 'line';
	  };

	  Line.prototype._draw = function() {
	    var radiusX, x, y;
	    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	    x = this._props.width / 2;
	    y = this._props.height / 2;
	    this._setAttrIfChanged('x1', x - radiusX);
	    this._setAttrIfChanged('x2', x + radiusX);
	    this._setAttrIfChanged('y1', y);
	    this._setAttrIfChanged('y2', y);
	    return Line.__super__._draw.apply(this, arguments);
	  };

	  return Line;

	})(Bit);

	module.exports = Line;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */
	var Bit, Zigzag,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	Bit = __webpack_require__(73)["default"] || __webpack_require__(73);

	Zigzag = (function(superClass) {
	  extend(Zigzag, superClass);

	  function Zigzag() {
	    return Zigzag.__super__.constructor.apply(this, arguments);
	  }

	  Zigzag.prototype._declareDefaults = function() {
	    Zigzag.__super__._declareDefaults.apply(this, arguments);
	    this._defaults.tag = 'path';
	    return this._defaults.points = 3;
	  };

	  Zigzag.prototype._draw = function() {
	    var currentX, currentY, delta, i, isPoints, isRadiusX, isRadiusY, j, length, p, points, radiusX, radiusY, ref, stepX, x, y, yFlip;
	    Zigzag.__super__._draw.apply(this, arguments);
	    p = this._props;
	    if (!this._props.points) {
	      return;
	    }
	    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	    isRadiusX = radiusX === this._prevRadiusX;
	    isRadiusY = radiusY === this._prevRadiusY;
	    isPoints = p.points === this._prevPoints;
	    if (isRadiusX && isRadiusY && isPoints) {
	      return;
	    }
	    x = p.width / 2;
	    y = p.height / 2;
	    currentX = x - radiusX;
	    currentY = y;
	    stepX = (2 * radiusX) / (p.points - 1);
	    yFlip = -1;
	    delta = Math.sqrt(stepX * stepX + radiusY * radiusY);
	    length = -delta;
	    points = "M" + currentX + ", " + y + " ";
	    for (i = j = 0, ref = p.points; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	      points += "L" + currentX + ", " + currentY + " ";
	      currentX += stepX;
	      length += delta;
	      currentY = yFlip === -1 ? y - radiusY : y;
	      yFlip = -yFlip;
	    }
	    this._length = length;
	    this.el.setAttribute('d', points);
	    this._prevPoints = p.points;
	    this._prevRadiusX = radiusX;
	    return this._prevRadiusY = radiusY;
	  };

	  Zigzag.prototype._getLength = function() {
	    return this._length;
	  };

	  return Zigzag;

	})(Bit);

	module.exports = Zigzag;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */
	var Bit, Rect,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	Bit = __webpack_require__(73)["default"] || __webpack_require__(73);

	Rect = (function(superClass) {
	  extend(Rect, superClass);

	  function Rect() {
	    return Rect.__super__.constructor.apply(this, arguments);
	  }

	  Rect.prototype._declareDefaults = function() {
	    Rect.__super__._declareDefaults.apply(this, arguments);
	    this._defaults.tag = 'rect';
	    this._defaults.rx = 0;
	    return this._defaults.ry = 0;
	  };

	  Rect.prototype._draw = function() {
	    var p, radiusX, radiusY;
	    Rect.__super__._draw.apply(this, arguments);
	    p = this._props;
	    radiusX = p.radiusX != null ? p.radiusX : p.radius;
	    radiusY = p.radiusY != null ? p.radiusY : p.radius;
	    this._setAttrIfChanged('width', 2 * radiusX);
	    this._setAttrIfChanged('height', 2 * radiusY);
	    this._setAttrIfChanged('x', (p.width / 2) - radiusX);
	    this._setAttrIfChanged('y', (p.height / 2) - radiusY);
	    this._setAttrIfChanged('rx', p.rx);
	    return this._setAttrIfChanged('ry', p.ry);
	  };

	  Rect.prototype._getLength = function() {
	    var radiusX, radiusY;
	    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	    return 2 * (2 * radiusX + 2 * radiusY);
	  };

	  return Rect;

	})(Bit);

	module.exports = Rect;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */
	var Bit, Polygon, h,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	Bit = __webpack_require__(73)["default"] || __webpack_require__(73);

	h = __webpack_require__(71);

	Polygon = (function(superClass) {
	  extend(Polygon, superClass);

	  function Polygon() {
	    return Polygon.__super__.constructor.apply(this, arguments);
	  }


	  /*
	    Method to declare defaults.
	    @overrides @ Bit
	   */

	  Polygon.prototype._declareDefaults = function() {
	    Polygon.__super__._declareDefaults.apply(this, arguments);
	    this._defaults.tag = 'path';
	    return this._defaults.points = 3;
	  };


	  /*
	    Method to draw the shape.
	    @overrides @ Bit
	   */

	  Polygon.prototype._draw = function() {
	    var char, d, i, isPoints, isRadiusX, isRadiusY, j, k, len, p, point, radiusX, radiusY, ref, ref1, step;
	    p = this._props;
	    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	    isRadiusX = radiusX === this._prevRadiusX;
	    isRadiusY = radiusY === this._prevRadiusY;
	    isPoints = p.points === this._prevPoints;
	    if (!(isRadiusX && isRadiusY && isPoints)) {
	      step = 360 / this._props.points;
	      if (this._radialPoints == null) {
	        this._radialPoints = [];
	      } else {
	        this._radialPoints.length = 0;
	      }
	      for (i = j = 0, ref = this._props.points; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	        this._radialPoints.push(h.getRadialPoint({
	          radius: this._props.radius,
	          radiusX: this._props.radiusX,
	          radiusY: this._props.radiusY,
	          angle: i * step,
	          center: {
	            x: p.width / 2,
	            y: p.height / 2
	          }
	        }));
	      }
	      d = '';
	      ref1 = this._radialPoints;
	      for (i = k = 0, len = ref1.length; k < len; i = ++k) {
	        point = ref1[i];
	        char = i === 0 ? 'M' : 'L';
	        d += "" + char + (point.x.toFixed(4)) + "," + (point.y.toFixed(4)) + " ";
	      }
	      this._prevPoints = p.points;
	      this._prevRadiusX = radiusX;
	      this._prevRadiusY = radiusY;
	      this.el.setAttribute('d', (d += 'z'));
	    }
	    return Polygon.__super__._draw.apply(this, arguments);
	  };


	  /*
	    Method to get length of the shape.
	    @overrides @ Bit
	   */

	  Polygon.prototype._getLength = function() {
	    return this._getPointsPerimiter(this._radialPoints);
	  };

	  return Polygon;

	})(Bit);

	module.exports = Polygon;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */
	var Bit, Cross,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	Bit = __webpack_require__(73)["default"] || __webpack_require__(73);

	Cross = (function(superClass) {
	  extend(Cross, superClass);

	  function Cross() {
	    return Cross.__super__.constructor.apply(this, arguments);
	  }

	  Cross.prototype._declareDefaults = function() {
	    Cross.__super__._declareDefaults.apply(this, arguments);
	    return this._defaults.tag = 'path';
	  };

	  Cross.prototype._draw = function() {
	    var d, isRadiusX, isRadiusY, line1, line2, p, radiusX, radiusY, x, x1, x2, y, y1, y2;
	    Cross.__super__._draw.apply(this, arguments);
	    p = this._props;
	    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	    isRadiusX = radiusX === this._prevRadiusX;
	    isRadiusY = radiusY === this._prevRadiusY;
	    if (isRadiusX && isRadiusY) {
	      return;
	    }
	    x = this._props.width / 2;
	    y = this._props.height / 2;
	    x1 = x - radiusX;
	    x2 = x + radiusX;
	    line1 = "M" + x1 + "," + y + " L" + x2 + "," + y;
	    y1 = y - radiusY;
	    y2 = y + radiusY;
	    line2 = "M" + x + "," + y1 + " L" + x + "," + y2;
	    d = line1 + " " + line2;
	    this.el.setAttribute('d', d);
	    this._prevRadiusX = radiusX;
	    return this._prevRadiusY = radiusY;
	  };

	  Cross.prototype._getLength = function() {
	    var radiusX, radiusY;
	    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	    return 2 * (radiusX + radiusY);
	  };

	  return Cross;

	})(Bit);

	module.exports = Cross;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _bit = __webpack_require__(73);

	var _bit2 = _interopRequireDefault(_bit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Curve = function (_Bit) {
	  (0, _inherits3.default)(Curve, _Bit);

	  function Curve() {
	    (0, _classCallCheck3.default)(this, Curve);
	    return (0, _possibleConstructorReturn3.default)(this, _Bit.apply(this, arguments));
	  }

	  /*
	    Method to declare module's defaults.
	    @private
	    @overrides @ Bit
	  */
	  Curve.prototype._declareDefaults = function _declareDefaults() {
	    _Bit.prototype._declareDefaults.call(this);
	    this._defaults.tag = 'path';
	  };
	  /*
	    Method to draw the module.
	    @private
	    @overrides @ Bit
	  */


	  Curve.prototype._draw = function _draw() {
	    _Bit.prototype._draw.call(this);
	    var p = this._props;

	    var radiusX = p.radiusX != null ? p.radiusX : p.radius;
	    var radiusY = p.radiusY != null ? p.radiusY : p.radius;

	    var isRadiusX = radiusX === this._prevRadiusX;
	    var isRadiusY = radiusY === this._prevRadiusY;
	    var isPoints = p.points === this._prevPoints;
	    // skip if nothing changed
	    if (isRadiusX && isRadiusY && isPoints) {
	      return;
	    }

	    var x = p.width / 2;
	    var y = p.height / 2;
	    var x1 = x - radiusX;
	    var x2 = x + radiusX;

	    var d = 'M' + x1 + ' ' + y + ' Q ' + x + ' ' + (y - 2 * radiusY) + ' ' + x2 + ' ' + y;

	    // set the `d` attribute and save it to `_prevD`
	    this.el.setAttribute('d', d);
	    // save the properties
	    this._prevPoints = p.points;
	    this._prevRadiusX = radiusX;
	    this._prevRadiusY = radiusY;
	  };

	  Curve.prototype._getLength = function _getLength() {
	    var p = this._props;

	    var radiusX = p.radiusX != null ? p.radiusX : p.radius;
	    var radiusY = p.radiusY != null ? p.radiusY : p.radius;

	    var dRadius = radiusX + radiusY;
	    var sqrt = Math.sqrt((3 * radiusX + radiusY) * (radiusX + 3 * radiusY));

	    return .5 * Math.PI * (3 * dRadius - sqrt);
	  };

	  return Curve;
	}(_bit2.default); // istanbul ignore next


	exports.default = Curve;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */
	var Bit, Equal,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	Bit = __webpack_require__(73)["default"] || __webpack_require__(73);

	Equal = (function(superClass) {
	  extend(Equal, superClass);

	  function Equal() {
	    return Equal.__super__.constructor.apply(this, arguments);
	  }

	  Equal.prototype._declareDefaults = function() {
	    Equal.__super__._declareDefaults.apply(this, arguments);
	    this._defaults.tag = 'path';
	    return this._defaults.points = 2;
	  };

	  Equal.prototype._draw = function() {
	    var d, i, isPoints, isRadiusX, isRadiusY, j, p, radiusX, radiusY, ref, x, x1, x2, y, yStart, yStep;
	    Equal.__super__._draw.apply(this, arguments);
	    p = this._props;
	    if (!this._props.points) {
	      return;
	    }
	    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	    isRadiusX = radiusX === this._prevRadiusX;
	    isRadiusY = radiusY === this._prevRadiusY;
	    isPoints = p.points === this._prevPoints;
	    if (isRadiusX && isRadiusY && isPoints) {
	      return;
	    }
	    x = this._props.width / 2;
	    y = this._props.height / 2;
	    x1 = x - radiusX;
	    x2 = x + radiusX;
	    d = '';
	    yStep = 2 * radiusY / (this._props.points - 1);
	    yStart = y - radiusY;
	    for (i = j = 0, ref = this._props.points; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	      y = "" + (i * yStep + yStart);
	      d += "M" + x1 + ", " + y + " L" + x2 + ", " + y + " ";
	    }
	    this.el.setAttribute('d', d);
	    this._prevPoints = p.points;
	    this._prevRadiusX = radiusX;
	    return this._prevRadiusY = radiusY;
	  };

	  Equal.prototype._getLength = function() {
	    return 2 * (this._props.radiusX != null ? this._props.radiusX : this._props.radius);
	  };

	  return Equal;

	})(Bit);

	module.exports = Equal;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _keys = __webpack_require__(95);

	var _keys2 = _interopRequireDefault(_keys);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(84);

	var _module2 = _interopRequireDefault(_module);

	var _thenable = __webpack_require__(99);

	var _thenable2 = _interopRequireDefault(_thenable);

	var _tunable = __webpack_require__(116);

	var _tunable2 = _interopRequireDefault(_tunable);

	var _tweenable = __webpack_require__(100);

	var _tweenable2 = _interopRequireDefault(_tweenable);

	var _tween = __webpack_require__(101);

	var _tween2 = _interopRequireDefault(_tween);

	var _timeline = __webpack_require__(110);

	var _timeline2 = _interopRequireDefault(_timeline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var h = __webpack_require__(71);
	var Bit = __webpack_require__(73);
	var shapesMap = __webpack_require__(72);

	// TODO
	//  - refactor
	//    - add setIfChanged to Module
	//  --
	//  - tween for every prop

	var Shape = function (_Tunable) {
	  (0, _inherits3.default)(Shape, _Tunable);

	  function Shape() {
	    (0, _classCallCheck3.default)(this, Shape);
	    return (0, _possibleConstructorReturn3.default)(this, _Tunable.apply(this, arguments));
	  }

	  /*
	    Method to declare module's defaults.
	    @private
	  */
	  Shape.prototype._declareDefaults = function _declareDefaults() {
	    // DEFAULTS / APIs
	    this._defaults = {
	      // where to append the module to [selector, HTMLElement]
	      parent: document.body,
	      // class name for the `el`
	      className: '',
	      // Possible values: [circle, line, zigzag, rect, polygon, cross, equal ]
	      shape: 'circle',
	      // ∆ :: Possible values: [color name, rgb, rgba, hex]
	      stroke: 'transparent',
	      // ∆ :: Possible values: [ 0..1 ]
	      strokeOpacity: 1,
	      // Possible values: ['butt' | 'round' | 'square']
	      strokeLinecap: '',
	      // ∆ :: Possible values: [ number ]
	      strokeWidth: 2,
	      // ∆ :: Units :: Possible values: [ number, string ]
	      strokeDasharray: 0,
	      // ∆ :: Units :: Possible values: [ number, string ]
	      strokeDashoffset: 0,
	      // ∆ :: Possible values: [color name, rgb, rgba, hex]
	      fill: 'deeppink',
	      // ∆ :: Possible values: [ 0..1 ]
	      fillOpacity: 1,
	      // {Boolean} - if should hide module with `opacity` instead of `display`
	      isSoftHide: true,
	      // {Boolean} - if should trigger composite layer for the `el`
	      isForce3d: false,
	      // ∆ :: Units :: Possible values: [ number, string ]
	      left: '50%',
	      // ∆ :: Units :: Possible values: [ number, string ]
	      top: '50%',
	      // ∆ :: Units :: Possible values: [ number, string ]
	      x: 0,
	      // ∆ :: Units :: Possible values: [ number, string ]
	      y: 0,
	      // ∆ :: Possible values: [ number ]
	      angle: 0,
	      // ∆ :: Possible values: [ number ]
	      scale: 1,
	      // ∆ :: Possible values: [ number ] Fallbacks to `scale`.
	      scaleX: null,
	      // ∆ :: Possible values: [ number ] Fallbacks to `scale`.
	      scaleY: null,
	      // ∆ :: Possible values: [ number, string ]
	      origin: '50% 50%',
	      // ∆ :: Possible values: [ 0..1 ]
	      opacity: 1,
	      // ∆ :: Units :: Possible values: [ number, string ]
	      rx: 0,
	      // ∆ :: Units :: Possible values: [ number, string ]
	      ry: 0,
	      // ∆ :: Possible values: [ number ]
	      points: 3,
	      // ∆ :: Possible values: [ number ]
	      radius: 50,
	      // ∆ :: Possible values: [ number ]
	      radiusX: null,
	      // ∆ :: Possible values: [ number ]
	      radiusY: null,
	      // Possible values: [ boolean ]
	      isShowStart: false,
	      // Possible values: [ boolean ]
	      isShowEnd: true,
	      // Possible values: [ boolean ]
	      isRefreshState: true,
	      // Possible values: [ number > 0 ]
	      duration: 400,
	      // Possible values: [ number ]

	      /* technical ones: */
	      // explicit width of the module canvas
	      width: null,
	      // explicit height of the module canvas
	      height: null,
	      // Possible values: [ number ]
	      // sizeGap:          0,
	      /* [boolean] :: If should have child shape. */
	      isWithShape: true,
	      // context for all the callbacks
	      callbacksContext: this
	    };
	  };
	  /*
	    Method to start the animation with optional new options.
	    @public
	    @overrides @ Tunable
	    @param {Object} New options to set on the run.
	    @returns {Object} this.
	  */


	  Shape.prototype.tune = function tune(o) {
	    _Tunable.prototype.tune.call(this, o);
	    // update shapeModule's size to the max in `then` chain
	    this._getMaxSizeInChain();
	    return this;
	  };
	  /*
	    Method to create a then record for the module.
	    @public
	    @overrides @ Thenable
	    @param    {Object} Options for the next animation.
	    @returns  {Object} this.
	  */


	  Shape.prototype.then = function then(o) {
	    // this._makeTimeline()
	    _Tunable.prototype.then.call(this, o);
	    // update shapeModule's size to the max in `then` chain
	    this._getMaxSizeInChain();
	    return this;
	  };

	  // ^ PUBLIC  METHOD(S) ^
	  // v PRIVATE METHOD(S) v

	  /*
	    Method to declare variables.
	    @overrides Thenable
	  */


	  Shape.prototype._vars = function _vars() {
	    // call _vars method on Thenable
	    _Tunable.prototype._vars.call(this);
	    this._lastSet = {};
	    // save previous module in the chain
	    this._prevChainModule = this._o.prevChainModule;
	    // should draw on foreign svg canvas
	    this.isForeign = !!this._o.ctx;
	    // this._o.isTimelineLess = true;
	    // should take an svg element as self bit
	    return this.isForeignBit = !!this._o.shape;
	  };
	  /*
	    Method to initialize modules presentation.
	    @private
	    @overrides Module
	  */


	  Shape.prototype._render = function _render() {
	    if (!this._isRendered && !this._isChained) {
	      // create `mojs` shape element
	      this.el = document.createElement('div');
	      // set name on the `el`
	      this.el.setAttribute('data-name', 'mojs-shape');
	      // set class on the `el`
	      this.el.setAttribute('class', this._props.className);
	      // create shape module
	      this._createShape();
	      // append `el` to parent
	      this._props.parent.appendChild(this.el);
	      // set position styles on the el
	      this._setElStyles();
	      // set initial position for the first module in the chain
	      this._setProgress(0, 0);
	      // show at start if `isShowStart`
	      if (this._props.isShowStart) {
	        this._show();
	      } else {
	        this._hide();
	      }
	      // set `_isRendered` hatch
	      this._isRendered = true;
	    } else if (this._isChained) {
	      // save elements from master module
	      this.el = this._masterModule.el;
	      this.shapeModule = this._masterModule.shapeModule;
	    }

	    return this;
	  };
	  /*
	    Method to set el styles on initialization.
	    @private
	  */


	  Shape.prototype._setElStyles = function _setElStyles() {
	    if (!this.el) {
	      return;
	    }
	    // if (!this.isForeign) {
	    var p = this._props,
	        style = this.el.style,
	        width = p.shapeWidth,
	        height = p.shapeHeight;

	    style.position = 'absolute';
	    this._setElSizeStyles(width, height);

	    if (p.isForce3d) {
	      var name = 'backface-visibility';
	      style['' + name] = 'hidden';
	      style['' + h.prefix.css + name] = 'hidden';
	    }
	    // }
	  };
	  /*
	    Method to set `width`/`height`/`margins` to the `el` styles.
	    @param {Number} Width.
	    @param {height} Height.
	  */


	  Shape.prototype._setElSizeStyles = function _setElSizeStyles(width, height) {
	    var style = this.el.style;
	    style.width = width + 'px';
	    style.height = height + 'px';
	    style['margin-left'] = -width / 2 + 'px';
	    style['margin-top'] = -height / 2 + 'px';
	  };
	  /*
	    Method to draw shape.
	    @private
	  */


	  Shape.prototype._draw = function _draw() {
	    if (!this.shapeModule) {
	      return;
	    }

	    var p = this._props,
	        bP = this.shapeModule._props;
	    // set props on bit
	    // bP.x                    = this._origin.x;
	    // bP.y                    = this._origin.y;
	    bP.rx = p.rx;
	    bP.ry = p.ry;
	    bP.stroke = p.stroke;
	    bP['stroke-width'] = p.strokeWidth;
	    bP['stroke-opacity'] = p.strokeOpacity;
	    bP['stroke-dasharray'] = p.strokeDasharray;
	    bP['stroke-dashoffset'] = p.strokeDashoffset;
	    bP['stroke-linecap'] = p.strokeLinecap;
	    bP['fill'] = p.fill;
	    bP['fill-opacity'] = p.fillOpacity;
	    bP.radius = p.radius;
	    bP.radiusX = p.radiusX;
	    bP.radiusY = p.radiusY;
	    bP.points = p.points;

	    this.shapeModule._draw();
	    this._drawEl();
	  };
	  /*
	    Method to set current modules props to main div el.
	    @private
	  */


	  Shape.prototype._drawEl = function _drawEl() {
	    // return;
	    if (this.el == null) {
	      return true;
	    }
	    var p = this._props;
	    var style = this.el.style;

	    // style.opacity = p.opacity;
	    this._isPropChanged('opacity') && (style.opacity = p.opacity);
	    if (!this.isForeign) {
	      this._isPropChanged('left') && (style.left = p.left);
	      this._isPropChanged('top') && (style.top = p.top);

	      var isX = this._isPropChanged('x'),
	          isY = this._isPropChanged('y'),
	          isTranslate = isX || isY,
	          isScaleX = this._isPropChanged('scaleX'),
	          isScaleY = this._isPropChanged('scaleY'),
	          isScale = this._isPropChanged('scale'),
	          isScale = isScale || isScaleX || isScaleY,
	          isRotate = this._isPropChanged('angle');

	      if (isTranslate || isScale || isRotate) {
	        var transform = this._fillTransform();
	        style[h.prefix.css + 'transform'] = transform;
	        style['transform'] = transform;
	      }

	      if (this._isPropChanged('origin') || this._deltas['origin']) {
	        var origin = this._fillOrigin();
	        style[h.prefix.css + 'transform-origin'] = origin;
	        style['transform-origin'] = origin;
	      }
	    }
	  };
	  /*
	    Method to check if property changed after the latest check.
	    @private
	    @param {String} Name of the property to check.
	    @returns {Boolean}
	  */


	  Shape.prototype._isPropChanged = function _isPropChanged(name) {
	    // if there is no recod for the property - create it
	    if (this._lastSet[name] == null) {
	      this._lastSet[name] = {};
	    }
	    if (this._lastSet[name].value !== this._props[name]) {
	      this._lastSet[name].value = this._props[name];
	      return true;
	    } else {
	      return false;
	    }
	  };
	  /*
	    Method to tune new option on run.
	    @private
	    @override @ Module
	    @param {Object}  Option to tune on run.
	  */


	  Shape.prototype._tuneNewOptions = function _tuneNewOptions(o) {
	    // call super on Module
	    _Tunable.prototype._tuneNewOptions.call(this, o);
	    // return if empty object
	    if (!(o != null && (0, _keys2.default)(o).length)) {
	      return 1;
	    }

	    // this._calcSize();
	    this._setElStyles();
	  };
	  /*
	    Method to get max radiusX value.
	    @private
	    @param {String} Radius name.
	  */


	  Shape.prototype._getMaxRadius = function _getMaxRadius(name) {
	    var selfSize, selfSizeX;
	    selfSize = this._getRadiusSize('radius');
	    return this._getRadiusSize(name, selfSize);
	  };
	  /*
	    Method to increase calculated size based on easing.
	    @private
	  */


	  Shape.prototype._increaseSizeWithEasing = function _increaseSizeWithEasing() {
	    var p = this._props,
	        easing = this._o.easing,
	        isStringEasing = easing && typeof easing === 'string';

	    switch (isStringEasing && easing.toLowerCase()) {
	      case 'elastic.out':
	      case 'elastic.inout':
	        p.size *= 1.25;
	        break;
	      case 'back.out':
	      case 'back.inout':
	        p.size *= 1.1;
	    }
	  };
	  /*
	    Method to increase calculated size based on bit ratio.
	    @private
	  */
	  // _increaseSizeWithBitRatio () {
	  //   var p   = this._props;
	  //   // p.size *= this.shape._props.ratio;
	  //   p.size += 2 * p.sizeGap;
	  // }
	  /*
	    Method to get maximum radius size with optional fallback.
	    @private
	    @param {Object}
	      @param key {String} Name of the radius - [radius|radiusX|radiusY].
	      @param @optional fallback {Number}  Optional number to set if there
	                                          is no value for the key.
	  */


	  Shape.prototype._getRadiusSize = function _getRadiusSize(name) {
	    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	    var delta = this._deltas[name];
	    // if value is delta value
	    if (delta != null) {
	      // get maximum number between start and end values of the delta
	      return Math.max(Math.abs(delta.end), Math.abs(delta.start));
	    } else if (this._props[name] != null) {
	      // else get the value from props object
	      return parseFloat(this._props[name]);
	    } else {
	      return fallback;
	    }
	  };
	  /*
	    Method to get max shape canvas size and save it to _props.
	    @private
	  */


	  Shape.prototype._getShapeSize = function _getShapeSize() {
	    var p = this._props,

	    // get maximum stroke value
	    stroke = this._getMaxStroke();
	    // save shape `width` and `height` to `_props`
	    p.shapeWidth = p.width != null ? p.width : 2 * this._getMaxRadius('radiusX') + stroke;

	    p.shapeHeight = p.height != null ? p.height : 2 * this._getMaxRadius('radiusY') + stroke;
	  };
	  /*
	    Method to create shape.
	    @private
	  */


	  Shape.prototype._createShape = function _createShape() {
	    // calculate max shape canvas size and set to _props
	    this._getShapeSize();
	    // don't create actual shape if !`isWithShape`
	    if (!this._props.isWithShape) {
	      return;
	    }

	    var p = this._props;
	    // get shape's class
	    var Shape = shapesMap.getShape(this._props.shape);
	    // create `_shape` module
	    this.shapeModule = new Shape({
	      width: p.shapeWidth,
	      height: p.shapeHeight,
	      parent: this.el
	    });
	  };
	  /*
	    Method to get max size in `then` chain
	    @private
	  */


	  Shape.prototype._getMaxSizeInChain = function _getMaxSizeInChain() {
	    var p = this._props,
	        maxW = 0,
	        maxH = 0;

	    for (var i = 0; i < this._modules.length; i++) {
	      this._modules[i]._getShapeSize();
	      maxW = Math.max(maxW, this._modules[i]._props.shapeWidth);
	      maxH = Math.max(maxH, this._modules[i]._props.shapeHeight);
	    }

	    this.shapeModule && this.shapeModule._setSize(maxW, maxH);
	    this._setElSizeStyles(maxW, maxH);
	  };
	  /*
	    Method to get max value of the strokeWidth.
	    @private
	  */


	  Shape.prototype._getMaxStroke = function _getMaxStroke() {
	    var p = this._props;
	    var dStroke = this._deltas['strokeWidth'];
	    return dStroke != null ? Math.max(dStroke.start, dStroke.end) : p.strokeWidth;
	  };
	  /*
	    Method to draw current progress of the deltas.
	    @private
	    @override @ Module
	    @param   {Number}  EasedProgress to set - [0..1].
	    @param   {Number}  Progress to set - [0..1].
	  */


	  Shape.prototype._setProgress = function _setProgress(easedProgress, progress) {
	    // call the super on Module
	    _module2.default.prototype._setProgress.call(this, easedProgress, progress);
	    // draw current progress
	    this._draw(easedProgress);
	  };
	  /*
	    Method to add callback overrides to passed object.
	    @private
	    @param {Object} Object to add the overrides to.
	  */


	  Shape.prototype._applyCallbackOverrides = function _applyCallbackOverrides(obj) {
	    var it = this,
	        p = this._props;
	    // specify control functions for the module
	    obj.callbackOverrides = {
	      onUpdate: function onUpdate(ep, p) {
	        return it._setProgress(ep, p);
	      },
	      onStart: function onStart(isFwd) {
	        // don't touch main `el` onStart in chained elements
	        if (it._isChained) {
	          return;
	        };
	        if (isFwd) {
	          it._show();
	        } else {
	          if (!p.isShowStart) {
	            it._hide();
	          }
	        }
	      },
	      onComplete: function onComplete(isFwd) {
	        // don't touch main `el` if not the last in `then` chain
	        if (!it._isLastInChain()) {
	          return;
	        }
	        if (isFwd) {
	          if (!p.isShowEnd) {
	            it._hide();
	          }
	        } else {
	          it._show();
	        }
	      },
	      onRefresh: function onRefresh(isBefore) {
	        p.isRefreshState && isBefore && it._refreshBefore();
	      }
	    };
	  };
	  /*
	    Method to setup tween and timeline options before creating them.
	    @override @ Tweenable
	    @private
	  */


	  Shape.prototype._transformTweenOptions = function _transformTweenOptions() {
	    this._applyCallbackOverrides(this._o);
	  };
	  /*
	    Method to create transform string.
	    @private
	    @returns {String} Transform string.
	  */


	  Shape.prototype._fillTransform = function _fillTransform() {
	    var p = this._props,
	        scaleX = p.scaleX != null ? p.scaleX : p.scale,
	        scaleY = p.scaleY != null ? p.scaleY : p.scale,
	        scale = scaleX + ', ' + scaleY;
	    return 'translate(' + p.x + ', ' + p.y + ') rotate(' + p.angle + 'deg) scale(' + scale + ')';
	  };
	  /*
	    Method to create transform-origin string.
	    @private
	    @returns {String} Transform string.
	  */


	  Shape.prototype._fillOrigin = function _fillOrigin() {
	    var p = this._props,
	        str = '';
	    for (var i = 0; i < p.origin.length; i++) {
	      str += p.origin[i].string + ' ';
	    }
	    return str;
	  };
	  /*
	    Method to refresh state befor startTime.
	    @private
	  */


	  Shape.prototype._refreshBefore = function _refreshBefore() {
	    // call setProgress with eased and normal progress
	    this._setProgress(this.tween._props.easing(0), 0);

	    if (this._props.isShowStart) {
	      this._show();
	    } else {
	      this._hide();
	    }
	  };
	  /*
	    Method that gets called on `soft` show of the module,
	    it should restore transform styles of the module.
	    @private
	    @overrides @ Module
	  */


	  Shape.prototype._showByTransform = function _showByTransform() {
	    // reset the cache of the scale prop
	    this._lastSet.scale = null;
	    // draw el accroding to it's props
	    this._drawEl();
	  };

	  return Shape;
	}(_tunable2.default);

	exports.default = Shape;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(97);
	module.exports = __webpack_require__(14).Object.keys;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(49)
	  , $keys    = __webpack_require__(33);

	__webpack_require__(98)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(12)
	  , core    = __webpack_require__(14)
	  , fails   = __webpack_require__(23);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _keys = __webpack_require__(95);

	var _keys2 = _interopRequireDefault(_keys);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _tweenable = __webpack_require__(100);

	var _tweenable2 = _interopRequireDefault(_tweenable);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  The Thenable class adds .then public method and
	  the ability to chain API calls.
	*/
	var Thenable = function (_Tweenable) {
	  (0, _inherits3.default)(Thenable, _Tweenable);

	  function Thenable() {
	    (0, _classCallCheck3.default)(this, Thenable);
	    return (0, _possibleConstructorReturn3.default)(this, _Tweenable.apply(this, arguments));
	  }

	  /*
	    Method to create a then record for the module.
	    @public
	    @param    {Object} Options for the next animation.
	    @returns  {Object} this.
	  */
	  Thenable.prototype.then = function then(o) {
	    // return if nothing was passed
	    if (o == null || !(0, _keys2.default)(o).length) {
	      return 1;
	    }
	    // merge then options with the current ones
	    var prevRecord = this._history[this._history.length - 1],
	        prevModule = this._modules[this._modules.length - 1],
	        merged = this._mergeThenOptions(prevRecord, o);

	    this._resetMergedFlags(merged);
	    // create a submodule of the same type as the master module
	    var module = new this.constructor(merged);
	    // set `this` as amster module of child module
	    module._masterModule = this;
	    // save the modules to the _modules array
	    this._modules.push(module);
	    // add module's tween into master timeline
	    this.timeline.append(module);

	    return this;
	  };

	  // ^ PUBLIC  METHOD(S) ^
	  // v PRIVATE METHOD(S) v

	  /*
	    Method to reset some flags on merged options object.
	    @private
	    @param   {Object} Options object.
	    @returns {Object} Options object.
	  */


	  Thenable.prototype._resetMergedFlags = function _resetMergedFlags(obj) {
	    // set the submodule to be without timeline for perf reasons
	    obj.isTimelineLess = true;
	    // reset isShowStart flag for the submodules
	    obj.isShowStart = false;
	    // reset isRefreshState flag for the submodules
	    obj.isRefreshState = false;
	    // set the submodule callbacks context
	    obj.callbacksContext = this._props.callbacksContext || this;
	    // set previous module
	    obj.prevChainModule = _h2.default.getLastItem(this._modules);
	    // pass the `this` as master module
	    obj.masterModule = this;
	    return obj;
	  };
	  /*
	    Method to initialize properties.
	    @private
	  */


	  Thenable.prototype._vars = function _vars() {
	    _Tweenable.prototype._vars.call(this);
	    // save _master module
	    this._masterModule = this._o.masterModule;
	    // set isChained flag based on prevChainModule option
	    this._isChained = !!this._masterModule;
	    // we are expect that the _o object
	    // have been already extended by defaults
	    var initialRecord = _h2.default.cloneObj(this._props);
	    for (var key in this._arrayPropertyMap) {
	      if (this._o[key]) {
	        var preParsed = this._parsePreArrayProperty(key, this._o[key]);
	        initialRecord[key] = preParsed;
	      }
	    }

	    this._history = [initialRecord];
	    // the array holds all modules in the then chain
	    this._modules = [this];
	    // the props that to exclude from then merge
	    this._nonMergeProps = { shape: 1 };
	  };
	  /*
	    Method to merge two options into one. Used in .then chains.
	    @private
	    @param {Object} Start options for the merge.
	    @param {Object} End options for the merge.
	    @returns {Object} Merged options.
	  */


	  Thenable.prototype._mergeThenOptions = function _mergeThenOptions(start, end) {
	    var o = {};
	    this._mergeStartLoop(o, start);
	    this._mergeEndLoop(o, start, end);
	    this._history.push(o);
	    return o;
	  };
	  /*
	    Method to pipe startValue of the delta.
	    @private
	    @param {String} Start property name.
	    @param {Any} Start property value.
	    @returns {Any} Start property value.
	  */


	  Thenable.prototype._checkStartValue = function _checkStartValue(name, value) {
	    return value;
	  };
	  /*
	    Originally part of the _mergeThenOptions.
	    Loops thru start object and copies all the props from it.
	    @param {Object} An object to copy in.
	    @parma {Object} Start options object.
	  */


	  Thenable.prototype._mergeStartLoop = function _mergeStartLoop(o, start) {
	    // loop thru start options object
	    for (var key in start) {
	      var value = start[key];
	      if (start[key] == null) {
	        continue;
	      };
	      // copy all values from start if not tween prop or duration
	      if (!_h2.default.isTweenProp(key) || key === 'duration') {
	        // if delta - copy only the end value
	        if (this._isDelta(value)) {
	          o[key] = _h2.default.getDeltaEnd(value);
	        } else {
	          o[key] = value;
	        }
	      }
	    }
	  };
	  /*
	    Originally part of the _mergeThenOptions.
	    Loops thru start object and merges all the props from it.
	    @param {Object} An object to copy in.
	    @parma {Object} Start options object.
	    @parma {Object} End options object.
	  */


	  Thenable.prototype._mergeEndLoop = function _mergeEndLoop(o, start, end) {
	    var endKeys = (0, _keys2.default)(end);

	    for (var key in end) {
	      // just copy parent option
	      if (key == 'parent') {
	        o[key] = end[key];continue;
	      };

	      // get key/value of the end object
	      // endKey - name of the property, endValue - value of the property
	      var endValue = end[key],
	          startValue = start[key] != null ? start[key] : this._defaults[key];

	      startValue = this._checkStartValue(key, startValue);
	      if (endValue == null) {
	        continue;
	      };
	      // make ∆ of start -> end
	      // if key name is radiusX/radiusY and
	      // the startValue is not set fallback to radius value
	      var isSubRadius = key === 'radiusX' || key === 'radiusY';
	      if (isSubRadius && startValue == null) {
	        startValue = start.radius;
	      }

	      var isSubRadius = key === 'scaleX' || key === 'scaleY';
	      if (isSubRadius && startValue == null) {
	        startValue = start.scale;
	      }

	      o[key] = this._mergeThenProperty(key, startValue, endValue);
	    }
	  };
	  /*
	    Method to merge `start` and `end` for a property in then record.
	    @private
	    @param {String} Property name.
	    @param {Any}    Start value of the property.
	    @param {Any}    End value of the property.
	  */


	  Thenable.prototype._mergeThenProperty = function _mergeThenProperty(key, startValue, endValue) {
	    // if isnt tween property
	    var isBoolean = typeof endValue === 'boolean',
	        curve,
	        easing;

	    if (!_h2.default.isTweenProp(key) && !this._nonMergeProps[key] && !isBoolean) {

	      if (_h2.default.isObject(endValue) && endValue.to != null) {
	        curve = endValue.curve;
	        easing = endValue.easing;
	        endValue = endValue.to;
	      }

	      // if end value is delta - just save it
	      if (this._isDelta(endValue)) {
	        return this._parseDeltaValues(key, endValue);
	      } else {
	        var parsedEndValue = this._parsePreArrayProperty(key, endValue);
	        // if end value is not delta - merge with start value
	        if (this._isDelta(startValue)) {
	          var _ref;

	          // if start value is delta - take the end value
	          // as start value of the new delta
	          return _ref = {}, _ref[_h2.default.getDeltaEnd(startValue)] = parsedEndValue, _ref.easing = easing, _ref.curve = curve, _ref;
	          // if both start and end value are not ∆ - make ∆
	        } else {
	          var _ref2;

	          return _ref2 = {}, _ref2[startValue] = parsedEndValue, _ref2.easing = easing, _ref2.curve = curve, _ref2;
	        }
	      }
	      // copy the tween values unattended
	    } else {
	      return endValue;
	    }
	  };
	  /*
	    Method to retreive array's length and return -1 for
	    all other types.
	    @private
	    @param {Array, Any} Array to get the width for.
	    @returns {Number} Array length or -1 if not array.
	  */


	  Thenable.prototype._getArrayLength = function _getArrayLength(arr) {
	    return _h2.default.isArray(arr) ? arr.length : -1;
	  };
	  /*
	    Method to check if the property is delta property.
	    @private
	    @param {Any} Parameter value to check.
	    @returns {Boolean}
	  */


	  Thenable.prototype._isDelta = function _isDelta(optionsValue) {
	    var isObject = _h2.default.isObject(optionsValue);
	    isObject = isObject && !optionsValue.unit;
	    return !(!isObject || _h2.default.isArray(optionsValue) || _h2.default.isDOM(optionsValue));
	  };
	  /*
	    Method to check if the module is first in `then` chain.
	    @private
	    @returns {Boolean} If the module is the first in module chain.
	  */


	  Thenable.prototype._isFirstInChain = function _isFirstInChain() {
	    return !this._masterModule;
	  };
	  /*
	    Method to check if the module is last in `then` chain.
	    @private
	    @returns {Boolean} If the module is the last in module chain.
	  */


	  Thenable.prototype._isLastInChain = function _isLastInChain() {
	    var master = this._masterModule;
	    // if there is no master field - check the modules length
	    // if module length is 1 thus there is no modules chain 
	    // it is the last one, otherwise it isnt
	    if (!master) {
	      return this._modules.length === 1;
	    }
	    // if there is master - check if it is the last item in _modules chain
	    return this === _h2.default.getLastItem(master._modules);
	  };

	  return Thenable;
	}(_tweenable2.default);

	exports.default = Thenable;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _tween = __webpack_require__(101);

	var _tween2 = _interopRequireDefault(_tween);

	var _timeline = __webpack_require__(110);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _module = __webpack_require__(84);

	var _module2 = _interopRequireDefault(_module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  Class to define a module ancestor
	  with timeline and tween options and functionality.
	  All runable modules should inherit from this class.

	  @class Tweenable
	*/
	var Tweenable = function (_Module) {
	  (0, _inherits3.default)(Tweenable, _Module);

	  /*
	    `play` method for the timeline.
	    @public
	    @param {Number} Time shift.
	    @returns this.
	  */
	  Tweenable.prototype.play = function play() {
	    this.timeline.play.apply(this.timeline, arguments);
	    return this;
	  };
	  /*
	    `playBackward` method for the timeline.
	    @public
	    @param {Number} Time shift.
	    @returns this.
	  */


	  Tweenable.prototype.playBackward = function playBackward() {
	    this.timeline.playBackward.apply(this.timeline, arguments);
	    return this;
	  };
	  /*
	    `pause` method for the timeline.
	    @public
	    @returns this.
	  */


	  Tweenable.prototype.pause = function pause() {
	    this.timeline.pause.apply(this.timeline, arguments);
	    return this;
	  };
	  /*
	    `stop` method for the timeline.
	    @public
	    @param {Number} [0...1] Progress to set on stop.
	                            *Default* is `0` if `play`
	                            and `1` if `playBAckward`.
	    @returns this.
	  */


	  Tweenable.prototype.stop = function stop() {
	    this.timeline.stop.apply(this.timeline, arguments);
	    return this;
	  };
	  /*
	    `reset` method for the timeline.
	    @public
	    @returns this.
	  */


	  Tweenable.prototype.reset = function reset() {
	    this.timeline.reset.apply(this.timeline, arguments);
	    return this;
	  };
	  /*
	    `replay` method for the timeline.
	    @public
	    @returns this.
	  */


	  Tweenable.prototype.replay = function replay() {
	    this.timeline.replay.apply(this.timeline, arguments);
	    return this;
	  };
	  /*
	    `replay` method for the timeline.
	    @public
	    @returns this.
	  */


	  Tweenable.prototype.replayBackward = function replayBackward() {
	    this.timeline.replayBackward.apply(this.timeline, arguments);
	    return this;
	  };
	  /*
	    `resume` method for the timeline.
	    @public
	    @param {Number} Time shift.
	    @returns this.
	  */


	  Tweenable.prototype.resume = function resume() {
	    var shift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	    this.timeline.resume.apply(this.timeline, arguments);
	    return this;
	  };
	  /*
	    `setProgress` method for the timeline.
	    @public
	    @param {Number} [0...1] Progress value.
	    @returns this.
	  */


	  Tweenable.prototype.setProgress = function setProgress() {
	    this.timeline.setProgress.apply(this.timeline, arguments);
	    return this;
	  };
	  /*
	    setSpeed method for the timeline.
	    @param {Number} Speed value.
	    @returns this.
	  */


	  Tweenable.prototype.setSpeed = function setSpeed(speed) {
	    this.timeline.setSpeed.apply(this.timeline, arguments);
	    return this;
	  };

	  // ^ PUBLIC  METHOD(S) ^
	  // v PRIVATE METHOD(S) v

	  function Tweenable() {
	    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    (0, _classCallCheck3.default)(this, Tweenable);

	    // pipe function for _o object
	    // before creating tween/timeline
	    var _this = (0, _possibleConstructorReturn3.default)(this, _Module.call(this, o));
	    // super of Module


	    _this._transformTweenOptions();
	    // make tween only if isTweenLess option is not set
	    !_this._o.isTweenLess && _this._makeTween();
	    // make timeline only if isTimelineLess option is not set
	    !_this._o.isTimelineLess && _this._makeTimeline();
	    return _this;
	  }
	  /*
	    Placeholder method that should be overrided
	    and will be called before tween/timeline creation.
	    @private
	  */


	  Tweenable.prototype._transformTweenOptions = function _transformTweenOptions() {};
	  /*
	    Method to create tween.
	    @private
	  */


	  Tweenable.prototype._makeTween = function _makeTween() {
	    // pass callbacks context
	    this._o.callbacksContext = this._o.callbacksContext || this;
	    this.tween = new _tween2.default(this._o);
	    // make timeline property point to tween one is "no timeline" mode
	    this._o.isTimelineLess && (this.timeline = this.tween);
	  };
	  /*
	    Method to create timeline.
	    @private
	    @param {Object} Timeline's options.
	                    An object which contains "timeline" property with
	                    timeline options.
	  */


	  Tweenable.prototype._makeTimeline = function _makeTimeline() {
	    // pass callbacks context
	    this._o.timeline = this._o.timeline || {};
	    this._o.timeline.callbacksContext = this._o.callbacksContext || this;
	    this.timeline = new _timeline2.default(this._o.timeline);
	    // set the flag to indicate that real timeline is present
	    this._isTimeline = true;
	    // if tween exist - add it to the timeline there is some
	    // modules like burst and stagger that have no tween
	    this.tween && this.timeline.add(this.tween);
	  };

	  return Tweenable;
	}(_module2.default);

	exports.default = Tweenable;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	var _tweener = __webpack_require__(102);

	var _tweener2 = _interopRequireDefault(_tweener);

	var _easing = __webpack_require__(105);

	var _easing2 = _interopRequireDefault(_easing);

	var _module = __webpack_require__(84);

	var _module2 = _interopRequireDefault(_module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import h from '../h';
	var Tween = function (_Module) {
	  (0, _inherits3.default)(Tween, _Module);

	  /*
	    Method do declare defaults with this._defaults object.
	    @private
	  */
	  Tween.prototype._declareDefaults = function _declareDefaults() {
	    // DEFAULTS
	    this._defaults = {
	      /* duration of the tween [0..∞] */
	      duration: 350,
	      /* delay of the tween [-∞..∞] */
	      delay: 0,
	      /* repeat of the tween [0..∞], means how much to
	         repeat the tween regardless first run,
	         for instance repeat: 2 will make the tween run 3 times */
	      repeat: 0,
	      /* speed of playback [0..∞], speed that is less then 1
	         will slowdown playback, for instance .5 will make tween
	         run 2x slower. Speed of 2 will speedup the tween to 2x. */
	      speed: 1,
	      /*  flip onUpdate's progress on each even period.
	          note that callbacks order won't flip at least
	          for now (under consideration). */
	      isYoyo: false,
	      /* easing for the tween, could be any easing type [link to easing-types.md] */
	      easing: 'Sin.Out',
	      /*
	        Easing for backward direction of the tweenthe tween,
	        if `null` - fallbacks to `easing` property.
	        forward direction in `yoyo` period is treated as backward for the easing.
	      */
	      backwardEasing: null,
	      /* custom tween's name */
	      name: null,
	      /* custom tween's base name */
	      nameBase: 'Tween',
	      /*
	        onProgress callback runs before any other callback.
	        @param {Number}   The entire, not eased, progress
	                          of the tween regarding repeat option.
	        @param {Boolean}  The direction of the tween.
	                          `true` for forward direction.
	                          `false` for backward direction(tween runs in reverse).
	      */
	      onProgress: null,
	      /*
	        onStart callback runs on very start of the tween just after onProgress
	        one. Runs on very end of the tween if tween is reversed.
	        @param {Boolean}  Direction of the tween.
	                          `true` for forward direction.
	                          `false` for backward direction(tween runs in reverse).
	      */
	      onStart: null,
	      onRefresh: null,
	      onComplete: null,
	      onRepeatStart: null,
	      onRepeatComplete: null,
	      onFirstUpdate: null,
	      onUpdate: null,
	      isChained: false,
	      // playback callbacks
	      onPlaybackStart: null,
	      onPlaybackPause: null,
	      onPlaybackStop: null,
	      onPlaybackComplete: null,
	      // context which all callbacks will be called with
	      callbacksContext: null
	    };
	  };
	  /*
	    API method to play the Tween.
	    @public
	    @param  {Number} Shift time in milliseconds.
	    @return {Object} Self.
	  */


	  Tween.prototype.play = function play() {
	    var shift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	    if (this._state === 'play' && this._isRunning) {
	      return this;
	    }
	    this._props.isReversed = false;
	    this._subPlay(shift, 'play');
	    this._setPlaybackState('play');
	    return this;
	  };
	  /*
	    API method to play the Tween in reverse.
	    @public
	    @param  {Number} Shift time in milliseconds.
	    @return {Object} Self.
	  */


	  Tween.prototype.playBackward = function playBackward() {
	    var shift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	    if (this._state === 'reverse' && this._isRunning) {
	      return this;
	    }
	    this._props.isReversed = true;
	    this._subPlay(shift, 'reverse');
	    this._setPlaybackState('reverse');
	    return this;
	  };
	  /*
	    API method to pause Tween.
	    @public
	    @returns {Object} Self.
	  */


	  Tween.prototype.pause = function pause() {
	    if (this._state === 'pause' || this._state === 'stop') {
	      return this;
	    }
	    this._removeFromTweener();
	    this._setPlaybackState('pause');
	    return this;
	  };
	  /*
	    API method to stop the Tween.
	    @public
	    @param   {Number} Progress [0..1] to set when stopped.
	    @returns {Object} Self.
	  */


	  Tween.prototype.stop = function stop(progress) {
	    if (this._state === 'stop') {
	      return this;
	    }

	    this._wasUknownUpdate = undefined;

	    var stopProc = progress != null ? progress
	    /* if no progress passsed - set 1 if tween
	       is playingBackward, otherwise set to 0 */
	    : this._state === 'reverse' ? 1 : 0;

	    this.setProgress(stopProc);

	    this.reset();
	    return this;
	  };
	  /*
	    API method to replay(restart) the Tween.
	    @public
	    @param   {Number} Shift time in milliseconds.
	    @returns {Object} Self.
	  */


	  Tween.prototype.replay = function replay() {
	    var shift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	    this.reset();
	    this.play(shift);
	    return this;
	  };
	  /*
	    API method to replay(restart) backward the Tween.
	    @public
	    @param   {Number} Shift time in milliseconds.
	    @returns {Object} Self.
	  */


	  Tween.prototype.replayBackward = function replayBackward() {
	    var shift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	    this.reset();
	    this.playBackward(shift);
	    return this;
	  };
	  /*
	    API method to resume the Tween.
	    @public
	    @param  {Number} Shift time in milliseconds.
	    @return {Object} Self.
	  */


	  Tween.prototype.resume = function resume() {
	    var shift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	    if (this._state !== 'pause') {
	      return this;
	    }

	    switch (this._prevState) {
	      case 'play':
	        this.play(shift);
	        break;
	      case 'reverse':
	        this.playBackward(shift);
	        break;
	    }

	    return this;
	  };
	  /*
	    API method to set progress on tween.
	    @public
	    @param {Number} Progress to set.
	    @returns {Object} Self.
	  */


	  Tween.prototype.setProgress = function setProgress(progress) {
	    var p = this._props;
	    // set start time if there is no one yet.
	    !p.startTime && this._setStartTime();
	    // reset play time
	    this._playTime = null;
	    // progress should be in range of [0..1]
	    progress < 0 && (progress = 0);
	    progress > 1 && (progress = 1);
	    // update self with calculated time
	    this._update(p.startTime - p.delay + progress * p.repeatTime);
	    return this;
	  };
	  /*
	    Method to set tween's speed.
	    @public
	    @param {Number} Speed value.
	    @returns this.
	  */


	  Tween.prototype.setSpeed = function setSpeed(speed) {
	    this._props.speed = speed;
	    // if playing - normalize _startTime and _prevTime to the current point.
	    if (this._state === 'play' || this._state === 'reverse') {
	      this._setResumeTime(this._state);
	    }
	    return this;
	  };
	  /*
	    Method to reset tween's state and properties.
	    @public
	    @returns this.
	  */


	  Tween.prototype.reset = function reset() {
	    this._removeFromTweener();
	    this._setPlaybackState('stop');
	    this._progressTime = 0;
	    this._isCompleted = false;
	    this._isStarted = false;
	    this._isFirstUpdate = false;
	    this._wasUknownUpdate = undefined;
	    this._prevTime = undefined;
	    this._prevYoyo = undefined;
	    // this._props.startTime  = undefined;
	    this._props.isReversed = false;
	    return this;
	  };

	  // ^ PUBLIC  METHOD(S) ^
	  // v PRIVATE METHOD(S) v

	  /*
	    Method to launch play. Used as launch
	    method for bothplay and reverse methods.
	    @private
	    @param  {Number} Shift time in milliseconds.
	    @param  {String} Play or reverse state.
	    @return {Object} Self.
	  */


	  Tween.prototype._subPlay = function _subPlay() {
	    var shift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var state = arguments[1];

	    var resumeTime,
	        startTime,
	        p = this._props,

	    // check if direction of playback changes,
	    // if so, the _progressTime needs to be flipped
	    _state = this._state,
	        _prevState = this._prevState,
	        isPause = _state === 'pause',
	        wasPlay = _state === 'play' || isPause && _prevState === 'play',
	        wasReverse = _state === 'reverse' || isPause && _prevState === 'reverse',
	        isFlip = wasPlay && state === 'reverse' || wasReverse && state === 'play';

	    // if tween was ended, set progress to 0 if not, set to elapsed progress
	    this._progressTime = this._progressTime >= p.repeatTime ? 0 : this._progressTime;
	    // flip the _progressTime if playback direction changed
	    if (isFlip) {
	      this._progressTime = p.repeatTime - this._progressTime;
	    }
	    // set resume time and normalize prev/start times
	    this._setResumeTime(state, shift);
	    // add self to tweener = play
	    _tweener2.default.add(this);
	    return this;
	  };
	  /*
	    Method to set _resumeTime, _startTime and _prevTime.
	    @private
	    @param {String} Current state. [play, reverse]
	    @param {Number} Time shift. *Default* is 0.
	  */


	  Tween.prototype._setResumeTime = function _setResumeTime(state) {
	    var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	    // get current moment as resume time
	    this._resumeTime = performance.now();
	    // set start time regarding passed `shift` and `procTime`
	    var startTime = this._resumeTime - Math.abs(shift) - this._progressTime;
	    this._setStartTime(startTime, false);
	    // if we have prevTime - we need to normalize
	    // it for the current resume time
	    if (this._prevTime != null) {
	      this._prevTime = state === 'play' ? this._normPrevTimeForward() : this._props.endTime - this._progressTime;
	    }
	  };
	  /*
	    Method recalculate _prevTime for forward direction.
	    @private
	    @return {Number} Normalized prev time.
	  */


	  Tween.prototype._normPrevTimeForward = function _normPrevTimeForward() {
	    var p = this._props;
	    return p.startTime + this._progressTime - p.delay;
	  };
	  /*
	    Constructor of the class.
	    @private
	  */


	  function Tween() {
	    var _ret;

	    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    (0, _classCallCheck3.default)(this, Tween);

	    var _this = (0, _possibleConstructorReturn3.default)(this, _Module.call(this, o));

	    _this._props.name == null && _this._setSelfName();
	    return _ret = _this, (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	  /*
	    Method to set self name to generic one.
	    @private
	  */


	  Tween.prototype._setSelfName = function _setSelfName() {
	    var globalName = '_' + this._props.nameBase + 's';
	    // track amount of tweens globally
	    _tweener2.default[globalName] = _tweener2.default[globalName] == null ? 1 : ++_tweener2.default[globalName];
	    // and set generic tween's name  || Tween # ||
	    this._props.name = this._props.nameBase + ' ' + _tweener2.default[globalName];
	  };
	  /*
	    Method set playback state string.
	    @private
	    @param {String} State name
	  */


	  Tween.prototype._setPlaybackState = function _setPlaybackState(state) {
	    // save previous state
	    this._prevState = this._state;
	    this._state = state;

	    // callbacks
	    var wasPause = this._prevState === 'pause',
	        wasStop = this._prevState === 'stop',
	        wasPlay = this._prevState === 'play',
	        wasReverse = this._prevState === 'reverse',
	        wasPlaying = wasPlay || wasReverse,
	        wasStill = wasStop || wasPause;

	    if ((state === 'play' || state === 'reverse') && wasStill) {
	      this._playbackStart();
	    }
	    if (state === 'pause' && wasPlaying) {
	      this._playbackPause();
	    }
	    if (state === 'stop' && (wasPlaying || wasPause)) {
	      this._playbackStop();
	    }
	  };
	  /*
	    Method to declare some vars.
	    @private
	  */


	  Tween.prototype._vars = function _vars() {
	    this.progress = 0;
	    this._prevTime = undefined;
	    this._progressTime = 0;
	    this._negativeShift = 0;
	    this._state = 'stop';
	    // if negative delay was specified,
	    // save it to _negativeShift property and
	    // reset it back to 0
	    if (this._props.delay < 0) {
	      this._negativeShift = this._props.delay;
	      this._props.delay = 0;
	    }

	    return this._calcDimentions();
	  };
	  /*
	    Method to calculate tween's dimentions.
	    @private
	  */


	  Tween.prototype._calcDimentions = function _calcDimentions() {
	    this._props.time = this._props.duration + this._props.delay;
	    this._props.repeatTime = this._props.time * (this._props.repeat + 1);
	  };
	  /*
	    Method to extend defaults by options and put them in _props.
	    @private
	  */


	  Tween.prototype._extendDefaults = function _extendDefaults() {
	    // save callback overrides object with fallback to empty one
	    this._callbackOverrides = this._o.callbackOverrides || {};
	    delete this._o.callbackOverrides;
	    // call the _extendDefaults @ Module
	    _Module.prototype._extendDefaults.call(this);

	    var p = this._props;
	    p.easing = _easing2.default.parseEasing(p.easing);
	    p.easing._parent = this;

	    // parse only present backward easing to prevent parsing as `linear.none`
	    // because we need to fallback to `easing` in `_setProgress` method
	    if (p.backwardEasing != null) {
	      p.backwardEasing = _easing2.default.parseEasing(p.backwardEasing);
	      p.backwardEasing._parent = this;
	    }
	  };
	  /*
	    Method for setting start and end time to props.
	    @private
	    @param {Number(Timestamp)}, {Null} Start time.
	    @param {Boolean} Should reset flags.
	    @returns this
	  */


	  Tween.prototype._setStartTime = function _setStartTime(time) {
	    var isResetFlags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	    var p = this._props,
	        shiftTime = p.shiftTime || 0;
	    // reset flags
	    if (isResetFlags) {
	      this._isCompleted = false;this._isRepeatCompleted = false;
	      this._isStarted = false;
	    }
	    // set start time to passed time or to the current moment
	    var startTime = time == null ? performance.now() : time;
	    // calculate bounds
	    // - negativeShift is negative delay in options hash
	    // - shift time is shift of the parent
	    p.startTime = startTime + p.delay + this._negativeShift + shiftTime;
	    p.endTime = p.startTime + p.repeatTime - p.delay;
	    // set play time to the startTimes
	    // if playback controls are used - use _resumeTime as play time,
	    // else use shifted startTime -- shift is needed for timelines append chains
	    this._playTime = this._resumeTime != null ? this._resumeTime : startTime + shiftTime;
	    this._resumeTime = null;

	    return this;
	  };
	  /*
	    Method to update tween's progress.
	    @private
	    @param {Number} Current update time.
	    -- next params only present when parent Timeline calls the method.
	    @param {Number} Previous Timeline's update time.
	    @param {Boolean} Was parent in yoyo period.
	    @param {Number} [-1, 0, 1] If update is on edge.
	                   -1 = edge jump in negative direction.
	                    0 = no edge jump.
	                    1 = edge jump in positive direction.
	  */


	  Tween.prototype._update = function _update(time, timelinePrevTime, wasYoyo, onEdge) {
	    var p = this._props;
	    // if we don't the _prevTime thus the direction we are heading to,
	    // but prevTime was passed thus we are child of a Timeline
	    // set _prevTime to passed one and pretent that there was unknown
	    // update to not to block start/complete callbacks
	    if (this._prevTime == null && timelinePrevTime != null) {

	      if (this._props.speed && this._playTime) {
	        // play point + ( speed * delta )
	        this._prevTime = this._playTime + this._props.speed * (timelinePrevTime - this._playTime);
	      }
	      // this._prevTime = timelinePrevTime;
	      this._wasUknownUpdate = true;
	    }

	    // var before = time;
	    // cache vars
	    var startPoint = p.startTime - p.delay;
	    // if speed param was defined - calculate
	    // new time regarding speed
	    if (p.speed && this._playTime) {
	      // play point + ( speed * delta )
	      time = this._playTime + p.speed * (time - this._playTime);
	    }

	    // due to javascript precision issues, after speed mapping
	    // we can get very close number that was made from progress of 1
	    // and in fact represents `endTime` if so, set the time to `endTime`
	    if (Math.abs(p.endTime - time) < 0.00000001) {
	      time = p.endTime;
	    }

	    // if parent is onEdge but not very start nor very end
	    if (onEdge && wasYoyo != null) {
	      var T = this._getPeriod(time),
	          isYoyo = !!(p.isYoyo && this._props.repeat && T % 2 === 1);

	      // for timeline
	      // notify children about edge jump
	      if (this._timelines) {
	        for (var i = 0; i < this._timelines.length; i++) {
	          this._timelines[i]._update(time, timelinePrevTime, wasYoyo, onEdge);
	        }
	      }
	      // forward edge direction
	      if (onEdge === 1) {
	        // jumped from yoyo period?
	        if (wasYoyo) {
	          this._prevTime = time + 1;
	          this._repeatStart(time, isYoyo);
	          this._start(time, isYoyo);
	        } else {
	          this._prevTime = time - 1;
	          this._repeatComplete(time, isYoyo);
	          this._complete(time, isYoyo);
	        }
	        // backward edge direction
	      } else if (onEdge === -1) {
	        // jumped from yoyo period?
	        if (wasYoyo) {
	          this._prevTime = time - 1;
	          this._repeatComplete(time, isYoyo);
	          this._complete(time, isYoyo);
	        } else {
	          // call _start callbacks only if prev time was in active area
	          // not always true for append chains
	          if (this._prevTime >= p.startTime && this._prevTime <= p.endTime) {
	            this._prevTime = time + 1;
	            this._repeatStart(time, isYoyo);
	            this._start(time, isYoyo);
	            // reset isCOmpleted immediately to prevent onComplete cb
	            this._isCompleted = true;
	          }
	        }
	      }
	      // reset the _prevTime - drop one frame to undestand
	      // where we are heading
	      this._prevTime = undefined;
	    }
	    // if in active area and not ended - save progress time
	    // for pause/play purposes.
	    if (time > startPoint && time < p.endTime) {
	      this._progressTime = time - startPoint;
	    }
	    // else if not started or ended set progress time to 0
	    else if (time <= startPoint) {
	        this._progressTime = 0;
	      } else if (time >= p.endTime) {
	        // set progress time to repeat time + tiny cofficient
	        // to make it extend further than the end time
	        this._progressTime = p.repeatTime + .00000000001;
	      }
	    // reverse time if _props.isReversed is set
	    if (p.isReversed) {
	      time = p.endTime - this._progressTime;
	    }
	    // We need to know what direction we are heading to,
	    // so if we don't have the previous update value - this is very first
	    // update, - skip it entirely and wait for the next value
	    if (this._prevTime == null) {
	      this._prevTime = time;
	      this._wasUknownUpdate = true;
	      return false;
	    }

	    // ====== AFTER SKIPPED FRAME ======

	    // handle onProgress callback
	    if (time >= startPoint && time <= p.endTime) {
	      this._progress((time - startPoint) / p.repeatTime, time);
	    }
	    /*
	      if time is inside the active area of the tween.
	      active area is the area from start time to end time,
	      with all the repeat and delays in it
	    */
	    if (time >= p.startTime && time <= p.endTime) {
	      this._updateInActiveArea(time);
	    } else {
	      // if was in active area - update in inactive area but just once -
	      // right after the active area
	      if (this._isInActiveArea) {
	        this._updateInInactiveArea(time);
	      } else if (!this._isRefreshed) {
	        // onRefresh callback
	        // before startTime
	        if (time < p.startTime && this.progress !== 0) {
	          this._refresh(true);
	          this._isRefreshed = true;
	          // after endTime
	        }
	        // else if ( time > p.endTime ) { }
	      }
	    }

	    this._prevTime = time;
	    return time >= p.endTime || time <= startPoint;
	  };
	  /*
	    Method to handle tween's progress in inactive area.
	    @private
	    @param {Number} Current update time.
	  */


	  Tween.prototype._updateInInactiveArea = function _updateInInactiveArea(time) {
	    if (!this._isInActiveArea) {
	      return;
	    }
	    var p = this._props;
	    // complete if time is larger then end time
	    if (time > p.endTime && !this._isCompleted) {
	      this._progress(1, time);
	      // get period number
	      var T = this._getPeriod(p.endTime),
	          isYoyo = p.isYoyo && T % 2 === 0;

	      this._setProgress(isYoyo ? 0 : 1, time, isYoyo);
	      this._repeatComplete(time, isYoyo);
	      this._complete(time, isYoyo);
	    }
	    // if was active and went to - inactive area "-"
	    if (time < this._prevTime && time < p.startTime && !this._isStarted && !this._isCompleted) {
	      // if was in active area and didn't fire onStart callback
	      this._progress(0, time, false);
	      this._setProgress(0, time, false);
	      this._isRepeatStart = false;
	      this._repeatStart(time, false);
	      this._start(time, false);
	    }
	    this._isInActiveArea = false;
	  };
	  /*
	    Method to handle tween's progress in active area.
	    @private
	    @param {Number} Current update time.
	  */


	  Tween.prototype._updateInActiveArea = function _updateInActiveArea(time) {

	    var props = this._props,
	        delayDuration = props.delay + props.duration,
	        startPoint = props.startTime - props.delay,
	        elapsed = (time - props.startTime + props.delay) % delayDuration,
	        TCount = Math.round((props.endTime - props.startTime + props.delay) / delayDuration),
	        T = this._getPeriod(time),
	        TValue = this._delayT,
	        prevT = this._getPeriod(this._prevTime),
	        TPrevValue = this._delayT;

	    // "zero" and "one" value regarding yoyo and it's period
	    var isYoyo = props.isYoyo && T % 2 === 1,
	        isYoyoPrev = props.isYoyo && prevT % 2 === 1,
	        yoyoZero = isYoyo ? 1 : 0,
	        yoyoOne = 1 - yoyoZero;

	    if (time === props.endTime) {
	      this._wasUknownUpdate = false;
	      // if `time` is equal to `endTime`, T represents the next period,
	      // so we need to decrement T and calculate "one" value regarding yoyo
	      var isYoyo = props.isYoyo && (T - 1) % 2 === 1;
	      this._setProgress(isYoyo ? 0 : 1, time, isYoyo);
	      if (time > this._prevTime) {
	        this._isRepeatCompleted = false;
	      }
	      this._repeatComplete(time, isYoyo);
	      return this._complete(time, isYoyo);
	    }

	    // reset callback flags
	    this._isCompleted = false;
	    this._isRefreshed = false;
	    // if time is inside the duration area of the tween
	    if (startPoint + elapsed >= props.startTime) {
	      this._isInActiveArea = true;this._isRepeatCompleted = false;
	      this._isRepeatStart = false;this._isStarted = false;
	      // active zone or larger then end
	      var elapsed2 = (time - props.startTime) % delayDuration,
	          proc = elapsed2 / props.duration;
	      // |=====|=====|=====| >>>
	      //      ^1^2
	      var isOnEdge = T > 0 && prevT < T;
	      // |=====|=====|=====| <<<
	      //      ^2^1
	      var isOnReverseEdge = prevT > T;

	      // for use in timeline
	      this._onEdge = 0;
	      isOnEdge && (this._onEdge = 1);
	      isOnReverseEdge && (this._onEdge = -1);

	      if (this._wasUknownUpdate) {
	        if (time > this._prevTime) {
	          this._start(time, isYoyo);
	          this._repeatStart(time, isYoyo);
	          this._firstUpdate(time, isYoyo);
	        }
	        // if backward direction and 
	        // if ( time < this._prevTime && time !== this._props.startTime ) {
	        if (time < this._prevTime) {
	          this._complete(time, isYoyo);
	          this._repeatComplete(time, isYoyo);
	          this._firstUpdate(time, isYoyo);
	          // reset isCompleted immediately
	          this._isCompleted = false;
	        }
	      }

	      if (isOnEdge) {
	        // if not just after delay
	        // |---=====|---=====|---=====| >>>
	        //            ^1 ^2
	        // because we have already handled
	        // 1 and onRepeatComplete in delay gap
	        if (this.progress !== 1) {
	          // prevT
	          var isThisYoyo = props.isYoyo && (T - 1) % 2 === 1;
	          this._repeatComplete(time, isThisYoyo);
	        }
	        // if on edge but not at very start
	        // |=====|=====|=====| >>>
	        // ^!    ^here ^here 
	        if (prevT >= 0) {
	          this._repeatStart(time, isYoyo);
	        }
	      }

	      if (time > this._prevTime) {
	        //  |=====|=====|=====| >>>
	        // ^1  ^2
	        if (!this._isStarted && this._prevTime <= props.startTime) {
	          this._start(time, isYoyo);
	          this._repeatStart(time, isYoyo);
	          // it was zero anyways

	          // restart flags immediately in case if we will
	          // return to '-' inactive area on the next step
	          this._isStarted = false;
	          this._isRepeatStart = false;
	        }
	        this._firstUpdate(time, isYoyo);
	      }

	      if (isOnReverseEdge) {
	        // if on edge but not at very end
	        // |=====|=====|=====| <<<
	        //       ^here ^here ^not here
	        if (this.progress !== 0 && this.progress !== 1 && prevT != TCount) {
	          this._repeatStart(time, isYoyoPrev);
	        }
	        // if on very end edge
	        // |=====|=====|=====| <<<
	        //       ^!    ^! ^2 ^1
	        // we have handled the case in this._wasUknownUpdate
	        // block so filter that
	        if (prevT === TCount && !this._wasUknownUpdate) {
	          this._complete(time, isYoyo);
	          this._repeatComplete(time, isYoyo);
	          this._firstUpdate(time, isYoyo);
	          // reset isComplete flag call
	          // cuz we returned to active area
	          // this._isRepeatCompleted = false;
	          this._isCompleted = false;
	        }
	        this._repeatComplete(time, isYoyo);
	      }

	      if (prevT === 'delay') {
	        // if just before delay gap
	        // |---=====|---=====|---=====| <<<
	        //               ^2    ^1
	        if (T < TPrevValue) {
	          this._repeatComplete(time, isYoyo);
	        }
	        // if just after delay gap
	        // |---=====|---=====|---=====| >>>
	        //            ^1  ^2
	        if (T === TPrevValue && T > 0) {
	          this._repeatStart(time, isYoyo);
	        }
	      }

	      // swap progress and repeatStart based on direction
	      if (time > this._prevTime) {
	        // if progress is equal 0 and progress grows
	        if (proc === 0) {
	          this._repeatStart(time, isYoyo);
	        }
	        if (time !== props.endTime) {
	          this._setProgress(isYoyo ? 1 - proc : proc, time, isYoyo);
	        }
	      } else {
	        if (time !== props.endTime) {
	          this._setProgress(isYoyo ? 1 - proc : proc, time, isYoyo);
	        }
	        // if progress is equal 0 and progress grows
	        if (proc === 0) {
	          this._repeatStart(time, isYoyo);
	        }
	      }

	      if (time === props.startTime) {
	        this._start(time, isYoyo);
	      }
	      // delay gap - react only once
	    } else if (this._isInActiveArea) {
	      // because T will be string of "delay" here,
	      // let's normalize it be setting to TValue
	      var t = T === 'delay' ? TValue : T,
	          isGrows = time > this._prevTime;
	      // decrement period if forward direction of update
	      isGrows && t--;
	      // calculate normalized yoyoZero value
	      yoyoZero = props.isYoyo && t % 2 === 1 ? 1 : 0;
	      // if was in active area and previous time was larger
	      // |---=====|---=====|---=====| <<<
	      //   ^2 ^1    ^2 ^1    ^2 ^1
	      if (time < this._prevTime) {
	        this._setProgress(yoyoZero, time, yoyoZero === 1);
	        this._repeatStart(time, yoyoZero === 1);
	      }
	      // set 1 or 0 regarding direction and yoyo
	      this._setProgress(isGrows ? 1 - yoyoZero : yoyoZero, time, yoyoZero === 1);
	      // if time grows
	      if (time > this._prevTime) {
	        // if reverse direction and in delay gap, then progress will be 0
	        // if so we don't need to call the onRepeatComplete callback
	        // |---=====|---=====|---=====| <<<
	        //   ^0       ^0       ^0   
	        // OR we have flipped 0 to 1 regarding yoyo option
	        if (this.progress !== 0 || yoyoZero === 1) {
	          // since we repeatComplete for previous period
	          // invert isYoyo option
	          // is elapsed is 0 - count as previous period
	          this._repeatComplete(time, yoyoZero === 1);
	        }
	      }
	      // set flag to indicate inactive area
	      this._isInActiveArea = false;
	    }
	    // we've got the first update now
	    this._wasUknownUpdate = false;
	  };
	  /*
	    Method to remove the Tween from the tweener.
	    @private
	    @returns {Object} Self.
	  */


	  Tween.prototype._removeFromTweener = function _removeFromTweener() {
	    _tweener2.default.remove(this);return this;
	  };
	  /*
	    Method to get current period number.
	    @private
	    @param {Number} Time to get the period for.
	    @returns {Number} Current period number.
	  */


	  Tween.prototype._getPeriod = function _getPeriod(time) {
	    var p = this._props,
	        TTime = p.delay + p.duration,
	        dTime = p.delay + time - p.startTime,
	        T = dTime / TTime,

	    // if time if equal to endTime we need to set the elapsed
	    // time to 0 to fix the occasional precision js bug, which
	    // causes 0 to be something like 1e-12
	    elapsed = time < p.endTime ? dTime % TTime : 0;
	    // If the latest period, round the result, otherwise floor it.
	    // Basically we always can floor the result, but because of js
	    // precision issues, sometimes the result is 2.99999998 which
	    // will result in 2 instead of 3 after the floor operation.
	    T = time >= p.endTime ? Math.round(T) : Math.floor(T);
	    // if time is larger then the end time
	    if (time > p.endTime) {
	      // set equal to the periods count
	      T = Math.round((p.endTime - p.startTime + p.delay) / TTime);
	      // if in delay gap, set _delayT to current
	      // period number and return "delay"
	    } else if (elapsed > 0 && elapsed < p.delay) {
	      this._delayT = T;T = 'delay';
	    }
	    // if the end of period and there is a delay
	    return T;
	  };
	  /*
	    Method to set Tween's progress and call onUpdate callback.
	    @private
	    @override @ Module
	    @param {Number} Progress to set.
	    @param {Number} Current update time.
	    @param {Boolean} Is yoyo perido. Used in Timeline to pass to Tween.
	    @returns {Object} Self.
	  */


	  Tween.prototype._setProgress = function _setProgress(proc, time, isYoyo) {
	    var p = this._props,
	        isYoyoChanged = p.wasYoyo !== isYoyo,
	        isForward = time > this._prevTime;

	    this.progress = proc;
	    // get the current easing for `forward` direction regarding `yoyo`
	    if (isForward && !isYoyo || !isForward && isYoyo) {
	      this.easedProgress = p.easing(proc);
	      // get the current easing for `backward` direction regarding `yoyo`
	    } else if (!isForward && !isYoyo || isForward && isYoyo) {
	      var easing = p.backwardEasing != null ? p.backwardEasing : p.easing;

	      this.easedProgress = easing(proc);
	    }

	    if (p.prevEasedProgress !== this.easedProgress || isYoyoChanged) {
	      if (p.onUpdate != null && typeof p.onUpdate === 'function') {
	        p.onUpdate.call(p.callbacksContext || this, this.easedProgress, this.progress, isForward, isYoyo);
	      }
	    }
	    p.prevEasedProgress = this.easedProgress;
	    p.wasYoyo = isYoyo;
	    return this;
	  };
	  /*
	    Method to set tween's state to start and call onStart callback.
	    @method _start
	    @private
	    @param {Number} Progress to set.
	    @param {Boolean} Is yoyo period.
	  */


	  Tween.prototype._start = function _start(time, isYoyo) {
	    if (this._isStarted) {
	      return;
	    }
	    var p = this._props;
	    if (p.onStart != null && typeof p.onStart === 'function') {
	      p.onStart.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
	    }
	    this._isCompleted = false;this._isStarted = true;
	    this._isFirstUpdate = false;
	  };
	  /*
	    Method to call onPlaybackStart callback
	    @private
	  */


	  Tween.prototype._playbackStart = function _playbackStart() {
	    var p = this._props;
	    if (p.onPlaybackStart != null && typeof p.onPlaybackStart === 'function') {
	      p.onPlaybackStart.call(p.callbacksContext || this);
	    }
	  };
	  /*
	    Method to call onPlaybackPause callback
	    @private
	  */


	  Tween.prototype._playbackPause = function _playbackPause() {
	    var p = this._props;
	    if (p.onPlaybackPause != null && typeof p.onPlaybackPause === 'function') {
	      p.onPlaybackPause.call(p.callbacksContext || this);
	    }
	  };
	  /*
	    Method to call onPlaybackStop callback
	    @private
	  */


	  Tween.prototype._playbackStop = function _playbackStop() {
	    var p = this._props;
	    if (p.onPlaybackStop != null && typeof p.onPlaybackStop === 'function') {
	      p.onPlaybackStop.call(p.callbacksContext || this);
	    }
	  };
	  /*
	    Method to call onPlaybackComplete callback
	    @private
	  */


	  Tween.prototype._playbackComplete = function _playbackComplete() {
	    var p = this._props;
	    if (p.onPlaybackComplete != null && typeof p.onPlaybackComplete === 'function') {
	      p.onPlaybackComplete.call(p.callbacksContext || this);
	    }
	  };
	  /*
	    Method to set tween's state to complete.
	    @method _complete
	    @private
	    @param {Number} Current time.
	    @param {Boolean} Is yoyo period.
	  */


	  Tween.prototype._complete = function _complete(time, isYoyo) {
	    if (this._isCompleted) {
	      return;
	    }
	    var p = this._props;
	    if (p.onComplete != null && typeof p.onComplete === 'function') {
	      p.onComplete.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
	    }

	    this._isCompleted = true;this._isStarted = false;
	    this._isFirstUpdate = false;
	    // reset _prevYoyo for timeline usage
	    this._prevYoyo = undefined;
	  };

	  /*
	    Method to run onFirstUpdate callback.
	    @method _firstUpdate
	    @private
	    @param {Number} Current update time.
	    @param {Boolean} Is yoyo period.
	  */


	  Tween.prototype._firstUpdate = function _firstUpdate(time, isYoyo) {
	    if (this._isFirstUpdate) {
	      return;
	    }
	    var p = this._props;
	    if (p.onFirstUpdate != null && typeof p.onFirstUpdate === 'function') {
	      // onFirstUpdate should have tween pointer
	      p.onFirstUpdate.tween = this;
	      p.onFirstUpdate.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
	    }
	    this._isFirstUpdate = true;
	  };
	  /*
	    Method call onRepeatComplete calback and set flags.
	    @private
	    @param {Number} Current update time.
	    @param {Boolean} Is repeat period.
	  */


	  Tween.prototype._repeatComplete = function _repeatComplete(time, isYoyo) {
	    if (this._isRepeatCompleted) {
	      return;
	    }
	    var p = this._props;
	    if (p.onRepeatComplete != null && typeof p.onRepeatComplete === 'function') {
	      p.onRepeatComplete.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
	    }
	    this._isRepeatCompleted = true;
	    // this._prevYoyo = null;
	  };

	  /*
	    Method call onRepeatStart calback and set flags.
	    @private
	    @param {Number} Current update time.
	    @param {Boolean} Is yoyo period.
	  */


	  Tween.prototype._repeatStart = function _repeatStart(time, isYoyo) {
	    if (this._isRepeatStart) {
	      return;
	    }
	    var p = this._props;
	    if (p.onRepeatStart != null && typeof p.onRepeatStart === 'function') {
	      p.onRepeatStart.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
	    }
	    this._isRepeatStart = true;
	  };
	  /*
	    Method to launch onProgress callback.
	    @method _progress
	    @private
	    @param {Number} Progress to set.
	  */


	  Tween.prototype._progress = function _progress(progress, time) {
	    var p = this._props;
	    if (p.onProgress != null && typeof p.onProgress === 'function') {
	      p.onProgress.call(p.callbacksContext || this, progress, time > this._prevTime);
	    }
	  };
	  /*
	    Method to launch onRefresh callback.
	    @method _refresh
	    @private
	    @param {Boolean} If refresh even before start time.
	  */


	  Tween.prototype._refresh = function _refresh(isBefore) {
	    var p = this._props;
	    if (p.onRefresh != null) {
	      var context = p.callbacksContext || this,
	          progress = isBefore ? 0 : 1;

	      p.onRefresh.call(context, isBefore, p.easing(progress), progress);
	    }
	  };
	  /*
	    Method which is called when the tween is removed from tweener.
	    @private
	  */


	  Tween.prototype._onTweenerRemove = function _onTweenerRemove() {};
	  /*
	    Method which is called when the tween is removed
	    from tweener when finished.
	    @private
	  */


	  Tween.prototype._onTweenerFinish = function _onTweenerFinish() {
	    this._setPlaybackState('stop');
	    this._playbackComplete();
	  };
	  /*
	    Method to set property[s] on Tween.
	    @private
	    @override @ Module
	    @param {Object, String} Hash object of key/value pairs, or property name.
	    @param {_} Property's value to set.
	  */


	  Tween.prototype._setProp = function _setProp(obj, value) {
	    _Module.prototype._setProp.call(this, obj, value);
	    this._calcDimentions();
	  };
	  /*
	    Method to set single property.
	    @private
	    @override @ Module
	    @param {String} Name of the property.
	    @param {Any} Value for the property.
	  */


	  Tween.prototype._assignProp = function _assignProp(key, value) {
	    // fallback to defaults
	    if (value == null) {
	      value = this._defaults[key];
	    }
	    // parse easing
	    if (key === 'easing') {
	      value = _easing2.default.parseEasing(value);
	      value._parent = this;
	    }
	    // handle control callbacks overrides
	    var control = this._callbackOverrides[key],
	        isntOverriden = !value || !value.isMojsCallbackOverride;
	    if (control && isntOverriden) {
	      value = this._overrideCallback(value, control);
	    }
	    // call super on Module
	    _Module.prototype._assignProp.call(this, key, value);
	  };
	  /*
	    Method to override callback for controll pupropes.
	    @private
	    @param {String}    Callback name.
	    @parma {Function}  Method to call  
	  */


	  Tween.prototype._overrideCallback = function _overrideCallback(callback, fun) {
	    var isCallback = callback && typeof callback === 'function',
	        override = function callbackOverride() {
	      // call overriden callback if it exists
	      isCallback && callback.apply(this, arguments);
	      // call the passed cleanup function
	      fun.apply(this, arguments);
	    };
	    // add overridden flag
	    override.isMojsCallbackOverride = true;
	    return override;
	  };

	  // _visualizeProgress(time) {
	  //   var str = '|',
	  //       procStr = ' ',
	  //       p = this._props,
	  //       proc = p.startTime - p.delay;

	  //   while ( proc < p.endTime ) {
	  //     if (p.delay > 0 ) {
	  //       var newProc = proc + p.delay;
	  //       if ( time > proc && time < newProc ) {
	  //         procStr += ' ^ ';
	  //       } else {
	  //         procStr += '   ';
	  //       }
	  //       proc = newProc;
	  //       str  += '---';
	  //     }
	  //     var newProc = proc + p.duration;
	  //     if ( time > proc && time < newProc ) {
	  //       procStr += '  ^   ';
	  //     } else if (time === proc) {
	  //       procStr += '^     ';
	  //     } else if (time === newProc) {
	  //       procStr += '    ^ ';
	  //     } else {
	  //       procStr += '      ';
	  //     }
	  //     proc = newProc;
	  //     str += '=====|';
	  //   }

	  //   console.log(str);
	  //   console.log(procStr);
	  // }


	  return Tween;
	}(_module2.default);

	exports.default = Tween;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	__webpack_require__(103);

	__webpack_require__(104);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tweener = function () {
	  function Tweener() {
	    (0, _classCallCheck3.default)(this, Tweener);

	    this._vars();
	    this._listenVisibilityChange();
	    return this;
	  }

	  Tweener.prototype._vars = function _vars() {
	    this.tweens = [];
	    this._savedTweens = [];
	    this._loop = this._loop.bind(this);
	    this._onVisibilityChange = this._onVisibilityChange.bind(this);
	  };
	  /*
	    Main animation loop. Should have only one concurrent loop.
	    @private
	    @returns this
	  */


	  Tweener.prototype._loop = function _loop() {
	    if (!this._isRunning) {
	      return false;
	    }
	    this._update(window.performance.now());
	    if (!this.tweens.length) {
	      return this._isRunning = false;
	    }
	    requestAnimationFrame(this._loop);
	    return this;
	  };
	  /*
	    Method to start animation loop.
	    @private
	  */


	  Tweener.prototype._startLoop = function _startLoop() {
	    if (this._isRunning) {
	      return;
	    };this._isRunning = true;
	    requestAnimationFrame(this._loop);
	  };
	  /*
	    Method to stop animation loop.
	    @private
	  */


	  Tweener.prototype._stopLoop = function _stopLoop() {
	    this._isRunning = false;
	  };
	  /*
	    Method to update every tween/timeline on animation frame.
	    @private
	  */


	  Tweener.prototype._update = function _update(time) {
	    var i = this.tweens.length;
	    while (i--) {
	      // cache the current tween
	      var tween = this.tweens[i];
	      if (tween && tween._update(time) === true) {
	        this.remove(tween);
	        tween._onTweenerFinish();
	        tween._prevTime = undefined;
	      }
	    }
	  };
	  /*
	    Method to add a Tween/Timeline to loop pool.
	    @param {Object} Tween/Timeline to add.
	  */


	  Tweener.prototype.add = function add(tween) {
	    // return if tween is already running
	    if (tween._isRunning) {
	      return;
	    }
	    tween._isRunning = true;
	    this.tweens.push(tween);
	    this._startLoop();
	  };
	  /*
	    Method stop updating all the child tweens/timelines.
	    @private
	  */


	  Tweener.prototype.removeAll = function removeAll() {
	    this.tweens.length = 0;
	  };
	  /*
	    Method to remove specific tween/timeline form updating.
	    @private
	  */


	  Tweener.prototype.remove = function remove(tween) {
	    var index = typeof tween === 'number' ? tween : this.tweens.indexOf(tween);

	    if (index !== -1) {
	      tween = this.tweens[index];
	      if (tween) {
	        tween._isRunning = false;
	        this.tweens.splice(index, 1);
	        tween._onTweenerRemove();
	      }
	    }
	  };

	  /*
	    Method to initialize event listeners to visibility change events.
	    @private
	  */


	  Tweener.prototype._listenVisibilityChange = function _listenVisibilityChange() {
	    if (typeof document.hidden !== "undefined") {
	      this._visibilityHidden = "hidden";
	      this._visibilityChange = "visibilitychange";
	    } else if (typeof document.mozHidden !== "undefined") {
	      this._visibilityHidden = "mozHidden";
	      this._visibilityChange = "mozvisibilitychange";
	    } else if (typeof document.msHidden !== "undefined") {
	      this._visibilityHidden = "msHidden";
	      this._visibilityChange = "msvisibilitychange";
	    } else if (typeof document.webkitHidden !== "undefined") {
	      this._visibilityHidden = "webkitHidden";
	      this._visibilityChange = "webkitvisibilitychange";
	    }

	    document.addEventListener(this._visibilityChange, this._onVisibilityChange, false);
	  };
	  /*
	    Method that will fire on visibility change.
	  */


	  Tweener.prototype._onVisibilityChange = function _onVisibilityChange() {
	    if (document[this._visibilityHidden]) {
	      this._savePlayingTweens();
	    } else {
	      this._restorePlayingTweens();
	    }
	  };
	  /*
	    Method to save all playing tweens.
	    @private
	  */


	  Tweener.prototype._savePlayingTweens = function _savePlayingTweens() {
	    this._savedTweens = this.tweens.slice(0);
	    for (var i = 0; i < this._savedTweens.length; i++) {
	      this._savedTweens[i].pause();
	    }
	  };
	  /*
	    Method to restore all playing tweens.
	    @private
	  */


	  Tweener.prototype._restorePlayingTweens = function _restorePlayingTweens() {
	    for (var i = 0; i < this._savedTweens.length; i++) {
	      this._savedTweens[i].resume();
	    }
	  };

	  return Tweener;
	}();

	var t = new Tweener();
	exports.default = t;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	
	/* istanbul ignore next */
	(function() {
	  'use strict';
	  var cancel, i, isOldBrowser, lastTime, vendors, vp, w;
	  vendors = ['webkit', 'moz'];
	  i = 0;
	  w = window;
	  while (i < vendors.length && !w.requestAnimationFrame) {
	    vp = vendors[i];
	    w.requestAnimationFrame = w[vp + 'RequestAnimationFrame'];
	    cancel = w[vp + 'CancelAnimationFrame'];
	    w.cancelAnimationFrame = cancel || w[vp + 'CancelRequestAnimationFrame'];
	    ++i;
	  }
	  isOldBrowser = !w.requestAnimationFrame || !w.cancelAnimationFrame;
	  if (/iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent) || isOldBrowser) {
	    lastTime = 0;
	    w.requestAnimationFrame = function(callback) {
	      var nextTime, now;
	      now = Date.now();
	      nextTime = Math.max(lastTime + 16, now);
	      return setTimeout((function() {
	        callback(lastTime = nextTime);
	      }), nextTime - now);
	    };
	    w.cancelAnimationFrame = clearTimeout;
	  }
	})();


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	
	/* istanbul ignore next */
	(function(root) {
	  var offset, ref, ref1;
	  if (root.performance == null) {
	    root.performance = {};
	  }
	  Date.now = Date.now || function() {
	    return (new Date).getTime();
	  };
	  if (root.performance.now == null) {
	    offset = ((ref = root.performance) != null ? (ref1 = ref.timing) != null ? ref1.navigationStart : void 0 : void 0) ? performance.timing.navigationStart : Date.now();
	    return root.performance.now = function() {
	      return Date.now() - offset;
	    };
	  }
	})(window);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var Easing, PI, PathEasing, approximate, bezier, easing, h, mix, sin;

	bezier = __webpack_require__(106);

	PathEasing = __webpack_require__(107);

	mix = __webpack_require__(108);

	h = __webpack_require__(71);

	approximate = __webpack_require__(109)["default"] || __webpack_require__(109);

	sin = Math.sin;

	PI = Math.PI;

	Easing = (function() {
	  function Easing() {}

	  Easing.prototype.bezier = bezier;

	  Easing.prototype.PathEasing = PathEasing;

	  Easing.prototype.path = (new PathEasing('creator')).create;

	  Easing.prototype.approximate = approximate;

	  Easing.prototype.inverse = function(p) {
	    return 1 - p;
	  };

	  Easing.prototype.linear = {
	    none: function(k) {
	      return k;
	    }
	  };

	  Easing.prototype.ease = {
	    "in": bezier.apply(Easing, [0.42, 0, 1, 1]),
	    out: bezier.apply(Easing, [0, 0, 0.58, 1]),
	    inout: bezier.apply(Easing, [0.42, 0, 0.58, 1])
	  };

	  Easing.prototype.sin = {
	    "in": function(k) {
	      return 1 - Math.cos(k * PI / 2);
	    },
	    out: function(k) {
	      return sin(k * PI / 2);
	    },
	    inout: function(k) {
	      return 0.5 * (1 - Math.cos(PI * k));
	    }
	  };

	  Easing.prototype.quad = {
	    "in": function(k) {
	      return k * k;
	    },
	    out: function(k) {
	      return k * (2 - k);
	    },
	    inout: function(k) {
	      if ((k *= 2) < 1) {
	        return 0.5 * k * k;
	      }
	      return -0.5 * (--k * (k - 2) - 1);
	    }
	  };

	  Easing.prototype.cubic = {
	    "in": function(k) {
	      return k * k * k;
	    },
	    out: function(k) {
	      return --k * k * k + 1;
	    },
	    inout: function(k) {
	      if ((k *= 2) < 1) {
	        return 0.5 * k * k * k;
	      }
	      return 0.5 * ((k -= 2) * k * k + 2);
	    }
	  };

	  Easing.prototype.quart = {
	    "in": function(k) {
	      return k * k * k * k;
	    },
	    out: function(k) {
	      return 1 - (--k * k * k * k);
	    },
	    inout: function(k) {
	      if ((k *= 2) < 1) {
	        return 0.5 * k * k * k * k;
	      }
	      return -0.5 * ((k -= 2) * k * k * k - 2);
	    }
	  };

	  Easing.prototype.quint = {
	    "in": function(k) {
	      return k * k * k * k * k;
	    },
	    out: function(k) {
	      return --k * k * k * k * k + 1;
	    },
	    inout: function(k) {
	      if ((k *= 2) < 1) {
	        return 0.5 * k * k * k * k * k;
	      }
	      return 0.5 * ((k -= 2) * k * k * k * k + 2);
	    }
	  };

	  Easing.prototype.expo = {
	    "in": function(k) {
	      if (k === 0) {
	        return 0;
	      } else {
	        return Math.pow(1024, k - 1);
	      }
	    },
	    out: function(k) {
	      if (k === 1) {
	        return 1;
	      } else {
	        return 1 - Math.pow(2, -10 * k);
	      }
	    },
	    inout: function(k) {
	      if (k === 0) {
	        return 0;
	      }
	      if (k === 1) {
	        return 1;
	      }
	      if ((k *= 2) < 1) {
	        return 0.5 * Math.pow(1024, k - 1);
	      }
	      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
	    }
	  };

	  Easing.prototype.circ = {
	    "in": function(k) {
	      return 1 - Math.sqrt(1 - k * k);
	    },
	    out: function(k) {
	      return Math.sqrt(1 - (--k * k));
	    },
	    inout: function(k) {
	      if ((k *= 2) < 1) {
	        return -0.5 * (Math.sqrt(1 - k * k) - 1);
	      }
	      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
	    }
	  };

	  Easing.prototype.back = {
	    "in": function(k) {
	      var s;
	      s = 1.70158;
	      return k * k * ((s + 1) * k - s);
	    },
	    out: function(k) {
	      var s;
	      s = 1.70158;
	      return --k * k * ((s + 1) * k + s) + 1;
	    },
	    inout: function(k) {
	      var s;
	      s = 1.70158 * 1.525;
	      if ((k *= 2) < 1) {
	        return 0.5 * (k * k * ((s + 1) * k - s));
	      }
	      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
	    }
	  };

	  Easing.prototype.elastic = {
	    "in": function(k) {
	      var a, p, s;
	      s = void 0;
	      p = 0.4;
	      if (k === 0) {
	        return 0;
	      }
	      if (k === 1) {
	        return 1;
	      }
	      a = 1;
	      s = p / 4;
	      return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
	    },
	    out: function(k) {
	      var a, p, s;
	      s = void 0;
	      p = 0.4;
	      if (k === 0) {
	        return 0;
	      }
	      if (k === 1) {
	        return 1;
	      }
	      a = 1;
	      s = p / 4;
	      return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
	    },
	    inout: function(k) {
	      var a, p, s;
	      s = void 0;
	      p = 0.4;
	      if (k === 0) {
	        return 0;
	      }
	      if (k === 1) {
	        return 1;
	      }
	      a = 1;
	      s = p / 4;
	      if ((k *= 2) < 1) {
	        return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
	      }
	      return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
	    }
	  };

	  Easing.prototype.bounce = {
	    "in": function(k) {
	      return 1 - easing.bounce.out(1 - k);
	    },
	    out: function(k) {
	      if (k < (1 / 2.75)) {
	        return 7.5625 * k * k;
	      } else if (k < (2 / 2.75)) {
	        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
	      } else if (k < (2.5 / 2.75)) {
	        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
	      } else {
	        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
	      }
	    },
	    inout: function(k) {
	      if (k < 0.5) {
	        return easing.bounce["in"](k * 2) * 0.5;
	      }
	      return easing.bounce.out(k * 2 - 1) * 0.5 + 0.5;
	    }
	  };

	  Easing.prototype.parseEasing = function(easing) {
	    var easingParent, type;
	    if (easing == null) {
	      easing = 'linear.none';
	    }
	    type = typeof easing;
	    if (type === 'string') {
	      if (easing.charAt(0).toLowerCase() === 'm') {
	        return this.path(easing);
	      } else {
	        easing = this._splitEasing(easing);
	        easingParent = this[easing[0]];
	        if (!easingParent) {
	          h.error("Easing with name \"" + easing[0] + "\" was not found, fallback to \"linear.none\" instead");
	          return this['linear']['none'];
	        }
	        return easingParent[easing[1]];
	      }
	    }
	    if (h.isArray(easing)) {
	      return this.bezier.apply(this, easing);
	    }
	    if ('function') {
	      return easing;
	    }
	  };

	  Easing.prototype._splitEasing = function(string) {
	    var firstPart, secondPart, split;
	    if (typeof string === 'function') {
	      return string;
	    }
	    if (typeof string === 'string' && string.length) {
	      split = string.split('.');
	      firstPart = split[0].toLowerCase() || 'linear';
	      secondPart = split[1].toLowerCase() || 'none';
	      return [firstPart, secondPart];
	    } else {
	      return ['linear', 'none'];
	    }
	  };

	  return Easing;

	})();

	easing = new Easing;

	easing.mix = mix(easing);

	module.exports = easing;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var BezierEasing, bezierEasing, h,
	  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	h = __webpack_require__(71);


	/**
	 * Copyright (c) 2014 Gaëtan Renaudeau http://goo.gl/El3k7u
	 * Adopted from https://github.com/gre/bezier-easing
	 */

	BezierEasing = (function() {
	  function BezierEasing(o) {
	    this.vars();
	    return this.generate;
	  }

	  BezierEasing.prototype.vars = function() {
	    return this.generate = h.bind(this.generate, this);
	  };

	  BezierEasing.prototype.generate = function(mX1, mY1, mX2, mY2) {
	    var A, B, C, NEWTON_ITERATIONS, NEWTON_MIN_SLOPE, SUBDIVISION_MAX_ITERATIONS, SUBDIVISION_PRECISION, _precomputed, arg, binarySubdivide, calcBezier, calcSampleValues, f, float32ArraySupported, getSlope, getTForX, i, j, kSampleStepSize, kSplineTableSize, mSampleValues, newtonRaphsonIterate, precompute, str;
	    if (arguments.length < 4) {
	      return this.error('Bezier function expects 4 arguments');
	    }
	    for (i = j = 0; j < 4; i = ++j) {
	      arg = arguments[i];
	      if (typeof arg !== "number" || isNaN(arg) || !isFinite(arg)) {
	        return this.error('Bezier function expects 4 arguments');
	      }
	    }
	    if (mX1 < 0 || mX1 > 1 || mX2 < 0 || mX2 > 1) {
	      return this.error('Bezier x values should be > 0 and < 1');
	    }
	    NEWTON_ITERATIONS = 4;
	    NEWTON_MIN_SLOPE = 0.001;
	    SUBDIVISION_PRECISION = 0.0000001;
	    SUBDIVISION_MAX_ITERATIONS = 10;
	    kSplineTableSize = 11;
	    kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
	    float32ArraySupported = indexOf.call(global, 'Float32Array') >= 0;
	    A = function(aA1, aA2) {
	      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
	    };
	    B = function(aA1, aA2) {
	      return 3.0 * aA2 - 6.0 * aA1;
	    };
	    C = function(aA1) {
	      return 3.0 * aA1;
	    };
	    calcBezier = function(aT, aA1, aA2) {
	      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
	    };
	    getSlope = function(aT, aA1, aA2) {
	      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
	    };
	    newtonRaphsonIterate = function(aX, aGuessT) {
	      var currentSlope, currentX;
	      i = 0;
	      while (i < NEWTON_ITERATIONS) {
	        currentSlope = getSlope(aGuessT, mX1, mX2);

	        /* istanbul ignore if */
	        if (currentSlope === 0.0) {
	          return aGuessT;
	        }
	        currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	        aGuessT -= currentX / currentSlope;
	        ++i;
	      }
	      return aGuessT;
	    };
	    calcSampleValues = function() {
	      i = 0;
	      while (i < kSplineTableSize) {
	        mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
	        ++i;
	      }
	    };

	    /* istanbul ignore next */
	    binarySubdivide = function(aX, aA, aB) {
	      var currentT, currentX, isBig;
	      currentX = void 0;
	      currentT = void 0;
	      i = 0;
	      while (true) {
	        currentT = aA + (aB - aA) / 2.0;
	        currentX = calcBezier(currentT, mX1, mX2) - aX;
	        if (currentX > 0.0) {
	          aB = currentT;
	        } else {
	          aA = currentT;
	        }
	        isBig = Math.abs(currentX) > SUBDIVISION_PRECISION;
	        if (!(isBig && ++i < SUBDIVISION_MAX_ITERATIONS)) {
	          break;
	        }
	      }
	      return currentT;
	    };
	    getTForX = function(aX) {
	      var currentSample, delta, dist, guessForT, initialSlope, intervalStart, lastSample;
	      intervalStart = 0.0;
	      currentSample = 1;
	      lastSample = kSplineTableSize - 1;
	      while (currentSample !== lastSample && mSampleValues[currentSample] <= aX) {
	        intervalStart += kSampleStepSize;
	        ++currentSample;
	      }
	      --currentSample;
	      delta = mSampleValues[currentSample + 1] - mSampleValues[currentSample];
	      dist = (aX - mSampleValues[currentSample]) / delta;
	      guessForT = intervalStart + dist * kSampleStepSize;
	      initialSlope = getSlope(guessForT, mX1, mX2);
	      if (initialSlope >= NEWTON_MIN_SLOPE) {
	        return newtonRaphsonIterate(aX, guessForT);
	      } else {

	        /* istanbul ignore next */
	        if (initialSlope === 0.0) {
	          return guessForT;
	        } else {
	          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
	        }
	      }
	    };
	    precompute = function() {
	      var _precomputed;
	      _precomputed = true;
	      if (mX1 !== mY1 || mX2 !== mY2) {
	        return calcSampleValues();
	      }
	    };
	    mSampleValues = !float32ArraySupported ? new Array(kSplineTableSize) : new Float32Array(kSplineTableSize);
	    _precomputed = false;
	    f = function(aX) {
	      if (!_precomputed) {
	        precompute();
	      }
	      if (mX1 === mY1 && mX2 === mY2) {
	        return aX;
	      }
	      if (aX === 0) {
	        return 0;
	      }
	      if (aX === 1) {
	        return 1;
	      }
	      return calcBezier(getTForX(aX), mY1, mY2);
	    };
	    str = "bezier(" + [mX1, mY1, mX2, mY2] + ")";
	    f.toStr = function() {
	      return str;
	    };
	    return f;
	  };

	  BezierEasing.prototype.error = function(msg) {
	    return h.error(msg);
	  };

	  return BezierEasing;

	})();

	bezierEasing = new BezierEasing;

	module.exports = bezierEasing;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var PathEasing, h;

	h = __webpack_require__(71);

	PathEasing = (function() {
	  PathEasing.prototype._vars = function() {
	    this._precompute = h.clamp(this.o.precompute || 1450, 100, 10000);
	    this._step = 1 / this._precompute;
	    this._rect = this.o.rect || 100;
	    this._approximateMax = this.o.approximateMax || 5;
	    this._eps = this.o.eps || 0.001;
	    return this._boundsPrevProgress = -1;
	  };

	  function PathEasing(path, o1) {
	    this.o = o1 != null ? o1 : {};
	    if (path === 'creator') {
	      return;
	    }
	    this.path = h.parsePath(path);
	    if (this.path == null) {
	      return h.error('Error while parsing the path');
	    }
	    this._vars();
	    this.path.setAttribute('d', this._normalizePath(this.path.getAttribute('d')));
	    this.pathLength = this.path.getTotalLength();
	    this.sample = h.bind(this.sample, this);
	    this._hardSample = h.bind(this._hardSample, this);
	    this._preSample();
	    this;
	  }

	  PathEasing.prototype._preSample = function() {
	    var i, j, length, point, progress, ref, results;
	    this._samples = [];
	    results = [];
	    for (i = j = 0, ref = this._precompute; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
	      progress = i * this._step;
	      length = this.pathLength * progress;
	      point = this.path.getPointAtLength(length);
	      results.push(this._samples[i] = {
	        point: point,
	        length: length,
	        progress: progress
	      });
	    }
	    return results;
	  };

	  PathEasing.prototype._findBounds = function(array, p) {
	    var buffer, direction, end, i, j, len, loopEnd, pointP, pointX, ref, ref1, start, value;
	    if (p === this._boundsPrevProgress) {
	      return this._prevBounds;
	    }
	    if (this._boundsStartIndex == null) {
	      this._boundsStartIndex = 0;
	    }
	    len = array.length;
	    if (this._boundsPrevProgress > p) {
	      loopEnd = 0;
	      direction = 'reverse';
	    } else {
	      loopEnd = len;
	      direction = 'forward';
	    }
	    if (direction === 'forward') {
	      start = array[0];
	      end = array[array.length - 1];
	    } else {
	      start = array[array.length - 1];
	      end = array[0];
	    }
	    for (i = j = ref = this._boundsStartIndex, ref1 = loopEnd; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
	      value = array[i];
	      pointX = value.point.x / this._rect;
	      pointP = p;
	      if (direction === 'reverse') {
	        buffer = pointX;
	        pointX = pointP;
	        pointP = buffer;
	      }
	      if (pointX < pointP) {
	        start = value;
	        this._boundsStartIndex = i;
	      } else {
	        end = value;
	        break;
	      }
	    }
	    this._boundsPrevProgress = p;
	    return this._prevBounds = {
	      start: start,
	      end: end
	    };
	  };

	  PathEasing.prototype.sample = function(p) {
	    var bounds, res;
	    p = h.clamp(p, 0, 1);
	    bounds = this._findBounds(this._samples, p);
	    res = this._checkIfBoundsCloseEnough(p, bounds);
	    if (res != null) {
	      return res;
	    }
	    return this._findApproximate(p, bounds.start, bounds.end);
	  };

	  PathEasing.prototype._checkIfBoundsCloseEnough = function(p, bounds) {
	    var point, y;
	    point = void 0;
	    y = this._checkIfPointCloseEnough(p, bounds.start.point);
	    if (y != null) {
	      return y;
	    }
	    return this._checkIfPointCloseEnough(p, bounds.end.point);
	  };

	  PathEasing.prototype._checkIfPointCloseEnough = function(p, point) {
	    if (h.closeEnough(p, point.x / this._rect, this._eps)) {
	      return this._resolveY(point);
	    }
	  };

	  PathEasing.prototype._approximate = function(start, end, p) {
	    var deltaP, percentP;
	    deltaP = end.point.x - start.point.x;
	    percentP = (p - (start.point.x / this._rect)) / (deltaP / this._rect);
	    return start.length + percentP * (end.length - start.length);
	  };

	  PathEasing.prototype._findApproximate = function(p, start, end, approximateMax) {
	    var approximation, args, newPoint, point, x;
	    if (approximateMax == null) {
	      approximateMax = this._approximateMax;
	    }
	    approximation = this._approximate(start, end, p);
	    point = this.path.getPointAtLength(approximation);
	    x = point.x / this._rect;
	    if (h.closeEnough(p, x, this._eps)) {
	      return this._resolveY(point);
	    } else {
	      if (--approximateMax < 1) {
	        return this._resolveY(point);
	      }
	      newPoint = {
	        point: point,
	        length: approximation
	      };
	      args = p < x ? [p, start, newPoint, approximateMax] : [p, newPoint, end, approximateMax];
	      return this._findApproximate.apply(this, args);
	    }
	  };

	  PathEasing.prototype._resolveY = function(point) {
	    return 1 - (point.y / this._rect);
	  };

	  PathEasing.prototype._normalizePath = function(path) {
	    var commands, endIndex, normalizedPath, points, startIndex, svgCommandsRegexp;
	    svgCommandsRegexp = /[M|L|H|V|C|S|Q|T|A]/gim;
	    points = path.split(svgCommandsRegexp);
	    points.shift();
	    commands = path.match(svgCommandsRegexp);
	    startIndex = 0;
	    points[startIndex] = this._normalizeSegment(points[startIndex]);
	    endIndex = points.length - 1;
	    points[endIndex] = this._normalizeSegment(points[endIndex], this._rect || 100);
	    return normalizedPath = this._joinNormalizedPath(commands, points);
	  };

	  PathEasing.prototype._joinNormalizedPath = function(commands, points) {
	    var command, i, j, len1, normalizedPath, space;
	    normalizedPath = '';
	    for (i = j = 0, len1 = commands.length; j < len1; i = ++j) {
	      command = commands[i];
	      space = i === 0 ? '' : ' ';
	      normalizedPath += "" + space + command + (points[i].trim());
	    }
	    return normalizedPath;
	  };

	  PathEasing.prototype._normalizeSegment = function(segment, value) {
	    var i, j, lastPoint, len1, nRgx, pairs, parsedX, point, space, x;
	    if (value == null) {
	      value = 0;
	    }
	    segment = segment.trim();
	    nRgx = /(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim;
	    pairs = this._getSegmentPairs(segment.match(nRgx));
	    lastPoint = pairs[pairs.length - 1];
	    x = lastPoint[0];
	    parsedX = Number(x);
	    if (parsedX !== value) {
	      segment = '';
	      lastPoint[0] = value;
	      for (i = j = 0, len1 = pairs.length; j < len1; i = ++j) {
	        point = pairs[i];
	        space = i === 0 ? '' : ' ';
	        segment += "" + space + point[0] + "," + point[1];
	      }
	    }
	    return segment;
	  };

	  PathEasing.prototype._getSegmentPairs = function(array) {
	    var i, j, len1, newArray, pair, value;
	    if (array.length % 2 !== 0) {
	      h.error('Failed to parse the path - segment pairs are not even.', array);
	    }
	    newArray = [];
	    for (i = j = 0, len1 = array.length; j < len1; i = j += 2) {
	      value = array[i];
	      pair = [array[i], array[i + 1]];
	      newArray.push(pair);
	    }
	    return newArray;
	  };

	  PathEasing.prototype.create = function(path, o) {
	    var handler;
	    handler = new PathEasing(path, o);
	    handler.sample.path = handler.path;
	    return handler.sample;
	  };

	  return PathEasing;

	})();

	module.exports = PathEasing;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	var create, easing, getNearest, mix, parseIfEasing, sort,
	  slice = [].slice;

	easing = null;

	parseIfEasing = function(item) {
	  if (typeof item.value === 'number') {
	    return item.value;
	  } else {
	    return easing.parseEasing(item.value);
	  }
	};

	sort = function(a, b) {
	  var returnValue;
	  a.value = parseIfEasing(a);
	  b.value = parseIfEasing(b);
	  returnValue = 0;
	  a.to < b.to && (returnValue = -1);
	  a.to > b.to && (returnValue = 1);
	  return returnValue;
	};

	getNearest = function(array, progress) {
	  var i, index, j, len, value;
	  index = 0;
	  for (i = j = 0, len = array.length; j < len; i = ++j) {
	    value = array[i];
	    index = i;
	    if (value.to > progress) {
	      break;
	    }
	  }
	  return index;
	};

	mix = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  if (args.length > 1) {
	    args = args.sort(sort);
	  } else {
	    args[0].value = parseIfEasing(args[0]);
	  }
	  return function(progress) {
	    var index, value;
	    index = getNearest(args, progress);
	    if (index !== -1) {
	      value = args[index].value;
	      if (index === args.length - 1 && progress > args[index].to) {
	        return 1;
	      }
	      if (typeof value === 'function') {
	        return value(progress);
	      } else {
	        return value;
	      }
	    }
	  };
	};

	create = function(e) {
	  easing = e;
	  return mix;
	};

	module.exports = create;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(3);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  Method to bootstrap approximation function.
	  @private
	  @param   {Object} Samples Object.
	  @returns {Function} Approximate function.
	*/
	var _proximate = function _proximate(samples) {
	  var n = samples.base,
	      samplesAmount = Math.pow(10, n),
	      samplesStep = 1 / samplesAmount;

	  function RoundNumber(input, numberDecimals) {
	    numberDecimals = +numberDecimals || 0; // +var magic!

	    var multiplyer = Math.pow(10.0, numberDecimals);

	    return Math.round(input * multiplyer) / multiplyer;
	  }

	  var cached = function cached(p) {
	    var newKey = RoundNumber(p, n),
	        sample = samples[newKey.toString()];

	    if (Math.abs(p - newKey) < samplesStep) {
	      return sample;
	    }

	    if (p > newKey) {
	      var nextIndex = newKey + samplesStep;
	      var nextValue = samples[nextIndex];
	    } else {
	      var nextIndex = newKey - samplesStep;
	      var nextValue = samples[nextIndex];
	    }

	    var dLength = nextIndex - newKey;
	    var dValue = nextValue - sample;
	    if (dValue < samplesStep) {
	      return sample;
	    }

	    var progressScale = (p - newKey) / dLength;
	    var coef = nextValue > sample ? -1 : 1;
	    var scaledDifference = coef * progressScale * dValue;

	    return sample + scaledDifference;
	  };

	  cached.getSamples = function () {
	    return samples;
	  };

	  return cached;
	};
	/*
	    Method to take samples of the function and call the _proximate
	    method with the dunction and samples. Or if samples passed - pipe
	    them to the _proximate method without sampling.
	    @private
	    @param {Function} Function to sample.
	    @param {Number, Object, String} Precision or precomputed samples.
	  */
	var _sample = function _sample(fn) {
	  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;


	  var nType = typeof n === 'undefined' ? 'undefined' : (0, _typeof3.default)(n);

	  var samples = {};
	  if (nType === 'number') {
	    var p = 0,
	        samplesCount = Math.pow(10, n),
	        step = 1 / samplesCount;

	    samples[0] = fn(0);
	    for (var i = 0; i < samplesCount - 1; i++) {
	      p += step;

	      var index = parseFloat(p.toFixed(n));
	      samples[index] = fn(p);
	    }
	    samples[1] = fn(1);

	    samples.base = n;
	  } else if (nType === 'object') {
	    samples = n;
	  } else if (nType === 'string') {
	    samples = JSON.parse(n);
	  }

	  return Approximate._sample._proximate(samples);
	};

	var Approximate = { _sample: _sample, _proximate: _proximate };
	Approximate._sample._proximate = Approximate._proximate;

	exports.default = Approximate._sample;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(111);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	var _tweener = __webpack_require__(102);

	var _tweener2 = _interopRequireDefault(_tweener);

	var _tween = __webpack_require__(101);

	var _tween2 = _interopRequireDefault(_tween);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Timeline = function (_Tween) {
	  (0, _inherits3.default)(Timeline, _Tween);

	  /*
	    API method to add child tweens/timelines.
	    @public
	    @param {Object, Array} Tween/Timeline or an array of such.
	    @returns {Object} Self.
	  */
	  Timeline.prototype.add = function add() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    this._pushTimelineArray(args);
	    this._calcDimentions();
	    return this;
	  };
	  /*
	    API method to append the Tween/Timeline to the end of the
	    timeline. Each argument is treated as a new append.
	    Array of tweens is treated as a parallel sequence. 
	    @public
	    @param {Object, Array} Tween/Timeline to append or array of such.
	    @returns {Object} Self.
	  */


	  Timeline.prototype.append = function append() {
	    for (var _len2 = arguments.length, timeline = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      timeline[_key2] = arguments[_key2];
	    }

	    for (var _iterator = timeline, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var tm = _ref;

	      if (_h2.default.isArray(tm)) {
	        this._appendTimelineArray(tm);
	      } else {
	        this._appendTimeline(tm, this._timelines.length);
	      }
	      this._calcDimentions();
	    }
	    return this;
	  };
	  /*
	    API method to stop the Tween.
	    @public
	    @param   {Number} Progress [0..1] to set when stopped.
	    @returns {Object} Self.
	  */


	  Timeline.prototype.stop = function stop(progress) {
	    _Tween.prototype.stop.call(this, progress);
	    this._stopChildren(progress);
	    return this;
	  };
	  /*
	    Method to reset tween's state and properties.
	    @public
	    @overrides @ Tween
	    @returns this.
	  */


	  Timeline.prototype.reset = function reset() {
	    _Tween.prototype.reset.call(this);
	    this._resetChildren();
	    return this;
	  };
	  /*
	    Method to call `reset` method on all children.
	    @private
	  */


	  Timeline.prototype._resetChildren = function _resetChildren() {
	    for (var i = 0; i < this._timelines.length; i++) {
	      this._timelines[i].reset();
	    }
	  };
	  /*
	    Method to call `stop` method on all children.
	    @private
	    @param   {Number} Progress [0..1] to set when stopped.
	  */


	  Timeline.prototype._stopChildren = function _stopChildren(progress) {
	    for (var i = this._timelines.length - 1; i >= 0; i--) {
	      this._timelines[i].stop(progress);
	    }
	  };
	  /*
	    Method to set tween's state to complete.
	    @private
	    @overrides @ Tween
	    @param {Number} Current time.
	    @param {Boolean} Is yoyo period.
	  */
	  // _complete ( time, isYoyo ) {
	  //   // this._updateChildren( 1, time, isYoyo );
	  //   // this._setProgress( 1, time, isYoyo );
	  //   super._complete( time, isYoyo );
	  //   // this._resetChildren();
	  // }

	  // ^ PUBLIC  METHOD(S) ^
	  // v PRIVATE METHOD(S) v

	  /*
	    Method to append Tween/Timeline array or mix of such.
	    @private
	    @param {Array} Array of Tweens/Timelines.
	  */


	  Timeline.prototype._appendTimelineArray = function _appendTimelineArray(timelineArray) {
	    var i = timelineArray.length,
	        time = this._props.repeatTime - this._props.delay,
	        len = this._timelines.length;

	    while (i--) {
	      this._appendTimeline(timelineArray[i], len, time);
	    }
	  };
	  /*
	    Method to append a single timeline to the Timeline.
	    @private
	    @param {Object} Tween/Timline to append.
	    @param {Number} Index of the append.
	    @param {Number} Shift time.
	  */


	  Timeline.prototype._appendTimeline = function _appendTimeline(timeline, index, time) {
	    // if timeline is a module with timeline property then extract it
	    if (timeline.timeline instanceof Timeline) {
	      timeline = timeline.timeline;
	    }
	    if (timeline.tween instanceof _tween2.default) {
	      timeline = timeline.tween;
	    }

	    var shift = time != null ? time : this._props.duration;
	    shift += timeline._props.shiftTime || 0;
	    timeline.index = index;this._pushTimeline(timeline, shift);
	  };
	  /*
	    PrivateMethod to push Tween/Timeline array.
	    @private
	    @param {Array} Array of Tweens/Timelines.
	  */


	  Timeline.prototype._pushTimelineArray = function _pushTimelineArray(array) {
	    for (var i = 0; i < array.length; i++) {
	      var tm = array[i];
	      // recursive push to handle arrays of arrays
	      if (_h2.default.isArray(tm)) {
	        this._pushTimelineArray(tm);
	      } else {
	        this._pushTimeline(tm);
	      }
	    };
	  };
	  /*
	    Method to push a single Tween/Timeline.
	    @private
	    @param {Object} Tween or Timeline to push.
	    @param {Number} Number of milliseconds to shift the start time
	                    of the Tween/Timeline.
	  */


	  Timeline.prototype._pushTimeline = function _pushTimeline(timeline, shift) {
	    // if timeline is a module with timeline property then extract it
	    if (timeline.timeline instanceof Timeline) {
	      timeline = timeline.timeline;
	    }
	    if (timeline.tween instanceof _tween2.default) {
	      timeline = timeline.tween;
	    }
	    // add self delay to the timeline
	    shift != null && timeline._setProp({ 'shiftTime': shift });
	    this._timelines.push(timeline);
	    this._recalcDuration(timeline);
	  };
	  /*
	    Method set progress on self and child Tweens/Timelines.
	    @private
	    @param {Number} Progress to set.
	    @param {Number} Current update time.
	  */


	  Timeline.prototype._setProgress = function _setProgress(p, time, isYoyo) {
	    // we need to pass self previous time to children
	    // to prevent initial _wasUnknownUpdate nested waterfall
	    // if not yoyo option set, pass the previous time
	    // otherwise, pass previous or next time regarding yoyo period.

	    // COVER CURRENT SWAPPED ORDER
	    this._updateChildren(p, time, isYoyo);

	    _tween2.default.prototype._setProgress.call(this, p, time);
	  };

	  Timeline.prototype._updateChildren = function _updateChildren(p, time, isYoyo) {
	    var coef = time > this._prevTime ? -1 : 1;
	    if (this._props.isYoyo && isYoyo) {
	      coef *= -1;
	    }
	    var timeToTimelines = this._props.startTime + p * this._props.duration,
	        prevTimeToTimelines = timeToTimelines + coef,
	        len = this._timelines.length;

	    for (var i = 0; i < len; i++) {
	      // specify the children's array update loop direction
	      // if time > prevTime go from 0->length else from length->0
	      // var j = ( time > this._prevTime ) ? i : (len-1) - i ;
	      var j = timeToTimelines > prevTimeToTimelines ? i : len - 1 - i;
	      this._timelines[j]._update(timeToTimelines, prevTimeToTimelines, this._prevYoyo, this._onEdge);
	    }
	    this._prevYoyo = isYoyo;
	  };
	  /*
	    Method calculate self duration based on timeline's duration.
	    @private
	    @param {Object} Tween or Timeline to calculate.
	  */


	  Timeline.prototype._recalcDuration = function _recalcDuration(timeline) {
	    var p = timeline._props,
	        timelineTime = p.repeatTime / p.speed + (p.shiftTime || 0) + timeline._negativeShift;

	    this._props.duration = Math.max(timelineTime, this._props.duration);
	  };
	  /*
	    Method calculate self duration from skretch.
	    @private
	  */


	  Timeline.prototype._recalcTotalDuration = function _recalcTotalDuration() {
	    var i = this._timelines.length;
	    this._props.duration = 0;
	    while (i--) {
	      var tm = this._timelines[i];
	      // recalc total duration on child timelines
	      tm._recalcTotalDuration && tm._recalcTotalDuration();
	      // add the timeline's duration to selft duration
	      this._recalcDuration(tm);
	    }
	    this._calcDimentions();
	  };
	  /*
	    Method set start and end times.
	    @private
	    @param {Number, Null} Time to start with.
	  */


	  Timeline.prototype._setStartTime = function _setStartTime(time) {
	    var isReset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	    _Tween.prototype._setStartTime.call(this, time);
	    this._startTimelines(this._props.startTime, isReset);
	  };
	  /*
	    Method calculate self duration based on timeline's duration.
	    @private
	    @param {Number, Null} Time to start with.
	  */


	  Timeline.prototype._startTimelines = function _startTimelines(time) {
	    var isReset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	    var p = this._props,
	        isStop = this._state === 'stop';

	    time == null && (time = this._props.startTime);

	    for (var i = 0; i < this._timelines.length; i++) {
	      var tm = this._timelines[i];
	      tm._setStartTime(time, isReset);
	      // if from `_subPlay` and `_prevTime` is set and state is `stop`
	      // prevTime normalizing is for play/pause functionality, so no
	      // need to normalize if the timeline is in `stop` state.
	      if (!isReset && tm._prevTime != null && !isStop) {
	        tm._prevTime = tm._normPrevTimeForward();
	      }
	    }
	  };
	  /*
	    Method to launch onRefresh callback.
	    @method _refresh
	    @private
	    @overrides @ Tween
	    @param {Boolean} If refresh even before start time.
	  */


	  Timeline.prototype._refresh = function _refresh(isBefore) {
	    var len = this._timelines.length;
	    for (var i = 0; i < len; i++) {
	      this._timelines[i]._refresh(isBefore);
	    }
	    _Tween.prototype._refresh.call(this, isBefore);
	  };
	  /*
	    Method do declare defaults by this._defaults object
	    @private
	  */


	  Timeline.prototype._declareDefaults = function _declareDefaults() {
	    // if duration was passed on initialization stage, warn user and reset it.
	    if (this._o.duration != null) {
	      _h2.default.error('Duration can not be declared on Timeline, but "' + this._o.duration + '" is. You probably want to use Tween instead.');
	      this._o.duration = 0;
	    }
	    _Tween.prototype._declareDefaults.call(this);
	    // remove default 
	    this._defaults.duration = 0;
	    this._defaults.easing = 'Linear.None';
	    this._defaults.backwardEasing = 'Linear.None';
	    this._defaults.nameBase = 'Timeline';
	  };

	  function Timeline() {
	    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    (0, _classCallCheck3.default)(this, Timeline);
	    return (0, _possibleConstructorReturn3.default)(this, _Tween.call(this, o));
	  }
	  /*
	    Method to declare some vars.
	    @private
	  */


	  Timeline.prototype._vars = function _vars() {
	    this._timelines = [];
	    _Tween.prototype._vars.call(this);
	  };

	  return Timeline;
	}(_tween2.default);

	exports.default = Timeline;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(6);
	module.exports = __webpack_require__(113);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(19)
	  , get      = __webpack_require__(114);
	module.exports = __webpack_require__(14).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(115)
	  , ITERATOR  = __webpack_require__(47)('iterator')
	  , Iterators = __webpack_require__(29);
	module.exports = __webpack_require__(14).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(37)
	  , TAG = __webpack_require__(47)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _keys = __webpack_require__(95);

	var _keys2 = _interopRequireDefault(_keys);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	var _thenable = __webpack_require__(99);

	var _thenable2 = _interopRequireDefault(_thenable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tuneable = function (_Thenable) {
	  (0, _inherits3.default)(Tuneable, _Thenable);

	  function Tuneable() {
	    (0, _classCallCheck3.default)(this, Tuneable);
	    return (0, _possibleConstructorReturn3.default)(this, _Thenable.apply(this, arguments));
	  }

	  /*
	    Method to start the animation with optional new options.
	    @public
	    @param {Object} New options to set on the run.
	    @returns {Object} this.
	  */
	  Tuneable.prototype.tune = function tune(o) {
	    // if options object was passed
	    if (o && (0, _keys2.default)(o).length) {
	      this._transformHistory(o);
	      this._tuneNewOptions(o);
	      // restore array prop values because _props
	      // contain them as parsed arrays
	      // but we need the as strings to store in history
	      // and merge in history chains
	      this._history[0] = _h2.default.cloneObj(this._props);
	      for (var key in this._arrayPropertyMap) {
	        if (o[key] != null) {
	          this._history[0][key] = this._preparsePropValue(key, o[key]);
	        }
	      }

	      this._tuneSubModules();
	      this._resetTweens();
	    }
	    return this;
	  };
	  /*
	    Method to regenerate all the random properties form initial object.
	    @public
	    @returns this.
	  */


	  Tuneable.prototype.generate = function generate() {
	    return this.tune(this._o);
	  };

	  // ^ PUBLIC  METHOD(S) ^
	  // v PRIVATE METHOD(S) v

	  /*
	    Method to preparse options in object.
	    @private
	    @param {Object} Object to preparse properties on.
	    @returns {Object} Passed object with preparsed props.
	  */
	  // _preParseOptions ( o ) {
	  //   for (var key in o) {
	  //     o[key] = this._preparsePropValue( key, o[key] );
	  //   }
	  //   return o;
	  // }
	  /*
	    Method to transform history rewrite new options object chain on run.
	    @private
	    @param {Object} New options to tune for.
	  */


	  Tuneable.prototype._transformHistory = function _transformHistory(o) {
	    for (var key in o) {
	      var value = o[key];
	      // don't transform for childOptions
	      // if ( key === 'childOptions' ) { continue; }
	      this._transformHistoryFor(key, this._preparsePropValue(key, value));
	    }
	  };
	  /*
	    Method to transform history chain for specific key/value.
	    @param {String} Name of the property to transform history for.
	    @param {Any} The new property's value.
	  */


	  Tuneable.prototype._transformHistoryFor = function _transformHistoryFor(key, value) {
	    for (var i = 0; i < this._history.length; i++) {
	      if (value = this._transformHistoryRecord(i, key, value)) {
	        // break if no further history modifications needed
	        if (value == null) {
	          break;
	        }
	      }
	    }
	  };
	  /*
	    Method to transform history recod with key/value.
	    @param {Number} Index of the history record to transform.
	    @param {String} Property name to transform.
	    @param {Any} Property value to transform to.
	    @param {Object} Optional the current history record.
	    @param {Object} Optional the next history record.
	    @returns {Boolean} Returns true if no further
	                       history modifications is needed.
	  */


	  Tuneable.prototype._transformHistoryRecord = function _transformHistoryRecord(index, key, newVal, currRecord, nextRecord) {
	    // newVal = this._parseProperty( key, newVal );
	    if (newVal == null) {
	      return null;
	    }

	    // fallback to history records, if wasn't specified
	    currRecord = currRecord == null ? this._history[index] : currRecord;
	    nextRecord = nextRecord == null ? this._history[index + 1] : nextRecord;

	    var oldVal = currRecord[key],
	        nextVal = nextRecord == null ? null : nextRecord[key];

	    // if index is 0 - always save the newVal
	    // and return non-delta for subsequent modifications
	    if (index === 0) {
	      currRecord[key] = newVal;
	      // always return on tween properties
	      if (_h2.default.isTweenProp(key) && key !== 'duration') {
	        return null;
	      }
	      // nontween properties
	      var isRewriteNext = this._isRewriteNext(oldVal, nextVal),
	          returnVal = this._isDelta(newVal) ? _h2.default.getDeltaEnd(newVal) : newVal;
	      return isRewriteNext ? returnVal : null;
	    } else {
	      // if was delta and came none-deltta - rewrite
	      // the start of the delta and stop
	      if (this._isDelta(oldVal)) {
	        var _currRecord$key;

	        currRecord[key] = (_currRecord$key = {}, _currRecord$key[newVal] = _h2.default.getDeltaEnd(oldVal), _currRecord$key);
	        return null;
	      } else {
	        // if the old value is not delta and the new one is
	        currRecord[key] = newVal;
	        // if the next item has the same value - return the
	        // item for subsequent modifications or stop
	        return this._isRewriteNext(oldVal, nextVal) ? newVal : null;
	      }
	    }
	  };
	  /*
	    Method to check if the next item should
	    be rewrited in transform history operation.
	    @private
	    @param {Any} Current value.
	    @param {Any} Next value.
	    @returns {Boolean} If need to rewrite the next value.
	  */


	  Tuneable.prototype._isRewriteNext = function _isRewriteNext(currVal, nextVal) {
	    // return false if nothing to rewrite next
	    if (nextVal == null && currVal != null) {
	      return false;
	    }

	    var isEqual = currVal === nextVal,
	        isNextDelta = this._isDelta(nextVal),
	        isDelta = this._isDelta(currVal),
	        isValueDeltaChain = false,
	        isDeltaChain = false;

	    if (isDelta && isNextDelta) {
	      if (_h2.default.getDeltaEnd(currVal) == _h2.default.getDeltaStart(nextVal)) {
	        isDeltaChain = true;
	      }
	    } else if (isNextDelta) {
	      isValueDeltaChain = _h2.default.getDeltaStart(nextVal) === '' + currVal;
	    }

	    return isEqual || isValueDeltaChain || isDeltaChain;
	  };
	  /*
	    Method to tune new history options to all the submodules.
	    @private
	  */


	  Tuneable.prototype._tuneSubModules = function _tuneSubModules() {
	    for (var i = 1; i < this._modules.length; i++) {
	      this._modules[i]._tuneNewOptions(this._history[i]);
	    }
	  };
	  /*
	    Method to set new options on run.
	    @param {Boolean} If foreign context.
	    @private
	  */


	  Tuneable.prototype._resetTweens = function _resetTweens() {
	    var i = 0,
	        shift = 0,
	        tweens = this.timeline._timelines;

	    // if `isTimelineLess` return
	    if (tweens == null) {
	      return;
	    }

	    for (var i = 0; i < tweens.length; i++) {
	      var tween = tweens[i],
	          prevTween = tweens[i - 1];

	      shift += prevTween ? prevTween._props.repeatTime : 0;
	      this._resetTween(tween, this._history[i], shift);
	    }
	    this.timeline._setProp(this._props.timeline);
	    this.timeline._recalcTotalDuration();
	  };
	  /*
	    Method to reset tween with new options.
	    @param {Object} Tween to reset.
	    @param {Object} Tween's to reset tween with.
	    @param {Number} Optional number to shift tween start time.
	  */


	  Tuneable.prototype._resetTween = function _resetTween(tween, o) {
	    var shift = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	    o.shiftTime = shift;tween._setProp(o);
	  };

	  return Tuneable;
	}(_thenable2.default);

	exports.default = Tuneable;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _shape = __webpack_require__(94);

	var _shape2 = _interopRequireDefault(_shape);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  *TODO:*
	  ---
	  - tweak then chains
	*/

	var ShapeSwirl = function (_Shape) {
	  (0, _inherits3.default)(ShapeSwirl, _Shape);

	  function ShapeSwirl() {
	    (0, _classCallCheck3.default)(this, ShapeSwirl);
	    return (0, _possibleConstructorReturn3.default)(this, _Shape.apply(this, arguments));
	  }

	  /*
	    Method to declare _defaults and other default objects.
	    @private
	    @override @ Shape
	  */
	  ShapeSwirl.prototype._declareDefaults = function _declareDefaults() {
	    _Shape.prototype._declareDefaults.call(this);

	    /* _DEFAULTS ARE - Shape DEFAULTS + THESE: */

	    /* [boolean] :: If shape should follow sinusoidal path. */
	    this._defaults.isSwirl = true;
	    /* ∆ :: [number > 0] :: Degree size of the sinusoidal path. */
	    this._defaults.swirlSize = 10;
	    /* ∆ :: [number > 0] :: Frequency of the sinusoidal path. */
	    this._defaults.swirlFrequency = 3;
	    /* ∆ :: [number > 0] :: Sinusoidal path length scale. */
	    this._defaults.pathScale = 1;
	    /* ∆ :: [number] :: Degree shift for the sinusoidal path. */
	    this._defaults.degreeShift = 0;
	    /* ∆ :: [number] :: Radius of the shape. */
	    this._defaults.radius = 5;
	    // ∆ :: Units :: Possible values: [ number, string ]
	    this._defaults.x = 0;
	    // ∆ :: Units :: Possible values: [ number, string ]
	    this._defaults.y = 0;
	    // ∆ :: Possible values: [ number ]
	    this._defaults.scale = { 1: 0 };
	    /* [number: -1, 1] :: Directon of Swirl. */
	    this._defaults.direction = 1;
	  };

	  // ^ PUBLIC  METHOD(S) ^
	  // v PRIVATE METHOD(S) v

	  /*
	    Method to copy _o options to _props with
	    fallback to _defaults.
	    @private
	    @override @ Module
	  */


	  ShapeSwirl.prototype._extendDefaults = function _extendDefaults() {
	    _Shape.prototype._extendDefaults.call(this);
	    this._calcPosData();
	  };
	  /*
	    Method to tune new oprions to _o and _props object.
	    @private
	    @overrides @ Module
	    @param {Object} Options object to tune to.
	  */


	  ShapeSwirl.prototype._tuneNewOptions = function _tuneNewOptions(o) {
	    if (o == null) {
	      return;
	    }

	    _Shape.prototype._tuneNewOptions.call(this, o);
	    if (o.x != null || o.y != null) {
	      this._calcPosData();
	    }
	  };
	  /*
	    Method to calculate Swirl's position data.
	    @private
	  */


	  ShapeSwirl.prototype._calcPosData = function _calcPosData() {
	    var x = this._getPosValue('x'),
	        y = this._getPosValue('y'),
	        angle = 90 + Math.atan(y.delta / x.delta || 0) * _h2.default.RAD_TO_DEG;

	    this._posData = {
	      radius: Math.sqrt(x.delta * x.delta + y.delta * y.delta),
	      angle: x.delta < 0 ? angle + 180 : angle,
	      x: x, y: y
	    };
	    // set the last position to _props
	    // this._calcSwirlXY( 1 );
	  };
	  /*
	    Gets `x` or `y` position value.
	    @private
	    @param {String} Name of the property.
	  */


	  ShapeSwirl.prototype._getPosValue = function _getPosValue(name) {
	    var delta = this._deltas[name];
	    if (delta) {
	      // delete from deltas to prevent normal
	      delete this._deltas[name];
	      return {
	        start: delta.start.value,
	        end: delta.end.value,
	        delta: delta.delta,
	        units: delta.end.unit
	      };
	    } else {
	      var pos = _h2.default.parseUnit(this._props[name]);
	      return { start: pos.value, end: pos.value, delta: 0, units: pos.unit };
	    }
	  };
	  /*
	    Method to calculate the progress of the Swirl.
	    @private
	    @overrides @ Shape
	    @param {Numer} Eased progress of the Swirl in range of [0..1]
	    @param {Numer} Progress of the Swirl in range of [0..1]
	  */


	  ShapeSwirl.prototype._setProgress = function _setProgress(easedProgress, progress) {
	    this._progress = easedProgress;
	    this._calcCurrentProps(easedProgress, progress);
	    this._calcSwirlXY(easedProgress);
	    // this._calcOrigin();
	    this._draw(easedProgress);
	  };
	  /*
	    Method to calculate x/y for Swirl's progress
	    @private
	    @mutates _props
	    @param {Number} Current progress in [0...1]
	  */


	  ShapeSwirl.prototype._calcSwirlXY = function _calcSwirlXY(proc) {
	    var p = this._props,
	        angle = this._posData.angle + p.degreeShift,
	        point = _h2.default.getRadialPoint({
	      angle: p.isSwirl ? angle + this._getSwirl(proc) : angle,
	      radius: proc * this._posData.radius * p.pathScale,
	      center: {
	        x: this._posData.x.start,
	        y: this._posData.y.start
	      }
	    });
	    // if foreign svg canvas - set position without units
	    var x = point.x,
	        y = point.y,
	        smallNumber = 0.000001;

	    // remove very small numbers to prevent exponential forms
	    if (x > 0 && x < smallNumber) {
	      x = smallNumber;
	    }
	    if (y > 0 && y < smallNumber) {
	      y = smallNumber;
	    }
	    if (x < 0 && x > -smallNumber) {
	      x = -smallNumber;
	    }
	    if (y < 0 && y > -smallNumber) {
	      y = -smallNumber;
	    }

	    p.x = this._o.ctx ? x : '' + x + this._posData.x.units;
	    p.y = this._o.ctx ? y : '' + y + this._posData.y.units;
	  };
	  /*
	    Method to get progress of the swirl.
	    @private
	    @param {Number} Progress of the Swirl.
	    @returns {Number} Progress of the swirl.
	  */


	  ShapeSwirl.prototype._getSwirl = function _getSwirl(proc) {
	    var p = this._props;
	    return p.direction * p.swirlSize * Math.sin(p.swirlFrequency * proc);
	  };
	  /*
	    Method to draw shape.
	    If !isWithShape - draw self el only, but not shape.
	    @private
	    @overrides @ Shape.
	  */


	  ShapeSwirl.prototype._draw = function _draw() {
	    // call _draw or just _drawEl @ Shape depending if there is `shape`
	    var methodName = this._props.isWithShape ? '_draw' : '_drawEl';
	    _shape2.default.prototype[methodName].call(this);
	  };

	  return ShapeSwirl;
	}(_shape2.default);

	exports.default = ShapeSwirl;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _keys = __webpack_require__(95);

	var _keys2 = _interopRequireDefault(_keys);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _timeline = __webpack_require__(110);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _shapeSwirl = __webpack_require__(117);

	var _shapeSwirl2 = _interopRequireDefault(_shapeSwirl);

	var _tunable = __webpack_require__(116);

	var _tunable2 = _interopRequireDefault(_tunable);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Shape    from './shape';
	var Burst = function (_Tunable) {
	  (0, _inherits3.default)(Burst, _Tunable);

	  function Burst() {
	    (0, _classCallCheck3.default)(this, Burst);
	    return (0, _possibleConstructorReturn3.default)(this, _Tunable.apply(this, arguments));
	  }

	  /*
	    Method to declare defaults.
	    @override @ ShapeSwirl.
	  */
	  Burst.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {
	      /* [number > 0] :: Quantity of Burst particles. */
	      count: 5,
	      /* [0 < number < 360] :: Degree of the Burst. */
	      degree: 360,
	      /* ∆ :: [number > 0] :: Radius of the Burst. */
	      radius: { 0: 50 },
	      /* ∆ :: [number > 0] :: X radius of the Burst. */
	      radiusX: null,
	      /* ∆ :: [number > 0] :: Y radius of the Burst. */
	      radiusY: null,
	      /* [number >= 0] :: width of the main swirl. */
	      width: 0,
	      /* [number >= 0] :: height of the main swirl. */
	      height: 0
	    };
	  };
	  /*
	    Method to create a then record for the module.
	    @public
	    overrides @ Thenable
	    @param    {Object} Options for the next animation.
	    @returns  {Object} this.
	  */


	  Burst.prototype.then = function then(o) {
	    // remove tween properties (not callbacks)
	    this._removeTweenProperties(o);

	    var newMaster = this._masterThen(o),
	        newSwirls = this._childThen(o);

	    this._setSwirlDuration(newMaster, this._calcPackTime(newSwirls));

	    this.timeline._recalcTotalDuration();
	    return this;
	  };
	  /*
	    Method to start the animation with optional new options.
	    @public
	    @param {Object} New options to set on the run.
	    @returns {Object} this.
	  */


	  Burst.prototype.tune = function tune(o) {
	    if (o == null) {
	      return this;
	    }
	    // save timeline options to _timelineOptions
	    // and delete the timeline options on o
	    // cuz masterSwirl should not get them
	    this._saveTimelineOptions(o);

	    // add new timeline properties to timeline
	    this.timeline._setProp(this._timelineOptions);

	    // remove tween options (not callbacks)
	    this._removeTweenProperties(o);

	    // tune _props
	    this._tuneNewOptions(o);

	    // tune master swirl
	    this.masterSwirl.tune(o);

	    // tune child swirls
	    this._tuneSwirls(o);

	    // recalc time for modules
	    this._recalcModulesTime();
	    return this;
	  };

	  // ^ PUBLIC  METHODS ^
	  // v PRIVATE METHODS v

	  /*
	    Method to copy `_o` options to `_props` object
	    with fallback to `_defaults`.
	    @private
	    @overrides @ Module
	  */


	  Burst.prototype._extendDefaults = function _extendDefaults() {
	    // remove tween properties (not callbacks)
	    this._removeTweenProperties(this._o);
	    _Tunable.prototype._extendDefaults.call(this);
	  };
	  /*
	    Method to remove all tween (excluding
	    callbacks) props from object.
	    @private
	    @param {Object} Object which should be cleaned
	                    up from tween properties.
	  */


	  Burst.prototype._removeTweenProperties = function _removeTweenProperties(o) {
	    for (var key in _h2.default.tweenOptionMap) {
	      // remove all items that are not declared in _defaults
	      if (this._defaults[key] == null) {
	        delete o[key];
	      }
	    }
	  };
	  /*
	    Method to recalc modules chain tween
	    times after tuning new options.
	    @private
	  */


	  Burst.prototype._recalcModulesTime = function _recalcModulesTime() {
	    var modules = this.masterSwirl._modules,
	        swirls = this._swirls,
	        shiftTime = 0;

	    for (var i = 0; i < modules.length; i++) {
	      var tween = modules[i].tween,
	          packTime = this._calcPackTime(swirls[i]);
	      tween._setProp({ 'duration': packTime, 'shiftTime': shiftTime });
	      shiftTime += packTime;
	    }

	    this.timeline._recalcTotalDuration();
	  };
	  /*
	    Method to tune Swirls with new options.
	    @private
	    @param {Object} New options.
	  */


	  Burst.prototype._tuneSwirls = function _tuneSwirls(o) {
	    // get swirls in first pack
	    var pack0 = this._swirls[0];
	    for (var i = 0; i < pack0.length; i++) {
	      var swirl = pack0[i],
	          option = this._getChildOption(o || {}, i);

	      // since the `degreeShift` participate in
	      // children position calculations, we need to keep
	      // the old `degreeShift` value if new not set
	      var isDegreeShift = option.degreeShift != null;
	      if (!isDegreeShift) {
	        option.degreeShift = this._swirls[0][i]._props.degreeShift;
	      }

	      this._addBurstProperties(option, i);

	      // after burst position calculation - delete the old `degreeShift`
	      // from the options, since anyways we have copied it from the swirl
	      if (!isDegreeShift) {
	        delete option.degreeShift;
	      }

	      swirl.tune(option);
	      this._refreshBurstOptions(swirl._modules, i);
	    }
	  };
	  /*
	    Method to refresh burst x/y/angle options on further chained 
	    swirls, because they will be overriden after `tune` call on
	    very first swirl.
	    @param {Array} Chained modules array
	    param {Number} Index of the first swirl in the chain.
	  */


	  Burst.prototype._refreshBurstOptions = function _refreshBurstOptions(modules, i) {
	    for (var j = 1; j < modules.length; j++) {
	      var module = modules[j],
	          options = {};
	      this._addBurstProperties(options, i, j);
	      module._tuneNewOptions(options);
	    }
	  };
	  /*
	    Method to call then on masterSwirl.
	    @param {Object} Then options.
	    @returns {Object} New master swirl.
	  */


	  Burst.prototype._masterThen = function _masterThen(o) {
	    this.masterSwirl.then(o);
	    // get the latest master swirl in then chain
	    var newMasterSwirl = _h2.default.getLastItem(this.masterSwirl._modules);
	    // save to masterSwirls
	    this._masterSwirls.push(newMasterSwirl);
	    return newMasterSwirl;
	  };
	  /*
	    Method to call then on child swilrs.
	    @param {Object} Then options.
	    @return {Array} Array of new Swirls.
	  */


	  Burst.prototype._childThen = function _childThen(o) {
	    var pack = this._swirls[0],
	        newPack = [];

	    for (var i = 0; i < pack.length; i++) {
	      // get option by modulus
	      var options = this._getChildOption(o, i);
	      var swirl = pack[i];
	      var lastSwirl = _h2.default.getLastItem(swirl._modules);
	      // add new Master Swirl as parent of new childswirl
	      options.parent = this.el;

	      this._addBurstProperties(options, i, this._masterSwirls.length - 1);

	      swirl.then(options);

	      // save the new item in `then` chain
	      newPack.push(_h2.default.getLastItem(swirl._modules));
	    }
	    // save the pack to _swirls object
	    this._swirls[this._masterSwirls.length - 1] = newPack;
	    return newPack;
	  };
	  /*
	    Method to initialize properties.
	    @private
	    @overrides @ Thenable
	  */


	  Burst.prototype._vars = function _vars() {
	    _Tunable.prototype._vars.call(this);
	    // just buffer timeline for calculations
	    this._bufferTimeline = new _timeline2.default();
	  };
	  /*
	    Method for initial render of the module.
	  */


	  Burst.prototype._render = function _render() {
	    this._o.isWithShape = false;
	    this._o.isSwirl = this._props.isSwirl;
	    this._o.callbacksContext = this;
	    // save timeline options and remove from _o
	    // cuz the master swirl should not get them
	    this._saveTimelineOptions(this._o);

	    this.masterSwirl = new MainSwirl(this._o);
	    this._masterSwirls = [this.masterSwirl];
	    this.el = this.masterSwirl.el;

	    this._renderSwirls();
	  };
	  /*
	    Method for initial render of swirls.
	    @private
	  */


	  Burst.prototype._renderSwirls = function _renderSwirls() {
	    var p = this._props,
	        pack = [];

	    for (var i = 0; i < p.count; i++) {
	      var option = this._getChildOption(this._o, i);
	      pack.push(new ChildSwirl(this._addOptionalProps(option, i)));
	    }
	    this._swirls = { 0: pack };
	    this._setSwirlDuration(this.masterSwirl, this._calcPackTime(pack));
	  };
	  /*
	    Method to save timeline options to _timelineOptions
	    and delete the property on the object.
	    @private
	    @param {Object} The object to save the timeline options from.
	  */


	  Burst.prototype._saveTimelineOptions = function _saveTimelineOptions(o) {
	    this._timelineOptions = o.timeline;
	    delete o.timeline;
	  };
	  /*
	    Method to calculate total time of array of
	    concurrent tweens.
	    @param   {Array}  Pack to calculate the total time for.
	    @returns {Number} Total pack duration.
	  */


	  Burst.prototype._calcPackTime = function _calcPackTime(pack) {
	    var maxTime = 0;
	    for (var i = 0; i < pack.length; i++) {
	      var tween = pack[i].tween,
	          p = tween._props;

	      maxTime = Math.max(p.repeatTime / p.speed, maxTime);
	    }

	    return maxTime;
	  };
	  /*
	    Method to set duration for Swirl.
	    @param {Object} Swirl instance to set the duration to.
	    @param {Number} Duration to set.
	  */


	  Burst.prototype._setSwirlDuration = function _setSwirlDuration(swirl, duration) {
	    swirl.tween._setProp('duration', duration);
	    var isRecalc = swirl.timeline && swirl.timeline._recalcTotalDuration;
	    isRecalc && swirl.timeline._recalcTotalDuration();
	  };
	  /*
	    Method to get childOption form object call by modulus.
	    @private
	    @param   {Object} Object to look in.
	    @param   {Number} Index of the current Swirl.
	    @returns {Object} Options for the current swirl.
	  */


	  Burst.prototype._getChildOption = function _getChildOption(obj, i) {
	    var options = {};
	    for (var key in obj.children) {
	      options[key] = this._getPropByMod(key, i, obj.children);
	    }
	    return options;
	  };
	  /*
	    Method to get property by modulus.
	    @private
	    @param {String} Name of the property.
	    @param {Number} Index for the modulus.
	    @param {Object} Source object to check in.
	    @returns {Any} Property.
	  */


	  Burst.prototype._getPropByMod = function _getPropByMod(name, index) {
	    var sourceObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var prop = sourceObj[name];
	    return _h2.default.isArray(prop) ? prop[index % prop.length] : prop;
	  };
	  /*
	    Method to add optional Swirls' properties to passed object.
	    @private
	    @param {Object} Object to add the properties to.
	    @param {Number} Index of the property.
	  */


	  Burst.prototype._addOptionalProps = function _addOptionalProps(options, index) {
	    options.index = index;
	    options.parent = this.masterSwirl.el;

	    this._addBurstProperties(options, index);

	    return options;
	  };
	  /*
	    Method to add Burst options to object.
	    @private
	    @param {Object} Options to add the properties to.
	    @param {Number} Index of the Swirl.
	    @param {Number} Index of the main swirl.
	  */


	  Burst.prototype._addBurstProperties = function _addBurstProperties(options, index, i) {
	    // save index of the module
	    var mainIndex = this._index;
	    // temporary change the index to parse index based properties like stagger
	    this._index = index;
	    // parse degree shift for the bit
	    var degreeShift = this._parseProperty('degreeShift', options.degreeShift || 0);
	    // put the index of the module back
	    this._index = mainIndex;

	    var p = this._props,
	        degreeCnt = p.degree % 360 === 0 ? p.count : p.count - 1 || 1,
	        step = p.degree / degreeCnt,
	        pointStart = this._getSidePoint('start', index * step + degreeShift, i),
	        pointEnd = this._getSidePoint('end', index * step + degreeShift, i);

	    options.x = this._getDeltaFromPoints('x', pointStart, pointEnd);
	    options.y = this._getDeltaFromPoints('y', pointStart, pointEnd);

	    options.angle = this._getBitAngle(options.angle || 0, degreeShift, index);
	  };
	  /* 
	    Method to get shapes angle in burst so
	    it will follow circular shape.
	     
	     @param    {Number, Object} Base angle.
	     @param    {Number}         Angle shift for the bit
	     @param    {Number}         Shape's index in burst.
	     @returns  {Number}         Angle in burst.
	  */


	  Burst.prototype._getBitAngle = function _getBitAngle() {
	    var angleProperty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var angleShift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var i = arguments[2];

	    var p = this._props,
	        degCnt = p.degree % 360 === 0 ? p.count : p.count - 1 || 1,
	        step = p.degree / degCnt,
	        angle = i * step + 90;

	    angle += angleShift;
	    // if not delta option
	    if (!this._isDelta(angleProperty)) {
	      angleProperty += angle;
	    } else {
	      var delta = {},
	          keys = (0, _keys2.default)(angleProperty),
	          start = keys[0],
	          end = angleProperty[start];

	      start = _h2.default.parseStringOption(start, i);
	      end = _h2.default.parseStringOption(end, i);
	      // new start = newEnd
	      delta[parseFloat(start) + angle] = parseFloat(end) + angle;

	      angleProperty = delta;
	    }
	    return angleProperty;
	  };
	  /*
	    Method to get radial point on `start` or `end`.
	    @private
	    @param {String} Name of the side - [start, end].
	    @param {Number} Angle of the radial point.
	    @param {Number} Index of the main swirl.
	    @returns radial point.
	  */


	  Burst.prototype._getSidePoint = function _getSidePoint(side, angle, i) {
	    var p = this._props,
	        sideRadius = this._getSideRadius(side, i);

	    return _h2.default.getRadialPoint({
	      radius: sideRadius.radius,
	      radiusX: sideRadius.radiusX,
	      radiusY: sideRadius.radiusY,
	      angle: angle,
	      // center:  { x: p.center, y: p.center }
	      center: { x: 0, y: 0 }
	    });
	  };
	  /*
	    Method to get radius of the side.
	    @private
	    @param {String} Name of the side - [start, end].
	    @param {Number} Index of the main swirl.
	    @returns {Object} Radius.
	  */


	  Burst.prototype._getSideRadius = function _getSideRadius(side, i) {
	    return {
	      radius: this._getRadiusByKey('radius', side, i),
	      radiusX: this._getRadiusByKey('radiusX', side, i),
	      radiusY: this._getRadiusByKey('radiusY', side, i)
	    };
	  };
	  /*
	    Method to get radius from ∆ or plain property.
	    @private
	    @param {String} Key name.
	    @param {String} Side name - [start, end].
	    @param {Number} Index of the main swirl.
	    @returns {Number} Radius value.
	  */


	  Burst.prototype._getRadiusByKey = function _getRadiusByKey(key, side) {
	    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	    var swirl = this._masterSwirls[i],
	        deltas = swirl._deltas,
	        props = swirl._props;

	    if (deltas[key] != null) {
	      return deltas[key][side];
	    } else if (props[key] != null) {
	      return props[key];
	    }
	  };
	  /*
	    Method to get delta from start and end position points.
	    @private
	    @param {String} Key name.
	    @param {Object} Start position point.
	    @param {Object} End position point.
	    @returns {Object} Delta of the end/start.
	  */


	  Burst.prototype._getDeltaFromPoints = function _getDeltaFromPoints(key, pointStart, pointEnd) {
	    var delta = {};
	    if (pointStart[key] === pointEnd[key]) {
	      delta = pointStart[key];
	    } else {
	      delta[pointStart[key]] = pointEnd[key];
	    }
	    return delta;
	  };
	  /*
	    Method to create timeline.
	    @private
	    @override @ Tweenable
	  */


	  Burst.prototype._makeTimeline = function _makeTimeline() {
	    // restore timeline options that were deleted in _render method
	    this._o.timeline = this._timelineOptions;
	    _Tunable.prototype._makeTimeline.call(this);
	    this.timeline.add(this.masterSwirl, this._swirls[0]);
	  };
	  /*
	    Method to make Tween for the module.
	    @private
	    @override @ Tweenable
	  */


	  Burst.prototype._makeTween = function _makeTween() {} /* don't create any tween */
	  /*
	    Override `_hide` and `_show` methods on module
	    since we don't have to hide nor show on the module.
	  */
	  ;

	  Burst.prototype._hide = function _hide() {/* do nothing */};

	  Burst.prototype._show = function _show() {/* do nothing */};

	  return Burst;
	}(_tunable2.default);

	var ChildSwirl = function (_ShapeSwirl) {
	  (0, _inherits3.default)(ChildSwirl, _ShapeSwirl);

	  function ChildSwirl() {
	    (0, _classCallCheck3.default)(this, ChildSwirl);
	    return (0, _possibleConstructorReturn3.default)(this, _ShapeSwirl.apply(this, arguments));
	  }

	  ChildSwirl.prototype._declareDefaults = function _declareDefaults() {
	    _ShapeSwirl.prototype._declareDefaults.call(this);
	    this._defaults.isSwirl = false;
	    this._o.duration = this._o.duration != null ? this._o.duration : 700;
	  };
	  // disable degreeshift calculations


	  ChildSwirl.prototype._calcSwirlXY = function _calcSwirlXY(proc) {
	    var degreeShift = this._props.degreeShift;

	    this._props.degreeShift = 0;
	    _ShapeSwirl.prototype._calcSwirlXY.call(this, proc);
	    this._props.degreeShift = degreeShift;
	  };

	  return ChildSwirl;
	}(_shapeSwirl2.default);

	var MainSwirl = function (_ChildSwirl) {
	  (0, _inherits3.default)(MainSwirl, _ChildSwirl);

	  function MainSwirl() {
	    (0, _classCallCheck3.default)(this, MainSwirl);
	    return (0, _possibleConstructorReturn3.default)(this, _ChildSwirl.apply(this, arguments));
	  }

	  MainSwirl.prototype._declareDefaults = function _declareDefaults() {
	    _ChildSwirl.prototype._declareDefaults.call(this);
	    this._defaults.scale = 1;
	    this._defaults.width = 0;
	    this._defaults.height = 0;
	    this._defaults.radius = { 25: 75 };
	    // this._defaults.duration = 2000;
	  };

	  return MainSwirl;
	}(ChildSwirl);

	Burst.ChildSwirl = ChildSwirl;
	Burst.MainSwirl = MainSwirl;

	exports.default = Burst;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends4 = __webpack_require__(120);

	var _extends5 = _interopRequireDefault(_extends4);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _keys = __webpack_require__(95);

	var _keys2 = _interopRequireDefault(_keys);

	var _thenable = __webpack_require__(99);

	var _thenable2 = _interopRequireDefault(_thenable);

	var _tween = __webpack_require__(101);

	var _tween2 = _interopRequireDefault(_tween);

	var _deltas = __webpack_require__(125);

	var _deltas2 = _interopRequireDefault(_deltas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var h = __webpack_require__(71);


	// get tween properties
	var obj = {};
	_tween2.default.prototype._declareDefaults.call(obj);
	var keys = (0, _keys2.default)(obj._defaults);
	for (var i = 0; i < keys.length; i++) {
	  obj._defaults[keys[i]] = 1;
	}
	obj._defaults['timeline'] = 1;
	var TWEEN_PROPERTIES = obj._defaults;

	/*
	  TODO:

	    - change _props to _propsObj for animations
	    - current values in deltas
	*/

	var Html = function (_Thenable) {
	  (0, _inherits3.default)(Html, _Thenable);

	  function Html() {
	    (0, _classCallCheck3.default)(this, Html);
	    return (0, _possibleConstructorReturn3.default)(this, _Thenable.apply(this, arguments));
	  }

	  Html.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {
	      x: 0,
	      y: 0,
	      z: 0,

	      skewX: 0,
	      skewY: 0,

	      // angle:      0,
	      angleX: 0,
	      angleY: 0,
	      angleZ: 0,

	      scale: 1,
	      scaleX: 1,
	      scaleY: 1,

	      isSoftHide: true,
	      isShowStart: true,
	      isShowEnd: true,
	      isForce3d: false,
	      isRefreshState: true

	    };
	    // exclude from automatic drawing
	    this._drawExclude = { el: 1 };
	    // properties that cause 3d layer
	    this._3dProperties = ['angleX', 'angleY', 'z'];
	    // properties that have array values
	    this._arrayPropertyMap = { transformOrigin: 1, backgroundPosition: 1 };
	    // properties that have no units
	    this._numberPropertyMap = {
	      opacity: 1, scale: 1, scaleX: 1, scaleY: 1,
	      // angle: 1,
	      angleX: 1, angleY: 1, angleZ: 1,
	      skewX: 1, skewY: 1
	    };
	    // properties that should be prefixed 
	    this._prefixPropertyMap = { transform: 1, transformOrigin: 1 };
	    // save prefix
	    this._prefix = h.prefix.css;
	  };

	  Html.prototype.then = function then(o) {
	    // return if nothing was passed
	    if (o == null || !(0, _keys2.default)(o).length) {
	      return 1;
	    }

	    // get the last item in `then` chain
	    var prevModule = h.getLastItem(this._modules);
	    // set deltas to the finish state
	    prevModule.deltas.refresh(false);
	    // copy finish state to the last history record
	    this._history[this._history.length - 1] = prevModule._o;
	    // call super
	    _Thenable.prototype.then.call(this, o);
	    // restore the _props
	    prevModule.deltas.restore();

	    return this;
	  };
	  /*
	    Method to pipe startValue of the delta.
	    @private
	    @ovarrides @ Thenable
	    @param {String} Start property name.
	    @param {Any} Start property value.
	    @returns {Any} Start property value.
	  */


	  Html.prototype._checkStartValue = function _checkStartValue(key, value) {
	    if (value == null) {
	      // return default value for transforms
	      if (this._defaults[key] != null) {
	        return this._defaults[key];
	      }
	      // return default value from _customProps
	      if (this._customProps[key] != null) {
	        return this._customProps[key];
	      }
	      // try to get the default value
	      if (h.defaultStyles[key] != null) {
	        return h.defaultStyles[key];
	      }
	      // at the end return 0
	      return 0;
	    }

	    return value;
	  };
	  /*
	    Method to draw _props to el.
	    @private
	  */


	  Html.prototype._draw = function _draw() {
	    var p = this._props;
	    for (var i = 0; i < this._drawProps.length; i++) {
	      var name = this._drawProps[i];
	      this._setStyle(name, p[name]);
	    }
	    // draw transforms
	    this._drawTransform();
	    // call custom transform callback if exist
	    this._customDraw && this._customDraw(this._props.el, this._props);
	  };
	  /*
	    Method to set transform on element.
	    @private
	  */


	  Html.prototype._drawTransform = function _drawTransform() {
	    var p = this._props;
	    var string = !this._is3d ? 'translate(' + p.x + ', ' + p.y + ')\n          rotate(' + p.angleZ + 'deg)\n          skew(' + p.skewX + 'deg, ' + p.skewY + 'deg)\n          scale(' + p.scaleX + ', ' + p.scaleY + ')' : 'translate3d(' + p.x + ', ' + p.y + ', ' + p.z + ')\n          rotateX(' + p.angleX + 'deg)\n          rotateY(' + p.angleY + 'deg)\n          rotateZ(' + p.angleZ + 'deg)\n          skew(' + p.skewX + 'deg, ' + p.skewY + 'deg)\n          scale(' + p.scaleX + ', ' + p.scaleY + ')';

	    this._setStyle('transform', string);
	  };
	  /*
	    Method to render on initialization.
	    @private
	    @overrides @ Module
	  */


	  Html.prototype._render = function _render() {
	    // return immediately if not the first in `then` chain
	    if (this._o.prevChainModule) {
	      return;
	    }

	    var p = this._props;

	    for (var i = 0; i < this._renderProps.length; i++) {
	      var name = this._renderProps[i],
	          value = p[name];

	      value = typeof value === 'number' ? value + 'px' : value;
	      this._setStyle(name, value);
	    }

	    this._draw();

	    if (!p.isShowStart) {
	      this._hide();
	    }
	  };
	  /*
	    Method to set style on el.
	    @private
	    @param {String} Style property name.
	    @param {String} Style property value.
	  */


	  Html.prototype._setStyle = function _setStyle(name, value) {
	    if (this._state[name] !== value) {
	      var style = this._props.el.style;
	      // set style
	      style[name] = value;
	      // if prefix needed - set it
	      if (this._prefixPropertyMap[name]) {
	        style['' + this._prefix + name] = value;
	      }
	      // cache the last set value
	      this._state[name] = value;
	    }
	  };
	  /*
	    Method to copy `_o` options to `_props` object.
	    @private
	  */


	  Html.prototype._extendDefaults = function _extendDefaults() {
	    this._props = this._o.props || {};
	    // props for intial render only
	    this._renderProps = [];
	    // props for draw on every frame update
	    this._drawProps = [];
	    // save custom properties if present
	    this._saveCustomProperties(this._o);
	    // copy the options
	    var o = (0, _extends5.default)({}, this._o);
	    // extend options with defaults
	    o = this._addDefaults(o);

	    var keys = (0, _keys2.default)(o);
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      // include the property if it is not in drawExclude object
	      // and not in defaults = not a transform
	      var isInclude = !this._drawExclude[key] && // not in exclude map
	      this._defaults[key] == null && // not transform property
	      !TWEEN_PROPERTIES[key]; // not tween property

	      var isCustom = this._customProps[key];
	      // copy all non-delta properties to the props
	      // if not delta then add the property to render
	      // list that is called on initialization
	      // otherwise add it to the draw list that will
	      // be drawed on each frame
	      if (!h.isDelta(o[key]) && !TWEEN_PROPERTIES[key]) {
	        this._parseOption(key, o[key]);
	        if (key === 'el') {
	          this._props.el = h.parseEl(o.el);
	          this.el = this._props.el;
	        }
	        if (isInclude && !isCustom) {
	          this._renderProps.push(key);
	        }
	        // copy delta prop but not transforms
	        // otherwise push it to draw list that gets traversed on every draw
	      } else if (isInclude && !isCustom) {
	        this._drawProps.push(key);
	      }
	    }

	    this._createDeltas(o);
	  };
	  /*
	    Method to save customProperties to _customProps.
	    @param {Object} Options of the module.
	  */


	  Html.prototype._saveCustomProperties = function _saveCustomProperties() {
	    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    this._customProps = o.customProperties || {};
	    this._customProps = (0, _extends5.default)({}, this._customProps);
	    this._customDraw = this._customProps.draw;
	    delete this._customProps.draw;
	    delete o.customProperties;

	    this._copyDefaultCustomProps();

	    // if ( this._customProps ) {}
	    // this._customProps = this._customProps || {};
	  };

	  Html.prototype._copyDefaultCustomProps = function _copyDefaultCustomProps() {
	    for (var key in this._customProps) {
	      if (this._o[key] == null) {
	        this._o[key] = this._customProps[key];
	      }
	    }
	  };
	  /*
	    Method to reset some flags on merged options object.
	    @private
	    @overrides @ Thenable
	    @param   {Object} Options object.
	    @returns {Object} Options object.
	  */


	  Html.prototype._resetMergedFlags = function _resetMergedFlags(o) {
	    _Thenable.prototype._resetMergedFlags.call(this, o);
	    o.props = this._props;
	    o.customProperties = this._customProps;
	    return o;
	  };
	  /*
	    Method to parse option value.
	    @private
	    @param {String} Option name.
	    @param {Any} Option value.
	  */


	  Html.prototype._parseOption = function _parseOption(key, value) {
	    _Thenable.prototype._parseOption.call(this, key, value);
	    // at this point the property is parsed
	    var parsed = this._props[key];
	    // cast it to string if it is array
	    if (h.isArray(parsed)) {
	      this._props[key] = this._arrToString(parsed);
	    }
	  };
	  /*
	    Method cast array to string value.
	    @private
	    @param {Array} Array of parsed numbers with units.
	    @returns {String} Casted array.
	  */


	  Html.prototype._arrToString = function _arrToString(arr) {
	    var string = '';
	    for (var i = 0; i < arr.length; i++) {
	      string += arr[i].string + ' ';
	    }
	    return string;
	  };
	  /*
	    Method to add defauls to passed object.
	    @private
	    @param {Object} Object to add defaults to.
	  */


	  Html.prototype._addDefaults = function _addDefaults(obj) {
	    // flag that after all defaults are set will indicate
	    // if user have set the 3d transform
	    this._is3d = false;

	    for (var key in this._defaults) {
	      // skip property if it is listed in _skipProps
	      // if (this._skipProps && this._skipProps[key]) { continue; }

	      // copy the properties to the _o object
	      // if it's null - set the default value
	      if (obj[key] == null) {
	        // scaleX and scaleY should fallback to scale
	        if (key === 'scaleX' || key === 'scaleY') {
	          obj[key] = obj['scale'] != null ? obj['scale'] : this._defaults['scale'];
	        } else {
	          obj[key] = this._defaults[key];
	        }
	      } else {
	        // get if 3d property was set.
	        if (this._3dProperties.indexOf(key) !== -1) {
	          this._is3d = true;
	        }
	      }
	    }

	    if (this._o.isForce3d) {
	      this._is3d = true;
	    }

	    return obj;
	  };
	  /*
	    Lifecycle method to declare variables.
	    @private
	  */


	  Html.prototype._vars = function _vars() {
	    // set deltas to the last value, so the _props with
	    // end values will be copied to the _history, it is
	    // crucial for `then` chaining
	    this.deltas.refresh(false);
	    // call super vars
	    _Thenable.prototype._vars.call(this);
	    // state of set properties
	    this._state = {};
	    // restore delta values that we have refreshed before
	    this.deltas.restore(false);
	  };
	  /*
	    Method to create deltas from passed object.
	    @private
	    @param {Object} Options object to pass to the Deltas.
	  */


	  Html.prototype._createDeltas = function _createDeltas(options) {
	    this.deltas = new _deltas2.default({
	      options: options,
	      props: this._props,
	      arrayPropertyMap: this._arrayPropertyMap,
	      numberPropertyMap: this._numberPropertyMap,
	      customProps: this._customProps,
	      callbacksContext: options.callbacksContext || this,
	      isChained: !!this._o.prevChainModule
	    });

	    // if chained module set timeline to deltas' timeline 
	    if (this._o.prevChainModule) {
	      this.timeline = this.deltas.timeline;
	    }
	  };
	  /* @overrides @ Tweenable */


	  Html.prototype._makeTween = function _makeTween() {};

	  Html.prototype._makeTimeline = function _makeTimeline() {
	    // do not create timeline if module if chained
	    if (this._o.prevChainModule) {
	      return;
	    }
	    // add callbacks overrides
	    this._o.timeline = this._o.timeline || {};
	    this._addCallbackOverrides(this._o.timeline);
	    _Thenable.prototype._makeTimeline.call(this);
	    this.timeline.add(this.deltas);
	  };
	  /*
	    Method to add callback overrides to passed object object.
	    @param {Object} Object to add overrides on.
	  */


	  Html.prototype._addCallbackOverrides = function _addCallbackOverrides(o) {
	    var it = this;
	    var p = this._props;
	    o.callbackOverrides = {
	      onUpdate: this._draw,
	      onRefresh: this._props.isRefreshState ? this._draw : void 0,
	      onStart: function onStart(isFwd) {
	        // don't touch main `el` onStart in chained elements
	        if (it._isChained) {
	          return;
	        };
	        // show if was hidden at start
	        if (isFwd && !p.isShowStart) {
	          it._show();
	        }
	        // hide if should be hidden at start
	        else {
	            if (!p.isShowStart) {
	              it._hide();
	            }
	          }
	      },
	      onComplete: function onComplete(isFwd) {
	        // don't touch main `el` if not the last in `then` chain
	        if (it._isChained) {
	          return;
	        }
	        if (isFwd) {
	          if (!p.isShowEnd) {
	            it._hide();
	          }
	        } else if (!p.isShowEnd) {
	          it._show();
	        }
	      }
	    };
	  };

	  /*
	    Method that gets called on `soft` show of the module,
	    it should restore transform styles of the module.
	    @private
	    @overrides @ Module
	  */


	  Html.prototype._showByTransform = function _showByTransform() {
	    this._drawTransform();
	  };

	  /*
	    Method to merge `start` and `end` for a property in then record.
	    @private
	    @param {String} Property name.
	    @param {Any}    Start value of the property.
	    @param {Any}    End value of the property.
	  */
	  // !! COVER !!


	  Html.prototype._mergeThenProperty = function _mergeThenProperty(key, startValue, endValue) {
	    // if isnt tween property
	    var isBoolean = typeof endValue === 'boolean',
	        curve,
	        easing;

	    if (!h.isTweenProp(key) && !this._nonMergeProps[key] && !isBoolean) {

	      var TWEEN_PROPS = {};
	      if (h.isObject(endValue) && endValue.to != null) {
	        for (var _key in endValue) {
	          if (TWEEN_PROPERTIES[_key] || _key === 'curve') {
	            TWEEN_PROPS[_key] = endValue[_key];
	            delete endValue[_key];
	          }
	        }
	        // curve    = endValue.curve;
	        // easing   = endValue.easing;
	        endValue = endValue.to;
	      }

	      // if end value is delta - just save it
	      if (this._isDelta(endValue)) {

	        var _TWEEN_PROPS = {};
	        for (var _key2 in endValue) {
	          if (TWEEN_PROPERTIES[_key2] || _key2 === 'curve') {
	            _TWEEN_PROPS[_key2] = endValue[_key2];
	            delete endValue[_key2];
	          }
	        }
	        var result = this._parseDeltaValues(key, endValue);

	        return (0, _extends5.default)({}, result, _TWEEN_PROPS);
	      } else {
	        var parsedEndValue = this._parsePreArrayProperty(key, endValue);
	        // if end value is not delta - merge with start value
	        if (this._isDelta(startValue)) {
	          var _extends2;

	          // if start value is delta - take the end value
	          // as start value of the new delta
	          return (0, _extends5.default)((_extends2 = {}, _extends2[h.getDeltaEnd(startValue)] = parsedEndValue, _extends2), TWEEN_PROPS);
	          // if both start and end value are not ∆ - make ∆
	        } else {
	          var _extends3;

	          return (0, _extends5.default)((_extends3 = {}, _extends3[startValue] = parsedEndValue, _extends3), TWEEN_PROPS);
	        }
	      }
	      // copy the tween values unattended
	    } else {
	      return endValue;
	    }
	  };

	  return Html;
	}(_thenable2.default);

	exports.default = Html;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(121);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(123);
	module.exports = __webpack_require__(14).Object.assign;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(12);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(124)});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(33)
	  , gOPS     = __webpack_require__(62)
	  , pIE      = __webpack_require__(63)
	  , toObject = __webpack_require__(49)
	  , IObject  = __webpack_require__(36)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(23)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(120);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _keys = __webpack_require__(95);

	var _keys2 = _interopRequireDefault(_keys);

	var _timeline = __webpack_require__(110);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _tween = __webpack_require__(101);

	var _tween2 = _interopRequireDefault(_tween);

	var _delta = __webpack_require__(126);

	var _delta2 = _interopRequireDefault(_delta);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  This module's target is to parse options object,
	  find deltas in it and send them to `Delta` classes.
	  The `Delta` class is dull - they expect actual parsed deltas
	  and separated tween options, so we should parse them here.
	  The timeline of the module controls the `Delta` modules' tweens.

	  @param {Object} props Object to set deltas result to (pass to the Delta classes).
	  @param {Object} options Object to parse the deltas from.
	  @param {Function} onUpdate onUpdate callback.
	  @param optional {Object} arrayPropertyMap List of properties with truthy
	                                            values which describe properties
	                                            that should be parsed as arrays.
	  @param optional {Object} numberPropertyMap List of properties with truthy
	                                            values which describe properties
	                                            that should be parsed as numbers
	                                            without units.
	*/

	// TODO:
	// - colors with curves change alpha level too
	// const html = new mojs.Html({
	//   el: '#js-el',
	//   x: { 0: 100 },
	//   onUpdate () {
	//     console.log(this._props.originX);
	//   },
	//   originX: { 'white': 'black', curve: 'M0,100 L100, 0' },
	//   customProperties: {
	//     originX: {
	//       type: 'color',
	//       default: 'cyan'
	//     },
	//     draw() { console.log('draw'); }
	//   }
	// });


	var easing = __webpack_require__(105);
	var h = __webpack_require__(71);


	// get tween properties
	var obj = {};
	_tween2.default.prototype._declareDefaults.call(obj);
	var keys = (0, _keys2.default)(obj._defaults);
	for (var i = 0; i < keys.length; i++) {
	  obj._defaults[keys[i]] = 1;
	}
	obj._defaults['timeline'] = 1;
	var TWEEN_PROPERTIES = obj._defaults;

	var Deltas = function () {
	  function Deltas() {
	    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    (0, _classCallCheck3.default)(this, Deltas);

	    this._o = o;

	    this._shortColors = {
	      transparent: 'rgba(0,0,0,0)',
	      none: 'rgba(0,0,0,0)',
	      aqua: 'rgb(0,255,255)',
	      black: 'rgb(0,0,0)',
	      blue: 'rgb(0,0,255)',
	      fuchsia: 'rgb(255,0,255)',
	      gray: 'rgb(128,128,128)',
	      green: 'rgb(0,128,0)',
	      lime: 'rgb(0,255,0)',
	      maroon: 'rgb(128,0,0)',
	      navy: 'rgb(0,0,128)',
	      olive: 'rgb(128,128,0)',
	      purple: 'rgb(128,0,128)',
	      red: 'rgb(255,0,0)',
	      silver: 'rgb(192,192,192)',
	      teal: 'rgb(0,128,128)',
	      white: 'rgb(255,255,255)',
	      yellow: 'rgb(255,255,0)',
	      orange: 'rgb(255,128,0)'
	    };

	    this._ignoreDeltasMap = { prevChainModule: 1, masterModule: 1 };

	    this._parseDeltas(o.options);
	    this._createDeltas();
	    this._createTimeline(this._mainTweenOptions);
	  }
	  /*
	    Method to call `refresh` on all child `delta` objects.
	    @public
	    @param {Boolean} If before start time (true) or after end time (false).
	  */


	  Deltas.prototype.refresh = function refresh(isBefore) {
	    for (var i = 0; i < this._deltas.length; i++) {
	      this._deltas[i].refresh(isBefore);
	    }
	    return this;
	  };
	  /*
	    Method to call `restore` on all child `delta` objects.
	    @public
	  */


	  Deltas.prototype.restore = function restore() {
	    for (var i = 0; i < this._deltas.length; i++) {
	      this._deltas[i].restore();
	    }
	    return this;
	  };
	  /*
	    Method to create Timeline.
	    @private
	    @param {Object} Timeline options.
	  */


	  Deltas.prototype._createTimeline = function _createTimeline() {
	    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    // const o = this._o;
	    // opts.timeline = opts.timeline || {};
	    // opts.timeline.callbackOverrides = {
	    //   onUpdate:   o.onUpdate,
	    //   onRefresh:  o.onUpdate
	    // }
	    // send callbacksContext to timeline if set
	    // o.callbacksContext && (opts.timeline.callbacksContext = o.callbacksContext);
	    // opts.timeline
	    this.timeline = new _timeline2.default();
	    this.timeline.add(this._deltas);
	  };
	  /*
	    Method to create Deltas from parsed options.
	    @private
	  */


	  Deltas.prototype._createDeltas = function _createDeltas() {
	    this._deltas = [];

	    // create main delta object
	    this._deltas.push(this._createDelta(this._mainDeltas, this._mainTweenOptions));

	    // create child delta object
	    for (var i = 0; i < this._childDeltas.length; i++) {
	      var delta = this._childDeltas[i];
	      this._deltas.push(this._createDelta([delta.delta], delta.tweenOptions));
	    }
	  };
	  /*
	    Method to create Delta object with passed options.
	    @private
	    @param {Array} Array of deltas.
	    @param {Object} Tween properties.
	    @returns {Object} Delta object
	  */


	  Deltas.prototype._createDelta = function _createDelta(deltas, tweenOptions) {
	    var o = this._o;
	    return new _delta2.default({
	      deltas: deltas, tweenOptions: tweenOptions,
	      props: o.props,
	      isChained: o.isChained,
	      callbacksContext: o.callbacksContext
	    });
	  };
	  /*
	    Method to parse delta objects from options.
	    @private
	    @param {Object} Options object to parse the deltas from.
	  */


	  Deltas.prototype._parseDeltas = function _parseDeltas(obj) {
	    // spilt main animation properties and main tween properties
	    var mainSplit = this._splitTweenOptions(obj);
	    // main animation properties
	    var opts = mainSplit.delta;
	    // main tween properties
	    this._mainTweenOptions = mainSplit.tweenOptions;

	    this._mainDeltas = [];
	    this._childDeltas = [];
	    var keys = (0, _keys2.default)(opts);
	    // loop thru all properties without tween ones
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      // is property is delta - parse it
	      if (this._isDelta(opts[key]) && !this._ignoreDeltasMap[key]) {
	        var delta = this._splitAndParseDelta(key, opts[key]);
	        // if parsed object has no tween values - it's delta of the main object
	        if (!delta.tweenOptions) {
	          this._mainDeltas.push(delta.delta);
	        }
	        // otherwise it is distinct delta object
	        else {
	            this._childDeltas.push(delta);
	          }
	      }
	    }
	  };
	  /*
	    Method to split tween values and parse single delta record.
	    @private
	    @param {String} Property name.
	    @param {Object} Raw delta object.
	    @returns {Object} Split object.
	                @param {Object} tweenOptions Tween properties.
	                @param {Object} delta Parsed delta.
	  */


	  Deltas.prototype._splitAndParseDelta = function _splitAndParseDelta(name, object) {
	    var split = this._splitTweenOptions(object);
	    // parse delta in the object
	    split.delta = this._parseDelta(name, split.delta);
	    return split;
	  };
	  /*
	    Method to parse delta by delegating the variables to _parse*Delta methods.
	    @private
	    @param {String} Property name.
	    @param {Object} Raw delta object.
	    @param {Number} Module index.
	  */


	  Deltas.prototype._parseDelta = function _parseDelta(name, object, index) {
	    // if name is in _o.customProps - parse it regarding the type
	    return this._o.customProps && this._o.customProps[name] != null ? this._parseDeltaByCustom(name, object, index) : this._parseDeltaByGuess(name, object, index);
	  };
	  /**
	    Method to parse delta by taking the type from the customProps object.
	    @private
	    @param {String} Property name.
	    @param {Object} Raw delta object.
	    @param {Number} Module index.
	  */


	  Deltas.prototype._parseDeltaByCustom = function _parseDeltaByCustom(name, object, index) {
	    return this._parseNumberDelta(name, object, index);
	    // const customRecord = this._o.customProps[name];
	    // switch ( customRecord.type.toLowerCase() ) {
	    //   case 'color':  { return this._parseColorDelta( name, object ); }
	    //   case 'array':  { return this._parseArrayDelta( name, object ); }
	    //   case 'number': { return this._parseNumberDelta( name, object, index ); }
	    //   case 'unit':   { return this._parseUnitDelta( name, object, index ); }
	    // }
	  };
	  /**
	    Method to parse delta by reasoning about it's value.
	    @private
	    @param {String} Property name.
	    @param {Object} Raw delta object.
	    @param {Number} Module index.
	  */


	  Deltas.prototype._parseDeltaByGuess = function _parseDeltaByGuess(name, object, index) {
	    var _preparseDelta2 = this._preparseDelta(object),
	        start = _preparseDelta2.start;

	    var o = this._o;

	    // color values
	    if (isNaN(parseFloat(start)) && !start.match(/rand\(/) && !start.match(/stagger\(/)) {
	      return this._parseColorDelta(name, object);
	      // array values
	    } else if (o.arrayPropertyMap && o.arrayPropertyMap[name]) {
	      return this._parseArrayDelta(name, object);
	      // unit or number values
	    } else {
	      return o.numberPropertyMap && o.numberPropertyMap[name] ?
	      // if the property is in the number property map - parse it like number
	      this._parseNumberDelta(name, object, index)
	      // otherwise - like number with units
	      : this._parseUnitDelta(name, object, index);
	    }
	  };
	  /*
	    Method to separate tween options from delta properties.
	    @param {Object} Object for separation.
	    @returns {Object} Object that contains 2 objects
	                        - one delta options
	                        - one tween options ( could be empty if no tween opts )
	  */


	  Deltas.prototype._splitTweenOptions = function _splitTweenOptions(delta) {
	    delta = (0, _extends3.default)({}, delta);

	    var keys = (0, _keys2.default)(delta),
	        tweenOptions = {};
	    var isTween = null;

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      if (TWEEN_PROPERTIES[key]) {
	        if (delta[key] != null) {
	          tweenOptions[key] = delta[key];
	          isTween = true;
	        }
	        delete delta[key];
	      }
	    }
	    return {
	      delta: delta,
	      tweenOptions: isTween ? tweenOptions : undefined
	    };
	  };
	  /*
	    Method to check if the property is delta property.
	    @private
	    @param {Any} Parameter value to check.
	    @returns {Boolean}
	  */


	  Deltas.prototype._isDelta = function _isDelta(optionsValue) {
	    var isObject = h.isObject(optionsValue);
	    isObject = isObject && !optionsValue.unit;
	    return !(!isObject || h.isArray(optionsValue) || h.isDOM(optionsValue));
	  };
	  /*
	    Method to parse color delta values.
	    @private
	    @param {String} Name of the property.
	    @param {Any} Property value.
	    @returns {Object} Parsed delta.
	  */


	  Deltas.prototype._parseColorDelta = function _parseColorDelta(key, value) {
	    if (key === 'strokeLinecap') {
	      h.warn('Sorry, stroke-linecap property is not animatable yet, using the start(#{start}) value instead', value);
	      return {};
	    }
	    var preParse = this._preparseDelta(value);

	    var startColorObj = this._makeColorObj(preParse.start),
	        endColorObj = this._makeColorObj(preParse.end);

	    var delta = {
	      type: 'color',
	      name: key,
	      start: startColorObj,
	      end: endColorObj,
	      curve: preParse.curve,
	      delta: {
	        r: endColorObj.r - startColorObj.r,
	        g: endColorObj.g - startColorObj.g,
	        b: endColorObj.b - startColorObj.b,
	        a: endColorObj.a - startColorObj.a
	      }
	    };
	    return delta;
	  };
	  /*
	    Method to parse array delta values.
	    @private
	    @param {String} Name of the property.
	    @param {Any} Property value.
	    @returns {Object} Parsed delta.
	  */


	  Deltas.prototype._parseArrayDelta = function _parseArrayDelta(key, value) {
	    var preParse = this._preparseDelta(value);

	    var startArr = this._strToArr(preParse.start),
	        endArr = this._strToArr(preParse.end);

	    h.normDashArrays(startArr, endArr);

	    for (var i = 0; i < startArr.length; i++) {
	      var end = endArr[i];
	      h.mergeUnits(startArr[i], end, key);
	    }

	    var delta = {
	      type: 'array',
	      name: key,
	      start: startArr,
	      end: endArr,
	      delta: h.calcArrDelta(startArr, endArr),
	      curve: preParse.curve
	    };

	    return delta;
	  };
	  /*
	    Method to parse numeric delta values with units.
	    @private
	    @param {String} Name of the property.
	    @param {Any} Property value.
	    @param {Number} Index of the module.
	    @returns {Object} Parsed delta.
	  */


	  Deltas.prototype._parseUnitDelta = function _parseUnitDelta(key, value, index) {
	    var preParse = this._preparseDelta(value);

	    var end = h.parseUnit(h.parseStringOption(preParse.end, index)),
	        start = h.parseUnit(h.parseStringOption(preParse.start, index));

	    h.mergeUnits(start, end, key);
	    var delta = {
	      type: 'unit',
	      name: key,
	      start: start,
	      end: end,
	      delta: end.value - start.value,
	      curve: preParse.curve
	    };
	    return delta;
	  };
	  /*
	    Method to parse numeric delta values without units.
	    @private
	    @param {String} Name of the property.
	    @param {Any} Property value.
	    @param {Number} Index of the module.
	    @returns {Object} Parsed delta.
	  */


	  Deltas.prototype._parseNumberDelta = function _parseNumberDelta(key, value, index) {
	    var preParse = this._preparseDelta(value);

	    var end = parseFloat(h.parseStringOption(preParse.end, index)),
	        start = parseFloat(h.parseStringOption(preParse.start, index));

	    var delta = {
	      type: 'number',
	      name: key,
	      start: start,
	      end: end,
	      delta: end - start,
	      curve: preParse.curve
	    };

	    return delta;
	  };
	  /*
	    Method to extract `curve` and `start`/`end` values.
	    @private
	    @param {Object} Delta object.
	    @returns {Object} Preparsed delta.
	              @property {String} Start value.
	              @property {String, Number} End value.
	  */


	  Deltas.prototype._preparseDelta = function _preparseDelta(value) {
	    // clone value object
	    value = (0, _extends3.default)({}, value);
	    // parse curve if exist
	    var curve = value.curve;
	    if (curve != null) {
	      curve = easing.parseEasing(curve);
	      curve._parent = this;
	    }
	    delete value.curve;
	    // parse start and end values
	    var start = (0, _keys2.default)(value)[0],
	        end = value[start];

	    return { start: start, end: end, curve: curve };
	  };
	  /*
	    Method to parse color into usable object.
	    @private
	    @param {String} Color string.
	    @returns {Object} Parsed color value.
	  */


	  Deltas.prototype._makeColorObj = function _makeColorObj(color) {
	    // HEX
	    var colorObj = {};
	    if (color[0] === '#') {
	      var result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);
	      if (result) {
	        var r = result[1].length === 2 ? result[1] : result[1] + result[1],
	            g = result[2].length === 2 ? result[2] : result[2] + result[2],
	            b = result[3].length === 2 ? result[3] : result[3] + result[3];

	        colorObj = {
	          r: parseInt(r, 16), g: parseInt(g, 16), b: parseInt(b, 16), a: 1
	        };
	      }
	    }

	    // not HEX
	    // shorthand color and rgb()
	    if (color[0] !== '#') {
	      var isRgb = color[0] === 'r' && color[1] === 'g' && color[2] === 'b';
	      var rgbColor = void 0;
	      // rgb color
	      if (isRgb) {
	        rgbColor = color;
	      };
	      // shorthand color name
	      if (!isRgb) {
	        if (!this._shortColors[color]) {
	          h.div.style.color = color;
	          rgbColor = h.computedStyle(h.div).color;
	        } else {
	          rgbColor = this._shortColors[color];
	        }
	      }

	      var regexString1 = '^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),',
	          regexString2 = '\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$',
	          _result = new RegExp(regexString1 + regexString2, 'gi').exec(rgbColor),
	          alpha = parseFloat(_result[4] || 1);

	      if (_result) {
	        colorObj = {
	          r: parseInt(_result[1], 10),
	          g: parseInt(_result[2], 10),
	          b: parseInt(_result[3], 10),
	          a: alpha != null && !isNaN(alpha) ? alpha : 1
	        };
	      }
	    }

	    return colorObj;
	  };
	  /*
	    Method to parse string into array.
	    @private
	    @param {String, Number} String or number to parse.
	    @returns {Array} Parsed array.
	  */


	  Deltas.prototype._strToArr = function _strToArr(string) {
	    var arr = [];
	    // plain number
	    if (typeof string === 'number' && !isNaN(string)) {
	      arr.push(h.parseUnit(string));
	      return arr;
	    }
	    // string array
	    string.trim().split(/\s+/gim).forEach(function (str) {
	      arr.push(h.parseUnit(h.parseIfRand(str)));
	    });
	    return arr;
	  };

	  return Deltas;
	}();

	exports.default = Deltas;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _tween = __webpack_require__(101);

	var _tween2 = _interopRequireDefault(_tween);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var h = __webpack_require__(71);

	var Delta = function () {
	  function Delta() {
	    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    (0, _classCallCheck3.default)(this, Delta);

	    this._o = o;
	    this._createTween(o.tweenOptions);
	    // initial properties render
	    !this._o.isChained && this.refresh(true);
	  }
	  /*
	    Method to call `_refresh` method on `tween`.
	    Use switch between `0` and `1` progress for delta value.
	    @public
	    @param {Boolean} If refresh before start time or after.
	    @returns this.
	  */


	  Delta.prototype.refresh = function refresh(isBefore) {
	    this._previousValues = [];

	    var deltas = this._o.deltas;
	    for (var i = 0; i < deltas.length; i++) {
	      var name = deltas[i].name;
	      this._previousValues.push({
	        name: name, value: this._o.props[name]
	      });
	    }

	    this.tween._refresh(isBefore);
	    return this;
	  };
	  /*
	    Method to restore all saved properties from `_previousValues` array.
	    @public
	    @returns this.
	  */


	  Delta.prototype.restore = function restore() {
	    var prev = this._previousValues;
	    for (var i = 0; i < prev.length; i++) {
	      var record = prev[i];
	      this._o.props[record.name] = record.value;
	    }
	    return this;
	  };
	  /*
	    Method to create tween of the delta.
	    @private
	    @param {Object} Options object.
	  */


	  Delta.prototype._createTween = function _createTween() {
	    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    var it = this;
	    o.callbackOverrides = {
	      onUpdate: function onUpdate(ep, p) {
	        it._calcCurrentProps(ep, p);
	      }
	    };

	    // if not chained - add the onRefresh callback
	    // to refresh the tween when needed
	    if (!this._o.isChained) {
	      o.callbackOverrides.onRefresh = function (isBefore, ep, p) {
	        it._calcCurrentProps(ep, p);
	      };
	    }

	    o.callbacksContext = this._o.callbacksContext;
	    this.tween = new _tween2.default(o);
	  };
	  /*
	    Method to calculate current progress of the deltas.
	    @private
	    @param {Number} Eased progress to calculate - [0..1].
	    @param {Number} Progress to calculate - [0..1].
	  */


	  Delta.prototype._calcCurrentProps = function _calcCurrentProps(easedProgress, p) {
	    var deltas = this._o.deltas;
	    for (var i = 0; i < deltas.length; i++) {
	      var type = deltas[i].type;
	      this['_calcCurrent_' + type](deltas[i], easedProgress, p);
	    }
	  };
	  /*
	    Method to calc the current color delta value.
	    @param {Object} Delta
	    @param {Number} Eased progress [0..1].
	    @param {Number} Plain progress [0..1].
	  */


	  Delta.prototype._calcCurrent_color = function _calcCurrent_color(delta, ep, p) {
	    var r,
	        g,
	        b,
	        a,
	        start = delta.start,
	        d = delta.delta;
	    if (!delta.curve) {
	      r = parseInt(start.r + ep * d.r, 10);
	      g = parseInt(start.g + ep * d.g, 10);
	      b = parseInt(start.b + ep * d.b, 10);
	      a = parseFloat(start.a + ep * d.a);
	    } else {
	      var cp = delta.curve(p);
	      r = parseInt(cp * (start.r + p * d.r), 10);
	      g = parseInt(cp * (start.g + p * d.g), 10);
	      b = parseInt(cp * (start.b + p * d.b), 10);
	      a = parseFloat(cp * (start.a + p * d.a));
	    }
	    this._o.props[delta.name] = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	  };
	  /*
	    Method to calc the current number delta value.
	    @param {Object} Delta
	    @param {Number} Eased progress [0..1].
	    @param {Number} Plain progress [0..1].
	  */


	  Delta.prototype._calcCurrent_number = function _calcCurrent_number(delta, ep, p) {
	    this._o.props[delta.name] = !delta.curve ? delta.start + ep * delta.delta : delta.curve(p) * (delta.start + p * delta.delta);
	  };
	  /*
	    Method to calc the current number with units delta value.
	    @param {Object} Delta
	    @param {Number} Eased progress [0..1].
	    @param {Number} Plain progress [0..1].
	  */


	  Delta.prototype._calcCurrent_unit = function _calcCurrent_unit(delta, ep, p) {
	    var currentValue = !delta.curve ? delta.start.value + ep * delta.delta : delta.curve(p) * (delta.start.value + p * delta.delta);

	    this._o.props[delta.name] = '' + currentValue + delta.end.unit;
	  };
	  /*
	    Method to calc the current array delta value.
	    @param {Object} Delta
	    @param {Number} Eased progress [0..1].
	    @param {Number} Plain progress [0..1].
	  */


	  Delta.prototype._calcCurrent_array = function _calcCurrent_array(delta, ep, p) {
	    // var arr,
	    var name = delta.name,
	        props = this._o.props,
	        string = '';

	    // to prevent GC bothering with arrays garbage
	    // if ( h.isArray( props[name] ) ) {
	    //   arr = props[name];
	    //   arr.length = 0;
	    // } else { arr = []; }

	    // just optimization to prevent curve
	    // calculations on every array item
	    var proc = delta.curve ? delta.curve(p) : null;

	    for (var i = 0; i < delta.delta.length; i++) {
	      var item = delta.delta[i],
	          dash = !delta.curve ? delta.start[i].value + ep * item.value : proc * (delta.start[i].value + p * item.value);

	      string += '' + dash + item.unit + ' ';
	      // arr.push({
	      //   string: `${dash}${item.unit}`,
	      //   value:  dash,
	      //   unit:   item.unit,
	      // });
	    }
	    props[name] = string;
	  };

	  return Delta;
	}();

	exports.default = Delta;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(95);

	var _keys2 = _interopRequireDefault(_keys);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(75);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(76);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	var _timeline = __webpack_require__(110);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _tunable = __webpack_require__(116);

	var _tunable2 = _interopRequireDefault(_tunable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Stagger = function (_Tunable) {
	  (0, _inherits3.default)(Stagger, _Tunable);

	  function Stagger(options, Module) {
	    var _ret;

	    (0, _classCallCheck3.default)(this, Stagger);

	    var _this = (0, _possibleConstructorReturn3.default)(this, _Tunable.call(this));

	    return _ret = _this._init(options, Module), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	  /*
	    Method to create then chain on child modules.
	    @param {Object} Then options.
	    @return {Object} this.
	  */


	  Stagger.prototype.then = function then(o) {
	    if (o == null) {
	      return this;
	    }
	    for (var i = 0; i < this._modules.length; i++) {
	      // get child module's option and pass to the child `then`
	      this._modules[i].then(this._getOptionByIndex(i, o));
	    }
	    this.timeline._recalcTotalDuration();
	    return this;
	  };
	  /*
	    Method to tune child modules.
	    @param {Object} Tune options.
	    @return {Object} this.
	  */


	  Stagger.prototype.tune = function tune(o) {
	    if (o == null) {
	      return this;
	    }
	    for (var i = 0; i < this._modules.length; i++) {
	      // get child module's option and pass to the child `then`
	      this._modules[i].tune(this._getOptionByIndex(i, o));
	    }
	    this.timeline._recalcTotalDuration();
	    return this;
	  };
	  /*
	    Method to generate child modules.
	    @return {Object} this.
	  */


	  Stagger.prototype.generate = function generate() {
	    for (var i = 0; i < this._modules.length; i++) {
	      // get child module's option and pass to the child `then`
	      this._modules[i].generate();
	    }
	    this.timeline._recalcTotalDuration();
	    return this;
	  };
	  /*
	    Method to get an option by modulo and name.
	    @param {String} Name of the property to get.
	    @param {Number} Index for the modulo calculation.
	    @param {Object} Options hash to look in.
	    @return {Any} Property.
	  */


	  Stagger.prototype._getOptionByMod = function _getOptionByMod(name, i, store) {
	    var props = store[name];
	    // if not dom list then clone it to array
	    if (props + '' === '[object NodeList]' || props + '' === '[object HTMLCollection]') props = Array.prototype.slice.call(props, 0);
	    // get the value in array or return the value itself
	    var value = _h2.default.isArray(props) ? props[i % props.length] : props;
	    // check if value has the stagger expression, if so parse it
	    return _h2.default.parseIfStagger(value, i);
	  };
	  /*
	    Method to get option by modulo of index.
	    @param {Number} Index for modulo calculations.
	    @param {Object} Options hash to look in.
	  */


	  Stagger.prototype._getOptionByIndex = function _getOptionByIndex(i, store) {
	    var _this2 = this;

	    var options = {};
	    (0, _keys2.default)(store).forEach(function (key) {
	      return options[key] = _this2._getOptionByMod(key, i, store);
	    });
	    return options;
	  };
	  /*
	    Method to get total child modules quantity.
	    @param  {String} Name of quantifier in options hash.
	    @param  {Object} Options hash object.
	    @return {Number} Number of child object that should be defined.
	  */


	  Stagger.prototype._getChildQuantity = function _getChildQuantity(name, store) {
	    // if number was set
	    if (typeof name === 'number') {
	      return name;
	    }

	    var quantifier = store[name];
	    if (_h2.default.isArray(quantifier)) {
	      return quantifier.length;
	    } else if (quantifier + '' === '[object NodeList]') {
	      return quantifier.length;
	    } else if (quantifier + '' === '[object HTMLCollection]') {
	      return Array.prototype.slice.call(quantifier, 0).length;
	    } else if (quantifier instanceof HTMLElement) {
	      return 1;
	    } else if (typeof quantifier == 'string') {
	      return 1;
	    }
	  };
	  /*
	    Method to make stagger form options
	    @param {Object} Options.
	    @param {Object} Child class.
	  */


	  Stagger.prototype._init = function _init(options, Module) {
	    var count = this._getChildQuantity(options.quantifier || 'el', options);
	    this._createTimeline(options);this._modules = [];
	    for (var i = 0; i < count; i++) {
	      // get child module's option
	      var option = this._getOptionByIndex(i, options);
	      option.isRunLess = true;
	      // set index of the module
	      option.index = i;
	      // create child module
	      var module = new Module(option);this._modules.push(module);
	      // add child module's timeline to the self timeline
	      this.timeline.add(module);
	    }
	    return this;
	  };
	  /*
	    Method to create timeline.
	    @param {Object} Timeline options.
	  */


	  Stagger.prototype._createTimeline = function _createTimeline() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    this.timeline = new _timeline2.default(options.timeline);
	  };

	  /* @overrides @ Tweenable */


	  Stagger.prototype._makeTween = function _makeTween() {};

	  Stagger.prototype._makeTimeline = function _makeTimeline() {};

	  return Stagger;
	}(_tunable2.default);

	module.exports = function (Module) {
	  return function (options) {
	    return new Stagger(options, Module);
	  };
	};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _h = __webpack_require__(71);

	var _h2 = _interopRequireDefault(_h);

	var _tween = __webpack_require__(101);

	var _tween2 = _interopRequireDefault(_tween);

	var _timeline = __webpack_require__(110);

	var _timeline2 = _interopRequireDefault(_timeline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  Class for toggling opacity on bunch of elements
	  @class Spriter
	  @todo
	    - add isForce3d option
	    - add run new option merging
	    - add then chains
	*/
	var Spriter = function () {
	  /*
	    Defaults/APIs
	  */
	  Spriter.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {
	      /*
	        Duration
	        @property duration
	        @type     {Number}
	      */
	      duration: 500,
	      /*
	        Delay
	        @property delay
	        @type     {Number}
	      */
	      delay: 0,
	      /*
	        Easing. Please see the 
	        [timeline module parseEasing function](timeline.coffee.html#parseEasing)
	        for all avaliable options.
	          @property easing
	        @type     {String, Function}
	      */
	      easing: 'linear.none',
	      /*
	        Repeat times count
	        
	        @property repeat
	        @type     {Number}
	      */
	      repeat: 0,
	      /*
	        Yoyo option defines if animation should be altered on repeat.
	        
	        @property yoyo
	        @type     {Boolean}
	      */
	      yoyo: false,
	      /*
	        isRunLess option prevents animation from running immediately after
	        initialization.
	        
	        @property isRunLess
	        @type     {Boolean}
	      */
	      isRunLess: false,
	      /*
	        isShowEnd option defines if the last frame should be shown when
	        animation completed.
	        
	        @property isShowEnd
	        @type     {Boolean}
	      */
	      isShowEnd: false,
	      /*
	        onStart callback will be called once on animation start.
	        
	        @property onStart
	        @type     {Function}
	      */
	      onStart: null,
	      /*
	        onUpdate callback will be called on every frame of the animation.
	        The current progress in range **[0,1]** will be passed to the callback.
	        
	        @property onUpdate
	        @type     {Function}
	      */
	      onUpdate: null,
	      /*
	        onComplete callback will be called once on animation complete.
	        
	        @property onComplete
	        @type     {Function}
	      */
	      onComplete: null
	    };
	  };

	  function Spriter() {
	    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    (0, _classCallCheck3.default)(this, Spriter);

	    this.o = o;
	    if (!this.o.el) {
	      return _h2.default.error('No "el" option specified, aborting');
	    }
	    this._vars();this._declareDefaults();this._extendDefaults();this._parseFrames();
	    if (this._frames.length <= 2) _h2.default.warn('Spriter: only ' + this._frames.length + ' frames found');
	    if (this._frames.length < 1) _h2.default.error("Spriter: there is no frames to animate, aborting");
	    this._createTween();
	    return this;
	  }
	  /*
	    Method to declare some variables.
	    
	    @method run
	    @param  {Object} New options
	    @todo   Implement new object merging
	  */


	  Spriter.prototype._vars = function _vars() {
	    this._props = _h2.default.cloneObj(this.o);
	    this.el = this.o.el;
	    this._frames = [];
	  };
	  /*
	    Method to run the spriter on demand.
	    
	    @method run
	    @param  {Object} New options
	    @todo   Implement new object merging
	  */


	  Spriter.prototype.run = function run(o) {
	    return this.timeline.play();
	  };
	  /*
	    Method to extend _props by options(this.o)
	    
	    @method _extendDefaults
	  */


	  Spriter.prototype._extendDefaults = function _extendDefaults() {
	    return _h2.default.extend(this._props, this._defaults);
	  };
	  /*
	    Method to parse frames as child nodes of el.
	    
	    @method _parseFrames
	  */


	  Spriter.prototype._parseFrames = function _parseFrames() {
	    this._frames = Array.prototype.slice.call(this.el.children, 0);
	    this._frames.forEach(function (frame, i) {
	      return frame.style.opacity = 0;
	    });
	    this._frameStep = 1 / this._frames.length;
	  };

	  /*
	    Method to create tween and timeline and supply callbacks.
	    
	    @method _createTween
	  */


	  Spriter.prototype._createTween = function _createTween() {
	    var _this = this;

	    this._tween = new _tween2.default({
	      duration: this._props.duration,
	      delay: this._props.delay,
	      yoyo: this._props.yoyo,
	      repeat: this._props.repeat,
	      easing: this._props.easing,
	      onStart: function onStart() {
	        return _this._props.onStart && _this._props.onStart();
	      },
	      onComplete: function onComplete() {
	        return _this._props.onComplete && _this._props.onComplete();
	      },
	      onUpdate: function onUpdate(p) {
	        return _this._setProgress(p);
	      }
	    });
	    this.timeline = new _timeline2.default();this.timeline.add(this._tween);
	    if (!this._props.isRunLess) this._startTween();
	  };

	  /*
	    Method to start tween
	    
	    @method _startTween
	  */


	  Spriter.prototype._startTween = function _startTween() {
	    var _this2 = this;

	    setTimeout(function () {
	      return _this2.timeline.play();
	    }, 1);
	  };
	  /*
	    Method to set progress of the sprite
	    
	    @method _setProgress
	    @param  {Number} Progress in range **[0,1]**
	  */


	  Spriter.prototype._setProgress = function _setProgress(p) {
	    // get the frame number
	    var proc = Math.floor(p / this._frameStep);
	    // react only if frame changes
	    if (this._prevFrame != this._frames[proc]) {
	      // if previous frame isnt current one, hide it
	      if (this._prevFrame) {
	        this._prevFrame.style.opacity = 0;
	      }
	      // if end of animation and isShowEnd flag was specified
	      // then show the last frame else show current frame
	      var currentNum = p === 1 && this._props.isShowEnd ? proc - 1 : proc;
	      // show the current frame
	      if (this._frames[currentNum]) {
	        this._frames[currentNum].style.opacity = 1;
	      }
	      // set previous frame as current
	      this._prevFrame = this._frames[proc];
	    }
	    if (this._props.onUpdate) {
	      this._props.onUpdate(p);
	    }
	  };

	  return Spriter;
	}();

	exports.default = Spriter;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var MotionPath, Timeline, Tween, h, resize,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	h = __webpack_require__(71);

	resize = __webpack_require__(130);

	Tween = __webpack_require__(101)["default"];

	Timeline = __webpack_require__(110)["default"];

	MotionPath = (function() {
	  MotionPath.prototype.defaults = {
	    path: null,
	    curvature: {
	      x: '75%',
	      y: '50%'
	    },
	    isCompositeLayer: true,
	    delay: 0,
	    duration: 1000,
	    easing: null,
	    repeat: 0,
	    yoyo: false,
	    onStart: null,
	    onComplete: null,
	    onUpdate: null,
	    offsetX: 0,
	    offsetY: 0,
	    angleOffset: null,
	    pathStart: 0,
	    pathEnd: 1,
	    motionBlur: 0,
	    transformOrigin: null,
	    isAngle: false,
	    isReverse: false,
	    isRunLess: false,
	    isPresetPosition: true
	  };

	  function MotionPath(o1) {
	    this.o = o1 != null ? o1 : {};
	    this.calcHeight = bind(this.calcHeight, this);
	    if (this.vars()) {
	      return;
	    }
	    this.createTween();
	    this;
	  }

	  MotionPath.prototype.vars = function() {
	    this.getScaler = h.bind(this.getScaler, this);
	    this.resize = resize;
	    this.props = h.cloneObj(this.defaults);
	    this.extendOptions(this.o);
	    this.isMotionBlurReset = h.isSafari || h.isIE;
	    this.isMotionBlurReset && (this.props.motionBlur = 0);
	    this.history = [h.cloneObj(this.props)];
	    return this.postVars();
	  };

	  MotionPath.prototype.curveToPath = function(o) {
	    var angle, curvature, curvatureX, curvatureY, curvePoint, curveXPoint, dX, dY, endPoint, path, percent, radius, start;
	    path = document.createElementNS(h.NS, 'path');
	    start = o.start;
	    endPoint = {
	      x: start.x + o.shift.x,
	      y: start.x + o.shift.y
	    };
	    curvature = o.curvature;
	    dX = o.shift.x;
	    dY = o.shift.y;
	    radius = Math.sqrt(dX * dX + dY * dY);
	    percent = radius / 100;
	    angle = Math.atan(dY / dX) * (180 / Math.PI) + 90;
	    if (o.shift.x < 0) {
	      angle = angle + 180;
	    }
	    curvatureX = h.parseUnit(curvature.x);
	    curvatureX = curvatureX.unit === '%' ? curvatureX.value * percent : curvatureX.value;
	    curveXPoint = h.getRadialPoint({
	      center: {
	        x: start.x,
	        y: start.y
	      },
	      radius: curvatureX,
	      angle: angle
	    });
	    curvatureY = h.parseUnit(curvature.y);
	    curvatureY = curvatureY.unit === '%' ? curvatureY.value * percent : curvatureY.value;
	    curvePoint = h.getRadialPoint({
	      center: {
	        x: curveXPoint.x,
	        y: curveXPoint.y
	      },
	      radius: curvatureY,
	      angle: angle + 90
	    });
	    path.setAttribute('d', "M" + start.x + "," + start.y + " Q" + curvePoint.x + "," + curvePoint.y + " " + endPoint.x + "," + endPoint.y);
	    return path;
	  };

	  MotionPath.prototype.postVars = function() {
	    this.props.pathStart = h.clamp(this.props.pathStart, 0, 1);
	    this.props.pathEnd = h.clamp(this.props.pathEnd, this.props.pathStart, 1);
	    this.angle = 0;
	    this.speedX = 0;
	    this.speedY = 0;
	    this.blurX = 0;
	    this.blurY = 0;
	    this.prevCoords = {};
	    this.blurAmount = 20;
	    this.props.motionBlur = h.clamp(this.props.motionBlur, 0, 1);
	    this.onUpdate = this.props.onUpdate;
	    if (!this.o.el) {
	      h.error('Missed "el" option. It could be a selector, DOMNode or another module.');
	      return true;
	    }
	    this.el = this.parseEl(this.props.el);
	    this.props.motionBlur > 0 && this.createFilter();
	    this.path = this.getPath();
	    if (!this.path.getAttribute('d')) {
	      h.error('Path has no coordinates to work with, aborting');
	      return true;
	    }
	    this.len = this.path.getTotalLength();
	    this.slicedLen = this.len * (this.props.pathEnd - this.props.pathStart);
	    this.startLen = this.props.pathStart * this.len;
	    this.fill = this.props.fill;
	    if (this.fill != null) {
	      this.container = this.parseEl(this.props.fill.container);
	      this.fillRule = this.props.fill.fillRule || 'all';
	      this.getScaler();
	      if (this.container != null) {
	        this.removeEvent(this.container, 'onresize', this.getScaler);
	        return this.addEvent(this.container, 'onresize', this.getScaler);
	      }
	    }
	  };

	  MotionPath.prototype.addEvent = function(el, type, handler) {
	    return el.addEventListener(type, handler, false);
	  };

	  MotionPath.prototype.removeEvent = function(el, type, handler) {
	    return el.removeEventListener(type, handler, false);
	  };

	  MotionPath.prototype.createFilter = function() {
	    var div, svg;
	    div = document.createElement('div');
	    this.filterID = "filter-" + (h.getUniqID());
	    div.innerHTML = "<svg id=\"svg-" + this.filterID + "\"\n    style=\"visibility:hidden; width:0px; height:0px\">\n  <filter id=\"" + this.filterID + "\" y=\"-20\" x=\"-20\" width=\"40\" height=\"40\">\n    <feOffset\n      id=\"blur-offset\" in=\"SourceGraphic\"\n      dx=\"0\" dy=\"0\" result=\"offset2\"></feOffset>\n    <feGaussianblur\n      id=\"blur\" in=\"offset2\"\n      stdDeviation=\"0,0\" result=\"blur2\"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n      <feMergeNode in=\"blur2\"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>";
	    svg = div.querySelector("#svg-" + this.filterID);
	    this.filter = svg.querySelector('#blur');
	    this.filterOffset = svg.querySelector('#blur-offset');
	    document.body.insertBefore(svg, document.body.firstChild);
	    this.el.style['filter'] = "url(#" + this.filterID + ")";
	    return this.el.style[h.prefix.css + "filter"] = "url(#" + this.filterID + ")";
	  };

	  MotionPath.prototype.parseEl = function(el) {
	    if (typeof el === 'string') {
	      return document.querySelector(el);
	    }
	    if (el instanceof HTMLElement) {
	      return el;
	    }
	    if (el._setProp != null) {
	      this.isModule = true;
	      return el;
	    }
	  };

	  MotionPath.prototype.getPath = function() {
	    var path;
	    path = h.parsePath(this.props.path);
	    if (path) {
	      return path;
	    }
	    if (this.props.path.x || this.props.path.y) {
	      return this.curveToPath({
	        start: {
	          x: 0,
	          y: 0
	        },
	        shift: {
	          x: this.props.path.x || 0,
	          y: this.props.path.y || 0
	        },
	        curvature: {
	          x: this.props.curvature.x || this.defaults.curvature.x,
	          y: this.props.curvature.y || this.defaults.curvature.y
	        }
	      });
	    }
	  };

	  MotionPath.prototype.getScaler = function() {
	    var end, size, start;
	    this.cSize = {
	      width: this.container.offsetWidth || 0,
	      height: this.container.offsetHeight || 0
	    };
	    start = this.path.getPointAtLength(0);
	    end = this.path.getPointAtLength(this.len);
	    size = {};
	    this.scaler = {};
	    size.width = end.x >= start.x ? end.x - start.x : start.x - end.x;
	    size.height = end.y >= start.y ? end.y - start.y : start.y - end.y;
	    switch (this.fillRule) {
	      case 'all':
	        this.calcWidth(size);
	        return this.calcHeight(size);
	      case 'width':
	        this.calcWidth(size);
	        return this.scaler.y = this.scaler.x;
	      case 'height':
	        this.calcHeight(size);
	        return this.scaler.x = this.scaler.y;
	    }
	  };

	  MotionPath.prototype.calcWidth = function(size) {
	    this.scaler.x = this.cSize.width / size.width;
	    return !isFinite(this.scaler.x) && (this.scaler.x = 1);
	  };

	  MotionPath.prototype.calcHeight = function(size) {
	    this.scaler.y = this.cSize.height / size.height;
	    return !isFinite(this.scaler.y) && (this.scaler.y = 1);
	  };

	  MotionPath.prototype.run = function(o) {
	    var fistItem, key, value;
	    if (o) {
	      fistItem = this.history[0];
	      for (key in o) {
	        value = o[key];
	        if (h.callbacksMap[key] || h.tweenOptionMap[key]) {
	          h.warn("the property \"" + key + "\" property can not be overridden on run yet");
	          delete o[key];
	        } else {
	          this.history[0][key] = value;
	        }
	      }
	      this.tuneOptions(o);
	    }
	    return this.startTween();
	  };

	  MotionPath.prototype.createTween = function() {
	    this.tween = new Tween({
	      duration: this.props.duration,
	      delay: this.props.delay,
	      yoyo: this.props.yoyo,
	      repeat: this.props.repeat,
	      easing: this.props.easing,
	      onStart: (function(_this) {
	        return function() {
	          var ref;
	          return (ref = _this.props.onStart) != null ? ref.apply(_this) : void 0;
	        };
	      })(this),
	      onComplete: (function(_this) {
	        return function() {
	          var ref;
	          _this.props.motionBlur && _this.setBlur({
	            blur: {
	              x: 0,
	              y: 0
	            },
	            offset: {
	              x: 0,
	              y: 0
	            }
	          });
	          return (ref = _this.props.onComplete) != null ? ref.apply(_this) : void 0;
	        };
	      })(this),
	      onUpdate: (function(_this) {
	        return function(p) {
	          return _this.setProgress(p);
	        };
	      })(this),
	      onFirstUpdate: (function(_this) {
	        return function(isForward, isYoyo) {
	          if (!isForward) {
	            return _this.history.length > 1 && _this.tuneOptions(_this.history[0]);
	          }
	        };
	      })(this)
	    });
	    this.timeline = new Timeline;
	    this.timeline.add(this.tween);
	    !this.props.isRunLess && this.startTween();
	    return this.props.isPresetPosition && this.setProgress(0, true);
	  };

	  MotionPath.prototype.startTween = function() {
	    return setTimeout(((function(_this) {
	      return function() {
	        var ref;
	        return (ref = _this.timeline) != null ? ref.play() : void 0;
	      };
	    })(this)), 1);
	  };

	  MotionPath.prototype.setProgress = function(p, isInit) {
	    var len, point, x, y;
	    len = this.startLen + (!this.props.isReverse ? p * this.slicedLen : (1 - p) * this.slicedLen);
	    point = this.path.getPointAtLength(len);
	    x = point.x + this.props.offsetX;
	    y = point.y + this.props.offsetY;
	    this._getCurrentAngle(point, len, p);
	    this._setTransformOrigin(p);
	    this._setTransform(x, y, p, isInit);
	    return this.props.motionBlur && this.makeMotionBlur(x, y);
	  };

	  MotionPath.prototype.setElPosition = function(x, y, p) {
	    var composite, isComposite, rotate, transform;
	    rotate = this.angle !== 0 ? "rotate(" + this.angle + "deg)" : '';
	    isComposite = this.props.isCompositeLayer && h.is3d;
	    composite = isComposite ? 'translateZ(0)' : '';
	    transform = "translate(" + x + "px," + y + "px) " + rotate + " " + composite;
	    return h.setPrefixedStyle(this.el, 'transform', transform);
	  };

	  MotionPath.prototype.setModulePosition = function(x, y) {
	    this.el._setProp({
	      shiftX: x + "px",
	      shiftY: y + "px",
	      angle: this.angle
	    });
	    return this.el._draw();
	  };

	  MotionPath.prototype._getCurrentAngle = function(point, len, p) {
	    var atan, isTransformFunOrigin, prevPoint, x1, x2;
	    isTransformFunOrigin = typeof this.props.transformOrigin === 'function';
	    if (this.props.isAngle || (this.props.angleOffset != null) || isTransformFunOrigin) {
	      prevPoint = this.path.getPointAtLength(len - 1);
	      x1 = point.y - prevPoint.y;
	      x2 = point.x - prevPoint.x;
	      atan = Math.atan(x1 / x2);
	      !isFinite(atan) && (atan = 0);
	      this.angle = atan * h.RAD_TO_DEG;
	      if ((typeof this.props.angleOffset) !== 'function') {
	        return this.angle += this.props.angleOffset || 0;
	      } else {
	        return this.angle = this.props.angleOffset.call(this, this.angle, p);
	      }
	    } else {
	      return this.angle = 0;
	    }
	  };

	  MotionPath.prototype._setTransform = function(x, y, p, isInit) {
	    var transform;
	    if (this.scaler) {
	      x *= this.scaler.x;
	      y *= this.scaler.y;
	    }
	    transform = null;
	    if (!isInit) {
	      transform = typeof this.onUpdate === "function" ? this.onUpdate(p, {
	        x: x,
	        y: y,
	        angle: this.angle
	      }) : void 0;
	    }
	    if (this.isModule) {
	      return this.setModulePosition(x, y);
	    } else {
	      if (typeof transform !== 'string') {
	        return this.setElPosition(x, y, p);
	      } else {
	        return h.setPrefixedStyle(this.el, 'transform', transform);
	      }
	    }
	  };

	  MotionPath.prototype._setTransformOrigin = function(p) {
	    var isTransformFunOrigin, tOrigin;
	    if (this.props.transformOrigin) {
	      isTransformFunOrigin = typeof this.props.transformOrigin === 'function';
	      tOrigin = !isTransformFunOrigin ? this.props.transformOrigin : this.props.transformOrigin(this.angle, p);
	      return h.setPrefixedStyle(this.el, 'transform-origin', tOrigin);
	    }
	  };

	  MotionPath.prototype.makeMotionBlur = function(x, y) {
	    var absoluteAngle, coords, dX, dY, signX, signY, tailAngle;
	    tailAngle = 0;
	    signX = 1;
	    signY = 1;
	    if ((this.prevCoords.x == null) || (this.prevCoords.y == null)) {
	      this.speedX = 0;
	      this.speedY = 0;
	    } else {
	      dX = x - this.prevCoords.x;
	      dY = y - this.prevCoords.y;
	      if (dX > 0) {
	        signX = -1;
	      }
	      if (signX < 0) {
	        signY = -1;
	      }
	      this.speedX = Math.abs(dX);
	      this.speedY = Math.abs(dY);
	      tailAngle = Math.atan(dY / dX) * (180 / Math.PI) + 90;
	    }
	    absoluteAngle = tailAngle - this.angle;
	    coords = this.angToCoords(absoluteAngle);
	    this.blurX = h.clamp((this.speedX / 16) * this.props.motionBlur, 0, 1);
	    this.blurY = h.clamp((this.speedY / 16) * this.props.motionBlur, 0, 1);
	    this.setBlur({
	      blur: {
	        x: 3 * this.blurX * this.blurAmount * Math.abs(coords.x),
	        y: 3 * this.blurY * this.blurAmount * Math.abs(coords.y)
	      },
	      offset: {
	        x: 3 * signX * this.blurX * coords.x * this.blurAmount,
	        y: 3 * signY * this.blurY * coords.y * this.blurAmount
	      }
	    });
	    this.prevCoords.x = x;
	    return this.prevCoords.y = y;
	  };

	  MotionPath.prototype.setBlur = function(o) {
	    if (!this.isMotionBlurReset) {
	      this.filter.setAttribute('stdDeviation', o.blur.x + "," + o.blur.y);
	      this.filterOffset.setAttribute('dx', o.offset.x);
	      return this.filterOffset.setAttribute('dy', o.offset.y);
	    }
	  };

	  MotionPath.prototype.extendDefaults = function(o) {
	    var key, results, value;
	    results = [];
	    for (key in o) {
	      value = o[key];
	      results.push(this[key] = value);
	    }
	    return results;
	  };

	  MotionPath.prototype.extendOptions = function(o) {
	    var key, results, value;
	    results = [];
	    for (key in o) {
	      value = o[key];
	      results.push(this.props[key] = value);
	    }
	    return results;
	  };

	  MotionPath.prototype.then = function(o) {
	    var it, key, opts, prevOptions, value;
	    prevOptions = this.history[this.history.length - 1];
	    opts = {};
	    for (key in prevOptions) {
	      value = prevOptions[key];
	      if (!h.callbacksMap[key] && !h.tweenOptionMap[key] || key === 'duration') {
	        if (o[key] == null) {
	          o[key] = value;
	        }
	      } else {
	        if (o[key] == null) {
	          o[key] = void 0;
	        }
	      }
	      if (h.tweenOptionMap[key]) {
	        opts[key] = key !== 'duration' ? o[key] : o[key] != null ? o[key] : prevOptions[key];
	      }
	    }
	    this.history.push(o);
	    it = this;
	    opts.onUpdate = (function(_this) {
	      return function(p) {
	        return _this.setProgress(p);
	      };
	    })(this);
	    opts.onStart = (function(_this) {
	      return function() {
	        var ref;
	        return (ref = _this.props.onStart) != null ? ref.apply(_this) : void 0;
	      };
	    })(this);
	    opts.onComplete = (function(_this) {
	      return function() {
	        var ref;
	        return (ref = _this.props.onComplete) != null ? ref.apply(_this) : void 0;
	      };
	    })(this);
	    opts.onFirstUpdate = function() {
	      return it.tuneOptions(it.history[this.index]);
	    };
	    opts.isChained = !o.delay;
	    this.timeline.append(new Tween(opts));
	    return this;
	  };

	  MotionPath.prototype.tuneOptions = function(o) {
	    this.extendOptions(o);
	    return this.postVars();
	  };

	  MotionPath.prototype.angToCoords = function(angle) {
	    var radAngle, x, y;
	    angle = angle % 360;
	    radAngle = ((angle - 90) * Math.PI) / 180;
	    x = Math.cos(radAngle);
	    y = Math.sin(radAngle);
	    x = x < 0 ? Math.max(x, -0.7) : Math.min(x, .7);
	    y = y < 0 ? Math.max(y, -0.7) : Math.min(y, .7);
	    return {
	      x: x * 1.428571429,
	      y: y * 1.428571429
	    };
	  };

	  return MotionPath;

	})();

	module.exports = MotionPath;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	/*!
	  LegoMushroom @legomushroom http://legomushroom.com
	  MIT License 2014
	 */

	/* istanbul ignore next */
	(function() {
	  var Main;
	  Main = (function() {
	    function Main(o) {
	      this.o = o != null ? o : {};
	      if (window.isAnyResizeEventInited) {
	        return;
	      }
	      this.vars();
	      this.redefineProto();
	    }

	    Main.prototype.vars = function() {
	      window.isAnyResizeEventInited = true;
	      this.allowedProtos = [HTMLDivElement, HTMLFormElement, HTMLLinkElement, HTMLBodyElement, HTMLParagraphElement, HTMLFieldSetElement, HTMLLegendElement, HTMLLabelElement, HTMLButtonElement, HTMLUListElement, HTMLOListElement, HTMLLIElement, HTMLHeadingElement, HTMLQuoteElement, HTMLPreElement, HTMLBRElement, HTMLFontElement, HTMLHRElement, HTMLModElement, HTMLParamElement, HTMLMapElement, HTMLTableElement, HTMLTableCaptionElement, HTMLImageElement, HTMLTableCellElement, HTMLSelectElement, HTMLInputElement, HTMLTextAreaElement, HTMLAnchorElement, HTMLObjectElement, HTMLTableColElement, HTMLTableSectionElement, HTMLTableRowElement];
	      return this.timerElements = {
	        img: 1,
	        textarea: 1,
	        input: 1,
	        embed: 1,
	        object: 1,
	        svg: 1,
	        canvas: 1,
	        tr: 1,
	        tbody: 1,
	        thead: 1,
	        tfoot: 1,
	        a: 1,
	        select: 1,
	        option: 1,
	        optgroup: 1,
	        dl: 1,
	        dt: 1,
	        br: 1,
	        basefont: 1,
	        font: 1,
	        col: 1,
	        iframe: 1
	      };
	    };

	    Main.prototype.redefineProto = function() {
	      var i, it, proto, t;
	      it = this;
	      return t = (function() {
	        var j, len, ref, results;
	        ref = this.allowedProtos;
	        results = [];
	        for (i = j = 0, len = ref.length; j < len; i = ++j) {
	          proto = ref[i];
	          if (proto.prototype == null) {
	            continue;
	          }
	          results.push((function(proto) {
	            var listener, remover;
	            listener = proto.prototype.addEventListener || proto.prototype.attachEvent;
	            (function(listener) {
	              var wrappedListener;
	              wrappedListener = function() {
	                var option;
	                if (this !== window || this !== document) {
	                  option = arguments[0] === 'onresize' && !this.isAnyResizeEventInited;
	                  option && it.handleResize({
	                    args: arguments,
	                    that: this
	                  });
	                }
	                return listener.apply(this, arguments);
	              };
	              if (proto.prototype.addEventListener) {
	                return proto.prototype.addEventListener = wrappedListener;
	              } else if (proto.prototype.attachEvent) {
	                return proto.prototype.attachEvent = wrappedListener;
	              }
	            })(listener);
	            remover = proto.prototype.removeEventListener || proto.prototype.detachEvent;
	            return (function(remover) {
	              var wrappedRemover;
	              wrappedRemover = function() {
	                this.isAnyResizeEventInited = false;
	                this.iframe && this.removeChild(this.iframe);
	                return remover.apply(this, arguments);
	              };
	              if (proto.prototype.removeEventListener) {
	                return proto.prototype.removeEventListener = wrappedRemover;
	              } else if (proto.prototype.detachEvent) {
	                return proto.prototype.detachEvent = wrappedListener;
	              }
	            })(remover);
	          })(proto));
	        }
	        return results;
	      }).call(this);
	    };

	    Main.prototype.handleResize = function(args) {
	      var computedStyle, el, iframe, isEmpty, isNoPos, isStatic, ref;
	      el = args.that;
	      if (!this.timerElements[el.tagName.toLowerCase()]) {
	        iframe = document.createElement('iframe');
	        el.appendChild(iframe);
	        iframe.style.width = '100%';
	        iframe.style.height = '100%';
	        iframe.style.position = 'absolute';
	        iframe.style.zIndex = -999;
	        iframe.style.opacity = 0;
	        iframe.style.top = 0;
	        iframe.style.left = 0;
	        computedStyle = window.getComputedStyle ? getComputedStyle(el) : el.currentStyle;
	        isNoPos = el.style.position === '';
	        isStatic = computedStyle.position === 'static' && isNoPos;
	        isEmpty = computedStyle.position === '' && el.style.position === '';
	        if (isStatic || isEmpty) {
	          el.style.position = 'relative';
	        }
	        if ((ref = iframe.contentWindow) != null) {
	          ref.onresize = (function(_this) {
	            return function(e) {
	              return _this.dispatchEvent(el);
	            };
	          })(this);
	        }
	        el.iframe = iframe;
	      } else {
	        this.initTimer(el);
	      }
	      return el.isAnyResizeEventInited = true;
	    };

	    Main.prototype.initTimer = function(el) {
	      var height, width;
	      width = 0;
	      height = 0;
	      return this.interval = setInterval((function(_this) {
	        return function() {
	          var newHeight, newWidth;
	          newWidth = el.offsetWidth;
	          newHeight = el.offsetHeight;
	          if (newWidth !== width || newHeight !== height) {
	            _this.dispatchEvent(el);
	            width = newWidth;
	            return height = newHeight;
	          }
	        };
	      })(this), this.o.interval || 62.5);
	    };

	    Main.prototype.dispatchEvent = function(el) {
	      var e;
	      if (document.createEvent) {
	        e = document.createEvent('HTMLEvents');
	        e.initEvent('onresize', false, false);
	        return el.dispatchEvent(e);
	      } else if (document.createEventObject) {
	        e = document.createEventObject();
	        return el.fireEvent('onresize', e);
	      } else {
	        return false;
	      }
	    };

	    Main.prototype.destroy = function() {
	      var i, it, j, len, proto, ref, results;
	      clearInterval(this.interval);
	      this.interval = null;
	      window.isAnyResizeEventInited = false;
	      it = this;
	      ref = this.allowedProtos;
	      results = [];
	      for (i = j = 0, len = ref.length; j < len; i = ++j) {
	        proto = ref[i];
	        if (proto.prototype == null) {
	          continue;
	        }
	        results.push((function(proto) {
	          var listener;
	          listener = proto.prototype.addEventListener || proto.prototype.attachEvent;
	          if (proto.prototype.addEventListener) {
	            proto.prototype.addEventListener = Element.prototype.addEventListener;
	          } else if (proto.prototype.attachEvent) {
	            proto.prototype.attachEvent = Element.prototype.attachEvent;
	          }
	          if (proto.prototype.removeEventListener) {
	            return proto.prototype.removeEventListener = Element.prototype.removeEventListener;
	          } else if (proto.prototype.detachEvent) {
	            return proto.prototype.detachEvent = Element.prototype.detachEvent;
	          }
	        })(proto));
	      }
	      return results;
	    };

	    return Main;

	  })();
	  if (true) {
	    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return new Main;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === "object") && (typeof module.exports === "object")) {
	    return module.exports = new Main;
	  } else {
	    if (typeof window !== "undefined" && window !== null) {
	      window.AnyResizeEvent = Main;
	    }
	    return typeof window !== "undefined" && window !== null ? window.anyResizeEvent = new Main : void 0;
	  }
	})();


/***/ })
/******/ ])
});
;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory();
	} else {
		// Browser global
		root.ScrollMagic = factory();
	}
}(this, function () {
	"use strict";

	var ScrollMagic = function () {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.5";

	// TODO: temporary workaround for chrome's scroll jitter bug
	window.addEventListener("mousewheel", function () {});

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
	 * The main class that is needed once per scroll container.
	 *
	 * @class
	 *
	 * @example
	 * // basic initialization
	 * var controller = new ScrollMagic.Controller();
	 *
	 * // passing options
	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
	 *
	 * @param {object} [options] - An object containing one or more options for the controller.
	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 ** `0` => silent
	 ** `1` => errors
	 ** `2` => errors, warnings
	 ** `3` => errors, warnings, debuginfo
	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
	 This interval polls these parameters to fire the necessary events.  
	 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
	 *
	 */
	ScrollMagic.Controller = function (options) {
/*
	 * ----------------------------------------------------------------
	 * settings
	 * ----------------------------------------------------------------
	 */
		var
		NAMESPACE = 'ScrollMagic.Controller',
			SCROLL_DIRECTION_FORWARD = 'FORWARD',
			SCROLL_DIRECTION_REVERSE = 'REVERSE',
			SCROLL_DIRECTION_PAUSED = 'PAUSED',
			DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

/*
	 * ----------------------------------------------------------------
	 * private vars
	 * ----------------------------------------------------------------
	 */
		var
		Controller = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_sceneObjects = [],
			_updateScenesOnNextCycle = false,
			// can be boolean (true => all scenes) or an array of scenes to be updated
			_scrollPos = 0,
			_scrollDirection = SCROLL_DIRECTION_PAUSED,
			_isDocument = true,
			_viewPortSize = 0,
			_enabled = true,
			_updateTimeout, _refreshTimeout;

/*
	 * ----------------------------------------------------------------
	 * private functions
	 * ----------------------------------------------------------------
	 */

		/**
		 * Internal constructor function of the ScrollMagic Controller
		 * @private
		 */
		var construct = function () {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			_options.refreshInterval = parseInt(_options.refreshInterval) || DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
		 * Schedule the next execution of the refresh function
		 * @private
		 */
		var scheduleRefresh = function () {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
		 * @private
		 */
		var getScrollPos = function () {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
		 * Returns the current viewport Size (width vor horizontal, height for vertical)
		 * @private
		 */
		var getViewportSize = function () {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
		 * Make available publicly for pinned mousewheel workaround.
		 * @private
		 */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
		 * Handle updates in cycles instead of on scroll (performance)
		 * @private
		 */
		var updateScenes = function () {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) { // scroll position changed?
					_scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
		 * Initializes rAF callback
		 * @private
		 */
		var debounceUpdate = function () {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
		 * Handles Container changes
		 * @private
		 */
		var onChange = function (e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function () {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) { // stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) { // refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
		 * Send a debug message to the console.
		 * provided publicly with _log for plugins
		 * @private
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
		 * Sort scenes in ascending order of their start offset.
		 * @private
		 *
		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
		 * @return {array} The sorted array of Scenes.
		 */
		var sortScenes = function (ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
		 * ----------------------------------------------------------------
		 * public functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Add one ore more scene(s) to the controller.  
		 * This is the equivalent to `Scene.addTo(controller)`.
		 * @public
		 * @example
		 * // with a previously defined scene
		 * controller.addScene(scene);
		 *
		 * // with a newly created scene.
		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
		 *
		 * // adding multiple scenes
		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
		 *
		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
		 * @return {Controller} Parent object for chaining.
		 */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () { // resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
		 * Remove one ore more scene(s) from the controller.  
		 * This is the equivalent to `Scene.remove()`.
		 * @public
		 * @example
		 * // remove a scene from the controller
		 * controller.removeScene(scene);
		 *
		 * // remove multiple scenes from the controller
		 * controller.removeScene([scene, scene2, scene3]);
		 *
		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
		 * Update one ore more scene(s) according to the scroll position of the container.  
		 * This is the equivalent to `Scene.update()`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
		 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @public
		 * @example
		 * // update a specific scene on next cycle
		 * controller.updateScene(scene);
		 *
		 * // update a specific scene immediately
		 * controller.updateScene(scene, true);
		 *
		 * // update multiple scenes scene on next cycle
		 * controller.updateScene([scene1, scene2, scene3]);
		 *
		 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
		 This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
		 * @return {Controller} Parent object for chaining.
		 */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
		 * See `Controller.updateScene()` for more information about what this means.  
		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
		 * The only application for this method is when ScrollMagic fails to detect these events.  
		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
		 * @public
		 * @example
		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
		 * controller.update();
		 *
		 * // update the controller immediately
		 * controller.update(true);
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
		 * @return {Controller} Parent object for chaining.
		 */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
		 * @public
		 *
		 * @since 1.1.0
		 * @example
		 * // scroll to an offset of 100
		 * controller.scrollTo(100);
		 *
		 * // scroll to a DOM element
		 * controller.scrollTo("#anchor");
		 *
		 * // scroll to the beginning of a scene
		 * var scene = new ScrollMagic.Scene({offset: 200});
		 * controller.scrollTo(scene);
		 *
		 * // define a new scroll position modification function (jQuery animate instead of jump)
		 * controller.scrollTo(function (newScrollPos) {
		 *	$("html, body").animate({scrollTop: newScrollPos});
		 * });
		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
		 *
		 * // define a new scroll function with an additional parameter
		 * controller.scrollTo(function (newScrollPos, message) {
		 *  console.log(message);
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter to the defined custom function
		 * controller.scrollTo(100, "my message");
		 *
		 * // define a new scroll function with an additional parameter containing multiple variables
		 * controller.scrollTo(function (newScrollPos, options) {
		 *  someGlobalVar = options.a + options.b;
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter containing multiple options
		 * controller.scrollTo(100, {a: 1, b: 2});
		 *
		 * // define a new scroll function with a callback supplied as an additional parameter
		 * controller.scrollTo(function (newScrollPos, callback) {
		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
		 * });
		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
		 * controller.scrollTo(100, function() {
		 *	console.log("scroll has finished.");
		 * });
		 *
		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
		 * 1. `number` -> The container will scroll to this new scroll offset.
		 * 2. `string` or `object` -> Can be a selector or a DOM object.  
		 *  The container will scroll to the position of this element.
		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
		 * 4. `function` -> This function will be used for future scroll position modifications.  
		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
		 *  It may also optionally receive an optional additional parameter (see below)  
		 *  _**NOTE:**  
		 *  All other options will still work as expected, using the new function to scroll._
		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) { // excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
				if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) { // assign new scroll function
				setScrollPos = scrollTarget;
			} else { // scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var
					param = _options.vertical ? "top" : "left",
						// which param is of interest ?
						containerOffset = _util.get.offset(_options.container),
						// container position is needed because element offset is returned in relation to document, not in relation to container.
						elementOffset = _util.get.offset(elem);

					if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
		 * **Get** the current scrollPosition or **Set** a new method to calculate it.  
		 * -> **GET**:
		 * When used as a getter this function will return the current scroll position.  
		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
		 *
		 * -> **SET**:
		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
		 *
		 * To change the current scroll position please use `Controller.scrollTo()`.
		 * @public
		 *
		 * @example
		 * // get the current scroll Position
		 * var scrollPos = controller.scrollPos();
		 *
		 * // set a new scroll position calculation method
		 * controller.scrollPos(function () {
		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
		 * });
		 *
		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
		 */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) { // get
				return getScrollPos.call(Controller);
			} else { // set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
		 * **Get** all infos or one in particular about the controller.
		 * @public
		 * @example
		 * // returns the current scroll position (number)
		 * var scrollPos = controller.info("scrollPos");
		 *
		 * // returns all infos as an object
		 * var infos = controller.info();
		 *
		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
		 Valid options are:
		 ** `"size"` => the current viewport size of the container
		 ** `"vertical"` => true if vertical scrolling, otherwise false
		 ** `"scrollPos"` => the current scroll position
		 ** `"scrollDirection"` => the last known direction of the scroll
		 ** `"container"` => the container element
		 ** `"isDocument"` => true if container element is the document.
		 * @returns {(mixed|object)} The requested info(s).
		 */
		this.info = function (about) {
			var values = {
				size: _viewPortSize,
				// contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) { // get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
		 * **Get** or **Set** the current loglevel option value.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var loglevel = controller.loglevel();
		 *
		 * // set a new value
		 * controller.loglevel(3);
		 *
		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
		 */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) { // get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) { // set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
		 * **Get** or **Set** the current enabled state of the controller.  
		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var enabled = controller.enabled();
		 *
		 * // disable the controller
		 * controller.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !! newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
		 * Destroy the Controller, all Scenes and everything.
		 * @public
		 *
		 * @example
		 * // without resetting the scenes
		 * controller = controller.destroy();
		 *
		 * // with scene reset
		 * controller = controller.destroy(true);
		 *
		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
/*
 * method used to add an option to ScrollMagic Scenes.
 */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};


	/**
	 * A Scene defines where the controller should react and how.
	 *
	 * @class
	 *
	 * @example
	 * // create a standard scene and add it to a controller
	 * new ScrollMagic.Scene()
	 *		.addTo(controller);
	 *
	 * // create a scene with custom options and assign a handler to it.
	 * var scene = new ScrollMagic.Scene({
	 * 		duration: 100,
	 *		offset: 200,
	 *		triggerHook: "onEnter",
	 *		reverse: false
	 * });
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
	 Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
	 When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
	 * @param {(number|function)} [options.duration=0] - The duration of the scene. 
	 If `0` tweens will auto-play when reaching the scene start point, pins will be pinned indefinetly starting at the start position.  
	 A function retuning the duration value is also supported. Please see `Scene.duration()` for details.
	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
	 Can also be defined using a string:
	 ** `"onEnter"` => `1`
	 ** `"onCenter"` => `0.5`
	 ** `"onLeave"` => `0`
	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 ** `0` => silent
	 ** `1` => errors
	 ** `2` => errors, warnings
	 ** `3` => errors, warnings, debuginfo
	 * 
	 */
	ScrollMagic.Scene = function (options) {

/*
	 * ----------------------------------------------------------------
	 * settings
	 * ----------------------------------------------------------------
	 */

		var
		NAMESPACE = 'ScrollMagic.Scene',
			SCENE_STATE_BEFORE = 'BEFORE',
			SCENE_STATE_DURING = 'DURING',
			SCENE_STATE_AFTER = 'AFTER',
			DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

/*
	 * ----------------------------------------------------------------
	 * private vars
	 * ----------------------------------------------------------------
	 */

		var
		Scene = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_state = SCENE_STATE_BEFORE,
			_progress = 0,
			_scrollOffset = {
				start: 0,
				end: 0
			},
			// reflects the controllers's scroll position for the start and end of the scene respectively
			_triggerPos = 0,
			_enabled = true,
			_durationUpdateMethod, _controller;

		/**
		 * Internal constructor function of the ScrollMagic Scene
		 * @private
		 */
		var construct = function () {
			for (var key in _options) { // check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

/*
 * ----------------------------------------------------------------
 * Event Management
 * ----------------------------------------------------------------
 */

		var _listeners = {};
		/**
		 * Scene start event.  
		 * Fires whenever the scroll position its the starting point of the scene.  
		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#start
		 *
		 * @example
		 * scene.on("start", function (event) {
		 * 	console.log("Hit start point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene end event.  
		 * Fires whenever the scroll position its the ending point of the scene.  
		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#end
		 *
		 * @example
		 * scene.on("end", function (event) {
		 * 	console.log("Hit end point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene enter event.  
		 * Fires whenever the scene enters the "DURING" state.  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#enter
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 * 	console.log("Scene entered.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene - always `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene leave event.  
		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#leave
		 *
		 * @example
		 * scene.on("leave", function (event) {
		 * 	console.log("Scene left.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene update event.  
		 * Fires whenever the scene is updated (but not necessarily changes the progress).
		 *
		 * @event ScrollMagic.Scene#update
		 *
		 * @example
		 * scene.on("update", function (event) {
		 * 	console.log("Scene updated.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
		 * @property {number} event.scrollPos - The current scroll position of the container
		 */
		/**
		 * Scene progress event.  
		 * Fires whenever the progress of the scene changes.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#progress
		 *
		 * @example
		 * scene.on("progress", function (event) {
		 * 	console.log("Scene progress changed to " + event.progress);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene change event.  
		 * Fires whenvever a property of the scene is changed.
		 *
		 * @event ScrollMagic.Scene#change
		 *
		 * @example
		 * scene.on("change", function (event) {
		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.what - Indicates what value has been changed
		 * @property {mixed} event.newval - The new value of the changed property
		 */
		/**
		 * Scene shift event.  
		 * Fires whenvever the start or end **scroll offset** of the scene change.
		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
		 *
		 * @event ScrollMagic.Scene#shift
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("shift", function (event) {
		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.reason - Indicates why the scene has shifted
		 */
		/**
		 * Scene destroy event.  
		 * Fires whenvever the scene is destroyed.
		 * This can be used to tidy up custom behaviour used in events.
		 *
		 * @event ScrollMagic.Scene#destroy
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 *        // add custom action
		 *        $("#my-elem").left("200");
		 *      })
		 *      .on("destroy", function (event) {
		 *        // reset my element to start position
		 *        if (event.reset) {
		 *          $("#my-elem").left("0");
		 *        }
		 *      });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
		 */
		/**
		 * Scene add event.  
		 * Fires when the scene is added to a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#add
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("add", function (event) {
		 * 	console.log('Scene was added to a new controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.controller - The controller object the scene was added to.
		 */
		/**
		 * Scene remove event.  
		 * Fires when the scene is removed from a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#remove
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("remove", function (event) {
		 * 	console.log('Scene was removed from its controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 */

		/**
		 * Add one ore more event listener.  
		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
		 * @method ScrollMagic.Scene#on
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update progress start end enter leave", callback);
		 *
		 * @param {string} names - The name or names of the event the callback should be attached to.
		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var
					nameparts = fullname.split('.'),
						eventname = nameparts[0],
						namespace = nameparts[1];
					if (eventname != "*") { // disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
		 * Remove one or more event listener.
		 * @method ScrollMagic.Scene#off
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update", callback);
		 * // remove listeners
		 * scene.off("change update", callback);
		 *
		 * @param {string} names - The name or names of the event that should be removed.
		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var
				nameparts = fullname.split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1] || '',
					removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var
					list = _listeners[remove] || [],
						i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
		 * Trigger an event.
		 * @method ScrollMagic.Scene#trigger
		 *
		 * @example
		 * this.trigger("change");
		 *
		 * @param {string} name - The name of the event that should be triggered.
		 * @param {object} [vars] - An object containing info that should be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.trigger = function (name, vars) {
			if (name) {
				var
				nameparts = name.trim().split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1],
					listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene.on("change.internal", function (e) {
			if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
				if (e.what === "triggerElement") {
					updateTriggerElementPosition();
				} else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
					Scene.update();
				}
			}
		}).on("shift.internal", function (e) {
			updateScrollOffset();
			Scene.update(); // update scene to reflect new position
		});

		/**
		 * Send a debug message to the console.
		 * @private
		 * but provided publicly with _log for plugins
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
		 * Add the scene to a controller.  
		 * This is the equivalent to `Controller.addScene(scene)`.
		 * @method ScrollMagic.Scene#addTo
		 *
		 * @example
		 * // add a scene to a ScrollMagic Controller
		 * scene.addTo(controller);
		 *
		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) { // was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
		 * **Get** or **Set** the current enabled state of the scene.  
		 * This can be used to disable this scene without removing or destroying it.
		 * @method ScrollMagic.Scene#enabled
		 *
		 * @example
		 * // get the current value
		 * var enabled = scene.enabled();
		 *
		 * // disable the scene
		 * scene.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !! newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
		 * Remove the scene from the controller.  
		 * This is the equivalent to `Controller.removeScene(scene)`.
		 * The scene will not be updated anymore until you readd it to a controller.
		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
		 * @method ScrollMagic.Scene#remove
		 * @example
		 * // remove the scene from its controller
		 * scene.remove();
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
		 * Destroy the scene and everything.
		 * @method ScrollMagic.Scene#destroy
		 * @example
		 * // destroy the scene without resetting the pin and tween to their initial positions
		 * scene = scene.destroy();
		 *
		 * // destroy the scene and reset the pin and tween
		 * scene = scene.destroy(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};


		/**
		 * Updates the Scene to reflect the current state.  
		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @method ScrollMagic.Scene#update
		 * @example
		 * // update the scene on next tick
		 * scene.update();
		 *
		 * // update the scene immediately
		 * scene.update(true);
		 *
		 * @fires Scene.update
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
		 * @returns {Scene} Parent object for chaining.
		 */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var
						scrollPos = _controller.info("scrollPos"),
							newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
		 * Updates dynamic scene variables like the trigger element position or the duration.
		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
		 * 
		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
		 *
		 * @method ScrollMagic.Scene#refresh
		 * @since 1.1.0
		 * @example
		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
		 * 
		 * // change the position of the trigger
		 * $("#trigger").css("top", 500);
		 * // immediately let the scene know of this change
		 * scene.refresh();
		 *
		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
		 * @fires {@link Scene.change}, if the duration changed
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
		 * **Get** or **Set** the scene's progress.  
		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
		 * The order in which the events are fired depends on the duration of the scene:
		 *  1. Scenes with `duration == 0`:  
		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
		 *  When the trigger position of the scene is passed the events are always fired in this order:  
		 *  `enter`, `start`, `progress` when scrolling forward  
		 *  and  
		 *  `progress`, `start`, `leave` when scrolling in reverse
		 *  2. Scenes with `duration > 0`:  
		 *  Scenes with a set duration have a defined start and end point.  
		 *  When scrolling past the start position of the scene it will fire these events in this order:  
		 *  `enter`, `start`, `progress`  
		 *  When continuing to scroll and passing the end point it will fire these events:  
		 *  `progress`, `end`, `leave`  
		 *  When reversing through the end point these events are fired:  
		 *  `enter`, `end`, `progress`  
		 *  And when continuing to scroll past the start position in reverse it will fire:  
		 *  `progress`, `start`, `leave`  
		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
		 * 
		 * In short:  
		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
		 * `start` and `end` will always trigger at their respective position.
		 * 
		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
		 * 
		 * @method ScrollMagic.Scene#progress
		 * @example
		 * // get the current scene progress
		 * var progress = scene.progress();
		 *
		 * // set new scene progress
		 * scene.progress(0.3);
		 *
		 * @fires {@link Scene.enter}, when used as setter
		 * @fires {@link Scene.start}, when used as setter
		 * @fires {@link Scene.progress}, when used as setter
		 * @fires {@link Scene.end}, when used as setter
		 * @fires {@link Scene.leave}, when used as setter
		 *
		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
		 * @returns {number} `get` -  Current scene progress.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */
		this.progress = function (progress) {
			if (!arguments.length) { // get
				return _progress;
			} else { // set
				var
				doUpdate = false,
					oldState = _state,
					scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
					reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var
					eventVars = {
						progress: _progress,
						state: _state,
						scrollDirection: scrollDirection
					},
						stateChanged = _state != oldState;

					var trigger = function (eventName) { // tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) { // enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) { // leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};


		/**
		 * Update the start and end scrollOffset of the container.
		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
		 * Is called, when:
		 *   - Scene event "change" is called with: offset, triggerHook, duration 
		 *   - scroll container event "resize" is called
		 *   - the position of the triggerElement changes
		 *   - the controller changes -> addTo()
		 * @private
		 */
		var updateScrollOffset = function () {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
		 * Updates the duration if set to a dynamic function.
		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.change}, if the duration changed
		 * @fires {@link Scene.shift}, if the duration changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateDuration = function (suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
		 * Updates the position of the triggerElement, if present.
		 * This method is called ...
		 *  - ... when the triggerElement is changed
		 *  - ... when the scene is added to a (new) controller
		 *  - ... in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.shift}, if the position changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateTriggerElementPosition = function (suppressEvents) {
			var
			elementPos = 0,
				telem = _options.triggerElement;
			if (_controller && telem) {
				var
				controllerInfo = _controller.info(),
					containerOffset = _util.get.offset(controllerInfo.container),
					// container position is needed because element offset is returned in relation to document, not in relation to container.
					param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?
				// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
				while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
					telem = telem.parentNode;
				}

				var elementOffset = _util.get.offset(telem);

				if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
					containerOffset[param] -= _controller.scrollPos();
				}

				elementPos = elementOffset[param] - containerOffset[param];
			}
			var changed = elementPos != _triggerPos;
			_triggerPos = elementPos;
			if (changed && !suppressEvents) {
				Scene.trigger("shift", {
					reason: "triggerElementPosition"
				});
			}
		};

		/**
		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
		 * @private
		 */
		var onContainerResize = function (e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};

		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function (val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function () {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod());
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
		 * Checks the validity of a specific or all options and reset to default if neccessary.
		 * @private
		 */
		var validateOption = function (check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) { // there is a validation method for this option
					try { // validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) { // validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
		 * Helper used by the setter/getters for scene options
		 * @private
		 */
		var changeOption = function (varname, newval) {
			var
			changed = false,
				oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function (optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) { // get
						return _options[optionName];
					} else {
						if (optionName === "duration") { // new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) { // set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
		 * **Get** or **Set** the duration option value.
		 * As a setter it also accepts a function returning a numeric value.  
		 * This is particularly useful for responsive setups.
		 *
		 * The duration is updated using the supplied function every time `Scene.refresh()` is called, which happens periodically from the controller (see ScrollMagic.Controller option `refreshInterval`).  
		 * _**NOTE:** Be aware that it's an easy way to kill performance, if you supply a function that has high CPU demand.  
		 * Even for size and position calculations it is recommended to use a variable to cache the value. (see example)  
		 * This counts double if you use the same function for multiple scenes._
		 *
		 * @method ScrollMagic.Scene#duration
		 * @example
		 * // get the current duration value
		 * var duration = scene.duration();
		 *
		 * // set a new duration
		 * scene.duration(300);
		 *
		 * // use a function to automatically adjust the duration to the window height.
		 * var durationValueCache;
		 * function getDuration () {
		 *   return durationValueCache;
		 * }
		 * function updateDuration (e) {
		 *   durationValueCache = window.innerHeight;
		 * }
		 * $(window).on("resize", updateDuration); // update the duration when the window size changes
		 * $(window).triggerHandler("resize"); // set to initial value
		 * scene.duration(getDuration); // supply duration method
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|function)} [newDuration] - The new duration of the scene.
		 * @returns {number} `get` -  Current scene duration.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the offset option value.
		 * @method ScrollMagic.Scene#offset
		 * @example
		 * // get the current offset
		 * var offset = scene.offset();
		 *
		 * // set a new offset
		 * scene.offset(100);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {number} [newOffset] - The new offset of the scene.
		 * @returns {number} `get` -  Current scene offset.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerElement option value.
		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
		 * @method ScrollMagic.Scene#triggerElement
		 * @example
		 * // get the current triggerElement
		 * var triggerElement = scene.triggerElement();
		 *
		 * // set a new triggerElement using a selector
		 * scene.triggerElement("#trigger");
		 * // set a new triggerElement using a DOM object
		 * scene.triggerElement(document.getElementById("trigger"));
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
		 * @returns {(string|object)} `get` -  Current triggerElement.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerHook option value.
		 * @method ScrollMagic.Scene#triggerHook
		 * @example
		 * // get the current triggerHook value
		 * var triggerHook = scene.triggerHook();
		 *
		 * // set a new triggerHook using a string
		 * scene.triggerHook("onLeave");
		 * // set a new triggerHook using a number
		 * scene.triggerHook(0.7);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the reverse option value.
		 * @method ScrollMagic.Scene#reverse
		 * @example
		 * // get the current reverse option
		 * var reverse = scene.reverse();
		 *
		 * // set new reverse option
		 * scene.reverse(false);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
		 * @returns {boolean} `get` -  Current reverse option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the loglevel option value.
		 * @method ScrollMagic.Scene#loglevel
		 * @example
		 * // get the current loglevel
		 * var loglevel = scene.loglevel();
		 *
		 * // set new loglevel
		 * scene.loglevel(3);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
		 * @returns {number} `get` -  Current loglevel.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** the associated controller.
		 * @method ScrollMagic.Scene#controller
		 * @example
		 * // get the controller of a scene
		 * var controller = scene.controller();
		 *
		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
		 */
		this.controller = function () {
			return _controller;
		};

		/**
		 * **Get** the current state.
		 * @method ScrollMagic.Scene#state
		 * @example
		 * // get the current state
		 * var state = scene.state();
		 *
		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
		 */
		this.state = function () {
			return _state;
		};

		/**
		 * **Get** the current scroll offset for the start of the scene.  
		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
		 * @method ScrollMagic.Scene#scrollOffset
		 * @example
		 * // get the current scroll offset for the start and end of the scene.
		 * var start = scene.scrollOffset();
		 * var end = scene.scrollOffset() + scene.duration();
		 * console.log("the scene starts at", start, "and ends at", end);
		 *
		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
		 */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
		 * **Get** the trigger position of the scene (including the value of the `offset` option).  
		 * @method ScrollMagic.Scene#triggerPosition
		 * @example
		 * // get the scene's trigger position
		 * var triggerPosition = scene.triggerPosition();
		 *
		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
		 */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};

		var
		_pin, _pinOptions;

		Scene.on("shift.internal", function (e) {
			var durationChanged = e.reason === "duration";
			if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
				// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
				updatePinState();
			}
			if (durationChanged) {
				updatePinDimensions();
			}
		}).on("progress.internal", function (e) {
			updatePinState();
		}).on("add.internal", function (e) {
			updatePinDimensions();
		}).on("destroy.internal", function (e) {
			Scene.removePin(e.reset);
		});
		/**
		 * Update the pin state.
		 * @private
		 */
		var updatePinState = function (forceUnpin) {
			if (_pin && _controller) {
				var
				containerInfo = _controller.info(),
					pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins
				if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var
					fixedPos = _util.get.offset(_pinOptions.spacer, true),
						// get viewport position of spacer
						scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
						: Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress
					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var
					newCSS = {
						position: _pinOptions.inFlow ? "relative" : "absolute",
						top: 0,
						left: 0
					},
						change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) { // only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
		 * Update the pin spacer and/or element size.
		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
		 * @private
		 */
		var updatePinDimensions = function () {
			if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
				var
				after = (_state === SCENE_STATE_AFTER),
					before = (_state === SCENE_STATE_BEFORE),
					during = (_state === SCENE_STATE_DURING),
					vertical = _controller.info("vertical"),
					pinTarget = _pinOptions.spacer.firstChild,
					// usually the pined element but can also be another spacer (cascaded pins)
					marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
					css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
		 * Updates the Pin state (in certain scenarios)
		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
		 * So this function is called on resize and scroll of the document.
		 * @private
		 */
		var updatePinInContainer = function () {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
		 * Updates the Pin spacer size state (in certain scenarios)
		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
		 * So this function is called on resize of the container.
		 * @private
		 */
		var updateRelativePinSpacer = function () {
			if (_controller && _pin && // well, duh
			_state === SCENE_STATE_DURING && // element in pinned state?
			( // is width or height relatively sized, but not in relation to body? then we need to recalc.
			((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) || (_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode)))) {
				updatePinDimensions();
			}
		};

		/**
		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
		 * @private
		 */
		var onMousewheelOverPin = function (e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
		 * Pin an element for the duration of the tween.  
		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
		 * Make sure only one pin is applied to an element at the same time.
		 * An element can be pinned multiple times, but only successively.
		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
		 * @method ScrollMagic.Scene#setPin
		 * @example
		 * // pin element and push all following elements down by the amount of the pin duration.
		 * scene.setPin("#pin");
		 *
		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
		 * scene.setPin("#pin", {pushFollowers: false});
		 *
		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
		 * @param {object} [settings] - settings for the pin
		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
		 Ignored, when duration is `0`.
		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setPin = function (element, settings) {
			var
			defaultSettings = {
				pushFollowers: true,
				spacerClass: "scrollmagic-pin-spacer"
			};
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) { // preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}

			}
			_pin = element;

			var
			parentDisplay = _pin.parentNode.style.display,
				boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var
			inFlow = _util.css(_pin, "position") != "absolute",
				pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
				sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.
			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var
			spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
				spacerCSS = _util.extend(pinCSS, {
					position: inFlow ? "relative" : "absolute",
					boxSizing: "content-box",
					mozBoxSizing: "content-box",
					webkitBoxSizing: "content-box"
				});

			if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow,
				// stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var
				pinInlineCSS = _pin.style,
					copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
		 * Remove the pin from the scene.
		 * @method ScrollMagic.Scene#removePin
		 * @example
		 * // remove the pin from the scene without resetting it (the spacer is not removed)
		 * scene.removePin();
		 *
		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
		 * scene.removePin(true);
		 *
		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) { // if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
						var
						style = _pinOptions.spacer.style,
							values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
						margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};


		var
		_cssClasses, _cssClassElems = [];

		Scene.on("destroy.internal", function (e) {
			Scene.removeClassToggle(e.reset);
		});
		/**
		 * Define a css class modification while the scene is active.  
		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
		 * @method ScrollMagic.Scene#setClassToggle
		 * @example
		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
		 * scene.setClassToggle("#my-elem", "myclass");
		 *
		 * // add multiple classes to multiple elements defined by the selector '.classChange'
		 * scene.setClassToggle(".classChange", "class1 class2 class3");
		 *
		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
		 * Remove the class binding from the scene.
		 * @method ScrollMagic.Scene#removeClassToggle
		 * @example
		 * // remove class binding from the scene without reset
		 * scene.removeClassToggle();
		 *
		 * // remove class binding and remove the changes it caused
		 * scene.removeClassToggle(true);
		 *
		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function (val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function (val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function (val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function (val) {
				return !!val; // force boolean
			},
			loglevel: function (val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		},
		// holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"],
		// list of options that trigger a `shift` event
	};
/*
 * method used to add an option to ScrollMagic Scenes.
 * TODO: DOC (private for dev)
 */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};


	/**
	 * TODO: DOCS (private for dev)
	 * @class
	 * @private
	 */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

/*
 * TODO: DOCS (private for dev)
 */

	var _util = ScrollMagic._util = (function (window) {
		var U = {},
			i;

		/**
		 * ------------------------------
		 * internal helpers
		 * ------------------------------
		 */

		// parse float and fall back to 0.
		var floatval = function (number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function (elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function (which, elem, outer, includeMargin) {
			elem = (elem === document) ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function (str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
		 * ------------------------------
		 * external helpers
		 * ------------------------------
		 */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var
		lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function (callback) {
				var
				currTime = new Date().getTime(),
					timeToCall = Math.max(0, 16 - (currTime - lastTime)),
					id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function (id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var
		loglevels = ["error", "warn", "log"],
			console = window.console || {};

		console.log = console.log ||
		function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
				time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
				method = loglevels[loglevel - 1],
				args = Array.prototype.splice.call(arguments, 1),
				func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
		 * ------------------------------
		 * type testing
		 * ------------------------------
		 */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
		};
		_type.DomElement = function (o) {
			return (
			typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
			o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string");
		};

		/**
		 * ------------------------------
		 * DOM Element info
		 * ------------------------------
		 */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) { // invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector)) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) { // check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) { // clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
		 * ------------------------------
		 * DOM Element manipulation
		 * ------------------------------
		 */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.add(classname);
				else elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.remove(classname);
				else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var
				obj = {},
					style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {}));

	ScrollMagic.Scene.prototype.addIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}

	return ScrollMagic;
}));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(1)
    riot.tag2('app-tag', '<div> <h1>Thie is Riot test.</h1> <p>{test}</p> </div>', 'app-tag h1,[data-is="app-tag"] h1{ color: red; display: -webkit-box; display: -ms-flexbox; -js-display: flex; display: flex; }', '', function(opts) {
'use strict';

var tag = this;

tag.test = 'Hello Riot';
});
    
  

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map