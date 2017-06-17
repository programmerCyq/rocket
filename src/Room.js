/**
* name 
*/
        function Room() {
            this.reset();
        }
        var _proto = Room.prototype;

        _proto.reset = function(){
            this.room= {};
            this.status = "normal";
        };

         _proto.showOwner = function(){
            if(!this.room.users.roomsOwner && this.roomsOwnerView){
                this.roomsOwnerView.removeSelf();
                return;
            };
            this.roomsOwnerView = new Laya.Image(this.room.users.roomsOwner.Avatar);
            this.roomsOwnerView.x = 15;
            this.roomsOwnerView.y = 15;
            Game_ready.layer.houseOwner.addChild(this.roomsOwnerView);
            if(user.Identity == "roomsOwner"){
                Game_ready.layer.ani1.play();
                util.showBtn(Game_ready.layer.invite);
            };
            if(user.Identity == "roomsOwner"&& this.room.users.roomer && this.room.users.roomer.status == "readying"){
                util.showBtn(Game_ready.layer.game_start);
            }
        }

        _proto.showRoomer = function(){
            if(!this.room.users.roomer && this.RoomerView){
                this.RoomerView.removeSelf();
                return;
            };
            this.RoomerView = new Laya.Image(this.room.users.roomer.Avatar);
            this.RoomerView.x = 15;
            this.RoomerView.y = 15; 
            Game_ready.layer.roomer.addChild(this.RoomerView);
            Game_ready.layer.invite.visible = false ;
            Game_ready.layer.addFriend.visible =false;
            if(user.Identity == "roomsOwner" && this.room.users.roomer &&this.room.users.roomer.status != "readying"){
                util.showBtn(Game_ready.layer.waitReady);
            }
            if(user.Identity == "roomer"){
                util.showBtn(Game_ready.layer.roomerReady);
            }
        };
        _proto.updataRoomOwner = function(){
            this.showOwner();
            this.showRoomer();
        }

        _proto.RoomerDie = function(){
            Gameing.layer.ani5.stop();
            Gameing.layer.plane_blue.visible = false;
        }

        _proto.RoomsOwnerDie = function(){
            Gameing.layer.ani4.stop();
            Gameing.layer.plane_red.visible = false;
        }