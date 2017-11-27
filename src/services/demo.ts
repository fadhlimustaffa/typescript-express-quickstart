/**
 * Demo service.
 * Services contain the main logic.
 */
import * as jsonPlaceholder from "../providers/placeholder";
import * as jsonPlaceholderModel from "../models/placeholder";
import * as model from "../models/demo";

export async function hello(name: string): Promise<model.IDemo> {
    if (name === undefined) {
        name = "stranger";
    }
    // Call a provider which then calls a 3rd-party API.
    let response = await jsonPlaceholder.thirdPartyApi() as jsonPlaceholderModel.IPlaceholder;

    return {
        greeting: "Hello " + name + "!",
        random: response.body
    } as model.IDemo;
}
