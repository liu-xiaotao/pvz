System.register("chunks:///_virtual/BirdController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Global.ts"],(function(t){var e,i,n,o,r,l,a,c,s,u,d,h,p,f,y,b,g;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,l=t._decorator,a=t.RigidBody2D,c=t.ParticleSystem2D,s=t.Collider2D,u=t.Contact2DType,d=t.input,h=t.Input,p=t.tween,f=t.director,y=t.v2,b=t.Component},function(t){g=t.ColliderTag}],execute:function(){var C,T,v,S,m,B,D;r._RF.push({},"3fd1fKfg0pHeLmof56PRFRX","BirdController",void 0);var _=l.ccclass,E=l.property;t("BirdController",(C=_("BirdController"),T=E(a),v=E(c),C((B=e((m=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r))||this,n(e,"rb",B,o(e)),n(e,"particleSystem",D,o(e)),e.collider=void 0,e}i(e,t);var r=e.prototype;return r.onEnable=function(){this.collider=this.node.getComponent(s),this.collider.on(u.BEGIN_CONTACT,this.onCollidionStart,this),d.on(h.EventType.TOUCH_START,this.onTouchStart,this)},r.start=function(){p(this.node).to(.8,{angle:-90},{easing:"cubicIn"}).start()},r.onCollidionStart=function(t,e){var i=this;e.tag==g.Base?(this.scheduleOnce((function(){i.rb.enabled=!1}),0),this.node.getChildByName("Sprite").active=!1,this.particleSystem.resetSystem(),f.emit("gameover"),this.enabled=!1):f.emit("addScore")},r.onTouchStart=function(t){this.rb.linearVelocity=y(0,12),p(this.node).to(.2,{angle:35},{easing:"cubicOut"}).to(.8,{angle:-90},{easing:"cubicIn"}).start()},r.onDisable=function(){this.closeEvent()},r.closeEvent=function(){this.collider.off(u.BEGIN_CONTACT,this.onCollidionStart,this),d.off(h.EventType.TOUCH_START,this.onTouchStart,this)},e}(b)).prototype,"rb",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=e(m.prototype,"particleSystem",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=m))||S));r._RF.pop()}}}));

