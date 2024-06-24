import { KarmaAuth } from "karma-auth.npm";
import { Permissions } from "karma-auth.npm/dist/src/types";
import { NextRequest, NextResponse } from "next/server";

const id: string | any = process.env.KARMA_AUTH_ID;
const secret: string | any = process.env.KARMA_AUTH_SECRET;
const karmaAuth = new KarmaAuth(id, secret);

export async function POST(req: NextRequest) {
    const body = await req.json();
    const email = body.email;
    const password = body.password;
    try {
        const token = await karmaAuth.Users.authenticateUserByEmail(email,password);
        console.log("User authenticated successfully. Token:", token);
        return NextResponse.json({ token })
    } catch (error:any) {
        console.error("Error occurred:", error.message);
        console.error("Error details:", error.response?.data);
    }


}
