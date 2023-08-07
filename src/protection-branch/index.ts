import { octokit } from '../config.js';
import { logger } from '../utils/index.js';
import {
    DefaultProtectedBranchConfig,
    ProtectedBranchRepoList,
} from './config.js';
import chalk from 'chalk';

const setProtectedBranch = async () => {
    for (const protectedBranchRepoConfig of ProtectedBranchRepoList) {
        const { branchList, ...protectedBranchRepo } = {
            ...protectedBranchRepoConfig,
            ...DefaultProtectedBranchConfig,
        };

        for (const branch of branchList) {
            const {
                repo,
                enforceAdmins,
                owner,
                requiredPullRequestReviews: { requiredApprovingReviewCount },
                requiredStatusChecks,
                restrictions,
            } = protectedBranchRepo;

            try {
                console.log(
                    chalk.blue('UPDATING'),
                    `protection branch ${branch} on repo ${repo}`
                );

                const updateProtectedBranchResponse =
                    await octokit.rest.repos.updateBranchProtection({
                        owner: owner,
                        repo: repo,
                        branch: branch,
                        enforce_admins: enforceAdmins,
                        required_pull_request_reviews: {
                            required_approving_review_count:
                                requiredApprovingReviewCount,
                        },
                        required_status_checks: requiredStatusChecks,
                        restrictions: restrictions,
                    });

                console.log(
                    chalk.green('SUCCESS', updateProtectedBranchResponse.status)
                );
                logger.info(updateProtectedBranchResponse);
            } catch (error) {
                console.log(chalk.red('ERROR'), error?.status);
                console.log(error);
            }
        }
    }
};

export { setProtectedBranch };
