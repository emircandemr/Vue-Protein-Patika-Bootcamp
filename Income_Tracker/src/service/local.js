
export const getLocalPosts = () => {
    const data = localStorage.getItem('posts');
    const posts = JSON.parse(data);
    return posts;
}
  
export const saveLocalPost = post => {
    const data = localStorage.getItem('posts');
    let posts = JSON.parse(data);
    posts = posts.concat(post);
    localStorage.setItem('posts', posts);

return posts;
}