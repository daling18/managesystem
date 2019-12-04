import server from './axios'

export const getListData = ()=>{

     
    return server({
        method:'post',
        url:'/api/list'
    })

}
// console.log(getListData())