import React, {useEffect} from 'react';


function CreatePost(){


return(


    <form>
    <div class="form-group">
      <label for="post-title" class="text-muted mb-1">
        <small>Title</small>
      </label>
      <input autofocus name="title" id="post-title" class="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
    </div>

    <div class="form-group">
      <label for="post-body" class="text-muted mb-1 d-block">
        <small>Body Content</small>
      </label>
      <textarea name="body" id="post-body" class="body-content tall-textarea form-control" type="text"></textarea>
    </div>

    <button class="btn btn-primary">Save New Post</button>
  </form>



)




}


export default CreatePost;