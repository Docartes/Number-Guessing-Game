#!/usr/bin/env node

import {program} from 'commander'
import guess from './guessing_service.js'


program.command('start')
	.action(() => {
		guess()
	})

program.parse()