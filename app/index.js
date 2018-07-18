/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

// ================================
// START YOUR APP HERE
// ================================
const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))