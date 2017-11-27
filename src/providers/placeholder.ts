/**
 * Demo service provider.
 * Service providers handle 3rd-party API calls.
 */
import * as config from "config";
import * as webRequest from "web-request";

import * as model from "../models/placeholder";

/**
 * 3rd-party API call (jsonplaceholder).
 */
export async function thirdPartyApi(): Promise<model.IPlaceholder> {
    const url = config.get("provider.placeholder") as string + Math.ceil(Math.random() * 100);
    let response = await webRequest.json<any>(url) as model.IPlaceholder;
    console.log("Response:\n", response);
    return response;
}
