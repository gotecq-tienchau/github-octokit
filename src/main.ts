#!/usr/bin/env ts-node-esm

import arg from 'arg';
import 'dotenv/config';
import { spinner } from 'zx';
import { createRepoBranch } from './create-branch/index.js';
import { setDefaultBranch } from './default-branch/index.js';
import { deleteBranchName } from './delete-branch-name/index.js';
import { setProtectedBranch } from './protection-branch/index.js';

void (async () => {
    const mappingFunc: Record<
        string,
        { key: string; handler: () => Promise<void> }
    > = {
        'protect-branch': {
            key: 'protect-branch',
            handler: setProtectedBranch,
        },
        'create-branch': {
            key: 'create-branch',
            handler: createRepoBranch,
        },
        'delete-branch': {
            key: 'delete-branch',
            handler: deleteBranchName,
        },
        'default-branch': {
            key: 'default-branch',
            handler: setDefaultBranch,
        },
    };

    const { _ } = arg({});
    const args = [...new Set(_)];

    for (const arg of args) {
        const { key, handler } = mappingFunc[arg];
        switch (arg) {
            case key:
                await spinner(handler);
        }
    }
})();
