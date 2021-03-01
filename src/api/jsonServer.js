import axios from 'axios'

// cd jsonserver  -> npm run tunnel, every so often
export default axios.create({
    baseURL: ' http://8e5f3d74168d.ngrok.io'
})