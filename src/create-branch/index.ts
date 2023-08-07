import chalk from 'chalk';
import { octokit } from '../config.js';
import { logger } from '../utils/index.js';
import {
    DefaultNewBranchConfig,
    NewBranchConfig,
    NewBranchListConfig,
} from './config.js';

const createNewBranchList = async ({
    repo,
    sha,
    owner,
    ref: newBranchList,
}: NewBranchConfig) => {
    for (const branchName of newBranchList) {
        let branchRefSHA = typeof sha === 'string' ? sha : '';
        if (typeof sha === 'object') {
            branchRefSHA = sha?.[branchName] ?? sha?.['default'];
        }

        try {
            console.log(
                chalk.green(
                    `Create branch ${branchName} on repo ${repo}. SHA[${branchRefSHA}}`
                )
            );
            logger.info({
                owner: owner,
                ref: `refs/heads/${branchName}`,
                repo: repo,
                sha: branchRefSHA,
            });

            const response = await octokit.rest.git.createRef({
                owner: owner,
                ref: `refs/heads/${branchName}`,
                repo: repo,
                sha: branchRefSHA,
            });
            console.log(chalk.blueBright(`SUCCESS ${response.status}`));

            logger.info(response);
        } catch (error) {
            console.log(chalk.red(`ERROR ${error?.status}`));
            logger.error(error);
        }
    }
};

const createRepoBranch = async () => {
    for (const newBranchInfo of NewBranchListConfig) {
        const newBranch = {
            ...DefaultNewBranchConfig,
            ...newBranchInfo,
        };

        await createNewBranchList(newBranch);
    }
};

export { createRepoBranch };
