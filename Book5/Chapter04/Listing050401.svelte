<script>
  function alertMe() {
    alert(
      "Do not use semicolons. All they do is show you've been to college. - Kurt Vonnegut"
    );
  }
</script>

<textarea
  on:keypress={(e) => {
    if (e.key === ';') {
      alertMe();
    }
  }}
/>
