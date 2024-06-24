import { KarmaAuth } from "karma-auth.npm";
import { Permissions } from "karma-auth.npm/dist/src/types";
import { NextRequest, NextResponse } from "next/server";

const id: string | any = process.env.KARMA_AUTH_ID;
const secret: string | any = process.env.KARMA_AUTH_SECRET;

export async function POST(req:Request) {
    const body = await req.json();
    console.log(body)
    const { email, password, name, phone }:any = body;
    // const json = await req.json()
    // const { email, password, type } = json
    console.log(name,password)
    try {
        const karmaAuth = new KarmaAuth(id, secret);
        const user = await karmaAuth.Users.createUser({
            email,
            password,
            name,
            phone,
            details:""
        });

        console.log("User authenticated successfully:", user);
        return NextResponse.json({ user })
    } catch (error:any) {
        console.error("Error occurred:", error.message);
        console.error("Error details:", error.response?.data);
        return NextResponse.json({'eer':"eee"})
    }


}
