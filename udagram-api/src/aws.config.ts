import AWS = require('aws-sdk')
import { config } from './common/database.config'

// Initialize dev environment
const c = config.dev