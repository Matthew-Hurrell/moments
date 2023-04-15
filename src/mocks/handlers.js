import { rest } from "msw"


const baseURL = "https://django-rest-api-ci.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(ctx.json({
            pk: 1,
            username: "Matthew",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 1,
            profile_image: "https://res.cloudinary.com/dihur97qf/image/upload/v1/media/images/Code_Institute_otlzff"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];