System.register("chunks:///_virtual/BlockGame.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Global.ts"],(function(t){var n,o,e,i,r,l,a,c,s,h,u,p,d,g,f,b,m,S,k,v;return{setters:[function(t){n=t.applyDecoratedDescriptor,o=t.inheritsLoose,e=t.initializerDefineProperty,i=t.assertThisInitialized,r=t.createForOfIteratorHelperLoose},function(t){l=t.cclegacy,a=t._decorator,c=t.Node,s=t.Label,h=t.input,u=t.Input,p=t.UITransform,d=t.tween,g=t.Size,f=t.Tween,b=t.v3,m=t.randomRange,S=t.director,k=t.Component},function(t){v=t.EGameScene}],execute:function(){var T,w,y,z,C,B,E,x,I;l._RF.push({},"d9cf5WQomVKt5gkxUBtbS04","BlockGame",void 0);var G=a.ccclass,_=a.property;t("BlockGame",(T=G("BlockGame"),w=_(c),y=_(c),z=_(c),T((E=n((B=function(t){function n(){for(var n,o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return n=t.call.apply(t,[this].concat(r))||this,e(n,"block",E,i(n)),e(n,"ground",x,i(n)),e(n,"wall",I,i(n)),n.label=void 0,n.isBlockExtend=!1,n}o(n,t);var l=n.prototype;return l.start=function(){this.label=this.node.getChildByName("Label").getComponent(s),this.openInput(),this.randomGroundAndWallWidth()},l.openInput=function(){h.on(u.EventType.TOUCH_START,this.onTouchStart,this),h.on(u.EventType.TOUCH_END,this.onTouchEnd,this)},l.closeInput=function(){h.off(u.EventType.TOUCH_START,this.onTouchStart,this),h.off(u.EventType.TOUCH_END,this.onTouchEnd,this)},l.onTouchStart=function(t){var n=this.block.getComponent(p);this.isBlockExtend=!0,d(n).to(1.2,{contentSize:new g(650,650)}).start()},l.onTouchEnd=function(t){if(this.isBlockExtend){this.isBlockExtend=!1,this.closeInput();var n=this.block.getComponent(p);f.stopAllByTarget(n);var o,e=this.ground.children,i=this.wall.children,r=[e[0].getComponent(p),e[1].getComponent(p)],l=r[0].contentSize.width,a=r[0].contentSize.height,c=e[1].position.x-e[0].position.x-2*l,s=[i[0].getComponent(p),i[1].getComponent(p)],h=s[0].contentSize.width,u=s[0].contentSize.height,d=i[1].position.x-i[0].position.x-2*h,g=!1;n.contentSize.width>d?o=this.wall.position.y+u/2+n.contentSize.height/2:n.contentSize.width<c?o=-1200:(o=this.ground.position.y+a/2+n.contentSize.height/2,g=!0),this.blockFall(b(0,o),g)}},l.blockFall=function(t,n){var o=this;d(this.block).to(.2,{angle:0}).to(.8,{position:t},{easing:"bounceOut"}).call((function(){o.resetBlock(),o.randomGroundAndWallWidth(),n&&o.addScore()})).start()},l.resetBlock=function(){var t=this,n=this.block.getComponent(p);d(this.block).to(.5,{position:b(0,350)}).call((function(){return t.openInput()})).start(),d(this.block).to(.5,{angle:45}).start(),d(n).to(.5,{contentSize:new g(100,100)}).start()},l.randomGroundAndWallWidth=function(){for(var t,n=m(430,520),o=m(420,490),e=r(this.ground.children);!(t=e()).done;){var i=t.value;d(i.getComponent(p)).to(.3,{contentSize:new g(n,150)}).start()}for(var l,a=r(this.wall.children);!(l=a()).done;){var c=l.value;d(c.getComponent(p)).to(.3,{contentSize:new g(o,150)}).start()}},l.addScore=function(){this.label.string=(parseInt(this.label.string)+1).toString()},l.onBackButtonClick=function(){S.loadScene(v.None)},n}(k)).prototype,"block",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=n(B.prototype,"ground",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=n(B.prototype,"wall",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=B))||C));l._RF.pop()}}}));

System.register("chunks:///_virtual/ColliderTagSet.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Global.ts"],(function(e){var t,r,o,n,i,a,l,c,s,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,l=e.Enum,c=e.Collider2D,s=e.Component},function(e){u=e.ColliderTag}],execute:function(){var p,g,d,f,y;i._RF.push({},"f603b/kRCtBg64dUQD5NpMl","ColliderTagSet",void 0);var h=a.ccclass,C=a.property;e("ColliderTagSet",(p=h("ColliderTagSet"),g=C({type:l(u)}),p((y=t((f=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,o(t,"tag",y,n(t)),t}return r(t,e),t.prototype.onLoad=function(){var e=this.node.getComponent(c);e&&(e.tag=this.tag)},t}(s)).prototype,"tag",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return u.None}}),d=f))||d));i._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/FlyBirdManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BirdController.ts","./Global.ts","./LoopMove.ts"],(function(e){var n,t,o,r,i,a,l,c,s,d,u,p,b,f,h,m,g;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized,i=e.createForOfIteratorHelperLoose},function(e){a=e.cclegacy,l=e._decorator,c=e.Node,s=e.Label,d=e.director,u=e.RigidBody2D,p=e.tween,b=e.v3,f=e.Component},function(e){h=e.BirdController},function(e){m=e.EGameScene},function(e){g=e.LoopMove}],execute:function(){var v,y,B,G,O,C,L,S,F,w,z,M,P;a._RF.push({},"21d6e3Eq4VBN5ddGOg6PB9Y","FlyBirdManager",void 0);var j=l.ccclass,k=l.property;e("FlyBirdManager",(v=j("FlyBirdManager"),y=k(c),B=k(c),G=k([c]),O=k(c),C=k(s),v((F=n((S=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,o(n,"ndBird",F,r(n)),o(n,"ndPanel",w,r(n)),o(n,"ndGameObjects",z,r(n)),o(n,"ndGameOver",M,r(n)),o(n,"scoreLabel",P,r(n)),n.score=-1,n}t(n,e);var a=n.prototype;return a.onEnable=function(){d.on("gameover",this.onGameOver,this),d.on("addScore",this.updateScore,this)},a.start=function(){for(var e,n=i(this.ndGameObjects);!(e=n()).done;){e.value.getComponent(g).enabled=!1}},a.onPlayButtonClick=function(){this.ndBird.getComponent(u).enabled=!0,this.ndBird.getComponent(h).enabled=!0,this.ndPanel.active=!1,this.updateScore();for(var e,n=i(this.ndGameObjects);!(e=n()).done;){e.value.getComponent(g).enabled=!0}},a.onGameOver=function(){p(this.ndGameOver).to(.4,{position:b()}).start();for(var e,n=i(this.ndGameObjects);!(e=n()).done;){e.value.getComponent(g).enabled=!1}this.scheduleOnce((function(){d.loadScene(m.FlyBird)}),.8)},a.updateScore=function(){this.score++,this.scoreLabel.string=this.score.toString()},a.onBackButtonClick=function(){d.loadScene(m.None)},n}(f)).prototype,"ndBird",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=n(S.prototype,"ndPanel",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=n(S.prototype,"ndGameObjects",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),M=n(S.prototype,"ndGameOver",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=n(S.prototype,"scoreLabel",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=S))||L));a._RF.pop()}}}));

