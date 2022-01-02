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

export async function getAllPostIds() {
  let posts = await (await fetch("https://gta5carstrapi.herokuapp.com/api/cars")).json();
  posts = posts.data;

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 1
  //     }
  //   },
  //   {
  //     params: {
  //       id: 2
  //     }
  //   }
  // ]
  const postIDs = posts.map((post) => {
    const postId = post.id.toString();
    return {
      params: {
        id: postId,
      },
    };
  });
  return postIDs;
}

export async function getPostData(id) {
  let postByID = await (await fetch(`https://gta5carstrapi.herokuapp.com/api/cars/${id}`)).json();
  const post = postByID.data;

  // Combine the data with the id
  return {
    id,
    ...post,
  };
}
