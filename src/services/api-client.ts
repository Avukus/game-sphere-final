import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'1ead44a24b8548b4875600cafca4ab82'
    }
})