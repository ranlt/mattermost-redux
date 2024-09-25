// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow

import type {GlobalState} from './store';

export type GetStateFunc = () => GlobalState;

export type GenericAction = {|
    type: string,
    data: any,
    error?: any
|};

type Thunk = (DispatchFunc, GetStateFunc) => Promise<ActionResult>; // eslint-disable-line no-use-before-define

type BatchAction = {
    type: 'BATCHING_REDUCER.BATCH';
    payload: Array<GenericAction>;
}

type Action = GenericAction | Thunk | BatchAction

export type ActionResult = {|data: any|} | {|error: any|};
export type DispatchFunc = (Action, ?GetStateFunc) => void;
export type ActionFunc = (DispatchFunc, GetStateFunc) => Promise<ActionResult>;
