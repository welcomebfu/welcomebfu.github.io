(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{266:function(t,n,r){"use strict";r.r(n);r(15),r(107),r(44),r(26),r(45),r(28),r(27),r(31),r(46),r(47),r(29);function e(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){f=!0,c=t},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw c}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}var c={computed:{result:function(){console.log(this.$route.params);var t,n="",r=e(this.$route.params.city);try{for(r.s();!(t=r.n()).done;){n+="ляля "+t.value}}catch(t){r.e(t)}finally{r.f()}return n}},methods:{console:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){console.log(this.$route.params)}))}},l=c,f=r(48),component=Object(f.a)(l,(function(){var t=this;return(0,t._self._c)("div",{on:{click:t.console}},[t._v("\n  You done!\n  "+t._s(JSON.parse(this.$route.params.city))+"\n")])}),[],!1,null,null,null);n.default=component.exports}}]);