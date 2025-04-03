import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  readonly repositories: Repository[] = [
    {
      id: 132369714,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzIzNjk3MTQ=',
      name: '80-20-running',
      full_name: 'alcfeoh/80-20-running',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/80-20-running',
      description:
        'A small progressive web app to help with 80/20 running training',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/80-20-running',
      forks_url: 'https://api.github.com/repos/alcfeoh/80-20-running/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/80-20-running/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/80-20-running/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/80-20-running/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/80-20-running/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/80-20-running/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/80-20-running/deployments',
      created_at: '2018-05-06T19:32:42Z',
      updated_at: '2018-06-30T05:29:23Z',
      pushed_at: '2018-06-30T05:29:21Z',
      git_url: 'git://github.com/alcfeoh/80-20-running.git',
      ssh_url: 'git@github.com:alcfeoh/80-20-running.git',
      clone_url: 'https://github.com/alcfeoh/80-20-running.git',
      svn_url: 'https://github.com/alcfeoh/80-20-running',
      homepage: undefined,
      size: 571,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 169350437,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNjkzNTA0Mzc=',
      name: 'advanced-modern-js',
      full_name: 'alcfeoh/advanced-modern-js',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/advanced-modern-js',
      description: 'Advanced Modern JS class contents',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/advanced-modern-js',
      forks_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/teams',
      hooks_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/advanced-modern-js/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/advanced-modern-js/deployments',
      created_at: '2019-02-06T03:31:22Z',
      updated_at: '2020-05-05T18:04:11Z',
      pushed_at: '2020-05-05T18:04:09Z',
      git_url: 'git://github.com/alcfeoh/advanced-modern-js.git',
      ssh_url: 'git@github.com:alcfeoh/advanced-modern-js.git',
      clone_url: 'https://github.com/alcfeoh/advanced-modern-js.git',
      svn_url: 'https://github.com/alcfeoh/advanced-modern-js',
      homepage: undefined,
      size: 94,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 1,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 45076107,
      node_id: 'MDEwOlJlcG9zaXRvcnk0NTA3NjEwNw==',
      name: 'ajs-weather-migration',
      full_name: 'alcfeoh/ajs-weather-migration',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/ajs-weather-migration',
      description:
        'A sample project used to showcase migration from Angular 1.3 to Angular 2',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/ajs-weather-migration',
      forks_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/teams',
      hooks_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/ajs-weather-migration/deployments',
      created_at: '2015-10-27T23:19:36Z',
      updated_at: '2016-05-06T19:45:34Z',
      pushed_at: '2016-10-25T23:49:11Z',
      git_url: 'git://github.com/alcfeoh/ajs-weather-migration.git',
      ssh_url: 'git@github.com:alcfeoh/ajs-weather-migration.git',
      clone_url: 'https://github.com/alcfeoh/ajs-weather-migration.git',
      svn_url: 'https://github.com/alcfeoh/ajs-weather-migration',
      homepage: undefined,
      size: 115,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 2,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'gpl-2.0',
        name: 'GNU General Public License v2.0',
        spdx_id: 'GPL-2.0',
        url: 'https://api.github.com/licenses/gpl-2.0',
        node_id: 'MDc6TGljZW5zZTg=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 2,
      open_issues: 0,
      watchers: 1,
      default_branch: '1.5_2-beta',
    },
    {
      id: 563402817,
      node_id: 'R_kgDOIZTYQQ',
      name: 'alcfeoh',
      full_name: 'alcfeoh/alcfeoh',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/alcfeoh',
      description: 'Config files for my GitHub profile.',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/alcfeoh',
      forks_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/forks',
      keys_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/tags',
      blobs_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/languages',
      stargazers_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/subscription',
      commits_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/issues{/number}',
      pulls_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/alcfeoh/alcfeoh/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/alcfeoh/deployments',
      created_at: '2022-11-08T14:40:35Z',
      updated_at: '2022-11-08T14:40:35Z',
      pushed_at: '2024-01-09T20:08:44Z',
      git_url: 'git://github.com/alcfeoh/alcfeoh.git',
      ssh_url: 'git@github.com:alcfeoh/alcfeoh.git',
      clone_url: 'https://github.com/alcfeoh/alcfeoh.git',
      svn_url: 'https://github.com/alcfeoh/alcfeoh',
      homepage: 'https://github.com/alcfeoh',
      size: 3,
      stargazers_count: 0,
      watchers_count: 0,
      language: undefined,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['config', 'github-config'],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 132698085,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzI2OTgwODU=',
      name: 'angular',
      full_name: 'alcfeoh/angular',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/angular',
      description: 'One framework. Mobile & desktop.',
      fork: true,
      url: 'https://api.github.com/repos/alcfeoh/angular',
      forks_url: 'https://api.github.com/repos/alcfeoh/angular/forks',
      keys_url: 'https://api.github.com/repos/alcfeoh/angular/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/angular/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/angular/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/angular/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/angular/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/angular/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/angular/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/angular/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/angular/tags',
      blobs_url: 'https://api.github.com/repos/alcfeoh/angular/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/angular/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/angular/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/alcfeoh/angular/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/angular/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/alcfeoh/angular/languages',
      stargazers_url: 'https://api.github.com/repos/alcfeoh/angular/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/angular/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/angular/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/angular/subscription',
      commits_url: 'https://api.github.com/repos/alcfeoh/angular/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/angular/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/angular/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/angular/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/angular/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/angular/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/angular/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/angular/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/alcfeoh/angular/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/angular/issues{/number}',
      pulls_url: 'https://api.github.com/repos/alcfeoh/angular/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/angular/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/angular/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/alcfeoh/angular/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/angular/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/angular/deployments',
      created_at: '2018-05-09T03:41:26Z',
      updated_at: '2018-05-09T03:41:44Z',
      pushed_at: '2022-11-12T01:09:53Z',
      git_url: 'git://github.com/alcfeoh/angular.git',
      ssh_url: 'git@github.com:alcfeoh/angular.git',
      clone_url: 'https://github.com/alcfeoh/angular.git',
      svn_url: 'https://github.com/alcfeoh/angular',
      homepage: 'https://angular.io',
      size: 280230,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 803510330,
      node_id: 'R_kgDOL-SYOg',
      name: 'angular-hub',
      full_name: 'alcfeoh/angular-hub',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/angular-hub',
      description: 'Curated list of Angular events and communities',
      fork: true,
      url: 'https://api.github.com/repos/alcfeoh/angular-hub',
      forks_url: 'https://api.github.com/repos/alcfeoh/angular-hub/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/angular-hub/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/angular-hub/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/angular-hub/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/angular-hub/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/angular-hub/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/angular-hub/deployments',
      created_at: '2024-05-20T21:29:25Z',
      updated_at: '2024-06-03T18:08:21Z',
      pushed_at: '2024-05-29T01:00:28Z',
      git_url: 'git://github.com/alcfeoh/angular-hub.git',
      ssh_url: 'git@github.com:alcfeoh/angular-hub.git',
      clone_url: 'https://github.com/alcfeoh/angular-hub.git',
      svn_url: 'https://github.com/alcfeoh/angular-hub',
      homepage: 'https://angular-hub.com/',
      size: 2420,
      stargazers_count: 1,
      watchers_count: 1,
      language: undefined,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: 'main',
    },
    {
      id: 43450774,
      node_id: 'MDEwOlJlcG9zaXRvcnk0MzQ1MDc3NA==',
      name: 'angular-talks',
      full_name: 'alcfeoh/angular-talks',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/angular-talks',
      description: undefined,
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/angular-talks',
      forks_url: 'https://api.github.com/repos/alcfeoh/angular-talks/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/angular-talks/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/angular-talks/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/angular-talks/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/angular-talks/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/angular-talks/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/angular-talks/deployments',
      created_at: '2015-09-30T18:22:40Z',
      updated_at: '2020-09-28T21:20:30Z',
      pushed_at: '2017-07-27T14:30:26Z',
      git_url: 'git://github.com/alcfeoh/angular-talks.git',
      ssh_url: 'git@github.com:alcfeoh/angular-talks.git',
      clone_url: 'https://github.com/alcfeoh/angular-talks.git',
      svn_url: 'https://github.com/alcfeoh/angular-talks',
      homepage: undefined,
      size: 11114,
      stargazers_count: 2,
      watchers_count: 2,
      language: undefined,
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 1,
      open_issues: 0,
      watchers: 2,
      default_branch: 'master',
    },
    {
      id: 42966083,
      node_id: 'MDEwOlJlcG9zaXRvcnk0Mjk2NjA4Mw==',
      name: 'angular-weather',
      full_name: 'alcfeoh/angular-weather',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/angular-weather',
      description:
        'A small demo app that showcases most of Angular JS features',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/angular-weather',
      forks_url: 'https://api.github.com/repos/alcfeoh/angular-weather/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/angular-weather/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/angular-weather/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/angular-weather/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/angular-weather/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/angular-weather/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/angular-weather/deployments',
      created_at: '2015-09-22T23:10:25Z',
      updated_at: '2017-03-18T09:50:22Z',
      pushed_at: '2015-10-28T23:34:01Z',
      git_url: 'git://github.com/alcfeoh/angular-weather.git',
      ssh_url: 'git@github.com:alcfeoh/angular-weather.git',
      clone_url: 'https://github.com/alcfeoh/angular-weather.git',
      svn_url: 'https://github.com/alcfeoh/angular-weather',
      homepage: undefined,
      size: 160,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'ApacheConf',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 4,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'gpl-2.0',
        name: 'GNU General Public License v2.0',
        spdx_id: 'GPL-2.0',
        url: 'https://api.github.com/licenses/gpl-2.0',
        node_id: 'MDc6TGljZW5zZTg=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 4,
      open_issues: 0,
      watchers: 1,
      default_branch: 'master',
    },
    {
      id: 792077057,
      node_id: 'R_kgDOLzYjAQ',
      name: 'apollo-graphql-backend',
      full_name: 'alcfeoh/apollo-graphql-backend',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/apollo-graphql-backend',
      description: undefined,
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/apollo-graphql-backend',
      forks_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/teams',
      hooks_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/apollo-graphql-backend/deployments',
      created_at: '2024-04-25T23:45:23Z',
      updated_at: '2024-04-29T18:26:46Z',
      pushed_at: '2024-04-29T18:26:43Z',
      git_url: 'git://github.com/alcfeoh/apollo-graphql-backend.git',
      ssh_url: 'git@github.com:alcfeoh/apollo-graphql-backend.git',
      clone_url: 'https://github.com/alcfeoh/apollo-graphql-backend.git',
      svn_url: 'https://github.com/alcfeoh/apollo-graphql-backend',
      homepage: undefined,
      size: 18,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 660363760,
      node_id: 'R_kgDOJ1xZ8A',
      name: 'at-accelerator',
      full_name: 'alcfeoh/at-accelerator',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/at-accelerator',
      description: 'Code repo for the Angular Accelerator program',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/at-accelerator',
      forks_url: 'https://api.github.com/repos/alcfeoh/at-accelerator/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/at-accelerator/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/at-accelerator/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/at-accelerator/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/at-accelerator/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/at-accelerator/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/at-accelerator/deployments',
      created_at: '2023-06-29T20:58:27Z',
      updated_at: '2024-08-17T13:39:12Z',
      pushed_at: '2024-07-31T22:40:29Z',
      git_url: 'git://github.com/alcfeoh/at-accelerator.git',
      ssh_url: 'git@github.com:alcfeoh/at-accelerator.git',
      clone_url: 'https://github.com/alcfeoh/at-accelerator.git',
      svn_url: 'https://github.com/alcfeoh/at-accelerator',
      homepage: '',
      size: 602,
      stargazers_count: 3,
      watchers_count: 3,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 10,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 10,
      open_issues: 1,
      watchers: 3,
      default_branch: 'main',
    },
    {
      id: 256366379,
      node_id: 'MDEwOlJlcG9zaXRvcnkyNTYzNjYzNzk=',
      name: 'bulma-fun',
      full_name: 'alcfeoh/bulma-fun',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/bulma-fun',
      description: 'Created with StackBlitz ⚡️',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/bulma-fun',
      forks_url: 'https://api.github.com/repos/alcfeoh/bulma-fun/forks',
      keys_url: 'https://api.github.com/repos/alcfeoh/bulma-fun/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/bulma-fun/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/bulma-fun/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/bulma-fun/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/bulma-fun/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/alcfeoh/bulma-fun/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/bulma-fun/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/alcfeoh/bulma-fun/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/bulma-fun/deployments',
      created_at: '2020-04-17T01:03:28Z',
      updated_at: '2020-04-17T01:04:11Z',
      pushed_at: '2020-04-17T01:04:09Z',
      git_url: 'git://github.com/alcfeoh/bulma-fun.git',
      ssh_url: 'git@github.com:alcfeoh/bulma-fun.git',
      clone_url: 'https://github.com/alcfeoh/bulma-fun.git',
      svn_url: 'https://github.com/alcfeoh/bulma-fun',
      homepage: 'https://stackblitz.com/edit/bulma-fun',
      size: 5,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 138645662,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzg2NDU2NjI=',
      name: 'Conferences',
      full_name: 'alcfeoh/Conferences',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/Conferences',
      description: 'List of conferences with links for speakers.',
      fork: true,
      url: 'https://api.github.com/repos/alcfeoh/Conferences',
      forks_url: 'https://api.github.com/repos/alcfeoh/Conferences/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/Conferences/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/Conferences/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/Conferences/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/Conferences/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/Conferences/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/Conferences/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/Conferences/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/Conferences/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/Conferences/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/Conferences/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/Conferences/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/Conferences/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/Conferences/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/Conferences/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/Conferences/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/Conferences/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/Conferences/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/Conferences/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/Conferences/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/Conferences/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/Conferences/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/Conferences/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/Conferences/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/Conferences/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/Conferences/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/Conferences/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/Conferences/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/Conferences/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/Conferences/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/Conferences/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/Conferences/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/Conferences/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/Conferences/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/Conferences/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/Conferences/deployments',
      created_at: '2018-06-25T20:20:05Z',
      updated_at: '2018-06-25T20:20:06Z',
      pushed_at: '2018-06-25T20:23:14Z',
      git_url: 'git://github.com/alcfeoh/Conferences.git',
      ssh_url: 'git@github.com:alcfeoh/Conferences.git',
      clone_url: 'https://github.com/alcfeoh/Conferences.git',
      svn_url: 'https://github.com/alcfeoh/Conferences',
      homepage: 'https://yonet.github.io/Conferences/',
      size: 20,
      stargazers_count: 0,
      watchers_count: 0,
      language: undefined,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 296158481,
      node_id: 'MDEwOlJlcG9zaXRvcnkyOTYxNTg0ODE=',
      name: 'covid-map-project',
      full_name: 'alcfeoh/covid-map-project',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/covid-map-project',
      description: undefined,
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/covid-map-project',
      forks_url: 'https://api.github.com/repos/alcfeoh/covid-map-project/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/covid-map-project/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/covid-map-project/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/covid-map-project/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/covid-map-project/deployments',
      created_at: '2020-09-16T22:10:38Z',
      updated_at: '2020-09-17T16:03:35Z',
      pushed_at: '2020-09-17T16:00:48Z',
      git_url: 'git://github.com/alcfeoh/covid-map-project.git',
      ssh_url: 'git@github.com:alcfeoh/covid-map-project.git',
      clone_url: 'https://github.com/alcfeoh/covid-map-project.git',
      svn_url: 'https://github.com/alcfeoh/covid-map-project',
      homepage: undefined,
      size: 4,
      stargazers_count: 2,
      watchers_count: 2,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 1,
      open_issues: 0,
      watchers: 2,
      default_branch: 'master',
    },
    {
      id: 251397235,
      node_id: 'MDEwOlJlcG9zaXRvcnkyNTEzOTcyMzU=',
      name: 'data-mocks',
      full_name: 'alcfeoh/data-mocks',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/data-mocks',
      description: 'Library to mock local data requests using Fetch or XHR',
      fork: true,
      url: 'https://api.github.com/repos/alcfeoh/data-mocks',
      forks_url: 'https://api.github.com/repos/alcfeoh/data-mocks/forks',
      keys_url: 'https://api.github.com/repos/alcfeoh/data-mocks/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/data-mocks/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/data-mocks/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/data-mocks/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/data-mocks/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/data-mocks/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/data-mocks/deployments',
      created_at: '2020-03-30T18:42:57Z',
      updated_at: '2020-03-30T18:42:59Z',
      pushed_at: '2020-03-30T18:43:50Z',
      git_url: 'git://github.com/alcfeoh/data-mocks.git',
      ssh_url: 'git@github.com:alcfeoh/data-mocks.git',
      clone_url: 'https://github.com/alcfeoh/data-mocks.git',
      svn_url: 'https://github.com/alcfeoh/data-mocks',
      homepage: '',
      size: 676,
      stargazers_count: 0,
      watchers_count: 0,
      language: undefined,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 744248553,
      node_id: 'R_kgDOLFxU6Q',
      name: 'developers-conferences-agenda',
      full_name: 'alcfeoh/developers-conferences-agenda',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/developers-conferences-agenda',
      description:
        "This repository list a maximum of tech conferences's date and CFP in order to help conferences organizers, speakers & attendees",
      fork: true,
      url: 'https://api.github.com/repos/alcfeoh/developers-conferences-agenda',
      forks_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/teams',
      hooks_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/developers-conferences-agenda/deployments',
      created_at: '2024-01-16T22:56:55Z',
      updated_at: '2024-01-16T22:56:55Z',
      pushed_at: '2024-01-16T22:59:27Z',
      git_url: 'git://github.com/alcfeoh/developers-conferences-agenda.git',
      ssh_url: 'git@github.com:alcfeoh/developers-conferences-agenda.git',
      clone_url: 'https://github.com/alcfeoh/developers-conferences-agenda.git',
      svn_url: 'https://github.com/alcfeoh/developers-conferences-agenda',
      homepage: 'https://developers.events/',
      size: 46276,
      stargazers_count: 0,
      watchers_count: 0,
      language: undefined,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 111723928,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTE3MjM5Mjg=',
      name: 'di-backbone-js',
      full_name: 'alcfeoh/di-backbone-js',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/di-backbone-js',
      description: "Backbone JS training for Macy's (Develop Intelligence)",
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/di-backbone-js',
      forks_url: 'https://api.github.com/repos/alcfeoh/di-backbone-js/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/di-backbone-js/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/di-backbone-js/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/di-backbone-js/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/di-backbone-js/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/di-backbone-js/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/di-backbone-js/deployments',
      created_at: '2017-11-22T19:23:46Z',
      updated_at: '2019-05-16T21:29:38Z',
      pushed_at: '2018-09-13T18:34:59Z',
      git_url: 'git://github.com/alcfeoh/di-backbone-js.git',
      ssh_url: 'git@github.com:alcfeoh/di-backbone-js.git',
      clone_url: 'https://github.com/alcfeoh/di-backbone-js.git',
      svn_url: 'https://github.com/alcfeoh/di-backbone-js',
      homepage: undefined,
      size: 176,
      stargazers_count: 2,
      watchers_count: 2,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 2,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'other',
        name: 'Other',
        spdx_id: 'NOASSERTION',
        url: undefined,
        node_id: 'MDc6TGljZW5zZTA=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 2,
      open_issues: 0,
      watchers: 2,
      default_branch: 'master',
    },
    {
      id: 110020735,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTAwMjA3MzU=',
      name: 'di-node-js',
      full_name: 'alcfeoh/di-node-js',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/di-node-js',
      description: 'Node.JS training (2 days)',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/di-node-js',
      forks_url: 'https://api.github.com/repos/alcfeoh/di-node-js/forks',
      keys_url: 'https://api.github.com/repos/alcfeoh/di-node-js/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/di-node-js/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/di-node-js/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/di-node-js/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/di-node-js/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/di-node-js/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/di-node-js/deployments',
      created_at: '2017-11-08T19:27:39Z',
      updated_at: '2024-12-06T00:13:27Z',
      pushed_at: '2024-12-06T00:13:26Z',
      git_url: 'git://github.com/alcfeoh/di-node-js.git',
      ssh_url: 'git@github.com:alcfeoh/di-node-js.git',
      clone_url: 'https://github.com/alcfeoh/di-node-js.git',
      svn_url: 'https://github.com/alcfeoh/di-node-js',
      homepage: '',
      size: 230,
      stargazers_count: 7,
      watchers_count: 7,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 8,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 8,
      open_issues: 0,
      watchers: 7,
      default_branch: 'master',
    },
    {
      id: 108068514,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMDgwNjg1MTQ=',
      name: 'di-responsive-js',
      full_name: 'alcfeoh/di-responsive-js',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/di-responsive-js',
      description: "Responsive JS training for Macy's (Develop Intelligence)",
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/di-responsive-js',
      forks_url: 'https://api.github.com/repos/alcfeoh/di-responsive-js/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/di-responsive-js/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/di-responsive-js/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/di-responsive-js/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/di-responsive-js/deployments',
      created_at: '2017-10-24T02:45:43Z',
      updated_at: '2017-10-24T02:50:03Z',
      pushed_at: '2017-11-10T19:37:44Z',
      git_url: 'git://github.com/alcfeoh/di-responsive-js.git',
      ssh_url: 'git@github.com:alcfeoh/di-responsive-js.git',
      clone_url: 'https://github.com/alcfeoh/di-responsive-js.git',
      svn_url: 'https://github.com/alcfeoh/di-responsive-js',
      homepage: undefined,
      size: 7,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 395799952,
      node_id: 'MDEwOlJlcG9zaXRvcnkzOTU3OTk5NTI=',
      name: 'docs-product',
      full_name: 'alcfeoh/docs-product',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/docs-product',
      description: 'OutSystems 11 product documentation',
      fork: true,
      url: 'https://api.github.com/repos/alcfeoh/docs-product',
      forks_url: 'https://api.github.com/repos/alcfeoh/docs-product/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/docs-product/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/docs-product/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/docs-product/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/docs-product/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/docs-product/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/docs-product/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/docs-product/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/docs-product/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/docs-product/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/docs-product/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/docs-product/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/docs-product/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/docs-product/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/docs-product/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/docs-product/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/docs-product/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/docs-product/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/docs-product/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/docs-product/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/docs-product/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/docs-product/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/docs-product/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/docs-product/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/docs-product/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/docs-product/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/docs-product/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/docs-product/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/docs-product/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/docs-product/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/docs-product/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/docs-product/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/docs-product/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/docs-product/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/docs-product/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/docs-product/deployments',
      created_at: '2021-08-13T21:21:15Z',
      updated_at: '2021-08-13T21:21:16Z',
      pushed_at: '2021-08-13T16:12:56Z',
      git_url: 'git://github.com/alcfeoh/docs-product.git',
      ssh_url: 'git@github.com:alcfeoh/docs-product.git',
      clone_url: 'https://github.com/alcfeoh/docs-product.git',
      svn_url: 'https://github.com/alcfeoh/docs-product',
      homepage: 'http://success.outsystems.com/Documentation/11',
      size: 243904,
      stargazers_count: 0,
      watchers_count: 0,
      language: undefined,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'other',
        name: 'Other',
        spdx_id: 'NOASSERTION',
        url: undefined,
        node_id: 'MDc6TGljZW5zZTA=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 818448826,
      node_id: 'R_kgDOMMiJug',
      name: 'electron-sandbox',
      full_name: 'alcfeoh/electron-sandbox',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/electron-sandbox',
      description: undefined,
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/electron-sandbox',
      forks_url: 'https://api.github.com/repos/alcfeoh/electron-sandbox/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/electron-sandbox/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/electron-sandbox/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/electron-sandbox/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/electron-sandbox/deployments',
      created_at: '2024-06-21T22:10:23Z',
      updated_at: '2024-06-21T22:25:46Z',
      pushed_at: '2024-06-21T22:25:43Z',
      git_url: 'git://github.com/alcfeoh/electron-sandbox.git',
      ssh_url: 'git@github.com:alcfeoh/electron-sandbox.git',
      clone_url: 'https://github.com/alcfeoh/electron-sandbox.git',
      svn_url: 'https://github.com/alcfeoh/electron-sandbox',
      homepage: undefined,
      size: 225,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 700486064,
      node_id: 'R_kgDOKcCRsA',
      name: 'eslint-remote-tester',
      full_name: 'alcfeoh/eslint-remote-tester',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/eslint-remote-tester',
      description:
        'CLI tool for testing given ESlint rules against multiple repositories at once.',
      fork: true,
      url: 'https://api.github.com/repos/alcfeoh/eslint-remote-tester',
      forks_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/teams',
      hooks_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/eslint-remote-tester/deployments',
      created_at: '2023-10-04T17:25:57Z',
      updated_at: '2023-10-04T17:25:57Z',
      pushed_at: '2023-10-02T03:42:28Z',
      git_url: 'git://github.com/alcfeoh/eslint-remote-tester.git',
      ssh_url: 'git@github.com:alcfeoh/eslint-remote-tester.git',
      clone_url: 'https://github.com/alcfeoh/eslint-remote-tester.git',
      svn_url: 'https://github.com/alcfeoh/eslint-remote-tester',
      homepage: 'https://www.npmjs.com/package/eslint-remote-tester',
      size: 3551,
      stargazers_count: 0,
      watchers_count: 0,
      language: undefined,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 577958433,
      node_id: 'R_kgDOInLyIQ',
      name: 'express-rest-mirror',
      full_name: 'alcfeoh/express-rest-mirror',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/express-rest-mirror',
      description: undefined,
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/express-rest-mirror',
      forks_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/teams',
      hooks_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/express-rest-mirror/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/express-rest-mirror/deployments',
      created_at: '2022-12-13T23:19:48Z',
      updated_at: '2022-12-13T23:34:06Z',
      pushed_at: '2022-12-13T23:53:04Z',
      git_url: 'git://github.com/alcfeoh/express-rest-mirror.git',
      ssh_url: 'git@github.com:alcfeoh/express-rest-mirror.git',
      clone_url: 'https://github.com/alcfeoh/express-rest-mirror.git',
      svn_url: 'https://github.com/alcfeoh/express-rest-mirror',
      homepage: undefined,
      size: 23,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'gpl-3.0',
        name: 'GNU General Public License v3.0',
        spdx_id: 'GPL-3.0',
        url: 'https://api.github.com/licenses/gpl-3.0',
        node_id: 'MDc6TGljZW5zZTk=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 216195696,
      node_id: 'MDEwOlJlcG9zaXRvcnkyMTYxOTU2OTY=',
      name: 'flight-tracker-19',
      full_name: 'alcfeoh/flight-tracker-19',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/flight-tracker-19',
      description: 'Flight Tracker app built with Angular',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/flight-tracker-19',
      forks_url: 'https://api.github.com/repos/alcfeoh/flight-tracker-19/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/flight-tracker-19/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/flight-tracker-19/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/flight-tracker-19/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/flight-tracker-19/deployments',
      created_at: '2019-10-19T11:28:54Z',
      updated_at: '2020-02-13T14:43:15Z',
      pushed_at: '2019-10-20T06:35:35Z',
      git_url: 'git://github.com/alcfeoh/flight-tracker-19.git',
      ssh_url: 'git@github.com:alcfeoh/flight-tracker-19.git',
      clone_url: 'https://github.com/alcfeoh/flight-tracker-19.git',
      svn_url: 'https://github.com/alcfeoh/flight-tracker-19',
      homepage: undefined,
      size: 1562,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 1,
      open_issues: 0,
      watchers: 1,
      default_branch: 'master',
    },
    {
      id: 160895204,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNjA4OTUyMDQ=',
      name: 'frontend-confs',
      full_name: 'alcfeoh/frontend-confs',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/frontend-confs',
      description: 'Frontend Conferences for Speaking',
      fork: true,
      url: 'https://api.github.com/repos/alcfeoh/frontend-confs',
      forks_url: 'https://api.github.com/repos/alcfeoh/frontend-confs/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/frontend-confs/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/frontend-confs/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/frontend-confs/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/frontend-confs/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/frontend-confs/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/frontend-confs/deployments',
      created_at: '2018-12-08T02:11:22Z',
      updated_at: '2018-12-08T02:11:24Z',
      pushed_at: '2018-11-21T06:07:30Z',
      git_url: 'git://github.com/alcfeoh/frontend-confs.git',
      ssh_url: 'git@github.com:alcfeoh/frontend-confs.git',
      clone_url: 'https://github.com/alcfeoh/frontend-confs.git',
      svn_url: 'https://github.com/alcfeoh/frontend-confs',
      homepage: '',
      size: 141,
      stargazers_count: 0,
      watchers_count: 0,
      language: undefined,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 47599293,
      node_id: 'MDEwOlJlcG9zaXRvcnk0NzU5OTI5Mw==',
      name: 'gmap-plugin',
      full_name: 'alcfeoh/gmap-plugin',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/gmap-plugin',
      description: 'A Google Map plugin based on Angular JS and Firebase',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/gmap-plugin',
      forks_url: 'https://api.github.com/repos/alcfeoh/gmap-plugin/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/gmap-plugin/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/gmap-plugin/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/gmap-plugin/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/gmap-plugin/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/gmap-plugin/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/gmap-plugin/deployments',
      created_at: '2015-12-08T04:49:24Z',
      updated_at: '2016-01-12T02:22:12Z',
      pushed_at: '2016-02-02T02:14:47Z',
      git_url: 'git://github.com/alcfeoh/gmap-plugin.git',
      ssh_url: 'git@github.com:alcfeoh/gmap-plugin.git',
      clone_url: 'https://github.com/alcfeoh/gmap-plugin.git',
      svn_url: 'https://github.com/alcfeoh/gmap-plugin',
      homepage: undefined,
      size: 228,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'ApacheConf',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 763790062,
      node_id: 'R_kgDOLYaC7g',
      name: 'harry-potter-movies',
      full_name: 'alcfeoh/harry-potter-movies',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/harry-potter-movies',
      description: undefined,
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/harry-potter-movies',
      forks_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/teams',
      hooks_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/harry-potter-movies/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/harry-potter-movies/deployments',
      created_at: '2024-02-26T23:23:46Z',
      updated_at: '2024-02-28T06:12:19Z',
      pushed_at: '2024-05-30T18:46:49Z',
      git_url: 'git://github.com/alcfeoh/harry-potter-movies.git',
      ssh_url: 'git@github.com:alcfeoh/harry-potter-movies.git',
      clone_url: 'https://github.com/alcfeoh/harry-potter-movies.git',
      svn_url: 'https://github.com/alcfeoh/harry-potter-movies',
      homepage: undefined,
      size: 137,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 26,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 26,
      open_issues: 0,
      watchers: 1,
      default_branch: 'main',
    },
    {
      id: 298427046,
      node_id: 'MDEwOlJlcG9zaXRvcnkyOTg0MjcwNDY=',
      name: 'junit-training',
      full_name: 'alcfeoh/junit-training',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/junit-training',
      description: undefined,
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/junit-training',
      forks_url: 'https://api.github.com/repos/alcfeoh/junit-training/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/junit-training/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/junit-training/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/junit-training/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/junit-training/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/junit-training/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/junit-training/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/junit-training/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/junit-training/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/junit-training/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/junit-training/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/junit-training/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/junit-training/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/junit-training/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/junit-training/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/junit-training/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/junit-training/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/junit-training/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/junit-training/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/junit-training/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/junit-training/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/junit-training/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/junit-training/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/junit-training/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/junit-training/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/junit-training/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/junit-training/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/junit-training/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/junit-training/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/junit-training/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/junit-training/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/junit-training/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/junit-training/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/junit-training/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/junit-training/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/junit-training/deployments',
      created_at: '2020-09-25T00:31:10Z',
      updated_at: '2020-09-25T22:55:26Z',
      pushed_at: '2020-09-25T22:55:24Z',
      git_url: 'git://github.com/alcfeoh/junit-training.git',
      ssh_url: 'git@github.com:alcfeoh/junit-training.git',
      clone_url: 'https://github.com/alcfeoh/junit-training.git',
      svn_url: 'https://github.com/alcfeoh/junit-training',
      homepage: undefined,
      size: 16,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 913489854,
      node_id: 'R_kgDONnK_vg',
      name: 'lil-weather',
      full_name: 'alcfeoh/lil-weather',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/lil-weather',
      description: undefined,
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/lil-weather',
      forks_url: 'https://api.github.com/repos/alcfeoh/lil-weather/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/lil-weather/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/lil-weather/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/lil-weather/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/lil-weather/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/lil-weather/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/lil-weather/deployments',
      created_at: '2025-01-07T19:33:21Z',
      updated_at: '2025-01-23T00:34:15Z',
      pushed_at: '2025-03-14T20:01:46Z',
      git_url: 'git://github.com/alcfeoh/lil-weather.git',
      ssh_url: 'git@github.com:alcfeoh/lil-weather.git',
      clone_url: 'https://github.com/alcfeoh/lil-weather.git',
      svn_url: 'https://github.com/alcfeoh/lil-weather',
      homepage: undefined,
      size: 956,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 248607092,
      node_id: 'MDEwOlJlcG9zaXRvcnkyNDg2MDcwOTI=',
      name: 'lp-store-server',
      full_name: 'alcfeoh/lp-store-server',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/lp-store-server',
      description: 'A basic RESTful server for training purposes',
      fork: false,
      url: 'https://api.github.com/repos/alcfeoh/lp-store-server',
      forks_url: 'https://api.github.com/repos/alcfeoh/lp-store-server/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/lp-store-server/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/lp-store-server/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/issues/events{/number}',
      events_url: 'https://api.github.com/repos/alcfeoh/lp-store-server/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/lp-store-server/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/alcfeoh/lp-store-server/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/lp-store-server/deployments',
      created_at: '2020-03-19T21:18:47Z',
      updated_at: '2024-12-06T00:15:52Z',
      pushed_at: '2024-12-06T00:15:50Z',
      git_url: 'git://github.com/alcfeoh/lp-store-server.git',
      ssh_url: 'git@github.com:alcfeoh/lp-store-server.git',
      clone_url: 'https://github.com/alcfeoh/lp-store-server.git',
      svn_url: 'https://github.com/alcfeoh/lp-store-server',
      homepage: 'https://lp-store-server.vercel.app',
      size: 157,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 2,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 2,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 104360305,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMDQzNjAzMDU=',
      name: 'made-with-flexbox',
      full_name: 'alcfeoh/made-with-flexbox',
      private: false,
      owner: {
        login: 'alcfeoh',
        id: 4699771,
        node_id: 'MDQ6VXNlcjQ2OTk3NzE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/196309057?s=16&v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/alcfeoh',
        html_url: 'https://github.com/alcfeoh',
        followers_url: 'https://api.github.com/users/alcfeoh/followers',
        following_url:
          'https://api.github.com/users/alcfeoh/following{/other_user}',
        gists_url: 'https://api.github.com/users/alcfeoh/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/alcfeoh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/alcfeoh/subscriptions',
        organizations_url: 'https://api.github.com/users/alcfeoh/orgs',
        repos_url: 'https://api.github.com/users/alcfeoh/repos',
        events_url: 'https://api.github.com/users/alcfeoh/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/alcfeoh/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/alcfeoh/made-with-flexbox',
      description: 'Demonstration of layouts created using FlexBox',
      fork: true,
      url: 'https://api.github.com/repos/alcfeoh/made-with-flexbox',
      forks_url: 'https://api.github.com/repos/alcfeoh/made-with-flexbox/forks',
      keys_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/alcfeoh/made-with-flexbox/teams',
      hooks_url: 'https://api.github.com/repos/alcfeoh/made-with-flexbox/hooks',
      issue_events_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/events',
      assignees_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/branches{/branch}',
      tags_url: 'https://api.github.com/repos/alcfeoh/made-with-flexbox/tags',
      blobs_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/languages',
      stargazers_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/stargazers',
      contributors_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/contributors',
      subscribers_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/subscribers',
      subscription_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/subscription',
      commits_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/merges',
      archive_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/downloads',
      issues_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/labels{/name}',
      releases_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/alcfeoh/made-with-flexbox/deployments',
      created_at: '2017-09-21T14:42:49Z',
      updated_at: '2017-09-21T14:42:50Z',
      pushed_at: '2017-09-04T21:39:11Z',
      git_url: 'git://github.com/alcfeoh/made-with-flexbox.git',
      ssh_url: 'git@github.com:alcfeoh/made-with-flexbox.git',
      clone_url: 'https://github.com/alcfeoh/made-with-flexbox.git',
      svn_url: 'https://github.com/alcfeoh/made-with-flexbox',
      homepage: undefined,
      size: 1865,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'HTML',
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: undefined,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
  ];

  getRepositories(): Observable<Repository[]> {
    console.log(this.repositories);
    return of(this.repositories);
  }
}