System.register("chunks:///_virtual/Global.ts",["cc"],(function(e){var a;return{setters:[function(e){a=e.cclegacy}],execute:function(){e({loadData:function(e){var a=localStorage.getItem(e);return a?JSON.parse(a):null},saveData:function(e,a){localStorage.setItem(e,JSON.stringify(a))}}),a._RF.push({},"c3b4ajeg9VGTYacZzihedSc","Global",void 0);e("ColliderTag",function(e){return e[e.None=0]="None",e[e.Bird=1]="Bird",e[e.Base=2]="Base",e[e.ScoreArea=3]="ScoreArea",e}({})),e("EGameScene",function(e){return e.None="Start",e.FlyBird="FlyBird",e.PinGame="PinGame",e.BlockGame="BlockGame",e}({}));a._RF.pop()}}}));

System.register("chunks:///_virtual/LoopMove.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,o,t,n,a,i,s,l,c,p,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,o=e.inheritsLoose,t=e.initializerDefineProperty,n=e.assertThisInitialized,a=e.createForOfIteratorHelperLoose},function(e){i=e.cclegacy,s=e._decorator,l=e.CCFloat,c=e.v3,p=e.randomRange,u=e.Component}],execute:function(){var f,v,d,g,h,m,b,R,y;i._RF.push({},"6f245UzrSlMs5U0gbTFs8Rb","LoopMove",void 0);var L=s.ccclass,z=s.property;e("LoopMove",(f=L("LoopMove"),v=z(l),d=z(l),g=z(l),f((b=r((m=function(e){function r(){for(var r,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=e.call.apply(e,[this].concat(a))||this,t(r,"speed",b,n(r)),t(r,"moveRange",R,n(r)),t(r,"randomYRange",y,n(r)),r}o(r,e);var i=r.prototype;return i.start=function(){},i.update=function(e){for(var r,o=a(this.node.children);!(r=o()).done;){var t=r.value;t.translate(c(-this.speed*e,0)),t.position.x<=-this.moveRange&&t.translate(c(2*this.moveRange,p(-this.randomYRange,this.randomYRange)))}},r}(u)).prototype,"speed",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),R=r(m.prototype,"moveRange",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 720}}),y=r(m.prototype,"randomYRange",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),h=m))||h));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Test.ts","./BirdController.ts","./BlockGame.ts","./ColliderTagSet.ts","./FlyBirdManager.ts","./Global.ts","./LoopMove.ts","./Pin.ts","./PinGameManager.ts","./Pip.ts","./StartUI.ts","./WFGameManager.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pin.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,r,o,l,c,a,s,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,l=t._decorator,c=t.Collider2D,a=t.Contact2DType,s=t.director,u=t.Component}],execute:function(){var p,f,d,h,y;o._RF.push({},"8f01buSbKZAZKVXY2bLYbvG","Pin",void 0);var b=l.ccclass,v=l.property;t("Pin",(p=b("Pin"),f=v(c),p((y=e((h=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return e=t.call.apply(t,[this].concat(o))||this,n(e,"collider",y,r(e)),e}i(e,t);var o=e.prototype;return o.start=function(){this.collider.on(a.BEGIN_CONTACT,this.onCollisionEnter,this)},o.onCollisionEnter=function(){s.getScene().emit("pinHit")},e}(u)).prototype,"collider",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=h))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/PinGameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Global.ts"],(function(e){var t,n,i,r,a,o,l,u,c,s,p,h,f,b,d,m,g,P,C;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,l=e.Node,u=e.Prefab,c=e.Label,s=e.Camera,p=e.input,h=e.Input,f=e.director,b=e.Tween,d=e.tween,m=e.instantiate,g=e.Color,P=e.Component},function(e){C=e.EGameScene}],execute:function(){var v,y,L,T,S,w,R,z,B,G,D,E,_;a._RF.push({},"c0121rnJkpDx4iwJCR/ZrL1","PinGameManager",void 0);var A=o.ccclass,H=o.property;e("PinGameManager",(v=A("PinGameManager"),y=H([l]),L=H(u),T=H(c),S=H(s),w=H(l),v((B=t((z=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,i(t,"pointList",B,r(t)),i(t,"pinPrefab",G,r(t)),i(t,"scoreLabel",D,r(t)),i(t,"mainCamera",E,r(t)),i(t,"ndRemoveBut",_,r(t)),t.roundel=null,t.roundelSpeed=50,t.currentPin=null,t.score=0,t}n(t,e);var a=t.prototype;return a.start=function(){p.on(h.EventType.TOUCH_START,this.onTouchStart,this),f.getScene().on("pinHit",this.gameEnd,this),this.roundel=this.node.getChildByName("Roundel"),this.createPin()},a.onTouchStart=function(e){var t=this;if(null!=this.currentPin){var n=this.currentPin;b.stopAllByTarget(n),d(n).to(.1,{position:this.pointList[2].position}).call((function(){n.setParent(t.roundel,!0),t.score++,t.updateLabel(),t.createPin()})).start(),this.currentPin=null}},a.update=function(e){this.roundel.angle-=this.roundelSpeed*e},a.createPin=function(){var e=m(this.pinPrefab);this.currentPin=e,e.setPosition(this.pointList[0].position),e.setParent(this.node),d(e).to(.2,{position:this.pointList[1].position}).start()},a.updateLabel=function(){this.scoreLabel.string=this.score.toString()},a.gameEnd=function(){var e=this;p.off(h.EventType.TOUCH_START,this.onTouchStart,this);var t=new g("#ED692C"),n=new g("#CCF3AD"),i=t.a-n.a,r=t.r-n.r,a=t.g-n.g,o=t.b-n.b,l=d(this.mainCamera).to(.3,{clearColor:t},{easing:"cubicOut",onUpdate:function(e,t){var l=new g(n.r+r*t,n.g+a*t,n.b+o*t,n.a+i*t);e.clearColor=l}}),u=d(this.mainCamera).to(.3,{orthoHeight:340},{easing:"cubicOut"}).call((function(){e.scheduleOnce((function(){f.loadScene(C.PinGame)}),.5)}));d(this.mainCamera).parallel(l,u).start()},a.onBackButtonClick=function(){f.loadScene(C.None)},t}(P)).prototype,"pointList",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),G=t(z.prototype,"pinPrefab",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(z.prototype,"scoreLabel",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(z.prototype,"mainCamera",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(z.prototype,"ndRemoveBut",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=z))||R));a._RF.pop()}}}));

