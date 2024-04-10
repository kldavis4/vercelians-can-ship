type ReqHeaders = {
  Authorization?: string;
};

let reqHeaders: ReqHeaders = {};

export async function getGithubProfile(yourGithubUsername: string) {
  if (!yourGithubUsername) {
    return false;
  }
  const github_profile_url =
    "https://api.github.com/users/" + yourGithubUsername;
  const res = await fetch(github_profile_url, {
    method: "GET",
    headers: reqHeaders,
    next: {
      revalidate: 3,
    },
  });
  const githubProfile = await res.json();
  // console.log(githubProfile);
  if (githubProfile.message === "Not Found") {
    return "not-found";
  }
  if (!githubProfile.name && githubProfile.login) {
    githubProfile.name = githubProfile.login;
  }
  return githubProfile;
}

export async function getData(url: string) {
  const res = await fetch(url, {
    method: "GET",
    headers: reqHeaders,
    next: {
      revalidate: 3,
    },
  });
  try {
    return await res.json();
  } catch (e) {
    console.warn(e)
  }
  return { error: "Failed to fetch data" };
}
