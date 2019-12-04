import aixos from 'axios'
const server= aixos.create({
    baseURL:'http://rap2api.taobao.org/app/mock/238759'
})
server.interceptors.request.use((config)=>{
    return config
})
server.interceptors.response.use(res=>{

    return res.data
})
export default server