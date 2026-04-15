// Tag filter (home sidebar)
const tagBtns = document.querySelectorAll('.tag-btn');
const postRows = document.querySelectorAll('.post-row[data-tags]');

tagBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tagBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tag = btn.dataset.tag;
    postRows.forEach(row => {
      if (tag === 'all') {
        row.style.display = '';
      } else {
        const tags = row.dataset.tags.split(',');
        row.style.display = tags.includes(tag) ? '' : 'none';
      }
    });
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

