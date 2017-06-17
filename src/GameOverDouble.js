/*
* name;
*/
    function GameOverDouble() {
        this.reset();
    }
    var _proto = GameOverDouble.prototype;
    _proto.reset = function(type){
        overDoubleLayer = new Laya.Sprite();
        backLayer.addChild(overDoubleLayer);
        this.layer = new GameOverDoubleUI();
        overDoubleLayer.addChild(this.layer);
        console.log(room.roomsOwner.score,room.roomer.score)
        //房主的分数
        this.RoomsOwnerHundredsNum = Math.floor(room.roomsOwner.score / 100);
        this.RoomsOwnerDecadeNum = Math.floor((room.roomsOwner.score - (this.RoomsOwnerHundredsNum*100)) / 10);
        this.RoomsOwnerUnitNum = room.roomsOwner.score - (this.RoomsOwnerHundredsNum*100+this.RoomsOwnerDecadeNum *10);
        //房客的分数
        this.RoomerHundredsNum = Math.floor(room.roomer.score / 100);
        this.RoomerDecadeNum = Math.floor((room.roomer.score - (this.RoomerHundredsNum*100)) / 10);
        this.RoomerUnitNum = room.roomer.score - (this.RoomerHundredsNum*100+this.RoomerDecadeNum *10);
        console.log("owner"+this.RoomsOwnerHundredsNum,this.RoomsOwnerDecadeNum,this.RoomsOwnerUnitNum);
        console.log("roomer"+this.RoomerHundredsNum,this.RoomerDecadeNum,this.RoomerUnitNum);
        console.log(this.layer.roomsOwner_score._childs,this.layer.roomer_score._childs)
        this.layer.roomsOwner_score._childs[0].index = this.RoomsOwnerHundredsNum;
        this.layer.roomsOwner_score._childs[1].index = this.RoomsOwnerDecadeNum;
        this.layer.roomsOwner_score._childs[2].index = this.RoomsOwnerUnitNum;
        this.layer.roomer_score._childs[0].index = this.RoomerHundredsNum;
        this.layer.roomer_score._childs[1].index = this.RoomerDecadeNum;
        this.layer.roomer_score._childs[2].index = this.RoomerUnitNum;
        this.layer.goBack.on(Laya.Event.MOUSE_DOWN,this,this.GoBack)
    }


    //返回主页
    _proto.GoBack=function(){
        ws.emit("goback");
    }
