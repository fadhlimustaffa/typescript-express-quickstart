/**
 * Demo controller.
 * Controllers handle the API routes.
 * Controllers will then call services, which will contain the main logic.
 */
import * as express from "express";

import * as service from "../services/demo";

export function hello(req: express.Request, res: express.Response, next: express.NextFunction) {
    service.hello(req.query.name)
        .then(obj => res.status(200).json(obj))
        .catch(next);
}
