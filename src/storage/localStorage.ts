import {
    CheckDataType
} from '@/utils';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

class LocalStorage {
    static setItem(key: string, value: string) {
        if (CheckDataType.isArray(value) || CheckDataType.isObject(value)) {
            value = JSON.stringify(value)
        }

        // 客户端渲染判断
        if (ExecutionEnvironment.canUseDOM) {
            localStorage.setItem(key, value);
        }
    }
    static getItem(key: string) {
        // 客户端渲染判断
        if (ExecutionEnvironment.canUseDOM) {
            return localStorage.getItem(key);
        }
    }
    static removeItem(key: string) {
           // 客户端渲染判断
        if (ExecutionEnvironment.canUseDOM) {
            localStorage.removeItem(key);
        }
    }
}

export default LocalStorage;



export {
    LocalStorage
}