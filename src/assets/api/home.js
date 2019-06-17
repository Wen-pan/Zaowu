
function getBannerImgs() {
    var imgs = [];
    imgs.push({
        id: 1,
        img: require('@/assets/imgs/home/swiper-1.png')
    })
    imgs.push({
        id: 2,
        img: require('@/assets/imgs/home/swiper-2.png')
    })
    imgs.push({
        id: 3,
        img: require('@/assets/imgs/home/swiper-3.png')
    })
    var promise = new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(imgs);
        }, 200)
    });
    return promise;
}

export default {
    getBannerImgs
}