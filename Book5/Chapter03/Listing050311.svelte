<script>
  import BlogPost from './lib/BlogPost.svelte';
</script>

<BlogPost>
  <div slot="header">This is the Header</div>

  Here's the body of the blog post

  <div slot="footer">Copyright, All rights reserved, etc.</div>
</BlogPost>
