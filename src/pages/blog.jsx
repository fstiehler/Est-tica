import React from "react";
import "./blog.css";
import Teste from "../images/blog/post1.jpeg";

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="texto">Meu Blog</h1>
      <div className="posts">
        <div className="post">
          <h2 className="title">Meu primeiro post</h2>
          <img className="imagem" src={Teste} alt="Meu primeiro post" />
          <p className="subTitle">teteteteteteetet</p>
        </div>
        <div className="post">
          <h2 className="title">Meu segundo post</h2>
          <img className="imagem" src={Teste} alt="Meu segundo post" />
          <p className="subTitle">teteteteteteetet</p>
        </div>
        <div className="post">
          <h2 className="title">Meu terceiro post</h2>
          <img className="imagem" src={Teste} alt="Meu terceiro post" />
          <p className="subTitle">teteteteteteetet</p>
        </div>
        <div className="post">
          <h2 className="title">Meu quarto post</h2>
          <img className="imagem" src={Teste} alt="Meu primeiro post" />
          <p className="subTitle">teteteteteteetet</p>
        </div>
        <div className="post">
          <h2 className="title">Meu quinto post</h2>
          <img className="imagem" src={Teste} alt="Meu segundo post" />
          <p className="subTitle">teteteteteteetet</p>
        </div>
        <div className="post">
          <h2 className="title">Meu sexto post</h2>
          <img className="imagem" src={Teste} alt="Meu terceiro post" />
          <p className="subTitle">teteteteteteetet</p>
        </div>
        <div className="post">
          <h2 className="title">Meu setimo post</h2>
          <img className="imagem" src={Teste} alt="Meu primeiro post" />
          <p className="subTitle">teteteteteteetet</p>
        </div>
        <div className="post">
          <h2 className="title">Meu oitavo post</h2>
          <img className="imagem" src={Teste} alt="Meu segundo post" />
          <p className="subTitle">teteteteteteetet</p>
        </div>
        <div className="post">
          <h2 className="title">Meu nono post</h2>
          <img className="imagem" src={Teste} alt="Meu terceiro post" />
          <p className="subTitle">teteteteteteetet</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