System.register("chunks:///_virtual/Pip.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,r,n,i,a,s;return{setters:[function(t){e=t.inheritsLoose,o=t.createForOfIteratorHelperLoose},function(t){r=t.cclegacy,n=t._decorator,i=t.randomRange,a=t.v3,s=t.Component}],execute:function(){var c;r._RF.push({},"43fbdedLYlFAo1c1Dlp3Qge","Pip",void 0);var p=n.ccclass;n.property,t("Pip",p("Pip")(c=function(t){function r(){return t.apply(this,arguments)||this}e(r,t);var n=r.prototype;return n.start=function(){for(var t,e=o(this.node.children);!(t=e()).done;){var r=t.value,n=i(-150,150);r.setPosition(r.position.x,n)}},n.update=function(t){for(var e,r=o(this.node.children);!(e=r()).done;){var n=e.value;n.translate(a(-150*t,0)),n.position.x<-420&&n.translate(a(840,n.position.y))}},r}(s))||c);r._RF.pop()}}}));

System.register("chunks:///_virtual/StartUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Global.ts"],(function(t){var n,e,r,o,c,a;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,r=t._decorator,o=t.director,c=t.Component},function(t){a=t.EGameScene}],execute:function(){var i;e._RF.push({},"9a563SMLs5JxIsSAr1PKslr","StartUI",void 0);var u=r.ccclass;r.property,t("StartUI",u("StartUI")(i=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.start=function(){for(var t in a)o.preloadScene(t)},r.update=function(t){},r.changeSceneButtonClick=function(t,n){o.loadScene(n)},e}(c))||i);e._RF.pop()}}}));

