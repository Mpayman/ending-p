import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://www.technewsworld.com/wp-content/uploads/sites/3/2023/05/ai-brain.jpg"
          alt=" articalimage"
        />
      </div>
      <div className="texts">
        <h2>Microsoft’s 5-Point Blueprint for Public Governance of AI</h2>
        <p className="info">
          <a href="/#" className="author">
            Mark Williams
          </a>
          <time>09/06/2023</time>
        </p>
        <p className="summary">
          In the rapidly evolving world of AI, whom should we trust to govern
          its use? Microsoft presents intriguing answers in its "Governing AI: A
          Blueprint for the Future" report. Let's explore how they seek to
          balance this technology's potential with its risks
        </p>
      </div>
    </div>
  );
};

export default Post;
