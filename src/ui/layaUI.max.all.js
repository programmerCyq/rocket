var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.ani1=null;
		    this.ani2=null;
		    this.ani4=null;
		    this.ani5=null;
		    this.ani6=null;
		    this.plane_red=null;
		    this.plane_blue=null;
		    this.timer=null;
		    this.red_left=null;
		    this.red_right=null;
		    this.blue_left=null;
		    this.blue_right=null;
		    this.shade_right=null;
		    this.shade_left=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}

		STATICATTR$(GameUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":966},"child":[{"type":"Sprite","props":{"y":845,"x":71,"width":110,"var":"plane_red","pivotY":55,"pivotX":55,"name":"plane_red","hitTestPrior":true,"height":110},"child":[{"type":"Box","props":{"y":56,"x":55,"visible":true,"pivotY":56,"pivotX":55},"compId":14,"child":[{"type":"Box","props":{"y":99,"x":27.875,"visible":true},"compId":15,"child":[{"type":"Image","props":{"x":-0.875,"skin":"fire1/11.png"}},{"type":"Image","props":{"x":36.125,"skin":"fire1/11.png"}}]},{"type":"Box","props":{"y":99,"x":27,"visible":false},"compId":18,"child":[{"type":"Image","props":{"skin":"fire1/22.png"}},{"type":"Image","props":{"x":37,"skin":"fire1/22.png"}}]},{"type":"Box","props":{"y":98,"x":27,"visible":false},"compId":21,"child":[{"type":"Image","props":{"y":1,"skin":"fire1/33.png"}},{"type":"Image","props":{"x":37,"skin":"fire1/33.png"}}]},{"type":"Box","props":{"y":99,"x":28,"visible":false},"compId":24,"child":[{"type":"Image","props":{"skin":"fire1/44.png"}},{"type":"Image","props":{"x":37,"skin":"fire1/44.png"}}]},{"type":"Box","props":{"y":99,"x":27,"visible":false},"compId":27,"child":[{"type":"Image","props":{"skin":"fire1/55.png"}},{"type":"Image","props":{"x":37,"skin":"fire1/55.png"}}]},{"type":"Box","props":{"y":99,"x":27,"visible":false},"compId":30,"child":[{"type":"Image","props":{"skin":"fire1/66.png"}},{"type":"Image","props":{"x":37,"skin":"fire1/66.png"}}]},{"type":"Image","props":{"y":0,"x":0,"skin":"comp/FJ.png"}}]},{"type":"Box","props":{"y":-13,"x":-18,"visible":false},"compId":48,"child":[{"type":"Image","props":{"y":41,"x":46,"visible":true,"skin":"bang/1.png"},"compId":47},{"type":"Image","props":{"y":16,"x":19,"visible":false,"skin":"bang/2.png"},"compId":49},{"type":"Image","props":{"y":12,"x":14,"visible":false,"skin":"bang/3.png"},"compId":50},{"type":"Image","props":{"y":9,"x":10,"visible":false,"skin":"bang/4.png"},"compId":51},{"type":"Image","props":{"y":5,"x":6,"visible":false,"skin":"bang/5.png"},"compId":55},{"type":"Image","props":{"y":2,"x":3,"visible":false,"skin":"bang/6.png"},"compId":56},{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"bang/7.png"},"compId":57}]}]},{"type":"Sprite","props":{"y":845,"x":526,"width":110,"var":"plane_blue","pivotY":55,"pivotX":55,"name":"plane_blue","height":110},"child":[{"type":"Box","props":{"y":0,"x":0,"visible":true},"compId":32,"child":[{"type":"Image","props":{"y":89,"x":38,"visible":false,"skin":"fire2/1.png"},"compId":31},{"type":"Image","props":{"y":89,"x":38,"visible":false,"skin":"fire2/2.png"},"compId":33},{"type":"Image","props":{"y":89,"x":38,"visible":false,"skin":"fire2/3.png"},"compId":34},{"type":"Image","props":{"y":89,"x":38,"visible":false,"skin":"fire2/4.png"},"compId":36},{"type":"Image","props":{"y":89,"x":38,"visible":false,"skin":"fire2/5.png"},"compId":37},{"type":"Image","props":{"y":89,"x":38,"visible":false,"skin":"fire2/6.png"},"compId":38},{"type":"Image","props":{"y":89,"x":38,"visible":true,"skin":"fire2/7.png"},"compId":39},{"type":"Image","props":{"y":89,"x":38,"visible":false,"skin":"fire2/8.png"},"compId":40},{"type":"Image","props":{"y":0,"x":0,"skin":"comp/FJ2.png"}}]},{"type":"Box","props":{"y":-13,"x":-18,"visible":false},"compId":59,"child":[{"type":"Image","props":{"y":41,"x":46,"visible":false,"skin":"bang/1.png"},"compId":58},{"type":"Image","props":{"y":16,"x":19,"visible":false,"skin":"bang/2.png"},"compId":60},{"type":"Image","props":{"y":12,"x":14,"visible":true,"skin":"bang/3.png"},"compId":61},{"type":"Image","props":{"y":9,"x":10,"visible":false,"skin":"bang/4.png"},"compId":62},{"type":"Image","props":{"y":5,"x":6,"visible":false,"skin":"bang/5.png"},"compId":63},{"type":"Image","props":{"y":2,"x":3,"visible":false,"skin":"bang/6.png"},"compId":64},{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"bang/7.png"},"compId":65}]}]},{"type":"Box","props":{"y":114,"x":225,"var":"timer","name":"timer"},"child":[{"type":"Clip","props":{"skin":"gameStart/clip_timer.png","name":"item0","index":0,"clipX":10}},{"type":"Clip","props":{"x":79,"skin":"gameStart/clip_timer.png","name":"item1","index":0,"clipX":10}}]},{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":140,"var":"red_left","skin":"gameReady/zz.png","name":"red_left","height":966,"alpha":0}},{"type":"Image","props":{"y":0,"x":150,"width":140,"var":"red_right","skin":"gameReady/zz.png","name":"red_right","height":966,"alpha":0}},{"type":"Image","props":{"y":0,"x":310,"width":140,"var":"blue_left","skin":"gameReady/zz.png","name":"blue_left","height":966,"alpha":0}},{"type":"Image","props":{"y":0,"x":460,"width":140,"var":"blue_right","skin":"gameReady/zz.png","name":"blue_right","height":966,"alpha":0}}]},{"type":"Box","props":{"y":0,"x":140},"child":[{"type":"Image","props":{"x":150,"width":20,"skin":"comp/mline.png","height":966,"alpha":0.3}},{"type":"Image","props":{"width":10,"skin":"comp/lrline.png","height":966,"alpha":0.3}},{"type":"Image","props":{"x":310,"width":10,"skin":"comp/lrline.png","height":966,"alpha":0.3}}]},{"type":"Box","props":{"y":277,"x":100,"name":"start_ani"},"child":[{"type":"Image","props":{"visible":true,"skin":"comp/tips.png"},"compId":119},{"type":"Image","props":{"y":86,"x":100,"width":200,"visible":false,"skin":"comp/time_3.png","height":240,"alpha":1},"compId":120},{"type":"Image","props":{"y":86,"x":100,"visible":false,"skin":"comp/time_2.png"},"compId":121},{"type":"Image","props":{"y":86,"x":100,"visible":false,"skin":"comp/time_1.png"},"compId":122},{"type":"Image","props":{"y":115,"x":45,"visible":false,"skin":"comp/time_go.png"},"compId":124}]},{"type":"Image","props":{"y":0,"x":300,"width":300,"visible":false,"var":"shade_right","skin":"gameReady/zz.png","name":"shade_right","height":966,"alpha":1}},{"type":"Image","props":{"y":0,"x":0,"width":300,"visible":false,"var":"shade_left","skin":"gameReady/zz.png","name":"shade_left","height":966,"alpha":1}}],"animations":[{"nodes":[{"target":15,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":15,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":15,"key":"visible","index":1},{"value":false,"tweenMethod":"linearNone","tween":false,"target":15,"key":"visible","index":2}]}},{"target":18,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":18,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":18,"key":"visible","index":2},{"value":false,"tweenMethod":"linearNone","tween":false,"target":18,"key":"visible","index":3}]}},{"target":21,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":21,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":21,"key":"visible","index":3},{"value":false,"tweenMethod":"linearNone","tween":false,"target":21,"key":"visible","index":4}]}},{"target":24,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":24,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":24,"key":"visible","index":4},{"value":false,"tweenMethod":"linearNone","tween":false,"target":24,"key":"visible","index":5}]}},{"target":27,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":27,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":27,"key":"visible","index":5},{"value":false,"tweenMethod":"linearNone","tween":false,"target":27,"key":"visible","index":6}]}},{"target":30,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":30,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":30,"key":"visible","index":6}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":31,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":31,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":31,"key":"visible","index":1}]}},{"target":33,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":33,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":33,"key":"visible","index":1},{"value":false,"tweenMethod":"linearNone","tween":false,"target":33,"key":"visible","index":2}]}},{"target":34,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":34,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":34,"key":"visible","index":2},{"value":false,"tweenMethod":"linearNone","tween":false,"target":34,"key":"visible","index":3}]}},{"target":36,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":36,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":36,"key":"visible","index":3},{"value":false,"tweenMethod":"linearNone","tween":false,"target":36,"key":"visible","index":4}]}},{"target":37,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":37,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":37,"key":"visible","index":4},{"value":false,"tweenMethod":"linearNone","tween":false,"target":37,"key":"visible","index":5}]}},{"target":38,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":38,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":38,"key":"visible","index":5},{"value":false,"tweenMethod":"linearNone","tween":false,"target":38,"key":"visible","index":6}]}},{"target":39,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":39,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":39,"key":"visible","index":6},{"value":false,"tweenMethod":"linearNone","tween":false,"target":39,"key":"visible","index":7}]}},{"target":40,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":40,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":40,"key":"visible","index":7}]}}],"name":"ani2","id":2,"frameRate":24,"action":0},{"nodes":[{"target":14,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":14,"key":"visible","index":0}]}},{"target":48,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":48,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":48,"key":"visible","index":2}]}},{"target":47,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":47,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":47,"key":"visible","index":2}]}},{"target":49,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":49,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":49,"key":"visible","index":2},{"value":false,"tweenMethod":"linearNone","tween":false,"target":49,"key":"visible","index":4}]}},{"target":50,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":50,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":50,"key":"visible","index":4},{"value":false,"tweenMethod":"linearNone","tween":false,"target":50,"key":"visible","index":6}]}},{"target":51,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":51,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":51,"key":"visible","index":6},{"value":false,"tweenMethod":"linearNone","tween":false,"target":51,"key":"visible","index":8}]}},{"target":55,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":55,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":55,"key":"visible","index":8},{"value":false,"tweenMethod":"linearNone","tween":false,"target":55,"key":"visible","index":10}]}},{"target":56,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":56,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":56,"key":"visible","index":10},{"value":false,"tweenMethod":"linearNone","tween":false,"target":56,"key":"visible","index":12}]}},{"target":57,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":57,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":57,"key":"visible","index":12}]}}],"name":"ani4","id":4,"frameRate":24,"action":0},{"nodes":[{"target":59,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":59,"key":"visible","index":0}]}},{"target":32,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":32,"key":"visible","index":0}]}},{"target":58,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":58,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":58,"key":"visible","index":2}]}},{"target":60,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":60,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":60,"key":"visible","index":2},{"value":false,"tweenMethod":"linearNone","tween":false,"target":60,"key":"visible","index":4}]}},{"target":61,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":61,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":61,"key":"visible","index":4},{"value":false,"tweenMethod":"linearNone","tween":false,"target":61,"key":"visible","index":6}]}},{"target":62,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":62,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":62,"key":"visible","index":6},{"value":false,"tweenMethod":"linearNone","tween":false,"target":62,"key":"visible","index":8}]}},{"target":63,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":63,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":63,"key":"visible","index":8},{"value":false,"tweenMethod":"linearNone","tween":false,"target":63,"key":"visible","index":10}]}},{"target":64,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":64,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":64,"key":"visible","index":10},{"value":false,"tweenMethod":"linearNone","tween":false,"target":64,"key":"visible","index":12}]}},{"target":65,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":65,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":65,"key":"visible","index":12}]}}],"name":"ani5","id":5,"frameRate":24,"action":0},{"nodes":[{"target":119,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":119,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":119,"key":"visible","index":40}]}},{"target":120,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":120,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":120,"key":"visible","index":45},{"value":false,"tweenMethod":"linearNone","tween":false,"target":120,"key":"visible","index":70}]}},{"target":121,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":121,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":121,"key":"visible","index":75},{"value":false,"tweenMethod":"linearNone","tween":false,"target":121,"key":"visible","index":100}]}},{"target":122,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":122,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":122,"key":"visible","index":105},{"value":false,"tweenMethod":"linearNone","tween":false,"target":122,"key":"visible","index":130}]}},{"target":124,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":124,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":124,"key":"visible","index":135},{"value":false,"tweenMethod":"linearNone","tween":false,"target":124,"key":"visible","index":150}]}}],"name":"ani6","id":6,"frameRate":24,"action":1}]};}
		]);
		return GameUI;
	})(View);
