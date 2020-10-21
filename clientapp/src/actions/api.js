import axios from "axios";

const baseUrl = "http://localhost:8761/api/";

export default {
    // functions for each controller in .NET CORE
    comment(url = baseUrl+"comment/"){
        return {
            // for comment service
            fetchAll: () => axios.get(url),
            create: (newRecord) => axios.post(url+"publish", newRecord),
            fetchById: (id) => axios.get(url+id),
            update: (updatedRecord) => axios.put(url+"edit", updatedRecord),
            delete: (id) => axios.delete(url+"unpublish/"+id)
        }
    }
}

export default {
    comment(url = baseUrl+"user/"){
        return {
            // for comment service
            fetchAll: () => axios.get(url),
            create: (newRecord) => axios.post(url+"register", newRecord),
            fetchById: (id) => axios.get(url+id),
            update: (updatedRecord) => axios.put(url+"edit", updatedRecord),
            delete: (id) => axios.delete(url+"unregister/"+id)
        }
    }
}