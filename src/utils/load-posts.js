export const loadPosts = async () => {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');

    const posts = await postsResponse.json();
    const photos = await photosResponse.json();

    const addCover = (post, index) => ({
        ...post,
        cover: photos[index].url
    });

    return posts.map(addCover);
};
