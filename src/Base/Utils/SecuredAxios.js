import axios from 'axios';
import * as Constants from "../Backend/Constants"

export default axios.create({
    baseURL: Constants.baseApiURL,
    headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRpaGFubmljbyIsImVtYWlsIjoidGloYW4tbmljb0BnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiZmlyc3ROYW1lIjoiVGloYW4tTmljbyIsImxhc3ROYW1lIjoiUGF4dG9uIiwidXNlcklEIjoiNzUxMjMzNDctRjhENC00RkE0LTgyNjktQUU5QTk1OTlGNjhEIiwiZXhwIjoxNjY3MTIyMjMzLjY3NTYzOH0.TYe40Jgs4chEFYePw658enbSV3sCehp5Izt4SCB6oM0",
    }
});