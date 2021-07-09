

function hoverMenuItem() {

  const selectMenu = document.querySelectorAll('li')
  const atvClass = 'ativo'

  function itemHover() {
    selectMenu.forEach((e) => {
      e.classList.remove(atvClass)
    })
    this.classList.add(atvClass)

  }

  selectMenu.forEach((e) => {
    e.addEventListener('mouseenter', itemHover)
  })


}

hoverMenuItem()

function InitAnimaScroll() {
  const sectionScroll = document.querySelectorAll(".js-scroll");
  const metadetela = window.innerHeight * 0.7;

  if (sectionScroll.length) {
    function animaScroll() {
      sectionScroll.forEach((e) => {
        const sectiontop = e.getBoundingClientRect().top;
        const sectionaparece = sectiontop - metadetela < 0;
        if (sectionaparece) {
          e.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}

InitAnimaScroll();
