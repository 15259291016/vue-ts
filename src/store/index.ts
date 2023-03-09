import {InjectionKey} from "vue";
import {createStore, useStore as baseUseStore, Store} from 'vuex'

export interface State {
    count: number
    Roles: string
    username:string
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 0,
        Roles:'',
        username:''
    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}