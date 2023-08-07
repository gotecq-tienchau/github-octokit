import { Octokit } from '@octokit/core';
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods';
import 'dotenv/config';

const OctokitRest = Octokit.plugin(restEndpointMethods);
const octokit = new OctokitRest({ auth: process.env.GITHUB_AUTH_TOKEN });

export { octokit };