var GameOverDoubleUI=(function(_super){
		function GameOverDoubleUI(){
			
		    this.roomsOwner_o=null;
		    this.roomer_o=null;
		    this.goBack=null;
		    this.peace=null;
		    this.roomsOwner_win=null;
		    this.roomsOwner_los=null;
		    this.roomer_los=null;
		    this.roomer_win=null;
		    this.roomsOwner_score=null;
		    this.roomer_score=null;

			GameOverDoubleUI.__super.call(this);
		}

		CLASS$(GameOverDoubleUI,'ui.GameOverDoubleUI',_super);
		var __proto__=GameOverDoubleUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverDoubleUI.uiView);
		}

		STATICATTR$(GameOverDoubleUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":966},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"gameoverdouble/bg.png","height":966}},{"type":"Image","props":{"y":183,"x":77,"var":"roomsOwner_o","skin":"gameoverdouble/kuang.png","name":"roomsOwner_o"}},{"type":"Image","props":{"y":183,"x":381,"var":"roomer_o","skin":"gameoverdouble/kuang.png","name":"roomer_o"}},{"type":"Image","props":{"y":723,"x":191,"var":"goBack","skin":"gameoverdouble/fhzcd.png","name":"goBack"}},{"type":"Box","props":{"y":395,"x":169,"name":"win_los"},"child":[{"type":"Image","props":{"y":15,"x":74,"width":117,"visible":false,"var":"peace","skin":"gameoverdouble/jiesuan-draw.png","name":"peace","height":54}},{"type":"Box","props":{},"child":[{"type":"Image","props":{"x":1,"visible":false,"var":"roomsOwner_win","skin":"gameoverdouble/bg-3.png","name":"roomsOwner_win"}},{"type":"Image","props":{"y":1,"visible":false,"var":"roomsOwner_los","skin":"gameoverdouble/bg-31.png","name":"roomsOwner_los"}}]},{"type":"Box","props":{"x":195},"child":[{"type":"Image","props":{"visible":false,"var":"roomer_los","skin":"gameoverdouble/bg-31.png","name":"roomer_los"}},{"type":"Image","props":{"y":-1,"x":2,"visible":false,"var":"roomer_win","skin":"gameoverdouble/bg-3.png","name":"roomer_win"}}]}]},{"type":"Box","props":{"y":540,"x":169,"var":"roomsOwner_score","name":"roomsOwner_score"},"child":[{"type":"Clip","props":{"skin":"gameoverone/clip_jb.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":30,"skin":"gameoverone/clip_jb.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":60,"skin":"gameoverone/clip_jb.png","name":"item2","clipX":10}}]},{"type":"Box","props":{"y":538,"x":354,"var":"roomer_score","name":"roomer_score"},"child":[{"type":"Clip","props":{"skin":"gameoverone/clip_jb.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":30,"skin":"gameoverone/clip_jb.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":60,"skin":"gameoverone/clip_jb.png","name":"item2","clipX":10}}]}]};}
		]);
		return GameOverDoubleUI;
	})(View);
