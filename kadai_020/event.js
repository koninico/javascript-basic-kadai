const change = document.getElementById('btn');

change.addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('text').innerHTML = 'ボタンをクリックしました';
  },2000);
});


