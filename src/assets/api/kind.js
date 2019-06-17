import kindImg from '@/assets/mock/mock.js'
function getListimgs(){
    var kindImgapi= kindImg.subKinds()
    var promise = new Promise((reslove, reject) => {
        reslove(kindImgapi)
    });
    return promise;
}
export default {
    getListimgs
}
