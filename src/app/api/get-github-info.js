import { Octokit } from 'octokit';

const getGithubInfo = async (userName) => {
  const octokit = new Octokit({ auth: process.env.GITHUB_KEY });
  let res;
  res = await octokit.request('GET /users/{username}', {
    username: userName,
  });

  return res.data;
};

export default getGithubInfo;
