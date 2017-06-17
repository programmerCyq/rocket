var win_w=600;
var win_h=966;
var player,
    backLayer,loadingTip,
    ws,roomID,Game_ready,
    Game_start,Game_over_one,
    Game_over_double,user,Game_bg,
    room,Util,
    Gameing,plane,socket,
    score;

var startLayer,ingLayer,overOneLayer,overDoubleLayer;
var stopGame = false;
    (function(GameInit){
        Laya.init(win_w,win_h,Laya.WebGL);
        Laya.Stat.show(0,0);
        Laya.stage.alignH=Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV=Laya.Stage.ALIGN_TOP;
        Laya.stage.scaleMode = 'showall';
        Laya.stage.scaleMode = 'exactfit';
        Laya.stage.screenMode = "none";
        Laya.stage.bgColor = "#000000";
        backLayer = new Laya.Sprite();
        backLayer.width = win_w;
        backLayer.height = win_h;
        backLayer.pos(0,0);
        Laya.stage.addChild(backLayer);
        loadUI();  
    })()

 function loadUI(){
        var imgArray = [
            {url:"res/atlas/comp.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/bang.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/fire1.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/fire2.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/gameReady.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/gameStart.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/gameoverdouble.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/gameoverone.json",type:Laya.Loader.ATLAS},
            {url:"comp/red_1.png",type:Laya.Loader.IMAGE},
            {url:"comp/red_2.png",type:Laya.Loader.IMAGE},
            {url:"comp/blue_1.png",type:Laya.Loader.IMAGE},
            {url:"comp/blue_2.png",type:Laya.Loader.IMAGE},
        ]
        Laya.loader.load(imgArray,Laya.Handler.create(this,onLoadUI),Laya.Handler.create(this,onProgress,null,false));
        lodaTextTip = new Laya.Text();
        lodaTextTip.text = "正在加载中...";
        lodaTextTip.color = "#ffffff";
        lodaTextTip.fontSize = 30;
        lodaTextTip.pos((win_w-lodaTextTip.width)/2,win_h/2);
        backLayer.addChild(lodaTextTip);
    }
    function onProgress(progress){
        lodaTextTip.text = "";
        lodaTextTip.text = "正在加载中..."+Math.floor(progress*100)+"%";
    }
    function onLoadUI(){
        user = {Avatar:"comp/tx.png",nickName:"jack"};
        util = new Util();
        room = new Room();
        lodaTextTip.removeSelf();
        Game_start = new GameStart();
    }