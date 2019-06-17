import Mack from 'mockjs'
const Random = Mack.Random

function subKinds() {
    var kinds = [
        {
            id: Random.guid(),
            cname: "创意",
            ename: "changyi",
            img: require("@/assets/imgs/kind/goods1.png"),
            subKinds: [{
                cname: "全部",
                id: Random.guid(),
            },
            {
                cname: "睡衣",
                id: Random.guid(),
            },
            {
                cname: "浴袍",
                id: Random.guid(),
            },
            {
                cname: "其他",
                id: Random.guid(),
            }
            ]
        },
        {
            id: Random.guid(),
            cname: "家居",
            ename: "jiaju",
            img: require("@/assets/imgs/kind/goods2.png"),
            subKinds: [{
                cname: "全部",
                id: Random.guid(),
            },
            {
                cname: "睡衣",
                id: Random.guid(),
            },
            {
                cname: "浴袍",
                id: Random.guid(),
            },
            {
                cname: "其他",
                id: Random.guid(),
            }
            ]
        },
        {
            id: Random.guid(),
            cname: "服饰",
            ename: "fushi",
            img: require("@/assets/imgs/kind/goods3.png"),
            subKinds: [{
                cname: "全部",
                id: Random.guid(),
            },
            {
                cname: "睡衣",
                id: Random.guid(),
            },
            {
                cname: "浴袍",
                id: Random.guid(),
            },
            {
                cname: "其他",
                id: Random.guid(),
            }
            ]
        },
        {
            id: Random.guid(),
            cname:Random.csentence(2),
            ename: "fushi",
            img: Random.image('340x121',Random.color()),
            subKinds: [{
                cname: "全部",
                id: Random.guid(),
            },
            {
                cname: "睡衣",
                id: Random.guid(),
            },
            {
                cname: "浴袍",
                id: Random.guid(),
            },
            {
                cname: "其他",
                id: Random.guid(),
            }
            ]
        },
        {
            id: Random.guid(),
            cname:Random.csentence(2),
            ename: "fushi",
            img: Random.image('340x121',Random.color()),
            subKinds: [{
                cname: "全部",
                id: Random.guid(),
            },
            {
                cname: "睡衣",
                id: Random.guid(),
            },
            {
                cname: "浴袍",
                id: Random.guid(),
            },
            {
                cname: "其他",
                id: Random.guid(),
            }
            ]
        },

    ]
    return kinds;
}
export default {
    subKinds
}