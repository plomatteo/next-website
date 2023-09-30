export async function getAllProjectWorks () {
    const allProjectWorks = postsGenerator()
    const response = {
        data: {
            posts: {
                nodes: posts
            }
        }
    }
    return response
}