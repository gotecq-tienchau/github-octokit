import { octokit } from '../config.js';
import { logger } from '../utils/index.js';
import {
    DefaultDeleteBranchConfig,
    DeleteBranchConfig,
    DeleteBranchListConfig,
} from './config.js';
import chalk from 'chalk';

const getBranchList = async ({
    repo,
    branch: branchList,
    owner,
}: DeleteBranchConfig) => {
    const branchListData: { ref: string; sha: string }[] = [];
    for (const branch of branchList) {
        try {
            const { data: listBranchResponse } =
                await octokit.rest.git.listMatchingRefs({
                    owner: owner,
                    repo: repo,
                    ref: `heads/${branch}`,
                });

            const listBranchTransform = listBranchResponse.map(
                ({ ref, object }) => ({
                    ref: ref.replace('refs/', ''),
                    sha: object.sha,
                })
            );
            console.log(
                chalk.blue('GETTING'),
                `branch ${branch} on repo ${repo}`
            );

            branchListData.push(...listBranchTransform);
        } catch (error) {
            console.log('Error when getting deleled branch info');
        }
    }
    return branchListData;
};

const deleteBranch = async ({
    owner,
    ref,
    repo,
}: DeleteBranchConfig & { ref: string; sha: string }) => {
    try {
        console.log(chalk.green('DELETE'), `${ref} on ${repo}`);

        const deleteBranchResponse = await octokit.rest.git.deleteRef({
            owner: owner,
            ref: ref,
            repo: repo,
        });

        console.log(chalk.blue(`SUCCESS ${deleteBranchResponse.status}`));
        logger.info(deleteBranchResponse);
    } catch (error) {
        console.log(chalk.red('ERROR'), ` when deleting ${ref}`);
        logger.error(error);
    }
};

const deleteBranchName = async () => {
    const deleteBranchListOnRepo: Record<
        string,
        { repo: DeleteBranchConfig; branchList: { ref: string; sha: string }[] }
    > = {};

    for (const branch of DeleteBranchListConfig) {
        const deletedRepoBranch = { ...DefaultDeleteBranchConfig, ...branch };
        const branchList = await getBranchList(deletedRepoBranch);
        deleteBranchListOnRepo[deletedRepoBranch.repo] = {
            repo: deletedRepoBranch,
            branchList,
        };
    }

    for (const [, { repo, branchList }] of Object.entries(
        deleteBranchListOnRepo
    )) {
        for (const branch of branchList) {
            deleteBranch({ ...repo, ...branch });
        }
    }
};

export { deleteBranchName };
