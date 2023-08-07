export type NewBranchConfig = {
    owner?: string;
    repo: string;
    ref?: string[];
    sha: string | Record<'default' | string, string>;
};

const DefaultNewBranchConfig: Pick<NewBranchConfig, 'owner' | 'ref'> = {
    owner: 'gotecq',
    ref: [
        // 'develop',
        // 'staging',
        // 'certify',
        // 'pre-production',
        // 'production',
        // 'hotfix',
        // 'fast-track',
    ],
};

const NewBranchListConfig: NewBranchConfig[] = [
    // {
    //     repo: 'fe.web.automatic-report',
    //     sha: '1f7a78bf69df998280de3620f4892d16cb4a6299',
    // },
    // {
    //     repo: 'fe.web.contract-administration',
    //     sha: 'd8c51eee3eab4f1dba22daff05694017e7089a56',
    // },
    // {
    //     repo: 'fe.web.contract-management',
    //     sha: '14ef37c1b03abdf0adecdbeb3efb4e2163052a37',
    // },
    // {
    //     repo: 'fe.web.health-plan',
    //     sha: 'c5e42a79ae22941754b32aa74717499b8ec3a2c5',
    // },
    // {
    //     repo: 'fe.web.contact-browser',
    //     sha: '6f820dacf44bc2afd9f3425d397c837047b0a9e1',
    // },
    // {
    //     repo: 'fe.web.document-management',
    //     sha: '511e49d786cfca0c6e7c92238d3add8b9be5309b',
    // },
    // {
    //     repo: 'fe.web.datapack-management',
    //     sha: '09799c3197d36d5f271fcb6e99d410001732e903',
    // },
    // {
    //     repo: 'fe.web.ehr-management',
    //     sha: 'cf884b8bd407ea7f0579fadc1fbe4666772906c9',
    // },
    // {
    //     repo: 'fe.web.tecq-desktop',
    //     sha: 'bc315c709937235bebf677824b1d22c7f4f15ae1',
    // },
    // {
    //     repo: 'fe.web.member-account-management',
    //     sha: '2445d04152b4049f8943d825028a3e28b1381f73',
    // },
    // {
    //     repo: 'fe.web.member-engagement',
    //     sha: 'b4737ca2fa799921ec0df47f46b9000c09becf5b',
    // },
    // {
    //     repo: 'fe.web.member-management',
    //     sha: 'cee931de0499c197467be9560c3fcbd89ace4e02',
    // },
    // {
    //     repo: 'fe.web.mail-merge',
    //     sha: '3832f148a6548c40d5054dc9ca313e31a29972c1',
    // },
    // {
    //     repo: 'fe.web.notification-center',
    //     sha: 'aa888d9bcb901a938e4bbed87927cead776dd283',
    // },
    // {
    //     repo: 'fe.web.organization-info',
    //     sha: '296cde0fb1973c42a0eb68e52b11abc9586e545b',
    // },
    // {
    //     repo: 'fe.web.pcp-dashboard',
    //     sha: '866339649fe685ccc57bf9b5ba0bfc349eb4c5f7',
    // },
    // {
    //     repo: 'fe.web.provider-management',
    //     sha: 'ce8d52623746af9b0f6c55404536846ad251829f',
    // },
    // {
    //     repo: 'fe.web.quality-management',
    //     sha: '1439d4d6992ca749bdfae57ee1cfe827de6e572d',
    // },
    // {
    //     repo: 'fe.web.provider-roster',
    //     sha: 'fa6a1be36029c75dc7fd047c874ea8415b01b057',
    // },
    // { repo: 'fe.web.snippet', sha: '537850ef6e60a3a8ca4035542b104946da4278ed' },
    // {
    //     repo: 'fe.web.system-configuration',
    //     sha: '8953619acbd67921e5b8cc69b4fc5da040c7193f',
    // },
    // {
    //     repo: 'fe.web.contact-client-chat',
    //     sha: 'e62bee26929fe4a6262b16e88266dedcb162f82a',
    // },
    // {
    //     repo: 'fe.web.user-management',
    //     sha: '91909217dd14f552ae1e35f0d0d047d8a1e74aec',
    // },
    // {
    //     repo: 'fe.web.work-administration',
    //     sha: 'ec6e4d00f6f5ed4dba47711a3720050ed60aeb62',
    // },
    {
        repo: 'fe.web.work-management',
        sha: 'b432a7ad29204c68d3651cabe1d6b98bca9c345d',
    },
];

export { DefaultNewBranchConfig, NewBranchListConfig };
