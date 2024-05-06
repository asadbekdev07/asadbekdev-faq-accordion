// const elsAccordionItem = document.querySelectorAll(".accordion__item");
// const elsAccordionItemToggler = document.querySelectorAll(".accordion__item-toggler");

// function closeAccordionItems () {
//   elsAccordionItem.forEach(function (elAccordionItem) {
//     elAccordionItem.classList.remove("accordion__item--open");
//   });
// };

// elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
//   elAccordionItemToggler.addEventListener("click", function () {
//     closeAccordionItems();
//     elAccordionItemToggler.closest(".accordion__item").classList.add("accordion__item--open");
//     if (elsAccordionItem.classList.contains("accordion__item--open")) {
//       elAccordionItemToggler.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`
//     }
//   })
// })









// const elsAccordionItem = document.querySelectorAll(".accordion__item");
// const elsAccordionItemToggler = document.querySelectorAll(".accordion__item-toggler");

// function closeAccordionItems() {
//   elsAccordionItem.forEach(function (elAccordionItem) {
//     elAccordionItem.classList.remove("accordion__item--open");
//   });
// };

// elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
//   elAccordionItemToggler.addEventListener("click", function () {
//     closeAccordionItems();
//     const accordionItem = elAccordionItemToggler.closest(".accordion__item");
//     accordionItem.classList.add("accordion__item--open");
//     const isOpen = accordionItem.classList.contains("accordion__item--open");
//     if (isOpen) {
//       elAccordionItemToggler.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;
//     } else {
//       elsAccordionItemToggler.innerHTML = `
//       <svg class="accordion__item-toggler-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`
//     }
//   });
// });


const elsAccordionItem = document.querySelectorAll(".accordion__item");
const elsAccordionItemToggler = document.querySelectorAll(".accordion__item-toggler");

function closeAccordionItems() {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove("accordion__item--open");
  });
};

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener("click", function () {
    const accordionItem = elAccordionItemToggler.closest(".accordion__item");
    const isOpen = accordionItem.classList.contains("accordion__item--open");
    closeAccordionItems();
    if (!isOpen) {
      accordionItem.classList.add("accordion__item--open");
      elAccordionItemToggler.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;
    } else {
      accordionItem.classList.remove("accordion__item--open");
      elAccordionItemToggler.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`;
    }
  });
});
