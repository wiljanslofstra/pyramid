export default {
  style_formats: [
    { title: 'Heading 1', block: 'h1' },
    { title: 'Heading 2', block: 'h2' },
    { title: 'Heading 3', block: 'h3' },
  ],
  plugins: 'link image lists code paste autoresize',
  toolbar: 'undo redo | bold italic underline | bullist numlist | styleselect removeformat | link | code',
  elementpath: false,
  menubar: false,
  min_height: 150,
  content_css: '/dist/editor.css',
  rel_list: [
    { title: 'noopener', value: 'noopener' },
    { title: 'nofollow', value: 'nofollow' },
  ],
  paste_word_valid_elements: 'b,strong,i,em,h1,h2,h3,h4',
  autoresize_bottom_margin: 0,
  autoresize_min_height: 180,
  autoresize_max_height: 800,
};
