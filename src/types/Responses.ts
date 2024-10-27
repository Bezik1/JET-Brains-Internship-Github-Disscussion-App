export type RepoDataResponse = {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    created_at: string;
    updated_at: string;
    html_url: string;
}

export type IssueResponse = {
    id: number
    title: string
    html_url: string
    body: string
    comments_url: string
    created_at: string
    events_url: string
    reactions: Reactions
    repository_url: string
    state: string
    user: {
        id: number
        login: string
        avatar_url: string
    }
}

export type Reactions = {
    "+1": number,
    "-1": number,
    "confused": number,
    "eyes": number,
    "heart": number,
    "hooray": number,
    "laugh": number,
    "rocket": number,
    "total_count": number,
    url: string
}