(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{AoBP:function(n,t,o){"use strict";o.d(t,"a",(function(){return u}));o("Y9lz"),o("91GP");var e=o("73Rc"),i=o.n(e),r=o("jpcM"),a=o("y5cw");var p="attribute vec2 aClipSpacePosition;\nattribute vec2 aTexCoord;\nattribute vec2 aCoordinate;\n\nvarying vec2 position;\nvarying vec2 coordinate;\nvarying vec2 uv;\n\nvoid main(void) {\n  gl_Position = vec4(aClipSpacePosition, 0., 1.);\n  position = aClipSpacePosition;\n  coordinate = aCoordinate;\n  uv = aTexCoord;\n}\n",c=[-1,-1,1,-1,-1,1,1,1],u=function(n){var t,o;function e(t,o){var e,r=c.map((function(n){return-1===n?0:n}));return(e=n.call(this,t,Object.assign({},o,{vs:p,geometry:new a.a({drawMode:i.a.TRIANGLE_STRIP,vertexCount:4,attributes:{aClipSpacePosition:{size:2,value:new Float32Array(c)},aTexCoord:{size:2,value:new Float32Array(r)},aCoordinate:{size:2,value:new Float32Array(r)}}})}))||this).setVertexCount(4),e}return o=n,(t=e).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,e}(r.a)},y7Np:function(n,t,o){"use strict";o.r(t);var e=o("q1tI"),i=o.n(e),r=o("z0FI"),a=o("AoBP"),p=o("AbyB");var c=function(n){var t,o;function e(){return n.apply(this,arguments)||this}o=n,(t=e).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var i=e.prototype;return i.onInitialize=function(n){var t=n.gl;return{clipSpace:new a.a(t,{fs:"precision highp float;\n\nuniform float uTime;\n\nvarying vec2 position;\n\nvoid main(void) {\n  float d = length(position * 64.0);\n  d = 0.5 * sin(d * sin(uTime)) + 0.5 * sin(position.x * 64.0) * sin(position.y * 64.0);\n  gl_FragColor = vec4(1.0-d,0,d, 1);\n}\n",uniforms:{uTime:function(n){return.01*n.tick}}})}},i.onRender=function(n){n.clipSpace.draw({animationProps:n})},e.getInfo=function(){return"\n<p>\n  Fragment shader based rendering.\n<p>\nA luma.gl <code>ClipSpace</code> rendering 3 lines of fragment shader code,\nusing a single uniform <code>uTime</code>.\n"},e}(p.a),u=c;"undefined"!=typeof window&&(window.startApp=function(){(new c).start()}),o.d(t,"default",(function(){return s}));var s=function(n){var t,o;function e(){return n.apply(this,arguments)||this}return o=n,(t=e).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,e.prototype.render=function(){return i.a.createElement(r.a,{AnimationLoop:u,exampleConfig:this.props.pageContext.exampleConfig})},e}(i.a.Component)}}]);
//# sourceMappingURL=component---templates-core-example-fragment-jsx-f6470fc12773ccbd467b.js.map