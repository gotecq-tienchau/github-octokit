export type DeleteBranchConfig = {
    owner?: string;
    repo: string;
    branch?: string[];
};

const DefaultDeleteBranchConfig: Pick<DeleteBranchConfig, 'owner' | 'branch'> =
    {
        owner: 'gotecq',
        branch: [
            // 'hotfix'
        ],
    };

const DeleteBranchListConfig: DeleteBranchConfig[] = [
    {
        repo: 'fe.web.contract-administration',
    },
    {
        repo: 'fe.web.contract-management',
    },
    {
        repo: 'fe.web.ehr-management',
    },
    {
        repo: 'fe.web.member-management',
    },
    {
        repo: 'fe.web.provider-management',
    },
    {
        repo: 'fe.web.quality-management',
    },
    {
        repo: 'fe.web.provider-roster',
    },
    {
        repo: 'fe.web.user-management',
    },
    {
        repo: 'fe.web.work-management',
    },
];

export { DefaultDeleteBranchConfig, DeleteBranchListConfig };
