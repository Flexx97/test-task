import axios from "axios";

export function useFetch() {
    const response = axios.get('mock')

    return response
}
