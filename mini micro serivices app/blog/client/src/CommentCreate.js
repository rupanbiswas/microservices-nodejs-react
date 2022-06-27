import React, { useState } from 'react';

export default ({ postId }) => {
  const [content, setContent] = useState('');

  return (
    <div>
      <form>
        <div className='form-group'>
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='form-control'
          ></input>
        </div>
        <button className='btn btn-primary'>submit</button>
      </form>
    </div>
  );
};
