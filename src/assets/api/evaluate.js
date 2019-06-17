function getEvaluateImgs() {
    var imgs = [];
    imgs.push({
        id: 1,
        img: require('@/assets/imgs/kind/wares1.png')
    })
    imgs.push({
        id: 2,
        img: require('@/assets/imgs/kind/wares2.png')
    })
    imgs.push({
        id: 3,
        img: require('@/assets/imgs/kind/wares3.png')
    })
    var promise = new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(imgs);
        }, 200)
    });
    return promise;
}

export default {
    getEvaluateImgs
}