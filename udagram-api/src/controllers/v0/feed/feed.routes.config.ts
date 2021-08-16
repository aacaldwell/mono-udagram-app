import { CommonRoutesConfig } from "../../../common/common.routes.config"
import express from 'express'

export class FeedRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'FeedRoutes')
    }

    configureRoutes() {
        this.app.route(`/feed`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send("FEED")
            })
        return this.app
    }
}