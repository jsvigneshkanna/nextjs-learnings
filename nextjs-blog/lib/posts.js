import matter from "gray-matter";

export async function getAllPost() {
  let posts = await (await fetch("https://gta5carstrapi.herokuapp.com/api/cars")).json();
  posts = posts.data;
  let allPost = posts.map((post) => {
    const id = post.id;
    const attributesData = post.attributes;
    const { Name, Description, Price, createdAt } = attributesData;
    return {
      id,
      Name,
      Description,
      Price,
      createdAt,
    };
  });
  return allPost;
}
