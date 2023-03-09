// import axios,{AxiosRequestConfig,Method} from "axios"
import router from "@/router";
import axios from "axios/index";

const toLogin = ()=>{
    router.replace({
        name:'login'
    })
}
export default axios;