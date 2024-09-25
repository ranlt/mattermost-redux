// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow

import {combineReducers} from 'redux';

import channels from './channels';
import files from './files';
import general from './general';
import posts from './posts';
import teams from './teams';
import users from './users';
import preferences from './preferences';
import integrations from './integrations';
import emojis from './emojis';
import admin from './admin';
import jobs from './jobs';
import search from './search';
import roles from './roles';
import schemes from './schemes';

export default combineReducers({
    channels,
    files,
    general,
    posts,
    teams,
    users,
    preferences,
    integrations,
    emojis,
    admin,
    jobs,
    search,
    roles,
    schemes,
});
