export type defaultBranchConfig = {
    owner?: string;
    repo: string;
    defaultBranch?: string;
};

const DefaultBranchConfig: Pick<
    defaultBranchConfig,
    'owner' | 'defaultBranch'
> = {
    owner: 'gotecq',
    defaultBranch: 'production',
};

const DefaultBranchListConfig: defaultBranchConfig[] = [
    {
        repo: 'fe.web.automatic-report',
    },
    {
        repo: 'fe.web.contract-administration',
    },
    {
        repo: 'fe.web.contract-management',
    },
    {
        repo: 'fe.web.health-plan',
    },
    {
        repo: 'fe.web.contact-browser',
    },
    {
        repo: 'fe.web.document-management',
    },
    {
        repo: 'fe.web.datapack-management',
    },
    {
        repo: 'fe.web.ehr-management',
    },
    {
        repo: 'fe.web.tecq-desktop',
    },
    {
        repo: 'fe.web.member-account-management',
    },
    {
        repo: 'fe.web.member-engagement',
    },
    {
        repo: 'fe.web.member-management',
    },
    {
        repo: 'fe.web.mail-merge',
    },
    {
        repo: 'fe.web.notification-center',
    },
    {
        repo: 'fe.web.organization-info',
    },
    {
        repo: 'fe.web.pcp-dashboard',
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
        repo: 'fe.web.snippet',
    },
    {
        repo: 'fe.web.system-configuration',
    },
    {
        repo: 'fe.web.contact-client-chat',
    },
    {
        repo: 'fe.web.user-management',
    },
    {
        repo: 'fe.web.work-administration',
    },
    {
        repo: 'fe.web.work-management',
    },
];

export { DefaultBranchConfig, DefaultBranchListConfig };
