(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fb2a"],{b578:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"ovh"},[e("div",{ref:"t1",staticClass:"p-6 bg-success"},[t._v("target_1")]),e("div",{ref:"t2",staticClass:"p-6 bg-info"},[t._v("target_2")])])},s=[],o=e("e02c"),r=e.n(o);console.dir(r.a);var i={name:"Target",data:function(){return{}},mounted:function(){var t=r.a.Tap;r.a.use(t,{name:"twoFingersTap",tapTimes:2,pointLength:2,maxDistanceFromPrevTap:100});var n=new r.a(this.$el,{isPreventDefault:!0});n.on("twoFingersTap",(function(t){console.warn(t.type)})),n.target(this.$refs.t1).on("tap",(function(t){console.log(t.type)})),n.target(this.$refs.t2).on("pan",(function(t){console.log(t.type)}))}},c=i,l=e("2877"),u=Object(l["a"])(c,a,s,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20fb2a.ecfd7ab1.js.map