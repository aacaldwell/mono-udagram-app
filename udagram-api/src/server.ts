import express from 'express'
import * as http from 'http'
import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import cors from 'cors'
import debug from 'debug'
import { CommonRoutesConfig } from './common/common.routes.config'
import { FeedRoutes } from './controllers/v0/feed/feed.routes.config'
import { UserRoutes } from './controllers/v0/user/user.routes.config'
import { IndexRoutes } from './controllers/v0/index.router'

// Initialize the Expression app
const app: express.Application = express()
// Configure network port
const server: http.Server = http.createServer(app)
const port = 8080
// Configure common routes
const routes: Array<CommonRoutesConfig> = []
// Configure debugger
const debugLog: debug.IDebugger = debug('app')

// Use json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Use cors
app.use(cors())

// Setup logging options
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
}

if (!process.env.DEBUG) {
    loggerOptions.meta = false
}

// Use express-winston    
app.use(expressWinston.logger(loggerOptions))

// Pull in the routes
routes.push(new IndexRoutes(app))
routes.push(new FeedRoutes(app))
routes.push(new UserRoutes(app))

// Run the server
const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

// Listen for the port    
server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(runningMessage);
});