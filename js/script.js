/* 다크모드 토글 */
let toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('change', () => {
  if (toggleBtn.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});
/* 타이핑 */
  const text = "Keep Going !";
  const typingTarget = document.getElementById("typing-text");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingTarget.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 150); // 타이핑 속도 (ms)
    }
  }

  // 페이지 로드 후 타이핑 시작
  window.addEventListener("DOMContentLoaded", typeEffect);

/* 프로젝트 필터 */
document.addEventListener('DOMContentLoaded', () => {
  let btns = document.querySelectorAll('.projects-btns button');
  let projects = document.querySelectorAll('.projects-wrap .project');
  function filterProjects(filter) {
    projects.forEach(project => {
      const tags = Array.from(project.querySelectorAll('.project-tag span')).map(span => span.textContent.trim());
      project.style.display = (filter === 'All' || tags.includes(filter)) ? 'block' : 'none';
    });
  }
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      /* 버튼 active 클래스 토글 */
      btns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      let filter = e.currentTarget.getAttribute('data-filter');
      filterProjects(filter);
    });
  });
  /* All 버튼 active, 전체 프로젝트 */
  let allBtn = document.querySelector('.projects-btns button[data-filter="All"]');
  if (allBtn) {
    allBtn.classList.add('active');
    filterProjects('All');
  }
});

