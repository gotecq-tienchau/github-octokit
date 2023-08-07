import { octokit } from '../config.js';
import { logger } from '../utils/index.js';
import { DefaultBranchConfig, DefaultBranchListConfig } from './config.js';
import chalk from 'chalk';

const setDefaultBranch = async () => {
    for (const repoData of DefaultBranchListConfig) {
        const { owner, repo, defaultBranch } = {
            ...DefaultBranchConfig,
            ...repoData,
        };
        try {
            console.log(
                chalk.blue('UPDATING'),
                `default branch ${defaultBranch} on ${repo}`
            );
            const updateDefaultBranchResponse = await octokit.rest.repos.update(
                {
                    owner: owner,
                    repo: repo,
                    default_branch: defaultBranch,
                }
            );

            console.log(
                chalk.green('SUCCESS'),
                updateDefaultBranchResponse.status
            );
            logger.info(updateDefaultBranchResponse);
        } catch (error) {
            console.log(chalk.red('ERROR'), error?.status);
            logger.error(error);
        }
    }
};

export { setDefaultBranch };