System.register("chunks:///_virtual/Test.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,r,s,i,u,c;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.input,s=t.Input,i=t.tween,u=t.v3,c=t.Component}],execute:function(){var p;e._RF.push({},"84af0N6vnpCb7YMQWohKdMH","Test",void 0);var a=o.ccclass;o.property,t("Test",a("Test")(p=function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){var t=this;r.on(s.EventType.KEY_DOWN,(function(){i(t.node).by(2,{position:u(0,-150)},{easing:"bounceOut"}).start()}))},e}(c))||p);e._RF.pop()}}}));

System.register("chunks:///_virtual/WFGameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Global.ts"],(function(e){var t,o,a,n,r,i,c,s,l,u,p,f,b,d,g,h,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,a=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,i=e._decorator,c=e.Prefab,s=e.Label,l=e.instantiate,u=e.v3,p=e.Color,f=e.tween,b=e.director,d=e.Component},function(e){g=e.loadData,h=e.saveData,v=e.EGameScene}],execute:function(){var y,m,w,S,L,P,F;r._RF.push({},"4ad18Bx3g1JI5TJFp6CU6Jv","WFGameManager",void 0);var C=i.ccclass,G=i.property;e("WFGameManager",(y=C("WFGameManager"),m=G(c),w=G(s),y((P=t((L=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,a(t,"pointPrefab",P,n(t)),a(t,"scoreLabel",F,n(t)),t.score=0,t}o(t,e);var r=t.prototype;return r.onLoad=function(){this.updateScore(g("wfScore")?g("wfScore"):0)},r.update=function(e){},r.onWoodFishClick=function(e){var t=e.target;this.createPointLabel(t),this.updateScore(1)},r.updateScore=function(e){this.score+=e,this.scoreLabel.string="功德："+this.score.toString(),h("wfScore",this.score),console.log(e,this.score)},r.createPointLabel=function(e){var t=l(this.pointPrefab),o=t.getComponent(s);t.setParent(e),t.translate(u(0,220));var a=new p(255,255,255,255),n=new p(255,255,255,0),r=n.a-a.a;f(o).to(.5,{color:n},{onUpdate:function(e,t){var o=new p(255,255,255,a.a+r*t);e.color=o}}).start(),f(t).by(.5,{position:u(0,230)},{easing:"cubicOut"}).call((function(){t.destroy()})).start()},r.onBackButtonClick=function(){b.loadScene(v.None)},t}(d)).prototype,"pointPrefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=t(L.prototype,"scoreLabel",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=L))||S));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});