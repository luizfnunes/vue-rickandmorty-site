import { http } from '@/services/api.js';

export default {
    random:() => {
        let ids = Array.from({length: 4}, () => Math.floor(Math.random() * 100));
        return http.get('location/'+ids.join(','))
    },
    all:(page=1) => {
        return http.get('location/?page='+page)
    },
    get:(id) => {
        return http.get('location/'+id)
    },
}