var GameOverOneUI=(function(_super){
		function GameOverOneUI(){
			
		    this.star=null;
		    this.star_1=null;
		    this.star_2=null;
		    this.star_3=null;
		    this.again=null;
		    this.goBack=null;
		    this.Score_oo=null;
		    this.golds=null;
		    this.win_los=null;
		    this.win_=null;
		    this.los=null;

			GameOverOneUI.__super.call(this);
		}

		CLASS$(GameOverOneUI,'ui.GameOverOneUI',_super);
		var __proto__=GameOverOneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverOneUI.uiView);
		}

		STATICATTR$(GameOverOneUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":966},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"gameoverone/dryxjx.png","height":966}},{"type":"Box","props":{"y":296,"x":111,"var":"star","name":"star"},"child":[{"type":"Image","props":{"visible":false,"var":"star_1","skin":"gameoverone/star.png","name":"star_1"}},{"type":"Image","props":{"x":90,"visible":false,"var":"star_2","skin":"gameoverone/star.png","name":"star_2"}},{"type":"Image","props":{"y":0,"x":179,"visible":false,"var":"star_3","skin":"gameoverone/star.png","name":"star_3"}}]},{"type":"Image","props":{"y":703,"x":191,"var":"again","skin":"gameoverone/zctz.png","name":"again"}},{"type":"Image","props":{"y":825,"x":191,"var":"goBack","skin":"gameoverone/fhzcd.png"}},{"type":"Box","props":{"y":462,"x":235,"var":"Score_oo","name":"Score_oo"},"child":[{"type":"Clip","props":{"width":62,"skin":"gameoverone/clip_sz.png","name":"item0","height":68,"clipX":10}},{"type":"Clip","props":{"x":62,"width":62,"skin":"gameoverone/clip_sz.png","name":"item1","index":0,"height":68,"clipX":10}},{"type":"Clip","props":{"x":124,"width":62,"skin":"gameoverone/clip_sz.png","name":"item2","index":0,"height":68,"clipX":10}}]},{"type":"Box","props":{"y":578,"x":396,"var":"golds","name":"golds"},"child":[{"type":"Clip","props":{"skin":"gameoverone/clip_jb.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":30,"skin":"gameoverone/clip_jb.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":60,"skin":"gameoverone/clip_jb.png","name":"item2","clipX":10}}]},{"type":"Box","props":{"y":174,"x":146,"visible":true,"var":"win_los","name":"win_los"},"child":[{"type":"Image","props":{"visible":false,"var":"win_","skin":"gameoverone/win.png","name":"win_"}},{"type":"Image","props":{"visible":false,"var":"los","skin":"gameoverone/lose.png"}}]}]};}
		]);
		return GameOverOneUI;
	})(View);
