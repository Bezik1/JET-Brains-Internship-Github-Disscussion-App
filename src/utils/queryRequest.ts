export const queryRequest = (owner: string, repo: string) => `
    {
        repository(owner: "${owner}", name: "${repo}") {
        discussions(first: 10) {
            nodes {
            id
            title
            url
            comments {
                totalCount
            }
            reactions {
                totalCount
            }
            }
        }
        }
    }
`;