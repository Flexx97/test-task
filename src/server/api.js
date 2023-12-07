export default {
    routes() {
        this.urlPrefix = import.meta.env.VITE_BACKEND_API

        this.post('/form', (schema, request) => {

            const data = JSON.parse(request.requestBody)

            switch (data.step) {
                case 0: return { next_step: 1, type: 'int' }
                case 1: return { next_step: 2, type: 'string' }
                case 2: return { next_step: 3, type: 'email' }
                case 3: return { next_step: 0, type: 'phone' }
                default: return 'something went wrong'
            }
        })
    }
}
