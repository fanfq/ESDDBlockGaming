// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

        block: {
            default: null,
            type: cc.SpriteFrame
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        // 加载 SpriteFrame
        var self = this;
        cc.loader.loadRes("imgs/icon", cc.SpriteFrame, function (err, spriteFrame) {
            self.node.getComponent(cc.Sprite).block = spriteFrame;
        });

        //this.self.addChild(spriteFrame);
        parentNode.addChild(self);
    },

    start () {
    },

    //update (dt) {},
});