var GameReadyUI=(function(_super){
		function GameReadyUI(){
			
		    this.ani1=null;
		    this.ani2=null;
		    this.invite_bg=null;
		    this.houseOwner=null;
		    this.roomer=null;
		    this.game_start=null;
		    this.roomerReady=null;
		    this.waitReady=null;
		    this.invite=null;
		    this.addFriend=null;
		    this.item_ID1=null;
		    this.item_ID2=null;
		    this.qxzb=null;
		    this.tcyx=null;

			GameReadyUI.__super.call(this);
		}

		CLASS$(GameReadyUI,'ui.GameReadyUI',_super);
		var __proto__=GameReadyUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameReadyUI.uiView);
		}

		STATICATTR$(GameReadyUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":966},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"gameReady/zz.png","height":966}},{"type":"Sprite","props":{"y":178,"x":29,"var":"invite_bg","name":"invite_bg"},"child":[{"type":"Image","props":{"skin":"gameReady/k1.png"}},{"type":"Image","props":{"y":157,"x":57,"var":"houseOwner","skin":"gameReady/dz.png","name":"houseOwner"}},{"type":"Image","props":{"y":337,"x":60,"var":"roomer","skin":"gameReady/dz.png","name":"roomer"}},{"type":"Image","props":{"y":161,"x":34,"skin":"gameReady/fzbz.png"}},{"type":"Image","props":{"y":74,"x":199,"skin":"gameReady/hyzd.png"}}]},{"type":"Image","props":{"y":750,"x":167,"visible":false,"var":"game_start","skin":"gameReady/ksyx.png","name":"game_start"}},{"type":"Image","props":{"y":750,"x":167,"visible":false,"var":"roomerReady","skin":"gameReady/zb.png","name":"roomerReady"}},{"type":"Sprite","props":{"y":750,"x":167,"visible":false,"var":"waitReady","name":"waitReady"},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"gameReady/dzzb1.png"},"compId":22},{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"gameReady/dzzb2.png"},"compId":24},{"type":"Image","props":{"y":0,"x":0,"visible":true,"skin":"gameReady/dzzb3.png"},"compId":25}]},{"type":"Image","props":{"y":750,"x":167,"visible":false,"var":"invite","skin":"gameReady/startTeam.png","name":"invite"}},{"type":"Image","props":{"y":549,"x":316,"visible":false,"var":"addFriend","skin":"gameReady/jia.png","name":"addFriend"}},{"type":"Image","props":{"y":689,"x":132,"visible":true,"skin":"gameReady/invite_font.png"}},{"type":"Image","props":{"y":387,"x":195,"var":"item_ID1","skin":"gameReady/userID_font.png","name":"item_ID1"}},{"type":"Image","props":{"y":567,"x":195,"var":"item_ID2","skin":"gameReady/userID_font.png","name":"item_ID2"}},{"type":"Image","props":{"y":750,"x":167,"visible":false,"var":"qxzb","skin":"gameReady/qxzb.png","name":"qxzb"}},{"type":"Image","props":{"y":172,"x":505,"width":86,"var":"tcyx","skin":"gameReady/tc.png","name":"tcyx","height":76}}],"animations":[{"nodes":[{"target":22,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":22,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":22,"key":"visible","index":10},{"value":true,"tweenMethod":"linearNone","tween":false,"target":22,"key":"visible","index":30}]}},{"target":24,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":24,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":24,"key":"visible","index":10},{"value":false,"tweenMethod":"linearNone","tween":false,"target":24,"key":"visible","index":20}]}},{"target":25,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":25,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":25,"key":"visible","index":20},{"value":false,"tweenMethod":"linearNone","tween":false,"target":25,"key":"visible","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":27,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":27,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":27,"key":"visible","index":10},{"value":true,"tweenMethod":"linearNone","tween":false,"target":27,"key":"visible","index":30}]}},{"target":28,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":28,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":28,"key":"visible","index":10},{"value":false,"tweenMethod":"linearNone","tween":false,"target":28,"key":"visible","index":20}]}},{"target":29,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":29,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":29,"key":"visible","index":20},{"value":false,"tweenMethod":"linearNone","tween":false,"target":29,"key":"visible","index":30}]}}],"name":"ani2","id":2,"frameRate":24,"action":0}]};}
		]);
		return GameReadyUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.ani1=null;
		    this.fight=null;
		    this.gameStart=null;
		    this.roomFull=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);
		}

		STATICATTR$(GameStartUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":966},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"gameStart/bg.png","height":966}},{"type":"Image","props":{"y":130,"x":40,"skin":"gameStart/bt.png"}},{"type":"Image","props":{"y":603,"x":131,"width":337,"skin":"gameStart/kuang.png","height":261}}]},{"type":"Image","props":{"y":743,"x":202,"var":"fight","skin":"gameStart/yq.png","name":"fight"}},{"type":"Image","props":{"y":643,"x":202,"width":195,"var":"gameStart","skin":"gameStart/ksyx.png","height":67}},{"type":"Image","props":{"y":362,"x":116,"visible":false,"var":"roomFull","skin":"gameStart/roomfull.png","name":"roomFull","alpha":1},"compId":10}],"animations":[{"nodes":[{"target":10,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":5},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":25},{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":50}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":50}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};}
		]);
		return GameStartUI;
	})(View);