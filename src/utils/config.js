export const removeLocalstorage = (key) => localStorage.removeItem(key)

export const getLocalStorage = (key) => {
    try {
        if(JSON.parse(localStorage.getItem(key))){
            return JSON.parse(localStorage.getItem(key))
        }
    } catch (error) {
        // Trường hợp người dùng sửa localStorage dẫn đến sai lỗi JSON.parse
        removeLocalstorage(key)
        return null
    }
}

export const setLocalStorage = (key,data) => localStorage.setItem(key, JSON.stringify(data))